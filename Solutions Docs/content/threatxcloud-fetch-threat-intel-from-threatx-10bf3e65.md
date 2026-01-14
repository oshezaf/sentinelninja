# Fetch Threat Intel from ThreatX

This playbook provides/updates the threat intel and essential details in comments section of triggered incident so that SOC analysts can directly take corrective measure to stop the attack

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ThreatXCloud](../solutions/threatxcloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatXCloud/Playbooks/ThreatXPlaybooks/ThreatX-Enrichment/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [ThreatXPlaybooks/ThreatX-Enrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatXCloud/Playbooks/ThreatXPlaybooks/ThreatX-Enrichment/readme.md)*

# ThreatX-enrichment Info Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Fetches the list of Ip's from incident entites .
 2. Make the APi call to get the latest threat information/details from cloud console and update the same incidents comments with result.


### Prerequisites 
1. ThreatX-WAFCustomConnector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, login into your ThreatX cloud instance dashboard and navigate to Settings --> API Key --> Add API Key.
3. [Important Steps] Store the API secret key in Key vault and provide the key name of the stored secret during deployment

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FThreatXCloud%2FPlaybooks%2FThreatXPlaybooks%2FThreatX-encrichment%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FThreatXCloud%2FPlaybooks%2F%2FThreatXPlaybooks%2FThreatX-encrichment%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex: ThreatX-enrichment).
    * Custom Connector Name: Enter the ThreatX custom connector name here (Ex: ThreatX-WAFCustomConnector).
    * Keyvault name: Enter the key vault name where secret key is stored.
    * Threatx Key name : Your Key name for the stored api secret.

### Post-Deployment instructions 
#### a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for ThreatX Api  Connection (For authorizing the ThreatX API connection, API Key needs to be provided)

#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky URL or IP Address. 
2. Configure the automation rules to trigger this playbook , mapping of IP and URL entities is necessary

#### c. Assign Playbook Microsoft Sentinel Responder Role
1. Select the Playbook (Logic App) resource
2. Click on Identity Blade
3. Choose Systen assigned tab
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
4. Under Secret permissions columun , Select Get , List from "Secret Management Operations"
5. Click next to go to Principal tab and choose your deployed playbook name
6. Click Next leave application tab as it is .
7. Click Review and create
8. Click Create

#  References
 - [Threatx support documentation](https://support.threatx.com/hc)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ThreatXCloud](../solutions/threatxcloud.md)

