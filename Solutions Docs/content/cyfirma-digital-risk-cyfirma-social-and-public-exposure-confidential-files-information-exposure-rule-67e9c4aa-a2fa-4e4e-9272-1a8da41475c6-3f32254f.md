# CYFIRMA - Social and Public Exposure - Confidential Files Information Exposure Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule detects high-severity alerts from CYFIRMA regarding exposure of confidential files or forms linked to internal or client-related information, publicly accessible on platforms.  These exposures could lead to data leakage, compliance violations, or targeted attacks.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `67e9c4aa-a2fa-4e4e-9272-1a8da41475c6` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, Collection, Reconnaissance |
| **Techniques** | T1189, T1213, T1593, T1567.002 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/SPEConfidentialFilesHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyfirmaSPEConfidentialFilesAlerts_CL`](../tables/cyfirmaspeconfidentialfilesalerts-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)

