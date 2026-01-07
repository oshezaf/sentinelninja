# Tomcat - Server errors after multiple requests from same IP

Detects server errors after multiple requests from same IP address.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Tomcat](../solutions/tomcat.md) |
| **ID** | `875da588-4875-11ec-81d3-0242ac130003` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, InitialAccess |
| **Techniques** | T1498, T1190, T1133 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tomcat/Analytic%20Rules/TomcatServerErrorsAfterMultipleRequestsFromSameIP.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Tomcat](../solutions/tomcat.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
