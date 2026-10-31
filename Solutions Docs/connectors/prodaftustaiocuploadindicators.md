# PRODAFT USTA - IoC Threat Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PRODAFTUstaIoC.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `PRODAFTUstaIoCUploadIndicators` |
| **Publisher** | PRODAFT |
| **Used in Solutions** | [PRODAFT USTA - IoC Threat Intelligence](../solutions/prodaft-usta-ioc-threat-intelligence.md) |
| **Collection Method** | [Azure Function (TI Upload API)\|Unknown](../methods/azure-function-ti-upload-api-unknown.md) |
| **Connector Definition Files** | [PRODAFTUstaIoC_UploadIndicatorsAPI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/Data%20Connectors/PRODAFTUstaIoC_UploadIndicatorsAPI.json) |
| **Ingestion API** | [STIX 2.1 Upload Indicators API](../methods/stix-2.1-upload-indicators-api.md) — *Connector definition filename suffix '_UploadIndicatorsAPI' indicates STIX 2.1 Upload Indicators API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#prodaft-usta---ioc-threat-intelligence) |

The PRODAFT USTA IoC Threat Intelligence connector ingests indicators of compromise (malicious URLs, malware hashes, and phishing sites) from the PRODAFT USTA platform into Microsoft Sentinel's Threat Intelligence as STIX indicators via the Upload STIX Objects API. Ingestion is performed by the import playbooks shipped with this solution (one per IoC feed); where a record carries resolved `ip_addresses`, those addresses are added to the same indicator's pattern as `ipv4-addr`/`ipv6-addr` observables; indicators appear in the Threat Intelligence blade and in the `ThreatIntelIndicators` table under a per-feed `SourceSystem` — `PRODAFT USTA - Malicious URLs`, `PRODAFT USTA - Malware Hashes` and `PRODAFT USTA - Phishing Sites` — so `SourceSystem startswith 'PRODAFT USTA'` selects every USTA indicator. After installing the solution, deploy and authorize the import playbooks by following the guidance in the Manage solution view.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `SourceSystem startswith "PRODAFT USTA"` | ✓ | ✓ | ✗ |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) |  | ✓ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.

**Custom Permissions:**
- **Workspace role assignments for the playbooks**: Every import and backfill playbook uses a system-assigned managed identity, which needs the **Microsoft Sentinel Contributor** role on the workspace to call the Upload STIX Objects API. The three **import** playbooks additionally read their ingestion watermark from the `ThreatIntelIndicators` table and therefore also need **Log Analytics Reader** on the workspace — Microsoft Sentinel Contributor does not cover the `Microsoft.OperationalInsights/workspaces/read` action that read performs.
- **PRODAFT USTA API key**: A long-lived PRODAFT USTA API key with access to the Security Intelligence IoC endpoints is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Install the core Threat Intelligence solution**

This connector lands indicators in the `ThreatIntelIndicators` table and the Threat Intelligence blade. Install the Microsoft **Threat Intelligence** solution from the Content hub first, so the blade and the source-agnostic TI-map analytic rules are available.

**2. Deploy the PRODAFT USTA import playbooks**

This solution ships three hourly import playbooks — **PRODAFTUstaIoC-ImportMaliciousUrls**, **PRODAFTUstaIoC-ImportMalwareHashes**, and **PRODAFTUstaIoC-ImportPhishingSites** — plus a matching on-demand backfill playbook per feed (**PRODAFTUstaIoC-BackfillMaliciousUrls**, **-BackfillMalwareHashes**, **-BackfillPhishingSites**) for loading history. Deploy them from the Manage solution view (or the Automation blade), supplying your USTA base URL, USTA API key, and the name of your Microsoft Sentinel workspace.

**3. Authorize the playbooks' managed identity**

Each playbook uses a system-assigned managed identity. On the **Log Analytics workspace** → Access control (IAM) → Add role assignment — open IAM on the workspace, **not** on the Logic App, or the assignment is scoped to the playbook and grants no workspace access — grant that identity **Microsoft Sentinel Contributor** (needed by every playbook, for the Upload STIX Objects call) and, for the three **import** playbooks, also **Log Analytics Reader** (needed for the watermark query — without it the run fails with `AuthorizationFailed` on `Microsoft.OperationalInsights/workspaces/read`). Once granted, the playbooks poll USTA hourly and push new indicators; the connector shows **Connected** after the first indicators arrive.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

