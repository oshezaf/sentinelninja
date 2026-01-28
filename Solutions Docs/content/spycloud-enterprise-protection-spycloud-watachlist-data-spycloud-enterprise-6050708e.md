# SpyCloud Watachlist data - SpyCloud Enterprise

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook will run daily, gets the watchlist data from SpyCloud API and saved it into the custom logs.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SpyCloud Enterprise Protection](../solutions/spycloud-enterprise-protection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [SpyCloud-Monitor-Watchlist-Data/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/readme.md)*

# SpyCloud Enterprise Monitor Watchlist Data Playbook 

![SpyCloud Enterprise](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/images/logo.png)

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Deployment](#deployment)
4. [Post Deployment Steps](#postdeployment)


<a name="overview">

# Overview
This playbook gets triggered on a daily basis and performs the following actions:

- Gets the new watchlist records from the SpyCloud database and saves them into the custom logs table.
- Gets the modified watchlist records from the SpyCloud database and saves them into the custom logs table.

<a name="prerequisites">

## Prerequisites
- A SpyCloud Enterprise API Key
- SpyCloud Enterprise custom connector needs to be deployed prior to the deployment of this playbook, in the same resource group and region. Relevant instructions can be found on the connector documentation page.

<a name="deployment">

## Deployment Instructions
- Deploy the playbooks by clicking on the "Deploy to Azure" button. This will take you to the Deploy an ARM Template wizard.
- Fill in the required parameters for deploying the playbook.
  ![deployment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/images/deployment.png)
- Click "Review + create". Once the validation is successful, click on "Create".

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSpyCloud%20Enterprise%20Protection%2FPlaybooks%2FSpyCloud-Monitor-Watchlist-Data%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSpyCloud%20Enterprise%20Protection%2FPlaybooks%2FSpyCloud-Monitor-Watchlist-Data%2Fazuredeploy.json)

<a name="postdeployment">

## Post-Deployment Instructions
### Provide Custom Log Table Name
- Open the Logic App in the edit mode, click on "Parameters" and provide the name of the custom log table, for ex:SpycloudWatchlistData and click on close.
  ![parameters](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/images/parameters.png)

### Recurrence Trigger Instructions
- The Logic App will run on an interval set to daily. Please do not change the interval, as it may result in duplication of data.
- If you do not wish to run the playbook immediately, set the start time.
  ![recurrence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection/Playbooks/SpyCloud-Monitor-Watchlist-Data/images/recurrence.png)

### Authorize connections
Once deployment is complete, you will need to authorize each connection:
- Provide connection details for the SpyCloud Enterprise Custom Connector.
- Provide connection details for the Azure Log Analytics Data Collector. You need to provide a "Workspace ID" and "Workspace Key", You can obtain the "Workspace ID" in the overview of your "Log Analytics Workspace" and "Workspace key" from the "Agents> Log Analytics agent instructions" section. You can use either a "Primary key" or a "Secondary key".
- Save the Logic App. If the Logic App prompts for any missing connections, please update the connections similarly.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SpyCloud Enterprise Protection](../solutions/spycloud-enterprise-protection.md)

