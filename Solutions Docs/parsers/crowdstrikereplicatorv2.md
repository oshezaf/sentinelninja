# CrowdStrikeReplicatorV2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Union Parser for all CrowdStrike Falcon Data Replicator events |
| Location | Solution |
| Solution | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| Version | 1.0.0 |
| Last Updated | Jun 21st 2023 |
| Category | CrowdStrikeParser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Parsers/CrowdStrikeReplicatorV2.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) |  | ✓ | ✓ | ✓ |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) |  | ✓ | ✓ | — |
| [`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) |  | — | — | — |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) |  | ✓ | ✓ | ✓ |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) |  | ✓ | ✓ | — |
| [`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) |  | — | — | — |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) |  | ✓ | ✓ | ✓ |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | `EventProduct == "Falcon Data Replicator"`<br>`EventVendor == "CrowdStrike"` | ✓ | ✓ | — |
| [`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) |  | — | — | — |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) |  | ✓ | ✓ | — |
| [`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) |  | — | — | — |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) |  | ✓ | ✓ | — |
| [`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) |  | — | — | — |
| [`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) |  | — | ✗ | ✓ |
| [`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) |  | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

