# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthentication` (parameter-less) · `imAuthentication` (filtering) |
| **Built-in Parser** | `_ASim_Authentication` (parameter-less) · `_Im_Authentication` (filtering) |
| **Schema** | Authentication |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.2.15 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthentication.md)) |
| **Last Updated** | May 05, 2026 |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthentication.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthentication.yaml) |

## Description

This ASIM parser supports normalizing Authentication logs from all supported sources to the ASIM Authentication normalized schema. ParserName: ASimAuthentication

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Entra ID | [_ASim_Authentication_AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| Microsoft Entra ID | [_ASim_Authentication_AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| AWS | [_ASim_Authentication_AWSCloudTrail](asimauthenticationawscloudtrail.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| Barracuda WAF | [_ASim_Authentication_BarracudaWAF](asimauthenticationbarracudawaf.md) | [Barracuda WAF (legacy connector)](../solutions/barracuda-waf.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Adaptive Security Appliance (ASA) | [_ASim_Authentication_CiscoASA](asimauthenticationciscoasa.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco DNAC | [_ASim_Authentication_CiscoDNAC](asimauthenticationciscodnac.md) | [Syslog](../solutions/syslog.md) |
| Cisco IOS | [_ASim_Authentication_CiscoIOS](asimauthenticationciscoios.md) | [Syslog](../solutions/syslog.md) |
| Cisco ISE | [_ASim_Authentication_CiscoISE](asimauthenticationciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco ISE Administrator | [_ASim_Authentication_CiscoISEAdministrator](asimauthenticationciscoiseadministrator.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMeraki](asimauthenticationciscomeraki.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_Authentication_CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_Authentication_CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[CrowdStrike Falcon Endpoint Protection (legacy connector)](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Fortigate | [_ASim_Authentication_FortinetFortigate](asimauthenticationfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel (legacy connector)](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Google Workspace | [_ASim_Authentication_GoogleWorkspace](asimauthenticationgoogleworkspace.md) | [GoogleWorkspaceReports (legacy connector)](../solutions/googleworkspacereports.md) |
| Illumio | [_ASim_Authentication_IllumioSaaSCore](asimauthenticationillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| M365 Defender for EndPoint | [_ASim_Authentication_M365Defender](asimauthenticationm365defender.md) |  |
| Microsoft Defender for IoT | [_ASim_Authentication_MD4IoT](asimauthenticationmd4iot.md) |  |
|  | [_ASim_Authentication_MicrosoftSecurityEvents](asim-authentication-microsoftsecurityevents.md) |  |
| Windows Security Events | [_ASim_Authentication_MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](../solutions/windows-forwarded-events.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Native | [_ASim_Authentication_Native](asimauthenticationnative.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| Okta | [_ASim_Authentication_OktaSSO](asimauthenticationoktasso.md) | [Okta Single Sign-On (legacy connector)](../solutions/okta-single-sign-on.md) |
| Okta | [_ASim_Authentication_OktaSystemLogs](asimauthenticationoktasystemlogs.md) |  |
| Okta | [_ASim_Authentication_OktaV2](asimauthenticationoktav2.md) | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| Palo Alto Cortex Data Lake | [_ASim_Authentication_PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[PaloAltoCDL (legacy connector)](../solutions/paloaltocdl.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto PAN-OS GlobalProtect | [_ASim_Authentication_PaloAltoGlobalProtect](asimauthenticationpaloaltoglobalprotect.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto PAN-OS | [_ASim_Authentication_PaloAltoPanOS](asimauthenticationpaloaltopanos.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| PostgreSQL | [_ASim_Authentication_PostgreSQL](asimauthenticationpostgresql.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[PostgreSQL (legacy connector)](../solutions/postgresql.md) |
| Salesforce Service Cloud | [_ASim_Authentication_SalesforceSC](asimauthenticationsalesforcesc.md) | [Salesforce Service Cloud (legacy connector)](../solutions/salesforce-service-cloud.md) |
| SentinelOne | [_ASim_Authentication_SentinelOne](asimauthenticationsentinelone.md) | [SentinelOne (legacy connector)](../solutions/sentinelone.md) |
| Microsoft Entra ID | [_ASim_Authentication_SigninLogs](asimauthenticationsigninlogs.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| OpenSSH | [_ASim_Authentication_Sshd](asimauthenticationsshd.md) | [Syslog](../solutions/syslog.md) |
| su | [_ASim_Authentication_Su](asimauthenticationsu.md) | [Syslog](../solutions/syslog.md) |
| sudo | [_ASim_Authentication_Sudo](asimauthenticationsudo.md) | [Syslog](../solutions/syslog.md) |
| VMware Carbon Black Cloud | [_ASim_Authentication_VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud (legacy connector)](../solutions/vmware-carbon-black-cloud.md) |
| VMware ESXi | [_ASim_Authentication_VMwareESXi](asimauthenticationvmwareesxi.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md)<br>[Cisco UCS (legacy connector)](../solutions/cisco-ucs.md)<br>[Citrix ADC (legacy connector)](../solutions/citrix-adc.md)<br>[Forescout (Legacy)](../solutions/forescout-legacy.md)<br>[RSA SecurID (legacy connector)](../solutions/rsa-securid.md)<br>[Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md) |
| VMware vCenter | [_ASim_Authentication_VMwareVCenter](asimauthenticationvmwarevcenter.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[VMware vCenter (legacy connector)](../solutions/vmware-vcenter.md) |
| Vectra | [_ASim_Authentication_VectraXDRAudit](asimauthenticationvectraxdraudit.md) | [Vectra XDR](../solutions/vectra-xdr.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

