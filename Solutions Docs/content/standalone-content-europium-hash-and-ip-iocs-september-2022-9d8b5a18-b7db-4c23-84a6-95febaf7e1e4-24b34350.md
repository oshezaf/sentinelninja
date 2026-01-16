# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Europium - Hash and IP IOCs - September 2022

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match across various data feeds for  hashes and IP IOC related to Europium  Reference: https://www.microsoft.com/security/blog/2022/09/08/microsoft-investigates-iranian-attacks-against-the-albanian-government

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `9d8b5a18-b7db-4c23-84a6-95febaf7e1e4` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, CredentialAccess |
| **Techniques** | T1071, T1003 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [F5](../connectors/f5.md), [CiscoASA](../connectors/ciscoasa.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [CEF](../connectors/cef.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [Office365](../connectors/office365.md), [AzureFirewall](../connectors/azurefirewall.md), [WindowsFirewall](../connectors/windowsfirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/EUROPIUM%20_September2022.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imFileEvent`](../asim/imfileevent.md)

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`Event`](../tables/event.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`WindowsFirewall`](../tables/windowsfirewall.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

