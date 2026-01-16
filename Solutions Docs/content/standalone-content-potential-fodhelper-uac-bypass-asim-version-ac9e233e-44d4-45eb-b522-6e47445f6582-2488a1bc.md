# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Potential Fodhelper UAC Bypass (ASIM Version)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection looks for the steps required to conduct a UAC bypass using Fodhelper.exe. By default this detection looks for the setting of the required registry keys and the invoking of the process within 1 hour - this can be tweaked as required.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `ac9e233e-44d4-45eb-b522-6e47445f6582` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1548.002 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/PotentialFodhelperUACBypass%28ASIMVersion%29.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`imRegistry`](../asim/imregistry.md)

## Tables Used

This content item queries data from the following tables:

- [`imProcess`](../tables/improcess.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

