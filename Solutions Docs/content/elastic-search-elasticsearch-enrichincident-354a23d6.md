# ElasticSearch-EnrichIncident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook search in Elastic Search for based on the entities (Account, Host, IP, FileHash, URL) present result to Microsoft Sentinel incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Elastic Search](../solutions/elastic-search.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Elastic%20Search/Playbooks/ElasticSearchPlaybooks/ElasticSearch-EnrichIncident/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 7 |
| [`ElasticSearchCustomConnector`](../logic-apps/custom-elasticsearchcustomconnector.md) | Custom | 1 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Entities_-_Get_FileHashes | post | `/entities/filehash` | — |
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`ElasticSearchCustomConnector`](../logic-apps/custom-elasticsearchcustomconnector.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_Search_Account | post | `/@{encodeURIComponent(variables('ElasticIndex'))}/_search` | — |
| Run_Search_FileHash | post | `/@{encodeURIComponent(variables('ElasticIndex'))}/_search` | — |
| Run_Search_Host | post | `/@{encodeURIComponent(variables('ElasticIndex'))}/_search` | — |
| Run_Search | post | `/@{encodeURIComponent(variables('ElasticIndex'))}/_search` | — |
| Run_Search_URL | post | `/@{encodeURIComponent(variables('ElasticIndex'))}/_search` | — |
| Search_Shards | get | `/@{encodeURIComponent('*')}/_search_shards` | — |

</details>

## Additional Documentation

> 📄 *Source: [ElasticSearchPlaybooks/ElasticSearch-EnrichIncident/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Elastic%20Search/Playbooks/ElasticSearchPlaybooks/ElasticSearch-EnrichIncident/readme.md)*

## Summary
 When a new Azure Sentinel incident is created, this playbook gets triggered and performs below actions
 1. For each Entity (Accounts, Host, IP Address, FileHash, URL) available in Sentinel incident, it searches for a match in Elastic Search
 2. If it finds the match, this playbook adds a rich comment to the incident with all the collected information
    ![Comment example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Elastic%20Search/Playbooks/ElasticSearchPlaybooks%5CElasticSearch-EnrichIncident/images/CommentElasticSearch_EnrichIncident.png)



![Playbook Designer view](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Elastic%20Search/Playbooks/ElasticSearchPlaybooks%5CElasticSearch-EnrichIncident/images/EnrichIndicentElasticSearchWorkflow.png)<br>

### Prerequisites 
1. Elastic Search Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, login into your Elastic Search instance / Kibana  and navigate to API Keys and generated key.To get Elastic Search API key, follow the instructions in the [documentation](https://www.elastic.co/guide/en/kibana/master/api-keys.html).

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deplyoing an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FElastic%2520Search%2FPlaybooks%2FElasticSearchPlaybooks%2FElasticSearch-EnrichIncident%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FElastic%2520Search%2FPlaybooks%2FElasticSearchPlaybooks%2FElasticSearch-EnrichIncident%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex: ElasticSearch-EnrichIncident)
    * Custom Connector Name: Enter the Elastic Search custom connector name here (Ex: ElasticSearchCustomConnector)
    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Azure Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for Elastic Search Api  Connection (For authorizing the Elastic Search API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. In Azure sentinel analytical rules should be configured to trigger an incident with risky user account or host or URL or FileHash or IP Address. 
2. Configure the automation rules to trigger this playbook

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Elastic Search](../solutions/elastic-search.md)

