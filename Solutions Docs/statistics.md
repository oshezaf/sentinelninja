# Microsoft Sentinel Documentation Statistics

This page provides comprehensive statistics across all Microsoft Sentinel solutions, connectors, tables, content items, and parsers.

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · **📊**

---

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
| Solutions | **487** | 444 | 43 |
| With Connectors | **307** | 283 | 24 |
| With Content | **386** | 361 | 25 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **232** | 226 | 6 |
| Partner | **231** | 205 | 26 |
| Community | **11** | 11 | 0 |
| Unknown | **13** | 2 | 11 |
| **Total** | **487** | **444** | **43** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 384 |
| Tables Used | 821 |

## Connectors

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **384** | 319 | 29 | 36 |
| Discovered 🔍 | **147** | 27 | 114 | 6 |
| **Total** | **531** | **346** | **143** | **42** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **240** | 149 | 88 | 3 |
| Partner | **271** | 187 | 47 | 37 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **2** | 0 | 0 | 2 |
| **Total** | **531** | **346** | **143** | **42** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| Azure Function | **129** | 87 | 18 | 24 |
| CCF | **129** | 120 | 1 | 8 |
| MMA | **110** | 14 | 90 | 6 |
| AMA | **59** | 25 | 34 | 0 |
| Unknown (Custom Log) | **44** | 40 | 0 | 4 |
| Native | **25** | 25 | 0 | 0 |
| Azure Diagnostics | **17** | 17 | 0 | 0 |
| REST API | **15** | 15 | 0 | 0 |
| Unknown | **3** | 3 | 0 | 0 |
| **Total** | **531** | **346** | **143** | **42** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| Azure Function | 22 / 14 / 0 / **36** | 64 / 4 / 24 / **92** | 1 / 0 / 0 / **1** | - |
| CCF | 62 / 1 / 1 / **64** | 58 / 0 / 7 / **65** | - | - |
| MMA | 8 / 57 / 1 / **66** | 6 / 28 / 3 / **37** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| AMA | 10 / 16 / 0 / **26** | 11 / 15 / 0 / **26** | 4 / 3 / 0 / **7** | - |
| Unknown (Custom Log) | 1 / 0 / 1 / **2** | 35 / 0 / 3 / **38** | 4 / 0 / 0 / **4** | - |
| Native | 25 / 0 / 0 / **25** | - | - | - |
| Azure Diagnostics | 17 / 0 / 0 / **17** | - | - | - |
| REST API | 1 / 0 / 0 / **1** | 13 / 0 / 0 / **13** | 1 / 0 / 0 / **1** | - |
| Unknown | 3 / 0 / 0 / **3** | - | - | - |
| **Total** | 149 / 88 / 3 / **240** | 187 / 47 / 37 / **271** | 10 / 8 / 0 / **18** | 0 / 0 / 2 / **2** |

## Tables

| Metric | Count |
|:-------|------:|
| **Total Tables Documented** | **1764** |
| Tables Ingested by Connectors | 821 |
| Tables Referenced by Content Only | 216 |
| Standalone Reference Tables | 727 |
| Defender XDR Only Tables | 31 |

## Content

### Content Items Summary

| Metric | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|-------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,577** | 4,713 | 155 | 437 | 1,272 |

### Content Items by Type

| Type | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|-------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,358 | 2,117 | 71 | 158 | 12 |
| Hunting Queries | 2,285 | 1,160 | 8 | 84 | 1,033 |
| Playbooks | 816 | 553 | 39 | 188 | 36 |
| Workbooks | 532 | 327 | 20 | 0 | 185 |
| Parsers* | 514 | 497 | 17 | 0 | 0 |
| Watchlists | 47 | 41 | 0 | 0 | 6 |
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

---

*Generated by Solutions Analyzer - February 2026*
