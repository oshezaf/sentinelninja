# AWS Security Hub - IAM users with console password and no MFA

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies IAM users in AWS Security Hub findings (control IAM.5) who have a console password but do not have multi-factor authentication (MFA) enabled.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `d5818873-a2ab-4467-8e97-60fe56ca10cc` |
| **Tactics** | PrivilegeEscalation, CredentialAccess, DefenseEvasion |
| **Techniques** | T1098, T1110, T1556.006 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Hunting%20Queries/IAMUserMFADisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AWS Security Hub](../solutions/aws-security-hub.md)

