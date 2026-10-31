# Delinea - Configuration changes

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Threshold-free audit trail of state-changing modifications to Delinea platform configuration over the lookback window - authentication profiles, security / access policies, SSO or identity-provider (SAML / OIDC / federation) settings, IP range / restriction rules, integration / webhook / connector settings, and role / permission changes. Read-only "viewed" events are excluded so only add / update / delete / enable / disable actions remain. The matching analytic rule only fires on its own schedul

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `7adfee87-8c63-4625-a2db-c6971a3233b6` |
| **Tactics** | DefenseEvasion, Persistence |
| **Techniques** | T1556, T1484, T1098 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Hunting%20Queries/DelineaConfigChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |  | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

