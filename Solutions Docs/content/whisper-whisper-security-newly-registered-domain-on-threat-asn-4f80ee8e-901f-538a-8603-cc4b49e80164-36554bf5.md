# Whisper Security - Newly Registered Domain on Threat ASN

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies newly registered domains (under 7 days old) hosted on autonomous systems with elevated threat scores. This combination often indicates adversary infrastructure staging for phishing, malware delivery, or C2 operations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **ID** | `4f80ee8e-901f-538a-8603-cc4b49e80164` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1583 |
| **Required Connectors** | [WhisperSecurityConnector](../connectors/whispersecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Analytic%20Rules/NewlyRegisteredDomainThreatASN.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) | ? | ✓ | ? |
| [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Whisper](../solutions/whisper.md)

