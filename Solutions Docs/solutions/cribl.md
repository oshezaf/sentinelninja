# Cribl

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cribl-Logo.svg" alt="Cribl Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Cribl is a vendor neutral, purpose-built processing engine for data security and IT operations focused on centralized parsing and processing of event data.

## Solution Information

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cribl](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cribl) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cribl](../connectors/cribl.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CriblAccess_CL`](../tables/criblaccess-cl.md) | [Cribl](../connectors/cribl.md) | - |
| [`CriblAudit_CL`](../tables/criblaudit-cl.md) | [Cribl](../connectors/cribl.md) | - |
| [`CriblInternal_CL`](../tables/criblinternal-cl.md) | [Cribl](../connectors/cribl.md) | - |
| [`CriblUIAccess_CL`](../tables/cribluiaccess-cl.md) | [Cribl](../connectors/cribl.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 4 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CriblAccess](../content/cribl-criblaccess-eb7323cf-8cad-42bd-921b-5e18b907002a-f8b653a0.md) | - | [`CriblAccess_CL`](../tables/criblaccess-cl.md) *(read)* |
| [CriblAudit](../content/cribl-criblaudit-f5e93f79-9e3c-4505-a52e-e634988a8bdb-13f30e88.md) | - | [`CriblAudit_CL`](../tables/criblaudit-cl.md) *(read)* |
| [CriblInternal](../content/cribl-criblinternal-b934592c-d6b6-48f3-949e-415658687c8e-3430f139.md) | - | [`CriblInternal_CL`](../tables/criblinternal-cl.md) *(read)* |
| [CriblUIAccess](../content/cribl-cribluiaccess-8bc08089-197d-452e-bb5b-3bdf4b8a95b0-aadb1b5a.md) | - | [`CriblUIAccess_CL`](../tables/cribluiaccess-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)** | **Change History**                          |
|-------------|-------------------------------|---------------------------------------------|
| 3.0.1       | 08-08-2025                    | Corrected Query in **Parsers** to display correct columns.                    |
| 3.0.0       | 19-08-2024                    | Initial Solution Release.                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

