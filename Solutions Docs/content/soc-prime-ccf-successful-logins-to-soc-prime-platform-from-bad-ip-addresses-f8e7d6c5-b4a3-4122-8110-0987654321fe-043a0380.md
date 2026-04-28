# Successful logins to SOC Prime platform from bad IP addresses

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies successful logins from IP addresses previously flagged as malicious (e.g., botnets, TOR exit nodes, or known malicious IPs)

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SOC Prime CCF](../solutions/soc-prime-ccf.md) |
| **ID** | `f8e7d6c5-b4a3-4122-8110-0987654321fe` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [SOCPrimeAuditLogsDataConnector](../connectors/socprimeauditlogsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Prime%20CCF/Analytic%20Rules/SuccessLoginFromBadIp.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SOCPrimeAuditLogs_CL`](../tables/socprimeauditlogs-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SOC Prime CCF](../solutions/soc-prime-ccf.md)

