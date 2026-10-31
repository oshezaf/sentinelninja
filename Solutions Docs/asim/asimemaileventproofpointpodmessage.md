# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> ASIM Email Event parser for Proofpoint POD messages

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimEmailEventProofpointPODMessage` |
| **Built-in Parser** | `_ASim_EmailEvent_ProofpointPODMessage` |
| **Schema** | EmailEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Proofpoint On Demand Email Security |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimEmailEvent/CHANGELOG/ASimEmailEventProofpointPODMessage.md)) |
| **Last Updated** | Oct 23, 2026 |
| **Unifying Parser** | [ASimEmailEvent](asimemailevent.md) |
| **Source File** | [Parsers\ASimEmailEvent\Parsers\ASimEmailEventProofpointPODMessage.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimEmailEvent/Parsers/ASimEmailEventProofpointPODMessage.yaml) |

## Description

Normalizes message inspection records from the CCP connector's ProofpointPODMessage_CL
table to ASIM EmailEvent. Each source message remains one event, including messages
with multiple recipients or MIME parts. Filter disposition is not delivery confirmation.
Connection hosts populate ASIM hostname fields only when they match the expected
hostname formats; IP-shaped or malformed host values are not mislabeled as names.
DMARC quarantine/reject normalize to Fail and retain their policy; pass/none normalize
case-insensitively. DMARC temperror/permerror retain their original value but have no
normalized result because EmailEvent has no matching error enumeration.
Dispositions reject/discard map to Blocked, hold to Quarantined, redirect to Redirected,
and continue/accept/retry to NA without asserting successful delivery.
Live source sampling and schema/data validation are deferred by user direction.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [ProofpointCCPDefinition](../connectors/proofpointccpdefinition.md) | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| [ProofpointPOD](../connectors/proofpointpod.md) | [Proofpoint On demand(POD) Email Security (legacy connector)](../solutions/proofpoint-on-demand-pod-email-security.md) |

**Solutions:** [Proofpoint On demand(POD) Email Security (legacy connector)](../solutions/proofpoint-on-demand-pod-email-security.md)

## References

- [ASIM Email Event Schema](https://aka.ms/ASimEmailEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Proofpoint on Demand Log API](https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

