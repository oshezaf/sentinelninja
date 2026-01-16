# ⚠️ TenableAD

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableAD](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableAD) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Tenable.ad](../connectors/tenable.ad.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) | [Tenable.ad](../connectors/tenable.ad.md) | Analytics, Workbooks |
| [`Tenable_ad_CL`](../tables/tenable-ad-cl.md) | [Tenable.ad](../connectors/tenable.ad.md) | - |
| [`USAGE`](../tables/usage.md) | [Tenable.ad](../connectors/tenable.ad.md) | Analytics, Workbooks |
| [`alert`](../tables/alert.md) | [Tenable.ad](../connectors/tenable.ad.md) | Analytics, Workbooks |

## Content Items

This solution includes **15 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 12 |
| Workbooks | 2 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Tenable.ad Active Directory attacks pathways](../content/tenablead-tenable.ad-active-directory-attacks-pathways-4639bb0a-ca12-4a57-8e53-f61c2c6034d6-79dfc456.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad DCShadow](../content/tenablead-tenable.ad-dcshadow-861044f3-6eef-4f79-8609-e3764abb02f4-f4472cd3.md) ⚠️ | High | DefenseEvasion | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad DCSync](../content/tenablead-tenable.ad-dcsync-0c8d4de3-adb9-4161-a863-aa1e2c8bd959-4275a87f.md) ⚠️ | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Golden Ticket](../content/tenablead-tenable.ad-golden-ticket-d1abda25-f88a-429a-8163-582533cd0def-8d0e9a48.md) ⚠️ | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Indicators of Attack](../content/tenablead-tenable.ad-indicators-of-attack-6405329a-8d20-48f3-aabc-e1b8a745568e-817b740c.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Indicators of Exposures](../content/tenablead-tenable.ad-indicators-of-exposures-55de1072-e93f-40f9-a14d-f7356d217cf6-a88f135e.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad LSASS Memory](../content/tenablead-tenable.ad-lsass-memory-6f7fa5f9-7d21-42c1-bc52-ac355b87c6cf-d0172ffc.md) ⚠️ | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Password Guessing](../content/tenablead-tenable.ad-password-guessing-44d74560-0cd1-4e73-a8f5-d16eeeba219e-8b94449f.md) ⚠️ | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Password Spraying](../content/tenablead-tenable.ad-password-spraying-29d350db-0ac0-4f4c-92ff-dac0f6335612-492f5352.md) ⚠️ | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad Password issues](../content/tenablead-tenable.ad-password-issues-2518b57f-1a8b-44ea-935d-7dc1cfe4f918-52c3fce0.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad privileged accounts issues](../content/tenablead-tenable.ad-privileged-accounts-issues-353d6474-d795-4086-a179-ba1db4d8bbcb-6c66bb05.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [Tenable.ad user accounts issues](../content/tenablead-tenable.ad-user-accounts-issues-4f8ed6f3-8815-437d-9462-f0def9dc70d6-2adebfa6.md) ⚠️ | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TenableAdIoA](../content/tenablead-tenableadioa-34869e80.md) ⚠️ | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |
| [TenableAdIoE](../content/tenablead-tenableadioe-cff627f5.md) ⚠️ | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md)<br>[`USAGE`](../tables/usage.md)<br>[`alert`](../tables/alert.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [afad_parser](../content/tenablead-afad-parser-be52727e-e14d-4497-a168-a0a112612d8a-d377a75a.md) ⚠️ | - | [`Tenable_ad_CL`](../tables/tenable-ad-cl.md) *(read)*<br>[`USAGE`](../tables/usage.md) *(read)*<br>[`alert`](../tables/alert.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

