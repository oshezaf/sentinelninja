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
| Solutions | **562** | 485 | 77 |
| With Connectors | **379** | 323 | 56 |
| With Content | **448** | 392 | 56 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **253** | 241 | 12 |
| Partner | **284** | 230 | 54 |
| Community | **14** | 11 | 3 |
| Unknown | **11** | 3 | 8 |
| **Total** | **562** | **485** | **77** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 545 |
| Tables Used | 1059 |

## Connectors

> **Note:** The connector count Microsoft reports publicly is the number of **active connectors published in solutions**, plus 41 connectors (at the time of writing) that are not managed through this GitHub repository — including Logic App connectors and Sentinel data lake-only connectors.

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **545** | 449 | 45 | 51 |
| Discovered 🔍 | **133** | 0 | 110 | 23 |
| **Total** | **678** | **449** | **155** | **74** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **275** | 165 | 97 | 13 |
| Partner | **377** | 272 | 50 | 55 |
| Community | **22** | 10 | 8 | 4 |
| Unknown | **4** | 2 | 0 | 2 |
| **Total** | **678** | **449** | **155** | **74** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [CCF](methods/ccf.md) | **217** | 186 | 1 | 30 |
| [AMA](methods/ama.md) | **167** | 37 | 122 | 8 |
| [Azure Function](methods/azure-function.md) | **128** | 81 | 29 | 18 |
| [REST Pull API](methods/rest-pull-api.md) | **52** | 39 | 1 | 12 |
| [CCF Push](methods/ccf-push.md) | **47** | 45 | 0 | 2 |
| [Native](methods/native.md) | **17** | 15 | 1 | 1 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [Unknown](methods/unknown.md) | **15** | 15 | 0 | 0 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | **15** | 11 | 1 | 3 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **1** | 1 | 0 | 0 |
| [Defender](methods/defender.md) | **1** | 1 | 0 | 0 |
| [MMA](methods/mma.md) | **1** | 1 | 0 | 0 |
| **Total** | **678** | **449** | **155** | **74** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [CCF](methods/ccf.md) | 82 / 1 / 6 / **89** | 104 / 0 / 20 / **124** | 0 / 0 / 4 / **4** | - |
| [AMA](methods/ama.md) | 16 / 73 / 2 / **91** | 17 / 41 / 4 / **62** | 4 / 8 / 0 / **12** | 0 / 0 / 2 / **2** |
| [Azure Function](methods/azure-function.md) | 13 / 22 / 2 / **37** | 67 / 7 / 16 / **90** | 1 / 0 / 0 / **1** | - |
| [REST Pull API](methods/rest-pull-api.md) | 2 / 0 / 2 / **4** | 31 / 1 / 10 / **42** | 4 / 0 / 0 / **4** | 2 / 0 / 0 / **2** |
| [CCF Push](methods/ccf-push.md) | 2 / 0 / 0 / **2** | 43 / 0 / 2 / **45** | - | - |
| [Native](methods/native.md) | 15 / 1 / 1 / **17** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [Unknown](methods/unknown.md) | 15 / 0 / 0 / **15** | - | - | - |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 / 0 / 0 / **1** | 9 / 1 / 3 / **13** | 1 / 0 / 0 / **1** | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | - | 1 / 0 / 0 / **1** | - | - |
| [Defender](methods/defender.md) | 1 / 0 / 0 / **1** | - | - | - |
| [MMA](methods/mma.md) | 1 / 0 / 0 / **1** | - | - | - |
| **Total** | 165 / 97 / 13 / **275** | 272 / 50 / 55 / **377** | 10 / 8 / 4 / **22** | 2 / 0 / 2 / **4** |

### CCF Capabilities

| Metric | Count |
|:-------|------:|
| CCF Connectors (polling) | 217 |
| CCF Push Connectors | 47 |
| CCF Legacy Connectors | 0 |
| **Total CCF** | **264** |
| With config file | 243 |
| With capabilities detected | 257 |

**Connector Kind** (non-default kinds; REST Pull API polling is the default):

| Kind | Count |
|:-----|------:|
| REST Pull API Polling *(default)* | 167 |
| Push | 47 |
| GCP | 16 |
| AmazonWebServicesS3 | 14 |
| StorageAccountBlobContainer | 4 |
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
| APIKey | 89 |
| OAuth2 | 38 |
| JwtToken | 26 |
| Basic | 17 |
| ServicePrincipal | 4 |
| *(none detected)* | 83 |

**Request Features:**

| Feature | Count |
|:--------|------:|
| Paging | 139 |
| POST | 27 |
| Nested | 15 |
| MvExpand | 2 |

### Ingestion API

API-based connectors use one of two APIs to send data to the workspace:

| Ingestion API | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | **105** | 100 | 0 | 5 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | **121** | 68 | 30 | 23 |
| [Undetermined](methods/undetermined.md) | **3** | 1 | 0 | 2 |
| **Total** | **251** | **185** | **31** | **35** |

**By Collection Method:**

| Collection Method | [Log Ingestion API](methods/log-ingestion-api.md) | [HTTP Data Collector API](methods/http-data-collector-api.md) | [Undetermined](methods/undetermined.md) | **Total** |
|:-----------------|------:|------:|------:|------:|
| [Azure Function](methods/azure-function.md) | 47 | 70 | 3 | **120** |
| [REST Pull API](methods/rest-pull-api.md) | 1 | 51 | - | **52** |
| [CCF Push](methods/ccf-push.md) | 47 | - | - | **47** |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | - | - | - | **0** |
| [CCF](methods/ccf.md) | 10 | - | - | **10** |
| **Total** | **105** | **121** | **3** | **229** |

### Custom Log V1 (CLv1) 🔶

Connectors that use at least one Custom Log V1 table (identified by type-suffixed columns or `_CL` suffix with compatible collection method).

| Metric | Count |
|:-------|------:|
| CLv1 Connectors | **145** |
| Active | 84 |
| Deprecated 🚫 | 31 |
| Unpublished ⚠️ | 30 |

**By Collection Method:**

| Collection Method | CLv1 Connectors |
|:-----------------|----------------:|
| [Azure Function](methods/azure-function.md) | 63 |
| [REST Pull API](methods/rest-pull-api.md) | 40 |
| [CCF](methods/ccf.md) | 16 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 14 |
| [AMA](methods/ama.md) | 7 |
| [CCF Push](methods/ccf-push.md) | 4 |
| [Azure Function (TI Upload API)](methods/azure-function-ti-upload-api.md) | 1 |
| **Total** | **145** |

**By Ingestion API:**

| Ingestion API | CLv1 Connectors |
|:-------------|----------------:|
| [Log Ingestion API](methods/log-ingestion-api.md) | 5 |
| [HTTP Data Collector API](methods/http-data-collector-api.md) | 101 |
| *(no API)* | 36 |
| **Total** | **145** |

## Tables

### Overview

**2148 tables** documented across all discovery sources. **1946 tables** have schema information.

### Discovery Sources

Each table is assigned a single discovery source ("Discovered Via") by priority: Connector > Content > Docs > Schema. Within doc sources, priority is: Azure Monitor > Defender XDR > Sentinel Tables > Feature Support > Ingestion API. The "Total" column shows how many tables have each source regardless of priority, since a table can appear in multiple sources.

| Discovery Source | Discovered Via | Total |
|:-----------------|---------------:|------:|
| Connector | 1059 | 1059 |
| Content | 288 | 916 |
| [Azure Monitor Tables Reference](https://learn.microsoft.com/azure/azure-monitor/reference/tables/tables-resourcetype) | 709 | 919 |
| [Defender XDR Advanced Hunting Schema](https://learn.microsoft.com/defender-xdr/advanced-hunting-schema-tables) | 16 | 64 |
| [Sentinel Tables and Connectors Reference](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) | 18 | 540 |
| [Azure Monitor Logs Table Feature Support](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features) | 0 | 919 |
| [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features) | 0 | 104 |
| Schema | 58 | 1946 |
| **Total** | **2148** | |

*21 tables are available in Defender XDR but not in Azure Monitor Log Analytics.*

### Schema Sources

Tables with schema information, by schema source. A single table may have schemas from multiple sources.

| Schema Source | Tables |
|:-------------|-------:|
| Azure Monitor docs | 940 |
| DCR | 18 |
| KQL validation | 772 |
| Connector definition | 216 |
| **Total unique tables with schema** | **1946** |

### Custom Log V1 (CLv1) 🔶

**470** of 2148 tables are Custom Log V1 tables, identified by type-suffixed columns or `_CL` suffix with compatible collection method.

**By Table Category:**

| Category | CLv1 Tables |
|:---------|------------:|
| Uncategorized | 447 |
| Internal | 17 |
| GCP | 5 |
| Various | 1 |
| **Total** | **470** |

## Content

### Content Items Summary

| Metric | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| **Content Items** | **7,011** | 5,145 | 95 | 514 | 492 | 1,279 |

### Content Items by Type

| Type | Total | 📦 In Solution | 📦 Discovered | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|---------------:|--------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,415 | 2,229 | 16 | 282 | 158 | 12 |
| Hunting Queries | 2,467 | 1,286 | 11 | 70 | 137 | 1,033 |
| Playbooks | 901 | 636 | 38 | 74 | 190 | 37 |
| Workbooks | 596 | 394 | 11 | 48 | 0 | 191 |
| Parsers* | 558 | 539 | 19 | 40 | 0 | 0 |
| Watchlists | 49 | 43 | 0 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

### Playbook Logic App Connectors

Connectors and built-in actions referenced by playbooks. Managed/custom rows come from `Microsoft.Web/connections` resources; built-in rows come from walking `definition.actions` for `Http`, `Function`, `Workflow`, and `ApiManagement` types. Multiple connection or action instances of the same type within a playbook are aggregated.

| Metric | Count |
|:-------|------:|
| Playbooks using Logic App connectors / built-ins | 901 |
| Total connector / built-in usages (rows) | 2,388 |
| Unique managed/custom connector types | 148 |
| &nbsp;&nbsp;Managed (Microsoft-published) | 96 |
| &nbsp;&nbsp;Custom | 56 |
| Unique built-in action types | 3 |
| Total built-in action invocations | 1,344 |

**Top managed connectors by playbook usage**

| Connector | Playbooks |
|:----------|----------:|
| [`azuresentinel`](logic-apps/managed-azuresentinel.md) | 700 |
| [`keyvault`](logic-apps/managed-keyvault.md) | 161 |
| [`azuremonitorlogs`](logic-apps/managed-azuremonitorlogs.md) | 107 |
| [`teams`](logic-apps/managed-teams.md) | 104 |
| [`azureloganalyticsdatacollector`](logic-apps/managed-azureloganalyticsdatacollector.md) | 101 |
| [`office365`](logic-apps/managed-office365.md) | 73 |
| [`microsoftsentinel`](logic-apps/managed-microsoftsentinel.md) | 34 |
| [`wdatp`](logic-apps/managed-wdatp.md) | 30 |
| [`azuread`](logic-apps/managed-azuread.md) | 29 |
| [`riskiqpassivetotal`](logic-apps/managed-riskiqpassivetotal.md) | 27 |
| [`hyasinsight`](logic-apps/managed-hyasinsight.md) | 25 |
| [`virustotal`](logic-apps/managed-virustotal.md) | 16 |
| [`azureblob`](logic-apps/managed-azureblob.md) | 15 |
| [`azuresentinel_1`](logic-apps/managed-azuresentinel-1.md) | 14 |
| [`recordedfuturev2`](logic-apps/managed-recordedfuturev2.md) | 14 |

**Built-in actions by playbook usage**

| Action type | Playbooks | Action invocations |
|:------------|----------:|-------------------:|
| [`http`](logic-apps/builtin-http.md) | 400 | 1085 |
| [`workflow`](logic-apps/builtin-workflow.md) | 63 | 123 |
| [`function`](logic-apps/builtin-function.md) | 55 | 136 |

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 35 |
| Solution Parsers (in Solution JSON) | 540 |
| Discovered Parsers 🔍 | 21 |
| **Total Parsers** | **596** |
| Solutions with Parsers | 178 |

## ASIM Parsers

| Metric | Count |
|:-------|------:|
| **Schemas** | 13 |
| **Source Parser Pairs*** | 97 |
| **Union Parser Pairs*** | 7 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## ASIM Products

| Metric | Count |
|:-------|------:|
| **Products** | 104 |
| **Source Parser Pairs*** | 97 |
| **Schemas Covered** | 12 |
| **Tables Used** | 92 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

### Products per Schema

| Schema | Products |
|:-------|--------:|
| Authentication | 33 |
| NetworkSession | 33 |
| WebSession | 19 |
| AuditEvent | 16 |
| FileEvent | 14 |
| Dns | 13 |
| ProcessEvent | 10 |
| AlertEvent | 9 |
| RegistryEvent | 7 |
| UserManagement | 7 |
| DhcpEvent | 2 |
| AgentEvent | 1 |
| **Total** | **104** |

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

*Generated by Solutions Analyzer - August 2026*
