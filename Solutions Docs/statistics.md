# Microsoft Sentinel Documentation Statistics

This page provides comprehensive statistics across all Microsoft Sentinel solutions, connectors, tables, content items, and parsers.

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · **📊**

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
| Solutions | **526** | 472 | 54 |
| With Connectors | **335** | 305 | 30 |
| With Content | **418** | 383 | 35 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **239** | 233 | 6 |
| Partner | **263** | 226 | 37 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **526** | **472** | **54** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 459 |
| Tables Used | 931 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **459** | 380 | 39 | 40 |
| Discovered 🔍 | **154** | 36 | 112 | 6 |
| **Total** | **613** | **416** | **151** | **46** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **255** | 156 | 95 | 4 |
| Partner | **337** | 250 | 48 | 39 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **3** | 0 | 0 | 3 |
| **Total** | **613** | **416** | **151** | **46** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [CCF](methods/ccf.md) | **150** | 127 | 0 | 23 |
| [Azure Function](methods/azure-function.md) | **139** | 104 | 27 | 8 |
| [MMA](methods/mma.md) | **109** | 14 | 89 | 6 |
| [AMA](methods/ama.md) | **58** | 25 | 33 | 0 |
| [REST Pull API](methods/rest-pull-api.md) | **57** | 52 | 1 | 4 |
| [CCF Push](methods/ccf-push.md) | **34** | 33 | 0 | 1 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **15** | 12 | 1 | 2 |
| [Unknown](methods/unknown.md) | **8** | 7 | 0 | 1 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 0 | 0 | 1 |
| **Total** | **613** | **416** | **151** | **46** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [CCF](methods/ccf.md) | 68 / 0 / 2 / **70** | 59 / 0 / 21 / **80** | - | - |
| [Azure Function](methods/azure-function.md) | 16 / 21 / 0 / **37** | 87 / 6 / 8 / **101** | 1 / 0 / 0 / **1** | - |
| [MMA](methods/mma.md) | 8 / 57 / 1 / **66** | 6 / 27 / 3 / **36** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| [AMA](methods/ama.md) | 10 / 16 / 0 / **26** | 11 / 14 / 0 / **25** | 4 / 3 / 0 / **7** | - |
| [REST Pull API](methods/rest-pull-api.md) | 2 / 0 / 1 / **3** | 45 / 1 / 3 / **49** | 5 / 0 / 0 / **5** | - |
| [CCF Push](methods/ccf-push.md) | - | 33 / 0 / 1 / **34** | - | - |
| [Native](methods/native.md) | 25 / 0 / 0 / **25** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [CCF (Legacy)](methods/ccf-legacy.md) | 3 / 1 / 0 / **4** | 9 / 0 / 2 / **11** | - | - |
| [Unknown](methods/unknown.md) | 7 / 0 / 0 / **7** | - | - | 0 / 0 / 1 / **1** |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 0 / 0 / 1 / **1** | - | - |
| **Total** | 156 / 95 / 4 / **255** | 250 / 48 / 39 / **337** | 10 / 8 / 0 / **18** | 0 / 0 / 3 / **3** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 150 |
| CCF Push Connectors | 34 |
| CCF Legacy Connectors | 15 |
| **Total CCF** | **199** |
| With config file | 179 |
| With capabilities detected | 194 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 121 |
| Push | 34 |
| GCP | 16 |
| AmazonWebServicesS3 | 13 |
| AliCloudSlsV1 | 2 |
| StorageAccountBlobContainer | 2 |
| OCI | 2 |
| Oracle | 2 |
| PurviewAudit | 1 |
| WebSocket | 1 |

**Authentication Methods:**

| Auth Type | Count |
|:----------|------:|
| APIKey | 66 |
| OAuth2 | 24 |
| JwtToken | 22 |
| Basic | 12 |
| ServicePrincipal | 2 |
| *(none detected)* | 68 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 102 |
| POST | 18 |
| Nested | 5 |
| MvExpand | 1 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **76** | 72 | 0 | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **142** | 105 | 28 | 9 |
| [Undetermined](methods/undetermined.md) | **6** | 6 | 0 | 0 |
| **Total** | **224** | **183** | **28** | **13** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 42 | 87 | 6 | **135** |
| [REST Pull API](methods/rest-pull-api.md) | - | 55 | - | **55** |
| [CCF Push](methods/ccf-push.md) | 34 | - | - | **34** |
| **Total** | **76** | **142** | **6** | **224** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **163** |
| Active | 123 |
| Deprecated 🚫 | 29 |
| Unpublished ⚠️ | 11 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 73 |
| [REST Pull API](methods/rest-pull-api.md) | 48 |
| [CCF](methods/ccf.md) | 15 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [MMA](methods/mma.md) | 5 |
| [CCF (Legacy)](methods/ccf-legacy.md) | 4 |
| [CCF Push](methods/ccf-push.md) | 2 |
| [AMA](methods/ama.md) | 2 |
| **Total** | **163** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 118 |
| [Undetermined](methods/undetermined.md) | 1 |
| *(no API)* | 40 |
| **Total** | **163** |

## Tables

### Overview

**1958 tables** documented across all discovery sources. **1682 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 931 | 931 |
| Content | 213 | 784 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 639 | 806 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 28 | 63 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 0 | 0 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 90 | 761 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 0 | 117 |
| Schema | 57 | 1682 |
| **Total** | **1958** | |

*33 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 833 |
| DCR | 9 |
| KQL validation | 729 |
| Connector definition | 111 |
| **Total unique tables with schema** | **1682** |

### Custom Log V1 (CLv1) 🔶

**471** of 1958 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 446 |
| Internal | 19 |
| GCP | 5 |
| Various | 1 |
| **Total** | **471** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,531** | 4,674 | 131 | 213 | 439 | 1,287 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,181 | 1,979 | 32 | 85 | 158 | 12 |
| Hunting Queries | 2,317 | 1,173 | 15 | 18 | 84 | 1,045 |
| Playbooks | 870 | 602 | 41 | 70 | 190 | 37 |
| Workbooks | 563 | 367 | 9 | 25 | 0 | 187 |
| Parsers* | 526 | 492 | 34 | 15 | 0 | 0 |
| Watchlists | 49 | 43 | 0 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

### Playbook Logic App Connectors

Connectors and built-in actions referenced by playbooks. Managed/custom rows come from `Microsoft.Web/connections` resources; built-in rows come from walking `definition.actions` for `Http`, `Function`, `Workflow`, and `ApiManagement` types. Multiple connection or action instances of the same type within a playbook are aggregated.

| Metric | Count |
|:-------|------:|
| Playbooks using Logic App connectors / built-ins | 870 |
| Total connector / built-in usages (rows) | 2,329 |
| Unique managed/custom connector types | 148 |
| &nbsp;&nbsp;Managed (Microsoft-published) | 96 |
| &nbsp;&nbsp;Custom | 56 |
| Unique built-in action types | 3 |
| Total built-in action invocations | 1,269 |

**Top managed connectors by playbook usage**

| Connector | Playbooks |
|:----------|----------:|
| `azuresentinel` | 683 |
| `keyvault` | 151 |
| `azuremonitorlogs` | 107 |
| `teams` | 104 |
| `azureloganalyticsdatacollector` | 101 |
| `office365` | 71 |
| `microsoftsentinel` | 34 |
| `azuread` | 29 |
| `wdatp` | 29 |
| `riskiqpassivetotal` | 27 |
| `hyasinsight` | 25 |
| `virustotal` | 16 |
| `azureblob` | 15 |
| `azuresentinel_1` | 14 |
| `recordedfuturev2` | 14 |

**Built-in actions by playbook usage**

| Action type | Playbooks | Action invocations |
|:------------|----------:|-------------------:|
| `http` | 374 | 1011 |
| `workflow` | 63 | 123 |
| `function` | 54 | 135 |

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 35 |
| Solution Parsers (in Solution JSON) | 493 |
| Discovered Parsers 🔍 | 36 |
| **Total Parsers** | **564** |
| Solutions with Parsers | 164 |

## ASIM Parsers

| Metric | Count |
|:-------|------:|
| **Schemas** | 13 |
| **Source Parser Pairs*** | 90 |
| **Union Parser Pairs*** | 15 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 92 |
| **Source Parser Pairs*** | 90 |
| **Schemas Covered** | 11 |
| **Tables Used** | 76 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| NetworkSession | 32 |
| Authentication | 30 |
| WebSession | 17 |
| AuditEvent | 16 |
| FileEvent | 14 |
| Dns | 13 |
| ProcessEvent | 10 |
| RegistryEvent | 7 |
| UserManagement | 7 |
| AlertEvent | 2 |
| DhcpEvent | 2 |
| **Total** | **92** |

## Pre-requisites

### Overview

| Metric | Total | Explicit (required) | ASIM (optional) |
|:-------|------:|--------------------:|----------------:|
| Dependency records | **238** | 238 | 0 |
| Solutions with dependencies | **108** | 108 | 0 |
| Unique dependency targets | **41** | 41 | 0 |

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

*Generated by Solutions Analyzer - May 2026*
