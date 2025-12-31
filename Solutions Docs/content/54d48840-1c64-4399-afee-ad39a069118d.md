# Power Platform - Possibly compromised user accesses Power Platform services

Identifies user accounts flagged at risk in Microsoft Entra Identity Protection and correlates these users with sign-in activity in Power Platform, including Power Apps, Power Automate and Power Platform Admin Center.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `54d48840-1c64-4399-afee-ad39a069118d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, LateralMovement |
| **Techniques** | T1078, T1210 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Platform%20-%20Possibly%20compromised%20user%20accesses%20Power%20Platform%20services.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
