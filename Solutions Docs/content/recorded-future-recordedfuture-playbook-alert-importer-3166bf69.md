# RecordedFuture-Playbook-Alert-Importer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook imports alerts from Recorded Future and stores them in a custom log in the log analytics workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Alerts/RecordedFuture-Playbook-Alert-Importer/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 2 |
| `recordedfuturev2` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data*: method=`post`, path=`/api/logs`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Create_incident*: method=`put`, path=`[concat('/Incidents/subscriptions/', subscription().subscriptionId,'/resourceGroups/',resourceGroup().name,'/workspaces/',parameters('workspace_name') ) ]`

**`recordedfuturev2`** (managedApi):
- *Get_Playbook_Alert_by_ID*: method=`get`, path=`/playbook-alert/@{encodeURIComponent(items('For_each')?['playbook_alert_id'])}`
- *Search_Playbook_Alerts*: method=`post`, path=`/playbook-alert/search`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

