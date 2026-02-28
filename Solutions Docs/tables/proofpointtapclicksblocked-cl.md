# ProofPointTAPClicksBlocked_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ProofPointTAPClicksBlocked_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| campaignId_s | string |
| classification_s | string |
| clickIP_s | real |
| clickTime_t | datetime |
| Computer | string |
| GUID_s | string |
| ManagementGroupName | string |
| messageID_s | string |
| MG | string |
| RawData | string |
| recipient_s | string |
| sender_s | string |
| senderIP_s | string |
| SourceSystem | string |
| TenantId | string |
| threatID_s | string |
| threatStatus_s | string |
| threatTime_t | datetime |
| threatURL_s | string |
| TimeGenerated | datetime |
| Type | string |
| url_s | string |
| userAgent_s | string |

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

