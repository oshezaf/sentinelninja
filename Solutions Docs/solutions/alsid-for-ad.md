# Alsid For AD

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Alsid |
| **Support Tier** | Partner |
| **Support Link** | [https://www.alsid.com/contact-us/](https://www.alsid.com/contact-us/) |
| **Categories** | domains |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alsid%20For%20AD](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alsid%20For%20AD) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Alsid for Active Directory](../connectors/alsidforad.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) | [Alsid for Active Directory](../connectors/alsidforad.md) | - |

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
| [Alsid Active Directory attacks pathways](../content/9649e203-3cb7-47ff-89a9-42f2a5eefe31.md) | Low | CredentialAccess | - |
| [Alsid DCShadow](../content/25e0b2dd-3ad3-4d5b-80dd-720f4ef0f12c.md) | High | DefenseEvasion | - |
| [Alsid DCSync](../content/d3c658bd-8da9-4372-82e4-aaffa922f428.md) | High | CredentialAccess | - |
| [Alsid Golden Ticket](../content/21ab3f52-6d79-47e3-97f8-ad65f2cb29fb.md) | High | CredentialAccess | - |
| [Alsid Indicators of Attack](../content/3caa67ef-8ed3-4ab5-baf2-3850d3667f3d.md) | Low | CredentialAccess | - |
| [Alsid Indicators of Exposures](../content/154fde9f-ae00-4422-a8da-ef00b11da3fc.md) | Low | CredentialAccess | - |
| [Alsid LSASS Memory](../content/3acf5617-7c41-4085-9a79-cc3a425ba83a.md) | High | CredentialAccess | - |
| [Alsid Password Guessing](../content/ba239935-42c2-472d-80ba-689186099ea1.md) | High | CredentialAccess | - |
| [Alsid Password Spraying](../content/9e20eb4e-cc0d-4349-a99d-cad756859dfb.md) | High | CredentialAccess | - |
| [Alsid Password issues](../content/472b7cf4-bf1a-4061-b9ab-9fe4894e3c17.md) | Low | CredentialAccess | - |
| [Alsid privileged accounts issues](../content/a5fe9489-cf8b-47ae-a87e-8f3a13e4203e.md) | Low | CredentialAccess | - |
| [Alsid user accounts issues](../content/fb9e0b51-8867-48d7-86f4-6e76f2176bf8.md) | Low | CredentialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AlsidIoA](../content/alsidioa-alsid-for-ad.md) | - |
| [AlsidIoE](../content/alsidioe-alsid-for-ad.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [afad_parser](../content/8121523a-4ceb-4fe9-abd9-da65a319f459.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
