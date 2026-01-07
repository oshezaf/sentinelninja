# Cross-tenant Access Settings Organization Outbound Collaboration Settings Changed

Organizations are added in the Cross-tenant Access Settings to control communication inbound or outbound for users and applications. This detection notifies when Organization Outbound Collaboration Settings are changed for "Users & Groups" and for "Applications".

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `229f71ba-d83b-42a5-b83b-11a641049ed1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, Discovery |
| **Techniques** | T1078.004, T1136.003, T1087.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/Cross-tenantAccessSettingsOrganizationOutboundCollaborationSettingsChanged.yaml) |

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
