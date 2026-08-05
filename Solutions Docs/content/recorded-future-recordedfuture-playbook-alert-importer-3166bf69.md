# RecordedFuture-Playbook-Alert-Importer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook imports alerts from Recorded Future and stores them in a custom log (RecordedFuturePlaybookAlerts_CL) in the log analytics workspace. To create Microsoft Defender incidents from these alerts, use a Analytics Rule that queries the RecordedFuturePlaybookAlerts_CL table. Direct incident creation via Logic Apps is no longer supported in the unified Microsoft Defender portal.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Alerts/RecordedFuture-Playbook-Alert-Importer/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`recordedfuturev2`](../logic-apps/managed-recordedfuturev2.md) | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data | post | `/api/logs` | — |

#### [`recordedfuturev2`](../logic-apps/managed-recordedfuturev2.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Playbook_Alert_by_ID | get | `/playbook-alert/@{encodeURIComponent(items('For_each')?['playbook_alert_id'])}` | — |
| Search_Playbook_Alerts | post | `/playbook-alert/search` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

