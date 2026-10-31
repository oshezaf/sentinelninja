# Delinea - Sensitive secret accessed by new user (first access in 14 days)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when a user accesses a high-value secret for the first time, with no access to that same secret by that user in the prior 14 days. First-time access to a sensitive secret can indicate lateral movement or credential targeting. Delinea reports no in-band sensitivity flag, so a secret is treated as high-value when its name or its folder matches 'sensitivePattern' (common privileged naming conventions), or when it appears in 'customSecretNames' / 'customFolders'. Both knobs are meant to be e

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `a7b167e2-9582-440b-8d47-53df2f73c4f4` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, LateralMovement, CredentialAccess |
| **Techniques** | T1078, T1555 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Analytic%20Rules/DelineaSensitiveSecretNewUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

