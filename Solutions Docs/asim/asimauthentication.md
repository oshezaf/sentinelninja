# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthentication` |
| **Built-in Parser** | `_ASim_Authentication` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.2.6 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthentication.md)) |
| **Last Updated** | Dec 10, 2024 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthentication.yaml) |

## Description

This ASIM parser supports normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema.ParserName: ASimAuthentication

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Entra ID | [_ASim_Authentication_AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| AWS | [_ASim_Authentication_AWSCloudTrail](asimauthenticationawscloudtrail.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| Barracuda WAF | [_ASim_Authentication_BarracudaWAF](asimauthenticationbarracudawaf.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Adaptive Security Appliance (ASA) | [_ASim_Authentication_CiscoASA](asimauthenticationciscoasa.md) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco ISE | [_ASim_Authentication_CiscoISE](asimauthenticationciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMeraki](asimauthenticationciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_Authentication_CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Google Workspace | [_ASim_Authentication_GoogleWorkspace](asimauthenticationgoogleworkspace.md) |  |
| Illumio | [_ASim_Authentication_IllumioSaaSCore](asimauthenticationillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| M365 Defender for EndPoint | [_ASim_Authentication_M365Defender](asimauthenticationm365defender.md) |  |
| Microsoft Defender for IoT | [_ASim_Authentication_MD4IoT](asimauthenticationmd4iot.md) |  |
|  | [_ASim_Authentication_MicrosoftSecurityEvents](asim-authentication-microsoftsecurityevents.md) |  |
| Windows Security Events | [_ASim_Authentication_MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](../solutions/windows-forwarded-events.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Native | [_ASim_Authentication_Native](asimauthenticationnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Okta | [_ASim_Authentication_OktaSSO](asimauthenticationoktasso.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| Okta | [_ASim_Authentication_OktaV2](asimauthenticationoktav2.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| Palo Alto Cortex Data Lake | [_ASim_Authentication_PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| PostgreSQL | [_ASim_Authentication_PostgreSQL](asimauthenticationpostgresql.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Salesforce Service Cloud | [_ASim_Authentication_SalesforceSC](asimauthenticationsalesforcesc.md) |  |
| SentinelOne | [_ASim_Authentication_SentinelOne](asimauthenticationsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| Microsoft Entra ID | [_ASim_Authentication_SigninLogs](asimauthenticationsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| OpenSSH | [_ASim_Authentication_Sshd](asimauthenticationsshd.md) | [Syslog](../solutions/syslog.md) |
| su | [_ASim_Authentication_Su](asimauthenticationsu.md) | [Syslog](../solutions/syslog.md) |
| sudo | [_ASim_Authentication_Sudo](asimauthenticationsudo.md) | [Syslog](../solutions/syslog.md) |
| VMware Carbon Black Cloud | [_ASim_Authentication_VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Vectra | [_ASim_Authentication_VectraXDRAudit](asimauthenticationvectraxdraudit.md) | [Vectra XDR](../solutions/vectra-xdr.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

