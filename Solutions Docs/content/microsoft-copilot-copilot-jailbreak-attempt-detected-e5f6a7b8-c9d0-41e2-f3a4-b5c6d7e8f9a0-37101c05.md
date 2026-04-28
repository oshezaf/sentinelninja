# Copilot - Jailbreak Attempt Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects jailbreak attempts in Copilot interactions where users are trying to bypass Copilot guardrails and security controls. This rule identifies prompt injection and LLM abuse scenarios that could lead to initial access, credential access, or system impact.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Copilot](../solutions/microsoft-copilot.md) |
| **ID** | `e5f6a7b8-c9d0-41e2-f3a4-b5c6d7e8f9a0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess, Impact |
| **Techniques** | T1078, T1110, T1565 |
| **Required Connectors** | [MicrosoftCopilot](../connectors/microsoftcopilot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot/Analytic%20Rules/CopilotJailbreakAttempt.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CopilotActivity`](../tables/copilotactivity.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Copilot](../solutions/microsoft-copilot.md)

