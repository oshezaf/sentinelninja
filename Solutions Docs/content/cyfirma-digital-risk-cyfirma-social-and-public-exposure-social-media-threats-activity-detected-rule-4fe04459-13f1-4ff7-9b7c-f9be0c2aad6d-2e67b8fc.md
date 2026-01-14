# CYFIRMA - Social and Public Exposure -  Social Media Threats  Activity Detected Rule

This rule detects high-severity social threat alerts from CYFIRMA related to impersonation, fake profiles, or malicious activities on social platforms that may target executives, brands, or employees.  These threats can result in reputational damage, phishing, or social engineering attacks.  Immediate investigation and takedown are recommended to minimize risk.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `4fe04459-13f1-4ff7-9b7c-f9be0c2aad6d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, Reconnaissance, InitialAccess, Impact |
| **Techniques** | T1585.001, T1593, T1566, T1582, T1491 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/SPESocialMediaThreatsHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaSPESocialThreatAlerts_CL`](../tables/cyfirmaspesocialthreatalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)

