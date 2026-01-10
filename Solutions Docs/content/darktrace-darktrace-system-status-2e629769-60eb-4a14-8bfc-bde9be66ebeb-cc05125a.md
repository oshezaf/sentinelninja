# Darktrace System Status

This rule creates Microsoft Sentinel Alerts based on Darktrace system status alerts for health monitoring, fetched every 5 minutes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Darktrace](../solutions/darktrace.md) |
| **ID** | `2e629769-60eb-4a14-8bfc-bde9be66ebeb` |
| **Severity** | Informational |
| **Kind** | Scheduled |
| **Required Connectors** | [DarktraceRESTConnector](../connectors/darktracerestconnector.md) |
| **Event Vendor** | Darktrace |
| **Event Product** | Darktrace DETECT |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Analytic%20Rules/CreateAlertFromSystemStatus.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Darktrace](../solutions/darktrace.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

