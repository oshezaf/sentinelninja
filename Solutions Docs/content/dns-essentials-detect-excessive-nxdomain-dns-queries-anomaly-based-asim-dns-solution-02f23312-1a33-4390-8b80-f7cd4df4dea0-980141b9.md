# Detect excessive NXDOMAIN DNS queries - Anomaly based (ASIM DNS Solution)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule makes use of the series decompose anomaly method to generate an alert when client requests excessive amount of DNS queries to non-existent domains. This helps in identifying possible C2 communications. It utilizes [ASIM](https://aka.ms/AboutASIM) normalization and is applied to any source that supports the ASIM DNS schema. The rule also depends on the "**DNSEssentialsCustomParser**" Parser, so please make sure it is installed and configured before you use this Rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [DNS Essentials](../solutions/dns-essentials.md) |
| **ID** | `02f23312-1a33-4390-8b80-f7cd4df4dea0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1568, T1008 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DNS%20Essentials/Analytic%20Rules/ExcessiveNXDOMAINDNSQueriesAnomalyBased.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Anomalies`](../tables/anomalies.md) | ✓ | ✓ | ✓ |
| [`DNS_Summarized_Logs_ipV1_CL`](../tables/dns-summarized-logs-ipv1-cl.md) 🔶 | ? | ✓ | ? |
| [`DNS_Summarized_Logs_ip_CL`](../tables/dns-summarized-logs-ip-cl.md) 🔶 | ? | ✓ | ? |
| [`DNS_Summarized_Logs_sourceInfoV1_CL`](../tables/dns-summarized-logs-sourceinfov1-cl.md) 🔶 | ? | ✓ | ? |
| [`DNS_Summarized_Logs_sourceInfo_CL`](../tables/dns-summarized-logs-sourceinfo-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to DNS Essentials](../solutions/dns-essentials.md)

