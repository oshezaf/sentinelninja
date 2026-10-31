# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Email Event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimEmailEvent` (parameter-less) · `imEmailEvent` (filtering) |
| **Built-in Parser** | `_ASim_EmailEvent` (parameter-less) · `_Im_EmailEvent` (filtering) |
| **Schema** | EmailEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 1.0.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimEmailEvent/CHANGELOG/ASimEmailEvent.md)) |
| **Last Updated** | Oct 28, 2026 |
| **Source File** | [Parsers\ASimEmailEvent\Parsers\ASimEmailEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimEmailEvent/Parsers/ASimEmailEvent.yaml) |

## Description

This ASIM parser supports normalizing Email Event logs from all supported sources to the ASIM Email Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Defender for Office 365 | [_ASim_EmailEvent_MicrosoftDefenderOffice365](asimemaileventmicrosoftdefenderoffice365.md) |  |
| Proofpoint POD MailLog | [_ASim_EmailEvent_ProofpointPODMailLog](asimemaileventproofpointpodmaillog.md) | [Proofpoint On demand(POD) Email Security (legacy connector)](../solutions/proofpoint-on-demand-pod-email-security.md) |
| Proofpoint On Demand Email Security | [_ASim_EmailEvent_ProofpointPODMessage](asimemaileventproofpointpodmessage.md) | [Proofpoint On demand(POD) Email Security (legacy connector)](../solutions/proofpoint-on-demand-pod-email-security.md) |
| Proofpoint Targeted Attack Protection | [_ASim_EmailEvent_ProofpointTAPClicksPermitted](asimemaileventproofpointtapclickspermitted.md) |  |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Email Event Schema](https://aka.ms/ASimEmailEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

