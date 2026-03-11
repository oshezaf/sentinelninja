# ProofPointTAPMessagesBlockedV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap%5CData%20Connectors%5CProofpointTAP_CCP/ProofPointTAPMessagesBlockedV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| ccAddresses | dynamic |
| cluster | string |
| completelyRewritten | bool |
| fromAddress | dynamic |
| GUID | string |
| headerFrom | string |
| headerReplyTo | string |
| id | string |
| impostorScore | int |
| malwareScore | int |
| messageID | string |
| messageParts | dynamic |
| messageSize | int |
| messageTime | datetime |
| modulesRun | dynamic |
| phishScore | int |
| policyRoutes | dynamic |
| QID | string |
| quarantineFolder | string |
| quarantineRule | string |
| recipient | dynamic |
| replyToAddress | dynamic |
| sender | string |
| senderIP | string |
| spamScore | int |
| subject | string |
| threatsInfoMap | dynamic |
| TimeGenerated | datetime |
| toAddresses | dynamic |
| xmailer | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [ProofPointTap](../solutions/proofpointtap.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Proofpoint TAP (via Codeless Connector Platform)](../connectors/proofpointtapv2.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [ProofPointTap](../solutions/proofpointtap.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ProofpointTAP](../content/proofpointtap-proofpointtap-d0be2a01.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ProofpointTAPEvent](../parsers/proofpointtapevent.md) | [ProofPointTap](../solutions/proofpointtap.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

