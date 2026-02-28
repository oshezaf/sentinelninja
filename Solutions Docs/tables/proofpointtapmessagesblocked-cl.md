# ProofPointTAPMessagesBlocked_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (37 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ProofPointTAPMessagesBlocked_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| ccAddresses_s | string |
| cluster_s | string |
| completelyRewritten_b | bool |
| Computer | string |
| fromAddress_s | string |
| GUID_s | string |
| headerFrom_s | string |
| headerReplyTo_s | string |
| impostorScore_d | real |
| malwareScore_d | real |
| ManagementGroupName | string |
| messageID_s | string |
| messageParts_s | string |
| messageSize_d | real |
| messageTime_t | datetime |
| MG | string |
| modulesRun_s | string |
| phishScore_d | real |
| policyRoutes_s | string |
| QID_s | string |
| quarantineFolder_s | string |
| quarantineRule_s | string |
| RawData | string |
| recipient_s | string |
| replyToAddress_s | string |
| sender_s | string |
| senderIP_s | string |
| SourceSystem | string |
| spamScore_d | real |
| subject_s | string |
| TenantId | string |
| threatsInfoMap_s | string |
| TimeGenerated | datetime |
| toAddresses_s | string |
| Type | string |
| xmailer_s | string |

## Solutions (1)

This table is used by the following solutions:

- [ProofPointTap](../solutions/proofpointtap.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Proofpoint TAP](../connectors/proofpointtap.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ProofpointTAPEvent](../parsers/proofpointtapevent.md) | [ProofPointTap](../solutions/proofpointtap.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

