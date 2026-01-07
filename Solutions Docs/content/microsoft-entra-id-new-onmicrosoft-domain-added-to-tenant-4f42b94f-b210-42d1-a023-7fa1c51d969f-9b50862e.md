# New onmicrosoft domain added to tenant

This detection looks for new onmicrosoft domains being added to a tenant.  An attacker who compromises a tenant may register a new onmicrosoft domain in order to masquerade as a service provider for launching phishing campaigns. Domain additions are not a common occurrence and users should validate that the domain was added by a legitimate user, with a legitimate purpose.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `4f42b94f-b210-42d1-a023-7fa1c51d969f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1585.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/NewOnmicrosoftDomainAdded.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
