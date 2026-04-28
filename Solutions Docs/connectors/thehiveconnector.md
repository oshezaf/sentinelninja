# TheHive (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TheHiveConnector` |
| **Publisher** | TheHive |
| **Used in Solutions** | [TheHive](../solutions/thehive.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Data%20Connectors/CCF/ConnectorDefinition.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Data%20Connectors/CCF/PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |

The TheHive data connector provides the capability to ingest [TheHive](https://thehive-project.org/) security incident response platform data into Microsoft Sentinel through the REST API. Refer to [API documentation](https://docs.thehive-project.org/thehive/legacy/thehive3/api/api-guide/) for more information. The connector provides the ability to get cases, tasks, and alerts from TheHive and visualize them in Azure Sentinel.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **TheHive API access**: **TheHive API Version 4 and above** access is required for the TheHive API.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration**

Follow the instructions to configure the TheHive connector.
- **TheHive Base URL**: TheHive instance base URL (e.g., https://thehive.example.com)
> Get the api Key from your TheHive user profile settings. (or a dedicated user created for this purpose)
- **Api Key**: (password field)

**2. Connect**

Enable the TheHive connector.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

