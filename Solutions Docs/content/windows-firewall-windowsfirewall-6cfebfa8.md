# WindowsFirewall

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Windows Firewall](../solutions/windows-firewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Firewall/Workbooks/WindowsFirewall.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Heartbeat`](../tables/heartbeat.md) | `Solutions contains "windowsFirewall"` | ? | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) | `AccountType == "User"`<br>`EventID in "4624,4625"`<br>`LogonType == "10"` | ✓ | ✓ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | `ResultType == "0"`<br>`ResultType != "0"` | ✓ | ✗ | ✓ |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | `DestinationPort == "3389"`<br>`FirewallAction in "ALLOW,DROP"`<br>`SourceIP !in "::1,-"` | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Windows Firewall](../solutions/windows-firewall.md)

