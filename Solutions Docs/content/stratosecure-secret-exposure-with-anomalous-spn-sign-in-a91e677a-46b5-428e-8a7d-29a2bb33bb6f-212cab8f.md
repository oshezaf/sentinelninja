# Secret Exposure with Anomalous SPN Sign-In

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects applications with open hardcoded-secret findings (CWE-798, CWE-259, CWE-321, CWE-522) that have associated service principal sign-in anomalies. Correlates StratoSecure secret findings with AAD SPN sign-in failures.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [StratoSecure](../solutions/stratosecure.md) |
| **ID** | `a91e677a-46b5-428e-8a7d-29a2bb33bb6f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, DefenseEvasion |
| **Techniques** | T1552, T1078.004 |
| **Required Connectors** | [StratoSecurePush](../connectors/stratosecurepush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Analytic%20Rules/S2_Secret_AnomalousCredential.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | ✓ | ✗ | ✓ |
| [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to StratoSecure](../solutions/stratosecure.md)

