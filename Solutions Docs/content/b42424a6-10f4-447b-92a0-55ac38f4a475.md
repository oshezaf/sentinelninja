# Malware Event Detected

Detects when restore points are marked as infected. This might indicate potential compromise of backup data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `b42424a6-10f4-447b-92a0-55ac38f4a475` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VeeamCustomTablesDataConnector](../connectors/veeamcustomtablesdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Malware_Event_Detected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Veeam](../solutions/veeam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
