# CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule

"This analytics rule detects high severity alerts from CYFIRMA indicating exposure of Personally Identifiable Information (PII) or Confidential Information (CII) in public or unsecured sources.  Such leaks may include email addresses, credentials, phone numbers, or other sensitive personal or organizational data.  These exposures can lead to identity theft, phishing, credential compromise, or regulatory non-compliance.  Investigate promptly and initiate remediation steps including user notificat

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `52d71822-41e4-4c21-b36f-400294f2b43a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration, Collection, CredentialAccess |
| **Techniques** | T1078, T1003, T1213, T1537 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/SPEExposureOfPIICIIHighRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaSPEPIIAndCIIAlerts_CL`](../tables/cyfirmaspepiiandciialerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
