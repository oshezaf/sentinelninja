# Microsoft Sysmon For Linux

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Sysmon For Linux Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Sysmon for Linux](https://github.com/Sysinternals/SysmonForLinux) provides detailed information about process creations, network connections and other system events. The Sysmon for Linux connector uses [Syslog](https://docs.microsoft.com/azure/sentinel/connect-syslog) as its data ingestion method. This solution depends on ASIM to work as expected. [Deploy ASIM](https://github.com/Azure/Azure-Sentinel/tree/master/ASIM) to get the full value from the solution.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-27 |
| **Solution Folder** | [Microsoft Sysmon For Linux](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Sysmon%20For%20Linux) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 26-07-2024                     | Deprecated Data Connector. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

