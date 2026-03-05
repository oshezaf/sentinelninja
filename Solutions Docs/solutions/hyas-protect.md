# HYAS Protect

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Hyas.svg" alt="HYAS Protect Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | HYAS |
| **Support Tier** | Partner |
| **Support Link** | [https://www.hyas.com/contact](https://www.hyas.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Hyas |
| **First Published** | 2023-09-26 |
| **Solution Folder** | [HYAS Protect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HYAS%20Protect) |

Built on the underpinning technology of HYAS Insight threat intelligence, HYAS Protect is a protective DNS solution that combines authoritative knowledge of attacker infrastructure and unrivaled domain-based intelligence to proactively enforce security and block the command and control (C2) communication used by malware, ransomware, phishing, and other forms of cyber attacks.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [HYAS Protect](../connectors/hyasprotect.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`HYASProtectDnsSecurityLogs_CL`](../tables/hyasprotectdnssecuritylogs-cl.md) 🔶 | [HYAS Protect](../connectors/hyasprotect.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [HYASProtectDNS](../parsers/hyasprotectdns.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 04-06-2024                     | Updated **Parser** and **Data connector**  |
| 3.0.1       | 23-04-2024                     | Updated Solution version for Partner Center policy regulations|
| 3.0.0       | 22-09-2023                     | Initial Solution Release                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

