# Remote Scheduled Task Creation or Update using ATSVC Named Pipe

This query detects a scheduled task, created/updated remotely, using the ATSVC name pipe.   Threat actors are using scheduled tasks for establishing persistence and moving laterally through the network.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `7aad876a-a6fe-4c11-879e-8b29d35ff739` |
| **Tactics** | Persistence |
| **Techniques** | T1053.002 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Hunting%20Queries/RemoteScheduledTaskCreationUpdateUsingATSVCNamedPipe.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
