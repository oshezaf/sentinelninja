# Abnormal Security (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AbnormalSecurity/Data%20Connectors/Logo/abnormalsecurity.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AbnormalSecurityPush` |
| **Publisher** | Abnormal Security |
| **Used in Solutions** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [AbnormalSecurity_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Data%20Connectors/AbnormalSecurity_CCF/AbnormalSecurity_connectorDefinition.json) |
| **CCF Configuration** | [AbnormalSecurity_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Data%20Connectors/AbnormalSecurity_CCF/AbnormalSecurity_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Abnormal Security](https://abnormalsecurity.com) connector pushes real-time security events (threats, cases, audit logs, abuse mailbox reports, posture changes, ATO cases, remediations, and vendor cases) from Abnormal's cloud email security platform into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. Events are routed to per-event-type tables matching the legacy connector naming convention, enabling seamless migration.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_ABUSE_MAILBOX_CL`](../tables/abnormal-security-abuse-mailbox-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_ATO_CASE_CL`](../tables/abnormal-security-ato-case-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_AUDIT_LOG_CL`](../tables/abnormal-security-audit-log-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_CASE_CL`](../tables/abnormal-security-case-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_POSTURE_CHANGE_CL`](../tables/abnormal-security-posture-change-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_REMEDIATION_CL`](../tables/abnormal-security-remediation-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) | ? | ✓ | ? |
| [`ABNORMAL_SECURITY_VENDOR_CASE_CL`](../tables/abnormal-security-vendor-case-cl.md) | ? | ✓ | ? |
| [`AbnormalSecurityLogs_CL`](../tables/abnormalsecuritylogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.
- **Abnormal Security**: Active Abnormal Security subscription with access to the SIEM integration settings.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy Connector Resources**

This connector enables Abnormal Security to push real-time security events directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration
Clicking **Deploy** will create:
- 9 custom log tables for per-event-type routing
- Data Collection Rule (DCR) with 9 streams
- Data Collection Endpoint (DCE) for ingestion
- Microsoft Entra application with OAuth credentials
- Required IAM role assignments (Monitoring Metrics Publisher)

This enables Abnormal Security to securely push events using OAuth 2.0 client credentials.
Deploy Abnormal Security Push Connector

**2. Configure Abnormal Security**

Use the following parameters to configure the Microsoft Sentinel integration in the Abnormal Security Portal.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Fallback Stream Name**: `Custom-AbnormalSecurityLogs`
- **Stream Prefix (for per-event-type routing)**: `Custom-ABNORMAL_SECURITY_`
#### Configure in Abnormal Security Portal
1. Log in to [Abnormal Security Portal](https://portal.abnormalsecurity.com)
2. Navigate to **Settings > Integrations > SIEM**
3. Select **Microsoft Sentinel (Azure Monitor CCF)**
4. Enter all 7 values from above
5. Click **Verify Credentials** to test the connection
6. Click **Save** and **Enable** the integration

**Multi-table routing:** Events are automatically routed to per-event-type tables (e.g., threat logs → `ABNORMAL_SECURITY_THREAT_LOG_CL`, cases → `ABNORMAL_SECURITY_CASE_CL`). Unknown event types go to the fallback table `AbnormalSecurityLogs_CL`.

**3. Verify Data Ingestion**

Confirm events are flowing from Abnormal Security to Sentinel.
Wait 5-10 minutes after enabling the integration, then run this KQL query:

union ABNORMAL_SECURITY_THREAT_LOG_CL, ABNORMAL_SECURITY_CASE_CL, ABNORMAL_SECURITY_AUDIT_LOG_CL, ABNORMAL_SECURITY_ABUSE_MAILBOX_CL, ABNORMAL_SECURITY_POSTURE_CHANGE_CL, ABNORMAL_SECURITY_ATO_CASE_CL, ABNORMAL_SECURITY_REMEDIATION_CL, ABNORMAL_SECURITY_VENDOR_CASE_CL, AbnormalSecurityLogs_CL | where TimeGenerated > ago(1h) | extend event_type = tostring(abx_metadata.event_type) | summarize count() by event_type | order by count_ desc

If no data appears after 15 minutes, verify credentials in the Abnormal Security Portal and check Azure Monitor for ingestion errors.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

