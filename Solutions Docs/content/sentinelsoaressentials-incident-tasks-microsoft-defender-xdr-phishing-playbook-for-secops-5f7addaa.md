# Incident tasks - Microsoft Defender XDR Phishing Playbook for SecOps

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook add Incident Tasks based on Microsoft Defender XDR Phishing Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a phishing incident: containment, investigation, remediation and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftsentinel`** (managedApi):
- *Add_task_to_incident_-_Contain*: method=`post`, path=`/Incidents/CreateTask`
- *Add_task_to_incident_-_Introduction*: method=`post`, path=`/Incidents/CreateTask`
- *Mark_a_task_as_completed_-_Introduction*: method=`post`, path=`/Incidents/CompleteTask`
- *Add_task_to_incident_-_Investigate*: method=`post`, path=`/Incidents/CreateTask`
- *Add_task_to_incident_-_Investigate_involved_users*: method=`post`, path=`/Incidents/CreateTask`
- *Add_task_to_incident_-_Prevent*: method=`post`, path=`/Incidents/CreateTask`
- *Add_task_to_incident_-_Remediate*: method=`post`, path=`/Incidents/CreateTask`

</details>

## Additional Documentation

> 📄 *Source: [Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/readme.md)*

# Defender_XDR_Phishing_Playbook_for_SecOps-Tasks
author: Benji Kovacevic

This playbook add Incident Tasks based on Microsoft Defender XDR Phishing Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a phishing incident: containment, investigation, remediation and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FDefender_XDR_Phishing_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FDefender_XDR_Phishing_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Assign Microsoft Sentinel Responder role to the managed identity. To do so, choose Identity blade under Settings of the Logic App.
2. Assign playbook to the automation rule. - https://learn.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook?tabs=LAC<br>
Conditions<br>
    Incident provider > Equals > Microsoft Defender XDR<br>
    ![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/images/automationRuleDark.jpg)<br><br>
    
## Playbook will run if the alert has any of these keywords:<br>
    1. Phish
    2. ZAP
    3. removed after delivery
    4. URL click was detected

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/images/playbookDark.jpg)<br>

**Microsoft Sentinel Incident Tasks**<br>
![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Phishing_Playbook_for_SecOps-Tasks/images/tasksDark.jpg)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

