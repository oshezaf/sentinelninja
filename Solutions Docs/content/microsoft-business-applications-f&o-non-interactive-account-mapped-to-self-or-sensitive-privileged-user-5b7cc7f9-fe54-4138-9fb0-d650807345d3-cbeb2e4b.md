# F&O - Non-interactive account mapped to self or sensitive privileged user

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies changes to Microsoft Entra client apps registered for Finance & Operations, specifically when a new client is mapped to a predefined list of sensitive privileged user accounts, or when a user associates a client app with their own account.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `5b7cc7f9-fe54-4138-9fb0-d650807345d3` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence, PrivilegeEscalation |
| **Techniques** | T1556, T1098, T1136, T1078, T0859 |
| **Required Connectors** | [Dynamics365Finance](../connectors/dynamics365finance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/F%26O%20-%20Non-interactive%20account%20mapped%20to%20self%20or%20sensitive%20privileged%20user.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`FinanceOperationsActivity_CL`](../tables/financeoperationsactivity-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

