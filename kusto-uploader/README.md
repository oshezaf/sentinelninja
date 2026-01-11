# Kusto Uploader 📤

A utility to upload CSV files to Azure Data Explorer (Kusto) clusters.

## Features

- **Generic CSV Upload**: Upload any CSV file(s) to Kusto tables
- **Solution Analyzer Integration**: Download and upload [Microsoft Sentinel Solution Analyzer](https://github.com/Azure/Azure-Sentinel/tree/master/Tools/Solutions%20Analyzer) data directly from GitHub
- **Automatic Schema Detection**: Creates tables with schema matching your CSV headers
- **Azure CLI Authentication**: Uses your existing Azure CLI credentials
- **Dry Run Mode**: Preview operations before executing

## Installation

### Prerequisites

1. **Python 3.7+**
2. **Azure CLI** - Install and login:
   ```bash
   # Install Azure CLI: https://docs.microsoft.com/cli/azure/install-azure-cli
   az login
   ```
3. **Python packages**:
   ```bash
   pip install azure-kusto-data azure-kusto-ingest azure-identity requests
   ```

## Usage

### Upload Custom CSV Files

```bash
# Upload a single CSV file
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase data.csv

# Upload multiple CSV files
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase file1.csv file2.csv

# Upload with a table name prefix
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase --prefix myproject data.csv
```

### Upload Solution Analyzer Data

Download and upload the latest Microsoft Sentinel Solution Analyzer data directly from the Azure-Sentinel GitHub repository:

```bash
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase --solution-analyzer
```

This uploads the following tables:

| Source File | Kusto Table |
|-------------|-------------|
| 	ables_reference.csv | solution_analyzer_table_reference_lookup |
| connectors.csv | solution_analyzer_connectors_lookup |
| 	ables.csv | solution_analyzer_tables_lookup |
| solutions.csv | solution_analyzer_solutions_lookup |
| content_items.csv | solution_analyzer_content_items_lookup |
| solutions_connectors_tables_mapping_simplified.csv | solution_analyzer_mapping |
| solutions_connectors_tables_mapping.csv | solution_analyzer_full_mapping |
| content_tables_mapping.csv | solution_analyzer_content_tables_mapping |
| sim_parsers.csv | solution_analyzer_asim_parsers_lookup |

### Dry Run

Preview what would be uploaded without making changes:

```bash
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase --dry-run data.csv
python upload_to_kusto.py -c https://mycluster.kusto.windows.net -d MyDatabase --dry-run --solution-analyzer
```

## Command Line Options

| Option | Description |
|--------|-------------|
| -c, --cluster | **(Required)** Kusto cluster URL |
| -d, --database | **(Required)** Kusto database name |
| --solution-analyzer | Download and upload Solution Analyzer CSVs from GitHub |
| --prefix | Prefix for generated table names (custom CSV mode) |
| --dry-run | Show what would be done without making changes |

## Table Naming

For custom CSV files, the table name is derived from the filename:
- my-data-file.csv → my_data_file
- With --prefix myproject: my-data-file.csv → myproject_my_data_file

## Example KQL Queries

After uploading Solution Analyzer data, try these queries:

```kql
// Find all connectors for a solution
solution_analyzer_mapping
| where solution_name == "Microsoft 365"
| distinct connector_id, connector_title

// Get connectors by collection method
solution_analyzer_connectors_lookup
| where collection_method == "AMA"
| project connector_id, connector_title

// Find tables and their categories
solution_analyzer_table_reference_lookup
| where isnotempty(category)
| project table_name, category, basic_logs_eligible

// Content items by type
solution_analyzer_content_items_lookup
| summarize count() by content_type
| order by count_ desc
```

## Authentication

The tool uses Azure CLI authentication. Make sure you're logged in:

```bash
az login
az account show  # Verify your account
```

## Related Projects

- **[Solutions Analyzer](https://github.com/Azure/Azure-Sentinel/tree/master/Tools/Solutions%20Analyzer)** - Source of the Solution Analyzer CSV data
- **[Solutions Docs](../Solutions%20Docs/README.md)** - Generated documentation from Solution Analyzer

## License

See [LICENSE](../LICENSE) for details.
