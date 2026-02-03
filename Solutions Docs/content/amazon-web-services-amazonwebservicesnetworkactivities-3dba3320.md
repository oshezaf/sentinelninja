# AmazonWebServicesNetworkActivities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Workbooks/AmazonWebServicesNetworkActivities.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | `EventName in "AllocateAddress,AssociateAddress,AuthorizeSecurityGroupEgress,AuthorizeSecurityGroupIngress,CreateNetworkAcl,CreateSecurityGroup,DeleteNetworkAcl,DeleteSecurityGroup,DisassociateAddress,ReleaseAddress,ReplaceNetworkAclEntry,RevokeSecurityGroupEgress,RevokeSecurityGroupIngress"`<br>`EventName !contains "Image"`<br>`EventName !contains "KeyPair"`<br>`EventName !contains "LaunchTemplate"`<br>`EventName !contains "Tags"`<br>`EventName !contains "Volume"`<br>`EventName startswith "authorize"`<br>`EventName startswith "create"`<br>`EventName startswith "delete"`<br>`EventName startswith "replace"`<br>`EventName startswith "revoke"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

