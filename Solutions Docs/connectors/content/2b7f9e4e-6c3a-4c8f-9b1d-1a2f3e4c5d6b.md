# AWS Security Hub - EC2 instances with public IPv4 address

This query finds EC2 instances that have a public IPv4 address using AWS Security Hub findings (control EC2.9).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `2b7f9e4e-6c3a-4c8f-9b1d-1a2f3e4c5d6b` |
| **Tactics** | InitialAccess, Exfiltration |
| **Techniques** | T1133, T1021 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Hunting%20Queries/EC2InstancePublicIPv4.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to AWS Security Hub](../solutions/aws-security-hub.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
