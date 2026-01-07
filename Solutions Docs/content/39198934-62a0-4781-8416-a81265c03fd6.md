# Suspicious application consent similar to PwnAuth

'This will alert when a user consents to provide a previously-unknown Azure application with the same OAuth permissions used by the FireEye PwnAuth toolkit (https://github.com/fireeye/PwnAuth). The default permissions/scope for the PwnAuth toolkit are user.read, offline_access, mail.readwrite, mail.send, and files.read.all. Consent to applications with these permissions should be rare, especially as the knownApplications list is expanded. Public contributions to expand this filter are welcome! F

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `39198934-62a0-4781-8416-a81265c03fd6` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, DefenseEvasion |
| **Techniques** | T1528, T1550 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/MaliciousOAuthApp_PwnAuth.yaml) |

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
