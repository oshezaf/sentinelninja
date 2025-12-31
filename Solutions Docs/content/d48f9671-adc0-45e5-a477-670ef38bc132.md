# Veeam ONE Possible Ransomware Activity (Hyper-V)

Detects Veeam ONE possible ransomware activity alerts for Microsoft Hyper-V.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `d48f9671-adc0-45e5-a477-670ef38bc132` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VeeamCustomTablesDataConnector](../connectors/veeamcustomtablesdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Veeam_One_Possible_ransomware_activity_Hyper_V.yaml) |

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
