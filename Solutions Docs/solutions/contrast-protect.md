# ⚠️ Contrast Protect

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/contrastsecurity_logo.svg" alt="Contrast Protect Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Contrast Protect](https://www.contrastsecurity.com/contrast-protect) solution allows you to ingest attack event results (blocked, probed, suspicious) and other information into Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Contrast Protect |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.contrastsecurity.com/](https://docs.contrastsecurity.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Contrast Security - support@contrastsecurity.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [Contrast Protect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Contrast%20Protect) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Contrast Protect via Legacy Agent](../connectors/contrastprotect.md)
- [[Deprecated] Contrast Protect via AMA](../connectors/contrastprotectama.md)

## Tables Used

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
| [Contrast Blocks](../content/contrast-protect-contrast-blocks-4396f8c3-d114-4154-9f4c-048ba522ed04-c10d7a5d.md) | Low | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Exploits](../content/contrast-protect-contrast-exploits-e1abb6ed-be18-40fd-be58-3d3d84041daf-470b92cd.md) | High | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Probes](../content/contrast-protect-contrast-probes-297596de-d9ae-4fb8-b6ff-00fc01c9462d-d1e26597.md) | Informational | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Contrast Suspicious](../content/contrast-protect-contrast-suspicious-f713404e-805c-4e0c-91fa-2c149f76a07d-f612944c.md) | Medium | InitialAccess, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ContrastProtect](../content/contrast-protect-contrastprotect-d1bc473e.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 07-09-2023                     |	Addition of new Contrast Protect AMA **Data Connector**         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

