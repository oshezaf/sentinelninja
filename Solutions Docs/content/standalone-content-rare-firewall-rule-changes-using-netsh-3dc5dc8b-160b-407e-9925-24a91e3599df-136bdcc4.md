# Rare firewall rule changes using netsh

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query will show rare firewall rule changes using netsh utility by comparing rule names and program names from the previous day with those from the historical chosen time frame. - This technique was seen in relation to Solarigate attack but the results can indicate potential  malicious activity used in different attacks. - The process name in each data source is commented out as an adversary could rename it. It is advisable to keep process name commented but   if the results show unrelated f

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `3dc5dc8b-160b-407e-9925-24a91e3599df` |
| **Severity** | Low |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/MultipleDataSources/FirewallRuleChanges_using_netsh.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`Event`](../tables/event.md)
- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

