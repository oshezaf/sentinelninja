# BTP - User added to sensitive privileged role collection

Identifies identity management actions whereby a user is added to a set of monitored privileged role collections.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `5acbe4cb-a379-4acc-9ad3-28dc48ad33d3` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, PrivilegeEscalation |
| **Techniques** | T0859, T1078 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20User%20added%20to%20sensitive%20privileged%20role%20collection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP BTP](../solutions/sap-btp.md)

