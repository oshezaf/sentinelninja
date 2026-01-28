# Palo Alto - possible internal to external port scanning

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies a list of internal Source IPs (10.x.x.x Hosts) that have triggered 10 or more non-graceful tcp server resets from one or more Destination IPs which results in an "ApplicationProtocol = incomplete" designation. The server resets coupled with an "Incomplete" ApplicationProtocol designation can be an indication of internal to external port scanning or probing attack. References: https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000ClUvCAK and https://knowledgebase.p

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `5b72f527-e3f6-4a00-9908-8e4fee14da9f` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1046 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Analytic%20Rules/PaloAlto-PortScanning.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ |
| [`fluentbit_CL`](../tables/fluentbit-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

