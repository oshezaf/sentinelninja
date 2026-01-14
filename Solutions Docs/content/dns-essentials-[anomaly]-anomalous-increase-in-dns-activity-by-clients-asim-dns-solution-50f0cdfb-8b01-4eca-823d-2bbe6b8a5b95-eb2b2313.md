# <img src="../images/asim-badge.png" alt="ASIM" height="32"> [Anomaly] Anomalous Increase in DNS activity by clients (ASIM DNS Solution)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Checks for an anomalous increase in DNS activity per client in the last 24 hours as compared to the last 14 days. Please note: To enhance performance, this query uses summarized data if available.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `50f0cdfb-8b01-4eca-823d-2bbe6b8a5b95` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1568, T1008, T1048 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Hunting%20Queries/AnomalousIncreaseInDNSActivityByClients.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)

## Tables Used

This content item queries data from the following tables:

- [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md)
- [`anomalies`](../tables/anomalies.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

