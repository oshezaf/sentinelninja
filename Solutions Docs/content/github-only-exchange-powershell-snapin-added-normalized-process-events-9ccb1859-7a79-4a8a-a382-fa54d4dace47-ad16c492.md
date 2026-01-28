# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Exchange PowerShell Snapin Added (Normalized Process Events)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The Exchange Powershell Snapin was loaded on a host, this allows for a Exchange server management via PowerShell. Whilst this is a legitimate administrative tool it is abused by attackers to performs actions on a compromised Exchange server. Hunt for unusual activity related to this Snapin including it being added on new hosts or by new accounts.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `9ccb1859-7a79-4a8a-a382-fa54d4dace47` |
| **Tactics** | Collection |
| **Techniques** | T1119 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/ASimProcess/imProcess_ExchangePowerShellSnapin.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imProcessCreate`](../asim/improcesscreate.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

