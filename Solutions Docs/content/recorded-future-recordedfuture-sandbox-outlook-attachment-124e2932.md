# RecordedFuture-Sandbox_Outlook_Attachment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will trigger on emails with attachments and send them to Recorded Future Sandbox. The result will be written to a custom log (RecordedFutureSandboxResults_CL) and an email notification will be sent if the score is above threshold. To create Microsoft Defender incidents, use a Analytics Rule that queries RecordedFutureSandboxResults_CL. Direct incident creation via Logic Apps is no longer supported in the unified Microsoft Defender portal.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Sandboxing/RecordedFuture-Sandbox_Outlook_Attachment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`outlook`](../logic-apps/managed-outlook.md) | Managed | 1 | 1 |
| [`recordedfuturesandbo`](../logic-apps/managed-recordedfuturesandbo.md) | Managed | 1 | 3 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`outlook`](../logic-apps/managed-outlook.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`recordedfuturesandbo`](../logic-apps/managed-recordedfuturesandbo.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_the_full_report | get | `/samples/@{encodeURIComponent(body('Get_the_full_summary')?['id'])}/overview.json` | — |
| Submit_file_samples | post | `/samples/file` | — |
| Get_the_full_summary | get | `/samples/@{encodeURIComponent(body('Submit_file_samples')?['id'])}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data | POST | `@{parameters('DceEndpoint')}/dataCollectionRules/@{parameters('DcrImmutableId')}/streams/@{parameters('StreamName')}?api-version=2023-01-01` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

