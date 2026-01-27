# External guest invitation followed by Microsoft Entra ID PowerShell signin

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

By default guests have capability to invite more external guest users, guests also can do suspicious Microsoft Entra ID enumeration. This detection look at guest users, who have been invited or have invited recently, who also are logging via various PowerShell CLI. Ref : 'https://danielchronlund.com/2021/11/18/scary-azure-ad-tenant-enumeration-using-regular-b2b-guest-accounts/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `acc4c247-aaf7-494b-b5da-17f18863878a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, Discovery |
| **Techniques** | T1078.004, T1136.003, T1087.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/UnusualGuestActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ |
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName == "Invite external user"` | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

