# PRODAFT USTA - Backfill Phishing Sites

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

On-demand historical backfill for the PRODAFT USTA phishing-site IoC feed. Pages the feed from BackfillDays ago (default 90) up to the present, maps each record to a STIX 2.1 indicator with the same mapping as PRODAFTUstaIoC-ImportPhishingSites, and uploads it to Microsoft Sentinel Threat Intelligence via the Upload STIX Objects API under the same SourceSystem 'PRODAFT USTA - Phishing Sites', so backfilled history unifies with the incremental data. Triggered manually (Run Trigger); it does not r

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Playbooks/PRODAFTUstaIoC-BackfillPhishingSites/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Upload_STIX_Objects | post | `/ThreatIntelligence/@{encodeURIComponent(uriComponent(parameters('WorkspaceID')))}/UploadStixObjects/` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Fetch_USTA_Page | GET | `@variables('NextUrl')` | — |

</details>

## Additional Documentation

> 📄 *Source: [PRODAFTUstaIoC-BackfillPhishingSites/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Playbooks/PRODAFTUstaIoC-BackfillPhishingSites/readme.md)*

# PRODAFTUstaIoC-BackfillPhishingSites

On-demand historical backfill for the PRODAFT USTA **Phishing Sites** IoC feed, part of the
**PRODAFT USTA - IoC Threat Intelligence** solution.

The hourly [`PRODAFTUstaIoC-ImportPhishingSites`](../PRODAFTUstaIoC-ImportPhishingSites/readme.md) playbook only moves **forward** from its watermark, so it
cannot reach history that predates its first run. This playbook loads that history: it pages the
`phishing-sites` feed from `BackfillDays` ago (default **90**) up to the present, maps each record to a
STIX 2.1 indicator with the **same mapping** as the import playbook, and uploads it under the same
`SourceSystem` — `PRODAFT USTA - Phishing Sites` — so backfilled and incremental data are indistinguishable.

## Safe to run alongside the import playbook

* STIX ids are **deterministic**, so re-uploading a record **updates** it rather than duplicating it.
* The import playbook's watermark is `max(Created)`. Loading *older* records never moves it backwards,
  and if the backfill catches up to the present it lands on the value the import playbook would have
  reached anyway. Neither playbook can make the other skip records.
* The trigger allows **one run at a time** (`concurrency: 1`), so pressing Run Trigger again while a
  backfill is still going queues the run instead of doubling the API load.

## Resolved IP addresses

When a record carries `ip_addresses`, every address is appended to the **same** indicator's
pattern as its own observation expression — `ipv4-addr:value` or `ipv6-addr:value`, chosen per
address — so the indicator covers the URL/hash and its resolved IPs under one validity window.
Only the **first 10** addresses of a record are included; any beyond that are dropped.

Microsoft Sentinel expands a multi-observation pattern into one `ObservableKey`/`ObservableValue` row per
observable, so those IPs are independently matchable. Note that CDN-fronted hosts resolve to
shared edge addresses, which can produce false positives if you match on IP alone.

## Parameters

| Parameter | Required | Default | Notes |
|---|---|---|---|
| `PlaybookName` | no | `PRODAFTUstaIoC-BackfillPhishingSites` | Logic App name. |
| `UstaBaseUrl` | no | `https://usta.prodaft.com` | USTA API base URL. |
| `UstaApiKey` | **yes** | — | USTA long-lived API key (secured). |
| `WorkspaceName` | **yes** | — | Name of the Microsoft Sentinel (Log Analytics) workspace that indicators are uploaded to. |
| `WorkspaceResourceGroup` | no | resource group of the deployment | Resource group of the workspace, if it differs from where the playbook is deployed. |
| `BackfillDays` | no | `90` | Days of history to load, counted back from now. Ignored when `startTime` is supplied in the trigger body. |
| `ValidityDays` | no | `365` | Validity window (days) applied from each site's `created` date, since the feed has no expiry. |

## Deploy — from the portal

1. **Microsoft Sentinel → Content hub → PRODAFT USTA - IoC Threat Intelligence → Manage → Playbook
   templates**, select **PRODAFT USTA - Backfill Phishing Sites**, choose **Create playbook**, and supply
   `UstaApiKey` and `WorkspaceName`.
2. The playbook is created with a **system-assigned managed identity** automatically.
3. **Grant the role**: **Log Analytics workspace → Access control (IAM) → Add → Add role assignment**
   → Role **Microsoft Sentinel Contributor** → **Members: Managed identity** → pick this Logic App →
   **Review + assign**. **Open IAM on the workspace itself, not on the Logic App** — granting the role while the playbook's own blade is open scopes it to the Logic App (`.../Microsoft.Logic/workflows/...`), which looks correct in the portal but gives the identity no access to the workspace. The API connection deployed with the playbook uses that
   same managed identity, so there is no connection to authorize interactively.
4. Run it: **Logic App → Overview → Run Trigger → manual**. It does **not** run on a schedule.

## Deploy — via Azure CLI (run from this folder)

```bash
# ---- configuration ----
SUB="<subscription-id>"
RG="<resource-group>"                  # resource group of the Microsoft Sentinel workspace
WS="<workspace-name>"                  # Log Analytics workspace name
USTA_API_KEY="<usta-api-key>"
BACKFILL_DAYS=90
PLAYBOOK="PRODAFTUstaIoC-BackfillPhishingSites"

az account set --subscription "$SUB"

# 1. Deploy the playbook and capture its managed-identity principalId
PRINCIPAL_ID=$(az deployment group create \
  --resource-group "$RG" \
  --template-file azuredeploy.json \
  --parameters PlaybookName="$PLAYBOOK" \
               UstaApiKey="$USTA_API_KEY" \
               WorkspaceName="$WS" \
               BackfillDays=$BACKFILL_DAYS \
  --query properties.outputs.playbookPrincipalId.value -o tsv)

# 2. Grant that identity 'Microsoft Sentinel Contributor' on the workspace
az role assignment create \
  --assignee-object-id "$PRINCIPAL_ID" \
  --assignee-principal-type ServicePrincipal \

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md)

