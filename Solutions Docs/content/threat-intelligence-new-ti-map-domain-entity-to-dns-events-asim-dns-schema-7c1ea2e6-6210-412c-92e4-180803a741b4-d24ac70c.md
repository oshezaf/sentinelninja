# <img src="../images/asim-badge.png" alt="ASIM" height="32"> TI map Domain entity to Dns Events (ASIM DNS Schema)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match in DNS events from any Domain IOC from TI This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM DNS schema'

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| **ID** | `7c1ea2e6-6210-412c-92e4-180803a741b4` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [DNS](../connectors/dns.md), [AzureFirewall](../connectors/azurefirewall.md), [Zscaler](../connectors/zscaler.md), [InfobloxNIOS](../connectors/infobloxnios.md), [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md), [NXLogDnsLogs](../connectors/nxlogdnslogs.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md), [Corelight](../connectors/corelight.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29/Analytic%20Rules/imDns_DomainEntity_DnsEvents.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

