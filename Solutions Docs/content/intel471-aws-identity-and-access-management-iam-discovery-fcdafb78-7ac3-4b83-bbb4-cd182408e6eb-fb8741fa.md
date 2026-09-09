# AWS Identity and Access Management (IAM) Discovery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Hunt Package identifies activity that could be associated with discovery behaviors targeting AWS Identity and Access Management (IAM).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Intel471](../solutions/intel471.md) |
| **ID** | `fcdafb78-7ac3-4b83-bbb4-cd182408e6eb` |
| **Tactics** | Discovery |
| **Techniques** | T1087.004 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Intel471/Hunting%20Queries/aws-identity-and-access-management-iam-discovery.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | `EventName has_any "GetCallerIdentity,GetUser,ListAccountAliases,ListIdentities,ListRoles"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Intel471](../solutions/intel471.md)

