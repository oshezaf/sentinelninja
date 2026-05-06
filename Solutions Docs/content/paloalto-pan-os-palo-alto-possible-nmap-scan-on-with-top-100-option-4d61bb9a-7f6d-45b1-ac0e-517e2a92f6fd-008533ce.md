# Palo Alto - possible nmap scan on with top 100 option

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

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

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DestinationPort in "10000,1025,1026,1027,1028,1029,106,110,111,1110,119,13,135,139,143,1433,144,1720,1723,1755,179,1900,199,2000,2001,2049,21,2121,22,23,25,26,2717,3000,3128,32768,3306,3389,37,389,3986,427,444,445,465,4899,49152,49153,49154,49155,49156,49157,5000,5009,5051,5060,5101,513,514,515,5190,5357,543,5432,544,548,554,5631,5666,5800,587,5900,6000,6001,631,646,6646,7,7070,79,8000,8008,8009,8080,8081,81,8443,873,88,8888,9,9100,990,993,995,9999"` | ✓ | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

