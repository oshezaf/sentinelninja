# M2131_EventLogManagementPostureChanged_EL0

This alert is desinged to monitor Azure policies aligned with the Maturity Model for Event Log Management (M-21-31) standard. The alert triggers when EL0 policy compliance falls below 70% within a 1 week timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md) |
| **ID** | `1f8fcca5-47ed-409d-a8fa-d49ef821feaf` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/Analytic%20Rules/M2131EventLogManagementPostureChangedEL0.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityRecommendation`](../tables/securityrecommendation.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

