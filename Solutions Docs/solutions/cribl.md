# Cribl

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cribl-Logo.svg" alt="Cribl Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cribl |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cribl.io/support/](https://www.cribl.io/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cribl - tap@cribl.io |
| **First Published** | 2024-08-01 |
| **Last Updated** | 2024-09-05 |
| **Solution Folder** | [Cribl](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cribl) |

Cribl is a vendor neutral, purpose-built processing engine for data security and IT operations focused on centralized parsing and processing of event data.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cribl](../connectors/cribl.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CriblAccess_CL`](../tables/criblaccess-cl.md) 🔶 | [Cribl](../connectors/cribl.md) | - |
| [`CriblAudit_CL`](../tables/criblaudit-cl.md) 🔶 | [Cribl](../connectors/cribl.md) | - |
| [`CriblInternal_CL`](../tables/criblinternal-cl.md) 🔶 | [Cribl](../connectors/cribl.md) | - |
| [`CriblUIAccess_CL`](../tables/cribluiaccess-cl.md) 🔶 | [Cribl](../connectors/cribl.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 4 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CriblAccess](../parsers/criblaccess.md) | - | [`CriblAccess_CL`](../tables/criblaccess-cl.md) *(read)* |
| [CriblAudit](../parsers/criblaudit.md) | - | [`CriblAudit_CL`](../tables/criblaudit-cl.md) *(read)* |
| [CriblInternal](../parsers/criblinternal.md) | - | [`CriblInternal_CL`](../tables/criblinternal-cl.md) *(read)* |
| [CriblUIAccess](../parsers/cribluiaccess.md) | - | [`CriblUIAccess_CL`](../tables/cribluiaccess-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)** | **Change History**                          |
|-------------|-------------------------------|---------------------------------------------|
| 3.0.1       | 08-08-2025                    | Corrected Query in **Parsers** to display correct columns.                    |
| 3.0.0       | 19-08-2024                    | Initial Solution Release.                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

