# Sentinel Ninja 🥷

A collection of tools and documentation for Microsoft Sentinel practitioners.

## About Me

Hi, I'm **Ofer Shezaf** – an InfoSec professional with extensive experience in security research, product definition, and customer-facing activities. I've been working in this field since before "InfoSec" became "Cyber"!

I believe that creating security products requires a unique blend of technology, customer requirements, security expertise, and understanding customer perception of risk. Throughout my career, I've focused on the junction of these disciplines to create security solutions that effectively reduce both real and perceived cyber risk.

Currently, I'm a **Principal Product Manager** working on **Microsoft Sentinel** at Microsoft.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/oshezaf)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?logo=github)](https://github.com/oshezaf)

## Projects

### 📚 [Solutions Docs](Solutions%20Docs/README.md)

Comprehensive reference documentation for Microsoft Sentinel Solutions, automatically generated from the [Azure-Sentinel](https://github.com/Azure/Azure-Sentinel) repository using the **[Solutions Analyzer](https://github.com/Azure/Azure-Sentinel/tree/master/Tools/Solutions%20Analyzer)** tool – which I also developed and maintain as part of the Azure-Sentinel repository.

**Browse:**
- **[Solutions Index](Solutions%20Docs/solutions-index.md)** – 495 solutions (393 with connectors, 396 with content)
- **[Connectors Index](Solutions%20Docs/connectors-index.md)** – 536 data connectors
- **[Collection Methods Index](Solutions%20Docs/methods-index.md)** – 11 data collection methods
- **[Tables Index](Solutions%20Docs/tables-index.md)** – 2,023 Log Analytics tables
- **[Content Index](Solutions%20Docs/content/content-index.md)** – 6,092 content items (analytics, hunting, playbooks, workbooks)
- **[Parsers Index](Solutions%20Docs/parsers/parsers-index.md)** – 538 non-ASIM parsers
- **[ASIM Parsers Index](Solutions%20Docs/asim/asim-index.md)** – 95 ASIM parser pairs by schema
- **[ASIM Products Index](Solutions%20Docs/asim/asim-products-index.md)** – 80 products with ASIM support
- **[Statistics](Solutions%20Docs/statistics.md)** – Comprehensive statistics and metrics

**CSV data files** are also available in the [Solutions Docs](Solutions%20Docs/) directory for programmatic analysis. See the [output file documentation](https://github.com/Azure/Azure-Sentinel/blob/master/Tools/Solutions%20Analyzer/script-docs/map_solutions_connectors_tables.md#output-files) for column descriptions.

- [solutions.csv](Solutions%20Docs/solutions.csv) – All solutions with marketplace status and content counts
- [connectors.csv](Solutions%20Docs/connectors.csv) – All data connectors with collection method, CCF capabilities, and filter fields
- [tables.csv](Solutions%20Docs/tables.csv) – All tables with solution/connector references and feature support
- [content_items.csv](Solutions%20Docs/content_items.csv) – All content items (analytics rules, hunting queries, playbooks, etc.)
- [parsers.csv](Solutions%20Docs/parsers.csv) – Non-ASIM parsers with source tables and solution references
- [asim_parsers.csv](Solutions%20Docs/asim_parsers.csv) – ASIM parsers with schema, source tables, and sub-parser references
- [tables_reference.csv](Solutions%20Docs/tables_reference.csv) – Table metadata from Azure Monitor and Sentinel documentation
- [table_schemas.csv](Solutions%20Docs/table_schemas.csv) – Column schemas from DCR definitions, Azure Monitor docs, and KQL validation
- [content_tables_mapping.csv](Solutions%20Docs/content_tables_mapping.csv) – Mapping of content items to tables with read/write indicators
- [solutions_connectors_tables_mapping.csv](Solutions%20Docs/solutions_connectors_tables_mapping.csv) – Full mapping of solutions to connectors to tables
- [solutions_connectors_tables_mapping_simplified.csv](Solutions%20Docs/solutions_connectors_tables_mapping_simplified.csv) – Simplified version of the above mapping
- [solution_dependencies.csv](Solutions%20Docs/solution_dependencies.csv) – Dependencies between solutions (explicit and ASIM-based)
- [solutions_connectors_tables_issues_and_exceptions_report.csv](Solutions%20Docs/solutions_connectors_tables_issues_and_exceptions_report.csv) – Issues and exceptions found during analysis

## Related Resources

- [Azure-Sentinel GitHub Repository](https://github.com/Azure/Azure-Sentinel) – Cloud-native SIEM for intelligent security analytics
- [Microsoft Sentinel Documentation](https://docs.microsoft.com/azure/sentinel/)

## License

See [LICENSE](LICENSE) for details.

---

*Built with 🥷 for the Microsoft Sentinel community*
