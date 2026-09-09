# Summarize Web Session Data using Log Ingestion API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The 'SummarizeWebSessionData' Playbook helps with summarizing the Web Session logs and ingesting them into custom tables for persistence. Although enabling the summarization playbook for the Web Session solution is totally optional, we highly recommend enabling it for a better user experience in environments with high EPS (events per second) data ingestion. After installing the solution, it will be deployed under Playbook Templates in the Automation blade of Microsoft Sentinel. It can be configu

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Web Session Essentials](../solutions/web-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Playbooks/SummarizeWebSessionData_logingestion/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WebSession_Summarized_DstIPV1_CL`](../tables/websession-summarized-dstipv1-cl.md) | ? | ✓ | ? |
| [`WebSession_Summarized_SrcIPV1_CL`](../tables/websession-summarized-srcipv1-cl.md) | ? | ✓ | ? |
| [`WebSession_Summarized_SrcInfoV1_CL`](../tables/websession-summarized-srcinfov1-cl.md) | ? | ✓ | ? |
| [`WebSession_Summarized_ThreatInfoV1_CL`](../tables/websession-summarized-threatinfov1-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_DstIP | post | `/queryData` | — |
| Run_query_and_list_results_SourceInfo | post | `/queryData` | — |
| Run_query_and_list_results_SrcIP | post | `/queryData` | — |
| Run_query_and_list_results_ThreatInfo | post | `/queryData` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data_DstIP | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-WebSession_Summarized_DstIPV1', '?api-version=2023-01-01')` | — |
| Send_Data_SourceInfo | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-WebSession_Summarized_SrcInfoV1', '?api-version=2023-01-01')` | — |
| Send_Data_SrcIP | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-WebSession_Summarized_SrcIPV1', '?api-version=2023-01-01')` | — |
| Send_Data | POST | `@concat(parameters('ingestionEndpoint'), 'Custom-WebSession_Summarized_ThreatInfoV1', '?api-version=2023-01-01')` | — |

</details>

## Additional Documentation

> 📄 *Source: [SummarizeWebSessionData_logingestion/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Session%20Essentials/Playbooks/SummarizeWebSessionData_logingestion/readme.md)*

# Web Session Essentials Summarization Capability

This Logic App ingests summarized Web Session data into custom Log Analytics tables by using the Logs Ingestion API. Enabling this playbook incurs additional cost.

## Summary

The playbook improves Web Session Essentials solution performance by creating four tables containing analytics based on the ASIM Web Session schema:

- `WebSession_Summarized_SrcInfoV1_CL`
- `WebSession_Summarized_SrcIPV1_CL`
- `WebSession_Summarized_DstIPV1_CL`
- `WebSession_Summarized_ThreatInfoV1_CL`

The V1 table names avoid conflicts with existing classic tables. The playbook uses a data collection endpoint (DCE), data collection rule (DCR), and its managed identity to ingest summarized data.

## Deployment Instructions

1. Deploy the playbook by selecting the applicable button:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F7c679ec0cbcbaf50c510bb534592e054a540983f%2FSolutions%2FWeb%2520Session%2520Essentials%2FPlaybooks%2FSummarizeWebSessionData_logingestion%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovernbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2F7c679ec0cbcbaf50c510bb534592e054a540983f%2FSolutions%2FWeb%2520Session%2520Essentials%2FPlaybooks%2FSummarizeWebSessionData_logingestion%2Fazuredeploy.json)

2. Deploy the playbook to a resource group in the same Azure region as the Log Analytics workspace.
3. Provide the required parameters:
   - **Playbook Name**: The default is `SummarizeWebSessionData-logingestion`.
   - **Log Analytics Name**: The Log Analytics workspace that contains the Web Session data.
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

↑ [Back to Playbooks](playbooks.md) · [Back to Web Session Essentials](../solutions/web-session-essentials.md)

