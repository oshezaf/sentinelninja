# Alibaba Cloud Networking Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AlibabaCloudNetworkingConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Alibaba Cloud Networking](../solutions/alibaba-cloud-networking.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AlibabaCloudNetworking_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alibaba%20Cloud%20Networking/Data%20Connectors/AlibabaCloudNetworking_CCP/AlibabaCloudNetworking_ConnectorDefinition.json) |
| **CCF Configuration** | [AlibabaCloudNetworking_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Alibaba%20Cloud%20Networking/Data%20Connectors/AlibabaCloudNetworking_CCP/AlibabaCloudNetworking_PollingConfig.json) |
| **CCF Capabilities** | `AliCloudSlsV1`, `Paging` |

The Alibaba Cloud Networking data connector provides the capability to ingest [Alibaba Cloud](https://www.alibabacloud.com/) networking data into Microsoft Sentinel through the Simple Log Service (SLS) REST API. Refer to [API documentation](https://www.alibabacloud.com/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint) for more information. The connector provides the ability to get VPC Flow Logs, WAF Logs, and API Gateway Logs from Alibaba Cloud.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Alibaba Cloud SLS API access**: **Alibaba Cloud Simple Log Service** access is required for the SLS API.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure access to AliCloud SLS API**

Before using the API, you need to prepare your identity account and access key pair to effectively access the API.
1. We recommend that you use a Resource Access Management (RAM) user to call API operations. For more information, see [create a RAM user and authorize the RAM user to access Simple Log Service](https://www.alibabacloud.com/help/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).
2. Obtain the access key pair for the RAM user. For details see [get Access Key pair](https://www.alibabacloud.com/help/ram/user-guide/create-an-accesskey-pair).

Note the access key pair details for the next step.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **LogStore**
- **LogProject**
- **LogRegion**
- **Stream**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Alibaba Data Stream**

*Connect to Alibaba Cloud Data*

When you click the "Add stream" button in the portal, a configuration form will open. You'll need to provide:

- **Access Key ID** (required): Alibaba Cloud Access Key ID
- **Access Key Secret** (required): Alibaba Cloud Access Key Secret
- **Streams** (required): Select from available options
  - VPC Flow Logs
  - WAF Flow Logs
  - API Gateway Logs
- **Log Store name** (required): Enter Log Store name
- **Log Project name** (required): Enter Log Project name
- **Log Region** (required): Enter Log Region where the Log Store is located, e.g. cn-shenzhen

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

