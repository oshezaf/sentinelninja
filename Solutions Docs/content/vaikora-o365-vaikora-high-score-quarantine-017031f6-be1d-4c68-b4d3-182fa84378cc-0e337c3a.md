# Vaikora - High score quarantine

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies high-confidence phishing or suspected-threat quarantine events from Vaikora for O365. Fires when the classifier returns action_id 4 (Suspected) or 5 (Phishing) with confidence above 0.8 on a Microsoft 365 mailbox.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vaikora-O365](../solutions/vaikora-o365.md) |
| **ID** | `017031f6-be1d-4c68-b4d3-182fa84378cc` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess, Collection, Exfiltration |
| **Techniques** | T1566, T1566.001, T1566.002 |
| **Required Connectors** | [VaikoraO365](../connectors/vaikorao365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-O365/Analytic%20Rules/Vaikora%20-%20High%20score%20quarantine.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vaikora-O365](../solutions/vaikora-o365.md)

