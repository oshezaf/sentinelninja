# GTI - High and Critical Priority Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggers an incident whenever a GTI Relevance System Alert with priority level HIGH or CRITICAL is ingested. These alerts indicate threats that Google Threat Intelligence has assessed as requiring immediate attention based on relevance, severity, and potential business impact. Each unique Alert ID is grouped into a single incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **ID** | `b2c3d4e5-f6a7-8901-bcde-f12345678902` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Impact, CredentialAccess, Exfiltration |
| **Techniques** | T1566, T1078, T1552, T1486, T1567 |
| **Required Connectors** | [GoogleThreatIntelligenceRelevanceSystemAlertsAPI](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Analytic%20Rules/RelevanceSystemAlerts/GTI_HighCriticalPriorityAlerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

