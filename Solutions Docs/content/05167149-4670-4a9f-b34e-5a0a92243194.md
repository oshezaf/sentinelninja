# Modification of subnet attributes

An attacker could modify subnet attributes in order to access resources he couldn't access before.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `05167149-4670-4a9f-b34e-5a0a92243194` |
| **Severity** | Low |
| **Tactics** | Defense Evasion |
| **Techniques** | T1562 |
| **Required Connectors** | [AWS](../connectors/aws.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_ModificationofSubnetAttributes.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
