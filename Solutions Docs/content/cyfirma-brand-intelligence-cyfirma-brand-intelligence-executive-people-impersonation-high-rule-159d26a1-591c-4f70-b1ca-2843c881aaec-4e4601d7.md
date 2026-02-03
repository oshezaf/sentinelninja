# CYFIRMA - Brand Intelligence - Executive/People Impersonation High Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule detects potential impersonation of executive or high-profile individuals across digital platforms such as social media.  Such impersonation can be used to mislead stakeholders, perform social engineering attacks, or cause reputational damage to the organization.  Timely detection is crucial to assess risk and take down malicious profiles to protect brand and executive identity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md) |
| **ID** | `159d26a1-591c-4f70-b1ca-2843c881aaec` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, ResourceDevelopment, InitialAccess |
| **Techniques** | T1589.003, T1585.001, T1566.002 |
| **Required Connectors** | [CyfirmaBrandIntelligenceAlertsDC](../connectors/cyfirmabrandintelligencealertsdc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Analytic%20Rules/BIExecutivePeopleImpersonationHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaBIExecutivePeopleAlerts_CL`](../tables/cyfirmabiexecutivepeoplealerts-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)

