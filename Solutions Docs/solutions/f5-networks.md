# F5 Networks

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="F5 Networks Logo" width="75" height="75">

The [F5 Networks](https://www.f5.com/) solution for Microsoft Sentinel enables you to ingest F5 Network firewall logs into Microsoft Sentinel, using the Common Event Format (CEF) for Security Monitoring.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | F5 |
| **Support Tier** | Partner |
| **Support Link** | [https://www.f5.com/services/support](https://www.f5.com/services/support) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | F5 |
| **First Published** | 2022-05-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/F5%20Networks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/F5%20Networks) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md)
- [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] F5 Networks via AMA](../connectors/f5ama.md), [[Deprecated] F5 Networks via Legacy Agent](../connectors/f5.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 29-09-2023                     |	Addition of new F5 Networks AMA **Data Connector**              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
