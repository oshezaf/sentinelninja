# AWS Security Hub - Detect EC2 Security groups allowing unrestricted high-risk ports

This query detects EC2 Security Groups that allow unrestricted (0.0.0.0/0 or ::/0) ingress to high-risk ports using AWS Security Hub control EC2.19 findings. Publicly exposed management, database, and service ports (e.g., RDP 3389, SSH 22, SQL 1433/3306) significantly increase the risk of brute-force attacks, exploitation, and lateral movement.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AWS Security Hub](../solutions/aws-security-hub.md) |
| **ID** | `d2b6fa0f-6a4c-4c48-8c64-5e2e1ac4e7b9` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, LateralMovement, Discovery |
| **Techniques** | T1133, T1021, T1046 |
| **Required Connectors** | [AWSSecurityHub](../connectors/awssecurityhub.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub/Analytic%20Rules/EC2SecurityGroupHighRiskOpenPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AWS Security Hub](../solutions/aws-security-hub.md)

