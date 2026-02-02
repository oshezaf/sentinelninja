# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit event ASIM filtering parser.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAuditEvent` |
| **Built-in Parser** | `_Im_AuditEvent` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/imAuditEvent.md)) |
| **Last Updated** | Dec 13, 2024 |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\imAuditEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/imAuditEvent.yaml) |

## Description

This ASIM parser supports normalizing audit events from all supported sources to the ASIM Audit Event activity normalized schema. This is an similar to to the ASIM version, but using different exclusion keys.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_AuditEvent_AzureActivity](im-auditevent-azureactivity.md) |
|  | [_Im_AuditEvent_BarracudaCEF](im-auditevent-barracudacef.md) |
|  | [_Im_AuditEvent_BarracudaWAF](im-auditevent-barracudawaf.md) |
|  | [_Im_AuditEvent_CiscoISE](im-auditevent-ciscoise.md) |
|  | [_Im_AuditEvent_CiscoMeraki](im-auditevent-ciscomeraki.md) |
|  | [_Im_AuditEvent_CiscoMerakiSyslog](im-auditevent-ciscomerakisyslog.md) |
|  | [_Im_AuditEvent_CrowdStrikeFalconHost](im-auditevent-crowdstrikefalconhost.md) |
|  | [_Im_AuditEvent_Empty](im-auditevent-empty.md) |
|  | [_Im_AuditEvent_IllumioSaaSCore](im-auditevent-illumiosaascore.md) |
|  | [_Im_AuditEvent_InfobloxBloxOne](im-auditevent-infobloxbloxone.md) |
|  | [_Im_AuditEvent_MicrosoftEvent](im-auditevent-microsoftevent.md) |
|  | [_Im_AuditEvent_MicrosoftExchangeAdmin365](im-auditevent-microsoftexchangeadmin365.md) |
|  | [_Im_AuditEvent_MicrosoftSecurityEvents](im-auditevent-microsoftsecurityevents.md) |
|  | [_Im_AuditEvent_MicrosoftWindowsEvents](im-auditevent-microsoftwindowsevents.md) |
|  | [_Im_AuditEvent_Native](im-auditevent-native.md) |
|  | [_Im_AuditEvent_SentinelOne](im-auditevent-sentinelone.md) |
|  | [_Im_AuditEvent_VMwareCarbonBlackCloud](im-auditevent-vmwarecarbonblackcloud.md) |
|  | [_Im_AuditEvent_VectraXDRAudit](im-auditevent-vectraxdraudit.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `operation_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `object_has_any` | dynamic | dynamic([]) |
| `newvalue_has_any` | dynamic | dynamic([]) |
| `pack` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

