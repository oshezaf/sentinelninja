# FireEye stolen red teaming tools communications

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'This composite hunting query will highlight any HTTP traffic in CommonSecurityLog web proxies (such as ZScaler) that match known patterns used by red teaming tools potentially stolen from FireEye. Most FireEye red teaming tools are designed to mimic legitimate API activity, false positives are common. This query includes a basic check to determine how common a hostname is in you environment, and allows you to modify this threshold to remove legitimate traffic from the query results. This query

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `e3b8ca4a-2bab-4246-860c-fc3bb8e7ac50` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071.001 |
| **Required Connectors** | [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/FireEyeRedTeamComms.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

