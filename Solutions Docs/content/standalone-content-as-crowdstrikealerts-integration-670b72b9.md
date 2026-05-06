# AS-CrowdstrikeAlerts-Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run on a timmed trigger. It will poll Crowdstrike for new alerts and replicate them in Sentinel

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Crowdstrike-Alerts-Integration/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Crowdstrike_Alerts_CL`](../tables/crowdstrike-alerts-cl.md) | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `azuremonitorlogs` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_V2_-_Get_Potential_Duplicates*: method=`post`, path=`/queryDataV2`

**`keyvault`** (managedApi):
- *Get_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_Complete_Alerts*: method=`POST`, uri=`[concat('https://', parameters('CrowdstrikeDomain') ,'/alerts/entities/alerts/v1')]`
- *HTTP_-_Get_Alert_IDs*: method=`GET`, uri=`[concat('https://', parameters('CrowdstrikeDomain') ,'/alerts/queries/alerts/v2?filter=created_timestamp:>=''@{addMinutes(variables(''Local Timestamp''), -10)}''&created_timestamp:<=''@{variables(''Local Timestamp'')}''&sort=created_timestamp.desc')]`
- *HTTP_-_Get_Token*: method=`POST`, uri=`[concat('https://', parameters('CrowdstrikeDomain') ,'/oauth2/token')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

