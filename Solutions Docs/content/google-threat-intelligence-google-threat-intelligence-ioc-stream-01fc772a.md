# Google Threat Intelligence - IoC Stream

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will ingest Google Threat Intelligence from your IoC Streams into Threat Intelligence Sentinel.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIIocStream/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`azuretables`](../logic-apps/managed-azuretables.md) | Managed | 1 | 3 |
| [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) | Managed | 0 | 1 |
| [`GoogleThreatIntelligence-CustomConnector`](../logic-apps/custom-googlethreatintelligence-customconnector.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Threat_Intelligence_-_Upload_STIX_Objects_(Preview) | post | `/ThreatIntelligence/@{encodeURIComponent('')}/UploadStixObjects/` | — |

#### [`azuretables`](../logic-apps/managed-azuretables.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Update_last_execution | put | `/v2/storageAccounts/@{encodeURIComponent(encodeURIComponent(variables('account_name')))}/tables/@{encodeURIComponent(variables('table_name'))}/entities(PartitionKey='@{encodeURIComponent('IoCStream-',workflow().name)}',RowKey='@{encodeURIComponent('LastExTimestamp')}')` | — |
| Create_table_(V2) | post | `/v2/storageAccounts/@{encodeURIComponent(encodeURIComponent(variables('account_name')))}/tables` | — |
| Get_last_execution | get | `/v2/storageAccounts/@{encodeURIComponent(encodeURIComponent(variables('account_name')))}/tables/@{encodeURIComponent(variables('table_name'))}/entities(PartitionKey='@{encodeURIComponent('IoCStream-',workflow().name)}',RowKey='@{encodeURIComponent('LastExTimestamp')}')` | — |

#### [`googlethreatintelligence`](../logic-apps/managed-googlethreatintelligence.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_IoC_Stream_list | get | `/ioc_stream` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

