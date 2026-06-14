# Guardicore-ProcessIncidentEnrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook reacts to a Microsoft Sentinel incident, computes the 3-slot fan-out over the incident's IP entities, writes slot-claim rows to the GuardicoreConnectionSlots Azure Table, and posts one slot-manifest record per slot to the GuardicoreProcessedIncidents_CL custom log via the Logs Ingestion API. The actual Guardicore /api/v3.0/connections fetch is performed asynchronously by the companion Guardicore-EnrichmentRunner Logic App. (Function-App-free architecture.)

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Akamai Guardicore](../solutions/akamai-guardicore.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Guardicore/Playbooks/Guardicore-ProcessIncidentEnrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`azuretables`](../logic-apps/managed-azuretables.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuretables`](../logic-apps/managed-azuretables.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Try_insert_slot | post | `/Tables/@{encodeURIComponent('GuardicoreConnectionSlots')}/entities` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_manifest | POST | `@{concat(parameters('DataCollectionEndpoint'), '/dataCollectionRules/', parameters('DataCollectionRuleImmutableId'), '/streams/Custom-GuardicoreProcessedIncidents_CL?api-version=2023-01-01')}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Akamai Guardicore](../solutions/akamai-guardicore.md)

