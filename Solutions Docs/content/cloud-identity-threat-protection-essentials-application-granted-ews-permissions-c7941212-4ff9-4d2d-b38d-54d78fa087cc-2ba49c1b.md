# Application Granted EWS Permissions

This query finds AD applications with EWS permissions to read user mailboxes. Threat actors could misuse these for persistent mailbox access. Ensure these permissions are legitimately granted and necessary.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md) |
| **ID** | `c7941212-4ff9-4d2d-b38d-54d78fa087cc` |
| **Tactics** | Collection, PrivilegeEscalation |
| **Techniques** | T1078.004, T1114.002 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectoryIdentityProtection](../connectors/azureactivedirectoryidentityprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials/Hunting%20Queries/ApplicationGrantedEWSPermissions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)

