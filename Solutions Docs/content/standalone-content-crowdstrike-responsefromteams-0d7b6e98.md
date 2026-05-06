# Crowdstrike-ResponsefromTeams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a new Azure Sentinel incident is created, this playbook gets triggered and performs below actions: 1. Fetches the device information from Crowdstrike 1. Contain the device or run a script based on SOC action 1. Add a comment to the incident with the information collected from the Crowdstrike, summary of the actions taken and close the incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/CrowdStrike/Playbooks/CrowdStrike_ResponsefromTeams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Entities_-_Get_Hosts | post | `/entities/host` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_your_own_adaptive_card_as_the_Flow_bot_to_a_channel | post | `/flowbot/actions/adaptivecard/recipienttypes/channel` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Get_device_information | GET | `@{body('CrowdStrike_Base')?['FalconHost']}/devices/entities/devices/v1?ids=@{body('Parse_JSON_Get_device_id_response')?['resources']?[0]}` | — |
| HTTP_-_Get_Scripts | GET | `@{body('CrowdStrike_Base')?['FalconHost']}/real-time-response/entities/scripts/v1` | — |
| HTTP_-_Get_device_id | GET | `@{body('CrowdStrike_Base')?['FalconHost']}/devices/queries/devices/v1?filter=hostname:'@{body('Entities_-_Get_Hosts')?['Hosts']?[0]?['HostName']}'` | — |
| HTTP_Contain_a_device | POST | `@{body('CrowdStrike_Base_call_after_SOC_responds')?['FalconHost']}/devices/entities/devices-actions/v2?action_name=contain` | — |
| HTTP_Lift_containment_on_device | POST | `@{body('CrowdStrike_Base_call_after_SOC_responds')?['FalconHost']}/devices/entities/devices-actions/v2?action_name=lift_containment` | — |
| HTTP_run_a_script | POST | `@{body('CrowdStrike_Base_call_after_SOC_responds')?['FalconHost']}/real-time-response/entities/admin-command/v1` | — |
| HTTP_create_a_session_to_host_to_run_a_script | POST | `@{body('CrowdStrike_Base_call_after_SOC_responds')?['FalconHost']}/real-time-response/entities/sessions/v1` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| CrowdStrike_Base | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name ,'/providers/Microsoft.Logic/workflows/', parameters('CrowdStrike_Base_Playbook_Name'))]`<br>triggerName=`manual` |
| CrowdStrike_Base_call_after_SOC_responds | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name ,'/providers/Microsoft.Logic/workflows/', parameters('CrowdStrike_Base_Playbook_Name'))]`<br>triggerName=`manual` |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

