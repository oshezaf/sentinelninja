# ⚠️ TrendAI Vision One(CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/TrendAI_Logo.svg" alt="TrendAI Vision One(CCF) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | TrendAI |
| **Support Tier** | Partner |
| **Support Link** | [https://success.trendmicro.com/dcx/s/](https://success.trendmicro.com/dcx/s/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | TrendAI |
| **First Published** | 2026-07-08 |
| **Solution Folder** | [TrendAI Vision One(CCF)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29) |

The [TrendAI Vision One](https://www.trendmicro.com/en_us/business/products/detection-response/xdr.html) solution for Microsoft Sentinel provides two data connectors that ingest security data from the TrendAI Vision One platform using the Codeless Connector Framework (CCF):

- **Workbench Alerts** – Security incidents, investigations, and alerts with IOC extraction
- **OAT Detections** – MITRE ATT&CK mapped detections with full process trees

This solution also includes KQL parser functions, an analytic rule, and a workbook dashboard for Workbench Alerts.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [TrendAI Vision One™ - OAT Detections (via Codeless Connector Framework)](../connectors/trendaivisiononeoat.md) 🔶
- [TrendAI Vision One™ - Workbench Alerts (via Codeless Connector Framework)](../connectors/trendaivisiononeworkbench.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TrendAI_XDR_OAT_V2_CL`](../tables/trendai-xdr-oat-v2-cl.md) 🔶 | [TrendAI Vision One™ - OAT Detections (via Codeless Connector Framework)](../connectors/trendaivisiononeoat.md) | - |
| [`TrendAI_XDR_WORKBENCH_V2_CL`](../tables/trendai-xdr-workbench-v2-cl.md) 🔶 | [TrendAI Vision One™ - Workbench Alerts (via Codeless Connector Framework)](../connectors/trendaivisiononeworkbench.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [TrendAI Vision One - Create Incident for Workbench Alerts](../content/trendai-vision-one-ccf-trendai-vision-one-create-incident-for-workbench-alerts-2f668615-c372-4673-a5cd-773e4da715b9-1df6fda9.md) | High | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, LateralMovement, Collection, Exfiltration, CommandAndControl, Impact | [`TrendAI_XDR_WORKBENCH_V2_CL`](../tables/trendai-xdr-workbench-v2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendAIVisionOneWorkbenchOverview](../content/trendai-vision-one-ccf-trendaivisiononeworkbenchoverview-7ffcf600.md) | [`TrendAI_XDR_WORKBENCH_V2_CL`](../tables/trendai-xdr-workbench-v2-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TrendAIOAT_Complete](../parsers/trendaioat-complete.md) | - | [`TrendAI_XDR_OAT_V2_CL`](../tables/trendai-xdr-oat-v2-cl.md) *(read)*<br>[`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) *(read)* |
| [TrendAIWorkbench_Complete](../parsers/trendaiworkbench-complete.md) | - | [`TrendAI_XDR_WORKBENCH_V2_CL`](../tables/trendai-xdr-workbench-v2-cl.md) *(read)*<br>[`TrendMicro_XDR_WORKBENCH_CL`](../tables/trendmicro-xdr-workbench-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [TrendAI Vision One(CCF)/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TrendAI%20Vision%20One%28CCF%29/README.md)*

## Overview

The TrendAI Vision One solution for Microsoft Sentinel provides data connectors that ingest security data from the TrendAI Vision One platform into Microsoft Sentinel using the Codeless Connector Framework (CCF).

This solution includes two data connectors:

| Connector | Description |
|-----------|-------------|
| **Workbench Alerts** | Ingests security alerts, incidents, and investigations from TrendAI Vision One Workbench |
| **OAT Detections** | Ingests Observed Attack Techniques (OAT) detections with MITRE ATT&CK mappings |

Both connectors poll the TrendAI Vision One API every **5 minutes**, retrieving data from the last 5-minute window.

---

## Solution Contents

| Component | Description |
|-----------|-------------|
| Data Connectors | 2 connectors (Workbench Alerts, OAT Detections) |
| Custom Tables | `TrendAI_XDR_WORKBENCH_V2_CL`, `TrendAI_XDR_OAT_V2_CL` |
| Parser Functions | `TrendAIWorkbench_Complete`, `TrendAIOAT_Complete` |
| Data Collection Rules | DCR-based ingestion-time transformations |
| Data Collection Endpoint | Shared DCE for both connectors |

---

## Prerequisites

### 1. Microsoft Sentinel Workspace

- An active Microsoft Sentinel workspace
- **Permissions required:**
  - Read and Write permissions on the Log Analytics workspace
  - Contributor or Owner role on the resource group

### 2. TrendAI Vision One API Token

You need an API token from your TrendAI Vision One console with appropriate permissions.

#### Steps to Generate API Token:

1. Log in to the [TrendAI Vision One Console](https://portal.xdr.trendmicro.com)
2. Navigate to **Administration** → **API Keys**
3. Click **Add API Key**
4. Configure the API key:
   - **Name:** Microsoft Sentinel Integration (or your preferred name)
   - **Role:** Select a role with the following permissions:
     - Workbench (View)
     - Observed Attack Techniques (View)
   - **Expiration:** Set according to your security policy
5. Click **Add**
6. **Important:** Copy and securely store the API token immediately. It will not be shown again.

### 3. Identify Your API Region

Determine the API domain based on your TrendAI Vision One tenant region:

| Region | API Domain |
|--------|------------|
| US | `api.xdr.trendmicro.com` |
| EU | `api.eu.xdr.trendmicro.com` |
| SG | `api.sg.xdr.trendmicro.com` |
| JP | `api.xdr.trendmicro.co.jp` |
| AU | `api.au.xdr.trendmicro.com` |
| IN | `api.in.xdr.trendmicro.com` |
| MEA | `api.mea.xdr.trendmicro.com` |
| UK | `api.uk.xdr.trendmicro.com` |
| CA | `api.ca.xdr.trendmicro.com` |
| ZA (South Africa) | `api.za.xdr.trendmicro.com` |

---

## Installation from Content Hub

### Step 1: Navigate to Content Hub

1. Sign in to the [Azure Portal](https://portal.azure.com)
2. Navigate to **Microsoft Sentinel**
3. Select your Sentinel workspace
4. In the left menu, click **Content hub**

### Step 2: Find and Install the Solution

1. In the Content Hub, search for **"TrendAI Vision One"**

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 05-08-2026 | Initial release of TrendAI Vision One solution via Codeless Connector Framework (CCF). Includes Workbench Alerts and OAT Detections connectors with DCR-based ingestion-time transformations, dropdown selectors for API domain and third-party exclusion, TMV1-Filter pass-through support, KQL parsers, an analytic rule with MITRE ATT&CK mappings, and a workbook dashboard. Fixed ARM template bracket escaping, added token rotation warning, optimized workbook queries, and removed the null alertRuleTemplateName field. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

