# Malicious web application requests linked with Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts

Takes Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts where web scripts are present in the evidence and correlates with requests made to those scripts in the WCSIISLog to surface new alerts for potentially malicious web request activity. The lookback for alerts is set to 1h and the lookback for W3CIISLogs is set to 7d. A sample set of popular web script extensions has been provided in scriptExtensions that should be tailored to your environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `fbfbf530-506b-49a4-81ad-4030885a195c` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1505 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Analytic%20Rules/MaliciousAlertLinkedWebRequests.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)
- [`W3CIISLog`](../tables/w3ciislog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
