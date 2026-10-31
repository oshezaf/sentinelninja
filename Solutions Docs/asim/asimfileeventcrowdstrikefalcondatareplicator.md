# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> File Event ASIM parser for CrowdStrike Falcon Data Replicator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventCrowdStrikeFalconDataReplicator` |
| **Built-in Parser** | `_ASim_FileEvent_CrowdStrikeFalconDataReplicator` |
| **Schema** | FileEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Data Replicator |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/ASimFileEventCrowdStrikeFalconDataReplicator.md)) |
| **Last Updated** | Oct 26, 2026 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventCrowdStrikeFalconDataReplicator.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventCrowdStrikeFalconDataReplicator.yaml) |

## Description

Normalizes CrowdStrike Falcon Data Replicator file operations from CrowdStrike_File_Events_CL to ASIM FileEvent 1.0.0.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CrowdStrike_File_Events_CL`](../tables/crowdstrike-file-events-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdStrikeFalconS3CCPDefinition](../connectors/crowdstrikefalcons3ccpdefinition.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Data Replicator connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeS3FDR_ccp/DataConnectorDefinition.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

