# CiscoISE - Command executed with the highest privileges by new user

Detects command execution with PrivilegeLevel - 15 by user for wich there was no such activity detected earlier.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cisco ISE](../solutions/cisco-ise.md) |
| **ID** | `e71890a2-5f61-4790-b1ed-cf1d92d3e398` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, PrivilegeEscalation, DefenseEvasion, Execution |
| **Techniques** | T1133, T1548, T1059 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Analytic%20Rules/CiscoISECmdExecutionWithHighestPrivilegesNewUser.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cisco ISE](../solutions/cisco-ise.md)

