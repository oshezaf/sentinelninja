# AristaAwakeSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AristaAwakeSecurity.svg" alt="AristaAwakeSecurity Logo" width="75" height="75">

The [Awake Security Arista Networks solution](https://awakesecurity.com/) for Microsoft Sentinel enable users to send detection model matches from the Awake Security Platform to Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Arista - Awake Security |
| **Support Tier** | Partner |
| **Support Link** | [https://awakesecurity.com/](https://awakesecurity.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Arista Networks - support-security@arista.com |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AristaAwakeSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AristaAwakeSecurity) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Awake Security via Legacy Agent](../connectors/aristaawakesecurity.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Awake Security - High Match Counts By Device](../content/aristaawakesecurity-awake-security-high-match-counts-by-device-90b7ac11-dd6c-4ba1-a99b-737061873859-e21f6938.md) | Medium | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Awake Security - High Severity Matches By Device](../content/aristaawakesecurity-awake-security-high-severity-matches-by-device-d5e012c2-29ba-4a02-a813-37b928aafe2d-3c38bc0d.md) | Medium | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Awake Security - Model With Multiple Destinations](../content/aristaawakesecurity-awake-security-model-with-multiple-destinations-dfa3ec92-bdae-410f-b675-fe1814e4d43e-8eda1cfb.md) | Medium | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AristaAwakeSecurityWorkbook](../content/aristaawakesecurity-aristaawakesecurityworkbook-9b7c92d9.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.1       | 03-01-2025                     | Removed Deprecated **Data connector**          |
| 3.0.0       | 09-07-2024                     | Deprecating data connectors.                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
