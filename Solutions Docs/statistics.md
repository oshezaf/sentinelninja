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
| Solutions | **531** | 445 | 86 |
| With Connectors | **346** | 288 | 58 |
| With Content | **418** | 357 | 61 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **243** | 222 | 21 |
| Partner | **259** | 209 | 50 |
| Community | **11** | 11 | 0 |
| Unknown | **18** | 3 | 15 |
| **Total** | **531** | **445** | **86** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 496 |
| Tables Used | 965 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **496** | 404 | 42 | 50 |
| Discovered 🔍 | **130** | 0 | 109 | 21 |
| **Total** | **626** | **404** | **151** | **71** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **264** | 157 | 95 | 12 |
| Partner | **340** | 235 | 48 | 57 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **4** | 2 | 0 | 2 |
| **Total** | **626** | **404** | **151** | **71** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [CCF](methods/ccf.md) | **177** | 147 | 1 | 29 |
| [AMA](methods/ama.md) | **166** | 36 | 122 | 8 |
| [Azure Function](methods/azure-function.md) | **125** | 85 | 26 | 14 |
| [REST Pull API](methods/rest-pull-api.md) | **50** | 35 | 1 | 14 |
| [CCF Push](methods/ccf-push.md) | **39** | 37 | 0 | 2 |
| [Native](methods/native.md) | **18** | 17 | 0 | 1 |
| [Unknown](methods/unknown.md) | **17** | 17 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | **15** | 11 | 1 | 3 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 1 | 0 | 0 |
| [MMA](methods/mma.md) | **1** | 1 | 0 | 0 |
| **Total** | **626** | **404** | **151** | **71** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [CCF](methods/ccf.md) | 74 / 1 / 5 / **80** | 73 / 0 / 24 / **97** | - | - |
| [AMA](methods/ama.md) | 16 / 73 / 2 / **91** | 16 / 41 / 4 / **61** | 4 / 8 / 0 / **12** | 0 / 0 / 2 / **2** |
| [Azure Function](methods/azure-function.md) | 15 / 21 / 2 / **38** | 69 / 5 / 12 / **86** | 1 / 0 / 0 / **1** | - |
| [REST Pull API](methods/rest-pull-api.md) | 1 / 0 / 2 / **3** | 30 / 1 / 12 / **43** | 4 / 0 / 0 / **4** | - |
| [CCF Push](methods/ccf-push.md) | - | 37 / 0 / 2 / **39** | - | - |
| [Native](methods/native.md) | 17 / 0 / 1 / **18** | - | - | - |
| [Unknown](methods/unknown.md) | 15 / 0 / 0 / **15** | - | - | 2 / 0 / 0 / **2** |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 / 0 / 0 / **1** | 9 / 1 / 3 / **13** | 1 / 0 / 0 / **1** | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 1 / 0 / 0 / **1** | - | - |
| [MMA](methods/mma.md) | 1 / 0 / 0 / **1** | - | - | - |
| **Total** | 157 / 95 / 12 / **264** | 235 / 48 / 57 / **340** | 10 / 8 / 0 / **18** | 2 / 0 / 2 / **4** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 177 |
| CCF Push Connectors | 39 |
| CCF Legacy Connectors | 0 |
| **Total CCF** | **216** |
| With config file | 195 |
| With capabilities detected | 209 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 132 |
| Push | 38 |
| GCP | 16 |
| AmazonWebServicesS3 | 14 |
| StorageAccountBlobContainer | 3 |
| AliCloudSlsV1 | 2 |
| PurviewAudit | 1 |
| OCI | 1 |
| Oracle | 1 |
| WebSocket | 1 |

**Authentication Methods:**

| Auth Type | Count |
|:----------|------:|
| APIKey | 68 |
| OAuth2 | 30 |
| JwtToken | 22 |
| Basic | 14 |
| ServicePrincipal | 3 |
| *(none detected)* | 72 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 110 |
| POST | 21 |
| Nested | 9 |
| MvExpand | 1 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **90** | 86 | 0 | 4 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **124** | 73 | 27 | 24 |
| [Undetermined](methods/undetermined.md) | **3** | 1 | 0 | 2 |
| **Total** | **237** | **175** | **28** | **34** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 43 | 74 | 3 | **120** |
| [REST Pull API](methods/rest-pull-api.md) | - | 50 | - | **50** |
| [CCF Push](methods/ccf-push.md) | 39 | - | - | **39** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | - | - | - | **0** |
| [CCF](methods/ccf.md) | 8 | - | - | **8** |
| **Total** | **90** | **124** | **3** | **217** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **147** |
| Active | 91 |
| Deprecated 🚫 | 29 |
| Unpublished ⚠️ | 27 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 66 |
| [REST Pull API](methods/rest-pull-api.md) | 43 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [CCF](methods/ccf.md) | 14 |
| [AMA](methods/ama.md) | 7 |
| [CCF Push](methods/ccf-push.md) | 2 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 |
| **Total** | **147** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 3 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 108 |
| *(no API)* | 34 |
| **Total** | **147** |

## Tables

### Overview

**2056 tables** documented across all discovery sources. **1738 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 965 | 965 |
| Content | 260 | 854 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 657 | 848 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 16 | 64 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 16 | 542 |
| [Azure Monitor Tables Feature Support](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) | 88 | 761 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) | 0 | 117 |
| Schema | 54 | 1738 |
| **Total** | **2056** | |

*23 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 844 |
| DCR | 10 |
| KQL validation | 732 |
| Connector definition | 152 |
| **Total unique tables with schema** | **1738** |

### Custom Log V1 (CLv1) 🔶

**470** of 2056 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 445 |
| Internal | 19 |
| GCP | 5 |
| Various | 1 |
| **Total** | **470** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,680** | 4,804 | 100 | 410 | 486 | 1,290 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,268 | 2,079 | 19 | 234 | 158 | 12 |
| Hunting Queries | 2,366 | 1,175 | 14 | 35 | 131 | 1,046 |
| Playbooks | 875 | 610 | 38 | 73 | 190 | 37 |
| Workbooks | 567 | 369 | 9 | 42 | 0 | 189 |
| Parsers* | 530 | 510 | 20 | 26 | 0 | 0 |
| Watchlists | 49 | 43 | 0 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

### Playbook Logic App Connectors

Connectors and built-in actions referenced by playbooks. Managed/custom rows come from `Microsoft.Web/connections` resources; built-in rows come from walking `definition.actions` for `Http`, `Function`, `Workflow`, and `ApiManagement` types. Multiple connection or action instances of the same type within a playbook are aggregated.

| Metric | Count |
|:-------|------:|
| Playbooks using Logic App connectors / built-ins | 875 |
| Total connector / built-in usages (rows) | 2,334 |
| Unique managed/custom connector types | 148 |
| &nbsp;&nbsp;Managed (Microsoft-published) | 96 |
| &nbsp;&nbsp;Custom | 56 |
| Unique built-in action types | 3 |
| Total built-in action invocations | 1,276 |

**Top managed connectors by playbook usage**

| Connector | Playbooks |
|:----------|----------:|
| [`azuresentinel`](logic-apps/managed-azuresentinel.md) | 686 |
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
| [`http`](logic-apps/builtin-http.md) | 376 | 1018 |
| [`workflow`](logic-apps/builtin-workflow.md) | 63 | 123 |
| [`function`](logic-apps/builtin-function.md) | 54 | 135 |

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 35 |
| Solution Parsers (in Solution JSON) | 511 |
| Discovered Parsers 🔍 | 22 |
| **Total Parsers** | **568** |
| Solutions with Parsers | 164 |

## ASIM Parsers

| Metric | Count |
|:-------|------:|
| **Schemas** | 13 |
| **Source Parser Pairs*** | 91 |
| **Union Parser Pairs*** | 15 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 95 |
| **Source Parser Pairs*** | 91 |
| **Schemas Covered** | 11 |
| **Tables Used** | 80 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| NetworkSession | 32 |
| Authentication | 31 |
| WebSession | 17 |
| AuditEvent | 16 |
| FileEvent | 14 |
| Dns | 13 |
| ProcessEvent | 10 |
| RegistryEvent | 7 |
| UserManagement | 7 |
| AlertEvent | 4 |
| DhcpEvent | 2 |
| **Total** | **95** |

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

*Generated by Solutions Analyzer - June 2026*
