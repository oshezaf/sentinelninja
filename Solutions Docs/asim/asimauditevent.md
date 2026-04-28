# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| **Parser Version** | 0.1.7 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEvent.md)) |
| **Last Updated** | March 10, 2026 |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEvent.yaml) |

## Description

This ASIM parser supports normalizing audit events from all supported sources to the ASIM Audit Event activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| AWS CloudTrail | [_ASim_AuditEvent_AWSCloudTrail](asimauditeventawscloudtrail.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| Microsoft Azure | [_ASim_AuditEvent_AzureActivity](asimauditeventazureactivity.md) | [Azure Activity](../solutions/azure-activity.md) |
| Azure Key Vault | [_ASim_AuditEvent_AzureKeyVault](asimauditeventazurekeyvault.md) |  |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaCEF](asimauditeventbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Barracuda WAF | [_ASim_AuditEvent_BarracudaWAF](asimauditeventbarracudawaf.md) |  |
| Cisco ISE | [_ASim_AuditEvent_CiscoISE](asimauditeventciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMeraki](asimauditeventciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_AuditEvent_CiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_AuditEvent_CrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Illumio Core | [_ASim_AuditEvent_IllumioSaaSCore](asimauditeventillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| Infoblox BloxOne | [_ASim_AuditEvent_InfobloxBloxOne](asimauditeventinfobloxbloxone.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftEvent](asimauditeventmicrosoftevent.md) |  |
| Microsoft SharePoint | [_ASim_AuditEvent_MicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) |  |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Windows | [_ASim_AuditEvent_MicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_AuditEvent_Native](asimauditeventnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md)<br>[Workday](../solutions/workday.md) |
| SQLSecurityAudit Logs | [_ASim_AuditEvent_SQLSecurityAudit](asimauditeventsqlsecurityaudit.md) |  |
| SentinelOne | [_ASim_AuditEvent_SentinelOne](asimauditeventsentinelone.md) |  |
| VMware Carbon Black Cloud | [_ASim_AuditEvent_VMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) |  |
| Vectra | [_ASim_AuditEvent_VectraXDRAudit](asimauditeventvectraxdraudit.md) | [Vectra XDR](../solutions/vectra-xdr.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

