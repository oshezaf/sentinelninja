# GTI - High Relevance Alert Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggers an incident when a GTI Relevance System Alert is assessed as RELEVANCE_LEVEL_HIGH with a HIGH confidence level. High relevance means Google Threat Intelligence has determined the threat directly or very closely matches your organisation profile - regardless of threat type. These are the most actionable alerts and warrant priority investigation. Each unique Alert ID is grouped into a single incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **ID** | `f6a7b8c9-d0e1-2345-fabc-456789012345` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, Impact, CredentialAccess, PrivilegeEscalation |
| **Techniques** | T1566, T1068, T1078, T1567, T1486, T1552 |
| **Required Connectors** | [GoogleThreatIntelligenceRelevanceSystemAlertsAPI](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Analytic%20Rules/RelevanceSystemAlerts/GTI_HighRelevanceAlerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

