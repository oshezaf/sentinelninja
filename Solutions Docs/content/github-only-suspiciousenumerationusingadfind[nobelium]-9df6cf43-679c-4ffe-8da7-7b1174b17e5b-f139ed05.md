# SuspiciousEnumerationUsingAdfind[Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Attackers can use Adfind which is administrative tool to gather information about domain controllers or ADFS servers. They may also rename executables with other benign tools on the system. The below query will look for Adfind usage in command line arguments irrespective of executable name in short span of time. You can limit query this to your DC and ADFS servers. Below references talk about suspicious use of adfind by adversaries. 1. AdFind Recon 2. Navigating the MAZE: Tactics, Techniques and

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `9df6cf43-679c-4ffe-8da7-7b1174b17e5b` |
| **Tactics** | Execution, Discovery, Collection |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Discovery/SuspiciousEnumerationUsingAdfind%5BNobelium%5D.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

