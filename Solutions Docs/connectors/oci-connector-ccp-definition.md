# 🔍 Oracle Cloud Infrastructure (via CCP) – Preview

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `OCI-Connector-CCP-Definition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [azuredeploy_OCI_DataConnector_poller_connector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure/Data%20Connectors/Oracle_Cloud_Infrastructure_CCP/azuredeploy_OCI_DataConnector_poller_connector.json) |

The Oracle Cloud Infrastructure (OCI) data connector provides the capability to ingest OCI Logs from [OCI Stream](https://docs.oracle.com/iaas/Content/Streaming/Concepts/streamingoverview.htm) into Microsoft Sentinel using the [OCI Streaming REST API](https://docs.oracle.com/iaas/api/#/streaming/streaming/20180418).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) | — | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **OCI Streaming API access**: Access to the OCI Streaming API through a API Signing Keys is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to OCI Streaming API to start collecting Event logs in Microsoft Sentinel**

1) Log in to the OCI console and access the navigation menu.
2) In the navigation menu, go to "Analytics & AI" → "Streaming".
3) Click "Create Stream".
4) Select an existing "Stream Pool" or create a new one.
5) Enter the following details:
   - "Stream Name"
   - "Retention"
   - "Number of Partitions"
   - "Total Write Rate"
   - "Total Read Rate" (based on your data volume)
6) In the navigation menu, go to "Logging" → "Service Connectors".
7) Click "Create Service Connector".
8) Enter the following details:
   - "Connector Name"
   - "Description"
   - "Resource Compartment"
9) Select the "Source": "Logging".
10) Select the "Target": "Streaming".
11) (Optional) Configure "Log Group", "Filters", or use a "custom search query" to stream only the required logs.
12) Configure the "Target" by selecting the previously created stream.
13) Click "Create".
14) Follow the documentation to create a [Private Key and API Key Configuration File](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm).
- **Stream OCID**: Provide the OCI Stream OCID (E.g. ocid1.stream.oc1..xxxxxxEXAMPLExxxxxx)
- **Service Endpoint Base URL**: Provide the Service Endpoint Base URL: (https://cell-1.streaming.ap-hyderabad-1.oci.oraclecloud.com)
- **Cursor Type** (select)
  - Individual Cursor
- **Partition Id**: Provide the Partition Id. (E.g. 0 or 1 or 2)
- **Tenant ID**: OCI Tenant ID (E.g. ocid1.tenancy.oc1..xxxxxxEXAMPLExxxxxx)
- **User ID**: Provide the User Id. (E.g. ocid1.user.oc1..xxxxxxEXAMPLExxxxxx)
- **Pem File Content**: (password field)
- **Pass Phrase**: (password field)
- **Fingerprint**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

