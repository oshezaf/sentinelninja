# Cobalt Strike DNS Beaconing

'Cobalt Strike is a famous Pen Test tool that is used by pen testers as well as attackers alike To compromise an environment.   The query tries to detect suspicious DNS queries known from Cobalt Strike beacons.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md) |
| **ID** | `dde206fc-3f0b-4175-bb5d-42d2aae9d4c9` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Required Connectors** | [DNS](../connectors/dns.md), [ASimDnsActivityLogs](../connectors/asimdnsactivitylogs.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials/Hunting%20Queries/CobaltDNSBeacon.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DnsEvents`](../tables/dnsevents.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

