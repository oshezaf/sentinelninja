# RecordedFuture-Sandbox_StorageAccount

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will trigger on files in a Storage Account and send them to Recorded Future Sandbox. The result will be written as a reply and a Sentinel Incident will be created if the file attachment has a sandbox risk score grater then the configured threshold value.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Sandboxing/RecordedFuture-Sandbox_StorageAccount/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureblob` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 2 |
| `recordedfuturesandbo` | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureblob`** (managedApi):
- *Get_Blob_Metadata_(V2)*: method=`get`, path=`/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files/@{encodeURIComponent(encodeURIComponent('JTJmdGVzdGluZyUyZmNhbGMuZXhl'))}`
- *Get_blob_content_(V2)*: method=`get`, path=`/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files/@{encodeURIComponent(encodeURIComponent('JTJmdGVzdGluZyUyZmNhbGMuZXhl'))}/content`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Create_incident*: method=`put`, path=`/Incidents/subscriptions/@{encodeURIComponent('5129b3ff-c0c6-4e86-bd1c-70e5fcd579cf')}/resourceGroups/@{encodeURIComponent('RF')}/workspaces/@{encodeURIComponent('RF-log-analyitics')}`

**`recordedfuturesandbo`** (managedApi):
- *Get_the_full_report*: method=`get`, path=`/samples/@{encodeURIComponent(body('Get_the_full_summary')?['id'])}/overview.json`
- *Submit_file_samples*: method=`post`, path=`/samples/file`
- *Get_the_full_summary*: method=`get`, path=`/samples/@{encodeURIComponent(body('Submit_file_samples')?['id'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

