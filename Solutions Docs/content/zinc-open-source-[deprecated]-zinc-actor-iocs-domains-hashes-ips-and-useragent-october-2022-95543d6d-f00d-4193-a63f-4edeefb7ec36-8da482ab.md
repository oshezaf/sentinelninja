# [Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022

Use Microsoft's up-to-date Threat Intelligence solution from the Content Hub to replace the deprecated query with outdated IoCs. Install it from: https://learn.microsoft.com/azure/sentinel/sentinel-solutions-deploy

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Zinc Open Source](../solutions/zinc-open-source.md) |
| **ID** | `95543d6d-f00d-4193-a63f-4edeefb7ec36` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [F5](../connectors/f5.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [CEF](../connectors/cef.md), [CefAma](../connectors/cefama.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [Office365](../connectors/office365.md), [AzureFirewall](../connectors/azurefirewall.md), [WindowsFirewall](../connectors/windowsfirewall.md), [WindowsFirewallAma](../connectors/windowsfirewallama.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source/Analytic%20Rules/ZincOctober2022_IP_Domain_Hash_IOC.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`DeviceEvents`](../tables/deviceevents.md)
- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`Event`](../tables/event.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Zinc Open Source](../solutions/zinc-open-source.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

