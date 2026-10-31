# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Audit Event ASIM parser for CrowdStrike Falcon Data Replicator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventCrowdStrikeFalconDataReplicator` |
| **Built-in Parser** | `_ASim_AuditEvent_CrowdStrikeFalconDataReplicator` |
| **Schema** | AuditEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Data Replicator |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEventCrowdStrikeFalconDataReplicator.md)) |
| **Last Updated** | Oct 23, 2026 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventCrowdStrikeFalconDataReplicator.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventCrowdStrikeFalconDataReplicator.yaml) |

## Description

Normalizes CrowdStrike_Audit_Events_CL to the ASIM Audit Event schema, including
configuration, policy, account, file, share, and device audit operations.
Only event_simpleName identifies operations; records with an empty value are excluded.
Unknown event names map to Other. Undocumented numeric enumerations are retained
without guessing their meanings. Missing device or object values remain empty.
Use pack=true to retain original source fields, including currently empty columns.
The source-IP prefix parameter in the filtering parser supports IPv4 prefixes.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CrowdStrike_Audit_Events_CL`](../tables/crowdstrike-audit-events-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdStrikeFalconS3CCPDefinition](../connectors/crowdstrikefalcons3ccpdefinition.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Data Replicator connector documentation](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeS3FDR_ccp/DataConnectorDefinition.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

