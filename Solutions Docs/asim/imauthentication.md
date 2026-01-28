# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| **Parser Version** | 0.3.3 |
| **Last Updated** | Dec 10, 2024 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\imAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/imAuthentication.yaml) |

## Description

This ASIM parser supports filtering and normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_Authentication_AADManagedIdentitySignInLogs](im-authentication-aadmanagedidentitysigninlogs.md) |
|  | [_Im_Authentication_AADNonInteractiveUserSignInLogs](im-authentication-aadnoninteractiveusersigninlogs.md) |
|  | [_Im_Authentication_AADServicePrincipalSignInLogs](im-authentication-aadserviceprincipalsigninlogs.md) |
|  | [_Im_Authentication_AWSCloudTrail](im-authentication-awscloudtrail.md) |
|  | [_Im_Authentication_BarracudaWAF](im-authentication-barracudawaf.md) |
|  | [_Im_Authentication_CiscoASA](im-authentication-ciscoasa.md) |
|  | [_Im_Authentication_CiscoISE](im-authentication-ciscoise.md) |
|  | [_Im_Authentication_CiscoMeraki](im-authentication-ciscomeraki.md) |
|  | [_Im_Authentication_CiscoMerakiSyslog](im-authentication-ciscomerakisyslog.md) |
|  | [_Im_Authentication_CrowdStrikeFalconHost](im-authentication-crowdstrikefalconhost.md) |
|  | [_Im_Authentication_Empty](im-authentication-empty.md) |
|  | [_Im_Authentication_GoogleWorkspace](im-authentication-googleworkspace.md) |
|  | [_Im_Authentication_IllumioSaaSCore](im-authentication-illumiosaascore.md) |
|  | [_Im_Authentication_M365Defender](im-authentication-m365defender.md) |
|  | [_Im_Authentication_MD4IoT](im-authentication-md4iot.md) |
|  | [_Im_Authentication_MicrosoftWindowsEvent](im-authentication-microsoftwindowsevent.md) |
|  | [_Im_Authentication_Native](im-authentication-native.md) |
|  | [_Im_Authentication_OktaSSO](im-authentication-oktasso.md) |
|  | [_Im_Authentication_OktaV2](im-authentication-oktav2.md) |
|  | [_Im_Authentication_PaloAltoCortexDataLake](im-authentication-paloaltocortexdatalake.md) |
|  | [_Im_Authentication_PostgreSQL](im-authentication-postgresql.md) |
|  | [_Im_Authentication_SalesforceSC](im-authentication-salesforcesc.md) |
|  | [_Im_Authentication_SentinelOne](im-authentication-sentinelone.md) |
|  | [_Im_Authentication_SigninLogs](im-authentication-signinlogs.md) |
|  | [_Im_Authentication_Sshd](im-authentication-sshd.md) |
|  | [_Im_Authentication_Su](im-authentication-su.md) |
|  | [_Im_Authentication_Sudo](im-authentication-sudo.md) |
|  | [_Im_Authentication_VMwareCarbonBlackCloud](im-authentication-vmwarecarbonblackcloud.md) |
|  | [_Im_Authentication_VectraXDRAudit](im-authentication-vectraxdraudit.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

