# Remediate assets on prisma cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook provides/updates the compliance security posture details of asset in comments section of triggered incident so that SOC analysts can directly take corrective measure to prevent the attack

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud/Playbooks/PrismaCloudCSPMPlaybooks/PrismaCloudCSPM-Remediation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `keyvault` | Managed | 0 | 1 |
| `teams` | Managed | 1 | 3 |
| `PrismaCloudCSPMCustomConnector` | Custom | 1 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent(parameters('PrismaSecretName'))}/value`

**`teams`** (managedApi):
- *Update_an_adaptive_card_in_a_chat_or_channel*: method=`post`, path=`/v1.0/teams/conversation/updateAdaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Update_an_adaptive_card_in_a_chat_or_channel_2*: method=`post`, path=`/v1.0/teams/conversation/updateAdaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Update_an_adaptive_card_in_a_chat_or_channel_3*: method=`post`, path=`/v1.0/teams/conversation/updateAdaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

**`PrismaCloudCSPMCustomConnector`** (customApi):
- *List_Remediation_command*: method=`post`, path=`/alert/remediation`
- *List_Alerts*: method=`get`, path=`/alert`
- *Remediate_Alert*: method=`patch`, path=`/alert/remediation/@{encodeURIComponent(items('For_each_2_-_fetching_response_from_teams_channel_and_taking_action')['Alert id'])}`
- *Login_Generate_Token*: method=`post`, path=`/login`

</details>

## Additional Documentation

> 📄 *Source: [PrismaCloudCSPMPlaybooks/PrismaCloudCSPM-Remediation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud/Playbooks/PrismaCloudCSPMPlaybooks/PrismaCloudCSPM-Remediation/readme.md)*

# PrismaCloudCSPM-Remediation Info Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Fetches the list of assets from incident entities .
 2. Make the API call to get the latest alert lists of provided assets from cloud console and then post the message on teams channel and wait for the user input and then act accordingly later update the same incidents comments with remediation result.
 3. Note : Asset column for which the remediation needs to be done, should be mapped with hostname entity while creating analytics rule. 


### Prerequisites 
 1. PrismaCloudCSPM Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
 2. API Key and User ID . To get this, login into your Prisma cloud instance dashboard and navigate to Settings --> Access Control --> Access Keys --> Add
 3. TeamsID and channelID of your tenant is needed for posting messages on Microsoft teams",
 4. [Important step]Store the API secret key in Key vault then provide the keyvault name and key name of the stored secret during deployment

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FPaloAltoPrismaCloud%2FPlaybooks%2FPrismaCloudCSPMPlaybooks%2FPrismaCloudCSPM-Remediation%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FPaloAltoPrismaCloud%2FPlaybooks%2FPrismaCloudCSPMPlaybooks%2FPrismaCloudCSPM-Remediation%2Fazuredeploy.json)

2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here (Ex: PrismaCloudCSPM-Enrichment).
    * Custom Connector Name: Enter the Prisma cloud custom connector name here (Ex: PrismaCloudCSPMCustomConnector).
    * Keyvault name: Enter the key vault name where secret key is stored.
    * Prisma Secret Name : Your Key name for the stored API secret.
	* Prisma User ID : Enter the prisma user id.
	* TeamsID : Enter value for TeamsID
	* ChannelID : Enter value for Teams ChannelID

### Post-Deployment instructions 
#### a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for playbooks other API Connection.

#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky asset. 
2. Configure the automation rules to trigger this playbook , mapping of hostname entity is necessary

#### c. Assign Playbook Microsoft Sentinel Responder Role
1. Select the Playbook (Logic App) resource
2. Click on Identity Blade
3. Choose System assigned tab
4. Click on Azure role assignments
5. Click on Add role assignments
6. Select Scope - Resource group
7. Select Subscription - where Playbook has been created
8. Select Resource group - where Playbook has been created
9. Select Role - Microsoft Sentinel Responder
10. Click Save (It takes 3-5 minutes to show the added role.)

#### D. Assign access policy on key vault for Playbook to fetch the secret key
1. Select the Keyvault resource where you have stored the secret
2. Click on Access policies Blade
3. Click on Create
4. Under Secret permissions column , Select Get , List from "Secret Management Operations"
5. Click next to go to Principal tab and choose your deployed playbook name
6. Click Next leave application tab as it is .
7. Click Review and create
8. Click Create

#  References
 - [Prisma cloud support documentation](https://prisma.pan.dev/api/cloud/cspm/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to PaloAltoPrismaCloud](../solutions/paloaltoprismacloud.md)

