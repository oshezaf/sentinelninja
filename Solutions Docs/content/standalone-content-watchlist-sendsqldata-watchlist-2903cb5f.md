# Watchlist-SendSQLData-Watchlist

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Yaniv Shasha

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Watchlist-SendSQLData-Watchlist/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`sql`](../logic-apps/managed-sql.md) | Managed | 1 | 0 |
| [`sql-1`](../logic-apps/managed-sql-1.md) | Managed | 0 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`sql-1`](../logic-apps/managed-sql-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Execute_a_SQL_query_(V2) | post | `/v2/datasets/@{encodeURIComponent(encodeURIComponent('default'))},@{encodeURIComponent(encodeURIComponent('default'))}/query/sql` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Update_existing_Watchlist_ | PUT | `https://management.azure.com/subscriptions/@{variables('SubscriptionID')}/resourceGroups/@{variables('ResourceGroup')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('WorkspaceName')}/providers/Microsoft.SecurityInsights/watchlists/@{variables('Watchlist_Name')}?api-version=2019-01-01-preview` | — |
| Create_a_watchlist_and_Watchlist_Items | PUT | `https://management.azure.com/subscriptions/@{variables('SubscriptionID')}/resourceGroups/@{variables('ResourceGroup')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('WorkspaceName')}/providers/Microsoft.SecurityInsights/watchlists/@{variables('Watchlist_Name')}?api-version=2019-01-01-preview` | — |
| check_if_watchlist_exist_ | GET | `https://management.azure.com/subscriptions/@{variables('SubscriptionID')}/resourceGroups/@{variables('ResourceGroup')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('WorkspaceName')}/providers/Microsoft.SecurityInsights/watchlists/@{variables('Watchlist_Name')}?api-version=2019-01-01-preview` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

