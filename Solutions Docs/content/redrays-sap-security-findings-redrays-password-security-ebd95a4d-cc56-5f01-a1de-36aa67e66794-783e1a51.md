# RedRays - Password Security

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies new or materially changed, actionable password security findings from RedRays. Only High or Critical findings are selected. Initial findings raise alerts only if you enable baseline alerting in RedRays. The ATT&CK mapping describes password recovery during an authorized assessment, not evidence of an adversary attack. Records outside the one-day query window do not trigger this rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md) |
| **ID** | `ebd95a4d-cc56-5f01-a1de-36aa67e66794` |
| **Severity** | High |
| **Status** | InPreview |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [RedRaysSAPSecurityFindings](../connectors/redrayssapsecurityfindings.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Analytic%20Rules/RedRaysRecoveredPasswords.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`RedRaysPasswordFindings_CL`](../tables/redrayspasswordfindings-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md)

