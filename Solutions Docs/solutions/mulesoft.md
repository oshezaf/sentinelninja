# Mulesoft

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Mulesoft Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | DevOps,IT Operations |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-12 |
| **Solution Folder** | [Mulesoft](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-mulesoft) · Popularity: 🔵 Medium (78%) |

The [MuleSoft Cloudhub](https://www.mulesoft.com/platform/saas/cloudhub-ipaas-cloud-based-integration) solution provides the capability to retrieve logs from Cloudhub applications using the Cloudhub API and more events into Microsoft Sentinel through the REST API.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

**Data Connectors:** 1, **Parsers:** 1

[Learn more about Microsoft Sentinel](https://aka.ms/azuresentinel) | [Learn more about Solutions](https://aka.ms/azuresentinelsolutionsdoc)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **3 data connector(s)**:

- [MuleSoft Cloudhub](../connectors/mulesoft.md) 🔶
- [Mulesoft CloudHub Alerts Connector (via Codeless Connector Framework)](../connectors/mulesoftcloudhubconnector.md)
- [MuleSoft CloudHub Logs (Push Connector via Codeless Connector Framework)](../connectors/mulesoftcloudhubpushconnector.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MuleSoftCloudhubLogs_CL`](../tables/mulesoftcloudhublogs-cl.md) | [MuleSoft CloudHub Logs (Push Connector via Codeless Connector Framework)](../connectors/mulesoftcloudhubpushconnector.md) | - |
| [`MuleSoft_Cloudhub_CL`](../tables/mulesoft-cloudhub-cl.md) 🔶 | [MuleSoft Cloudhub](../connectors/mulesoft.md) | - |
| [`MulesoftCloudhubAlerts_CL`](../tables/mulesoftcloudhubalerts-cl.md) | [Mulesoft CloudHub Alerts Connector (via Codeless Connector Framework)](../connectors/mulesoftcloudhubconnector.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [MuleSoftCloudhub](../parsers/mulesoftcloudhub.md) | - | [`MuleSoftCloudhubLogs_CL`](../tables/mulesoftcloudhublogs-cl.md) *(read)*<br>[`MuleSoft_Cloudhub_CL`](../tables/mulesoft-cloudhub-cl.md) *(read)*<br>[`MulesoftCloudhubAlerts_CL`](../tables/mulesoftcloudhubalerts-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                              |
|-------------|-------------------------------|-------------------------------------------------|
| 3.1.0       | 04-06-2026                    | Added MuleSoft CloudHub `Alerts` CCF Connector & `Logs` CCF Push Connector for real-time log streaming via Log4j HTTP appender. |
| 3.0.2       | 09-09-2024                    | Updated the python runtime version to 3.11         |
| 3.0.1       | 13-06-2024                    | Updated **Data Connector** instructions to notify Cloudhub Application support.     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

