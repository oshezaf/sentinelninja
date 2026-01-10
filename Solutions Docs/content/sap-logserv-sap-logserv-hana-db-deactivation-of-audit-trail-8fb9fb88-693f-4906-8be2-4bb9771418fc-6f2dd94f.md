# SAP LogServ - HANA DB - Deactivation of Audit Trail

Identifies deactivation of HANA DB audit log.  Source Action: Deactivate Audit Log in HANA DB security defnitions.  *Data Sources: SAP LogServ - HANA DB (Syslog)*

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP LogServ](../solutions/sap-logserv.md) |
| **ID** | `8fb9fb88-693f-4906-8be2-4bb9771418fc` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, LateralMovement, DefenseEvasion |
| **Required Connectors** | [SAPLogServ](../connectors/saplogserv.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ/Analytic%20Rules/SAPLogServ-DeactivationofAuditTrail.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPLogServ_CL`](../tables/saplogserv-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP LogServ](../solutions/sap-logserv.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

