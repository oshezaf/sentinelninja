# Changes to internet facing AWS RDS Database instances

'Amazon Relational Database Service (RDS) is scalable relational database in the cloud. If your organization have one or more AWS RDS Databases running, monitoring changes to especially internet facing AWS RDS (Relational Database Service) Once alerts triggered, validate if changes observed are authorized and adhere to change control policy. More information: https://medium.com/@GorillaStack/the-most-important-aws-cloudtrail-security-events-to-track-a5b9873f8255  and RDS API Reference Docs: http

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `8c2ef238-67a0-497d-b1dd-5c8a0f533e25` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_ChangeToRDSDatabase.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
