# Suspicious enumeration using Adfind tool (Normalized Process Events)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Attackers can use Adfind which is administrative tool to gather information about Domain controllers, ADFS Servers. They may also rename executables with other benign tools on the system. Below query will look for adfind usage in commandline arguments irrespective of executable name in short span of time. You can limit query this to your DC and ADFS servers. Below references talk about suspicious use of adfind by adversaries. - https://thedfirreport.com/2020/05/08/adfind-recon/ - https://www.fir

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `1eacb645-9354-49cd-8872-8d68a4fd3f59` |
| **Tactics** | Execution, Discovery, Collection |
| **Techniques** | T1059, T1087, T1482, T1201, T1069, T1074 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/ASimProcess/imProcess_Suspicious_enumeration_using_adfind.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

