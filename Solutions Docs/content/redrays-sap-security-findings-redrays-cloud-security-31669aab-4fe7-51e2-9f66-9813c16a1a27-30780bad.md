# RedRays - Cloud Security

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies new or materially changed, actionable BTP security findings from RedRays. Only High or Critical findings are selected. Initial findings raise alerts only if you enable baseline alerting in RedRays. The ATT&CK mapping describes how an adversary could abuse misconfigured BTP accounts and access, not evidence of an attack. Records outside the one-day query window do not trigger this rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md) |
| **ID** | `31669aab-4fe7-51e2-9f66-9813c16a1a27` |
| **Severity** | High |
| **Status** | InPreview |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [RedRaysSAPSecurityFindings](../connectors/redrayssapsecurityfindings.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Analytic%20Rules/RedRaysBtpSecurityFindings.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`RedRaysCloudFindings_CL`](../tables/redrayscloudfindings-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md)

