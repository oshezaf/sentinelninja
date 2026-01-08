# WireX Network Forensics Platform

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/wirex-systems_logo.svg" alt="WireX Network Forensics Platform Logo" width="75" height="75">

The [WireX Systems](https://wirexsystems.com/) solution allows custom dashboards and workflows during forensic investigation integrated with Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WireX Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://wirexsystems.com/contact-us/](https://wirexsystems.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | WireX Systems - info@wirexsystems.com |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WireX%20Network%20Forensics%20Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WireX%20Network%20Forensics%20Platform) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) ⚠️
- [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md), [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.1       | 27-06-2024                     | Deprecating data connectors                                 |
| 3.0.0       | 05-09-2023                     | Addition of new WireX Network Forensics Platform **Data Connector**    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
