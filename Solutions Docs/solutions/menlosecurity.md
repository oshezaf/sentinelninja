# Menlo Security

*Solution: MenloSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/MenloSecurity.svg" alt="MenloSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Menlo Security |
| **Support Tier** | Partner |
| **Support Link** | [https://www.menlosecurity.com/customers/support](https://www.menlosecurity.com/customers/support) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Menlo Security - support@menlosecurity.com |
| **First Published** | 2026-02-26 |
| **Last Updated** | 2026-10-28 |
| **Solution Folder** | [MenloSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MenloSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/menlosecurityinc1616111685428.menlosecurity-sentinel-solution) · Popularity: ⚪ Very Low (0%) |

The [Menlo Security](https://www.menlosecurity.com) solution for Microsoft Sentinel ingests Audit, Bandwidth, and Web proxy logs from the Menlo Security cloud platform into custom Log Analytics tables (`MenloAudit_CL`, `MenloBandwidth_CL`, `MenloWeb_CL`) for threat detection, investigation, and response. Logs are collected by three timer-triggered Azure Functions that poll the Menlo Security Log Fetch API and ship events via the Azure Monitor Logs Ingestion API using a Data Collection Endpoint (DCE) and Data Collection Rule (DCR).

  **Underlying Microsoft Technologies used:**

  This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor Logs Ingestion API (DCE/DCR)](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)


## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Menlo Security](../connectors/menlosecurityconnector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MenloAudit_CL`](../tables/menloaudit-cl.md) | [Menlo Security](../connectors/menlosecurityconnector.md) | - |
| [`MenloBandwidth_CL`](../tables/menlobandwidth-cl.md) | [Menlo Security](../connectors/menlosecurityconnector.md) | - |
| [`MenloWeb_CL`](../tables/menloweb-cl.md) | [Menlo Security](../connectors/menlosecurityconnector.md) | - |

## Additional Documentation

> 📄 *Source: [MenloSecurity/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MenloSecurity/README.md)*

The **Menlo Security** solution ingests security logs from the [Menlo Security](https://www.menlosecurity.com) cloud platform into Microsoft Sentinel. [Menlo Security](https://www.menlosecurity.com) protects organizations from browser-based threats using an isolation-first approach; this solution brings that telemetry into Microsoft Sentinel for threat detection, investigation, and response.

> **Note:** This solution is currently in public preview.

## What it does

The solution installs a single **data connector** that runs as three independent, timer-triggered Azure Functions — one per log type. Each function polls the Menlo Security Log Fetch API every 3 minutes and ships events to a custom Log Analytics table via the Azure Monitor Logs Ingestion API. No inbound network access to your environment is required.

| Log type | Log Analytics table | Description |
|----------|---------------------|-------------|
| Audit | `MenloAudit_CL` | Admin and policy change events |
| Bandwidth | `MenloBandwidth_CL` | Proxy bandwidth usage per user and domain |
| Web | `MenloWeb_CL` | Web request events including URLs, categories, and threat verdicts |

## Architecture

All connector resources are deployed into a dedicated resource group named **`MenloSecurityLogs`**, created in the same Azure region as your Log Analytics workspace. The custom tables are created in your existing workspace's resource group.

| Resource | Purpose |
|----------|---------|
| **Azure Function App** (Flex Consumption, Linux, Python) | Hosts the three timer-triggered ingestion functions |
| **Azure Storage Account** | Function host state, deployment package, and per-log-type last-sync timestamps |
| **Azure Key Vault** | Stores the Menlo API token as a secret (resolved via Key Vault reference) |
| **Application Insights** | Function execution, error, and performance monitoring (workspace-based) |
| **Data Collection Endpoint (DCE)** | HTTPS ingestion endpoint that receives logs from the Function App |
| **Data Collection Rule (DCR)** | Applies KQL type transforms and routes logs to the correct tables |
| **Log Analytics tables** (3) | `MenloAudit_CL`, `MenloBandwidth_CL`, `MenloWeb_CL` |

The Function App authenticates to Azure using a **System-Assigned Managed Identity** — no passwords, connection strings, or client secrets are used for any Azure resource access. Inbound HTTP traffic to the Function App is denied; timer triggers require no inbound access.

## Deployment

1. Install this solution from the Microsoft Sentinel **Content Hub**.
2. During deployment you are prompted for:
   - The name and resource group of your existing Log Analytics workspace.
   - Your Menlo Security API token (a valid token with permission to access the `/api/rep/v2/fetch/client_select` endpoint, obtained from the Menlo Security admin console).

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**        |
|-------------|--------------------------------|---------------------------|
| 3.0.0       | 13-10-2026                     | Initial solution release. Adds the **Menlo Security** data connector, which ingests Audit, Bandwidth, and Web proxy logs into the `MenloAudit_CL`, `MenloBandwidth_CL`, and `MenloWeb_CL` custom Log Analytics tables via three timer-triggered Azure Functions and the Azure Monitor Logs Ingestion API (DCE/DCR). |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

