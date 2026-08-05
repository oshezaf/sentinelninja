# RecordedFuture-Sandbox_StorageAccount

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will trigger on files in a Storage Account and send them to Recorded Future Sandbox. The result will be written to a custom log (RecordedFutureSandboxResults_CL). To create Microsoft Defender incidents from sandbox results, use a Analytics Rule that queries the RecordedFutureSandboxResults_CL table. Direct incident creation via Logic Apps is no longer supported in the unified Microsoft Defender portal.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Sandboxing/RecordedFuture-Sandbox_StorageAccount/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RecordedFutureSandboxResults_CL`](../tables/recordedfuturesandboxresults-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureblob`](../logic-apps/managed-azureblob.md) | Managed | 1 | 2 |
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`recordedfuturesandbo`](../logic-apps/managed-recordedfuturesandbo.md) | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureblob`](../logic-apps/managed-azureblob.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Blob_Metadata_(V2) | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files/@{encodeURIComponent(encodeURIComponent('JTJmdGVzdGluZyUyZmNhbGMuZXhl'))}` | — |
| Get_blob_content_(V2) | get | `/v2/datasets/@{encodeURIComponent(encodeURIComponent('AccountNameFromSettings'))}/files/@{encodeURIComponent(encodeURIComponent('JTJmdGVzdGluZyUyZmNhbGMuZXhl'))}/content` | — |

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_sandbox_results_to_log_analytics | post | `/api/logs` | — |

#### [`recordedfuturesandbo`](../logic-apps/managed-recordedfuturesandbo.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_the_full_report | get | `/samples/@{encodeURIComponent(body('Get_the_full_summary')?['id'])}/overview.json` | — |
| Submit_file_samples | post | `/samples/file` | — |
| Get_the_full_summary | get | `/samples/@{encodeURIComponent(body('Submit_file_samples')?['id'])}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

