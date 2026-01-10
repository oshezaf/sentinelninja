# BTP - Build Work Zone unauthorized access and role tampering

Identifies unauthorized OData access attempts and mass role/user deletions in SAP Build Work Zone  Standard Edition. These events may indicate an attacker accessing restricted resources or  removing access controls to cover their tracks.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `8e5f3a2c-9d1b-4c6e-a7f8-3b2d1e0c9a5f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, DefenseEvasion, Impact |
| **Techniques** | T1078, T1531, T1070 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Build%20Work%20Zone%20unauthorized%20access%20and%20role%20tampering.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP BTP](../solutions/sap-btp.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

