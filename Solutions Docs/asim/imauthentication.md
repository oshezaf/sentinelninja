# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAuthentication` |
| **Built-in Parser** | `_Im_Authentication` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.3.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/imAuthentication.md)) |
| **Last Updated** | Dec 10, 2024 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\imAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/imAuthentication.yaml) |

## Description

This ASIM parser supports filtering and normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Entra ID | [_Im_Authentication_AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_Im_Authentication_AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_Im_Authentication_AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| AWS | [_Im_Authentication_AWSCloudTrail](asimauthenticationawscloudtrail.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| Barracuda WAF | [_Im_Authentication_BarracudaWAF](asimauthenticationbarracudawaf.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Adaptive Security Appliance (ASA) | [_Im_Authentication_CiscoASA](asimauthenticationciscoasa.md) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco ISE | [_Im_Authentication_CiscoISE](asimauthenticationciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMeraki](asimauthenticationciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_Authentication_CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Google Workspace | [_Im_Authentication_GoogleWorkspace](asimauthenticationgoogleworkspace.md) |  |
| Illumio | [_Im_Authentication_IllumioSaaSCore](asimauthenticationillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| M365 Defender for EndPoint | [_Im_Authentication_M365Defender](asimauthenticationm365defender.md) |  |
| Microsoft Defender for IoT | [_Im_Authentication_MD4IoT](asimauthenticationmd4iot.md) |  |
| Windows Security Events | [_Im_Authentication_MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](../solutions/windows-forwarded-events.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Native | [_Im_Authentication_Native](asimauthenticationnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Okta | [_Im_Authentication_OktaSSO](asimauthenticationoktasso.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| Okta | [_Im_Authentication_OktaV2](asimauthenticationoktav2.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| Palo Alto Cortex Data Lake | [_Im_Authentication_PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| PostgreSQL | [_Im_Authentication_PostgreSQL](asimauthenticationpostgresql.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Salesforce Service Cloud | [_Im_Authentication_SalesforceSC](asimauthenticationsalesforcesc.md) |  |
| SentinelOne | [_Im_Authentication_SentinelOne](asimauthenticationsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| Microsoft Entra ID | [_Im_Authentication_SigninLogs](asimauthenticationsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| OpenSSH | [_Im_Authentication_Sshd](asimauthenticationsshd.md) | [Syslog](../solutions/syslog.md) |
| su | [_Im_Authentication_Su](asimauthenticationsu.md) | [Syslog](../solutions/syslog.md) |
| sudo | [_Im_Authentication_Sudo](asimauthenticationsudo.md) | [Syslog](../solutions/syslog.md) |
| VMware Carbon Black Cloud | [_Im_Authentication_VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Vectra | [_Im_Authentication_VectraXDRAudit](asimauthenticationvectraxdraudit.md) | [Vectra XDR](../solutions/vectra-xdr.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `username_has_any` | dynamic | dynamic([]) |
| `targetappname_has_any` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `srchostname_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `pack` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

