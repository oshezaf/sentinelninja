# Veeam ONE Job Disabled (Veeam Backup for Microsoft 365)

Detects when Veeam Backup for Microsoft 365 jobs are disabled.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `176abf3c-392a-47bd-b565-a4ecfd0ff7ec` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VeeamCustomTablesDataConnector](../connectors/veeamcustomtablesdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Veeam_One_Job_disabled_Veeam_Backup_for_Microsoft_365.yaml) |

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
