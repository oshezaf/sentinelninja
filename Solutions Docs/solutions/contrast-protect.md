# Contrast Protect

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Contrast Protect |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.contrastsecurity.com/](https://docs.contrastsecurity.com/) |
| **Categories** | domains |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Contrast%20Protect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Contrast%20Protect) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md)
- [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md), [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Contrast Blocks](../content/contrast-protect-contrast-blocks-4396f8c3-d114-4154-9f4c-048ba522ed04.md) | Low | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Exploits](../content/contrast-protect-contrast-exploits-e1abb6ed-be18-40fd-be58-3d3d84041daf.md) | High | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Probes](../content/contrast-protect-contrast-probes-297596de-d9ae-4fb8-b6ff-00fc01c9462d.md) | Informational | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Suspicious](../content/contrast-protect-contrast-suspicious-f713404e-805c-4e0c-91fa-2c149f76a07d.md) | Medium | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ContrastProtect](../content/contrast-protect-contrastprotect.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 07-09-2023                     |	Addition of new Contrast Protect AMA **Data Connector**         |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
