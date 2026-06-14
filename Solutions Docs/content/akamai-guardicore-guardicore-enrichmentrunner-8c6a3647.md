# Guardicore-EnrichmentRunner

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Recurrence-triggered Logic App that drains the GuardicoreConnectionSlots Azure Table work queue, fetches Guardicore /api/v3.0/connections for each due slot's 5-minute window, and ingests the results into GuardicoreEnrichingConnections_CL via the Logs Ingestion API. Companion to the Guardicore-ProcessIncidentEnrichment playbook. No Azure Function App is deployed.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Akamai Guardicore](../solutions/akamai-guardicore.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Guardicore/Playbooks/Guardicore-EnrichmentRunner/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuretables`](../logic-apps/managed-azuretables.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 8 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Authenticate_to_Guardicore | POST | `@{concat(parameters('GuardicoreUrl'), '/api/v3.0/authenticate')}` | — |
| Claim_pending_slot | GET | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots()')}` | — |
| Atomic_claim | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Fetch_page | GET | `@{concat(parameters('GuardicoreUrl'), '/api/v3.0/connections')}` | — |
| Post_chunk | POST | `@{concat(parameters('DataCollectionEndpoint'), '/dataCollectionRules/', parameters('DataCollectionRuleImmutableId'), '/streams/Custom-GuardicoreEnrichingConnections_CL?api-version=2023-01-01')}` | — |
| Mark_completed | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Mark_failed_or_retry_on_pagination_error | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Mark_failed_or_retry_on_post_error | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Akamai Guardicore](../solutions/akamai-guardicore.md)

