# Palo Alto Cortex XDR CCP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CortexXDR_Logo.svg" alt="Palo Alto Cortex XDR CCP Logo" width="75" height="75">

The [Palo Alto Cortex XDR](https://cortex-panw.stoplight.io/docs/cortex-xdr/branches/main/09agw06t5dpvw-cortex-xdr-rest-api) data connector allows ingesting logs from the Palo Alto Cortex XDR API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform. It uses the Palo Alto Cortex XDR API to fetch agents, alerts, incidents, management and endpoint logs and it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received security data into a custom table, thus resulting in better performance.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft |
| **First Published** | 2024-12-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20XDR%20CCP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20XDR%20CCP) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md)

## Tables Reference

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PaloAltoCortexXDR_Alerts_CL`](../tables/paloaltocortexxdr-alerts-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Agent_CL`](../tables/paloaltocortexxdr-audit-agent-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Management_CL`](../tables/paloaltocortexxdr-audit-management-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Endpoints_CL`](../tables/paloaltocortexxdr-endpoints-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.4       | 14-10-2025                     | Updating CCF Polling file to implement parameters                           |
| 3.0.3       | 09-04-2025                     | Updating CCF connector parameters                                        |
| 3.0.2       | 10-02-2025                     | Advancing CCF **Data Connector** from Public preview to Global Availability.|
| 3.0.1       | 22-01-2025                     | Added Preview tag to **Data Connector**                                                 |
| 3.0.0       | 17-12-2024                     | Initial Solution Release                                                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
