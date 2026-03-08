# Qualys VM Knowledgebase

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qualys_logo.svg" alt="Qualys VM Knowledgebase Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-17 |
| **Solution Folder** | [Qualys VM Knowledgebase](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Qualys%20VM%20Knowledgebase) |

The [Qualys Vulnerability Management](https://www.qualys.com/apps/vulnerability-management/) KB solution for Microsoft Sentinel enables you to ingest Qualys VM KB logs into Microsoft Sentinel.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Qualys VM KnowledgeBase](../connectors/qualyskb.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`QualysKB_CL`](../tables/qualyskb-cl.md) 🔶 | [Qualys VM KnowledgeBase](../connectors/qualyskb.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [QualysKB](../parsers/qualyskb.md) | - | [`QualysKB_CL`](../tables/qualyskb-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 03-05-2024                     | Added Deploy to Azure Goverment button for Government portal in **Dataconnector** <br/> Fixed Metadata issue for ParserName and ParentId mismatch  |
| 3.0.0       | 12-10-2023                     | Manual deployment instructions updated for **Data Connector**		|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

