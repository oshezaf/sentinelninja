# Check Point EM - Importer (Alerts → SecurityAlert → Microsoft Sentinel Incidents)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Queries the argsentdc_CL custom table (populated by the CCP data connector) for recent alerts and writes each one to the built-in SecurityAlert table via the Log Ingestion API. A bundled scheduled analytic rule then promotes those SecurityAlert rows into Microsoft Sentinel incidents with ref_id surfaced as a Custom Detail so the CPEM Exporter playbook can read it.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_InboundSync/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`argsentdc_CL`](../tables/argsentdc-cl.md) |  | ✓ | ✓ | ✓ |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_KQL_Query | post | `/queryData` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Ingest_security_alert | POST | `@{concat(parameters('DCE_Endpoint'), '/dataCollectionRules/', parameters('DCR_Immutable_Id'), '/streams/', parameters('Stream_Name'), '?api-version=2023-01-01')}` | — |

</details>

## Additional Documentation

> 📄 *Source: [Sync/CPEM_InboundSync/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Playbooks/Sync/CPEM_InboundSync/readme.md)*

# Check Point Exposure Management - Importer (Argos Alerts → Sentinel Incidents)

## Summary

This playbook polls the `argsentdc_CL` custom table (populated by the CCP data connector) for recent open alerts and writes each one to Microsoft Sentinel's built-in `SecurityAlert` table via the Log Ingestion API. A bundled scheduled analytic rule then promotes those SecurityAlert rows into Sentinel incidents.

Why the SecurityAlert detour instead of creating incidents directly: the CPEM Exporter playbook reads `triggerBody().object.properties.alerts[*].properties.additionalData['Custom Details'].ref_id` from the incident webhook. That field is only populated when the incident has alerts attached, and Sentinel only attaches alerts to incidents produced through the analytic-rule pipeline. Writing through SecurityAlert + a bridge rule restores the alert object the Exporter depends on.

**Flow:**
1. Runs on a configurable recurrence interval (default: 10 minutes).
2. Runs a KQL query against `argsentdc_CL` for alerts with `status == "open"` in the last interval, deduplicated by `ref_id`.
3. For each alert, POSTs a SecurityAlert-shaped JSON document to the Log Ingestion API (DCE → DCR → `Microsoft-SecurityAlert` stream). `ref_id`, `event_type`, `category`, `severity`, `confidence`, and `recommendation` go into `ExtendedProperties`.
4. The bundled `<PlaybookName> - Promote CPEM SecurityAlerts to incidents` scheduled analytic rule runs every 5 minutes, parses `ExtendedProperties`, projects each field as a Custom Detail, and creates an incident per alert grouped by `ref_id`.

## Resources Deployed by This Template

| Resource | Purpose |
|---|---|
| `Microsoft.Logic/workflows` (the Logic App) | The importer itself — polls and ingests |
| `Microsoft.Web/connections` (Azure Monitor Logs + Azure Sentinel) | API connections used by the Logic App |
| `Microsoft.Insights/dataCollectionEndpoints` | DCE the Logic App POSTs to |
| `Microsoft.Insights/dataCollectionRules` | DCR with stream `Custom-CPEMSecurityAlert` → `Microsoft-SecurityAlert` |
| `Microsoft.Insights/dataCollectionRules/providers/roleAssignments` | Grants Monitoring Metrics Publisher to the Logic App MI on the DCR |
| `Microsoft.OperationalInsights/workspaces/providers/alertRules` (Scheduled) | Bridge rule: `SecurityAlert | where ProviderName == 'Check Point Exposure Management'` → incident with Custom Details |

## Prerequisites

1. The CCP data connector (Cyberint Argos Alerts) must be deployed and ingesting alerts into `argsentdc_CL`.
2. A Microsoft Sentinel-enabled workspace in the same resource group as the playbook.

## Parameters

| Parameter | Required | Description |
|---|---|---|
| **PlaybookName** | No | Name of the Logic App (default: `Check_Point_EM_Importer`) |
| **Workspace_Name** | Yes | Microsoft Sentinel workspace name |
| **Polling_Interval_Minutes** | No | How often to query for new alerts (default: `10`) |
| **Create_Incident** | No | `true`/`false` — gate the ingestion step (default: `true`). Set to `false` for dry-run / monitoring-only mode. |

## Post-Deployment

1. Open the playbook in the Logic App designer, authorize both API connections (Azure Monitor Logs and Microsoft Sentinel), and press Save.
2. The Monitoring Metrics Publisher role assignment on the DCR is created automatically — no manual role grant needed.
3. The bridge analytic rule is enabled on deployment. Verify it appears in **Microsoft Sentinel → Analytics** under the name `<PlaybookName> - Promote CPEM SecurityAlerts to incidents`.

## End-to-end Validation

After the first scheduled run:
- `SecurityAlert | where ProviderName == "Check Point Exposure Management"` should return rows with `ExtendedProperties` containing `ref_id`.
- Within 5–10 minutes, incidents created by the bridge rule should appear in **Incidents**.
- Open an incident → the **Alerts** tab should list the bridged alert → its details should show `ref_id` under Custom Details.
- The CPEM Exporter playbook (triggered on incident status change) should now find `properties.alerts[0].properties.additionalData['Custom Details'].ref_id` and successfully PUT the status back to Argos.

## Error Handling

- The ingestion HTTP call uses exponential backoff retry (3 retries, 10s → 1m).
- If `Workspace_Name` doesn't match the DCR's destination workspace at deploy time, the ARM deployment will fail validation.
- If the bridge rule's KQL query finds zero matches in a given run, no incidents are created — this is the expected behavior when no new CPEM alerts arrive.

## Versioning

| Template Version | Notes |
|---|---|
| 1.0 | Initial — direct API polling with DCR write to `argsentdc_CL` |
| 2.0 | Rewritten to query `argsentdc_CL` and create incidents directly via the Sentinel connector |
| 3.0 | Replaced direct incident creation with Log Ingestion API → `SecurityAlert` + bridge analytic rule. Restores the alert object the CPEM Exporter expects. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md)

