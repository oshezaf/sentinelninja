# BTP - Mass user deletion in a sub account

Identifies user account deletion activity where the amount of deleted users exceeds a predefined threshold.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `6f1e58bd-cd95-4dfb-8883-94207f30929a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1531, T1485, T1489, T0813, T0826, T0827 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Mass%20user%20deletion%20in%20a%20sub%20account.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP BTP](../solutions/sap-btp.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
