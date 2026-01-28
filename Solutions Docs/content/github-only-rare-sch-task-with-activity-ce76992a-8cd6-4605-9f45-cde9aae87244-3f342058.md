# rare_sch_task_with_activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Looks for rare process launch as a scheduled task and activity done by the processes. Author: Jouni Mikkola More info: https://threathunt.blog/hunting-for-malicious-scheduled-tasks/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `ce76992a-8cd6-4605-9f45-cde9aae87244` |
| **Tactics** | Persistence |
| **Techniques** | T1053 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Persistence/rare_sch_task_with_activity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | ✓ | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | ✓ | ✗ |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | ✓ | ✗ |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | ✓ | ✗ |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | ✓ | ✗ |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | ✓ | ✗ |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

