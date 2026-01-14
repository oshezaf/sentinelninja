# Palo Alto - possible nmap scan on with top 100 option

Detect possible execution of Nmap top 100 option. This detection will detect scanning of 90% of Top 100 port of NMAP in less than 2 minutes. Unusual port only access through a scan are present in this list which is a good indicator of reconnaissance tactics. Whitelisting of Company scanners is required with implementation of the rule. Ref : https://nmap.org/book/performance-port-selection.html

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `4d61bb9a-7f6d-45b1-ac0e-517e2a92f6fd` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Analytic%20Rules/PaloAlto-Top100_NmapScan.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

