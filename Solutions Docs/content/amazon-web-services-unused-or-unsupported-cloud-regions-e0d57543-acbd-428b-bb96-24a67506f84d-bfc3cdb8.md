# Unused or Unsupported Cloud Regions

Adversaries may create cloud instances in unused geographic service regions in order to evade detection. Access is usually obtained through compromising accounts used to manage cloud infrastructure. Refer: https://attack.mitre.org/techniques/T1535/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `e0d57543-acbd-428b-bb96-24a67506f84d` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1535 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_Unused_UnsupportedCloudRegions.yaml) |

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
