# ⚠️ Alsid For AD

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Alsid.svg" alt="Alsid For AD Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Alsid for Active Directory connector allows to export Alsid Indicators of Exposures, trailflow and Indicators of Attacks logs to Microsoft Sentinel in real time.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Alsid |
| **Support Tier** | Partner |
| **Support Link** | [https://www.alsid.com/contact-us/](https://www.alsid.com/contact-us/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Alsid |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [Alsid For AD](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alsid%20For%20AD) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Alsid for Active Directory](../connectors/alsidforad.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) | [Alsid for Active Directory](../connectors/alsidforad.md) | Analytics, Workbooks |

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
| [Alsid Active Directory attacks pathways](../content/alsid-for-ad-alsid-active-directory-attacks-pathways-9649e203-3cb7-47ff-89a9-42f2a5eefe31-b1b754b8.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid DCShadow](../content/alsid-for-ad-alsid-dcshadow-25e0b2dd-3ad3-4d5b-80dd-720f4ef0f12c-a4a36fc9.md) | High | DefenseEvasion | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid DCSync](../content/alsid-for-ad-alsid-dcsync-d3c658bd-8da9-4372-82e4-aaffa922f428-5a769a8c.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Golden Ticket](../content/alsid-for-ad-alsid-golden-ticket-21ab3f52-6d79-47e3-97f8-ad65f2cb29fb-1e19d68a.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Indicators of Attack](../content/alsid-for-ad-alsid-indicators-of-attack-3caa67ef-8ed3-4ab5-baf2-3850d3667f3d-b0aa041c.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Indicators of Exposures](../content/alsid-for-ad-alsid-indicators-of-exposures-154fde9f-ae00-4422-a8da-ef00b11da3fc-e2965543.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid LSASS Memory](../content/alsid-for-ad-alsid-lsass-memory-3acf5617-7c41-4085-9a79-cc3a425ba83a-0b72e79a.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Password Guessing](../content/alsid-for-ad-alsid-password-guessing-ba239935-42c2-472d-80ba-689186099ea1-82e46a9e.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Password Spraying](../content/alsid-for-ad-alsid-password-spraying-9e20eb4e-cc0d-4349-a99d-cad756859dfb-e60e61e5.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid Password issues](../content/alsid-for-ad-alsid-password-issues-472b7cf4-bf1a-4061-b9ab-9fe4894e3c17-b8987ae6.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid privileged accounts issues](../content/alsid-for-ad-alsid-privileged-accounts-issues-a5fe9489-cf8b-47ae-a87e-8f3a13e4203e-9372b5a5.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [Alsid user accounts issues](../content/alsid-for-ad-alsid-user-accounts-issues-fb9e0b51-8867-48d7-86f4-6e76f2176bf8-e2d6b044.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AlsidIoA](../content/alsid-for-ad-alsidioa-d26d67ed.md) | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [AlsidIoE](../content/alsid-for-ad-alsidioe-984d410f.md) | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [afad_parser](../content/alsid-for-ad-afad-parser-8121523a-4ceb-4fe9-abd9-da65a319f459-dba92398.md) ⚠️ | - | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

