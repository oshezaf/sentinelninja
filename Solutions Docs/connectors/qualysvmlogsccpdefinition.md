# Qualys Vulnerability Management (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qualys_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `QualysVMLogsCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [QualysVM](../solutions/qualysvm.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [QualysVMHostLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Data%20Connectors/QualysVMHostLogs_ccp/QualysVMHostLogs_ConnectorDefinition.json) |
| **DCR Definition Files** | [QualysVMHostLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Data%20Connectors/QualysVMHostLogs_ccp/QualysVMHostLogs_DCR.json) |
| **CCF Configuration** | [QualysVMHostLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Data%20Connectors/QualysVMHostLogs_ccp/QualysVMHostLogs_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#qualys-vulnerability-management-via-codeless-connector-framework) |

The [Qualys Vulnerability Management (VM)](https://www.qualys.com/apps/vulnerability-management/) data connector provides the capability to ingest vulnerability host detection data into Microsoft Sentinel through the Qualys API. The connector provides visibility into host detection data from vulerability scans.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **API access and roles**: Ensure the Qualys VM user has a role of Reader or higher. If the role is Reader, ensure that API access is enabled for the account. Auditor role is not supported to access the API. For more details, refer to the Qualys VM [Host Detection API](https://docs.qualys.com/en/vm/qweb-all-api/mergedProjects/qapi-assets/host_lists/host_detection.htm#v_5_0) and [User role Comparison](https://docs.qualys.com/en/vm/latest/user_accounts/user_roles_comparison_vm.htm) document.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Qualys Vulnerability Management to Microsoft Sentinel**
>**NOTE:** To gather data for Detections based on Host, expand the **DetectionList** column in the table.
To gather data from Qualys VM, you need to provide the following resources
#### 1. API Credentials 
 To gather data from Qualys VM, you'll need Qualys API credentials, including your Username and Password.
#### 2. API Server URL 
 To gather data from Qualys VM, you'll need the Qualys API server URL specific to your region. You can find the exact API server URL for your region [here](https://www.qualys.com/platform-identification/#api-urls)
- **Qualys API User Name**: Enter UserName
- **Qualys API Password**: (password field)
- **Qualys API Server URL**: e.g. https://qualysapi.qg1.apps.qualys.com
#### 3. Truncation Limit 
 Configure the maximum number of host detection records to retrieve per API call. **Recommended: 1000 (Qualys default).** Lower values reduce response size and are safer for large environments or slow API servers but require more paginated calls. Higher values increase response size and risk API timeouts, especially on large environments. Values below 500 may cause excessive pagination that exceeds processing limits on large deployments.
**Timeout limit:** The maximum allowed API timeout is **5 minutes (300 seconds)**. This is the platform maximum and cannot be raised. For large environments, lower the **Truncation Limit** to keep each API response within this limit.
- **Truncation Limit** (select)
  - 1000 - Recommended default (Qualys default, best balance)
  - 20 - Not recommended for large environments (risk of pagination timeout)
  - 100 - Small environments only
  - 500 - Suitable for medium to large environments
  - 2500 - Risk of API timeout on large or slow environments
  - ... and 1 more options
- ** Show QDS Value** (select)
  - False (default)
  - True
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

