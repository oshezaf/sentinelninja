# Netskope - High Severity DLP Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects Netskope DLP (Data Loss Prevention) alerts raised with high or critical severity. These alerts indicate sensitive data (e.g. PII, source code, financial records) matched a DLP policy during upload, download, or sharing and may represent data exfiltration.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Netskopev2](../solutions/netskopev2.md) |
| **ID** | `04e36dfa-05b3-45bd-b39f-28b6fac71337` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Collection |
| **Techniques** | T1567, T1005 |
| **Required Connectors** | [NetskopeAlertsEvents](../connectors/netskopealertsevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Analytic%20Rules/NetskopeAlertsEvents_HighSeverityDLPAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Netskopev2](../solutions/netskopev2.md)

