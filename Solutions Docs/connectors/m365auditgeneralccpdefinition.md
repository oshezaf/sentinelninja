# ⚠️ Microsoft 365 Audit.General

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/office365_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `M365AuditGeneralCCPDefinition` |
| **Publisher** | Marko Lauren |
| **Used in Solutions** | [Microsoft 365 Audit General and DLP](../solutions/microsoft-365-audit-general-and-dlp.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [M365AuditGeneral_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP/Data%20Connectors/M365AuditGeneral_CCF/M365AuditGeneral_ConnectorDefinition.json) |
| **DCR Definition Files** | [M365Audit_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP/Data%20Connectors/M365AuditGeneral_CCF/M365Audit_DCR.json) |
| **CCF Configuration** | [M365AuditGeneral_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP/Data%20Connectors/M365AuditGeneral_CCF/M365AuditGeneral_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |

Microsoft 365 Audit.General connector ingests **all SharePoint, Exchange, Teams, and Azure Active Directory events** from the Office 365 Management Activity API.



Data is ingested to a custom **M365AuditGeneral_CL** table with **321 columns** supporting all Office 365 record types and workloads.



**Prerequisites:** Entra ID app with Office 365 Management API permissions and Audit.General subscription.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`M365AuditGeneral_CL`](../tables/m365auditgeneral-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Office 365 Management API credentials**: An Entra ID application registration with **Client ID** and **Client Secret**. The application must have **Office 365 Management APIs - ActivityFeed.Read** permission and an active subscription to the **Audit.General** content type.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Register an Entra ID Application**

1. Go to **Microsoft Entra ID** > **App registrations** > **New registration**
2. Name: `Sentinel-M365Audit` (or your preferred name)
3. **Supported account types**: Accounts in this organizational directory only
4. Click **Register**
5. Note the **Application (client) ID** - you'll need this later
6. Go to **Certificates & secrets** > **New client secret**
7. Add a description, set expiration, click **Add**
8. **Copy the secret Value immediately** - it won't be shown again

**2. Configure API Permissions**

1. In your app registration, go to **API permissions** > **Add a permission**
2. Select **Office 365 Management APIs**
3. Choose **Application permissions**
4. Select **ActivityFeed.Read**
5. Click **Add permissions**
6. Click **Grant admin consent** for your tenant
7. Verify the permission shows as **Granted**

**3. Subscribe to Audit.General Content**

[concat('Run this PowerShell script to subscribe to the Audit.General content type (required before data flows):

```powershell
# Replace with your values
$tenantId = ''YOUR_TENANT_ID''
$clientId = ''YOUR_CLIENT_ID''
$clientSecret = ''YOUR_CLIENT_SECRET''
$publisherId = $tenantId  # Publisher identifier is your tenant ID

# Get OAuth token
$body = @{
    grant_type    = ''client_credentials''
    client_id     = $clientId
    client_secret = $clientSecret
    resource      = ''https://manage.office.com''
}
$tokenResponse = Invoke-RestMethod -Method Post -Uri "', environment().authentication.loginEndpoint, '$tenantId/oauth2/token" -Body $body
$token = $tokenResponse.access_token

# Start subscription
$headers = @{Authorization = "Bearer $token"}
$subscribeUri = "https://manage.office.com/api/v1.0/$tenantId/activity/feed/subscriptions/start?contentType=Audit.General&PublisherIdentifier=$publisherId"
Invoke-RestMethod -Method Post -Uri $subscribeUri -Headers $headers
```')]

**4. Connect the Data Connector**

Provide your Entra ID application credentials below. The connector will automatically use your subscription's tenant ID for authentication and API calls.
- **OAuth Configuration**:
  - Application (Client) ID
  - Client Secret Value
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

