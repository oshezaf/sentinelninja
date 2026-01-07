# M2131_AssetStoppedLogging

This alert is designed to monitor assets within the Maturity Model for Event Log Management (M-21-31) standard. The alert triggers when a monitored asset fails to provide a heartbeat within 24 hours.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md) |
| **ID** | `4be5b645-1d08-49e4-b58d-07294ff19223` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/Analytic%20Rules/M2131AssetStoppedLogging.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Heartbeat`](../tables/heartbeat.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
