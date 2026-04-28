# Copilot - Plugin Enabled After Being Disabled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a Copilot plugin is re-enabled after being previously disabled. This could indicate a possible attacker restoring their backdoor. This rule identifies security control bypass scenarios where disabled plugins are reactivated, potentially indicating malicious activity or policy violations.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| **ID** | `b2c3d4e5-f6a7-48b9-c0d1-e2f3a4b5c6d7` |
| **Severity** | Medium |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [MicrosoftCopilot](../connectors/microsoftcopilot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Hunting%20Queries/CopilotPluginReEnabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CopilotActivity`](../tables/copilotactivity.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Copilot](../solutions/microsoft-copilot.md)

