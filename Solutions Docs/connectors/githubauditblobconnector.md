# GitHub Enterprise Audit Log (via Azure Storage)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GitHub.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GitHubAuditBlobConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [GitHub](../solutions/github.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Data%20Connectors/GitHubAuditLogs_AzStorage/ConnectorDefinition.json) |
| **DCR Definition Files** | [DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Data%20Connectors/GitHubAuditLogs_AzStorage/DCR.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Data%20Connectors/GitHubAuditLogs_AzStorage/PollingConfig.json) |
| **CCF Capabilities** | `StorageAccountBlobContainer`, `ServicePrincipal` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#github-enterprise-audit-log-via-azure-storage) |

The GitHub audit log connector ingests GitHub Enterprise audit logs into Microsoft Sentinel from Azure Blob Storage with near real-time latency. GitHub streams audit logs to Blob Storage in near real time, and the connector polls the Azure Storage Queue for new blob-created notifications every 5 minutes (default polling interval). By connecting GitHub audit logs to Microsoft Sentinel, you can view this data in workbooks, create custom alerts, and improve your investigation process.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GitHubAuditLogsV3_CL`](../tables/githubauditlogsv3-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra ID - Admin Consent (one-time per tenant)**: The connector uses Microsoft's **ScubaSentinelToStorageProd** enterprise application to access your storage account. If this app has not been previously consented to in your tenant, a user with one of the following roles must click **'Grant tenant-wide admin consent'** on the connector page before proceeding:
- **Cloud Application Administrator** *(minimum required role)*
- **Application Administrator**
- **Global Administrator**

> **Note:** This is a one-time action per tenant. If the service principal already exists (i.e., another connector using ScubaSentinelToStorageProd was previously configured in this tenant), the service principal ID will be auto-populated and no action is needed.
- **Subscription permissions**: You need the following permissions to deploy the connector's data flow resources:
- **Contributor** role on the subscription or resource group - to deploy Event Grid, storage queues, DCR, and related connector resources.
- **Owner** or **User Access Administrator** role on the Storage Account - to assign RBAC roles to the Microsoft Sentinel service principal.
- **Owner** or **Event Grid Contributor** role on the Storage Account - to create Event Grid system topics and event subscriptions.

> **Note:** The `Microsoft.EventGrid` resource provider must be [registered](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types) in the subscription containing the storage account.
- **Storage Account Requirements**: The Azure Blob Storage account must meet the following requirements:
- **Azure Data Lake Storage Gen2 (hierarchical namespace enabled)** - standard storage accounts are not supported.
- A blob container already configured to receive GitHub Enterprise audit log streaming.
- **Storage Account Network Configuration**: IP-based network rules (selected networks / IPv4 CIDR) are **not supported** for this connector due to [Azure Storage firewall restrictions and limitations](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security-limitations):
- IP network rules have **no effect** on requests originating from the same Azure region as the storage account.
- IP network rules **cannot restrict** access to Azure services deployed in the same region, as these services use private Azure IP addresses for communication.
- Virtual network service endpoint rules do not apply to clients in a paired region.

**Options:**
- **No network restrictions needed?** Set the storage account's **Networking** blade to **Enabled from all networks**.
- **Need to restrict access?** Use [Network Security Perimeter (NSP)](https://learn.microsoft.com/en-us/azure/sentinel/enable-storage-network-security) to whitelist Scuba IPv4 addresses. Note: only IPv4 addresses are currently supported for NSP inbound rules; IPv6 is not supported. There is an ongoing effort with the NSP team to support service tags, which will eliminate the need for manual IP management in the future.

**Important:** Do **not** configure network rules based on GitHub IP ranges. GitHub does not provide stable IP ranges as the source of audit log streaming, and those IPs may change without notice.
- **Storage Account Role Assignments**: The following Azure RBAC roles must be assigned to the Microsoft Sentinel enterprise application service principal (displayed below) on the **Storage Account** that contains your blob container:
- **Storage Blob Data Reader** - required for reading blob data from the container.
- **Storage Queue Data Contributor** - required for managing notification and dead-letter queue messages.

To assign these roles: navigate to the Storage Account -> **Access Control (IAM)** -> **Add role assignment**, search for the service principal ID shown below, and assign both roles.
- **Collecting GitHub audit logs to your blob container**: Follow the steps in the [GitHub documentation](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-streaming-to-azure-blob-storage) to configure audit log streaming to your Azure Blob Storage container.

- When following the guidance to generate a SAS token, two signing methods are supported: **Account key** and **User delegation key**. 

For the **Account key** method, we recommend first creating a [Stored Access Policy](https://learn.microsoft.com/en-us/rest/api/storageservices/define-stored-access-policy) and then generating the SAS tied to that policy. 

Binding the SAS to a policy lets you change its expiry and permissions, or revoke it, on the server side. This enables seamless rotation by updating the policy rather than reissuing the token.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect GitHub Audit Logs to Microsoft Sentinel**

Use the connection grid to add and manage GitHub Audit Log blob connections.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect GitHub Audit Logs to Microsoft Sentinel**

*Provide the required storage information for a new connection.*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Connection configuration*

- **Connection alias** (required): e.g. Production
- **The blob container URL you want to collect data from** (optional)
- **The blob folder name in the container. Optional.** (optional)
- **The blob container's storage account location** (optional): eastus
- **The blob container's storage account resource group name** (optional)
- **The blob container's storage account subscription id** (optional)
- **The Event Grid system topic name for the storage account, if one exists; otherwise, leave empty.** (optional)

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


**2. Blob Lifecycle Policy (Recommended)**

To prevent unbounded storage growth, configure a [lifecycle management policy](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview) on your storage account to automatically delete blobs after a retention period (for example, 7 days). Once the connector ingests the audit logs into Microsoft Sentinel, the source blobs are no longer needed.

To create a lifecycle rule scoped to your container:
1. Navigate to your **Storage Account** -> **Data management** -> **Lifecycle management**.
2. Click **Add a rule** and configure:
   - **Rule name:** for example, `github-audit-cleanup`
   - **Rule scope:** Select **Limit blobs with filters** and set the **Prefix match** to your container name (for example, `my-container/`). This ensures the rule applies only to blobs in that container.
   - **Blob type:** Block blobs.
   - **Base blobs:** Delete blobs that were last modified more than **7 days** ago (adjust as needed).
3. Save the rule.

> **Note:** Each storage account has a single management policy that can contain multiple rules. Each rule can target a specific container via prefix filters. If you already have a lifecycle policy, add a new rule to the existing policy rather than creating a new one.

**3. Reference**

For detailed instructions on setting up the Azure Storage connector to stream logs to Microsoft Sentinel, see [Set up Azure Storage connector](https://learn.microsoft.com/en-us/azure/sentinel/setup-azure-storage-connector).

**4. Troubleshooting**

If you encounter issues with data ingestion:
- **Enable the health feature** - If the connector health feature isn't enabled, enable it to monitor connector status and detect issues early.
- **Enable diagnostic logs** - Consider enabling diagnostic logs for both the **Storage Account** and **Event Grid** resources to help identify and troubleshoot health issues.
- For more details, see [Troubleshoot Azure Storage Blob connector issues](https://learn.microsoft.com/en-us/azure/sentinel/azure-storage-blob-connector-troubleshoot).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

