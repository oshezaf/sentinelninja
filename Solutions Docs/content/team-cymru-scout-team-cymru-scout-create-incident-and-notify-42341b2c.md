# Team Cymru Scout Create Incident And Notify

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create an incident for suspicious or malicious ip and notify to pre-defined or user customizable email id.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutCreateIncidentAndNotify/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 7 |
| `azuresentinel` | Managed | 1 | 8 |
| `outlook` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_Query_And_List_Insights_Data_And_Country_Code_For_Indicator*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Insights*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Top_PDNS*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Top_Certs*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Top_Open_Ports*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Top_Fingerprints*: method=`post`, path=`/queryData`
- *Run_Query_and_List_Results_for_Whois*: method=`post`, path=`/queryData`

**`azuresentinel`** (managedApi):
- *Add_Insights_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_Open_Ports_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_PDNS_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Create_Incident_For_IP*: method=`put`, path=`[concat('/Incidents/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/workspaces/', trim(parameters('WorkspaceName')))]`
- *Add_Certs_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_Fingerprints_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_Whois_Details_To_Incident_Comment_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_Scout_link_And_General_Information_To_Incident_Comment*: method=`post`, path=`/Incidents/Comment`

**`outlook`** (managedApi):
- *Send_An_Email_(V2)*: method=`post`, path=`/v2/Mail`

</details>

## Additional Documentation

> 📄 *Source: [TeamCymruScoutCreateIncidentAndNotify/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutCreateIncidentAndNotify/readme.md)*

## Summary

This playbook will create an incident for suspicious or malicious ip and notify to pre-defined or user customizable email id.

### Prerequisites

1. User should have an outlook mail account in order to use this playbook.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
  * PlaybookName: Please do not change the playbook name, else you will not be able to run playbook from workbook.
  * EmailId: Enter valid comma separated email ID(s) of receiver without space. (e.g. person1@gmail.com,person2@gmail.com)
  * WorkspaceName: Enter workspace name in which you want to create an incidents.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutCreateIncidentAndNotify%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTeam%20Cymru%20Scout%2FPlaybooks%2FTeamCymruScoutCreateIncidentAndNotify%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select outlook connection resource
2. Go to General → Edit API connection.
3. Click Authorize
5. Sign in.
6. Click Save.
7. Repeat steps for other connections.

#### b. Assign Role to add a comment in the incident

After authorizing each connection, assign a role to this playbook.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add
2. Add role assignment
3. Assignment type: Job function roles
4. Role: Microsoft Sentinel Contributor
5. Members: select managed identity for "assigned access to" and add your logic app as a member.
6. Click on review+assign

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Team Cymru Scout](../solutions/team-cymru-scout.md)

