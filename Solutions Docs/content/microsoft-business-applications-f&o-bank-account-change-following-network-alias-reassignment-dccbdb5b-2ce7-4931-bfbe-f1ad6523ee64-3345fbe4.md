# F&O - Bank account change following network alias reassignment

Identifies changes to user accounts where the network alias was modified to a new value. Shortly afterwards, the updated alias is used to update a bank account number.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `dccbdb5b-2ce7-4931-bfbe-f1ad6523ee64` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, LateralMovement, PrivilegeEscalation |
| **Techniques** | T1556, T0859, T1078 |
| **Required Connectors** | [Dynamics365Finance](../connectors/dynamics365finance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/F%26O%20-%20Bank%20account%20change%20following%20network%20alias%20reassignment.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

