# USTA Account Takeover Prevention Sentinel Connector

*Solution: PRODAFT USTA - Account Takeover Prevention*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PRODAFTUstaATP.svg" alt="PRODAFT USTA - Account Takeover Prevention Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | PRODAFT |
| **Support Tier** | Partner |
| **Support Link** | [https://www.prodaft.com](https://www.prodaft.com) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.1 |
| **Author** | PRODAFT - integration@prodaft.com |
| **First Published** | 2026-07-06 |
| **Last Updated** | 2026-07-24 |
| **Solution Folder** | [PRODAFT USTA - Account Takeover Prevention](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/prodaft.azure-sentinel-solution-prodaft-usta-atp) · Popularity: 🔵 Medium (68%) |

The **PRODAFT USTA - Account Takeover Prevention** solution ingests compromised corporate credentials from the PRODAFT USTA platform into Microsoft Sentinel via a codeless (Codeless Connector Framework) data connector. Plaintext passwords are dropped at ingestion — only password strength signals (score and length) are retained for triage. Includes analytic rules to alert on newly exposed corporate credentials and on successful Entra ID sign-ins with known-compromised accounts, a hunting query, an overview workbook, and an on-demand backfill playbook for loading historical data.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [PRODAFT USTA - Account Takeover Prevention (via Codeless Connector Framework)](../connectors/prodaftustaatpccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) | [PRODAFT USTA - Account Takeover Prevention (via Codeless Connector Framework)](../connectors/prodaftustaatpccpdefinition.md) | Analytics, Hunting, Workbooks |

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
| [PRODAFT USTA - Compromised credential used in successful sign-in](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-compromised-credential-used-in-successful-sign-in-5da571b5-54f6-42c2-8c3e-27edd987ceec-c6c285f0.md) | High | CredentialAccess, InitialAccess | [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) |
| [PRODAFT USTA - Corporate credential compromised](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-corporate-credential-compromised-9ad6cf22-ffbb-4422-9933-9bbd0104f818-4df5a4e0.md) | High | CredentialAccess, InitialAccess | [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [PRODAFT USTA - Infostealer exposure across corporate identities](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-infostealer-exposure-across-corporate-identities-c2acc93e-23c8-4d0c-87d7-eee7064e8fec-9eddac19.md) | CredentialAccess | [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PRODAFTUstaATPOverview](../content/prodaft-usta-account-takeover-prevention-prodaftustaatpoverview-23fe73af.md) | [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PRODAFTUstaATP-Backfill](../content/prodaft-usta-account-takeover-prevention-prodaftustaatp-backfill-6bdc69a2.md) | On-demand backfill playbook for PRODAFT USTA - Account Takeover Prevention. Pages through the USTA c... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PRODAFTUstaCompromisedCredentials](../parsers/prodaftustacompromisedcredentials.md) | - | [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [PRODAFT USTA - Account Takeover Prevention/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/README.md)*

Ingests **compromised corporate credentials** from the PRODAFT USTA Account Takeover
Prevention API into Microsoft Sentinel via a codeless (Codeless Connector Framework)
data connector. Plaintext passwords are never stored — the DCR transform drops them at
ingestion and retains only password strength signals (score and length).

## Contents

| Content | Items |
|---|---|
| Data connector (CCF) | `Data Connectors/PRODAFTUstaATP_ccp/` — ConnectorDefinition, PollingConfig, DCR, Table |
| Parser | `PRODAFTUstaCompromisedCredentials` — query-time dedup (one row per `TicketId`) |
| Analytic rules | Corporate credential compromised; Compromised credential used in successful sign-in |
| Hunting query | Infostealer exposure across corporate identities |
| Workbook | `PRODAFTUstaATPOverview` |
| Playbook | `PRODAFTUstaATP-Backfill` — on-demand historical backfill |

## Deployment

### From the portal (Content Hub)

1. Once published, install **PRODAFT USTA - Account Takeover Prevention** from
   **Microsoft Sentinel → Content hub**.
2. Open **Configuration → Data connectors → PRODAFT USTA - Account Takeover Prevention
   (via Codeless Connector Framework)**, enter the USTA base URL and your API key, and
   select **Connect**. The connector polls every minute going forward.
3. To load history, deploy and run the **PRODAFTUstaATP-Backfill** playbook once — see
   [Playbooks/PRODAFTUstaATP-Backfill/readme.md](Playbooks/PRODAFTUstaATP-Backfill/readme.md).

### Via scripts (this repository)

1. Generate the deployable package with the repo's packaging tool (creates
   `Package/mainTemplate.json` + `Package/createUiDefinition.json`). The tool is a
   PowerShell 7 script and runs the same on Windows, Linux, and macOS via `pwsh`.
   One-time setup (see `Tools/Create-Azure-Sentinel-Solution/README.md`):
   PowerShell 7.1+, Node.js, and the YAML module (`pwsh -Command 'Install-Module powershell-yaml -Scope CurrentUser'`).

   ```bash
   # from the repository root — pass the ABSOLUTE path to this solution's Data folder
   # (the tool rejects paths that start with "Solutions/")
   pwsh Tools/Create-Azure-Sentinel-Solution/V3/createSolutionV3.ps1 \
     -SolutionDataFolderPath "$(pwd)/Solutions/PRODAFT USTA - Account Takeover Prevention/Data" \
     -VersionMode local -VersionBump patch
   ```

   `-VersionMode local` versions from this solution's Data file and bumps it on every run
   (`patch`/`minor`/`major`), writing the new version back. The default `catalog` mode looks
   the offer up in the Content Hub catalog and, for unpublished solutions, falls back to
   3.0.0. Package versions must be **3.x**: the tool aborts on 1.x versions and 2.x
   builds only the deprecated templateSpec format, so the Content Hub packaging format
   (`contentSchemaVersion` 3) requires 3.x — which is why the initial release is 3.0.0.

2. Deploy from scratch — creates the resource group and the Log Analytics workspace,

*[Content truncated...]*

## Release Notes

# PRODAFT USTA - Account Takeover Prevention — Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 27-07-2026                     | Updated the backfill **Playbook** to self-provision its Data Collection Endpoint (DCE) and Data Collection Rule (DCR) and to grant its managed identity the *Monitoring Metrics Publisher* role on the DCR. Removes the manual ingestion-endpoint URI and DCR immutable-ID setup previously required to run the backfill. |
| 3.0.0       | 06-07-2026                     | Initial Solution Release. Codeless (CCF) data connector for compromised-credential tickets with ingestion-time password redaction (only strength signals are stored). Two **Analytic Rules** (corporate credential compromised; compromised credential used in a successful Entra ID sign-in), one **Hunting Query**, an overview **Workbook**, a query-time dedup **Parser**, and an on-demand backfill **Playbook** (Logs Ingestion API via managed identity) for loading historical data. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

