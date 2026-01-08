# Juniper SRX

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Juniper SRX Logo" width="75" height="75">

The [Juniper SRX](https://www.juniper.net/us/en/products/security/srx-series.html) solution for Microsoft Sentinel enables you to ingest Juniper SRX traffic and system logs into Microsoft Sentinel.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Juniper%20SRX](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Juniper%20SRX) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Juniper SRX](../connectors/junipersrx.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Juniper SRX](../connectors/junipersrx.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [JuniperSRX](../content/juniper-srx-junipersrx-9be772a3-57ee-44b6-9c57-4f8742ec1c3c-a784c91d.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                               |
|-------------|--------------------------------|--------------------------------------------------|
| 3.0.2       | 18-12-2024                     | Removed Deprecated **Data connector**            |
| 3.0.1       | 19-07-2024                     | Deprecated Data connectors                       | 
| 3.0.0       | 29-08-2023                     | Modified the **Parser** to process Zone Details  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
