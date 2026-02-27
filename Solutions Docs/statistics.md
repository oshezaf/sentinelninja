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
- [Dependencies](#dependencies)

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
| Solutions | **495** | 450 | 45 |
| With Connectors | **312** | 286 | 26 |
| With Content | **394** | 369 | 25 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **233** | 226 | 7 |
| Partner | **238** | 211 | 27 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **495** | **450** | **45** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 392 |
| Tables Used | 830 |

## Connectors

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **392** | 325 | 29 | 38 |
| Discovered 🔍 | **148** | 28 | 114 | 6 |
| **Total** | **540** | **353** | **143** | **44** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **244** | 152 | 88 | 4 |
| Partner | **275** | 191 | 47 | 37 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **3** | 0 | 0 | 3 |
| **Total** | **540** | **353** | **143** | **44** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [Azure Function](methods/azure-function.md) | **131** | 88 | 18 | 25 |
| [MMA](methods/mma.md) | **110** | 14 | 90 | 6 |
| [CCF](methods/ccf.md) | **106** | 100 | 0 | 6 |
| [AMA](methods/ama.md) | **59** | 25 | 34 | 0 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **43** | 39 | 0 | 4 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [CCF (Legacy)](methods/ccf-legacy.md) | **16** | 14 | 1 | 1 |
| [REST API](methods/rest-api.md) | **15** | 14 | 0 | 1 |
| [CCF Push](methods/ccf-push.md) | **11** | 11 | 0 | 0 |
| [Unknown](methods/unknown.md) | **7** | 6 | 0 | 1 |
| **Total** | **540** | **353** | **143** | **44** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [Azure Function](methods/azure-function.md) | 22 / 14 / 0 / **36** | 65 / 4 / 25 / **94** | 1 / 0 / 0 / **1** | - |
| [MMA](methods/mma.md) | 8 / 57 / 1 / **66** | 6 / 28 / 3 / **37** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| [CCF](methods/ccf.md) | 59 / 0 / 2 / **61** | 41 / 0 / 4 / **45** | - | - |
| [AMA](methods/ama.md) | 10 / 16 / 0 / **26** | 11 / 15 / 0 / **26** | 4 / 3 / 0 / **7** | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | 1 / 0 / 1 / **2** | 34 / 0 / 3 / **37** | 4 / 0 / 0 / **4** | - |
| [Native](methods/native.md) | 25 / 0 / 0 / **25** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [CCF (Legacy)](methods/ccf-legacy.md) | 3 / 1 / 0 / **4** | 11 / 0 / 1 / **12** | - | - |
| [REST API](methods/rest-api.md) | 1 / 0 / 0 / **1** | 12 / 0 / 1 / **13** | 1 / 0 / 0 / **1** | - |
| [CCF Push](methods/ccf-push.md) | - | 11 / 0 / 0 / **11** | - | - |
| [Unknown](methods/unknown.md) | 6 / 0 / 0 / **6** | - | - | 0 / 0 / 1 / **1** |
| **Total** | 152 / 88 / 4 / **244** | 191 / 47 / 37 / **275** | 10 / 8 / 0 / **18** | 0 / 0 / 3 / **3** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 106 |
| CCF Push Connectors | 11 |
| CCF Legacy Connectors | 16 |
| **Total CCF** | **133** |
| With config file | 117 |
| With capabilities detected | 133 |

**Connector Kind** (non-default kinds; REST API polling is the default):

| Kind | Count |
|:-----|------:|
| REST API Polling *(default)* | 87 |
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
| [Log Ingestion API](methods/log-ingestion-api.md) | **161** | 133 | 1 | 27 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **144** | 116 | 18 | 10 |
| [Both](methods/both.md) | **11** | 11 | 0 | 0 |
| **Total** | **316** | **260** | **19** | **37** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Both](methods/both.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 28 | 89 | 11 | **128** |
| [CCF](methods/ccf.md) | 106 | - | - | **106** |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 42 | - | **42** |
| [CCF (Legacy)](methods/ccf-legacy.md) | 16 | - | - | **16** |
| [REST API](methods/rest-api.md) | - | 13 | - | **13** |
| [CCF Push](methods/ccf-push.md) | 11 | - | - | **11** |
| **Total** | **161** | **144** | **11** | **316** |

## Tables

### Overview

**2024 tables** documented across all discovery sources. **1780 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 830 | 830 |
| Content | 220 | 757 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 617 | 781 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 26 | 61 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 12 | 478 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 78 | 702 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 1 | 51 |
| Schema | 240 | 1780 |
| **Total** | **2024** | |

*31 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 811 |
| DCR | 151 |
| KQL validation | 837 |
| **Total unique tables with schema** | **1780** |

## Content

### Content Items Summary

| Metric | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|-------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,606** | 4,748 | 148 | 437 | 1,273 |

### Content Items by Type

| Type | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|-------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,369 | 2,131 | 68 | 158 | 12 |
| Hunting Queries | 2,292 | 1,165 | 9 | 84 | 1,034 |
| Playbooks | 820 | 557 | 39 | 188 | 36 |
| Workbooks | 538 | 333 | 20 | 0 | 185 |
| Parsers* | 514 | 502 | 12 | 0 | 0 |
| Watchlists | 48 | 42 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 7 | 0 |

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
| **Tables Used** | 73 |

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

## Dependencies

### Overview

| Metric | Total | Explicit (required) | ASIM (optional) |
|:-------|------:|--------------------:|----------------:|
| Dependency records | **876** | 239 | 637 |
| Solutions with dependencies | **122** | 109 | 25 |
| Unique dependency targets | **57** | 42 | 31 |

### ASIM Dependencies by Schema

| ASIM Schema | Solutions Using | Solutions Providing Data |
|:------------|----------------:|------------------------:|
| AuditEvent | 1 | 16 |
| Dns | 7 | 15 |
| FileEvent | 7 | 8 |
| NetworkSession | 15 | 19 |
| ProcessEvent | 5 | 8 |
| RegistryEvent | 3 | 9 |
| WebSession | 12 | 9 |
| **Total unique** | **25** | **31** |

### Most Depended-Upon Solutions

| Solution | Depended On By |
|:---------|---------------:|
| [Common Event Format](solutions/common-event-format.md) | 83 |
| [Syslog](solutions/syslog.md) | 66 |
| [CustomLogsAma](solutions/customlogsama.md) | 49 |
| [Windows Forwarded Events](solutions/windows-forwarded-events.md) | 43 |
| [CrowdStrike Falcon Endpoint Protection](solutions/crowdstrike-falcon-endpoint-protection.md) | 38 |
| [MimecastTIRegional](solutions/mimecasttiregional.md) | 38 |
| [SentinelOne](solutions/sentinelone.md) | 38 |
| [Vectra AI Stream](solutions/vectra-ai-stream.md) | 37 |
| [Windows Security Events](solutions/windows-security-events.md) | 36 |
| [VirtualMetric DataStream](solutions/virtualmetric-datastream.md) | 35 |
| [VMware Carbon Black Cloud](solutions/vmware-carbon-black-cloud.md) | 31 |
| [CiscoMeraki](solutions/ciscomeraki.md) | 30 |
| [Microsoft Exchange Security - Exchange On-Premises](solutions/microsoft-exchange-security-exchange-on-premises.md) | 30 |
| [Cisco Meraki Events via REST API](solutions/cisco-meraki-events-via-rest-api.md) | 28 |
| [Corelight](solutions/corelight.md) | 25 |

---

*Generated by Solutions Analyzer - February 2026*
