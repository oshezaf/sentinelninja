# Microsoft Sentinel Documentation Statistics

This page provides comprehensive statistics across all Microsoft Sentinel solutions, connectors, tables, content items, and parsers.

**Browse:** [🏠](readme.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · **📊**

---

## Solutions

### Availability

| Metric | Total | Published | Unpublished |
|:-------|------:|----------:|------------:|
| Solutions | **487** | 402 | 85 |
| With Connectors | **307** | 250 | 57 |
| With Content | **386** | 329 | 57 |

### Support Ownership

| Support Tier | Total | Published | Unpublished |
|:-------------|------:|----------:|------------:|
| Microsoft | **232** | 219 | 13 |
| Partner | **231** | 172 | 59 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 0 | 13 |
| **Total** | **487** | **402** | **85** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 384 |
| Tables Used | 821 |

## Connectors

### Availability

| Metric | Total | Active | Deprecated | Unpublished |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **384** | 289 | 29 | 66 |
| Discovered* | **147** | 27 | 114 | 6 |
| **Total** | **531** | **316** | **143** | **72** |

*\* Discovered connectors are found in solution folders but not listed in Solution JSON definitions.*

### Support Ownership

| Support Tier | Total | Active | Deprecated | Unpublished |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **240** | 146 | 88 | 6 |
| Partner | **271** | 160 | 47 | 64 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **2** | 0 | 0 | 2 |
| **Total** | **531** | **316** | **143** | **72** |

### Collection Methods

| Collection Method | Total | Active | Deprecated | Unpublished |
|:-----------------|------:|-------:|-----------:|------------:|
| Azure Function | **129** | 75 | 18 | 36 |
| CCF | **129** | 118 | 1 | 10 |
| MMA | **110** | 12 | 90 | 8 |
| AMA | **59** | 25 | 34 | 0 |
| Unknown (Custom Log) | **44** | 35 | 0 | 9 |
| Native | **25** | 24 | 0 | 1 |
| Azure Diagnostics | **17** | 17 | 0 | 0 |
| REST API | **15** | 7 | 0 | 8 |
| Unknown | **3** | 3 | 0 | 0 |
| **Total** | **531** | **316** | **143** | **72** |

*Active = Published and not deprecated.*

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| Azure Function | 21 / 14 / 1 / **36** | 53 / 4 / 35 / **92** | 1 / 0 / 0 / **1** | - |
| CCF | 61 / 1 / 2 / **64** | 57 / 0 / 8 / **65** | - | - |
| MMA | 8 / 57 / 1 / **66** | 4 / 28 / 5 / **37** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| AMA | 10 / 16 / 0 / **26** | 11 / 15 / 0 / **26** | 4 / 3 / 0 / **7** | - |
| Unknown (Custom Log) | 1 / 0 / 1 / **2** | 30 / 0 / 8 / **38** | 4 / 0 / 0 / **4** | - |
| Native | 24 / 0 / 1 / **25** | - | - | - |
| Azure Diagnostics | 17 / 0 / 0 / **17** | - | - | - |
| REST API | 1 / 0 / 0 / **1** | 5 / 0 / 8 / **13** | 1 / 0 / 0 / **1** | - |
| Unknown | 3 / 0 / 0 / **3** | - | - | - |
| **Total** | 146 / 88 / 6 / **240** | 160 / 47 / 64 / **271** | 10 / 8 / 0 / **18** | 0 / 0 / 2 / **2** |

## Tables

| Metric | Count |
|:-------|------:|
| **Total Tables Documented** | **1771** |
| Tables Ingested by Connectors | 821 |
| Tables Referenced by Content Only | 222 |
| Standalone Reference Tables* | 728 |
| Defender XDR Only Tables | 31 |

*\*Standalone Reference Tables are tables documented in the Azure Monitor or Defender XDR reference that are not currently used by any Sentinel solution, connector, or content item.*

## Content

> **Source Legend:** 📦 Solution (published package) | 📄 Standalone (GitHub with metadata) | 🔗 GitHub Only (no metadata)

### Content Items Summary

| Metric | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|-------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,577** | 4,402 | 466 | 437 | 1,272 |

### Content Items by Type

| Type | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|-------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,358 | 1,921 | 267 | 158 | 12 |
| Hunting Queries | 2,285 | 1,112 | 56 | 84 | 1,033 |
| Playbooks | 816 | 532 | 60 | 188 | 36 |
| Workbooks | 532 | 296 | 51 | 0 | 185 |
| Parsers* | 514 | 482 | 32 | 0 | 0 |
| Watchlists | 47 | 41 | 0 | 0 | 6 |
| Summary Rules | 25 | 18 | 0 | 7 | 0 |

*\* Parsers from solution content. See [Parsers](parsers/parsers-index.md) section for all parsers including legacy.*

## Parsers

| Category | Count |
|:---------|------:|
| Legacy Parsers | 35 |
| Solution Parsers (in Solution JSON) | 489 |
| Discovered Parsers⚠️ | 28 |
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

---

*Generated by Solutions Analyzer - January 2026*
