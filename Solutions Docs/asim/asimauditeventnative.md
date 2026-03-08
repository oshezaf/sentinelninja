# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Microsoft Sentinel native Audit Event table

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventNative` |
| **Built-in Parser** | `_ASim_AuditEvent_Native` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEventNative.md)) |
| **Last Updated** | Dec 13, 2024 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventNative.yaml) |

## Description

This ASIM parser supports normalizing the native Microsoft Sentinel Audit Event table (ASimAuditEventLogs) to the ASIM Audit Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CiscoMerakiMultiRule](../connectors/ciscomerakimultirule.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) |
| [CrowdstrikeReplicatorv2](../connectors/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [WorkdayCCPDefinition](../connectors/workdayccpdefinition.md) | [Workday](../solutions/workday.md) |

**Solutions:** [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md), [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md), [Workday](../solutions/workday.md)

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

