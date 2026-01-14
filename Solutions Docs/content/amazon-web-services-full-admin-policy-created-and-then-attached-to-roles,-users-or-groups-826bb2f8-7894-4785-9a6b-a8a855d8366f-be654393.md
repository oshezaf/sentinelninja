# Full Admin policy created and then attached to Roles, Users or Groups

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identity and Access Management (IAM) securely manages access to AWS services and resources.  Identifies when a policy is created with Full Administrators Access (Allow-Action:*,Resource:*).  This policy can be attached to role,user or group and may be used by an adversary to escalate a normal user privileges to an adminsitrative level. AWS IAM Policy Grammar: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html  and AWS IAM API at https://docs.aws.amazon.com/IAM/late

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `826bb2f8-7894-4785-9a6b-a8a855d8366f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1484 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_FullAdminPolicyAttachedToRolesUsersGroups.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Amazon Web Services](../solutions/amazon-web-services.md)

