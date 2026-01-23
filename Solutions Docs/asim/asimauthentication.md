# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| **Parser Version** | 0.2.6 |
| **Last Updated** | Dec 10, 2024 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthentication.yaml) |

## Description

This ASIM parser supports normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema.ParserName: ASimAuthentication

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Entra ID | [_ASim_Authentication_AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) |
| AWS | [_ASim_Authentication_AWSCloudTrail](asimauthenticationawscloudtrail.md) |
| Barracuda WAF | [_ASim_Authentication_BarracudaWAF](asimauthenticationbarracudawaf.md) |
| Cisco Adaptive Security Appliance (ASA) | [_ASim_Authentication_CiscoASA](asimauthenticationciscoasa.md) |
| Cisco ISE | [_ASim_Authentication_CiscoISE](asimauthenticationciscoise.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMeraki](asimauthenticationciscomeraki.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_Authentication_CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) |
| Google Workspace | [_ASim_Authentication_GoogleWorkspace](asimauthenticationgoogleworkspace.md) |
| Illumio | [_ASim_Authentication_IllumioSaaSCore](asimauthenticationillumiosaascore.md) |
| M365 Defender for EndPoint | [_ASim_Authentication_M365Defender](asimauthenticationm365defender.md) |
| Microsoft Defender for IoT | [_ASim_Authentication_MD4IoT](asimauthenticationmd4iot.md) |
|  | [_ASim_Authentication_MicrosoftSecurityEvents](asim-authentication-microsoftsecurityevents.md) |
| Windows Security Events | [_ASim_Authentication_MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) |
| Native | [_ASim_Authentication_Native](asimauthenticationnative.md) |
| Okta | [_ASim_Authentication_OktaSSO](asimauthenticationoktasso.md) |
| Okta | [_ASim_Authentication_OktaV2](asimauthenticationoktav2.md) |
| Palo Alto Cortex Data Lake | [_ASim_Authentication_PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) |
| PostgreSQL | [_ASim_Authentication_PostgreSQL](asimauthenticationpostgresql.md) |
| Salesforce Service Cloud | [_ASim_Authentication_SalesforceSC](asimauthenticationsalesforcesc.md) |
| SentinelOne | [_ASim_Authentication_SentinelOne](asimauthenticationsentinelone.md) |
| Microsoft Entra ID | [_ASim_Authentication_SigninLogs](asimauthenticationsigninlogs.md) |
| OpenSSH | [_ASim_Authentication_Sshd](asimauthenticationsshd.md) |
| su | [_ASim_Authentication_Su](asimauthenticationsu.md) |
| sudo | [_ASim_Authentication_Sudo](asimauthenticationsudo.md) |
| VMware Carbon Black Cloud | [_ASim_Authentication_VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) |
| Vectra | [_ASim_Authentication_VectraXDRAudit](asimauthenticationvectraxdraudit.md) |
|  | [_Im_Authentication_Empty](im-authentication-empty.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ASimAuthenticationAADManagedIdentitySignInLogs`](../asim/asimauthenticationaadmanagedidentitysigninlogs.md) | — | — |
| [`ASimAuthenticationAADNonInteractiveUserSignInLogs`](../asim/asimauthenticationaadnoninteractiveusersigninlogs.md) | — | — |
| [`ASimAuthenticationAADServicePrincipalSignInLogs`](../asim/asimauthenticationaadserviceprincipalsigninlogs.md) | — | — |
| [`ASimAuthenticationAWSCloudTrail`](../asim/asimauthenticationawscloudtrail.md) | — | — |
| [`ASimAuthenticationBarracudaWAF`](../asim/asimauthenticationbarracudawaf.md) | — | — |
| [`ASimAuthenticationCiscoASA`](../asim/asimauthenticationciscoasa.md) | — | — |
| [`ASimAuthenticationCiscoISE`](../asim/asimauthenticationciscoise.md) | — | — |
| [`ASimAuthenticationCiscoMeraki`](../asim/asimauthenticationciscomeraki.md) | — | — |
| [`ASimAuthenticationCiscoMerakiSyslog`](../asim/asimauthenticationciscomerakisyslog.md) | — | — |
| [`ASimAuthenticationCrowdStrikeFalconHost`](../asim/asimauthenticationcrowdstrikefalconhost.md) | — | — |
| [`ASimAuthenticationGoogleWorkspace`](../asim/asimauthenticationgoogleworkspace.md) | — | — |
| [`ASimAuthenticationIllumioSaaSCore`](../asim/asimauthenticationillumiosaascore.md) | — | — |
| [`ASimAuthenticationM365Defender`](../asim/asimauthenticationm365defender.md) | — | — |
| [`ASimAuthenticationMD4IoT`](../asim/asimauthenticationmd4iot.md) | — | — |
| [`ASimAuthenticationMicrosoftWindowsEvent`](../asim/asimauthenticationmicrosoftwindowsevent.md) | — | — |
| [`ASimAuthenticationNative`](../asim/asimauthenticationnative.md) | — | — |
| [`ASimAuthenticationOktaSSO`](../asim/asimauthenticationoktasso.md) | — | — |
| [`ASimAuthenticationOktaV2`](../asim/asimauthenticationoktav2.md) | — | — |
| [`ASimAuthenticationPaloAltoCortexDataLake`](../asim/asimauthenticationpaloaltocortexdatalake.md) | — | — |
| [`ASimAuthenticationPostgreSQL`](../asim/asimauthenticationpostgresql.md) | — | — |
| [`ASimAuthenticationSalesforceSC`](../asim/asimauthenticationsalesforcesc.md) | — | — |
| [`ASimAuthenticationSentinelOne`](../asim/asimauthenticationsentinelone.md) | — | — |
| [`ASimAuthenticationSigninLogs`](../asim/asimauthenticationsigninlogs.md) | — | — |
| [`ASimAuthenticationSshd`](../asim/asimauthenticationsshd.md) | — | — |
| [`ASimAuthenticationSu`](../asim/asimauthenticationsu.md) | — | — |
| [`ASimAuthenticationSudo`](../asim/asimauthenticationsudo.md) | — | — |
| [`ASimAuthenticationVMwareCarbonBlackCloud`](../asim/asimauthenticationvmwarecarbonblackcloud.md) | — | — |
| [`ASimAuthenticationVectraXDRAudit`](../asim/asimauthenticationvectraxdraudit.md) | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

