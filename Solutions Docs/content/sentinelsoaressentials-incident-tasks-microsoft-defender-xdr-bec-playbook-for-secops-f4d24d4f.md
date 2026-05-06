# Incident tasks - Microsoft Defender XDR BEC Playbook for SecOps

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook add Incident Tasks based on Microsoft Defender XDR BEC Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a BEC incident: containment, investigation, remediation and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_BEC_Playbook_for_SecOps-Tasks/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) | Managed | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_task_to_incident_-_Contain | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Introduction | post | `/Incidents/CreateTask` | — |
| Mark_a_task_as_completed_-_Introduction | post | `/Incidents/CompleteTask` | — |
| Add_task_to_incident_-_Investigation_-_Step_1 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Step_2 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Step_3 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Step_4 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Remediation | post | `/Incidents/CreateTask` | — |

</details>

## Additional Documentation

> 📄 *Source: [Defender_XDR_BEC_Playbook_for_SecOps-Tasks/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_BEC_Playbook_for_SecOps-Tasks/readme.md)*

# Defender_XDR_BEC_Playbook_for_SecOps-Tasks
author: Benji Kovacevic

This playbook add Incident Tasks based on Microsoft Defender XDR BEC Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a BEC incident: containment, investigation, remediation and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FDefender_XDR_BEC_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FMDefender_XDR_BEC_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Assign Microsoft Sentinel Responder role to the managed identity. To do so, choose Identity blade under Settings of the Logic App.
2. Assign playbook to the automation rule. - https://learn.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook?tabs=LAC<br>
Conditions<br>
    Incident provider > Equals > Microsoft Defender XDR<br>
    ![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_BEC_Playbook_for_SecOps-Tasks/images/automationRuleDark.jpg)<br><br>
    
## Playbook will run if the alert has any of these keywords:<br>
    1. BEC

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_BEC_Playbook_for_SecOps-Tasks/images/playbookDark.jpg)<br>

**Microsoft Sentinel Incident Tasks**<br>
![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_BEC_Playbook_for_SecOps-Tasks/images/tasksDark.jpg)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

