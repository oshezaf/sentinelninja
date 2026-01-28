# New External User Granted Admin Role

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query will detect instances where a newly invited external user is granted an administrative role. By default this query will alert on any granted administrative role, however this can be modified using the roles variable if false positives occur in your environment. The maximum delta between invite and escalation to admin is 60 minues, this can be configured using the deltaBetweenInviteEscalation variable.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md) |
| **ID** | `d7424fd9-abb3-4ded-a723-eebe023aaa0b` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098.001 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials/Analytic%20Rules/NewExtUserGrantedAdmin.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName in "Invite external user,Redeem external user invite"`<br>`OperationName has "Invite external user"`<br>`OperationName has "Redeem external user invite"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)

