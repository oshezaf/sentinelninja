# GreyNoise-IP-CommunityEnrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Nathan Swift

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-SentinelIncident-GreyNoiseCommunity-IP/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GreyNoiseIPCommunity_CL`](../tables/greynoiseipcommunity-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 2 |
| `azuremonitorlogs` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 5 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_CommunityIP_Data_to_Sentinel*: method=`post`, path=`/api/logs`
- *Send_CommunityIP2_Data_to_Sentinel*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_visualize_results_CommunityIP*: method=`post`, path=`/visualizeQuery`
- *Run_query_and_visualize_results_CommunityIP2*: method=`post`, path=`/visualizeQuery`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_4*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_5*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_3*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_3*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *CommunityIP*: method=`GET`, uri=`https://api.greynoise.io/v3/community/@{items('For_each_IP_Entity')?['properties']?['address']}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

