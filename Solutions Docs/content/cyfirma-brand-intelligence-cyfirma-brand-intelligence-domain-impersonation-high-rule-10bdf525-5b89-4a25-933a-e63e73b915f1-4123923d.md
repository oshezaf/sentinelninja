# CYFIRMA - Brand Intelligence - Domain Impersonation High Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

"This analytics rule detects high-risk domain impersonation activity, where newly registered or existing domains closely resemble the legitimate brand name or organizational assets.  These suspicious domains may use typosquatting, homoglyphs, or brand keywords to mislead users, steal credentials, or host phishing/malicious content.  The domains are identified through CYFIRMA's external threat intelligence feeds and flagged due to potential misuse in impersonation, fraud, or social engineering at

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md) |
| **ID** | `10bdf525-5b89-4a25-933a-e63e73b915f1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess, CommandAndControl |
| **Techniques** | T1583.001, T1586.002, T1566.002, T1566.001, T1071.003, T1071.001 |
| **Required Connectors** | [CyfirmaBrandIntelligenceAlertsDC](../connectors/cyfirmabrandintelligencealertsdc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Analytic%20Rules/BIDomainImpersonationHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaBIDomainITAssetAlerts_CL`](../tables/cyfirmabidomainitassetalerts-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)

