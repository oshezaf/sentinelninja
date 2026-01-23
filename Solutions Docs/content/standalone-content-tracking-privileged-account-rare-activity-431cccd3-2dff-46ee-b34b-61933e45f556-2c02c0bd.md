# Tracking Privileged Account Rare Activity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query determines rare activity by a high-value account on a system or service. If any account with rare activity is found, the query retrieves related activity from that account on the same day and summarizes the information.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `431cccd3-2dff-46ee-b34b-61933e45f556` |
| **Tactics** | PrivilegeEscalation, Discovery |
| **Techniques** | T1078, T1087 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Office365](../connectors/office365.md), [AWS](../connectors/aws.md), [SecurityEvents](../connectors/securityevents.md), [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/TrackingPrivAccounts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) |  | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "4624,4625,4720,4726,4728,4732,4756,7045"` | ✓ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |
| [`W3CIISLog`](../tables/w3ciislog.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

