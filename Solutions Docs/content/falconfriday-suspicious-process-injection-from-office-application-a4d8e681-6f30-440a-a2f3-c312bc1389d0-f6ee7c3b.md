# Suspicious Process Injection from Office application

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects process injections using CreateRemoteThread, QueueUserAPC or SetThread context APIs, originating from an Office process (only Word/Excel/PowerPoint)that might contains macros. Performing process injection from a macro is a common technique by attackers to escape out of the Office process into something longer running.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `a4d8e681-6f30-440a-a2f3-c312bc1389d0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/OfficeProcessInjection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceEvents`](../tables/deviceevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to FalconFriday](../solutions/falconfriday.md)

