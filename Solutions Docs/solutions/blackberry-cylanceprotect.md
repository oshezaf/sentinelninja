# Blackberry CylancePROTECT

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Blackberry CylancePROTECT Logo" width="75" height="75">

The [Blackberry CylancePROTECT](https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-protect) connector allows you to easily connect your CylancePROTECT logs with Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft |
| **First Published** | 2022-05-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blackberry%20CylancePROTECT](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Blackberry%20CylancePROTECT) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Blackberry CylancePROTECT](../connectors/blackberrycylanceprotect.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Blackberry CylancePROTECT](../connectors/blackberrycylanceprotect.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CylancePROTECT](../content/blackberry-cylanceprotect-cylanceprotect-87392258-fb9d-448d-94a4-cdf356fcce5c-5b9ad08d.md) | - | - |
| [CylancePROTECT-old](../content/blackberry-cylanceprotect-cylanceprotect-old-84b956cf-1546-41b5-8984-9aa9f7bab4f3-b5306d5c.md) ⚠️ | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 23-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.0       | 18-07-2024                     | Deprecating data connectors                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
