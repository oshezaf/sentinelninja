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
| [`arm`](../logic-apps/managed-arm.md) | Managed | 1 | 3 |
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`arm`](../logic-apps/managed-arm.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_or_update_a_resource | put | `/subscriptions/@{encodeURIComponent(variables('sentinel-sub'))}/resourcegroups/@{encodeURIComponent(variables('sentinel-RGname'))}/providers/@{encodeURIComponent('Microsoft.OperationalInsights')}/@{encodeURIComponent('/workspaces/',variables('sentinel-WorkspaceName'),'/providers/Microsoft.SecurityInsights/dataConnectors/',guid())}` | — |
| GetAll_DataConnectors | get | `/subscriptions/@{encodeURIComponent(variables('sentinel-sub'))}/resourcegroups/@{encodeURIComponent(variables('sentinel-RGname'))}/providers/@{encodeURIComponent('Microsoft.OperationalInsights')}/@{encodeURIComponent('/workspaces/',variables('sentinel-WorkspaceName'),'/providers/Microsoft.SecurityInsights/dataConnectors')}` | — |
| List_subscriptions | get | `/subscriptions` | — |

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data | post | `/api/logs` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| PUT_SyncSettings | PUT | `https://management.azure.com/subscriptions/@{items('For_each')?['SubscriptionID']}/providers/Microsoft.Security/settings/Sentinel?api-version=2021-06-01` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

