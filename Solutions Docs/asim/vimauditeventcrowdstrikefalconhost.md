# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for CrowdStrike Falcon Endpoint Protection

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuditEventCrowdStrikeFalconHost` |
| **Built-in Parser** | `_Im_AuditEvent_CrowdStrikeFalconHost` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Endpoint Protection |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 30 2023 |
| **Unifying Parser** | [imAuditEvent](imauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\vimAuditEventCrowdStrikeFalconHost.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/vimAuditEventCrowdStrikeFalconHost.yaml) |

## Description

This ASIM parser supports normalizing CrowdStrike Falcon Endpoint Protection logs to the ASIM Audit Event normalized schema. These events are captured through CrowdStrike Falcon Endpoint Protection data connector which allows you to easily connect your CrowdStrike Falcon Event Stream with Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `operation_has_any` | dynamic | dynamic([]) |
| `object_has_any` | dynamic | dynamic([]) |
| `newvalue_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Endpoint Protection Documentation](https://falcon.us-2.crowdstrike.com/documentation/page/d88d9ed6/streaming-api-event-dictionary https://falcon.us-2.crowdstrike.com/documentation/page/eb1587d1/siem-connector#mc98af8f)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

