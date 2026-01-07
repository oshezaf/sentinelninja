# CYFIRMA - Data Breach and Web Monitoring - Ransomware Exposure Detected Rule

This analytics rule detects high-severity ransomware threats targeting the organization, as reported by CYFIRMA's Dark Web and Data Breach Intelligence feeds.  The alert is generated when threat actors post, claim, or associate ransomware activity with corporate domains, brands, or subsidiaries, indicating a potential data breach, extortion attempt, or unauthorized access.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `d5f9a6fe-7fd2-488c-8690-0ca24fba43dc` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Exfiltration |
| **Techniques** | T1566.001, T1566.002, T1566.003 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/DBWMRansomwareExposureDetectedMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaDBWMRansomwareAlerts_CL`](../tables/cyfirmadbwmransomwarealerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
