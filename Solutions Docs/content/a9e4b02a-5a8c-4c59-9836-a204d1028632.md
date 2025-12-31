# SAP LogServ - HANA DB - User Admin actions

Identifies user administration actions.  Souirce Action: Create/Update/Delete a DB User.  *Data Sources: SAP LogServ - HANA DB (Syslog)*

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP LogServ](../solutions/sap-logserv.md) |
| **ID** | `a9e4b02a-5a8c-4c59-9836-a204d1028632` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Required Connectors** | [SAPLogServ](../connectors/saplogserv.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20LogServ/Analytic%20Rules/SAPLogServ-UserAdminActions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPLogServ_CL`](../tables/saplogserv-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP LogServ](../solutions/sap-logserv.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
