# IAM Privilege Escalation by Instance Profile attachment

'An instance profile is a container for an IAM role that you can use to pass role information to an EC2 instance when the instance start. Identifies when existing role is removed and new/existing high privileged role is added to instance profile.  Any instance with this instance profile attached is able to perform privileged operations. AWS Instance Profile: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html  and CloudGoat - IAM PrivilegeEscalati

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `e1a91db8-f2b3-4531-bff6-da133d4f4f1a` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1098 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_IAM_PrivilegeEscalationbyAttachment.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

