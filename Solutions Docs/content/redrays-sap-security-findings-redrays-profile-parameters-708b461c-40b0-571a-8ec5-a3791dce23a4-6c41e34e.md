# RedRays - Profile Parameters

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies new or materially changed, actionable profile parameter checks from RedRays. Checks marked VULNERABLE raise Medium severity alerts under the integration's policy. Initial findings raise alerts only if you enable baseline alerting in RedRays. The ATT&CK mapping describes how an adversary could abuse weakened SAP security settings, not evidence of an attack. Records outside the one-day query window do not trigger this rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md) |
| **ID** | `708b461c-40b0-571a-8ec5-a3791dce23a4` |
| **Severity** | Medium |
| **Status** | InPreview |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, CredentialAccess |
| **Techniques** | T1562, T1110 |
| **Required Connectors** | [RedRaysSAPSecurityFindings](../connectors/redrayssapsecurityfindings.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Analytic%20Rules/RedRaysVulnerableProfileParameters.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`RedRaysProfileChecks_CL`](../tables/redraysprofilechecks-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md)

