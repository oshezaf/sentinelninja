# Delinea - Platform configuration change

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects state-changing modifications (add / update / delete / enable / disable) to critical Delinea platform settings - authentication profiles and policies, SSO or identity-provider (SAML / OIDC / OAuth / federation) configuration, IP range / restriction rules and webhooks - that the acting user has not performed in the prior 14 days. Configuration tampering is frequently a precursor to defense evasion or persistence; routine changes an administrator makes regularly are baselined out, while a f

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `7c07194a-8eda-4cb7-9bc4-cd4700eb4c4d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Persistence |
| **Techniques** | T1556, T1484, T1098 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Analytic%20Rules/DelineaPlatformConfigChange.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

