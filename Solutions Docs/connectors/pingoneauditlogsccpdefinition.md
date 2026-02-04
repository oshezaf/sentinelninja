# Ping One (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `PingOneAuditLogsCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [PingOne](../solutions/pingone.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [PingOneAuditLogs_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingOne/Data%20Connectors/PingOneAuditLogs_ccp/PingOneAuditLogs_DataConnectorDefinition.json) |

This connector ingests **audit activity logs** from the PingOne Identity platform into Microsoft Sentinel using a Codeless Connector Framework.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PingOne_AuditActivitiesV2_CL`](../tables/pingone-auditactivitiesv2-cl.md) | — | ✗ | ✓ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Ping One connector to Microsoft Sentinel**
Before connecting to PingOne, ensure the following prerequisites are completed. Refer to the [document](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingOne/README.md) for detailed setup instructions, including how to obtain client credentials and the environment ID.
#### 1. Client Credentials 
 You'll need client credentials, including your client id and client secret.
#### 2. Environment Id  
 To generate token and gather logs from audit activities endpoint
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Environment ID**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add domain**

*Add domain*

When you click the "Add domain" button in the portal, a configuration form will open. You'll need to provide:

- **Client ID** (optional): Enter ID of the client
- **Client Secret** (optional): Enter your secret key
- **Environment ID** (optional): Enter your environment Id 
- **Api domain** (optional): Enter your Api domain Eg.( pingone.com,pingone.eu etc )depending on the region credentials created for 

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

