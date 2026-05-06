# O365 - Block Spam Domain

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook Provides the automation on blocking the suspicious/malicious attacker Domains

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365/Playbooks/O365DefenderPlaybooks/o365-BlockSpamDomain/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 0 | 1 |
| [`function`](../logic-apps/builtin-function.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `/secrets/@{encodeURIComponent(parameters('Certificate_key_name'))}/value` | — |

#### [`function`](../logic-apps/builtin-function.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| CreateSpamPolicy | — | — | functionId=`[concat(variables('o365FuntionsAppId'), '/functions/CreateSpamPolicy')]` |
| CreateSpamRule | — | — | functionId=`[concat(variables('o365FuntionsAppId'), '/functions/CreateSpamRule')]` |
| ConnectExchangeOnline | — | — | functionId=`[concat(variables('o365FuntionsAppId'), '/functions/ConnectExchangeOnline')]` |
| DisconnectExchangeOnline | — | — | functionId=`[concat(variables('o365FuntionsAppId'), '/functions/DisconnectExchangeOnline')]` |
| ListSpamPolicy | — | — | functionId=`[concat(variables('o365FuntionsAppId'), '/functions/ListSpamPolicy')]` |

</details>

## Additional Documentation

> 📄 *Source: [O365DefenderPlaybooks/o365-BlockSpamDomain/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365/Playbooks/O365DefenderPlaybooks/o365-BlockSpamDomain/readme.md)*

# o365-BlockSpamDomain Info Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Fetches the list of earlier blocked upnsuffix/domain .
 2. Fetches the new upnsuffix/domain from incidents and compare them with existing one and update the blacklist .
  
<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365/Playbooks/O365DefenderPlaybooks%5Co365-BlockSpamDomain/images/o365-BlockSpamDomain_light.jpg" width="50%"/><br>
<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365/Playbooks/O365DefenderPlaybooks%5Co365-BlockSpamDomain/images/o365-BlockSpamDomain_incidentcomment.jpg" width="50%"/><br>

### Prerequisites 
1. Defender for office 365 function app custom connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. Custom connector [readme.md](../../CustomConnector/O365_Defender_FunctionAppConnector/readme.md) file should be followed properly before using any of the Defender for office 365 playbooks.

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Defender%2520for%2520Office%2520365%2FPlaybooks%2FO365DefenderPlaybooks%2Fo365-BlockSpamDomain%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Defender%2520for%2520Office%2520365%2FPlaybooks%2FO365DefenderPlaybooks%2Fo365-BlockSpamDomain%2Fazuredeploy.json)

2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Applicationid: Enter the application ID , which you got during app registration.
    * Organization Name : Enter the organization name (ex : abc@pay.onmicrosoft.com then orgname will be : pay.onmicrosoft.com).
	* Key vault name : Your Key vault name where certificate thumbprint is saved. 
	* Certificate_key_name : Your secret key name under which certificate thumbprint is stored.
	* Functions App Name : Enter your function app name (Default : o365def ,Recommend : don’t change it)


### Post-Deployment instructions 
#### a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for all connections
#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky Account.
2. Configure the automation rules to trigger this playbook, mapping of Account is necessary
3. Refer to Screenshot below

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20for%20Office%20365/Playbooks/O365DefenderPlaybooks%5Co365-BlockSpamDomain/images/o365-BlockSpamDomain_entityMapping.jpg" width="50%"/><br>
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
#### d. Assign access policy on key vault for Playbook to fetch the secret key
1. Select the Keyvault resource where you have stored the secret
2. Click on Access policies Blade
3. Click on Create
4. Under Secret permissions column , Select Get , List from "Secret Management Operations"
5. Click next to go to Principal tab and choose your deployed playbook name
6. Click Next leave application tab as it is .
7. Click Review and create
8. Click Create

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Defender for Office 365](../solutions/microsoft-defender-for-office-365.md)

