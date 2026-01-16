# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Entropy for Processes for a given Host (Normalized Process Events)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Entropy calculation used to help identify Hosts where they have a high variety of processes(a high entropy process list on a given Host over time). This helps us identify rare processes on a given Host. Rare here means a process shows up on the Host relatively few times in the the last 7days. The Weight is calculated based on the Entropy, Process Count and Distinct Hosts with that Process. The lower the Weight/ProcessEntropy the, more interesting. The Weight calculation increases the Weight if

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `24e66452-2aaa-455f-b0c6-a0d8216bbe79` |
| **Tactics** | Execution |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/ASimProcess/imProcess_ProcessEntropy.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imProcessCreate`](../asim/improcesscreate.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

