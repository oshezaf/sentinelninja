# New UserAgent observed in last 24 hours

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies new UserAgents observed in the last 24 hours versus the previous 14 days. This detection extracts words from user agents to build the baseline and determine rareity rather than perform a direct comparison. This avoids FPs caused by version numbers and other high entropy user agent components. These new UserAgents could be benign. However, in normally stable environments, these new UserAgents could provide a starting point for investigating malicious activity. Note: W3CIISLog can be n

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md) |
| **ID** | `b725d62c-eb77-42ff-96f6-bdc6745fc6e0` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl, Execution |
| **Techniques** | T1189, T1071, T1203 |
| **Required Connectors** | [AWS](../connectors/aws.md), [Office365](../connectors/office365.md), [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials/Analytic%20Rules/NewUserAgentLast24h.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | ✓ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |
| [`W3CIISLog`](../tables/w3ciislog.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)

