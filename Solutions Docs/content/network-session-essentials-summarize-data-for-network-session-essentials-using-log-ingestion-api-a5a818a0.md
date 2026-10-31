# Summarize Data for Network Session Essentials using log ingestion API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook summarizes data for Network Session Essentials and lands it into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Playbooks/SummarizeData_NSE_Logingestionapi/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetworkCustomAnalyticsV1_CL`](../tables/networkcustomanalyticsv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_countryV1_CL`](../tables/networkcustomanalytics-countryv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_ipV1_CL`](../tables/networkcustomanalytics-ipv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_protocolV1_CL`](../tables/networkcustomanalytics-protocolv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_ruleV1_CL`](../tables/networkcustomanalytics-rulev1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_sourceInfoV1_CL`](../tables/networkcustomanalytics-sourceinfov1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_source_portV1_CL`](../tables/networkcustomanalytics-source-portv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threatV1_CL`](../tables/networkcustomanalytics-threatv1-cl.md) 🔶 | ? | ✓ | ? |
| [`NetworkCustomAnalytics_threat_iocV1_CL`](../tables/networkcustomanalytics-threat-iocv1-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 9 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_-_IP | post | `/queryData` | — |
| Run_query_and_list_results_-_Port | post | `/queryData` | — |
| Run_query_and_list_results_-_GeoCountry | post | `/queryData` | — |
| Run_query_and_list_results_-_Overall | post | `/queryData` | — |
| Run_query_and_list_results_-_Protocol | post | `/queryData` | — |
| Run_query_and_list_results_-_Rules | post | `/queryData` | — |
| Run_query_and_list_results_-_SourceInfo | post | `/queryData` | — |
| Run_query_and_list_results_-_Threat | post | `/queryData` | — |
| Run_query_and_list_results_-_Threat_IOC | post | `/queryData` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data_-_IP | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_ip', '?api-version=2023-01-01')` | — |
| Send_Data_-_Port | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_source_port', '?api-version=2023-01-01')` | — |
| Send_Data_-_GeoCountry | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_country', '?api-version=2023-01-01')` | — |
| Send_Data_-_Overall | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics', '?api-version=2023-01-01')` | — |
| Send_Data_-_Protocol | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_protocol', '?api-version=2023-01-01')` | — |
| Send_Data_-_SourceInfo | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_sourceInfo', '?api-version=2023-01-01')` | — |
| Send_Data_-_Threat | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_threat', '?api-version=2023-01-01')` | — |
| Send_Data_-_Threat_IOC | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_threat_ioc', '?api-version=2023-01-01')` | — |
| Send_Data_-_Rule | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-NetworkCustomAnalytics_rule', '?api-version=2023-01-01')` | — |

</details>

## Additional Documentation

> 📄 *Source: [SummarizeData_NSE_Logingestionapi/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Playbooks/SummarizeData_NSE_Logingestionapi/readme.md)*

# Network Session Essentials Solution Summarization Capability

This Logic App summarizes Network Session data into custom Log Analytics tables by using the Logs Ingestion API. This capability incurs additional cost.

## Summary

The playbook improves Network Session Essentials workbook and query performance by creating summarized data for key ASIM Network Session dimensions. It uses a data collection endpoint (DCE), data collection rule (DCR), and the playbook's managed identity to ingest data into V1 custom tables.

## V1 custom tables

The playbook creates the following tables. Use these V1 names in custom queries; existing non-V1 tables are not modified.

| Table | Summarized dimensions |
| --- | --- |
| `NetworkCustomAnalytics_ipV1_CL` | Source IP, destination IP, network direction, and device action. |
| `NetworkCustomAnalytics_source_portV1_CL` | Source port, network direction, and device action. |
| `NetworkCustomAnalytics_countryV1_CL` | Source country, destination country, device action, and network direction. |
| `NetworkCustomAnalyticsV1_CL` | Overall event result, network direction, device action, and event severity. |
| `NetworkCustomAnalytics_protocolV1_CL` | Network protocol, destination port, destination application, network direction, and device action. |
| `NetworkCustomAnalytics_sourceInfoV1_CL` | Event product and device hostname. |
| `NetworkCustomAnalytics_threatV1_CL` | Threat, threat category, event severity, and device action. |
| `NetworkCustomAnalytics_threat_iocV1_CL` | Source and destination IP addresses and hostnames. |
| `NetworkCustomAnalytics_ruleV1_CL` | Rule, network direction, and device action. |

Each table also includes `TimeGenerated`, `EventTime`, and `count_` for its aggregation window and event count.

## Deployment Instructions

1. Deploy the playbook by selecting the applicable button:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F2e5433738eed60dd88d064d02e2795b607a316f1%2FSolutions%2FNetwork%2520Session%2520Essentials%2FPlaybooks%2FSummarizeData_NSE_Logingestionapi%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F2e5433738eed60dd88d064d02e2795b607a316f1%2FSolutions%2FNetwork%2520Session%2520Essentials%2FPlaybooks%2FSummarizeData_NSE_Logingestionapi%2Fazuredeploy.json)

2. Deploy the playbook to a resource group in the same Azure region as the Log Analytics workspace.
3. Provide the required parameters:
   - **Playbook Name**: The default is `SummarizeData_NSE_Logingestionapi`.
   - **Log Analytics Name**: The Log Analytics workspace that contains the Network Session data.
   - **Resource Group Name** and **Subscription ID**: The workspace resource group and subscription.

The deployment creates the DCE, DCR, required custom tables, and grants the playbook managed identity the Monitoring Metrics Publisher role on the DCR.

## Post-Deployment Instructions

Authorize the Azure Monitor Logs API connection if prompted:

1. Open the Azure Monitor Logs API connection.
2. Select **Edit API connection**.
3. Select **Authorize**, sign in, and then save the connection.

The Logs Ingestion API uses the playbook's managed identity. No Azure Log Analytics Data Collector connection or workspace key is required.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Network Session Essentials](../solutions/network-session-essentials.md)

