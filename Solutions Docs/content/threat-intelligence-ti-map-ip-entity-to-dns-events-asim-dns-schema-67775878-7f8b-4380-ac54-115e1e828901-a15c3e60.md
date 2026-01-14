# <img src="../images/asim-badge.png" alt="ASIM" height="32"> TI map IP entity to DNS Events (ASIM DNS schema)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule identifies DNS requests for which response IP address is a known IoC. This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM DNS schema.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `67775878-7f8b-4380-ac54-115e1e828901` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [DNS](../connectors/dns.md), [AzureFirewall](../connectors/azurefirewall.md), [Zscaler](../connectors/zscaler.md), [InfobloxNIOS](../connectors/infobloxnios.md), [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md), [NXLogDnsLogs](../connectors/nxlogdnslogs.md), [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Analytic%20Rules/imDns_IPEntity_DnsEvents.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

## Tables Used

This content item queries data from the following tables:

- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Threat Intelligence](../solutions/threat-intelligence.md)

