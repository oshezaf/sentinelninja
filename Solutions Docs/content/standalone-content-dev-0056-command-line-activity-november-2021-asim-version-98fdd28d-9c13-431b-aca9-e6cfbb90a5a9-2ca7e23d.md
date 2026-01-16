# Dev-0056 Command Line Activity November 2021 (ASIM Version)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

 This hunting query looks for process command line activity related to activity observed by Dev-0056.The command lines this query hunts for are used as part of the threat actor's post exploitation activity.   This query uses the Microsoft Sentinel Information Model - https://docs.microsoft.com/azure/sentinel/normalization

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `98fdd28d-9c13-431b-aca9-e6cfbb90a5a9` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/ASimProcess/imProcess_Dev-0056CommandLineActivityNovember2021%28ASIMVersion%29.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)
- [`imProcess`](../tables/improcess.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

