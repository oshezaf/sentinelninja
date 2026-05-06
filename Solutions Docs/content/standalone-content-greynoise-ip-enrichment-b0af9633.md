# GreyNoise-IP-Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-SentinelIncident-GreyNoise-IP/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GreyNoiseIPContext_CL`](../tables/greynoiseipcontext-cl.md) | ? | ✓ | ? |
| [`GreyNoiseIPRIOT_CL`](../tables/greynoiseipriot-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 2 |
| `azuremonitorlogs` | Managed | 1 | 5 |
| `azuresentinel` | Managed | 1 | 5 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_IPContext_Data_to_Sentinel*: method=`post`, path=`/api/logs`
- *Send_RIOT_Data_to_Sentinel*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_visualize_results_IP_Detail*: method=`post`, path=`/visualizeQuery`
- *Run_query_and_visualize_results_IP_Geo*: method=`post`, path=`/visualizeQuery`
- *Run_query_and_visualize_results_IP_Main*: method=`post`, path=`/visualizeQuery`
- *Run_query_and_visualize_results_IP_RIOT*: method=`post`, path=`/visualizeQuery`
- *KQLRFC1918Check*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_4*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_2*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *GreyNoise_IP_Context*: method=`GET`, uri=`https://api.greynoise.io/v2/noise/context/@{items('For_each_IP_Entity')}`
- *GreyNoise_RIOT*: method=`GET`, uri=`https://api.greynoise.io/v2/riot/@{items('For_each_IP_Entity')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

