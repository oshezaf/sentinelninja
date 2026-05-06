# Watchlists - Inform Subscription Owner

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages Microsoft Sentinel Watchlists in order to get the relevant subscription owner contact details, and inform about an ASC alert that occured in that subscription. It uses Microsoft Teams and Office 365 Outlook as ways to inform the sub owner.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Watchlists Utilities](../solutions/watchlists-utilities.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchlists%20Utilities/Playbooks/Watchlist-InformSubowner-IncidentTrigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_-_Get_Watchlist | post | `/queryData` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_a_message_as_the_Flow_bot_to_a_user | post | `/flowbot/actions/notification/recipienttypes/user` | — |

</details>

## Additional Documentation

> 📄 *Source: [Watchlist-InformSubowner-IncidentTrigger/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchlists%20Utilities/Playbooks/Watchlist-InformSubowner-IncidentTrigger/readme.md)*

# Watchlists-InformSubowner-IncidentTrigger
author: Lior Tamir

This playbook leverages Microsoft Sentinel Watchlists in order to get the relevant subscription owner contact details, and inform about an ASC alert that occured in that subscription.
It uses Microsoft Teams and Office 365 Outlook as ways to inform the sub owner.

## Prerequisites
Create a Watchlist that this playbook will query:
1.Create an input comma-separated value (CSV) file with the following columns: SubscriptionId, SubscriptionName, OwnerName, OwnerEmail, where each row represents a subscription in an Azure tenant.
2. Upload the table to the Microsoft Sentinel Watchlist area. Make a note of the value you use as the Watchlist Alias, as you'll use it to query this watchlist from the playbook.

Note: This playbook utilizes two features currently in Preview.
* Microsoft Sentinel Watchlists
* Microsoft Sentinel Incident Trigger

![](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Watchlists%20Utilities/Playbooks/Watchlist-InformSubowner-IncidentTrigger/images/designerView.png)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FWatchlists%20Utilities%2FPlaybooks%2FWatchlist-InformSubowner-IncidentTrigger%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FWatchlists%20Utilities%2FPlaybooks%2FWatchlist-InformSubowner-IncidentTrigger%2Fazuredeploy.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Watchlists Utilities](../solutions/watchlists-utilities.md)

