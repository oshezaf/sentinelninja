# CyberArk Audit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyberArkAuditCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyberArkAudit_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Data%20Connectors/CyberArkAudit_CCP/CyberArkAudit_DataConnectorDefinition.json) |
| **CCF Configuration** | [CyberArkAudit_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Data%20Connectors/CyberArkAudit_CCP/CyberArkAudit_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `POST`, `Nested` |

The [CyberArk Audit](https://docs.cyberark.com/Audit/Latest/en/Content/Resources/_TopNav/cc_Home.htm) data connector enables Microsoft Sentinel to ingest security event logs and other events from the CyberArk Audit service via REST API. This integration helps you detect potential security risks, monitor user activity, analyze collaboration patterns, troubleshoot configuration issues, and gain deeper insights into your environment.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **CyberArk Audit Service Platform**: Access to perform required configurations in CyberArk Audit platform

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to CyberArk Audit API to start collecting event logs in Microsoft Sentinel**

Follow the steps below to integrate Microsoft Sentinel with CyberArk Audit and enable centralized monitoring of system and user activities within Microsoft Sentinel. You can also refer to the [CyberArk Audit documentation](https://docs.cyberark.com/admin-space/latest/en/content/siem-integration/siem-export-ms-sentinel.htm?tocpath=Integrations%7CExport%20Audit%20activities%20to%20a%20SIEM%20application%7C_____2#CreateandconfigureaSIEMintegration) and follow till Step 5.
# Step1: Create new SIEM integration
1. On CyberArk portal, go to `Administration`.
2. Select `My environment` > `Integrations` > `Export to SIEM`.
3. In the SIEM integrations page, select `Create` > `Create SIEM integration`
4. In the `Create a SIEM integration` page, select the `Identity Administration` link to create an OAuth server web in Identity Administration.
# Step 2: Create an OAuth2 server web app in Identity Administration
1. On `Identity Administration` page, from the left menu select `Apps & Widgets` > `Web Apps`
2. Select `Add Web Apps` and create an `OAuth2 server` type web app from the `Custom` tab.
3. Enter `CyberArkAuditforMicrosoftSentinel` in the `ApplicationID` and `Name` fields.
4. In the `Tokens` tab, ensure that the value in the `Token Type` field is `jwtR256` and only the `Client Creds` authorization method is selected.
5. Click `Add` in the `Scope` tab and enter `isp.audit.events:read`.
6. In the `Advanced` tab, copy and paste the following script and then click Save.
```javascript
		setClaim('tenant_id', TenantData.Get("CybrTenantID"));
		setClaim('aud', 'cyberark.isp.audit');
```
7. Click `Save`.
# Step 3: Create a service user in Identity Administration
1. Go to the `Core Services` > `Users`, select `Add User`.
2. In the `Account` section, enter the `Login name` and `Display name` as `MicrosoftSentinel`. Add a new password or generate the password automatically.
3. Select `OAuth confidential client`.
4. In the `Application Settings` tab, click `Add`.
5. Select the `CyberArkAuditforMicrosoftSentinel` application. This is the name you created in the web service.
# Step 4: Grant web app permissions to the service user
1. Go to the `CyberArkAuditforMicrosoftSentinel` web app you created.
2. In the `Permissions` tab, click `Add` to find your user `MicrosoftSentinel` and then click `Add`.
3. Set the following permissions for the user:
   - Grant
   - View
   - Run
   - Automatically deploy
# Step 5: Define the integration description
1. Go to `Administration`.
2. Select `My environment` > `Integrations` > `Export to SIEM`.
3. Select `Create` > `Create SIEM integration`.
4. Enter the name as `Microsoft Sentinel Integration` and optionally add a description.
5. Click `Apply`.
# Step 6: Connect CyberArk Audit Service with Microsoft Sentinel Data Connector
> **Note:** Copy all the details you captured in the previous steps and connect with the CyberArk Audit service.
- **OAuth2 Server App Name**: e.g. AuditforMicrosoftSentinel
- **Audit API Key**: (password field)
- **Identity Endpoint**: e.g. kln9281.id.cyberark.cloud
- **Audit API Base URL**: e.g. org-test.audit.cyberark.cloud
- **Audit Query Filter Action (Optional)**: e.g. {"op":"include","params":["cloud.core.login","cloud.core.mfasummary"]}
- **Audit Query Filter Application Code (Optional)**: e.g. {"op":"include","params":["IDP","CMS"]}
- **Audit Query Filter Audit Type (Optional)**: e.g. {"op":"include","params":["Failure"]}
- **OAuth Configuration**:
  - Oauth Username
  - Oauth Password
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

