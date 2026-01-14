# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit event ASIM parser

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEvent` |
| **Built-in Parser** | `_ASim_AuditEvent` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.3 |
| **Last Updated** | Dec 13, 2024 |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEvent.yaml) |

## Description

This ASIM parser supports normalizing audit events from all supported sources to the ASIM Audit Event activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Azure | [_ASim_AuditEvent_AzureActivity](asimauditeventazureactivity.md) |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaCEF](asimauditeventbarracudacef.md) |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaWAF](asimauditeventbarracudawaf.md) |
| Cisco ISE | [_ASim_AuditEvent_CiscoISE](asimauditeventciscoise.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMeraki](asimauditeventciscomeraki.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_AuditEvent_CrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) |
| Illumio Core | [_ASim_AuditEvent_IllumioSaaSCore](asimauditeventillumiosaascore.md) |
| Infoblox BloxOne | [_ASim_AuditEvent_InfobloxBloxOne](asimauditeventinfobloxbloxone.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftEvent](asimauditeventmicrosoftevent.md) |
| Microsoft SharePoint | [_ASim_AuditEvent_MicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) |
| Native | [_ASim_AuditEvent_Native](asimauditeventnative.md) |
| SentinelOne | [_ASim_AuditEvent_SentinelOne](asimauditeventsentinelone.md) |
| VMware Carbon Black Cloud | [_ASim_AuditEvent_VMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) |
| Vectra | [_ASim_AuditEvent_VectraXDRAudit](asimauditeventvectraxdraudit.md) |
|  | [_Im_AuditEvent_Empty](im-auditevent-empty.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

