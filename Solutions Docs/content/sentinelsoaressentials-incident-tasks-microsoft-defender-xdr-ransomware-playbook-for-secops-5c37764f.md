# Incident tasks - Microsoft Defender XDR Ransomware Playbook for SecOps

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook add Incident Tasks based on Microsoft Defender XDR Ransomware Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a ransomware incident: containment, investigation, eradication and recovery, and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) | Managed | 0 | 27 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_task_to_incident_-_Containment_-_Step_1 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Containment_-_Step_2 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Containment_-_Step_3.1 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Containment_-_Step_3.2 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S1_-_Verify_your_backups | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S2_-_Add_indicators | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S3_-_Reset_compromised_users | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S4_-_Isolate_attacker_control | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S5_-_Remove_the_malware | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S6_-_Recover_files_on_a_clean | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S7_-_Recover_files_in_OneDrive | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S8_-_Recover_deleted_email | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Eradication_and_recovery_-_S9_-_Re-enable_Exchange_Act | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_HumOR | post | `/Incidents/CreateTask` | — |
| Mark_a_task_as_completed_-_HumOR | post | `/Incidents/CompleteTask` | — |
| Add_task_to_incident_-_Introduction | post | `/Incidents/CreateTask` | — |
| Mark_a_task_as_completed_-_Introduction | post | `/Incidents/CompleteTask` | — |
| Add_task_to_incident_-_Investigate_-_Identify_the_line_of_business_(LOB)_apps | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Assess_the_current_situation | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Identify_the_ransomware_process | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Investigation_-_Look_for_exposed_credentials_ | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Device_protection_-_Part_1 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Device_protection_-_Part_2 | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Email_management | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Identity_protection | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Information_protection | post | `/Incidents/CreateTask` | — |
| Add_task_to_incident_-_Prevention_-_Vulnerability_management | post | `/Incidents/CreateTask` | — |

</details>

## Additional Documentation

> 📄 *Source: [Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/readme.md)*

# Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks
author: Benji Kovacevic

This playbook add Incident Tasks based on Microsoft Defender XDR Ransomware Playbook for SecOps. This playbook will walk the analyst through four stages of responding to a ransomware incident: containment, investigation, eradication and recovery, and prevention. The step-by-step instructions will help you take the required remedial action to protect information and minimize further risks.

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FDefender_XDR_Ransomware_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FDefender_XDR_Ransomware_Playbook_for_SecOps-Tasks%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Assign Microsoft Sentinel Responder role to the managed identity. To do so, choose Identity blade under Settings of the Logic App.
2. Assign playbook to the automation rule. - https://learn.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook?tabs=LAC<br>
Conditions<br>
    Incident provider > Equals > Microsoft Defender XDR<br>
    ![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/images/automationRuleDark.jpg)<br><br>
    
## Playbook will run if the alert has any of these keywords:<br>
    1. Ransomware
    2. ransomware

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/images/playbookDark.jpg)<br>

**Microsoft Sentinel Incident Tasks**<br>
![SentinelIncident](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Defender_XDR_Ransomware_Playbook_for_SecOps-Tasks/images/tasksDark.jpg)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

