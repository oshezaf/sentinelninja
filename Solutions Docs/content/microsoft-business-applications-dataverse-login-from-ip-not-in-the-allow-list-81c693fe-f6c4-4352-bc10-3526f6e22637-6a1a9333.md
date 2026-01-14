# Dataverse - Login from IP not in the allow list

Identifies logons from IPv4 addresses not matching IPv4 subnets maintained on an allow list. This analytics rule uses the NetworkAddresses watchlist template.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `81c693fe-f6c4-4352-bc10-3526f6e22637` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078, T1190, T1133 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Dataverse%20-%20Login%20from%20IP%20not%20in%20the%20allow%20list.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DataverseActivity`](../tables/dataverseactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

