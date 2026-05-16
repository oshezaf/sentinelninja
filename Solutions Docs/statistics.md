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
| Solutions | **522** | 468 | 54 |
| With Connectors | **331** | 301 | 30 |
| With Content | **414** | 379 | 35 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **238** | 232 | 6 |
| Partner | **260** | 223 | 37 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **522** | **468** | **54** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 458 |
| Tables Used | 909 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **458** | 379 | 39 | 40 |
| Discovered 🔍 | **154** | 36 | 112 | 6 |
| **Total** | **612** | **415** | **151** | **46** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **255** | 156 | 95 | 4 |
| Partner | **336** | 249 | 48 | 39 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **3** | 0 | 0 | 3 |
| **Total** | **612** | **415** | **151** | **46** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [AMA](methods/ama.md) | **166** | 38 | 122 | 6 |
| [CCF](methods/ccf.md) | **157** | 131 | 1 | 25 |
| [Azure Function](methods/azure-function.md) | **125** | 94 | 26 | 5 |
| [REST Push API](methods/rest-push-api.md) | **55** | 50 | 1 | 4 |
| [CCF Push](methods/ccf-push.md) | **34** | 33 | 0 | 1 |
| [Native](methods/native.md) | **18** | 18 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [Unknown](methods/unknown.md) | **15** | 14 | 0 | 1 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | **14** | 10 | 1 | 3 |
| [CCF\|Azure Function](methods/ccf-azure-function.md) | **8** | 8 | 0 | 0 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 0 | 0 | 1 |
| [Azure Function (TI Upload API)\|REST Push API](methods/azure-function-ti-upload-api-rest-push-api.md) | **1** | 1 | 0 | 0 |
| [MMA](methods/mma.md) | **1** | 1 | 0 | 0 |
| **Total** | **612** | **415** | **151** | **46** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [AMA](methods/ama.md) | 17 / 73 / 1 / **91** | 17 / 41 / 3 / **61** | 4 / 8 / 0 / **12** | 0 / 0 / 2 / **2** |
| [CCF](methods/ccf.md) | 66 / 1 / 2 / **69** | 65 / 0 / 23 / **88** | - | - |
| [Azure Function](methods/azure-function.md) | 15 / 21 / 0 / **36** | 78 / 5 / 5 / **88** | 1 / 0 / 0 / **1** | - |
| [REST Push API](methods/rest-push-api.md) | 2 / 0 / 1 / **3** | 44 / 1 / 3 / **48** | 4 / 0 / 0 / **4** | - |
| [CCF Push](methods/ccf-push.md) | - | 33 / 0 / 1 / **34** | - | - |
| [Native](methods/native.md) | 18 / 0 / 0 / **18** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [Unknown](methods/unknown.md) | 14 / 0 / 0 / **14** | - | - | 0 / 0 / 1 / **1** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 / 0 / 0 / **1** | 9 / 1 / 3 / **13** | - | - |
| [CCF\|Azure Function](methods/ccf-azure-function.md) | 5 / 0 / 0 / **5** | 3 / 0 / 0 / **3** | - | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 0 / 0 / 1 / **1** | - | - |
| [Azure Function (TI Upload API)\|REST Push API](methods/azure-function-ti-upload-api-rest-push-api.md) | - | - | 1 / 0 / 0 / **1** | - |
| [MMA](methods/mma.md) | 1 / 0 / 0 / **1** | - | - | - |
| **Total** | 156 / 95 / 4 / **255** | 249 / 48 / 39 / **336** | 10 / 8 / 0 / **18** | 0 / 0 / 3 / **3** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 157 |
| CCF Push Connectors | 34 |
| CCF Legacy Connectors | 0 |
| **Total CCF** | **191** |
| With config file | 171 |
| With capabilities detected | 186 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 118 |
| Push | 34 |
| GCP | 16 |
| AmazonWebServicesS3 | 12 |
| AliCloudSlsV1 | 2 |
| StorageAccountBlobContainer | 2 |
| PurviewAudit | 1 |
| WebSocket | 1 |

**Authentication Methods:**

| Auth Type | Count |
|:----------|------:|
| APIKey | 65 |
| JwtToken | 22 |
| OAuth2 | 21 |
| Basic | 11 |
| ServicePrincipal | 2 |
| *(none detected)* | 65 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 98 |
| POST | 16 |
| Nested | 3 |
| MvExpand | 1 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **84** | 80 | 0 | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **130** | 97 | 27 | 6 |
| [Undetermined](methods/undetermined.md) | **3** | 3 | 0 | 0 |
| **Total** | **237** | **196** | **28** | **13** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 42 | 75 | 3 | **120** |
| [REST Push API](methods/rest-push-api.md) | - | 55 | - | **55** |
| [CCF Push](methods/ccf-push.md) | 34 | - | - | **34** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | - | - | - | **0** |
| [CCF\|Azure Function](methods/ccf-azure-function.md) | 8 | - | - | **8** |
| [Azure Function (TI Upload API)\|REST Push API](methods/azure-function-ti-upload-api-rest-push-api.md) | - | - | - | **0** |
| **Total** | **84** | **130** | **3** | **217** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **158** |
| Active | 119 |
| Deprecated 🚫 | 29 |
| Unpublished ⚠️ | 10 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 67 |
| [REST Push API](methods/rest-push-api.md) | 48 |
| [CCF](methods/ccf.md) | 17 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [AMA](methods/ama.md) | 7 |
| [CCF Push](methods/ccf-push.md) | 2 |
| [CCF\|Azure Function](methods/ccf-azure-function.md) | 2 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 |
| **Total** | **158** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 114 |
| *(no API)* | 38 |
| **Total** | **158** |

## Tables

### Overview

**1958 tables** documented across all discovery sources. **1688 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 909 | 909 |
| Content | 233 | 784 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 639 | 806 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 28 | 63 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 0 | 0 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 90 | 761 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 0 | 117 |
| Schema | 59 | 1688 |
| **Total** | **1958** | |

*33 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 839 |
| DCR | 9 |
| KQL validation | 729 |
| Connector definition | 111 |
| **Total unique tables with schema** | **1688** |

### Custom Log V1 (CLv1) 🔶

**468** of 1958 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 443 |
| Internal | 19 |
| GCP | 5 |
| Various | 1 |
| **Total** | **468** |

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
| [`azuresentinel`](logic-apps/managed-azuresentinel.md) | 683 |
| [`keyvault`](logic-apps/managed-keyvault.md) | 151 |
| [`azuremonitorlogs`](logic-apps/managed-azuremonitorlogs.md) | 107 |
| [`teams`](logic-apps/managed-teams.md) | 104 |
| [`azureloganalyticsdatacollector`](logic-apps/managed-azureloganalyticsdatacollector.md) | 101 |
| [`office365`](logic-apps/managed-office365.md) | 71 |
| [`microsoftsentinel`](logic-apps/managed-microsoftsentinel.md) | 34 |
| [`azuread`](logic-apps/managed-azuread.md) | 29 |
| [`wdatp`](logic-apps/managed-wdatp.md) | 29 |
| [`riskiqpassivetotal`](logic-apps/managed-riskiqpassivetotal.md) | 27 |
| [`hyasinsight`](logic-apps/managed-hyasinsight.md) | 25 |
| [`virustotal`](logic-apps/managed-virustotal.md) | 16 |
| [`azureblob`](logic-apps/managed-azureblob.md) | 15 |
| [`azuresentinel_1`](logic-apps/managed-azuresentinel-1.md) | 14 |
| [`recordedfuturev2`](logic-apps/managed-recordedfuturev2.md) | 14 |

**Built-in actions by playbook usage**

| Action type | Playbooks | Action invocations |
|:------------|----------:|-------------------:|
| [`http`](logic-apps/builtin-http.md) | 374 | 1011 |
| [`workflow`](logic-apps/builtin-workflow.md) | 63 | 123 |
| [`function`](logic-apps/builtin-function.md) | 54 | 135 |

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
