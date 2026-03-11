# CarbonBlack_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (67 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Carbon%20Black%20Cloud%5CData%20Connectors%5CVMwareCarbonBlackCloud_ccp/table_alerts.json)

| Column Name | Type |
|:------------|:-----|
| AlertNotesPresent | string |
| AlertType | string |
| AlertUrl | string |
| BackendTimestamp | string |
| BackendUpdateTimestamp | string |
| DetectionTimestamp | string |
| Determination | string |
| DeviceExternalIp | string |
| DeviceId | string |
| DeviceInternalIp | string |
| DeviceLocation | string |
| DeviceName | string |
| DeviceOs | string |
| DeviceOsVersion | string |
| DevicePolicy | string |
| DevicePolicyId | string |
| DeviceTargetValue | string |
| DeviceUsername | string |
| FirstEventTimestamp | string |
| Id | string |
| IocHit | string |
| IocId | string |
| IsUpdated | string |
| LastEventTimestamp | string |
| MdrAlert | string |
| MdrAlertNotesPresent | string |
| ml_classification_org_prevalence | string |
| MlClassificationFinalVerdict | string |
| MlClassificationGlobalPrevalence | string |
| MlClassificationOrgPrevalence | string |
| ParentCmdline | string |
| ParentEffectiveReputation | string |
| ParentGuid | string |
| ParentMd5 | string |
| ParentName | string |
| ParentPid | string |
| ParentReputation | string |
| ParentSha256 | string |
| ParentUsername | string |
| PolicyApplied | string |
| PrimaryEventId | string |
| ProcessCmdline | string |
| ProcessEffectiveReputation | string |
| ProcessGuid | string |
| ProcessIssuer | string |
| ProcessMd5 | string |
| ProcessName | string |
| ProcessPid | string |
| ProcessPublisher | string |
| ProcessReputation | string |
| ProcessSha256 | string |
| ProcessUsername | string |
| Reason | string |
| ReasonCode | string |
| ReportDescription | string |
| ReportId | string |
| ReportLink | string |
| ReportName | string |
| ReportTags | string |
| RunState | string |
| SensorAction | string |
| Severity | string |
| ThreatId | string |
| TimeGenerated | datetime |
| Version | string |
| Watchlists | string |
| Workflow | string |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

