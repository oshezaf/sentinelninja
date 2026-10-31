# QCrypton PQC Scanner (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qcrypton.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `QCryptonPQCScannerCCPDefinition` |
| **Publisher** | QCrypton, Inc. |
| **Used in Solutions** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [QCryptonPQCScanner_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Data%20Connectors/QCryptonPQCScanner_CCF/QCryptonPQCScanner_ConnectorDefinition.json) |
| **DCR Definition Files** | [QCryptonPQCScanner_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Data%20Connectors/QCryptonPQCScanner_CCF/QCryptonPQCScanner_DCR.json) |
| **CCF Configuration** | [QCryptonPQCScanner_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Data%20Connectors/QCryptonPQCScanner_CCF/QCryptonPQCScanner_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The [QCrypton PQC Scanner](https://www.qcrypton.com/) data connector provides the capability to ingest post-quantum cryptography readiness findings from your Azure environment into Microsoft Sentinel through the QCrypton API. Findings include Key Vault key posture (RSA/ECC vs. PQ-hybrid), TLS certificate signature algorithms on public endpoints, Storage Account and App Service TLS configuration, and CMK provenance.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **QCrypton API Key**: A QCrypton PQC Scanner API key is required. Obtain one from the [QCrypton Portal](https://portal.qcrypton.com).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect QCrypton PQC Scanner to Microsoft Sentinel**
This connector polls the QCrypton PQC Scanner API to retrieve post-quantum cryptography readiness findings and ingest them into the **PQReadiness_CL** table in your Log Analytics workspace.
#### 1. API Key
Obtain your QCrypton API key from the [QCrypton Portal](https://portal.qcrypton.com). Navigate to **Settings > API Keys** and generate a key with read access to scan findings.
#### 2. API Server URL
Enter the base URL of your QCrypton API server. The default is `https://api.qcrypton.com`. If you use a dedicated or regional instance, enter the URL provided by QCrypton.
- **QCrypton API Key**: (password field)
- **QCrypton API Server URL**: https://api.qcrypton.com
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

