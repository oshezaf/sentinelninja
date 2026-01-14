# AWS Security Hub - CloudTrail trails without log file validation

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query finds CloudTrail trails with log file validation disabled using AWS Security Hub findings.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `e40c3c7d-0b6d-4f2d-90a4-4d9d77c2e3f5` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1070.004, T1562.001 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Hunting%20Queries/CloudTrailLogFileValidationDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AWS Security Hub](../solutions/aws-security-hub.md)

