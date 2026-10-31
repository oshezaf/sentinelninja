# Delinea - Failed authentication spike (single account)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a single account accumulates an unusually high number of failed authentication events within a short window. Only authentication events - MFA, login and sign-in - are considered; the service-wide view of every failure lives in the 'Delinea - Failed operations' hunting query. A failure is a failed MFA result, a failed password factor, or any login fail reason. A burst of failures for one account can indicate brute-force or credential-stuffing activity. Tune 'threshold' to your enviro

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `e6d743f2-a538-455f-899c-251926b9071e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Analytic%20Rules/DelineaFailedAuthSpike.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

