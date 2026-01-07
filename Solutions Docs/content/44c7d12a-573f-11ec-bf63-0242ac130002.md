# Oracle - Multiple user agents for single source

Detects requests with different user agents from one source in short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [OracleWebLogicServer](../solutions/oracleweblogicserver.md) |
| **ID** | `44c7d12a-573f-11ec-bf63-0242ac130002` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CustomLogsAma](../connectors/customlogsama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer/Analytic%20Rules/OracleWebLogicDifferentUAsFromSingleIP.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to OracleWebLogicServer](../solutions/oracleweblogicserver.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
