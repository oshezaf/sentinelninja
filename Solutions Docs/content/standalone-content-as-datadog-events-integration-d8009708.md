# AS-Datadog-Events-Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run on a timmed trigger. It will poll Datadog for new events and replicate them in Sentinel

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Datadog-Events-Integration/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Datadog_Events_CL`](../tables/datadog-events-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `azuremonitorlogs` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_V2*: method=`post`, path=`/queryDataV2`

**`keyvault`** (managedApi):
- *Get_Secret_-_API_Key*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('APIKeySecretName'), ''')}/value')]`
- *Get_Secret_-_Application_Key*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('ApplicationKeySecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_Events*: method=`GET`, uri=`[concat('https://', parameters('DatadogDomain'), '/api/v2/events?filter[from]=@{variables(''Unix Start Time'')}&filter[to]=@{variables(''Unix End Time'')}')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

