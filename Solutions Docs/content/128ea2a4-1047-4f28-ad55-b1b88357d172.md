# Veeam ONE VM with No Replica

Detects Veeam ONE VMs with no replica configuration.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `128ea2a4-1047-4f28-ad55-b1b88357d172` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VeeamCustomTablesDataConnector](../connectors/veeamcustomtablesdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Veeam_One_VM_with_no_replica.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Veeam](../solutions/veeam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
