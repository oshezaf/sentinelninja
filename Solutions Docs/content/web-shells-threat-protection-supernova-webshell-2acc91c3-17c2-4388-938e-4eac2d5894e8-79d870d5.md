# SUPERNOVA webshell

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies SUPERNOVA webshell based on W3CIISLog data.  References:  - https://unit42.paloaltonetworks.com/solarstorm-supernova/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `2acc91c3-17c2-4388-938e-4eac2d5894e8` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Persistence, CommandAndControl |
| **Techniques** | T1505, T1071 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Analytic%20Rules/Supernovawebshell.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`W3CIISLog`](../tables/w3ciislog.md) | ✓ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)

