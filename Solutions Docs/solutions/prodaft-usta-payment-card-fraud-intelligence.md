# ⚠️ PRODAFT USTA - Payment Card Fraud Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PRODAFTUstaPCFI.svg" alt="PRODAFT USTA - Payment Card Fraud Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | PRODAFT |
| **Support Tier** | Partner |
| **Support Link** | [https://www.prodaft.com](https://www.prodaft.com) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | PRODAFT - integration@prodaft.com |
| **First Published** | 2026-07-08 |
| **Solution Folder** | [PRODAFT USTA - Payment Card Fraud Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Payment%20Card%20Fraud%20Intelligence) |

The **PRODAFT USTA - Payment Card Fraud Intelligence** solution ingests compromised payment cards from the PRODAFT USTA platform into Microsoft Sentinel via a codeless (Codeless Connector Framework) data connector. The full card number (PAN) is dropped at ingestion — only the BIN (first 6), the last 4 digits, the card brand, and the length are retained for triage. Includes analytic rules to alert on newly exposed payment cards and on non-expired (still-usable) exposed cards, a hunting query, an overview workbook, and an on-demand backfill playbook for loading historical data.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [PRODAFT USTA - Payment Card Fraud Intelligence (via Codeless Connector Framework)](../connectors/prodaftustapcficcpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) | [PRODAFT USTA - Payment Card Fraud Intelligence (via Codeless Connector Framework)](../connectors/prodaftustapcficcpdefinition.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |
| Workbooks | 1 |
| Playbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PRODAFT USTA - Non-expired payment card exposed](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-non-expired-payment-card-exposed-674429c9-a858-436c-95b8-5808024ebd01-f3b34a4c.md) | High | Impact | [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) |
| [PRODAFT USTA - Payment card exposed](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-payment-card-exposed-bd550c7f-5455-48de-b23d-30fced82d02b-61f1004e.md) | Medium | Impact | [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [PRODAFT USTA - Payment card exposure by company](../content/prodaft-usta-payment-card-fraud-intelligence-prodaft-usta-payment-card-exposure-by-company-9f895380-3aad-47e4-9181-7c717a76af77-6ca37f0c.md) | - | [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PRODAFTUstaPCFIOverview](../content/prodaft-usta-payment-card-fraud-intelligence-prodaftustapcfioverview-314477da.md) | [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PRODAFTUstaPCFI-Backfill](../content/prodaft-usta-payment-card-fraud-intelligence-prodaftustapcfi-backfill-5ae17346.md) | On-demand backfill playbook for PRODAFT USTA - Payment Card Fraud Intelligence. Pages through the US... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PRODAFTUstaCompromisedCards](../parsers/prodaftustacompromisedcards.md) | - | [`PRODAFTUstaCompromisedCards_CL`](../tables/prodaftustacompromisedcards-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [PRODAFT USTA - Payment Card Fraud Intelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Payment%20Card%20Fraud%20Intelligence/README.md)*

Ingests **compromised payment cards** from the PRODAFT USTA Payment Card Fraud
Intelligence API into Microsoft Sentinel via a codeless (Codeless Connector Framework)
data connector. The full card number (PAN) is never stored - the DCR transform drops it at
ingestion and retains only the BIN (first 6), the last 4 digits, the card brand, and the
length.

## Contents

| Content | Items |
|---|---|
| Data connector (CCF) | `Data Connectors/PRODAFTUstaPCFI_ccp/` - ConnectorDefinition, PollingConfig, DCR, Table |
| Parser | `PRODAFTUstaCompromisedCards` - query-time dedup (one row per `TicketId`) |
| Analytic rules | Payment card exposed; Non-expired payment card exposed |
| Hunting query | Payment card exposure by company |
| Workbook | `PRODAFTUstaPCFIOverview` |
| Playbook | `PRODAFTUstaPCFI-Backfill` - on-demand historical backfill |

## Deployment

### From the portal (Content Hub)

1. Once published, install **PRODAFT USTA - Payment Card Fraud Intelligence** from
   **Microsoft Sentinel → Content hub**.
2. Open **Configuration → Data connectors → PRODAFT USTA - Payment Card Fraud Intelligence
   (via Codeless Connector Framework)**, enter the USTA base URL and your API key, and
   select **Connect**. The connector polls every minute going forward.
3. To load history, deploy and run the **PRODAFTUstaPCFI-Backfill** playbook once - see
   [Playbooks/PRODAFTUstaPCFI-Backfill/readme.md](Playbooks/PRODAFTUstaPCFI-Backfill/readme.md).

### Via scripts (this repository)

1. Generate the deployable package with the repo's packaging tool (creates
   `Package/mainTemplate.json` + `Package/createUiDefinition.json`). The tool is a
   PowerShell 7 script and runs the same on Windows, Linux, and macOS via `pwsh`.
   One-time setup (see `Tools/Create-Azure-Sentinel-Solution/README.md`):
   PowerShell 7.1+, Node.js, and the YAML module (`pwsh -Command 'Install-Module powershell-yaml -Scope CurrentUser'`).

   ```bash
   # from the repository root - pass the ABSOLUTE path to this solution's Data folder
   # (the tool rejects paths that start with "Solutions/")
   pwsh Tools/Create-Azure-Sentinel-Solution/V3/createSolutionV3.ps1 \
     -SolutionDataFolderPath "$(pwd)/Solutions/PRODAFT USTA - Payment Card Fraud Intelligence/Data" \
     -VersionMode local -VersionBump patch
   ```

   `-VersionMode local` versions from this solution's Data file and bumps it on every run
   (`patch`/`minor`/`major`), writing the new version back. The default `catalog` mode looks
   the offer up in the Content Hub catalog and, for unpublished solutions, falls back to
   3.0.0. Package versions must be **3.x**: the tool aborts on 1.x versions and 2.x
   builds only the deprecated templateSpec format, so the Content Hub packaging format
   (`contentSchemaVersion` 3) requires 3.x - which is why the initial release is 3.0.0.

2. Deploy from scratch - creates the resource group and the Log Analytics workspace,

*[Content truncated...]*

## Release Notes

# PRODAFT USTA - Payment Card Fraud Intelligence - Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 08-07-2026                     | Initial Solution Release. Codeless (CCF) data connector for compromised payment-card tickets with ingestion-time PAN redaction (only BIN, last 4 digits, brand, and length are stored). Two **Analytic Rules** (payment card exposed; non-expired payment card exposed), one **Hunting Query**, an overview **Workbook**, a query-time dedup **Parser**, and an on-demand backfill **Playbook** (Logs Ingestion API via managed identity) for loading historical data. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

