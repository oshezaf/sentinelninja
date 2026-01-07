# Critical Risks

This query searches for all the exploited risks that RidgeBot identified

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RidgeSecurity](../solutions/ridgesecurity.md) |
| **ID** | `1eebfaf3-40e1-4bc2-9f42-049b7b8ceb60` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, PrivilegeEscalation |
| **Techniques** | T1189, T1059, T1053, T1548 |
| **Required Connectors** | [RidgeBotDataConnector](../connectors/ridgebotdataconnector.md), [CefAma](../connectors/cefama.md) |
| **Event Vendor** | RidgeSecurity |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RidgeSecurity/Analytic%20Rules/RidgeSecurity_Risks.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to RidgeSecurity](../solutions/ridgesecurity.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
