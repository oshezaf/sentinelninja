# Modification of vpc attributes

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

An attacker could modify vpc attributesin order to access resources he couldn't access before.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `a3a19731-9e82-49b6-9142-2dd570feefd5` |
| **Severity** | Low |
| **Tactics** | Defense Evasion |
| **Techniques** | T1562 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_ModificationofVPCAttributes.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | `EventName == "ModifyVpcAttribute"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

