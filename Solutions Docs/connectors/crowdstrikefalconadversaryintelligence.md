# CrowdStrike Falcon Adversary Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/Logo/crowdstrike.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CrowdStrikeFalconAdversaryIntelligence` |
| **Publisher** | CrowdStrike |
| **Used in Solutions** | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| **Collection Method** | [Azure Function (TI Upload API)](../methods/azure-function-ti-upload-api.md) |
| **Connector Definition Files** | [CrowdStrikeFalconAdversaryIntelligence_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeFalconAdversaryIntelligence/CrowdStrikeFalconAdversaryIntelligence_FunctionApp.json) |
| **Ingestion API** | [STIX 2.0 Upload Indicators API](../methods/stix-2.0-upload-indicators-api.md) — *Connector code references STIX 2.0 Upload Indicators API endpoint (matched 'threatintelligenceindicators:upload')* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#crowdstrike-falcon-adversary-intelligence--using-azure-functions) |

The [CrowdStrike](https://www.crowdstrike.com/) Falcon Indicators of Compromise connector retrieves the Indicators of Compromise from the Falcon Intel API and uploads them [Microsoft Sentinel Threat Intel](https://learn.microsoft.com/en-us/azure/sentinel/understand-threat-intelligence).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `SourceSystem == "CrowdStrike Falcon Adversary Intelligence"` | ✓ | ✓ | ✗ |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) |  | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **CrowdStrike API Client ID and Client Secret**: **CROWDSTRIKE_CLIENT_ID**, **CROWDSTRIKE_CLIENT_SECRET**, **CROWDSTRIKE_BASE_URL**. CrowdStrike credentials must have Indicators (Falcon Intelligence) read scope.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**STEP 1 - [Generate CrowdStrike API credentials](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/).**

Make sure 'Indicators (Falcon Intelligence)' scope has 'read' selected

**STEP 2 - [Register an Entra App](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) with client secret.**

Provide the Entra App principal with 'Microsoft Sentinel Contributor' role assignment on the respective log analytics workspace. [How to assign roles on Azure](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal).

**STEP 3 - Choose ONE from the following two deployment options to deploy the connector and the associated Azure Function**

>**IMPORTANT:** Before deploying the CrowdStrike Falcon Indicator of Compromise connector, have the Workspace ID (can be copied from the following).
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**6. Option 1 - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the CrowdStrike Falcon Adversary Intelligence connector connector using an ARM Tempate.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-CrowdStrikeFalconAdversaryIntelligence-azuredeploy)
2. Provide the following parameters: CrowdStrikeClientId, CrowdStrikeClientSecret, CrowdStrikeBaseUrl, WorkspaceId, TenantId, Indicators, AadClientId, AadClientSecret, LookBackDays

**7. Option 2 - Manual Deployment of Azure Functions**

Use the following step-by-step instructions to deploy the CrowdStrike Falcon Adversary Intelligence connector manually with Azure Functions (Deployment via Visual Studio Code).

**1. Deploy a Function App**

> **NOTE:** You will need to [prepare VS code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-python#prerequisites) for Azure function development.

1. Download the [Azure Function App](https://aka.ms/sentinel-CrowdStrikeFalconAdversaryIntelligence-Functionapp) file. Extract archive to your local development computer.
2. Start VS Code. Choose File in the main menu and select Open Folder.
3. Select the top level folder from extracted files.
4. Choose the Azure icon in the Activity bar, then in the **Azure: Functions** area, choose the **Deploy to function app** button.
If you aren't already signed in, choose the Azure icon in the Activity bar, then in the **Azure: Functions** area, choose **Sign in to Azure**
If you're already signed in, go to the next step.
5. Provide the following information at the prompts:

	a. **Select folder:** Choose a folder from your workspace or browse to one that contains your function app.

	b. **Select Subscription:** Choose the subscription to use.

	c. Select **Create new Function App in Azure** (Don't choose the Advanced option)

	d. **Enter a globally unique name for the function app:** Type a name that is valid in a URL path. The name you type is validated to make sure that it's unique in Azure Functions. (e.g. CrowdStrikeFalconIOCXXXXX).

	e. **Select a runtime:** Choose Python 3.12.

	f. Select a location for new resources. For better performance and lower costs choose the same [region](https://azure.microsoft.com/regions/) where Microsoft Sentinel is located.

6. Deployment will begin. A notification is displayed after your function app is created and the deployment package is applied.
7. Go to Azure Portal for the Function App configuration.

**2. Configure the Function App**

1. In the Function App, select the Function App Name and select **Configuration**.
2. In the **Application settings** tab, select ** New application setting**.
3. Add each of the following application settings individually, with their respective string values (case-sensitive): 
		CROWDSTRIKE_CLIENT_ID
		CROWDSTRIKE_CLIENT_SECRET
		CROWDSTRIKE_BASE_URL
		TENANT_ID
		INDICATORS
		WorkspaceKey
		AAD_CLIENT_ID
		AAD_CLIENT_SECRET 
		LOOK_BACK_DAYS 
		WORKSPACE_ID  
4. Once all application settings have been entered, click **Save**.

## Additional Documentation

> 📄 *Source: [CrowdStrike Falcon Endpoint Protection\Data Connectors\CrowdStrikeFalconAdversaryIntelligence\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike Falcon Endpoint Protection\Data Connectors\CrowdStrikeFalconAdversaryIntelligence\README.md)*

# CrowdStrike Falcon Adversary Intelligence – Data Connector

## **Summary**

This Microsoft Sentinel data connector enables ingestion of **threat intelligence indicators** from the **CrowdStrike Falcon Intelligence** API. It fetches indicators of compromise (IOCs), converts them to **STIX 2.1** format, and uploads them to the Microsoft Sentinel threat intelligence store.

The connector runs as an **Azure Function App** on a 10-minute timer trigger, giving security teams continuously updated, high-confidence threat intelligence to power analytics, hunting, and incident detection.

---

## **Features**

- Connects to the **CrowdStrike Falcon Intelligence REST API** using OAuth 2.0 client credentials authentication.
- Converts CrowdStrike indicators to **STIX 2.1** and uploads them via the Microsoft Sentinel threat intelligence upload API.
- Supports a wide range of indicator types: file hashes (MD5/SHA-1/SHA-256), URLs, domains, IP addresses, mutexes, file names, email addresses, usernames, and wallet/coin addresses.
- Maps CrowdStrike `malicious_confidence` (high/medium/low) to STIX confidence scores (85/60/30).
- Uses incremental, marker-based pagination with **state persistence** in an Azure File Share so each run resumes where the previous one left off.
- Time-aware batching: exits gracefully before the next execution window to prevent overlapping runs.

---

## **Prerequisites**

1. A valid **CrowdStrike Falcon** tenant with an **Intelligence** subscription.
2. An **API Client** configured in CrowdStrike Falcon with:
   - **Client ID**
   - **Client Secret**
   - **Base URL** (region-specific)
   - The `indicators:read` API scope.
3. An **Azure AD application** (service principal) used to authenticate to the Microsoft Sentinel threat intelligence upload API, with:
   - **Tenant ID**
   - **Client ID**
   - **Client Secret**
   - The **Microsoft Sentinel Contributor** role assigned on the target workspace.
4. Access to an Azure subscription with **Microsoft Sentinel** enabled and permissions to deploy a Function App.

---

## **Generating CrowdStrike Falcon API Credentials**

### **1. Access the Falcon Console**
1. Sign into the **CrowdStrike Falcon console**.
2. Navigate to **Support & Resources** → **API clients and keys**.

### **2. Create API Client**
1. Click **Create/Add new API client**.
2. Provide a descriptive **name** and **description** for the connector.
3. Grant the **`indicators:read`** scope.
4. Note the **Client ID** and **Client Secret** (the secret is displayed only once).

### **3. Identify Your Base URL**

| **Region** | **Base URL** |
|------------|--------------|
| US-1 | `https://api.crowdstrike.com` |
| US-2 | `https://api.us-2.crowdstrike.com` |
| EU-1 | `https://api.eu-1.crowdstrike.com` |
| US-GOV-1 | `https://api.laggar.gcw.crowdstrike.com` |

---

## **Deployment Parameters**

When deploying the connector, you'll provide the following parameters:

| **Parameter** | **Required** | **Description** |
|---------------|:---:|-----------------|
| `FunctionName` | Yes | A name for the deployed Function App. |
| `CrowdStrikeClientId` | Yes | CrowdStrike API client ID. |
| `CrowdStrikeClientSecret` | Yes | CrowdStrike API client secret. |
| `CrowdStrikeBaseUrl` | Yes | Region-specific CrowdStrike API base URL (see table above). |
| `WorkspaceId` | Yes | Microsoft Sentinel workspace ID. |
| `TenantId` | Yes | Azure AD tenant ID. |
| `AadClientId` | Yes | Azure AD application client ID. |
| `AadClientSecret` | Yes | Azure AD application client secret. |
| `Indicators` | Yes | Comma-separated indicator types to ingest (e.g. `url,hash_md5,domain,ip_address`). |
| `LookBackDays` | No | Time window (in days) used on the first run only. Default `1`, maximum `60`. |

### **Supported indicator types**

The `Indicators` parameter accepts any combination of the following types:

`hash_md5`, `hash_sha256`, `hash_sha1`, `url`, `domain`, `ip_address`, `mutex_name`, `password`, `file_name`, `email_address`, `username`, `persona_name`, `ip_address_block`, `coin_address`, `bitcoin_address`.

### **Optional application settings**

These can be set as Application Settings on the Function App after deployment:

| **Setting** | **Default** | **Description** |
|-------------|:---:|-----------------|
| `VALIDUNTIL` | `20m` | Duration string (`m`, `h`, or `d` — e.g. `20m`, `2h`, `7d`) that sets the STIX `valid_until` field on uploaded indicators. |

### **Optional: VNet integration**

By default the Function App and its storage account are publicly accessible. For a network-isolated deployment, the ARM template can provision a Virtual Network, integrate the Function App with it, and route storage access through private endpoints. Set `EnableVNetIntegration` to `true` to enable this; all other VNet parameters are ignored when it is `false`. Be aware that this will increase your Azure costs through private endpoints and a new consumption plan.

| **Parameter** | **Default** | **Description** |
|---------------|:---:|-----------------|
| `EnableVNetIntegration` | `false` | Set to `true` to deploy a VNet and integrate the Function App with it. When `false`, VNet resources are skipped and storage remains publicly accessible. |
| `VNetAddressPrefix` | `10.0.0.0/16` | Address space for the Virtual Network in CIDR notation. |
| `SubnetName` | `snet-functionapp` | Name of the subnet delegated to the Function App for VNet integration. |
| `SubnetAddressPrefix` | `10.0.0.0/24` | Address prefix for the Function App integration subnet. Must be within the VNet address space. Minimum `/28`. |
| `PrivateEndpointSubnetName` | `snet-privateendpoints` | Name of the subnet used for storage private endpoints. Must not be delegated. |
| `PrivateEndpointSubnetAddressPrefix` | `10.0.1.0/24` | Address prefix for the private endpoint subnet. Must be within the VNet address space and not overlap with the Function App subnet. |
| `UseExistingDnsZones` | `false` | Set to `true` when the private DNS zones and their VNet links already exist (e.g. from a prior deployment). Skips creating DNS zones and VNet links to avoid conflicts. |

---

## **Deployment Instructions**

### **1. Open the Connector Page**

1. Go to **Microsoft Sentinel** → **Data Connectors**.
2. Search for and select **CrowdStrike Falcon Adversary Intelligence (using Azure Functions)**.
3. Click **Open connector page**.

### **2. Complete the Prerequisite Steps**

On the connector page, complete the configuration steps:

- **STEP 1 — Generate CrowdStrike API credentials.** Create an API client with the **Indicators (Falcon Intelligence)** scope set to **read**, and note the **Client ID**, **Client Secret**, and region-specific **Base URL**.
- **STEP 2 — Register a Microsoft Entra application** with a client secret, and assign it the **Microsoft Sentinel Contributor** role on the target Log Analytics workspace. Note the **Tenant ID**, **Client ID**, and **Client Secret**.

> **IMPORTANT:** Before deploying, copy your **Workspace ID** from the connector page.

### **3. Deploy the Connector**

1. Click the **Deploy to Azure** button on the connector page.
2. On the custom deployment page, select the **Subscription**, **Resource Group**, and **Region** to deploy into.
3. Provide the following parameters: `CrowdStrikeClientId`, `CrowdStrikeClientSecret`, `CrowdStrikeBaseUrl`, `WorkspaceId`, `TenantId`, `Indicators`, `AadClientId`, `AadClientSecret`, `LookBackDays`.
4. Click **Review + create** → **Create**.

---

## **Post-Deployment Steps**

### **1. Verify Execution**
- In the Azure portal, open the deployed Function App and confirm the timer-triggered function runs every 10 minutes without errors.
- Review the function logs in **Application Insights** for the execution summary (e.g. *"Execution completed: processed N indicators across M batches"*).

### **2. Verify Threat Intelligence Ingestion**
Confirm indicators are flowing into Microsoft Sentinel:

1. Go to **Microsoft Sentinel** → **Threat Intelligence**, and filter by source **CrowdStrike Falcon Adversary Intelligence**.
2. Or run the following query under **Logs**:

```kql
ThreatIntelIndicators
| where SourceSystem == "CrowdStrike Falcon Adversary Intelligence"
| take 10
```

> **Note:** The first run uses `LookBackDays` to establish a starting window. Subsequent runs ingest only new, high-confidence indicators newer than the last persisted marker.

---

## **Troubleshooting**

### **1. Authentication Errors (401 Unauthorized)**
- **Cause**: Incorrect credentials or insufficient API scopes.
- **Solution**:
  - Verify the CrowdStrike Client ID/Secret and that the `indicators:read` scope is granted.
  - Verify the Azure AD Tenant ID, Client ID, and Client Secret.

### **2. No Indicators Ingested**
- **Cause**: Incorrect Base URL, no new indicators in the lookback window, or network connectivity issues.
- **Solution**:
  - Confirm the Base URL matches your CrowdStrike region.
  - Confirm the `Indicators` list contains valid, subscribed indicator types.
  - Check outbound connectivity from the Function App to the CrowdStrike and Sentinel endpoints.

### **3. Function Exits Early**
- **Cause**: Expected behavior — the function exits when fewer than 60 seconds remain before the next 10-minute execution window.
- **Solution**: No action needed; processing resumes from the persisted marker on the next run.

### **Support Resources**
- **CrowdStrike API Documentation**: Available in the Falcon console under API documentation.
- **Microsoft Sentinel Documentation**: [Microsoft Learn - Sentinel Connectors](https://learn.microsoft.com/azure/sentinel/).
- **Connector Logs**: Available in **Application Insights** for the deployed Function App.

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

