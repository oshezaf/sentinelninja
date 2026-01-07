# BTP - User added to Cloud Identity Service privileged Administrators list

Identifies when a user is granted privileged administrator permissions in SAP Cloud Identity Service. These permissions include managing Identity Providers, Service Providers, Users, Groups, and Access controls.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `7d4e9f2a-8b1c-4a5d-9e3f-6c2b1a0d8e7f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, PrivilegeEscalation |
| **Techniques** | T0859, T1078 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20User%20added%20to%20privileged%20Administrators%20list.yaml) |

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
