# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Star Blizzard C2 Domains August 2022

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match across various data feeds for domains related to an actor tracked by Microsoft as Star Blizzard.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `2149d9bb-8298-444c-8f99-f7bf0274dd05` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [CiscoASA](../connectors/ciscoasa.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/StarBlizzardDomainsAugust2022.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)
- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`EmailEvents`](../tables/emailevents.md)
- [`EmailUrlInfo`](../tables/emailurlinfo.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

