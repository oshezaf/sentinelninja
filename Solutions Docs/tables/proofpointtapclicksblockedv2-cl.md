# ProofPointTAPClicksBlockedV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (16 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap/Data%20Connectors/ProofpointTAP_CCP/ProofpointTAP_DCR.json)

| Column Name | Type |
|:------------|:-----|
| campaignId | string |
| classification | string |
| clickIP | string |
| clickTime | datetime |
| GUID | string |
| id | string |
| messageID | string |
| recipient | string |
| sender | string |
| senderIP | string |
| threatID | string |
| threatStatus | string |
| threatTime | datetime |
| threatURL | string |
| url | string |
| userAgent | string |

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

