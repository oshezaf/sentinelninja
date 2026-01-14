# Microsoft COVID-19 file hash indicator matches

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match in CommonSecurityLog Event data from any FileHash published in the Microsoft COVID-19 Threat Intel Feed - as described at https://www.microsoft.com/security/blog/2020/05/14/open-sourcing-covid-threat-intelligence/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **ID** | `2be4ef67-a93f-4d8a-981a-88158cb73abd` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204.002 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Analytic%20Rules/FileHashEntity_Covid19_CommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

