# PRODAFT USTA - Import Phishing Sites

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Polls the PRODAFT USTA phishing-site IoC feed hourly, maps each record to a STIX 2.1 indicator, and uploads it to Microsoft Sentinel Threat Intelligence via the Upload STIX Objects API. This feed has no expiry, so a validity window (default 365 days, one year) is synthesized from each site's created date. Indicators appear in the Threat Intelligence blade and the ThreatIntelIndicators table with SourceSystem 'PRODAFT USTA - Phishing Sites'. Each run starts its fetch window from a watermark - the

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Playbooks/PRODAFTUstaIoC-ImportPhishingSites/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `SourceSystem == "PRODAFT USTA - Phishing Sites"` | ✓ | ✓ | ✗ |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Import_Watermark | post | `/queryData` | — |

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

> 📄 *Source: [PRODAFTUstaIoC-ImportPhishingSites/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Playbooks/PRODAFTUstaIoC-ImportPhishingSites/readme.md)*

# PRODAFTUstaIoC-ImportPhishingSites

Hourly import playbook for the **phishing-sites** USTA IoC feed. Each run resumes from a
**watermark** — the newest already-imported indicator's `created` time — maps each new record
to a STIX 2.1 indicator, and uploads them to Microsoft Sentinel Threat Intelligence (Upload
STIX Objects API) using its **system-assigned managed identity**. The feed has no expiry, so a
validity window (`ValidityDays`, default 365 — one year) is synthesized from each site's `created` date.
Indicators appear in the Threat Intelligence blade / `ThreatIntelIndicators` table with
`SourceSystem == "PRODAFT USTA - Phishing Sites"`.

## How the fetch window works

At the start of every run the playbook queries the `ThreatIntelIndicators` table for
`max(Created)` of `SourceSystem == "PRODAFT USTA - Phishing Sites"` and uses that (minus a
5-minute safety overlap) as the `start=` of the fetch. Because a record only lands in that
table after a **successful** upload, a failed run does not advance the watermark: the next run
re-reads the same value and retries the missed window, so **no indicators are skipped on
failure**. If the table has no such indicators yet (first run), it falls back to `LookBackHours`.
The watermark query runs through the **Azure Monitor Logs** connection (managed-identity auth) using the
same managed identity, but it needs **Log Analytics Reader** on the workspace *in addition to* the **Microsoft Sentinel
Contributor** role used for the upload. Microsoft Sentinel Contributor is not sufficient on its own: it grants
`Microsoft.OperationalInsights/workspaces/*/read`, and an Azure RBAC wildcard of that shape does not
cover the bare `Microsoft.OperationalInsights/workspaces/read` action this connection performs, so the
query fails with `AuthorizationFailed`.

## Resolved IP addresses

When a record carries `ip_addresses`, every address is appended to the **same** indicator's
pattern as its own observation expression — `ipv4-addr:value` or `ipv6-addr:value`, chosen per
address — so the indicator covers the URL/hash and its resolved IPs under one validity window.
Only the **first 10** addresses of a record are included; any beyond that are dropped.

Microsoft Sentinel expands a multi-observation pattern into one `ObservableKey`/`ObservableValue` row per
observable, so those IPs are independently matchable. Note that CDN-fronted hosts resolve to
shared edge addresses, which can produce false positives if you match on IP alone.

## Parameters

| Parameter | Required | Default | Description |
|---|---|---|---|
| `PlaybookName` | no | `PRODAFTUstaIoC-ImportPhishingSites` | Logic App name. |
| `UstaBaseUrl` | no | `https://usta.prodaft.com` | USTA API base URL. |
| `UstaApiKey` | **yes** | — | USTA long-lived API key (secured). |
| `WorkspaceName` | **yes** | — | Name of the Microsoft Sentinel (Log Analytics) workspace that indicators are uploaded to. |
| `WorkspaceResourceGroup` | no | resource group of the deployment | Resource group of the workspace, if it differs from where the playbook is deployed. |
| `LookBackHours` | no | `2` | First-run / fallback look-back window (hours), used only until the first indicator is imported (empty watermark). Afterwards each run resumes from the import watermark. |
| `ValidityDays` | no | `365` | Validity window (days) applied from each site's `created` date, since the feed has no expiry. |

## Deploy — from the portal

1. **Microsoft Sentinel → Content hub → PRODAFT USTA - IoC Threat Intelligence → Manage → Playbook templates**, select **PRODAFT USTA - Import Phishing Sites**, choose **Create playbook**, and supply `UstaApiKey` and `WorkspaceName`. (Or **Automation → Create → Playbook**, then deploy this `azuredeploy.json`.)
2. The playbook is created with a **system-assigned managed identity** automatically.
3. **Grant two roles** on the **Log Analytics workspace → Access control (IAM) → Add → Add role assignment** → **Members: Managed identity** → pick this Logic App by name → **Review + assign**. Assign both **Microsoft Sentinel Contributor** (for the Upload STIX Objects call) and **Log Analytics Reader** (for the watermark query — Microsoft Sentinel Contributor on its own returns `AuthorizationFailed`). **Open IAM on the workspace itself, not on the Logic App** — granting the role while the playbook's own blade is open scopes it to the Logic App (`.../Microsoft.Logic/workflows/...`), which looks correct in the portal but gives the identity no access to the workspace.
4. It now runs hourly. To run immediately, open the Logic App → **Run Trigger → Recurrence**.

## Deploy — via Azure CLI (run from this folder)

```bash
# ---- configuration ----
SUB="<subscription-id>"
RG="<resource-group>"                 # resource group of the Microsoft Sentinel workspace
WS="<workspace-name>"                  # Log Analytics workspace name
USTA_API_KEY="<usta-api-key>"
PLAYBOOK="PRODAFTUstaIoC-ImportPhishingSites"

az account set --subscription "$SUB"


*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md)

