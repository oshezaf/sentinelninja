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
| Solutions | **520** | 472 | 48 |
| With Connectors | **334** | 306 | 28 |
| With Content | **414** | 383 | 31 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **239** | 233 | 6 |
| Partner | **257** | 226 | 31 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **520** | **472** | **48** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 443 |
| Tables Used | 913 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **443** | 380 | 40 | 23 |
| Discovered 🔍 | **154** | 36 | 112 | 6 |
| **Total** | **597** | **416** | **152** | **29** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **255** | 155 | 96 | 4 |
| Partner | **321** | 251 | 48 | 22 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **3** | 0 | 0 | 3 |
| **Total** | **597** | **416** | **152** | **29** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [Azure Function](methods/azure-function.md) | **139** | 103 | 28 | 8 |
| [CCF](methods/ccf.md) | **134** | 128 | 0 | 6 |
| [MMA](methods/mma.md) | **109** | 14 | 89 | 6 |
| [AMA](methods/ama.md) | **58** | 25 | 33 | 0 |
| [REST Pull API](methods/rest-pull-api.md) | **57** | 52 | 1 | 4 |
| [CCF Push](methods/ccf-push.md) | **34** | 33 | 0 | 1 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **15** | 12 | 1 | 2 |
| [Unknown](methods/unknown.md) | **8** | 7 | 0 | 1 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 0 | 0 | 1 |
| **Total** | **597** | **416** | **152** | **29** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [Azure Function](methods/azure-function.md) | 15 / 22 / 0 / **37** | 87 / 6 / 8 / **101** | 1 / 0 / 0 / **1** | - |
| [CCF](methods/ccf.md) | 68 / 0 / 2 / **70** | 60 / 0 / 4 / **64** | - | - |
| [MMA](methods/mma.md) | 8 / 57 / 1 / **66** | 6 / 27 / 3 / **36** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| [AMA](methods/ama.md) | 10 / 16 / 0 / **26** | 11 / 14 / 0 / **25** | 4 / 3 / 0 / **7** | - |
| [REST Pull API](methods/rest-pull-api.md) | 2 / 0 / 1 / **3** | 45 / 1 / 3 / **49** | 5 / 0 / 0 / **5** | - |
| [CCF Push](methods/ccf-push.md) | - | 33 / 0 / 1 / **34** | - | - |
| [Native](methods/native.md) | 25 / 0 / 0 / **25** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [CCF (Legacy)](methods/ccf-legacy.md) | 3 / 1 / 0 / **4** | 9 / 0 / 2 / **11** | - | - |
| [Unknown](methods/unknown.md) | 7 / 0 / 0 / **7** | - | - | 0 / 0 / 1 / **1** |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 0 / 0 / 1 / **1** | - | - |
| **Total** | 155 / 96 / 4 / **255** | 251 / 48 / 22 / **321** | 10 / 8 / 0 / **18** | 0 / 0 / 3 / **3** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 134 |
| CCF Push Connectors | 34 |
| CCF Legacy Connectors | 15 |
| **Total CCF** | **183** |
| With config file | 163 |
| With capabilities detected | 178 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 105 |
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
| APIKey | 67 |
| OAuth2 | 24 |
| Basic | 12 |
| JwtToken | 5 |
| ServicePrincipal | 2 |
| *(none detected)* | 68 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 85 |
| POST | 19 |
| Nested | 5 |
| MvExpand | 1 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **76** | 72 | 0 | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **142** | 104 | 29 | 9 |
| [Undetermined](methods/undetermined.md) | **6** | 6 | 0 | 0 |
| **Total** | **224** | **182** | **29** | **13** |

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
| CLv1 Connectors | **161** |
| Active | 121 |
| Deprecated 🚫 | 29 |
| Unpublished ⚠️ | 11 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 73 |
| [REST Pull API](methods/rest-pull-api.md) | 48 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [CCF](methods/ccf.md) | 14 |
| [MMA](methods/mma.md) | 5 |
| [CCF (Legacy)](methods/ccf-legacy.md) | 4 |
| [AMA](methods/ama.md) | 2 |
| [CCF Push](methods/ccf-push.md) | 1 |
| **Total** | **161** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 3 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 118 |
| [Undetermined](methods/undetermined.md) | 1 |
| *(no API)* | 39 |
| **Total** | **161** |

## Tables

### Overview

**1938 tables** documented across all discovery sources. **1679 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 913 | 913 |
| Content | 244 | 826 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 614 | 800 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 24 | 63 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 0 | 0 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 91 | 761 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 0 | 117 |
| Schema | 52 | 1679 |
| **Total** | **1938** | |

*33 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 833 |
| DCR | 9 |
| KQL validation | 727 |
| Connector definition | 110 |
| **Total unique tables with schema** | **1679** |

### Custom Log V1 (CLv1) 🔶

**466** of 1938 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 442 |
| Internal | 18 |
| GCP | 5 |
| Various | 1 |
| **Total** | **466** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,518** | 4,665 | 129 | 205 | 439 | 1,285 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,178 | 1,976 | 32 | 82 | 158 | 12 |
| Hunting Queries | 2,313 | 1,173 | 13 | 18 | 84 | 1,043 |
| Playbooks | 865 | 597 | 41 | 65 | 190 | 37 |
| Workbooks | 562 | 366 | 9 | 25 | 0 | 187 |
| Parsers* | 526 | 492 | 34 | 15 | 0 | 0 |
| Watchlists | 49 | 43 | 0 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

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
| **Source Parser Pairs*** | 89 |
| **Union Parser Pairs*** | 15 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 91 |
| **Source Parser Pairs*** | 89 |
| **Schemas Covered** | 11 |
| **Tables Used** | 76 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| NetworkSession | 32 |
| Authentication | 29 |
| WebSession | 17 |
| AuditEvent | 16 |
| FileEvent | 14 |
| Dns | 13 |
| ProcessEvent | 10 |
| RegistryEvent | 7 |
| UserManagement | 7 |
| AlertEvent | 2 |
| DhcpEvent | 2 |
| **Total** | **91** |

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

*Generated by Solutions Analyzer - April 2026*
