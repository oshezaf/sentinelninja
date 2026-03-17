# CloudGuard_SecurityEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (44 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20CloudGuard%20CNAPP%5CData%20Connectors%5CCloudGuard_ccp/CloudGuard_Tables.json)

| Column Name | Type |
|:------------|:-----|
| acknowledged | bool |
| action | string |
| additionalFields | dynamic |
| alertType | string |
| bundleId | int |
| bundleName | string |
| category | string |
| cloudAccountExternalId | string |
| cloudAccountId | string |
| cloudAccountType | string |
| comments | dynamic |
| description | string |
| entityDome9Id | string |
| entityExternalId | string |
| entityName | string |
| entityNetwork | dynamic |
| entityTags | dynamic |
| entityType | string |
| entityTypeByEnvironmentType | string |
| EventId | string |
| findingKey | string |
| isExcluded | bool |
| labels | dynamic |
| lastSeenTime | datetime |
| magellan | dynamic |
| occurrences | dynamic |
| organizationalUnitId | string |
| organizationalUnitPath | string |
| origin | string |
| ownerUserName | dynamic |
| region | string |
| remediation | string |
| remediationActions | dynamic |
| ruleId | string |
| ruleLogic | string |
| ruleName | string |
| scanId | dynamic |
| severity | string |
| status | string |
| statusReason | string |
| tag | string |
| TimeGenerated | datetime |
| updatedTime | datetime |
| webhookResponses | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Check Point CloudGuard CNAPP](../solutions/check-point-cloudguard-cnapp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Check Point CloudGuard CNAPP Connector for Microsoft Sentinel](../connectors/cloudguardccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

