# SAP LogServ - HANA DB - Audit Trail Policy Changes

Identifies changes for HANA DB audit trail policies.  Source Action: Create / update existing audit policy in security definitions.  *Data Sources: SAP LogServ - HANA DB (Syslog)*

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP LogServ](../solutions/sap-logserv.md) |
| **ID** | `e8394afb-82a7-4718-8d31-cc57ad352fa8` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, LateralMovement, DefenseEvasion |
| **Required Connectors** | [SAPLogServ](../connectors/saplogserv.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ/Analytic%20Rules/SAPLogServ-AuditTrailPolicyChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPLogServ_CL`](../tables/saplogserv-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP LogServ](../solutions/sap-logserv.md)

