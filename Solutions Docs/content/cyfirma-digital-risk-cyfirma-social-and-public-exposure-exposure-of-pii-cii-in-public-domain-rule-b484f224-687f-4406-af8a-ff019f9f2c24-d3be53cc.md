# CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

"This analytics rule detects high severity alerts from CYFIRMA indicating exposure of Personally Identifiable Information (PII) or Confidential Information (CII) in public or unsecured sources.  Such leaks may include email addresses, credentials, phone numbers, or other sensitive personal or organizational data.  These exposures can lead to identity theft, phishing, credential compromise, or regulatory non-compliance.  Investigate promptly and initiate remediation steps including user notificat

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `b484f224-687f-4406-af8a-ff019f9f2c24` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, Collection, CredentialAccess |
| **Techniques** | T1078, T1003, T1213, T1537 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/SPEExposureOfPIICIIMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)

