# BeyondTrustPM_ClientEvents_CL

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

## Schema (58 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BeyondTrustPM_ClientEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| agentId | string |
| agentVersion | string |
| Computer | string |
| destinationData | dynamic |
| ecsVersion | string |
| epmConfigurationData | dynamic |
| epmEventAction | string |
| epmEventType | string |
| epmGroupId | string |
| epmSchemaVersion | string |
| epmTenantId | string |
| eventAction | string |
| eventCategory | string |
| eventCode | string |
| eventId | string |
| eventIngested | datetime |
| eventKind | string |
| eventOutcome | string |
| eventProvider | string |
| eventReason | string |
| eventType | string |
| fileData | dynamic |
| fileHashMd5 | string |
| fileHashSha1 | string |
| fileHashSha256 | string |
| fileName | string |
| filePath | string |
| hostArchitecture | string |
| hostData | dynamic |
| hostDomain | string |
| hostHostname | string |
| hostId | string |
| hostIp | string |
| hostName | string |
| hostOsName | string |
| hostOsPlatform | string |
| hostOsType | string |
| hostOsVersion | string |
| ManagementGroupName | string |
| MG | string |
| networkData | dynamic |
| processCommandLine | string |
| processData | dynamic |
| processExecutable | string |
| processPid | int |
| RawData | string |
| relatedData | dynamic |
| sourceData | dynamic |
| SourceSystem | string |
| tags | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp | datetime |
| timeTransmitted | datetime |
| userData | dynamic |
| userDomain | string |
| userId | string |
| userName | string |

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

