# GTI Relevance System Alert - Incident by Alert ID

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates a Microsoft Sentinel incident for each unique Google Threat Intelligence (GTI) Alert ID. Multiple ingestion records sharing the same Alert ID (e.g. updated snapshots of the same alert) are grouped into a single incident. The rule surfaces the most recent snapshot of each alert and maps severity from the GTI severity analysis field.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **ID** | `a1b2c3d4-e5f6-7890-abcd-ef1234567891` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Reconnaissance, Impact, CredentialAccess |
| **Techniques** | T1566, T1078, T1552, T1486, T1595 |
| **Required Connectors** | [GoogleThreatIntelligenceRelevanceSystemAlertsAPI](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Analytic%20Rules/RelevanceSystemAlerts/GTI_RelevanceSystemAlerts_IncidentByAlertId.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

