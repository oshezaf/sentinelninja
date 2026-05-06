# Notify When Incident Is Reopened

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when incident is reopened.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_adaptive_card_in_a_chat_or_channel | post | `/v1.0/teams/conversation/adaptivecard/poster/Flow bot/location/@{encodeURIComponent('Channel')}` | — |

</details>

## Additional Documentation

> 📄 *Source: [Notify-IncidentReopened/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/readme.md)*

# Notify-IncidentReopened
author: Benjamin Kovacevic

This playbook is utilizing new update trigger to notify person/group on Microsoft Teams/Outlook when incident is reopened.

# Prerequisites

1. Email address to where notification will be sent to.
2. Microsoft Teams Team ID and Channel ID (Instructions to get IDs - https://www.linkedin.com/pulse/3-ways-locate-microsoft-team-id-christopher-barber-/) or choose Team and Channel after the deployment

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FNotify-IncidentReopened%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FNotify-IncidentReopened%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Authorize Microsoft Teams and Microsoft Office 365 Outlook connectors
2. Choose Microsoft Teams Team and Channel where to send the adaptive card (only if Team ID and Channel ID were not added during the deployment)
3. Add playbook as an action to the automation rule 
- Trigger = When incident is updated;  
- Condition = Staus > Changed From > Closed;.<br>
**Automation rule example**<br>
![Automation Rule Example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/AutomationRuleExample.jpg)
4. If you want to receive notifications only on Microsoft Teams or only on Microsoft Office 365 Outlook, please remove unneeded connection. To remove, click on 3 dots on top right side of connector, and choose "Delete".<br><br>
**Delete connection example**<br>
![Delete Connection Example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/DeleteConnectionExample.jpg)

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/playbookDark.png)<br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/playbookLight.png)<br><br>

**Teams** <br>
![teams notification](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/TeamsNotification.jpg)<br><br>

**Outlook** <br>
![outlook notification](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-IncidentReopened/images/OutlookNotification.jpg)<br><br>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

