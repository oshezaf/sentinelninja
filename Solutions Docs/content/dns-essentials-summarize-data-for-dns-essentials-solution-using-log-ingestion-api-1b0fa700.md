# Summarize Data for DNS Essentials Solution using Log Ingestion API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook summarizes data for DNS Essentials Solution and ingests into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials_Logingestionapi/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DNS_Summarized_Logs_ipV1_CL`](../tables/dns-summarized-logs-ipv1-cl.md) 🔶 | ? | ✓ | ? |
| [`DNS_Summarized_Logs_sourceInfoV1_CL`](../tables/dns-summarized-logs-sourceinfov1-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_-_IP | post | `/queryData` | — |
| Run_query_and_list_results_-_SourceInfo | post | `/queryData` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data_-_IP | POST | `@parameters('IPIngestionEndpoint')` | — |
| Send_Data | POST | `@parameters('SourceInfoIngestionEndpoint')` | — |

</details>

## Additional Documentation

> 📄 *Source: [SummarizeData_DNSEssentials_Logingestionapi/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Playbooks/SummarizeData_DNSEssentials_Logingestionapi/readme.md)*

# DNS Essentials Summarization Capability

This Logic App ingests summarized DNS data into custom Log Analytics tables by using the Logs Ingestion API. Enabling this playbook incurs additional cost.

## Summary

The playbook improves DNS Essentials solution performance by creating two tables containing analytics based on the ASIM DNS schema:

- `DNS_Summarized_Logs_sourceInfoV1_CL`
- `DNS_Summarized_Logs_ipV1_CL`

The V1 table names avoid conflicts with existing classic tables. The playbook uses a data collection endpoint (DCE), data collection rule (DCR), and its managed identity to ingest summarized data.

## Deployment Instructions

1. Deploy the playbook by selecting the applicable button:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F6b56bc665b5d452ecd4819f5168149016fff0a5e%2FSolutions%2FDNS%2520Essentials%2FPlaybooks%2FSummarizeData_DNSEssentials_Logingestionapi%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F6b56bc665b5d452ecd4819f5168149016fff0a5e%2FSolutions%2FDNS%2520Essentials%2FPlaybooks%2FSummarizeData_DNSEssentials_Logingestionapi%2Fazuredeploy.json)

2. Deploy the playbook to a resource group in the same Azure region as the Log Analytics workspace.
3. Provide the required parameters:
   - **Playbook Name**: The default is `SummarizeDNSData_DNS_logingestion`.
   - **Log Analytics Name**: The Log Analytics workspace that contains the DNS data.
   - **Resource Group Name** and **Subscription ID**: The workspace resource group and subscription.

The deployment creates the DCE, DCR, V1 custom tables, and grants the playbook managed identity the Monitoring Metrics Publisher role on the DCR.

## Post-Deployment Instructions

Authorize the Azure Monitor Logs API connection if prompted:

1. Open the Azure Monitor Logs API connection.
2. Select **Edit API connection**.
3. Select **Authorize**, sign in, and then save the connection.

The Logs Ingestion API uses the playbook's managed identity. No Azure Log Analytics Data Collector connection or workspace key is required.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

