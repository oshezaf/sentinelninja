# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> ASIM Email Event parser for Proofpoint TAP permitted clicks

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimEmailEventProofpointTAPClicksPermitted` |
| **Built-in Parser** | `_ASim_EmailEvent_ProofpointTAPClicksPermitted` |
| **Schema** | EmailEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Proofpoint Targeted Attack Protection |
| **Parser Version** | 0.1.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimEmailEvent/CHANGELOG/ASimEmailEventProofpointTAPClicksPermitted.md)) |
| **Last Updated** | Oct 30, 2026 |
| **Unifying Parser** | [ASimEmailEvent](asimemailevent.md) |
| **Source File** | [Parsers\ASimEmailEvent\Parsers\ASimEmailEventProofpointTAPClicksPermitted.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimEmailEvent/Parsers/ASimEmailEventProofpointTAPClicksPermitted.yaml) |

## Description

Normalizes ProofPointTAPClicksPermittedV2_CL URL Defense click records as EmailEvent
interaction activity (EmailInteraction), preserving one event per source row.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM Email Event Schema](https://aka.ms/ASimEmailEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Proofpoint TAP SIEM API](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation/SIEM_API)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

