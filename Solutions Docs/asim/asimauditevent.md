# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

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
| **Parser Version** | 0.1.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEvent.md)) |
| **Last Updated** | Dec 13, 2024 |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEvent.yaml) |

## Description

This ASIM parser supports normalizing audit events from all supported sources to the ASIM Audit Event activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Azure | [_ASim_AuditEvent_AzureActivity](asimauditeventazureactivity.md) | [Azure Activity](../solutions/azure-activity.md) |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaCEF](asimauditeventbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaWAF](asimauditeventbarracudawaf.md) |  |
| Cisco ISE | [_ASim_AuditEvent_CiscoISE](asimauditeventciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMeraki](asimauditeventciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_AuditEvent_CrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Illumio Core | [_ASim_AuditEvent_IllumioSaaSCore](asimauditeventillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| Infoblox BloxOne | [_ASim_AuditEvent_InfobloxBloxOne](asimauditeventinfobloxbloxone.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftEvent](asimauditeventmicrosoftevent.md) |  |
| Microsoft SharePoint | [_ASim_AuditEvent_MicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) |  |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_AuditEvent_Native](asimauditeventnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Workday](../solutions/workday.md) |
| SentinelOne | [_ASim_AuditEvent_SentinelOne](asimauditeventsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| VMware Carbon Black Cloud | [_ASim_AuditEvent_VMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Vectra | [_ASim_AuditEvent_VectraXDRAudit](asimauditeventvectraxdraudit.md) | [Vectra XDR](../solutions/vectra-xdr.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventAzureActivity`](../asim/asimauditeventazureactivity.md) | ? | ? | ? |
| [`ASimAuditEventBarracudaCEF`](../asim/asimauditeventbarracudacef.md) | ? | ? | ? |
| [`ASimAuditEventBarracudaWAF`](../asim/asimauditeventbarracudawaf.md) | ? | ? | ? |
| [`ASimAuditEventCiscoISE`](../asim/asimauditeventciscoise.md) | ? | ? | ? |
| [`ASimAuditEventCiscoMeraki`](../asim/asimauditeventciscomeraki.md) | ? | ? | ? |
| [`ASimAuditEventCiscoMerakiSyslog`](../asim/asimauditeventciscomerakisyslog.md) | ? | ? | ? |
| [`ASimAuditEventCrowdStrikeFalconHost`](../asim/asimauditeventcrowdstrikefalconhost.md) | ? | ? | ? |
| [`ASimAuditEventIllumioSaaSCore`](../asim/asimauditeventillumiosaascore.md) | ? | ? | ? |
| [`ASimAuditEventInfobloxBloxOne`](../asim/asimauditeventinfobloxbloxone.md) | ? | ? | ? |
| [`ASimAuditEventMicrosoftEvent`](../asim/asimauditeventmicrosoftevent.md) | ? | ? | ? |
| [`ASimAuditEventMicrosoftExchangeAdmin365`](../asim/asimauditeventmicrosoftexchangeadmin365.md) | ? | ? | ? |
| [`ASimAuditEventMicrosoftSecurityEvents`](../asim/asimauditeventmicrosoftsecurityevents.md) | ? | ? | ? |
| [`ASimAuditEventMicrosoftWindowsEvents`](../asim/asimauditeventmicrosoftwindowsevents.md) | ? | ? | ? |
| [`ASimAuditEventNative`](../asim/asimauditeventnative.md) | ? | ? | ? |
| [`ASimAuditEventSentinelOne`](../asim/asimauditeventsentinelone.md) | ? | ? | ? |
| [`ASimAuditEventVMwareCarbonBlackCloud`](../asim/asimauditeventvmwarecarbonblackcloud.md) | ? | ? | ? |
| [`ASimAuditEventVectraXDRAudit`](../asim/asimauditeventvectraxdraudit.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

