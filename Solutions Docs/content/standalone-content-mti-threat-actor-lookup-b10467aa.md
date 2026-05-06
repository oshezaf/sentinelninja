# MTI Threat Actor Lookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

To be deployed with the bundled function app to automate infrastructure chaining with the MTI API

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/MDTI-Actor-Lookup/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 2 | 12 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`securitycopilot`](../logic-apps/managed-securitycopilot.md) | Managed | 1 | 4 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Update_incident_2 | put | `/Incidents` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Add_comment_to_incident_(V3)_1 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_4 | post | `/Incidents/Comment` | — |
| Update_incident_1 | put | `/Incidents` | — |
| Add_comment_to_incident_(V3)_5 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_6 | post | `/Incidents/Comment` | — |
| Update_incident_3 | put | `/Incidents` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `/secrets/@{encodeURIComponent('MechanicsDemo-AzureFunction')}/value` | — |

#### [`securitycopilot`](../logic-apps/managed-securitycopilot.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Submit_a_Copilot_for_Security_prompt_2 | post | `/process-prompt` | — |
| Submit_a_Copilot_for_Security_prompt_1 | post | `/process-prompt` | — |
| Submit_a_Copilot_for_Security_prompt | post | `/process-prompt` | — |
| Submit_a_Copilot_for_Security_prompt_4 | post | `/process-prompt` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| MDTI_API_Hosts | GET | `https://graph.microsoft.com/beta/security/threatIntelligence/hosts/@{items('For_each')?['HostName']}.@{items('For_each')?['DnsDomain']}/reputation` | — |
| MDTI_API_IPs | GET | `https://graph.microsoft.com/beta/security/threatIntelligence/hosts/@{items('For_each_2')?['Address']}/reputation` | — |
| Function_App_call | POST | `@{parameters('Function App URL')}item=@{items('For_each_3')?['Address']}&code=@{body('Get_secret')?['value']}` | — |
| Function_App_call_1 | POST | `@{parameters('Function App URL')}item=@{item()?['HostName']}.@{item()?['DnsDomain']}&code=@{body('Get_secret')?['value']}` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| MDTI-Base | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/MDTI-Base')]`<br>triggerName=`manual` |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

