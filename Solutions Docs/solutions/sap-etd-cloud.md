# SAP ETD Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SAPBTP.svg" alt="SAP ETD Cloud Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Microsoft Sentinel Solution for SAP ETD integrates SAP Enterprise Threat Detection entities into Microsoft Sentinel, allowing SOC teams to ingest, monitor, and hunt across SAP data. This integration enhances security by enabling faster detection, investigation, and mitigation of risks within SAP environments.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SAP |
| **Support Tier** | Partner |
| **Support Link** | [https://help.sap.com/docs/SAP_ENTERPRISE_THREAT_DETECTION_CLOUD_EDITION](https://help.sap.com/docs/SAP_ENTERPRISE_THREAT_DETECTION_CLOUD_EDITION) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | SAP |
| **First Published** | 2025-02-17 |
| **Last Updated** | 2025-09-11 |
| **Solution Folder** | [SAP ETD Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) | [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md) | Analytics |
| [`SAPETDInvestigations_CL`](../tables/sapetdinvestigations-cl.md) | [SAP Enterprise Threat Detection, cloud edition](../connectors/sapetdalerts.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SAP ETD - Execution of Sensitive Function Module](../content/sap-etd-cloud-sap-etd-execution-of-sensitive-function-module-c6111e06-11e2-45eb-86ef-28313a06db35-96b35578.md) | Medium | Discovery | [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) |
| [SAP ETD - Login from unexpected network](../content/sap-etd-cloud-sap-etd-login-from-unexpected-network-5dd72ebe-03ac-43ac-851b-68cfe5106e4f-bc0de3f5.md) | Medium | Discovery | [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) |
| [SAP ETD - Synch alerts](../content/sap-etd-cloud-sap-etd-synch-alerts-7a830484-e349-4527-85f6-7850c468c238-8305da5b.md) | Medium | - | [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) |
| [SAP ETD - Synch investigations](../content/sap-etd-cloud-sap-etd-synch-investigations-5096db53-fad3-4844-a264-246f7b7e6e06-9c9e9b19.md) | High | - | [`SAPETDInvestigations_CL`](../tables/sapetdinvestigations-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       |  11-09-2025                    | Investigations API Connector added |
| 3.0.2       |  24-06-2025                    | Data connector polling window reduced |
| 3.0.1       |  31-03-2025                    | SAP OData entity change from TriggeringEvents to new NormalizedTriggeringEvents |
| 3.0.0       |  17-02-2025                    | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

