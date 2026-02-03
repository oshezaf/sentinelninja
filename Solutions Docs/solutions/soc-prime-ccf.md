# SOC Prime CCF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SOCPrime_Logo.svg" alt="SOC Prime CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [SOC Prime Audit Logs](https://tdm.socprime.com/login) data connector allows ingesting logs from the SOC Prime Platform API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform. It uses the SOC Prime Platform API to fetch SOC Prime platform audit logs and it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received security data into a custom table, thus resulting in better performance.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SOC Prime |
| **Support Tier** | Partner |
| **Support Link** | [https://socprime.com/](https://socprime.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | SOC Prime - support@socprime.com |
| **First Published** | 2025-09-25 |
| **Solution Folder** | [SOC Prime CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Prime%20CCF) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) | [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.0       | 24-11-2025                     | Initial Solution Release.               |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

