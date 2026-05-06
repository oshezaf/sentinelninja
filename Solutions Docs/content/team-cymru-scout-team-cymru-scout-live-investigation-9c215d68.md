# Team Cymru Scout Live Investigation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in the live investigation dashboard.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutLiveInvestigation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 21 |
| `azuremonitorlogs` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 7 |
| `workflow` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Proto_By_IP_Sections_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Asns_By_IP_Sections_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Certs_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Country_Codes_Sections_Data_To_Log_Analytics_Table_Name*: method=`post`, path=`/api/logs`
- *Send_Top_Fingerprints_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Open_Ports_Section_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Pdns_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Services_By_IP_Sections_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Top_Tags_By_IP_Sections_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_IP_Indicator_Data_To_IP_Details_Table*: method=`post`, path=`/api/logs`
- *Send_Identity_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Whois_Data_To_Log_Analytics_Workspace*: method=`post`, path=`/api/logs`
- *Send_IP_Indicator_To_Live_Investigation_Indicators_Table*: method=`post`, path=`/api/logs`
- *Send_Insights_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Communication_Peers_Data_To_Log_Analytic_Table*: method=`post`, path=`/api/logs`
- *Send_Main_PDNS_Data_To_Log_Analytic_Table*: method=`post`, path=`/api/logs`
- *Send_Main_Open_Ports_Data_To_Log_Analytic_Table*: method=`post`, path=`/api/logs`
- *Send_Main_Fingerprints_Data_To_Log_Analytic_Table*: method=`post`, path=`/api/logs`
- *Send_Main_X509_Data_To_Log_Analytic_Table*: method=`post`, path=`/api/logs`
- *Send_Domain_Data_To_Log_Analytics_Table*: method=`post`, path=`/api/logs`
- *Send_Domain_Indicator_To_Live_Investigation_Indicators_Table*: method=`post`, path=`/api/logs`

**`azuremonitorlogs`** (managedApi):
- *Run_Query_And_Check_Whether_This_is_First_Execution_Or_Not*: method=`post`, path=`/queryData`

**`http`** (builtin):
- *HTTP_Request_To_Fetch_Proto_By_IP_Sections_Data*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Top_Asns_By_IP_Sections_Data*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Top_Country_Codes_By_IP_Sections_Data*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Top_Services_By_IP_Sections_Data*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Top_Tags_By_IP_Sections_Data*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Details_Of_IP_Indicator*: method=`GET`, uri=`@{variables('base_url')}/api/scout/ip/@{variables('indicator_value')}/details`
- *HTTP_Request_To_Fetch_Details_Of_Domain_Indicator*: method=`GET`, uri=`@{variables('base_url')}/api/scout/search`

**`workflow`** (builtin):
- *TeamCymruScoutCreateIncidentAndNotifyForFirstRun*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('CreateIncidentAndNotifyPlaybookName')))]`, triggerName=`manual`
- *TeamCymruScoutCreateIncidentAndNotify*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('CreateIncidentAndNotifyPlaybookName')))]`, triggerName=`manual`

</details>

## Additional Documentation

> 📄 *Source: [TeamCymruScoutLiveInvestigation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutLiveInvestigation/readme.md)*

## Summary

This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in the live investigation dashboard.

### Prerequisites

1. Make sure that the TeamCymruScoutCreateIncidentAndNotify playbook is deployed before deploying the TeamCymruScoutLiveInvestigation playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
  * PlaybookName: Please do not change the playbook name, else you will not get any data for the live investigation dashboard.
  * UserName: Enter username of your Team Cymru Scout account.
  * Password: Enter password of your Team Cymru Scout account.
  * BaseURL: Enter Base URL of your Team Cymru Scout account.
  * WorkspaceName: Enter workspace name in which you want to fetch or store your data.
  * CreateIncidentAndNotifyPlaybookName: Playbook name which is deployed as part of prerequisites.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutLiveInvestigation%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutLiveInvestigation%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select azureloganalyticsdatacollector connection resource
2. Go to General → Edit API connection.
3. Enter Workspace ID and Workspace Key of your log analytics workspace.
4. Click Authorize
5. Sign in.
6. Click Save.
7. Repeat steps for other connections.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Team Cymru Scout](../solutions/team-cymru-scout.md)

