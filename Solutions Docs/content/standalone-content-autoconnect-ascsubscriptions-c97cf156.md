# AutoConnect-ASCSubscriptions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Lior Tamir modifiedby: Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AutoConnect-ASCSubscriptions/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AutoConnectASC_CL`](../tables/autoconnectasc-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `arm` | Managed | 1 | 3 |
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `office365` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`arm`** (managedApi):
- *Create_or_update_a_resource*: method=`put`, path=`/subscriptions/@{encodeURIComponent(variables('sentinel-sub'))}/resourcegroups/@{encodeURIComponent(variables('sentinel-RGname'))}/providers/@{encodeURIComponent('Microsoft.OperationalInsights')}/@{encodeURIComponent('/workspaces/',variables('sentinel-WorkspaceName'),'/providers/Microsoft.SecurityInsights/dataConnectors/',guid())}`
- *GetAll_DataConnectors*: method=`get`, path=`/subscriptions/@{encodeURIComponent(variables('sentinel-sub'))}/resourcegroups/@{encodeURIComponent(variables('sentinel-RGname'))}/providers/@{encodeURIComponent('Microsoft.OperationalInsights')}/@{encodeURIComponent('/workspaces/',variables('sentinel-WorkspaceName'),'/providers/Microsoft.SecurityInsights/dataConnectors')}`
- *List_subscriptions*: method=`get`, path=`/subscriptions`

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data*: method=`post`, path=`/api/logs`

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *PUT_SyncSettings*: method=`PUT`, uri=`https://management.azure.com/subscriptions/@{items('For_each')?['SubscriptionID']}/providers/Microsoft.Security/settings/Sentinel?api-version=2021-06-01`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

