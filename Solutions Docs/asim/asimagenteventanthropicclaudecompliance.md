# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Agent Event ASIM parser for Anthropic Claude Compliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAgentEventAnthropicClaudeCompliance` |
| **Built-in Parser** | `_ASim_AgentEvent_AnthropicClaudeCompliance` |
| **Schema** | AgentEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Anthropic Claude Compliance |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAgentEvent/CHANGELOG/ASimAgentEventAnthropicClaudeCompliance.md)) |
| **Last Updated** | Jul 08, 2026 |
| **Unifying Parser** | [ASimAgentEvent](asimagentevent.md) |
| **Source File** | [Parsers\ASimAgentEvent\Parsers\ASimAgentEventAnthropicClaudeCompliance.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAgentEvent/Parsers/ASimAgentEventAnthropicClaudeCompliance.yaml) |

## Description

This ASIM parser supports normalizing the Anthropic Claude Compliance logs (via Codeless Connector Framework by BlueVoyant) to the ASIM Agent normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BV_ClaudeCompliance_ComplianceActivities_CL`](../tables/bv-claudecompliance-complianceactivities-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [BV-ClaudeCompliance](../connectors/bv-claudecompliance.md) | [BlueVoyant Anthropic ClaudeCompliance](../solutions/bluevoyant-anthropic-claudecompliance.md) |

**Solutions:** [BlueVoyant Anthropic ClaudeCompliance](../solutions/bluevoyant-anthropic-claudecompliance.md)

## References

- [ASIM Agent Schema](https://aka.ms/ASimAgentEventDoc)
- [Claude Compliance API documentation](https://platform.claude.com/docs/en/manage-claude/compliance-api)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

