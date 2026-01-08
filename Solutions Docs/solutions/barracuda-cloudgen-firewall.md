# Barracuda CloudGen Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Barracuda CloudGen Firewall Logo" width="75" height="75">

The [Barracuda CloudGen Firewall ](https://www.barracuda.com/products/cloudgenfirewall) (CGFW) Solution for Microsoft Sentinel allows you to easily connect your Barracuda CGFW syslogs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Barracuda |
| **First Published** | 2021-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Barracuda%20CloudGen%20Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Barracuda%20CloudGen%20Firewall) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-syslog |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Barracuda CloudGen Firewall](../connectors/barracudacloudfirewall.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Barracuda CloudGen Firewall](../connectors/barracudacloudfirewall.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Barracuda](../content/barracuda-cloudgen-firewall-barracuda-9d8c6fb5.md) ⚠️ | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CGFWFirewallActivity](../content/barracuda-cloudgen-firewall-cgfwfirewallactivity-07ff282b-3a46-43a4-80e8-27ea5dcd3192-64ddbe7d.md) | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 19-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.1       | 18-07-2024                     | Deprecating data connectors                 |
| 3.0.0       | 12-10-2023                     | The support information is revised/updated. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
