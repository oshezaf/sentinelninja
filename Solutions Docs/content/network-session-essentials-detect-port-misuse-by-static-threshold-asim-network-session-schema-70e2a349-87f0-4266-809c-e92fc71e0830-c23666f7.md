# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Detect port misuse by static threshold (ASIM Network Session schema)

There is an normal amount of traffic that goes on a particular port in any organization. This hunting query identifies port usage higher than threshold defined in 'NetworkSession_Monitor_Configuration' watchlist to determine high port usage.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `70e2a349-87f0-4266-809c-e92fc71e0830` |
| **Tactics** | CommandAndControl, InitialAccess, Execution |
| **Techniques** | T1905, T1190, T1059, T1203 |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Hunting%20Queries/DetectPortMisuseByStaticThresholdHunting.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession`](../asim/imnetworksession.md)

## Tables Used

This content item queries data from the following tables:

- [`NetworkCustomAnalytics_protocol_CL`](../tables/networkcustomanalytics-protocol-cl.md)
- [`NetworkSummary_Protocol_CL`](../tables/networksummary-protocol-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Network Session Essentials](../solutions/network-session-essentials.md)

