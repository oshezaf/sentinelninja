# GitLab - TI - Connection from Malicious IP

This query correlates Threat Intelligence data from Microsoft Sentinel with GitLab NGINX Access Logs (available in GitLab CE as well) to identify access from potentially TI-flagged IPs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitLab](../solutions/gitlab.md) |
| **ID** | `7241740a-5280-4b74-820a-862312d721a8` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab/Analytic%20Rules/GitLab_MaliciousIP.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to GitLab](../solutions/gitlab.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
