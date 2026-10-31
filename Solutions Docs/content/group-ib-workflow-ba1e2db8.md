# workflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Group-IB](../solutions/group-ib.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/Standard/GIBTIA_Compromised_account/workflow.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Query_Last_SeqUpdate | POST | `@{concat('https://management.azure.com/subscriptions/', appsetting('WORKFLOWS_SUBSCRIPTION_ID'), '/resourceGroups/', appsetting('WORKFLOWS_RESOURCE_GROUP_NAME'), '/providers/microsoft.operationalinsights/workspaces/', appsetting('WorkspaceName'), '/query?api-version=2017-10-01')}` | — |
| HTTP_Get_SequenceList | GET | `https://tap.group-ib.com/api/v2/sequence_list` | — |
| Get_next_portion | GET | `@{concat('https://tap.group-ib.com/api/v2/compromised/account_group/updated?seqUpdate=', variables('seqUpdate'), '&limit=', min(int(appsetting('LimitPerPortion')), 500), if(equals(appsetting('AccountFeedType'), 'all'), '', if(equals(appsetting('AccountFeedType'), 'combolist'), '&unique=0&combolist=1', '&unique=1&combolist=0')), '&probable_corporate_access=', appsetting('ProbableCorporateAccessFilter'))}` | — |
| Write_chunk_to_table | POST | `@{concat(appsetting('DcrEndpoint'), '/dataCollectionRules/', appsetting('DcrImmutableId'), '/streams/Custom-GIBCompromisedAccount?api-version=2023-01-01')}` | — |
| Save_tracking_record | POST | `@{concat(appsetting('DcrEndpoint'), '/dataCollectionRules/', appsetting('DcrImmutableId'), '/streams/Custom-GIBCollectionTracking?api-version=2023-01-01')}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Group-IB](../solutions/group-ib.md)

