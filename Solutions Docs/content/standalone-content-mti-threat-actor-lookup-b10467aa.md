# MTI Threat Actor Lookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| `azuresentinel` | Managed | 2 | 12 |
| `keyvault` | Managed | 1 | 1 |
| `securitycopilot` | Managed | 1 | 4 |
| `http` | Built-in | 0 | 4 |
| `workflow` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_1*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_4*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_1*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_5*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_6*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_3*: method=`put`, path=`/Incidents`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent('MechanicsDemo-AzureFunction')}/value`

**`securitycopilot`** (managedApi):
- *Submit_a_Copilot_for_Security_prompt_2*: method=`post`, path=`/process-prompt`
- *Submit_a_Copilot_for_Security_prompt_1*: method=`post`, path=`/process-prompt`
- *Submit_a_Copilot_for_Security_prompt*: method=`post`, path=`/process-prompt`
- *Submit_a_Copilot_for_Security_prompt_4*: method=`post`, path=`/process-prompt`

**`http`** (builtin):
- *MDTI_API_Hosts*: method=`GET`, uri=`https://graph.microsoft.com/beta/security/threatIntelligence/hosts/@{items('For_each')?['HostName']}.@{items('For_each')?['DnsDomain']}/reputation`
- *MDTI_API_IPs*: method=`GET`, uri=`https://graph.microsoft.com/beta/security/threatIntelligence/hosts/@{items('For_each_2')?['Address']}/reputation`
- *Function_App_call*: method=`POST`, uri=`@{parameters('Function App URL')}item=@{items('For_each_3')?['Address']}&code=@{body('Get_secret')?['value']}`
- *Function_App_call_1*: method=`POST`, uri=`@{parameters('Function App URL')}item=@{item()?['HostName']}.@{item()?['DnsDomain']}&code=@{body('Get_secret')?['value']}`

**`workflow`** (builtin):
- *MDTI-Base*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Logic/workflows/MDTI-Base')]`, triggerName=`manual`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

