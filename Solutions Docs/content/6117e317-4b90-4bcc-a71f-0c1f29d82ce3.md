# Veeam ONE VM with No Replica (Hyper-V)

Detects Hyper-V VMs with no replica configured.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `6117e317-4b90-4bcc-a71f-0c1f29d82ce3` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VeeamCustomTablesDataConnector](../connectors/veeamcustomtablesdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Veeam_One_VM_with_no_replica_Hyper_V.yaml) |

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
