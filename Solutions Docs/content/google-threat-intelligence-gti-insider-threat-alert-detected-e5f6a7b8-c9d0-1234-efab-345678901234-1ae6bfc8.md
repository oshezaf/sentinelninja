# GTI - Insider Threat Alert Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggers an incident when a GTI Relevance System Alert of type insider_threat is ingested. Insider Threat alerts indicate that GTI has identified intelligence suggesting malicious or negligent activity by individuals with legitimate access to your organisation - such as employee credential sales, internal data exposure, or rogue employee activity observed in underground sources. Each unique Alert ID is grouped into a single incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **ID** | `e5f6a7b8-c9d0-1234-efab-345678901234` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, Exfiltration, CredentialAccess, Impact |
| **Techniques** | T1068, T1078, T1567, T1552, T1485 |
| **Required Connectors** | [GoogleThreatIntelligenceRelevanceSystemAlertsAPI](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Analytic%20Rules/RelevanceSystemAlerts/GTI_InsiderThreatAlerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

