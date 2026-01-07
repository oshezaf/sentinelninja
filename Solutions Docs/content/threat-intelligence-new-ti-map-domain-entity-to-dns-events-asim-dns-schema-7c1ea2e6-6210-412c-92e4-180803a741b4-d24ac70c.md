# TI map Domain entity to Dns Events (ASIM DNS Schema)

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

## Tables Used

This content item queries data from the following tables:

- [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)
- [`AZFWDnsQuery`](../tables/azfwdnsquery.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`Corelight_CL`](../tables/corelight-cl.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`Event`](../tables/event.md)
- [`GCP_DNS_CL`](../tables/gcp-dns-cl.md)
- [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
