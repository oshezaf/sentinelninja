# Microsoft Sentinel Solutions Documentation

This documentation provides comprehensive information about Microsoft Sentinel Solutions, including data connectors, log tables, content items, parsers, and ASIM parsers.

**Browse:** **🏠** · [Solutions](solutions-index.md) · [Connectors](connectors-index.md) · [Methods](methods-index.md) · [Tables](tables-index.md) · [Content](content/content-index.md) · [Parsers](parsers/parsers-index.md) · [ASIM Parsers](asim/asim-index.md) · [ASIM Products](asim/asim-products-index.md) · [Logic Apps](logic-apps/logic-apps-index.md) · [📊](statistics.md)

## Overview

Counts below describe the existing documentation pages, except for collection methods and ASIM products. Catalog entries can share a page, so page totals can differ from the totals in the indexes and statistics.

| Resource | Count | Details |
|:---------|------:|:--------|
| [Solutions](solutions-index.md) | 584 | Individual solution pages |
| [Connectors](connectors-index.md) | 724 | Unique connector IDs and individual connector pages |
| [Methods](methods-index.md) | 13 | Data collection methods |
| [Tables](tables-index.md) | 2,529 | Individual table pages |
| [Content](content/content-index.md) | 6,976 | Content pages; the index lists 7,650 catalog entries |
| [Parsers](parsers/parsers-index.md) | 725 | Non-ASIM KQL function pages; the index lists 745 parsers |
| [ASIM Parsers](asim/asim-index.md) | 247 | 231 source, 16 unifying, 0 empty parsers |
| [ASIM Products](asim/asim-products-index.md) | 125 | Products with ASIM support |
| [Statistics](statistics.md) | - | Comprehensive statistics and metrics |
| [Interactive Index](https://oshezaf.github.io/sentinelninja/index.html) | - | Sortable/filterable HTML view |

## CSV Downloads

Download the existing generated outputs committed to [Azure-Sentinel `master` at `3262cec7d4`](https://github.com/Azure/Azure-Sentinel/tree/3262cec7d4e171b33c2ea2a2f10e909947bd30b7/Tools/Solutions%20Analyzer). Only generated analysis outputs are published here, not configuration, overrides, or connector history.

**Snapshot difference:** These CSVs are not synchronized with the existing documentation. They contain 562 solutions, 678 unique connectors, and 210 ASIM parser rows (195 source and 15 unifying), compared with 584 solutions, 724 connectors, and 247 ASIM parsers documented above. A shared source commit does not imply that every CSV was generated in the same run. No analysis or full documentation regeneration was performed for this download update.

| CSV file | Contents |
|:---------|:---------|
| [solutions.csv](csv/solutions.csv) | Solution metadata and Marketplace status |
| [connectors.csv](csv/connectors.csv) | Connector metadata and collection methods |
| [tables.csv](csv/tables.csv) | Tables referenced by solutions |
| [content_items.csv](csv/content_items.csv) | Analytic rules, hunting queries, and other content |
| [parsers.csv](csv/parsers.csv) | Non-ASIM parsers |
| [asim_parsers.csv](csv/asim_parsers.csv) | ASIM parsers and schema associations |
| [solutions_connectors_tables_mapping.csv](csv/solutions_connectors_tables_mapping.csv) | Full solution, connector, and table mapping |
| [solutions_connectors_tables_mapping_simplified.csv](csv/solutions_connectors_tables_mapping_simplified.csv) | Simplified solution, connector, and table edges |
| [content_tables_mapping.csv](csv/content_tables_mapping.csv) | Content-to-table relationships |
| [connector_table_ingestion.csv](csv/connector_table_ingestion.csv) | Per-table connector ingestion methods and APIs |
| [playbook_connectors.csv](csv/playbook_connectors.csv) | Logic App connectors used by playbooks |
| [solution_dependencies.csv](csv/solution_dependencies.csv) | Explicit and ASIM-derived solution dependencies |
| [table_schemas.csv](csv/table_schemas.csv) | Unified table column schemas |
| [tables_reference.csv](csv/tables_reference.csv) | Microsoft table reference metadata |
| [la_table_schemas.csv](csv/la_table_schemas.csv) | Azure Monitor and Defender XDR column schemas |
| [asim_fields.csv](csv/asim_fields.csv) | ASIM schema field catalog |
| [asim_entity_fields.csv](csv/asim_entity_fields.csv) | ASIM entity fields |
| [asim_logical_types.csv](csv/asim_logical_types.csv) | ASIM logical types and allowed values |
| [asim_vendors_products.csv](csv/asim_vendors_products.csv) | ASIM vendors and products |
| [solutions_connectors_tables_issues_and_exceptions_report.csv](csv/solutions_connectors_tables_issues_and_exceptions_report.csv) | Analysis issues and exceptions |
| [asim_parsers_unmatched_report.csv](csv/asim_parsers_unmatched_report.csv) | ASIM parsers without connector associations |
| [asim_extraction_failures.csv](csv/asim_extraction_failures.csv) | ASIM field extraction diagnostics |
| [artifact_doc_links.csv](csv/artifact_doc_links.csv) | Documentation artifact Markdown and HTML links |

---

### Notes

> ⚠️ **Unpublished:** This item's solution is marked as unpublished in the documentation's source data. This is a solution publication status, not an indication of whether it is installed in your workspace.

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

## Directory Structure

```
├── solutions-index.md      # Main solutions listing
├── connectors-index.md     # Data connectors listing
├── tables-index.md         # Log tables listing
├── methods-index.md        # Collection methods listing
├── statistics.md           # Statistics and metrics
├── csv/                    # Downloadable generated analysis CSVs
├── methods/                # Individual collection method pages
├── logic-apps/             # Logic App connector and action pages
├── solutions/              # Individual solution pages
├── connectors/             # Individual connector pages
├── tables/                 # Individual table pages
├── content/                # Content item pages
│   ├── content-index.md    # Content items listing
│   └── *.md                # Individual content pages
├── parsers/                # Non-ASIM parser documentation
│   ├── parsers-index.md    # Parsers listing
│   └── *.md                # Individual parser pages
└── asim/                   # ASIM parser documentation
    ├── asim-index.md       # ASIM parsers index by schema
    ├── asim-products-index.md  # ASIM parsers index by product
    └── *.md                # Individual parser pages
```

Markdown pages have sibling `.html` pages. The [interactive index](https://oshezaf.github.io/sentinelninja/index.html) and its `css/` and `js/` assets are at the site root, outside this documentation directory.

## Source

This documentation is generated from the [Azure-Sentinel](https://github.com/Azure/Azure-Sentinel) repository using the [Solutions Analyzer](https://github.com/Azure/Azure-Sentinel/tree/master/Tools/Solutions%20Analyzer) tool.

### Generating Documentation

From an Azure-Sentinel checkout, refresh the data if needed, then publish to the separate sentinelninja checkout (replace the example site-root path):

```powershell
Set-Location "Tools\Solutions Analyzer"
$siteRoot = "C:\path\to\sentinelninja"
python collect_table_info.py               # Reuse cached table metadata
python map_solutions_connectors_tables.py  # Generate CSVs
python generate_connector_docs.py --skip-input-generation --output-dir "$siteRoot\Solutions Docs" --html-output-dir "$siteRoot" --html-docs-path "Solutions Docs/" --html-index-url "https://oshezaf.github.io/sentinelninja/index.html"
```

If the analysis CSVs are already current, run only the documentation command. With the updated generator, it also copies available analysis CSVs into `Solutions Docs\csv`. Always specify `--output-dir`; do not generate documentation inside Azure-Sentinel. The documentation generator does not run the mapper. The `--html-index-url` option keeps Markdown navigation linked to the published interactive index.

---

*Documentation generated by [Solutions Analyzer](https://github.com/Azure/Azure-Sentinel/tree/master/Tools/Solutions%20Analyzer). Overview and CSV download links updated November 2026; other documentation pages were not regenerated.*
