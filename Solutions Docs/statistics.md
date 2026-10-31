# Microsoft Sentinel Documentation Statistics

This page provides comprehensive statistics across all Microsoft Sentinel solutions, connectors, tables, content items, and parsers.

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [Logic Apps](logic-apps/logic-apps-index.md) · **📊**

---

## Table of Contents

- [Terminology](#terminology)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Tables](#tables)
- [Content](#content)
- [Parsers](#parsers)
- [ASIM Parsers](#asim-parsers)
- [ASIM Products](#asim-products)
- [Pre-requisites](#pre-requisites)

## Terminology

| Term | Description |
|:-----|:------------|
| **Published** | Available in Microsoft Sentinel Content Hub for installation |
| **Unpublished** ⚠️ | Present on GitHub but not available in Content Hub |
| **Active** | Published and not deprecated |
| **Deprecated** 🚫 | Marked as no longer maintained or replaced by newer solution |
| **Discovered** 🔍 | Found in solution folders but not listed in Solution JSON definitions |
| **In Solutions** | Listed in the Solution JSON definition file |
| **📦 Solution** | Content that is part of a published Content Hub package |
| **📄 Standalone** | GitHub content with metadata but not part of a Solution |
| **🔗 GitHub Only** | GitHub content without formal metadata |
| **Standalone Reference Tables** | Tables in Azure Monitor reference not used by any Sentinel solution |
| **Support Tier** | Support level: Microsoft, Partner, or Community |

## Solutions

### Availability

| Metric | Total | Published | Unpublished ⚠️ |
|:-------|------:|----------:|------------:|
| Solutions | **584** | 506 | 78 |
| With Connectors | **400** | 345 | 55 |
| With Content | **469** | 412 | 57 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **253** | 241 | 12 |
| Partner | **305** | 251 | 54 |
| Community | **16** | 11 | 5 |
| Unknown | **10** | 3 | 7 |
| **Total** | **584** | **506** | **78** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 582 |
| Tables Used | 1287 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **582** | 483 | 50 | 49 |
| Discovered 🔍 | **142** | 0 | 113 | 29 |
| **Total** | **724** | **483** | **163** | **78** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **275** | 165 | 97 | 13 |
| Partner | **418** | 303 | 58 | 57 |
| Community | **27** | 13 | 8 | 6 |
| Unknown | **4** | 2 | 0 | 2 |
| **Total** | **724** | **483** | **163** | **78** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [CCF](methods/ccf.md) | **251** | 218 | 5 | 28 |
| [AMA](methods/ama.md) | **168** | 37 | 122 | 9 |
| [Azure Function](methods/azure-function.md) | **130** | 77 | 33 | 20 |
| [CCF Push](methods/ccf-push.md) | **58** | 55 | 0 | 3 |
| [REST Pull API](methods/rest-pull-api.md) | **51** | 35 | 1 | 15 |
| [Native](methods/native.md) | **18** | 16 | 1 | 1 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | **15** | 12 | 1 | 2 |
| [Unknown](methods/unknown.md) | **12** | 12 | 0 | 0 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **2** | 2 | 0 | 0 |
| [Azure Function (TI Upload API)\|Unknown](methods/azure-function-ti-upload-api-unknown.md) | **1** | 1 | 0 | 0 |
| [MMA](methods/mma.md) | **1** | 1 | 0 | 0 |
| **Total** | **724** | **483** | **163** | **78** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [CCF](methods/ccf.md) | 83 / 1 / 6 / **90** | 135 / 4 / 17 / **156** | 0 / 0 / 5 / **5** | - |
| [AMA](methods/ama.md) | 16 / 73 / 2 / **91** | 17 / 41 / 5 / **63** | 4 / 8 / 0 / **12** | 0 / 0 / 2 / **2** |
| [Azure Function](methods/azure-function.md) | 13 / 22 / 2 / **37** | 63 / 11 / 17 / **91** | 1 / 0 / 1 / **2** | - |
| [CCF Push](methods/ccf-push.md) | 3 / 0 / 0 / **3** | 49 / 0 / 3 / **52** | 3 / 0 / 0 / **3** | - |
| [REST Pull API](methods/rest-pull-api.md) | 3 / 0 / 2 / **5** | 26 / 1 / 13 / **40** | 4 / 0 / 0 / **4** | 2 / 0 / 0 / **2** |
| [Native](methods/native.md) | 16 / 1 / 1 / **18** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 / 0 / 0 / **1** | 10 / 1 / 2 / **13** | 1 / 0 / 0 / **1** | - |
| [Unknown](methods/unknown.md) | 12 / 0 / 0 / **12** | - | - | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 2 / 0 / 0 / **2** | - | - |
| [Azure Function (TI Upload API)\|Unknown](methods/azure-function-ti-upload-api-unknown.md) | - | 1 / 0 / 0 / **1** | - | - |
| [MMA](methods/mma.md) | 1 / 0 / 0 / **1** | - | - | - |
| **Total** | 165 / 97 / 13 / **275** | 303 / 58 / 57 / **418** | 13 / 8 / 6 / **27** | 2 / 0 / 2 / **4** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 251 |
| CCF Push Connectors | 58 |
| CCF Legacy Connectors | 0 |
| **Total CCF** | **309** |
| With config file | 281 |
| With capabilities detected | 294 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 190 |
| Push | 58 |
| GCP | 16 |
| AmazonWebServicesS3 | 14 |
| StorageAccountBlobContainer | 4 |
| CiscoDuo | 3 |
| AliCloudSlsV1 | 2 |
| PurviewAudit | 2 |
| EdgeGrid | 1 |
| None | 1 |
| OCI | 1 |
| Oracle | 1 |
| WebSocket | 1 |

**Authentication Methods:**

| Auth Type | Count |
|:----------|------:|
| APIKey | 105 |
| OAuth2 | 43 |
| JwtToken | 28 |
| Basic | 18 |
| ServicePrincipal | 4 |
| *(none detected)* | 96 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 158 |
| POST | 31 |
| Nested | 20 |
| MvExpand | 3 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **117** | 110 | 0 | 7 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **120** | 58 | 34 | 28 |
| [Undetermined](methods/undetermined.md) | **3** | 1 | 0 | 2 |
| **Total** | **265** | **189** | **35** | **41** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 47 | 70 | 3 | **120** |
| [CCF Push](methods/ccf-push.md) | 58 | - | - | **58** |
| [REST Pull API](methods/rest-pull-api.md) | 1 | 50 | - | **51** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | - | - | - | **0** |
| [CCF](methods/ccf.md) | 11 | - | - | **11** |
| [Azure Function (TI Upload API)\|Unknown](methods/azure-function-ti-upload-api-unknown.md) | - | - | - | **0** |
| **Total** | **117** | **120** | **3** | **240** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **149** |
| Active | 83 |
| Deprecated 🚫 | 35 |
| Unpublished ⚠️ | 31 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 64 |
| [REST Pull API](methods/rest-pull-api.md) | 38 |
| [CCF](methods/ccf.md) | 17 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [CCF Push](methods/ccf-push.md) | 8 |
| [AMA](methods/ama.md) | 7 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 |
| **Total** | **149** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 10 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 99 |
| *(no API)* | 37 |
| **Total** | **149** |

## Tables

### Overview

**2493 tables** documented across all discovery sources. **2327 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 1287 | 1287 |
| Content | 284 | 979 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 729 | 941 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 0 | 0 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 0 | 0 |
| [Azure Monitor Logs Table Feature Support](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features) | 0 | 941 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features) | 0 | 109 |
| Schema | 193 | 2327 |
| **Total** | **2493** | |

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 941 |
| DCR | 31 |
| KQL validation | 1098 |
| Connector definition | 257 |
| **Total unique tables with schema** | **2327** |

### Custom Log V1 (CLv1) 🔶

**354** of 2493 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 326 |
| Internal | 22 |
| GCP | 5 |
| Various | 1 |
| **Total** | **354** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **7,650** | 5,632 | 140 | 501 | 515 | 1,363 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,538 | 2,343 | 23 | 208 | 160 | 12 |
| Hunting Queries | 2,686 | 1,397 | 26 | 79 | 158 | 1,105 |
| Playbooks | 997 | 718 | 52 | 127 | 190 | 37 |
| Workbooks | 637 | 420 | 14 | 44 | 0 | 203 |
| Parsers* | 706 | 681 | 25 | 35 | 0 | 0 |
| Watchlists | 59 | 53 | 0 | 8 | 0 | 6 |
| Summary Rules | 27 | 20 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

### Playbook Logic App Connectors

Connectors and built-in actions referenced by playbooks. Managed/custom rows come from `Microsoft.Web/connections` resources; built-in rows come from walking `definition.actions` for `Http`, `Function`, `Workflow`, and `ApiManagement` types. Multiple connection or action instances of the same type within a playbook are aggregated.

| Metric | Count |
|:-------|------:|
| Playbooks using Logic App connectors / built-ins | 997 |
| Total connector / built-in usages (rows) | 2,540 |
| Unique managed/custom connector types | 149 |
| &nbsp;&nbsp;Managed (Microsoft-published) | 97 |
| &nbsp;&nbsp;Custom | 56 |
| Unique built-in action types | 3 |
| Total built-in action invocations | 1,751 |

**Top managed connectors by playbook usage**

| Connector | Playbooks |
|:----------|----------:|
| [`azuresentinel`](logic-apps/managed-azuresentinel.md) | 757 |
| [`keyvault`](logic-apps/managed-keyvault.md) | 171 |
| [`teams`](logic-apps/managed-teams.md) | 103 |
| [`azuremonitorlogs`](logic-apps/managed-azuremonitorlogs.md) | 92 |
| [`azureloganalyticsdatacollector`](logic-apps/managed-azureloganalyticsdatacollector.md) | 74 |
| [`office365`](logic-apps/managed-office365.md) | 73 |
| [`microsoftsentinel`](logic-apps/managed-microsoftsentinel.md) | 35 |
| [`wdatp`](logic-apps/managed-wdatp.md) | 32 |
| [`azuread`](logic-apps/managed-azuread.md) | 29 |
| [`riskiqpassivetotal`](logic-apps/managed-riskiqpassivetotal.md) | 27 |
| [`hyasinsight`](logic-apps/managed-hyasinsight.md) | 25 |
| [`virustotal`](logic-apps/managed-virustotal.md) | 24 |
| [`azureblob`](logic-apps/managed-azureblob.md) | 21 |
| [`azuresentinel_1`](logic-apps/managed-azuresentinel-1.md) | 14 |
| [`recordedfuturev2`](logic-apps/managed-recordedfuturev2.md) | 14 |

**Built-in actions by playbook usage**

| Action type | Playbooks | Action invocations |
|:------------|----------:|-------------------:|
| [`http`](logic-apps/builtin-http.md) | 504 | 1485 |
| [`workflow`](logic-apps/builtin-workflow.md) | 66 | 122 |
| [`function`](logic-apps/builtin-function.md) | 61 | 144 |

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 36 |
| Solution Parsers (in Solution JSON) | 682 |
| Discovered Parsers 🔍 | 27 |
| **Total Parsers** | **745** |
| Solutions with Parsers | 187 |

## ASIM Parsers

| Metric | Count |
|:-------|------:|
| **Schemas** | 14 |
| **Source Parser Pairs*** | 115 |
| **Union Parser Pairs*** | 8 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 125 |
| **Source Parser Pairs*** | 115 |
| **Schemas Covered** | 13 |
| **Tables Used** | 122 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| Authentication | 43 |
| NetworkSession | 37 |
| WebSession | 21 |
| AuditEvent | 20 |
| Dns | 16 |
| FileEvent | 15 |
| AlertEvent | 12 |
| ProcessEvent | 11 |
| UserManagement | 9 |
| RegistryEvent | 8 |
| EmailEvent | 4 |
| DhcpEvent | 2 |
| AgentEvent | 1 |
| **Total** | **125** |

## Pre-requisites

### Overview

| Metric | Total | Explicit (required) | ASIM (optional) |
|:-------|------:|--------------------:|----------------:|
| Dependency records | **238** | 238 | 0 |
| Solutions with dependencies | **108** | 108 | 0 |
| Unique dependency targets | **40** | 40 | 0 |

### Most Depended-Upon Solutions

| Solution | Depended On By |
|:---------|---------------:|
| [Common Event Format](solutions/common-event-format.md) | 47 |
| [Syslog](solutions/syslog.md) | 31 |
| [CustomLogsAma](solutions/customlogsama.md) | 14 |
| [Microsoft Entra ID](solutions/microsoft-entra-id.md) | 10 |
| [Microsoft Defender XDR](solutions/microsoft-defender-xdr.md) | 10 |
| [Microsoft 365](solutions/microsoft-365.md) | 9 |
| [PaloAlto-PAN-OS](solutions/paloalto-pan-os.md) | 8 |
| [Amazon Web Services](solutions/amazon-web-services.md) | 8 |
| [CiscoASA](solutions/ciscoasa.md) | 6 |
| [Azure Firewall](solutions/azure-firewall.md) | 6 |
| [Check Point](solutions/check-point.md) | 6 |
| [Windows Server DNS](solutions/windows-server-dns.md) | 5 |
| [Azure Activity](solutions/azure-activity.md) | 5 |
| [Windows Security Events](solutions/windows-security-events.md) | 5 |
| [Windows Forwarded Events](solutions/windows-forwarded-events.md) | 5 |

---

*Generated by Solutions Analyzer - October 2026*
