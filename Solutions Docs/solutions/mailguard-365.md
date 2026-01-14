# MailGuard 365

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | MailGuard 365 |
| **Support Tier** | Partner |
| **Support Link** | [https://www.mailguard365.com/support/](https://www.mailguard365.com/support/) |
| **Categories** | domains |
| **First Published** | 2023-05-09 |
| **Last Updated** | 2023-06-08 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailGuard%20365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailGuard%20365) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [MailGuard 365](../connectors/mailguard365.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) | [MailGuard 365](../connectors/mailguard365.md) | Hunting, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Workbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [MailGuard 365 - High Confidence Threats](../content/mailguard-365-mailguard-365-high-confidence-threats-5e3aa1a5-5b69-421e-a3ac-32b04cb10353-07810d8b.md) ⚠️ | Reconnaissance | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |
| [MailGuard 365 - Malware Threats](../content/mailguard-365-mailguard-365-malware-threats-daaae6ad-1fd0-4efa-b571-116689e67a20-d7393225.md) ⚠️ | InitialAccess, Reconnaissance | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |
| [MailGuard 365 - Phishing Threats](../content/mailguard-365-mailguard-365-phishing-threats-ee15ed10-d355-474e-b8ad-a8bbb76f6d38-26ed447a.md) ⚠️ | InitialAccess, Reconnaissance, Credential Access | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MailGuard365Dashboard](../content/mailguard-365-mailguard365dashboard-efc0fa81.md) ⚠️ | [`MailGuard365_Threats_CL`](../tables/mailguard365-threats-cl.md) |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 31-08-2023                     | Initial Solution Release                     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

