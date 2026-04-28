# Copilot - Access From External IP Address

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when Copilot is accessed from an external IP address outside the corporate network. This is very dangerous if an attacker is using Copilot to enumerate data. This rule identifies potential account compromise scenarios where valid accounts are being used from unauthorized locations.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| **ID** | `f6a7b8c9-d0e1-42f3-a4b5-c6d7e8f9a0b1` |
| **Severity** | High |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [MicrosoftCopilot](../connectors/microsoftcopilot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Hunting%20Queries/CopilotExternalIPAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CopilotActivity`](../tables/copilotactivity.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Copilot](../solutions/microsoft-copilot.md)

