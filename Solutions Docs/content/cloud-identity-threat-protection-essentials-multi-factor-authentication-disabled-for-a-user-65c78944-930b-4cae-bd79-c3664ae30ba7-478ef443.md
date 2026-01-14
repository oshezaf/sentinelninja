# Multi-Factor Authentication Disabled for a User

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Multi-Factor Authentication (MFA) helps prevent credential compromise. This alert identifies when an attempt has been made to deactivate MFA for a user.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md) |
| **ID** | `65c78944-930b-4cae-bd79-c3664ae30ba7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence |
| **Techniques** | T1098, T1556 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials/Analytic%20Rules/MFADisable.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)
- [`AuditLogs`](../tables/auditlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)

