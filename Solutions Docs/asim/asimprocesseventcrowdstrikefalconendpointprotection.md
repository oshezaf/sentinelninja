# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Process Event ASIM parser for CrowdStrike Falcon Endpoint Protection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventCrowdStrikeFalconEndpointProtection` |
| **Built-in Parser** | `_ASim_ProcessEvent_CrowdStrikeFalconEndpointProtection` |
| **Schema** | ProcessEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Endpoint Protection |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/ASimProcessEventCrowdStrikeFalconEndpointProtection.md)) |
| **Last Updated** | Oct 29, 2026 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventCrowdStrikeFalconEndpointProtection.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventCrowdStrikeFalconEndpointProtection.yaml) |

## Description

Normalizes CrowdStrike_Process_Events_CL process creation, synthetic process observations,
process termination, and termination requests to ASIM ProcessEvent 1.0.0.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CrowdStrike_Process_Events_CL`](../tables/crowdstrike-process-events-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdStrikeFalconS3CCPDefinition](../connectors/crowdstrikefalcons3ccpdefinition.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Endpoint Protection](https://www.crowdstrike.com/en-us/platform/endpoint-security/)
- [CrowdStrike ProcessRollup2 data source](https://research.splunk.com/sources/cbb06880-9dd9-4542-ac60-bd6e5d3c3e4e/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

