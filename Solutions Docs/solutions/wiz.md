# Wiz

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Wiz.svg" alt="Wiz Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Wiz |
| **Support Tier** | Partner |
| **Support Link** | [https://support.wiz.io/](https://support.wiz.io/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Wiz - support@wiz.io |
| **First Published** | 2023-06-20 |
| **Solution Folder** | [Wiz](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Wiz) |

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

This solution provides **1 data connector(s)**:

- [Wiz](../connectors/wiz.md) �

> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`WizAuditLogsV2_CL`](../tables/wizauditlogsv2-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |
| [`WizAuditLogs_CL`](../tables/wizauditlogs-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |
| [`WizIssuesV2_CL`](../tables/wizissuesv2-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |
| [`WizIssues_CL`](../tables/wizissues-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |
| [`WizVulnerabilitiesV2_CL`](../tables/wizvulnerabilitiesv2-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |
| [`WizVulnerabilities_CL`](../tables/wizvulnerabilities-cl.md) � | [Wiz](../connectors/wiz.md) | Workbooks |


> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WizFindings](../content/wiz-wizfindings-78285767.md) | [`WizAuditLogsV2_CL`](../tables/wizauditlogsv2-cl.md)<br>[`WizAuditLogs_CL`](../tables/wizauditlogs-cl.md)<br>[`WizIssuesV2_CL`](../tables/wizissuesv2-cl.md)<br>[`WizIssues_CL`](../tables/wizissues-cl.md)<br>[`WizVulnerabilitiesV2_CL`](../tables/wizvulnerabilitiesv2-cl.md)<br>[`WizVulnerabilities_CL`](../tables/wizvulnerabilities-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 15-07-2024                     | Updated the queries on the **Workbook** and **Connector** to match with the new table names we offer  |
| 2.0.0       | 07-09-2023                     | Updated **Workbook** query in Maintemplate  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

