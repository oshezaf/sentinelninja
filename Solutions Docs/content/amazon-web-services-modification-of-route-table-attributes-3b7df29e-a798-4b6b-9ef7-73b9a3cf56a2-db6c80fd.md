# Modification of route-table attributes

An attacker could modify route-table attributes in order to access resources he couldn't access before.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `3b7df29e-a798-4b6b-9ef7-73b9a3cf56a2` |
| **Severity** | Low |
| **Tactics** | Defense Evasion |
| **Techniques** | T1562 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_ModificationofRouteTableAttributes.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

