# Qualys Knowledge Base (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qualys_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `QualysKbConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [QualysKB_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Qualys%20VM%20Knowledgebase/Data%20Connectors/QualysKB_ccf/QualysKB_ConnectorDefinition.json) |
| **CCF Configuration** | [QualysKB_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Qualys%20VM%20Knowledgebase/Data%20Connectors/QualysKB_ccf/QualysKB_PollingConfig.json) |
| **CCF Capabilities** | `Basic` |

Ingest Qualys Knowledge Base Vulnerability Data into Microsoft Sentinel using version 4.0 of the Qualys API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`QualysKnowledgeBase`](../tables/qualysknowledgebase.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Qualys API access**: Requires a Qualys User Account with read access to the Knowledge Base endpoints.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

## Step 1: Set Credentials
Provide your Qualys API credentials to enable data ingestion from the Qualys Knowledge Base.
To gather data from Qualys VM, you need to provide the following resources:
- **API Credentials**: username and password for an account with read access to the Knowledge Base API. You can find the exact permissions needed in the [Qualys API documentation](https://docs.qualys.com/en/vm/api/scans/kbase/knowledgebase.htm).
- **API Server URL**: the Qualys API server URL specific to your region. You can find the exact API server URL for your region [here](https://www.qualys.com/platform-identification/#api-urls)
- **API Server URL**: Enter API Server URL
- **Username**: Enter Qualys username
- **Password**: (password field)
## Step 2: Set Any Optional Filters
Configure optional filters to customize which vulnerabilities are ingested. Learn more about available filters in the [Qualys API documentation](https://docs.qualys.com/en/vm/api/scans/kbase/knowledgebase.htm).
### 2a. Filter by Patch Status 
Choose to only show vulnerabilities that are patchable or not patchable.
- **Include vulnerabilities that are:** (select)
  - Both patchable and unpatchable (default)
  - Patchable only
  - Unpatchable only
### 2b. Filter by Discovery Method and Authentication Types 
Choose to only receive vulnerabilities assigned a certain discovery method or having specific authentication types.
- **Discovery Method** (select)
  - All methods (default)
  - Remote
  - Authenticated
  - Remote Only
  - Authenticated Only
  - ... and 1 more options
- **Discovery Authentication Types**: e.g., Windows, Oracle, Unix, SNMP (comma-separated)
## Step 3: Review and Enable
Review your configuration settings and enable the connector to start ingesting Qualys Knowledge Base data into Microsoft Sentinel.
- Click 'Connect Qualys KB' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

