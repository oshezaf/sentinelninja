# ⚠️ Wiz for Microsoft Sentinel

*Solution: Wiz*

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Wiz.svg" alt="Wiz Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Wiz |
| **Support Tier** | Partner |
| **Support Link** | [https://support.wiz.io/](https://support.wiz.io/) |
| **Categories** | Security - Cloud Security,Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Wiz - support@wiz.io |
| **First Published** | 2023-06-20 |
| **Solution Folder** | [Wiz](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Wiz) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/wizinc1627338511749.wizinc1627338511749_wiz_mss-sentinel) · Popularity: 🔵 Medium (52%) |

The [Wiz](https://wiz.io/) solution for Microsoft Sentinel enables you to ingest [Wiz Issues](https://docs.wiz.io/wiz-docs/docs/issues), [Wiz Vulnerability Findings](https://docs.wiz.io/wiz-docs/docs/vulnerability-findings), and [Wiz Audit Logs](https://docs.wiz.io/wiz-docs/docs/audit-log-settings) into Microsoft Sentinel using the Wiz REST API.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

b. [Azure Key Vault](https://azure.microsoft.com/services/key-vault/#overview) 

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Wiz](../connectors/wiz.md) ⚠️ 🔶
- [Wiz for Microsoft Sentinel](../connectors/wizsentinel.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`WizAuditLogsV2_CL`](../tables/wizauditlogsv2-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |
| [`WizAuditLogsV3_CL`](../tables/wizauditlogsv3-cl.md) | [Wiz for Microsoft Sentinel](../connectors/wizsentinel.md) | - |
| [`WizAuditLogs_CL`](../tables/wizauditlogs-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |
| [`WizDetectionsV3_CL`](../tables/wizdetectionsv3-cl.md) | [Wiz for Microsoft Sentinel](../connectors/wizsentinel.md) | - |
| [`WizIssuesV2_CL`](../tables/wizissuesv2-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |
| [`WizIssuesV3_CL`](../tables/wizissuesv3-cl.md) | [Wiz for Microsoft Sentinel](../connectors/wizsentinel.md) | Workbooks |
| [`WizIssues_CL`](../tables/wizissues-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |
| [`WizVulnerabilitiesV2_CL`](../tables/wizvulnerabilitiesv2-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |
| [`WizVulnerabilities_CL`](../tables/wizvulnerabilities-cl.md) 🔶 | [Wiz](../connectors/wiz.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WizFindings](../content/wiz-wizfindings-78285767.md) | [`WizIssuesV3_CL`](../tables/wizissuesv3-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 26-06-2026                     | Added a new push-based **Connector** (DCR + RBAC grant): Wiz pushes data to `WizIssuesV3_CL`, `WizDetectionsV3_CL`, and `WizAuditLogsV3_CL` (Issues, Detections, Audit Logs), with no Azure Function to host. **Workbook** updated to the new tables and columns. The legacy Azure Function connector remains available for existing deployments. |
| 3.0.0       | 15-07-2024                     | Updated the queries on the **Workbook** and **Connector** to match with the new table names we offer  |
| 2.0.0       | 07-09-2023                     | Updated **Workbook** query in Maintemplate  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

