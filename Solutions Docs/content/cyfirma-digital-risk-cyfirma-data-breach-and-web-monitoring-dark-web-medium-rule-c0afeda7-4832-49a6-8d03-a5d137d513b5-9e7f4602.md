# CYFIRMA - Data Breach and Web Monitoring - Dark Web Medium Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects critical alerts from CYFIRMA related to sensitive data or credentials leaked on dark web forums.  These events often indicate unauthorized access or compromise of enterprise systems, cloud environments, or identity platforms.  Immediate investigation is required to assess breach scope and initiate mitigation, including credential resets, access reviews, and threat actor tracking.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `c0afeda7-4832-49a6-8d03-a5d137d513b5` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Collection, Exfiltration, Impact |
| **Techniques** | T1552.001, T1555.003, T1212, T1119, T1048, T1486 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/DBWMDarkWebMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaDBWMDarkWebAlerts_CL`](../tables/cyfirmadbwmdarkwebalerts-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)

