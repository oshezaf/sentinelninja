# Cortex XDR

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CortexXDR_Logo.svg" alt="Cortex XDR Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft |
| **First Published** | 2023-07-12 |
| **Solution Folder** | [Cortex XDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR) |

The [Palo Alto Networks](https://www.paloaltonetworks.com/) Cortex XDR Microsoft Sentinel Solution pulls log directly from the Cortex XDR platform via API. The solution is configured to pull the Incidents from the Cortex XDR platform every 5 minutes and ingest them into Microsoft Sentinel. The solution is dependent on the Cortex XDR API Key and API Key ID. The API Key ID is used as the polling key path and the API Key is used as the header for the API request. The solution also includes 3 analytics rules to detect the creation of incidents based on the severities (High, Medium, Low).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) 🔶
- [Cortex XDR - Incidents](../connectors/cortexxdrincidents.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PaloAltoCortexXDR_Alerts_CL`](../tables/paloaltocortexxdr-alerts-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Agent_CL`](../tables/paloaltocortexxdr-audit-agent-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Audit_Management_CL`](../tables/paloaltocortexxdr-audit-management-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Endpoints_CL`](../tables/paloaltocortexxdr-endpoints-cl.md) | [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | - |
| [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) 🔶 | [Cortex XDR - Incidents](../connectors/cortexxdrincidents.md), [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) | Analytics |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cortex XDR Incident - High](../content/cortex-xdr-cortex-xdr-incident-high-f96728eb-9802-4522-b715-47fb66c2ecf5-bb6320e4.md) | High | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |
| [Cortex XDR Incident - Low](../content/cortex-xdr-cortex-xdr-incident-low-1426bbcf-a9ae-4aa5-9da6-abbf48f04115-5efdbb9e.md) | Low | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |
| [Cortex XDR Incident - Medium](../content/cortex-xdr-cortex-xdr-incident-medium-2b05823b-ee15-4b92-a642-b13170e37c35-674c5fb1.md) | Medium | - | [`PaloAltoCortexXDR_Incidents_CL`](../tables/paloaltocortexxdr-incidents-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoCortexXDR](../parsers/paloaltocortexxdr.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 28-07-2023                     | Initial Solution Release                                                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

