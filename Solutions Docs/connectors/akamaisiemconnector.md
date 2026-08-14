# Akamai Security Events (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/akamai.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AkamaiSIEMConnector` |
| **Publisher** | Akamai |
| **Used in Solutions** | [Akamai DDOS Protection](../solutions/akamai-ddos-protection.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AkamaiDDOSProtection_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20DDOS%20Protection/Data%20Connectors/AkamaiDDOSProtection_CCF/AkamaiDDOSProtection_ConnectorDefinition.json) |
| **DCR Definition Files** | [AkamaiDDOSProtection_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20DDOS%20Protection/Data%20Connectors/AkamaiDDOSProtection_CCF/AkamaiDDOSProtection_DCR.json) |
| **CCF Configuration** | [AkamaiDDOSProtection_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20DDOS%20Protection/Data%20Connectors/AkamaiDDOSProtection_CCF/AkamaiDDOSProtection_PollerConfig.json) |
| **CCF Capabilities** | `EdgeGrid`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#akamai-security-events-via-codeless-connector-framework) |

The [Akamai SIEM Connector](https://techdocs.akamai.com/siem-integration/docs) ingests web application firewall (WAF) security events from the [Akamai SIEM Integration API](https://techdocs.akamai.com/siem-integration/reference/get-config) into Microsoft Sentinel. The connector collects detailed security event data including attack information, geographic context, and HTTP request/response metadata. Authentication uses Akamai EdgeGrid - provide your three EdgeGrid credentials (client_token, access_token, client_secret) plus the API hostname from your .edgerc file. The platform runtime computes a fresh HMAC-SHA-256 signed Authorization header on every poll request per the EdgeGrid specification.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AkamaiSIEMEvent_CL`](../tables/akamaisiemevent-cl.md) |  | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Akamai EdgeGrid API Credentials**: **Client Token**, **Access Token**, and **Client Secret** are required for EdgeGrid HMAC-SHA-256 authentication. These credentials are generated from the [Akamai Control Center](https://control.akamai.com/) under **Identity & Access** > **API Clients**.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Enable Data Collection for SIEM in Akamai Security Center**

Turn on SIEM integration in your Akamai security configuration and note the Web Security Configuration ID.
1. Log in to [Akamai Security Center](https://control.akamai.com/apps/security-center/).
2. Select your security configuration and open the **SIEM Integration** section.
3. Set **Data collection for SIEM** to **On**.
4. Under **Turn on SIEM integration for**, select the security policies to monitor (or choose **All Security Policies**).
5. Choose a **SIEM Event Version** (SIEM Version 01 is recommended).
6. Copy the **Web Security Configuration ID** shown on the page - you will need it in Step 3 below.

**2. Step 2 - Provision EdgeGrid API credentials**

Create an Akamai EdgeGrid API client with the Manage SIEM role and download the .edgerc credentials file.
1. In [Akamai Control Center](https://control.akamai.com/apps/identity-management/#/tabs/users/list), go to **Identity & Access** > **Users**.
2. Create a new user (or select an existing service account) and assign the **Manage SIEM** role.
3. Go to **Identity & Access** > **API Clients** and click **Create API client** > **Quick**.
4. Select the **SIEM** API service and grant **READ** access.
5. Click **Create** and then **Download** to save the `.edgerc` file.
6. The `.edgerc` file contains the four values you will enter in Step 3:

```
[default]
client_secret = <your-client-secret>
host = <your-host>.luna.akamaiapis.net
access_token = akab-<your-access-token>
client_token = akab-<your-client-token>
```

The connector platform computes a fresh HMAC-SHA-256 signed Authorization header on every poll - you do not need to sign anything manually.

**3. Step 3 - Connect Akamai SIEM to Microsoft Sentinel**
**Multi-tenant support:** This connector supports ingesting security events from multiple Akamai security configurations in parallel. Click **Add Connection** once per configuration, supplying that configuration's EdgeGrid credentials, hostname, and Config ID. Each connection is tracked and managed independently in the grid below.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Config ID**
- **Akamai Host**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure Akamai SIEM API Connection**

*Connect to an Akamai security configuration to ingest WAF events*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **Akamai Hostname (from .edgerc "host" field)** (required): akab-xxxx.luna.akamaiapis.net
- **SIEM Config ID(s)** (required): 14227  (or  14227;14228  for multiple configurations)
- **Client Token (from .edgerc "client_token" field)** (required): akab-<your-client-token>
- **Access Token (from .edgerc "access_token" field)** (required): akab-<your-access-token>
- **Client Secret (from .edgerc "client_secret" field)** (required): <your-client-secret>

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

