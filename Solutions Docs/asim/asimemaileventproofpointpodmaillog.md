# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Email Event ASIM parser for Proofpoint POD MailLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimEmailEventProofpointPODMailLog` |
| **Built-in Parser** | `_ASim_EmailEvent_ProofpointPODMailLog` |
| **Schema** | EmailEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Proofpoint POD MailLog |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimEmailEvent/CHANGELOG/ASimEmailEventProofpointPODMailLog.md)) |
| **Last Updated** | Oct 24, 2026 |
| **Unifying Parser** | [ASimEmailEvent](asimemailevent.md) |
| **Source File** | [Parsers\ASimEmailEvent\Parsers\ASimEmailEventProofpointPODMailLog.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimEmailEvent/Parsers/ASimEmailEventProofpointPODMailLog.yaml) |

## Description

Normalizes ProofpointPODMailLog_CL SMTP receipt and delivery records to EmailEvent.
Uses the CCP table schema and repository samples; live validation is deferred.
Envelope recipients are retained in AdditionalFields, not mapped to header recipients.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | ✓ | ✓ | ✓ |

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
- [Proofpoint on Demand Log API](https://proofpoint.my.site.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

