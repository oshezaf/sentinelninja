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
| Solutions | **495** | 458 | 37 |
| With Connectors | **312** | 292 | 20 |
| With Content | **394** | 373 | 21 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **233** | 228 | 5 |
| Partner | **238** | 217 | 21 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **495** | **458** | **37** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 392 |
| Tables Used | 829 |

## Connectors

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **392** | 345 | 31 | 16 |
| Discovered 🔍 | **148** | 28 | 114 | 6 |
| **Total** | **540** | **373** | **145** | **22** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **244** | 153 | 88 | 3 |
| Partner | **275** | 210 | 49 | 16 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **3** | 0 | 0 | 3 |
| **Total** | **540** | **373** | **145** | **22** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [Azure Function](methods/azure-function.md) | **132** | 105 | 20 | 7 |
| [MMA](methods/mma.md) | **110** | 14 | 90 | 6 |
| [CCF](methods/ccf.md) | **106** | 102 | 0 | 4 |
| [AMA](methods/ama.md) | **59** | 25 | 34 | 0 |
| [REST Pull API](methods/rest-pull-api.md) | **57** | 53 | 0 | 4 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **16** | 15 | 1 | 0 |
| [CCF Push](methods/ccf-push.md) | **11** | 11 | 0 | 0 |
| [Unknown](methods/unknown.md) | **7** | 6 | 0 | 1 |
| **Total** | **540** | **373** | **145** | **22** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [Azure Function](methods/azure-function.md) | 22 / 14 / 0 / **36** | 82 / 6 / 7 / **95** | 1 / 0 / 0 / **1** | - |
| [MMA](methods/mma.md) | 8 / 57 / 1 / **66** | 6 / 28 / 3 / **37** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| [CCF](methods/ccf.md) | 60 / 0 / 1 / **61** | 42 / 0 / 3 / **45** | - | - |
| [AMA](methods/ama.md) | 10 / 16 / 0 / **26** | 11 / 15 / 0 / **26** | 4 / 3 / 0 / **7** | - |
| [REST Pull API](methods/rest-pull-api.md) | 2 / 0 / 1 / **3** | 46 / 0 / 3 / **49** | 5 / 0 / 0 / **5** | - |
| [Native](methods/native.md) | 25 / 0 / 0 / **25** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [CCF (Legacy)](methods/ccf-legacy.md) | 3 / 1 / 0 / **4** | 12 / 0 / 0 / **12** | - | - |
| [CCF Push](methods/ccf-push.md) | - | 11 / 0 / 0 / **11** | - | - |
| [Unknown](methods/unknown.md) | 6 / 0 / 0 / **6** | - | - | 0 / 0 / 1 / **1** |
| **Total** | 153 / 88 / 3 / **244** | 210 / 49 / 16 / **275** | 10 / 8 / 0 / **18** | 0 / 0 / 3 / **3** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 106 |
| CCF Push Connectors | 11 |
| CCF Legacy Connectors | 16 |
| **Total CCF** | **133** |
| With config file | 117 |
| With capabilities detected | 133 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 87 |
| GCP | 16 |
| AmazonWebServicesS3 | 11 |
| Push | 11 |
| OCI | 2 |
| Oracle | 2 |
| AliCloudSlsV1 | 1 |
| StorageAccountBlobContainer | 1 |
| PurviewAudit | 1 |
| WebSocket | 1 |

**Authentication Methods:**

| Auth Type | Count |
|:----------|------:|
| APIKey | 55 |
| OAuth2 | 21 |
| Basic | 11 |
| JwtToken | 3 |
| ServicePrincipal | 1 |
| *(none detected)* | 42 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 71 |
| POST | 15 |
| Nested | 3 |
| MvExpand | 1 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **46** | 44 | 0 | 2 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **144** | 116 | 20 | 8 |
| [Undetermined](methods/undetermined.md) | **4** | 4 | 0 | 0 |
| **Total** | **194** | **164** | **20** | **10** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 35 | 89 | 4 | **128** |
| [REST Pull API](methods/rest-pull-api.md) | - | 55 | - | **55** |
| [CCF Push](methods/ccf-push.md) | 11 | - | - | **11** |
| **Total** | **46** | **144** | **4** | **194** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **159** |
| Active | 130 |
| Deprecated 🚫 | 21 |
| Unpublished ⚠️ | 8 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 76 |
| [REST Pull API](methods/rest-pull-api.md) | 49 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [CCF](methods/ccf.md) | 10 |
| [MMA](methods/mma.md) | 5 |
| [CCF (Legacy)](methods/ccf-legacy.md) | 3 |
| [AMA](methods/ama.md) | 2 |
| **Total** | **159** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 3 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 122 |
| *(no API)* | 34 |
| **Total** | **159** |

## Tables

### Overview

**2060 tables** documented across all discovery sources. **1776 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 829 | 829 |
| Content | 224 | 769 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 607 | 786 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 24 | 63 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 35 | 522 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 96 | 761 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 0 | 117 |
| Schema | 245 | 1776 |
| **Total** | **2060** | |

*33 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 819 |
| DCR | 9 |
| KQL validation | 878 |
| Connector definition | 69 |
| **Total unique tables with schema** | **1776** |

### Custom Log V1 (CLv1) 🔶

**435** of 2060 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 415 |
| Internal | 14 |
| GCP | 5 |
| Various | 1 |
| **Total** | **435** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,606** | 4,538 | 358 | 140 | 437 | 1,273 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,369 | 1,931 | 268 | 66 | 158 | 12 |
| Hunting Queries | 2,292 | 1,160 | 14 | 7 | 84 | 1,034 |
| Playbooks | 820 | 556 | 40 | 39 | 188 | 36 |
| Workbooks | 538 | 343 | 10 | 17 | 0 | 185 |
| Parsers* | 514 | 488 | 26 | 11 | 0 | 0 |
| Watchlists | 48 | 42 | 0 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 35 |
| Solution Parsers (in Solution JSON) | 489 |
| Discovered Parsers 🔍 | 28 |
| **Total Parsers** | **552** |
| Solutions with Parsers | 158 |

## ASIM Parsers

| Metric | Count |
|:-------|------:|
| **Schemas** | 11 |
| **Source Parser Pairs*** | 82 |
| **Union Parser Pairs*** | 13 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 80 |
| **Source Parser Pairs*** | 82 |
| **Schemas Covered** | 11 |
| **Tables Used** | 70 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| NetworkSession | 31 |
| Authentication | 23 |
| WebSession | 16 |
| AuditEvent | 13 |
| Dns | 13 |
| FileEvent | 13 |
| ProcessEvent | 10 |
| RegistryEvent | 7 |
| UserManagement | 6 |
| AlertEvent | 2 |
| DhcpEvent | 2 |
| **Total** | **80** |

## Pre-requisites

### Overview

| Metric | Total | Explicit (required) | ASIM (optional) |
|:-------|------:|--------------------:|----------------:|
| Dependency records | **239** | 239 | 0 |
| Solutions with dependencies | **109** | 109 | 0 |
| Unique dependency targets | **42** | 42 | 0 |

### Most Depended-Upon Solutions

| Solution | Depended On By |
|:---------|---------------:|
| [Common Event Format](solutions/common-event-format.md) | 48 |
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
| [Zscaler Internet Access](solutions/zscaler-internet-access.md) | 6 |
| [Windows Server DNS](solutions/windows-server-dns.md) | 5 |
| [Azure Activity](solutions/azure-activity.md) | 5 |
| [Windows Security Events](solutions/windows-security-events.md) | 5 |

---

*Generated by Solutions Analyzer - April 2026*
