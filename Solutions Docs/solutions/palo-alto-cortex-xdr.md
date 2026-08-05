# Palo Alto Cortex XDR CCP

*Solution: Palo Alto Cortex XDR*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CortexXDR_Logo.svg" alt="Palo Alto Cortex XDR Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.5 |
| **Author** | Microsoft |
| **First Published** | 2024-12-07 |
| **Last Updated** | 2026-06-16 |
| **Solution Folder** | [Palo Alto Cortex XDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20XDR) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-cortexccp) · Popularity: 🔵 Medium (67%) |

The [Palo Alto Cortex XDR](https://cortex-panw.stoplight.io/docs/cortex-xdr/branches/main/09agw06t5dpvw-cortex-xdr-rest-api) data connector allows ingesting logs from the Palo Alto Cortex XDR API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform. It uses the Palo Alto Cortex XDR API to fetch agents, alerts, incidents, management and endpoint logs and it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received security data into a custom table, thus resulting in better performance.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PaloAltoCortexXDR_Alerts_CL`](../tables/paloaltocortexxdr-alerts-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Agent_CL`](../tables/paloaltocortexxdr-audit-agent-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Management_CL`](../tables/paloaltocortexxdr-audit-management-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Endpoints_CL`](../tables/paloaltocortexxdr-endpoints-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cortex XDR Incident - High](../content/palo-alto-cortex-xdr-cortex-xdr-incident-high-06263265-ff65-43ff-8b15-6ac82325a672-38ff1458.md) | High | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |
| [Cortex XDR Incident - Low](../content/palo-alto-cortex-xdr-cortex-xdr-incident-low-0d3fbeba-f9c9-40c7-9b71-8afb1816d7b2-8a53b87c.md) | Low | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |
| [Cortex XDR Incident - Medium](../content/palo-alto-cortex-xdr-cortex-xdr-incident-medium-2e638f3d-611f-4281-81b1-1fd4aa240ffb-e5042f93.md) | Medium | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoCortexXDR](../parsers/paloaltocortexxdr.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.5       | 22-07-2026                     | Adding parser & analytic rules from legacy Cortex XDR connector and removed 'CCP' from solution name |
| 3.0.4       | 12-06-2026                     | Updating CCF Polling file to implement parameters                           |
| 3.0.3       | 09-04-2025                     | Updating CCF connector parameters                                        |
| 3.0.2       | 10-02-2025                     | Advancing CCF **Data Connector** from Public preview to Global Availability.|
| 3.0.1       | 22-01-2025                     | Added Preview tag to **Data Connector**                                                 |
| 3.0.0       | 17-12-2024                     | Initial Solution Release                                                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

