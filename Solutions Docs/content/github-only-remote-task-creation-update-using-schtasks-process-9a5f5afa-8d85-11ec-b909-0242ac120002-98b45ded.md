# Remote Task Creation/Update using Schtasks Process

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

The query detects a scheduled task, created/updated remotely, using the Schtasks process.  Threat actors are using scheduled tasks for establishing persistence and moving laterally through the network. Ref: https://blog.menasec.net/2019/03/threat-hunting-25-scheduled-tasks-for.html

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `9a5f5afa-8d85-11ec-b909-0242ac120002` |
| **Severity** | Low |
| **Tactics** | Persistence |
| **Techniques** | T1053 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SecurityEvent/RemoteScheduledTaskCreationUpdateviaSchtasks.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

