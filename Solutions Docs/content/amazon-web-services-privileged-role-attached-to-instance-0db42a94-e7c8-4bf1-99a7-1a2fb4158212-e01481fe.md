# Privileged role attached to Instance

Identity and Access Management (IAM) securely manages access to AWS services and resources.  Identifies when a Privileged role is attached to an existing instance or new instance at deployment. This instance may be used by an adversary to escalate a normal user privileges to an adminsitrative level. and AWS API AddRoleToInstanceProfile at https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html 

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `0db42a94-e7c8-4bf1-99a7-1a2fb4158212` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1098 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Hunting%20Queries/AWS_PrivilegedRoleAttachedToInstance.yaml) |

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

