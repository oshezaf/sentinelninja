# Malicious Connection to LDAP port for CVE-2021-44228 vulnerability

This query detects exploitation attempts for CVE-2021-44228 involving log4j vulnerability by looking for connections to default LDAP ports.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md) |
| **ID** | `19abc034-139e-4e64-a05d-cb07ce8b003b` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor%28vminsights%29.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Apache%20Log4j%20Vulnerability%20Detection/Hunting%20Queries/NetworkConnectionldap_log4j.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
