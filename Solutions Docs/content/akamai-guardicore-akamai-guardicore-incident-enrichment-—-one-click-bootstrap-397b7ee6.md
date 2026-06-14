# Akamai Guardicore Incident-Enrichment — one-click bootstrap

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Deploys the entire Akamai Guardicore incident-enrichment stack in one shot: Storage Account + GuardicoreConnectionSlots Azure Table, Data Collection Endpoint (or reuses an existing one), Data Collection Rule, two custom log tables, two Logic Apps (trigger playbook + recurrence runner), and the role assignments the Logic Apps' managed identities need to write to the DCR and the storage account. After deployment, the only manual step is wiring the trigger playbook to a Microsoft Sentinel automatio

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Akamai Guardicore](../solutions/akamai-guardicore.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Guardicore/Playbooks/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`azuretables`](../logic-apps/managed-azuretables.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuretables`](../logic-apps/managed-azuretables.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Try_insert_slot | post | `/Tables/@{encodeURIComponent('GuardicoreConnectionSlots')}/entities` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_manifest | POST | `@{concat(parameters('DataCollectionEndpoint'), '/dataCollectionRules/', parameters('DataCollectionRuleImmutableId'), '/streams/Custom-GuardicoreProcessedIncidents_CL?api-version=2023-01-01')}` | — |
| Authenticate_to_Guardicore | POST | `@{concat(parameters('GuardicoreUrl'), '/api/v3.0/authenticate')}` | — |
| Claim_pending_slot | GET | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots()')}` | — |
| Atomic_claim | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Fetch_page | GET | `@{concat(parameters('GuardicoreUrl'), '/api/v3.0/connections')}` | — |
| Post_chunk | POST | `@{concat(parameters('DataCollectionEndpoint'), '/dataCollectionRules/', parameters('DataCollectionRuleImmutableId'), '/streams/Custom-GuardicoreEnrichingConnections_CL?api-version=2023-01-01')}` | — |
| Mark_completed | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Mark_failed_or_retry_on_pagination_error | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |
| Mark_failed_or_retry_on_post_error | PUT | `@{concat(parameters('TablesEndpoint'), '/GuardicoreConnectionSlots(PartitionKey=''', outputs('Capture_claimed_row')['PartitionKey'], ''',RowKey=''', outputs('Capture_claimed_row')['RowKey'], ''')')}` | — |

</details>

## Additional Documentation

> 📄 *Source: [readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Guardicore/Playbooks/readme.md)*

# Guardicore Incident Enrichment

Author: Akamai Guardicore

This solution ships two Logic Apps that enrich Microsoft Sentinel incidents
with Guardicore connection data. When an incident is created, the trigger
playbook extracts IP entities, computes three 5-minute time slots around the
incident time, and writes slot manifest rows to Microsoft Sentinel. A companion
recurrence-triggered runner Logic App polls a small Azure Storage Table for
due slots, fetches Guardicore `/api/v3.0/connections` for each slot's window
+ IP filter, and ingests the results to a second Microsoft Sentinel custom log table.

There is **no Azure Function App** - both Logic Apps run natively. Ingestion
goes through a Data Collection Rule using the Logic Apps' system-assigned
managed identity; no workspace shared key is required.

## Quick deploy (recommended)

The single template `azuredeploy.json` at this folder bootstraps everything:
the Storage Account + work queue table, a Data Collection Endpoint (or
reuses an existing one), the Data Collection Rule, the two custom log
tables, both Logic Apps, and the role assignments. Click below, fill in the
form (workspace name + Guardicore credentials), and click **Create**.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAkamai%2520Guardicore%2FPlaybooks%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAkamai%2520Guardicore%2FPlaybooks%2FcreateUiDefinition.json)

[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAkamai%2520Guardicore%2FPlaybooks%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAkamai%2520Guardicore%2FPlaybooks%2FcreateUiDefinition.json)

The Deploy form has three steps:

1. **Microsoft Sentinel workspace** - pick the workspace name (and its resource group
   if it's not the same as the deployment RG); optionally paste a resource
   ID for an existing Data Collection Endpoint to reuse.
2. **Guardicore credentials** - management URL (https only, regex-checked),
   service-account username, password (`securestring`).
3. **Advanced (optional)** - override default playbook / runner / storage
   account names. Leave blank for sensible defaults.

## Two manual steps after deploy

The portal can't fully automate two final touches. Both take ~30 seconds.

### 1. Authorize the Microsoft Sentinel managed-API connection

The trigger playbook deploys a `Microsoft.Web/connections` resource for
`azuresentinel`, configured to authenticate as the playbook's
system-assigned managed identity. Azure requires a one-time interactive
"Authorize" click before the connection is usable.

1. Resource group -> find connection `azuresentinel-Guardicore-ProcessIncidentEnrichment`.
2. Edit API connection -> confirm **Authentication Type** is **Managed
   Identity** -> click **Authorize** -> **Save**.

If you skip this, every trigger run fails at the Microsoft Sentinel webhook step
with `Unauthorized`.

### 2. Wire the playbook to a Microsoft Sentinel automation rule

The trigger playbook only fires when a Microsoft Sentinel automation rule routes an
incident to it.

1. Microsoft Sentinel -> workspace -> Configuration -> Automation.
2. **Create** -> **Automation rule**.
3. Name: `Guardicore: enrich on incident creation`. Trigger: **When
   incident is created**. Conditions: leave blank for "all incidents" or
   scope to severity / analytic rule.
4. Actions: **Run playbook** -> select `Guardicore-ProcessIncidentEnrichment`
   -> grant permissions when prompted.
5. Save.

If your Microsoft Sentinel workspace lives in a different resource group than the
deployment, you may also need to grant the trigger playbook's managed
identity the **Microsoft Sentinel Responder** role on the workspace
(the consolidated template grants `Monitoring Metrics Publisher` on the
DCR and `Storage Account Contributor` on the storage account
automatically; the Microsoft Sentinel role is workspace-scoped and the consolidated
template can't grant it cross-RG safely).

## Verify

Trigger a test incident with at least one IP entity and wait ~7 minutes
(5-minute slot wait + up to one 2-minute runner tick):

```kql
GuardicoreProcessedIncidents_CL
| where TimeGenerated > ago(15m)
| take 10
```

```kql
GuardicoreEnrichingConnections_CL
| where TimeGenerated > ago(15m)
| take 10
```

If either is empty after 15 minutes:
- Check Logic App run history for `Guardicore-ProcessIncidentEnrichment`
  and `Guardicore-EnrichmentRunner` for failed actions.
- Confirm the `Monitoring Metrics Publisher` role assignment is in place

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Akamai Guardicore](../solutions/akamai-guardicore.md)

