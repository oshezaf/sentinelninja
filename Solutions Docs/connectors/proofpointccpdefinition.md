# Proofpoint On Demand Email Security (via Codeless Connector Platform)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PFPTLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ProofpointCCPDefinition` |
| **Publisher** | Proofpoint |
| **Used in Solutions** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ProofpointPOD_Definaton.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Data%20Connectors/ProofPointEmailSecurity_CCP/ProofpointPOD_Definaton.json) |
| **DCR Definition Files** | [ProofpointPOD_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Data%20Connectors/ProofPointEmailSecurity_CCP/ProofpointPOD_DCR.json) |
| **CCF Configuration** | [ProofpointPOD_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Data%20Connectors/ProofPointEmailSecurity_CCP/ProofpointPOD_PollingConfig.json) |
| **CCF Capabilities** | `WebSocket`, `APIKey` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#proofpoint-on-demand-email-security-via-codeless-connector-platform) |

Proofpoint On Demand Email Security data connector provides the capability to get Proofpoint on Demand Email Protection data, allows users to check message traceability, monitoring into email activity, threats,and data exfiltration by attackers and malicious insiders. The connector provides ability to review events in your org on an accelerated basis, get event log files in hourly increments for recent activity.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | ✓ | ✓ | ✓ |
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.

**Custom Permissions:**
- **Websocket API Credentials/permissions**: **ProofpointClusterID**, and **ProofpointToken** are required. [See the documentation to learn more about API](https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### Configuration steps for the Proofpoint POD Websocket API 
 ####  The PoD Log API does not allow use of the same token for more than one session at the same time, so make sure your token isn't used anywhere. 
 Proofpoint Websocket API service requires Remote Syslog Forwarding license. Please refer the [documentation](https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API) on how to enable and check PoD Log API. 
 You must provide your cluster id and security token.
#### 1. Retrieve the cluster id
   1.1. Log in to the [proofpoint](https://admin.proofpoint.com/) [**Management Console**] with Admin user credentials

   1.2. In the **Management Console**, the cluster id is displayed in the upper-right corner.
#### 2. Retrieve the API token
   2.1. Log in to the [proofpoint](https://admin.proofpoint.com/) [**Management Console**] with Admin user credentials

  2.2. In the **Management Console**, click **Settings** -> **API Key Management** 

  2.3. Under **API Key Management** click on the **PoD Logging** tab.

   2.4. Get or create a new API key.
- **Cluster Id**: cluster_id
- **API Key**: API Key
- Click 'Connect' to establish connection

## Additional Documentation

> 📄 *Source: [Proofpoint On demand(POD) Email Security\Data Connectors\ProofPointEmailSecurity_CCP\readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint On demand(POD) Email Security\Data Connectors\ProofPointEmailSecurity_CCP\readme.md)*

# WebSocket Data Connector - Configuration Reference

#### Note

This documentation is provided as-is for the WebSocket kind connector, considered preview, as of this writing. The references below should be used as a guide to the expected common behaviors rather than an exhaustive list of documentation on the feature.

<br>

## Request Parameters - WebSocket Specific

The following parameters are specific to WebSocket and not covered in the RestApiPoller Request configuration:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `firstWindowBackfillInMin` | `Integer` | `60` | Minutes to backfill on first run when no checkpoint exists. Capped at 60 minutes. Only applies when `startTimeAttributeName` is configured. |

For all other parameters in the `Request` section, refer to the RestApiPoller Codeless Connector Framework (CCF) documentation:
> **📖 [RestApiPoller Data Connector - Request Configuration](https://learn.microsoft.com/en-us/azure/sentinel/data-connector-connection-rules-reference#request-configuration)**

<br>

## Handler Behavior - WebSocket Specific

### Scheme Enforcement
- Use the WebSocket protocol `wss://` only. This is required for the parameter `request.apiEndpoint`

### Idle Timeout
| Timeout | Value | Behavior |
|---------|-------|----------|
| Idle timeout | 20 seconds | If no data received, breaks out of receive loop (success, flushes buffered events) |

### Health Status Codes
| Code | Meaning |
|------|---------|
| `WS40001` | Credential validation failures including API key token invalid, expired, or could not be obtained. Retriable if the credential provider indicates a transient issue; non-retriable for permanent authentication failures. |
| `WS40002` | Rule configuration error. The `CollectorConfig` has invalid or missing required fields. For example, malformed JSON path, missing endpoint, unsupported protocol. The rule will not be retried until the configuration is fixed. |
| `WS40005` | Unhandled exception during the message receive/process loop that is unexpected. This includes errors such request not matching WebSocket, other configuration, or timeout categories. This excludes `OperationCanceledException` exception where the cancellation is not reported. |
| `WS40007` | WebSocket window timeout exceeded. The connection remained open longer than the configured `request.timeoutInSeconds` without completing. |
| `WS40009` | Retriable WebSocket connection or processing failure. This includes transient errors such as connection refused, network timeout, DNS resolution failure (< 6 hours), or server-side issues. The message will be retried with backoff. |
| `WS40012` | SSRF protection blocked the connection. The resolved IP address of `request.apiEndpoint` falls within a disallowed range (RFC 1918 private, loopback, link-local, or cloud metadata endpoints). The rule will not be retried until the endpoint is changed to an allowed address. |
| `WS50020` | Remote API returned a failure status in the response payload. The WebSocket message was received and parsed, but the response body contains a status field indicating the request was not successful (checked via `response.successStatusJsonPath`). |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

