# Power Automate - Departing employee flow activity

Identifies instances where an employee who has been notified or is already terminated, on the TerminatedEmployees watchlist, creates or modifies a Power Automate flow.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `b1e11b8c-545a-4dea-a912-0008e160d183` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Impact |
| **Techniques** | T1567, T1485, T1491, T0813, T0879, T0826 |
| **Required Connectors** | [PowerAutomate](../connectors/powerautomate.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Automate%20-%20Departing%20employee%20flow%20activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`PowerAutomateActivity`](../tables/powerautomateactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

