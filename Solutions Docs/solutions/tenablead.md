# TenableAD

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableAD](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableAD) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Tenable.ad](../connectors/tenable.ad.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tenable_ad_CL`](../tables/tenable-ad-cl.md) | [Tenable.ad](../connectors/tenable.ad.md) | - |

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
| [Tenable.ad Active Directory attacks pathways](../content/tenablead-tenable.ad-active-directory-attacks-pathways-4639bb0a-ca12-4a57-8e53-f61c2c6034d6.md) | Low | CredentialAccess | - |
| [Tenable.ad DCShadow](../content/tenablead-tenable.ad-dcshadow-861044f3-6eef-4f79-8609-e3764abb02f4.md) | High | DefenseEvasion | - |
| [Tenable.ad DCSync](../content/tenablead-tenable.ad-dcsync-0c8d4de3-adb9-4161-a863-aa1e2c8bd959.md) | High | CredentialAccess | - |
| [Tenable.ad Golden Ticket](../content/tenablead-tenable.ad-golden-ticket-d1abda25-f88a-429a-8163-582533cd0def.md) | High | CredentialAccess | - |
| [Tenable.ad Indicators of Attack](../content/tenablead-tenable.ad-indicators-of-attack-6405329a-8d20-48f3-aabc-e1b8a745568e.md) | Low | CredentialAccess | - |
| [Tenable.ad Indicators of Exposures](../content/tenablead-tenable.ad-indicators-of-exposures-55de1072-e93f-40f9-a14d-f7356d217cf6.md) | Low | CredentialAccess | - |
| [Tenable.ad LSASS Memory](../content/tenablead-tenable.ad-lsass-memory-6f7fa5f9-7d21-42c1-bc52-ac355b87c6cf.md) | High | CredentialAccess | - |
| [Tenable.ad Password Guessing](../content/tenablead-tenable.ad-password-guessing-44d74560-0cd1-4e73-a8f5-d16eeeba219e.md) | High | CredentialAccess | - |
| [Tenable.ad Password Spraying](../content/tenablead-tenable.ad-password-spraying-29d350db-0ac0-4f4c-92ff-dac0f6335612.md) | High | CredentialAccess | - |
| [Tenable.ad Password issues](../content/tenablead-tenable.ad-password-issues-2518b57f-1a8b-44ea-935d-7dc1cfe4f918.md) | Low | CredentialAccess | - |
| [Tenable.ad privileged accounts issues](../content/tenablead-tenable.ad-privileged-accounts-issues-353d6474-d795-4086-a179-ba1db4d8bbcb.md) | Low | CredentialAccess | - |
| [Tenable.ad user accounts issues](../content/tenablead-tenable.ad-user-accounts-issues-4f8ed6f3-8815-437d-9462-f0def9dc70d6.md) | Low | CredentialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TenableAdIoA](../content/tenablead-tenableadioa.md) | - |
| [TenableAdIoE](../content/tenablead-tenableadioe.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [afad_parser](../content/tenablead-afad-parser-be52727e-e14d-4497-a168-a0a112612d8a.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
