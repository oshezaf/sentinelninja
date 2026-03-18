# CrowdStrike_Registry_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (33 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeS3FDR_ccp/CrowdStrike_Registry_Events_CL.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdditionalFields | dynamic |  |
| aid | string |  |
| aip | string |  |
| AuthenticationId | string |  |
| BoundingLimitCount | long |  |
| BoundingLimitDuration | string |  |
| cid | string |  |
| ConfigBuild | string |  |
| ConfigStateHash | string |  |
| ContextProcessId | string |  |
| ContextThreadId | string |  |
| ContextTimeStamp | real |  |
| CrowdStrikeId | string |  |
| EffectiveTransmissionClass | string |  |
| Entitlements | string |  |
| event_platform | string |  |
| event_simpleName | string |  |
| name | string |  |
| OciContainerId | string |  |
| RegBinaryValue | string |  |
| RegClassificationFlags | string |  |
| RegClassificationIndex | string |  |
| RegNumericValue | int |  |
| RegObjectName | string |  |
| RegOperationType | string |  |
| RegStringValue | string |  |
| RegType | string |  |
| RegValueName | string |  |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| timestamp | long |  |
| TokenType | string |  |
| TreeId | string |  |
| UserName | string |  |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

