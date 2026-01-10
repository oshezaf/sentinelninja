# CYFIRMA - Brand Intelligence - Domain Impersonation Medium Rule

"This analytics rule detects high-risk domain impersonation activity, where newly registered or existing domains closely resemble the legitimate brand name or organizational assets.  These suspicious domains may use typosquatting, homoglyphs, or brand keywords to mislead users, steal credentials, or host phishing/malicious content.  The domains are identified through CYFIRMA's external threat intelligence feeds and flagged due to potential misuse in impersonation, fraud, or social engineering at

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md) |
| **ID** | `8f97ddbe-ab66-4f6c-b675-73b5eeb07259` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess, CommandAndControl |
| **Techniques** | T1583.001, T1586.002, T1566.002, T1566.001, T1071.003, T1071.001 |
| **Required Connectors** | [CyfirmaBrandIntelligenceAlertsDC](../connectors/cyfirmabrandintelligencealertsdc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Analytic%20Rules/BIDomainImpersonationMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaBIDomainITAssetAlerts_CL`](../tables/cyfirmabidomainitassetalerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

