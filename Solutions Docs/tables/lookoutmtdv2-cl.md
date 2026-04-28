# LookoutMtdV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (31 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/LookoutMtdV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| actor | dynamic |
| audit | dynamic |
| audit_attribute_changes | dynamic |
| change_type | string |
| client_lookout_sdk_version | string |
| client_ota_version | string |
| client_package_name | string |
| client_package_version | string |
| device | dynamic |
| device_activated_at | datetime |
| device_activation_status | string |
| device_checkin_time | datetime |
| device_customer_id | string |
| device_deactivated_at | datetime |
| device_group_guid | string |
| device_permissions | dynamic |
| device_settings | dynamic |
| device_vulns | dynamic |
| enterprise_guid | string |
| event_type | string |
| id | string |
| log_type | string |
| mdm_connector_id | string |
| mdm_connector_uuid | string |
| mdm_external_id | string |
| risky_config | dynamic |
| smishing_alert | dynamic |
| smishing_detections | dynamic |
| target | dynamic |
| threat | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Lookout](../solutions/lookout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Lookout Mobile Threat Detection Connector (via Codeless Connector Framework) (Preview)](../connectors/lookoutstreaming-definition.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (4)

**In solution [Lookout](../solutions/lookout.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Lookout - Critical Audit and Policy Changes (v2)](../content/lookout-lookout-critical-audit-and-policy-changes-v2-6b2d4e8a-5f7c-4b9e-8a1d-3c5e7a9b2f4d-c2a4c32f.md) |  |
| [Lookout - Critical Smishing and Phishing Alerts (v2)](../content/lookout-lookout-critical-smishing-and-phishing-alerts-v2-7a3e5f9b-4c8d-4a2e-9f1b-6d8e2a4c7f9e-766d3a1e.md) |  |
| [Lookout - Device Compliance and Security Status Changes (v2)](../content/lookout-lookout-device-compliance-and-security-status-changes-v2-9c5b6d8f-3a02-4e9b-af4c-2d7e9b1f5a8c-f6dcf4b4.md) |  |
| [Lookout - High Severity Mobile Threats Detected (v2)](../content/lookout-lookout-high-severity-mobile-threats-detected-v2-8b4a5c7e-2f91-4d8a-9e3b-1c6f8a2d4e9f-6f91a43d.md) |  |

### Hunting Queries (1)

**In solution [Lookout](../solutions/lookout.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Lookout Advanced Threat Hunting - Multi-Vector Attacks](../content/lookout-lookout-advanced-threat-hunting-multi-vector-attacks-lookout-advanced-threat-hunting-4973d03a.md) |  |

### Workbooks (5)

**In solution [Lookout](../solutions/lookout.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [LookoutEvents](../content/lookout-lookoutevents-591b9350.md) |  |
| [LookoutEventsV2](../content/lookout-lookouteventsv2-865167af.md) |  |
| [LookoutExecutiveDashboard](../content/lookout-lookoutexecutivedashboard-f8721bde.md) |  |
| [LookoutIOAInvestigationDashboard](../content/lookout-lookoutioainvestigationdashboard-3c024d7b.md) |  |
| [LookoutSecurityInvestigationDashboard](../content/lookout-lookoutsecurityinvestigationdashboard-1578bafc.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [LookoutEvents](../parsers/lookoutevents.md) | [Lookout](../solutions/lookout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

