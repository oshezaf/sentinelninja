# CheckPhish - Get URL reputation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbooks will be used to submit URL to CheckPhish and gets the repution of URL (Scan result)

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [CheckPhish by Bolster](../solutions/checkphish-by-bolster.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CheckPhish%20by%20Bolster/Playbooks/CheckPhishPlaybooks/CheckPhsh-Get-URLScanResult/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `CheckPhishbyBolsterCustomConnector` | Custom | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`

**`CheckPhishbyBolsterCustomConnector`** (customApi):
- *Submit_URL*: method=`post`, path=`/api/neo/scan`
- *Get_Scan_Result*: method=`post`, path=`/api/neo/scan/status`

</details>

## Additional Documentation

> 📄 *Source: [CheckPhishPlaybooks/CheckPhsh-Get-URLScanResult/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CheckPhish%20by%20Bolster/Playbooks/CheckPhishPlaybooks/CheckPhsh-Get-URLScanResult/readme.md)*

# CheckPhish- Get Reputation of URL
 ## Summary
 
 Once a new sentinal incident is created, this playbook gets triggered and performs the following actions:

    1. Gets Information from CheckPhish by URL, provided in the alert custom entities.
    2. Enriches the incident with the obtained info.


![Incident Comment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CheckPhish%20by%20Bolster/Playbooks/CheckPhishPlaybooks%5CCheckPhsh-Get-URLScanResult/images/CheckPhishEnrichmentComment.png)<br>

![Playbook Designer view](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CheckPhish%20by%20Bolster/Playbooks/CheckPhishPlaybooks%5CCheckPhsh-Get-URLScanResult/images/CheckPhishFlow.png)<br>

### Prerequisites 
1. CheckPhishbyBolsterCustomConnector Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, login into CheckPhish portal and select APIKey from the left side menu.

### Deployment instructions 

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheckPhish%20by%20Bolster%2FPlaybooks%2FCheckPhishPlaybooks%2FCheckPhsh%2DGet%2DURLScanResult%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCheckPhish%20by%20Bolster%2FPlaybooks%2FCheckPhishPlaybooks%2FCheckPhsh%2DGet%2DURLScanResult%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex: CheckPhish-Get-URLScanResult)
    * Custom Connector Name: Enter the OpenCTI custom connector name here (Ex: CheckPhishbyBolsterCustomConnector)

    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Azure Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for CheckPhishbyBolsterCustomConnector Connection (For authorizing the CheckPhish API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. None

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to CheckPhish by Bolster](../solutions/checkphish-by-bolster.md)

