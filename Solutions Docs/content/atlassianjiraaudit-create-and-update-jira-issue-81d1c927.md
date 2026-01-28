# Create And Update Jira Issue

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create or update incident in Jira. When incident is created, playbook will run and create issue in Jira. When incident is updated, playbook will run and add update to comment section.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AtlassianJiraAudit](../solutions/atlassianjiraaudit.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Jira-CreateAndUpdateIssue/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/readme.md)*

# Jira-CreateAndUpdateIssue
author: Benjamin Kovacevic

This playbook will create or update incident in Jira. When incident is created, playbook will run and create issue in Jira. When incident is updated, playbook will run and add update to comment section.

# Prerequisites

We will need following data to make Jira connector:<br>
1. Jira instance (ex. xyz.atlassian.net)<br>
2. Jira API (create API token on https://id.atlassian.com/manage-profile/security/api-tokens)<br>
3. User email<br>
![Jira connector requirements](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/jira-connector-requirementsDark.png)<br>

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAtlassianJiraAudit%2FPlaybooks%2FJira-CreateAndUpdateIssue%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAtlassianJiraAudit%2FPlaybooks%2FJira-CreateAndUpdateIssue%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Authorize Jira connector and choose:
- Jira Project (where you want to sync Microsoft Sentinel incidents to) and
- Issue Type Id (Microsoft Sentinel incident issue type in Jira - Task, Story, Bug,...).<br>
2. Assign Microsoft Sentinel Responder role to playbook's managed identity. To do so, choose Identity blade under Settings of the Logic App.
3. Add playbook as an action to the automation rule, ex.:
- Trigger = When incident is updated;  
- Condition = Staus > Changed To > Closed;.<br>
**Automation rule example**<br>
![Automation Rule Example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/AutomationRuleExampleDark.jpg)

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/JiraPlaybookDark.jpg)<br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/JiraPlaybookLight.jpg)<br><br>

**Jira New Issue** <br>
![jira screenshot new](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/JiraNewIssue.jpg)<br><br>

**Jira Update Issue** <br>
![jira screenshot update](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianJiraAudit/Playbooks/Jira-CreateAndUpdateIssue/images/JiraUpdateIssue.jpg)<br>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to AtlassianJiraAudit](../solutions/atlassianjiraaudit.md)

