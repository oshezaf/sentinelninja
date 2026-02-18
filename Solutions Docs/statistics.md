# Microsoft Sentinel Documentation Statistics

This page provides comprehensive statistics across all Microsoft Sentinel solutions, connectors, tables, content items, and parsers.

**Browse:** [🏠](README.md) · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · **📊**

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
| Solutions | **494** | 453 | 41 |
| With Connectors | **311** | 288 | 23 |
| With Content | **394** | 370 | 24 |

### Support Ownership

| Support Tier | Total | Published | Unpublished ⚠️ |
|:-------------|------:|----------:|------------:|
| Microsoft | **233** | 227 | 6 |
| Partner | **238** | 213 | 25 |
| Community | **11** | 11 | 0 |
| Unknown | **12** | 2 | 10 |
| **Total** | **494** | **453** | **41** |

### Other Metrics

| Metric | Count |
|:-------|------:|
| Unique Connectors | 388 |
| Tables Used | 825 |

## Connectors

### Availability

| Metric | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------|------:|-------:|-----------:|------------:|
| In Solutions | **388** | 324 | 29 | 35 |
| Discovered 🔍 | **148** | 28 | 114 | 6 |
| **Total** | **536** | **352** | **143** | **41** |

### Support Ownership

| Support Tier | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-------------|------:|-------:|-----------:|------------:|
| Microsoft | **241** | 150 | 88 | 3 |
| Partner | **275** | 192 | 47 | 36 |
| Community | **18** | 10 | 8 | 0 |
| Unknown | **2** | 0 | 0 | 2 |
| **Total** | **536** | **352** | **143** | **41** |

### Collection Methods

| Collection Method | Total | Active | Deprecated 🚫 | Unpublished ⚠️ |
|:-----------------|------:|-------:|-----------:|------------:|
| [CCF](methods/ccf.md) | **133** | 126 | 1 | 6 |
| [Azure Function](methods/azure-function.md) | **131** | 88 | 18 | 25 |
| [MMA](methods/mma.md) | **110** | 14 | 90 | 6 |
| [AMA](methods/ama.md) | **59** | 25 | 34 | 0 |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | **43** | 39 | 0 | 4 |
| [Native](methods/native.md) | **25** | 25 | 0 | 0 |
| [Azure Diagnostics](methods/azure-diagnostics.md) | **17** | 17 | 0 | 0 |
| [REST API](methods/rest-api.md) | **15** | 15 | 0 | 0 |
| [Unknown](methods/unknown.md) | **3** | 3 | 0 | 0 |
| **Total** | **536** | **352** | **143** | **41** |

### Collection Methods by Support Tier

Each cell shows: Active / Deprecated / Unpublished / **Total**

| Collection Method | Microsoft | Partner | Community | Unknown |
|:-----------------|:---------:|:---------:|:---------:|:---------:|
| [CCF](methods/ccf.md) | 63 / 1 / 1 / **65** | 63 / 0 / 5 / **68** | - | - |
| [Azure Function](methods/azure-function.md) | 22 / 14 / 0 / **36** | 65 / 4 / 25 / **94** | 1 / 0 / 0 / **1** | - |
| [MMA](methods/mma.md) | 8 / 57 / 1 / **66** | 6 / 28 / 3 / **37** | 0 / 5 / 0 / **5** | 0 / 0 / 2 / **2** |
| [AMA](methods/ama.md) | 10 / 16 / 0 / **26** | 11 / 15 / 0 / **26** | 4 / 3 / 0 / **7** | - |
| [Unknown (Custom Log)](methods/unknown-custom-log.md) | 1 / 0 / 1 / **2** | 34 / 0 / 3 / **37** | 4 / 0 / 0 / **4** | - |
| [Native](methods/native.md) | 25 / 0 / 0 / **25** | - | - | - |
| [Azure Diagnostics](methods/azure-diagnostics.md) | 17 / 0 / 0 / **17** | - | - | - |
| [REST API](methods/rest-api.md) | 1 / 0 / 0 / **1** | 13 / 0 / 0 / **13** | 1 / 0 / 0 / **1** | - |
| [Unknown](methods/unknown.md) | 3 / 0 / 0 / **3** | - | - | - |
| **Total** | 150 / 88 / 3 / **241** | 192 / 47 / 36 / **275** | 10 / 8 / 0 / **18** | 0 / 0 / 2 / **2** |

## Tables

| Metric | Count |
|:-------|------:|
| **Total Tables Documented** | **1792** |
| Tables Ingested by Connectors | 825 |
| Tables Referenced by Content Only | 225 |
| Standalone Reference Tables | 742 |
| Defender XDR Only Tables | 31 |

## Content

### Content Items Summary

| Metric | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-------|------:|-------------:|---------------:|--------------:|---------------:|
| **Content Items** | **6,606** | 4,749 | 147 | 437 | 1,273 |

### Content Items by Type

| Type | Total | 📦 Published | 📦 Unpublished | 📄 Standalone | 🔗 GitHub Only |
|:-----|------:|-------------:|---------------:|--------------:|---------------:|
| Analytic Rules | 2,369 | 2,131 | 68 | 158 | 12 |
| Hunting Queries | 2,292 | 1,166 | 8 | 84 | 1,034 |
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

---

*Generated by Solutions Analyzer - February 2026*
