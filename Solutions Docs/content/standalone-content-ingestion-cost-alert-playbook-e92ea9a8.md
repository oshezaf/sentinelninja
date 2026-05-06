# Ingestion Cost Alert Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook sends you an e-mail or Microsoft Teams message alert if a user-defined budget threshold is exceeded

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Send-IngestionCostAlert/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Usage`](../tables/usage.md) | ? | ✗ | ? |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 0 |
| [`azuremonitorlogs_1`](../logic-apps/managed-azuremonitorlogs-1.md) | Managed | 0 | 1 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 0 |
| [`office365_1`](../logic-apps/managed-office365-1.md) | Managed | 0 | 1 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`teams_1`](../logic-apps/managed-teams-1.md) | Managed | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs_1`](../logic-apps/managed-azuremonitorlogs-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results | post | `/queryData` | — |

#### [`office365_1`](../logic-apps/managed-office365-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_ | post | `/v2/Mail` | — |

#### [`teams_1`](../logic-apps/managed-teams-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_a_message_in_a_Teams_channel | post | `/flowbot/actions/notification/recipienttypes/channel` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

