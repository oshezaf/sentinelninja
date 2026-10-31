# Team Cymru Scout Enrich Incident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will fetch and ingest IP or Domain Indicator data based on Entity mapped in Microsoft Sentinel Incident and notify to pre-defined or user customizable email id.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutEnrichIncident/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 6 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`outlook`](../logic-apps/managed-outlook.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 8 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_Query_and_List_Results_for_Top_PDNS | post | `/queryData` | — |
| Run_Query_and_List_Results_for_Top_Open_Ports | post | `/queryData` | — |
| Run_Query_and_List_Results_for_Top_Fingerprints | post | `/queryData` | — |
| Run_Query_and_List_Results_for_Whois | post | `/queryData` | — |
| Run_Query_And_List_Insights_Data_And_Country_Code_For_Indicator | post | `/queryData` | — |
| Run_Query_And_Check_Whether_This_is_First_Execution_Or_Not | post | `/queryData` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_IP_Data_Into_Incident_Comment | post | `/Incidents/Comment` | — |
| Add_Comment_Limit_Has_Been_Exceeded_To_100_For_Incident_ | post | `/Incidents/Comment` | — |
| Add_Domain_Data_Into_Incident_Comment | post | `/Incidents/Comment` | — |
| Add_Comment_Limit_Has_Been_Exceeded_For_Incident | post | `/Incidents/Comment` | — |

#### [`outlook`](../logic-apps/managed-outlook.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_An_Email_For_IP | post | `/v2/Mail` | — |
| Send_An_Email_For_Domain | post | `/v2/Mail` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Request_To_Fetch_Details_Of_IP_Indicator | GET | `@{variables('base_url')}/api/scout/ip/@{items('For_Each_IP_Address')}/details` | — |
| Send_Top_Fingerprints_Data_To_Log_Analytics_Table | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('fingerprints_table_name'), '_CL?api-version=2023-01-01')}` | — |
| Send_Open_Ports_Section_Data_To_Log_Analytics_Table | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('open_ports_table_name'), '_CL?api-version=2023-01-01')}` | — |
| Send_Top_Pdns_Data_To_Log_Analytics_Table | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('pdns_table_name'), '_CL?api-version=2023-01-01')}` | — |
| Send_Whois_Data_To_Log_Analytics_Workspace | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('whois_table_name'), '_CL?api-version=2023-01-01')}` | — |
| Send_Insights_Data_To_Log_Analytics_Table | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('insights_table_name'), '_CL?api-version=2023-01-01')}` | — |
| Send_IP_Indicator_To_Live_Investigation_Indicators_Table | POST | `@{concat(parameters('dataCollectionEndpoint'), '/dataCollectionRules/', parameters('dcrImmutableId'), '/streams/Custom-', variables('indicators_table_name'), '_CL?api-version=2023-01-01')}` | — |
| HTTP_Request_To_Fetch_Details_Of_Domain_Indicator | GET | `@{variables('base_url')}/api/scout/search` | — |

</details>

## Additional Documentation

> 📄 *Source: [TeamCymruScoutEnrichIncident/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutEnrichIncident/readme.md)*

## Summary

This playbook will fetch and ingest IP or Domain Indicator data based on Entity mapped in Microsoft Sentinel Incident and notify to pre-defined or user customizable email id.
### Prerequisites

1. User should have an outlook mail account in order to use this playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
  * PlaybookName: Enter the playbook name here.
  * UserName: Enter username of your Team Cymru Scout account.
  * Password: Enter password of your Team Cymru Scout account.
  * BaseURL: Enter Base URL of your Team Cymru Scout account.
  * EmailId: Enter valid comma separated email ID(s) of receiver without space. (e.g. person1@gmail.com,person2@gmail.com)
  * WorkspaceName: Enter the log analytics workspace name in which data will be stored for incident enrichment.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutEnrichIncident%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutEnrichIncident%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Log ingestion

This playbook writes to Log Analytics through the [Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) using its own system-assigned managed identity. The data collection endpoint, the data collection rule, the destination tables and the **Monitoring Metrics Publisher** role assignment are all created by the deployment template, so ingestion needs no manual authorization.

**Existing workspaces only.** If you deployed an earlier version of this playbook, its tables were created by the retired HTTP Data Collector API and are *classic* tables. Convert them once per workspace before the first run of the migrated playbook, otherwise ingestion fails:

```bash
resourceGroup="<resource-group>"
workspace="<workspace-name>"

# List the classic tables still present in the workspace
az monitor log-analytics workspace table list \
  --resource-group "$resourceGroup" --workspace-name "$workspace" \
  --query "[?schema.tableSubType=='Classic'].{Name:name}" -o table

# Convert each one, using the table name exactly as returned by the list
# command above (it already includes the _CL suffix, e.g. Communication_Data_CL —
# do not append _CL again)
az monitor log-analytics workspace table migrate \
  --resource-group "$resourceGroup" --workspace-name "$workspace" \
  --table-name "<TableName>"
```

> **The conversion cannot be undone.** It is a one-way operation per table.

This playbook writes the following tables:

- `Insights_Data_Incident_Based_CL`
- `Investigated_IPs_Incident_Based_CL`
- `Summary_Details_Top_Fingerprints_Data_Incident_Based_CL`
- `Summary_Details_Top_Open_Ports_Data_Incident_Based_CL`
- `Summary_Details_Top_Pdns_Data_Incident_Based_CL`
- `Whois_Data_Incident_Based_CL`

Column names and types are unchanged, so existing parsers, workbooks and saved queries keep working.

#### b. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select a connection resource
2. Go to General → Edit API connection.
3. Click Authorize
4. Sign in.
5. Click Save.
6. Repeat steps for other connections.

#### c. Assign Role to add a comment in the incident

After authorizing each connection, assign a role to this playbook.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add
2. Add role assignment
3. Assignment type: Job function roles
4. Role: Microsoft Sentinel Contributor
5. Members: select managed identity for "assigned access to" and add your logic app as a member.
6. Click on review+assign

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Team Cymru Scout](../solutions/team-cymru-scout.md)

