# LookoutMtdV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (72 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Data%20Connectors/LookoutStreamingConnector_ccp/LookoutStreaming_DCR.json)

| Column Name | Type |
|:------------|:-----|
| actor | dynamic |
| actor_device_guid | string |
| actor_guid | string |
| actor_type | string |
| audit | dynamic |
| audit_attribute_changes | dynamic |
| audit_type | string |
| change_type | string |
| client_lookout_sdk_version | string |
| client_ota_version | string |
| client_package_name | string |
| client_package_version | string |
| created_time | datetime |
| device | dynamic |
| device_activated_at | datetime |
| device_activation_status | string |
| device_checkin_time | datetime |
| device_customer_id | string |
| device_deactivated_at | datetime |
| device_email_address | string |
| device_group_guid | string |
| device_guid | string |
| device_manufacturer | string |
| device_model | string |
| device_os_version | string |
| device_permissions | dynamic |
| device_platform | string |
| device_security_status | string |
| device_settings | dynamic |
| device_vulns | dynamic |
| enterprise_guid | string |
| event_type | string |
| id | string |
| log_type | string |
| mdm_connector_id | int |
| mdm_connector_uuid | string |
| mdm_external_id | string |
| risky_config | dynamic |
| smishing_alert | dynamic |
| smishing_alert_description | string |
| smishing_alert_id | string |
| smishing_alert_severity | string |
| smishing_alert_type | string |
| smishing_detections | dynamic |
| target | dynamic |
| target_email_address | string |
| target_guid | string |
| target_manufacturer | string |
| target_model | string |
| target_os_version | string |
| target_platform | string |
| target_type | string |
| threat | dynamic |
| threat_action | string |
| threat_application_name | string |
| threat_assessments | string |
| threat_classification | string |
| threat_classifications | string |
| threat_description | string |
| threat_file_name | string |
| threat_file_path | string |
| threat_id | string |
| threat_package_name | string |
| threat_package_sha | string |
| threat_pcp_device_response | string |
| threat_pcp_reporting_reason | string |
| threat_risk | string |
| threat_severity | string |
| threat_status | string |
| threat_type | string |
| TimeGenerated | datetime |
| type | string |

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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lookout - Critical Audit and Policy Changes (v2)](../content/lookout-lookout-critical-audit-and-policy-changes-v2-6b2d4e8a-5f7c-4b9e-8a1d-3c5e7a9b2f4d-c2a4c32f.md) |  |
| [Lookout - Critical Smishing and Phishing Alerts (v2)](../content/lookout-lookout-critical-smishing-and-phishing-alerts-v2-7a3e5f9b-4c8d-4a2e-9f1b-6d8e2a4c7f9e-766d3a1e.md) |  |
| [Lookout - Device Compliance and Security Status Changes (v2)](../content/lookout-lookout-device-compliance-and-security-status-changes-v2-9c5b6d8f-3a02-4e9b-af4c-2d7e9b1f5a8c-f6dcf4b4.md) |  |
| [Lookout - High Severity Mobile Threats Detected (v2)](../content/lookout-lookout-high-severity-mobile-threats-detected-v2-8b4a5c7e-2f91-4d8a-9e3b-1c6f8a2d4e9f-6f91a43d.md) |  |

### Hunting Queries (1)

**In solution [Lookout](../solutions/lookout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lookout Advanced Threat Hunting - Multi-Vector Attacks](../content/lookout-lookout-advanced-threat-hunting-multi-vector-attacks-lookout-advanced-threat-hunting-4973d03a.md) |  |

### Workbooks (5)

**In solution [Lookout](../solutions/lookout.md):**

| Content Item | Selection Criteria |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

