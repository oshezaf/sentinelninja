# Copilot - Plugin Tampering (Enable and Disable Within 5 Minutes)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a user enables and disables Copilot plugins within a 5-minute window. This behavior often indicates probing for security controls or living-off-Copilot techniques. This rule identifies discovery and defense evasion activities where users rapidly toggle plugin states, potentially testing security boundaries.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| **ID** | `d4e5f6a7-b8c9-40d1-e2f3-a4b5c6d7e8f9` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, DefenseEvasion |
| **Techniques** | T1087, T1562 |
| **Required Connectors** | [MicrosoftCopilot](../connectors/microsoftcopilot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Analytic%20Rules/CopilotPluginTampering.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CopilotActivity`](../tables/copilotactivity.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Copilot](../solutions/microsoft-copilot.md)

