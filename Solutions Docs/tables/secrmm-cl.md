# secRMM_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/secRMM_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AdditionalProgramInfo_s | string |
| Computer | string |
| ConfigurationTarget_s | string |
| DeviceDescription_s | string |
| Drive_s | string |
| Event_s | string |
| InternalID_s | string |
| ManagementGroupName | string |
| Message | string |
| MG | string |
| Model_s | string |
| PreviousPropertyValue_s | string |
| ProgramName_s | string |
| ProgramPID_s | string |
| PropertyAction_s | string |
| PropertyName_s | string |
| PropertyOperationStatus_s | string |
| PropertyValue_s | string |
| RawData | string |
| SerialNumber_s | string |
| SourceFile_s | string |
| SourceFileLastWrite_s | string |
| SourceFileSize_s | string |
| SourceSystem | string |
| TargetFile_s | string |
| TenantId | string |
| Time_s | string |
| TimeGenerated | datetime |
| Type | string |
| User_s | string |
| UserSID_s | string |
| Volume_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Squadra Technologies SecRmm](../solutions/squadra-technologies-secrmm.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Squadra Technologies secRMM](../connectors/squadratechnologiessecrmm.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Squadra Technologies SecRmm](../solutions/squadra-technologies-secrmm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Removable storage ONLINE event from secRMM](../content/squadra-technologies-secrmm-removable-storage-online-event-from-secrmm-a22b2ecf-1478-4400-877e-07a32e53a897-c1870014.md) |  |

### Workbooks (1)

**In solution [Squadra Technologies SecRmm](../solutions/squadra-technologies-secrmm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSentinelWorkbookForRemovableStorageSecurityEvents](../content/squadra-technologies-secrmm-azuresentinelworkbookforremovablestoragesecurityevents-c1ab5ac4.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

