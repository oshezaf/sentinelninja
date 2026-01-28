# Team Cymru Scout Live Investigation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will fetch and ingest IP or Domain Indicator data based on input parameters given in the live investigation dashboard.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Team Cymru Scout](../solutions/team-cymru-scout.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Team%20Cymru%20Scout/Playbooks/TeamCymruScoutLiveInvestigation/azuredeploy.json) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Team Cymru Scout](../solutions/team-cymru-scout.md)

