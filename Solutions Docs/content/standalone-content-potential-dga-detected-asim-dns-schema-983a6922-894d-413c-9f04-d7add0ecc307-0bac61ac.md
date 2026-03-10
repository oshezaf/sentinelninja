# Potential DGA detected (ASIM DNS Schema)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies clients with a high NXDomain count which could be indicative of a DGA (cycling through possible C2 domains where most C2s are not live). Alert is generated when a new IP address is seen (based on not being seen associated with  NXDomain records in prior 10-day baseline period). This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM DNS schema

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `983a6922-894d-413c-9f04-d7add0ecc307` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureFirewall](../connectors/azurefirewall.md), [Zscaler](../connectors/zscaler.md), [InfobloxNIOS](../connectors/infobloxnios.md), [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md), [NXLogDnsLogs](../connectors/nxlogdnslogs.md), [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md), [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimDNS/imDns_HighNXDomainCount_detection.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

