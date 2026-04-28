# SOC Prime Audit CCP

*Solution: SOC Prime CCF*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SOCPrime_Logo.svg" alt="SOC Prime CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SOC Prime |
| **Support Tier** | Partner |
| **Support Link** | [https://socprime.com/](https://socprime.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | SOC Prime - support@socprime.com |
| **First Published** | 2025-09-25 |
| **Last Updated** | 2026-01-07 |
| **Solution Folder** | [SOC Prime CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Prime%20CCF) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/socprimeinc1666873751297.azure-sentinel-solution-socprimeauditccp) · Popularity: ⚪ Very Low (0%) |

The [SOC Prime Audit Logs](https://tdm.socprime.com/login) data connector allows ingesting logs from the SOC Prime Platform API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform. It uses the SOC Prime Platform API to fetch SOC Prime platform audit logs and it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received security data into a custom table, thus resulting in better performance.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) | [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Deleted a Custom Field Mapping profile](../content/soc-prime-ccf-deleted-a-custom-field-mapping-profile-a1b2c3d4-e5f6-4078-9012-3456789abcde-7649773b.md) | Medium | DefenseEvasion | [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) |
| [Deleted a Tenant](../content/soc-prime-ccf-deleted-a-tenant-7d4a2b91-8e5c-4f2a-9d6b-3c1f0e4a5d8b-a3de424c.md) | Medium | DefenseEvasion | [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) |
| [Successful logins to SOC Prime platform from bad IP addresses](../content/soc-prime-ccf-successful-logins-to-soc-prime-platform-from-bad-ip-addresses-f8e7d6c5-b4a3-4122-8110-0987654321fe-043a0380.md) | Medium | InitialAccess | [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.1       | 16-02-2026                     | New Analytic Rules were added.         | 
| 3.0.0       | 24-11-2025                     | Initial Solution Release.              |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

