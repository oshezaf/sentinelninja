# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAuthentication` |
| **Built-in Parser** | `_Im_Authentication` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.3.3 |
| **Last Updated** | Dec 10, 2024 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\imAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/imAuthentication.yaml) |

## Description

This ASIM parser supports filtering and normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Entra ID | [_Im_Authentication_AADManagedIdentitySignInLogs](vimauthenticationaadmanagedidentitysigninlogs.md) |
| Microsoft Entra ID | [_Im_Authentication_AADNonInteractiveUserSignInLogs](vimauthenticationaadnoninteractiveusersigninlogs.md) |
| Microsoft Entra ID | [_Im_Authentication_AADServicePrincipalSignInLogs](vimauthenticationaadserviceprincipalsigninlogs.md) |
| AWS | [_Im_Authentication_AWSCloudTrail](vimauthenticationawscloudtrail.md) |
| Barracuda WAF | [_Im_Authentication_BarracudaWAF](vimauthenticationbarracudawaf.md) |
| Cisco Adaptive Security Appliance (ASA) | [_Im_Authentication_CiscoASA](vimauthenticationciscoasa.md) |
| Cisco ISE | [_Im_Authentication_CiscoISE](vimauthenticationciscoise.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMeraki](vimauthenticationciscomeraki.md) |
| Cisco Meraki | [_Im_Authentication_CiscoMerakiSyslog](vimauthenticationciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_Authentication_CrowdStrikeFalconHost](vimauthenticationcrowdstrikefalconhost.md) |
| Microsoft Sentinel | [_Im_Authentication_Empty](vimauthenticationempty.md) |
| Google Workspace | [_Im_Authentication_GoogleWorkspace](vimauthenticationgoogleworkspace.md) |
| Illumio | [_Im_Authentication_IllumioSaaSCore](vimauthenticationillumiosaascore.md) |
| M365 Defender for EndPoint | [_Im_Authentication_M365Defender](vimauthenticationm365defender.md) |
| Microsoft Defender for IoT | [_Im_Authentication_MD4IoT](vimauthenticationmd4iot.md) |
| Windows Security Events | [_Im_Authentication_MicrosoftWindowsEvent](vimauthenticationmicrosoftwindowsevent.md) |
| Native | [_Im_Authentication_Native](vimauthenticationnative.md) |
| Okta | [_Im_Authentication_OktaSSO](vimauthenticationoktasso.md) |
| Okta | [_Im_Authentication_OktaV2](vimauthenticationoktav2.md) |
| Palo Alto Cortex Data Lake | [_Im_Authentication_PaloAltoCortexDataLake](vimauthenticationpaloaltocortexdatalake.md) |
| PostgreSQL | [_Im_Authentication_PostgreSQL](vimauthenticationpostgresql.md) |
| Salesforce Service Cloud | [_Im_Authentication_SalesforceSC](vimauthenticationsalesforcesc.md) |
| SentinelOne | [_Im_Authentication_SentinelOne](vimauthenticationsentinelone.md) |
| Microsoft Entra ID | [_Im_Authentication_SigninLogs](vimauthenticationsigninlogs.md) |
| OpenSSH | [_Im_Authentication_Sshd](vimauthenticationsshd.md) |
| su | [_Im_Authentication_Su](vimauthenticationsu.md) |
| sudo | [_Im_Authentication_Sudo](vimauthenticationsudo.md) |
| VMware Carbon Black Cloud | [_Im_Authentication_VMwareCarbonBlackCloud](vimauthenticationvmwarecarbonblackcloud.md) |
| Vectra | [_Im_Authentication_VectraXDRAudit](vimauthenticationvectraxdraudit.md) |

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

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

