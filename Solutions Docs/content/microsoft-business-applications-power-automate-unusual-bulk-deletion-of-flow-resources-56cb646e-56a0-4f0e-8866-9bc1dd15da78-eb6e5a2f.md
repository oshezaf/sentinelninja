# Power Automate - Unusual bulk deletion of flow resources

Identifies bulk deletion of Power Automate flows that exceed a predefined threshold defined in the query and deviate from activity patterns observed in the last 14 days.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `56cb646e-56a0-4f0e-8866-9bc1dd15da78` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1485, T0828, T1562 |
| **Required Connectors** | [PowerAutomate](../connectors/powerautomate.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Automate%20-%20Unusual%20bulk%20deletion%20of%20flow%20resources.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`PowerAutomateActivity`](../tables/powerautomateactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

