# Possible Phishing with CSL and Network Sessions

This query looks for malicious URL clicks in phishing email recognized by MDO in correlation with CommonSecurityLogs(CSL) & NetworkSession events.  If your workspace doesnt have one of the many data sources required for ASIM it may give informational error which can be safely ignored.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `6c3a1258-bcdd-4fcd-b753-1a9bc826ce12` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1566, T1102 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [Zscaler](../connectors/zscaler.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AWSS3](../connectors/awss3.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [AzureNSG](../connectors/azurensg.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AIVectraStream](../connectors/aivectrastream.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/PossiblePhishingwithCSL%26NetworkSession.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ALERT`](../tables/alert.md)
- [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)
- [`AWSVPCFlow`](../tables/awsvpcflow.md)
- [`AZFWIdpsSignature`](../tables/azfwidpssignature.md)
- [`AZFWNatRule`](../tables/azfwnatrule.md)
- [`AZFWNetworkRule`](../tables/azfwnetworkrule.md)
- [`AZFWThreatIntel`](../tables/azfwthreatintel.md)
- [`AlertEvidence`](../tables/alertevidence.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`Corelight_CL`](../tables/corelight-cl.md)
- [`DeviceEvents`](../tables/deviceevents.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`Event`](../tables/event.md)
- [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)
- [`NTANetAnalytics`](../tables/ntanetanalytics.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`Update`](../tables/update.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
