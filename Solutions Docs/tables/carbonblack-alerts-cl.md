# CarbonBlack_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (65 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud/Data%20Connectors/VMwareCarbonBlackCloud_ccp/CarbonBlack_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alert_notes_present | string |
| alert_url | string |
| backend_timestamp | string |
| backend_update_timestamp | string |
| detection_timestamp | string |
| determination | string |
| device_external_ip | string |
| device_id | string |
| device_internal_ip | string |
| device_location | string |
| device_name | string |
| device_os | string |
| device_os_version | string |
| device_policy | string |
| device_policy_id | string |
| device_target_value | string |
| device_username | string |
| first_event_timestamp | string |
| id | string |
| ioc_hit | string |
| ioc_id | string |
| is_updated | string |
| last_event_timestamp | string |
| mdr_alert | string |
| mdr_alert_notes_present | string |
| ml_classification_final_verdict | string |
| ml_classification_global_prevalence | string |
| ml_classification_org_prevalence | string |
| parent_cmdline | string |
| parent_effective_reputation | string |
| parent_guid | string |
| parent_md5 | string |
| parent_name | string |
| parent_pid | string |
| parent_reputation | string |
| parent_sha256 | string |
| parent_username | string |
| policy_applied | string |
| primary_event_id | string |
| process_cmdline | string |
| process_effective_reputation | string |
| process_guid | string |
| process_issuer | string |
| process_md5 | string |
| process_name | string |
| process_pid | string |
| process_publisher | string |
| process_reputation | string |
| process_sha256 | string |
| process_username | string |
| reason | string |
| reason_code | string |
| report_description | string |
| report_id | string |
| report_link | string |
| report_name | string |
| report_tags | string |
| run_state | string |
| sensor_action | string |
| severity | string |
| threat_id | string |
| type | string |
| version | string |
| watchlists | string |
| workflow | string |

## Solutions (5)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) |  |

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

