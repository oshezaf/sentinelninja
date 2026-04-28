# BeyondTrustPM_ActivityAudits_CL

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

## Schema (46 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BeyondTrustPM_ActivityAudits_CL.json)

| Column Name | Type |
|:------------|:-----|
| agentDataAuditing | dynamic |
| apiClientDataAuditing | dynamic |
| auditType | string |
| authorizationRequestDataAuditing | dynamic |
| autoUpdateGroupClientSettingsDataAuditing | dynamic |
| autoUpdateGroupConfigSettingsDataAuditing | dynamic |
| autoUpdateGroupMacClientSettingsDataAuditing | dynamic |
| autoUpdateRateLimitDataAuditing | dynamic |
| azureADIntegrationDataAuditing | dynamic |
| changedBy | string |
| Computer | string |
| computerDataAuditing | dynamic |
| computerPolicyDataAuditing | dynamic |
| created | datetime |
| details | string |
| entity | string |
| entityName | string |
| groupDataAuditing | dynamic |
| id | int |
| identityProviderGroupDataAuditing | dynamic |
| installationKeyDataAuditing | dynamic |
| ManagementGroupName | string |
| managementRuleDataAuditing | dynamic |
| mapToIdentityProviderGroupAuditing | dynamic |
| MG | string |
| mmcRemoteClientDataAuditing | dynamic |
| openIdConfigDataAuditing | dynamic |
| permissionGroupDataAuditing | dynamic |
| policyDataAuditing | dynamic |
| policyRevisionDataAuditing | dynamic |
| RawData | string |
| reputationSettingsDataAuditing | dynamic |
| securitySettingsDataAuditing | dynamic |
| settingsDataAuditing | dynamic |
| siemIntegrationBaseDetailModel | dynamic |
| siemIntegrationQradarAuditing | dynamic |
| siemIntegrationS3Auditing | dynamic |
| siemIntegrationSentinelAuditing | dynamic |
| siemIntegrationSplunkAuditing | dynamic |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timeTransmitted | datetime |
| user | string |
| userDataAuditing | dynamic |
| userId | string |

## Solutions (1)

This table is used by the following solutions:

- [BeyondTrustPMCloud](../solutions/beyondtrustpmcloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BeyondTrust PM Cloud](../connectors/beyondtrustpmcloud.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [BeyondTrustPMCloud](../solutions/beyondtrustpmcloud.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BeyondTrustPMCloud](../content/beyondtrustpmcloud-beyondtrustpmcloud-3d8fe28b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

