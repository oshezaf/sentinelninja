# Dataverse - Activity after Microsoft Entra alerts

This hunting query looks for users conducting Dataverse/Dynamics 365 activity shortly after a Microsoft Entra Identity Protection alert for that user. The query only looks for users not seen before or conducting Dynamics activity not previously seen.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `428c3d41-e441-4244-994e-b059d6316bc4` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Hunting%20Queries/Dataverse%20-%20Activity%20after%20Microsoft%20Entra%20alerts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
