# Veeam Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/VeeamLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VeeamConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Veeam](../solutions/veeam.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Veeam_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Data%20Connectors/Veeam_CCF/Veeam_ConnectorDefinition.json) |
| **DCR Definition Files** | [Veeam_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Data%20Connectors/Veeam_CCF/Veeam_DCR.json) |
| **CCF Configuration** | [Veeam_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Data%20Connectors/Veeam_CCF/Veeam_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#veeam-data-connector-using-azure-functions) |

Veeam Data Connector allows you to ingest Veeam telemetry data from multiple custom tables into Microsoft Sentinel.



The connector supports integration with Veeam Backup & Replication, Veeam ONE and Coveware platforms to provide comprehensive monitoring and security analytics. The data is collected through Azure Functions and stored in custom Log Analytics tables with dedicated Data Collection Rules (DCR) and Data Collection Endpoints (DCE).



**Custom Tables Included:**

- **VeeamMalwareEventsV2_CL**: Malware detection events from Veeam Backup & Replication

- **VeeamSecurityComplianceAnalyzerV2_CL**: Security & Compliance Analyzer results collected from Veeam backup infrastructure components

- **VeeamAuthorizationEventsV2_CL**: Authorization and authentication events

- **VeeamOneTriggeredAlarmsV2_CL**: Triggered alarms from Veeam ONE servers

- **VeeamCovewareFindingsV2_CL**: Security findings from Coveware solution

- **VeeamSessionsV2_CL**: Veeam sessions

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VeeamAuthorizationEventsV2_CL`](../tables/veeamauthorizationeventsv2-cl.md) | ? | ✓ | ? |
| [`VeeamCovewareFindingsV2_CL`](../tables/veeamcovewarefindingsv2-cl.md) | ? | ✓ | ? |
| [`VeeamMalwareEventsV2_CL`](../tables/veeammalwareeventsv2-cl.md) | ? | ✓ | ? |
| [`VeeamOneTriggeredAlarmsV2_CL`](../tables/veeamonetriggeredalarmsv2-cl.md) | ? | ✓ | ? |
| [`VeeamSecurityComplianceAnalyzerV2_CL`](../tables/veeamsecuritycomplianceanalyzerv2-cl.md) | ? | ✓ | ? |
| [`VeeamSessionsV2_CL`](../tables/veeamsessionsv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Veeam Data Access**: Access to Veeam systems is required to collect security and operational data. The connector supports data ingestion from Veeam Backup & Replication, Veeam ONE, and Coveware platforms.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**

Follow the instructions to configure the Veeam Data Connector.

ℹ️ **Note:** This data connector depends on parsers based on Kusto Functions to work as expected. These parsers are installed with the Microsoft Sentinel Solution for Veeam.

**1. Configuration steps for Veeam Data Connector**
1. Configure your Veeam systems to export security and operational data.
2. Set up data collection endpoints to ingest data into the custom Log Analytics tables.
3. Ensure proper permissions are configured for data access.
4. Verify connectivity and data flow to Microsoft Sentinel.

**2. Coveware API Configuration**

Configure Coveware API credentials for security findings data collection.
#### 2.1 Obtain Coveware API Credentials
1. Log in to your Coveware management console
2. Navigate to API settings or integrations section
3. Create or configure an API application
4. Generate or obtain a Bearer token for API access
5. Note your Coveware API base URL
- **Coveware API URL**: https://api.coveware.com
- **Coveware Bearer Token**: (password field)

**3. Veeam API Configuration**

Configure Veeam API credentials for all Veeam services (Malware Events, Security Analyzer, and Authorization Events).
#### 3.1 Obtain Veeam API Access Token
1. Access your Veeam Backup & Replication management console
2. Navigate to the REST API settings or authentication section
3. Generate or obtain a Bearer token for API access
4. Ensure the token has appropriate permissions for:
   - Malware Detection API (v1.3-rev1)
   - Security & Compliance Analyzer API (v1.3-rev1)
   - Authorization Events API (v1.3-rev1)
   - Sessions API (v1.3-rev1)
5. Note the API base URL (typically https://your-veeam-server.com:9419)
6. This token will be used for both on-premises and CDN-hosted APIs
- **Veeam API URL**: https://your-veeam-server.com:9419
- **Veeam Bearer Token**: (password field)

**4. Veeam ONE API Configuration**

Configure Veeam ONE API credentials for triggered alarms data collection.
#### 4.1 Obtain Veeam ONE API Access Key
1. Access your Veeam ONE management console
2. Navigate to Administration -> Users and Roles
3. Create or use an existing user with API access permissions
4. Generate or obtain a Bearer token for API access
5. Note the Veeam ONE server URL and port (typically https://your-veeam-one-server:1239)
- **Veeam ONE API URL**: https://your-veeam-one-server:1239
- **Veeam ONE API Bearer Token**: (password field)

**5. Connect**

Enable the Veeam Data Connector.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

