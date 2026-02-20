# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Entra ID | [_Im_Authentication_AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) |
| Microsoft Entra ID | [_Im_Authentication_AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) |
| Microsoft Entra ID | [_Im_Authentication_AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) |
| AWS | [_Im_Authentication_AWSCloudTrail](asimauthenticationawscloudtrail.md) |
| Barracuda WAF | [_Im_Authentication_BarracudaWAF](asimauthenticationbarracudawaf.md) |
| Cisco Adaptive Security Appliance (ASA) | [_Im_Authentication_CiscoASA](asimauthenticationciscoasa.md) |
| Cisco ISE | [_Im_Authentication_CiscoISE](asimauthenticationciscoise.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMeraki](asimauthenticationciscomeraki.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_Authentication_CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) |
| Google Workspace | [_Im_Authentication_GoogleWorkspace](asimauthenticationgoogleworkspace.md) |
| Illumio | [_Im_Authentication_IllumioSaaSCore](asimauthenticationillumiosaascore.md) |
| M365 Defender for EndPoint | [_Im_Authentication_M365Defender](asimauthenticationm365defender.md) |
| Microsoft Defender for IoT | [_Im_Authentication_MD4IoT](asimauthenticationmd4iot.md) |
| Windows Security Events | [_Im_Authentication_MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) |
| Native | [_Im_Authentication_Native](asimauthenticationnative.md) |
| Okta | [_Im_Authentication_OktaSSO](asimauthenticationoktasso.md) |
| Okta | [_Im_Authentication_OktaV2](asimauthenticationoktav2.md) |
| Palo Alto Cortex Data Lake | [_Im_Authentication_PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) |
| PostgreSQL | [_Im_Authentication_PostgreSQL](asimauthenticationpostgresql.md) |
| Salesforce Service Cloud | [_Im_Authentication_SalesforceSC](asimauthenticationsalesforcesc.md) |
| SentinelOne | [_Im_Authentication_SentinelOne](asimauthenticationsentinelone.md) |
| Microsoft Entra ID | [_Im_Authentication_SigninLogs](asimauthenticationsigninlogs.md) |
| OpenSSH | [_Im_Authentication_Sshd](asimauthenticationsshd.md) |
| su | [_Im_Authentication_Su](asimauthenticationsu.md) |
| sudo | [_Im_Authentication_Sudo](asimauthenticationsudo.md) |
| VMware Carbon Black Cloud | [_Im_Authentication_VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) |
| Vectra | [_Im_Authentication_VectraXDRAudit](asimauthenticationvectraxdraudit.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

