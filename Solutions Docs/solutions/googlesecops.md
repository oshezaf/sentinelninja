# ⚠️ GoogleSecOps

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleSecOps.svg" alt="GoogleSecOps Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | google |
| **Support Tier** | Partner |
| **Support Link** | [https://cloud.google.com/support](https://cloud.google.com/support) |
| **Categories** | Security - Threat Protection,Security - Automation (SOAR) |
| **Source Vendor** | Google *(basis: publisher)* |
| **Source Product** | SecOps Detection |
| **Version** | 3.0.0 |
| **Author** | Google - secops-sentinel-support@crestdata.ai |
| **First Published** | 2025-04-04 |
| **Solution Folder** | [GoogleSecOps](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleSecOps) |

The [Google SecOps](https://cloud.google.com/security/products/security-operations) solution for Microsoft Sentinel provides the capability to ingest detection alerts from Google SecOps (formerly Chronicle) into Microsoft Sentinel using the legacyStreamDetectionAlerts API.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google SecOps Detection Alerts](../connectors/gsdetectionalerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) | [Google SecOps Detection Alerts](../connectors/gsdetectionalerts.md) | Analytics |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Google SecOps - Detection Alerts](../content/googlesecops-google-secops-detection-alerts-f6b0c254-8f7d-4a1b-d5c2-0e4a6b9f2d8a-5c1e3e3b.md) | Medium | InitialAccess, DefenseEvasion, LateralMovement, PrivilegeEscalation, CommandAndControl | [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) |
| [Google SecOps - GCTI Threat Intelligence Finding](../content/googlesecops-google-secops-gcti-threat-intelligence-finding-b3e7f921-5c4a-4d8e-a2f9-7b1d3e6c9a5f-d7741376.md) | High | InitialAccess, Execution, CommandAndControl, Exfiltration | [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) |
| [Google SecOps - Multi-Event Correlated Alert](../content/googlesecops-google-secops-multi-event-correlated-alert-d4f8a032-6d5b-4e9f-b3a0-8c2e4f7d0b6e-b1a07461.md) | High | LateralMovement, Persistence, PrivilegeEscalation, CommandAndControl | [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) |
| [Google SecOps - Single-Event Alert](../content/googlesecops-google-secops-single-event-alert-e5a9b143-7e6c-4f0a-c4b1-9d3f5a8e1c7f-4b55b757.md) | High | Execution, CredentialAccess, DefenseEvasion, Impact | [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GoogleSecOpsDetectionAlerts](../parsers/googlesecopsdetectionalerts.md) | - | [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                              |
|-------------|--------------------------------|-------------------------------------------------|
| 3.0.0       | 04-05-2026                     | Initial Solution for Google SecOps with **Data Connector**, **Parser** and **Analytic Rules** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

