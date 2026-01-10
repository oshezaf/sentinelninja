# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit event ASIM filtering parser.

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAuditEvent` |
| **Built-in Parser** | `_Im_AuditEvent` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.4 |
| **Last Updated** | Dec 13, 2024 |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\imAuditEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/imAuditEvent.yaml) |

## Description

This ASIM parser supports normalizing audit events from all supported sources to the ASIM Audit Event activity normalized schema. This is an similar to to the ASIM version, but using different exclusion keys.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Azure | [_Im_AuditEvent_AzureActivity](vimauditeventazureactivity.md) |
| Barracuda WAF | [_Im_AuditEvent_BarracudaCEF](vimauditeventbarracudacef.md) |
| Barracuda WAF | [_Im_AuditEvent_BarracudaWAF](vimauditeventbarracudawaf.md) |
| Cisco ISE | [_Im_AuditEvent_CiscoISE](vimauditeventciscoise.md) |
| Cisco Meraki | [_Im_AuditEvent_CiscoMeraki](vimauditeventciscomeraki.md) |
| Cisco Meraki | [_Im_AuditEvent_CiscoMerakiSyslog](vimauditeventciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_AuditEvent_CrowdStrikeFalconHost](vimauditeventcrowdstrikefalconhost.md) |
| Microsoft | [_Im_AuditEvent_Empty](vimauditeventempty.md) |
| Illumio Core | [_Im_AuditEvent_IllumioSaaSCore](vimauditeventillumiosaascore.md) |
| Infoblox BloxOne | [_Im_AuditEvent_InfobloxBloxOne](vimauditeventinfbloxbloxone.md) |
| Microsoft Windows | [_Im_AuditEvent_MicrosoftEvent](vimauditeventmicrosoftevent.md) |
| Microsoft SharePoint | [_Im_AuditEvent_MicrosoftExchangeAdmin365](vimauditeventmicrosoftexchangeadmin365.md) |
| Microsoft Windows | [_Im_AuditEvent_MicrosoftSecurityEvents](vimauditeventmicrosoftsecurityevents.md) |
| Microsoft Windows | [_Im_AuditEvent_MicrosoftWindowsEvents](vimauditeventmicrosoftwindowsevents.md) |
| Native | [_Im_AuditEvent_Native](vimauditeventnative.md) |
| SentinelOne | [_Im_AuditEvent_SentinelOne](vimauditeventsentinelone.md) |
| VMware Carbon Black Cloud | [_Im_AuditEvent_VMwareCarbonBlackCloud](vimauditeventvmwarecarbonblackcloud.md) |
| Vectra | [_Im_AuditEvent_VectraXDRAudit](vimauditeventvectraxdraudit.md) |

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

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

