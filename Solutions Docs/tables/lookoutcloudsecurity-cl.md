# LookoutCloudSecurity_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/LookoutCloudSecurity_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| actionType_s | string |
| activityType_s | string |
| anomalyName_s | string |
| anomalyType_s | string |
| appName_s | string |
| cloudType_s | string |
| Computer | string |
| contentName_s | string |
| contentUrl_s | string |
| currentCity_s | string |
| currentEventId_g | string |
| currentTimestamp_t | datetime |
| data_s | string |
| eventId_g | string |
| eventType_s | string |
| externalCollaborators_s | string |
| ManagementGroupName | string |
| Message | string |
| MG | string |
| policyName_s | string |
| previousCity_s | string |
| previousEventId_g | string |
| previousTimestamp_t | datetime |
| RawData | string |
| scanType_s | string |
| SourceSystem | string |
| status_s | string |
| statusCode_d | real |
| TenantId | string |
| TimeGenerated | datetime |
| timeStamp_t | datetime |
| Type | string |
| userEmail_s | string |
| violation_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) |  |

---

## Parsers Using This Table (3)

### Other Parsers (3)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [LookoutCSActivities](../parsers/lookoutcsactivities.md) | [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) |  |
| [LookoutCSAnomalies](../parsers/lookoutcsanomalies.md) | [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) |  |
| [LookoutCSViolations](../parsers/lookoutcsviolations.md) | [Lookout Cloud Security Platform for Microsoft Sentinel](../solutions/lookout-cloud-security-platform-for-microsoft-sentinel.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

