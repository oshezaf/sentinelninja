# 🔗 Barracuda Web Application Firewall via Legacy Agent Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [MMA](../methods/mma.md) |

[Barracuda Web Application Firewall (WAF)](https://www.barracuda.com/products/webapplicationfirewall) is an application security solution that protects web applications from OWASP Top 10 attacks, DDoS, and other web-based threats.

For more information, see [Barracuda CEF configuration](https://aka.ms/CEF-Barracuda).

For additional vendor documentation, see [Barracuda WAF - How to Export Logs](https://campus.barracuda.com/product/webapplicationfirewall/doc/168300161/how-to-export-logs-from-the-barracuda-web-application-firewall).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Barracuda_CL`](../tables/barracuda-cl.md) |  | — | — | — |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceVendor == "Barracuda"` | ✓ | ✓ | ✓ |
| [`barracuda_CL`](../tables/barracuda-cl.md) |  | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

