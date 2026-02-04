# CrowdStrike API Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/Logo/crowdstrike.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CrowdStrikeAPIConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CrowdStrikeAPI_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeAPI_ccp/CrowdStrikeAPI_Definition.json) |

The [CrowdStrike Data Connector](https://www.crowdstrike.com/) allows ingesting logs from the CrowdStrike API into Microsoft Sentinel. This connector provides the capability to ingest CrowdStrike [Alerts](https://falcon.crowdstrike.com/documentation/84/detection-and-prevention-policies-apis#get-alerts), [Detections](https://falcon.crowdstrike.com/documentation/84/detection-and-prevention-policies-apis#get-detections), [Hosts](https://falcon.crowdstrike.com/documentation/84/host-and-host-group-management-apis#get-hosts), [Cases](https://falcon.crowdstrike.com/documentation/84/cases-apis#get-cases), and [Vulnerabilities](https://falcon.crowdstrike.com/documentation/84/spotlight-apis#get-vulnerabilities) into Microsoft Sentinel. This connector is built on the Microsoft Sentinel Codeless Connector Platform and uses the CrowdStrike API to fetch logs. It supports DCR-based ingestion time transformations so that queries can run more efficiently. Refer to [CrowdStrike API documentation](https://falcon.crowdstrike.com/documentation/page/a2a7fc0e/crowdstrike-oauth2-based-apis) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CrowdStrikeAlerts`](../tables/crowdstrikealerts.md) | ✓ | ✗ | ✓ |
| [`CrowdStrikeDetections`](../tables/crowdstrikedetections.md) | ✓ | ✗ | — |
| [`CrowdStrikeHosts`](../tables/crowdstrikehosts.md) | ✓ | ✗ | — |
| [`CrowdStrikeVulnerabilities`](../tables/crowdstrikevulnerabilities.md) | ✓ | ✗ | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Crowdstrike OAuth2 API Client and Scopes**: **Alerts**, **API Integrations**, **App Logs**, **Cases**, **Correlation Rules**, **Detections**, **Hosts**, **Assets**, **Incidents**, **Quarantined Files**, **Vulnerabilities** are required for REST API. [See the documentation to learn more about API](https://falcon.us-2.crowdstrike.com/documentation/page/a2a7fc0e/crowdstrike-oauth2-based-apis).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect CrowdStrike to Microsoft Sentinel**

ℹ️ **Important Notice:** The Incidents API is fully decommissioned. Use the new Cases data type instead.
To gather data from CrowdStrike, you need to provide the following resources
**1. Base API URL** - To gather data from CrowdStrike, you'll need the Base API URL.
**2. Client ID** - To gather data from CrowdStrike, you'll need the Client ID.
**3. Client Secret** - To gather data from CrowdStrike, you'll need the Client Secret.
For detailed instructions on retrieving the Base API URL, Client ID, and Client Secret, please refer to the [Connector Tutorial](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeAPI_ccp/README.md).
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure CrowdStrike API Connection**

*Connect to CrowdStrike to ingest security data*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

#### 1. Retrieve API URL
Log in to your CrowdStrike Console and navigate to the API section to copy your Base API URL.

#### 2. Retrieve Client Credentials
Obtain your Client ID and Client Secret from the API credentials section in your CrowdStrike account.

- **Base API URL** (required): https://api.us-2.crowdstrike.com
- **Client ID** (required): Your Client ID
- **Client Secret** (required): Your Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

## Additional Documentation

> 📄 *Source: [CrowdStrike Falcon Endpoint Protection\Data Connectors\CrowdStrikeAPI_ccp\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike Falcon Endpoint Protection\Data Connectors\CrowdStrikeAPI_ccp\README.md)*

# CrowdStrike Falcon – API Data Connector (CCP Framework)

## **Summary**

This Microsoft Sentinel data connector enables ingestion of **security data** from **CrowdStrike Falcon**  Platform. The connector captures alerts, detections, incidents, host information, and vulnerability data from the CrowdStrike Falcon platform, providing comprehensive endpoint protection visibility.

This solution helps security teams monitor endpoints for threats, track security incidents, and maintain visibility into their security posture by sending normalized security data to **Microsoft Sentinel** in near real-time.

---

## **Features**

- Connects to the **CrowdStrike Falcon REST API** using OAuth2 authentication.
- Ingests five types of security data into custom Log Analytics tables:
  - `CrowdStrikeAlerts` - Security alerts and threat notifications
  - `CrowdStrikeCases` - Case management that include security incident and investigations
  - `CrowdStrikeDetections` - Threat detections and behavioral analysis
  - `CrowdStrikeIncidents`(**Deprecated**) - Security incidents and investigations
  - `CrowdStrikeHosts` - Endpoint device information and status
  - `CrowdStrikeVulnerabilities` - Vulnerability data from Falcon Spotlight
- Uses secure **OAuth 2.0 Client Credentials** for authentication with automatic token refresh.
- Supports DCR-based ingestion time transformations for optimized query performance.
- Integrates seamlessly with Sentinel analytics, hunting queries, and incident detection.

---

## **Prerequisites**

1. A valid **CrowdStrike Falcon** tenant with administrative access.
2. An **API Client** configured in CrowdStrike Falcon with:  
   - **Client ID**
   - **Client Secret**
   - **Base URL** (region-specific)
3. Appropriate API scopes assigned to the client (see scope requirements below).
4. Access to an Azure subscription with **Microsoft Sentinel** enabled and permissions to deploy Data Connectors.
5. Permissions to create and configure Data Collection Rules (DCR) in the target workspace.

---

## **Generating CrowdStrike Falcon API Credentials**

### **1. Access the Falcon Console**
1. Sign into the **CrowdStrike Falcon console**.
2. Navigate to **Support & Resources** → **API clients and keys**.

### **2. Create API Client**
1. Click **Create/Add new API client**.
2. Provide a descriptive **name** and **description** for the connector.
3. Select the required **scopes** based on the data types you want to ingest:

### **Required API Scopes by Data Type**

| **Data Type** | **CrowdStrike Scope** | **Description** |
|---------------|----------------------|-----------------|
| Alerts | `alerts:read` | Read access to security alerts |
| Cases | `cases:read` | Read access to case management |
| Detections | `detects:read` | Read access to threat detections |
| Hosts | `hosts:read` | Read access to endpoint device information |
| Incidents | `incidents:read` | Read access to security incidents |
| Vulnerabilities | `spotlight-vulnerabilities:read` | Read access to Falcon Spotlight vulnerability data |

**Note**: You can grant only the scopes for the data types you need. If you want all data types, grant all scopes listed above.

### **3. Configure API Client**
1. After creating the client, note the **Client ID** and **Client Secret** (the secret is displayed only once).
2. Identify your **Base URL** based on your CrowdStrike cloud region:

### **Base URLs by Region**

| **Region** | **Base URL** |
|------------|--------------|
| US-1 | `https://api.crowdstrike.com` |
| US-2 | `https://api.us-2.crowdstrike.com` |
| EU-1 | `https://api.eu-1.crowdstrike.com` |
| US-GOV-1 | `https://api.laggar.gcw.crowdstrike.com` |

### **4. Save Credentials**
Save the following values for connector deployment:
- **Client ID**
- **Client Secret**
- **Base URL** (from the table above)

---

## **Deployment Parameters**

When deploying the connector, you'll need to provide:

- **Base API URL**: Your region-specific CrowdStrike API endpoint
- **Client ID**: The API client identifier from CrowdStrike
- **Client Secret**: The API client secret from CrowdStrike

### **Example Configuration**
```
Base API URL: https://api.us-2.crowdstrike.com
Client ID: a1b2c3d4e5f6g7h8i9j0
Client Secret: [Your secure client secret]
```

---

## **Deployment Instructions**

### **1. Deploy the Connector**
1. Go to **Microsoft Sentinel** → **Data Connectors**.
2. Search for "**CrowdStrike API Data Connector (via Codeless Connector Framework)**".
3. Click **Open connector page**.
4. Under **Configuration**, enter your CrowdStrike credentials:
   - **Base API URL** (region-specific)
   - **Client ID**
   - **Client Secret**
5. Click **Connect**.

### **2. Verify Connection**
- The connector status should show as **Connected** within a few minutes.
- Data ingestion typically begins within 5-10 minutes of successful connection.

---

## **Post-Deployment Steps**

### **1. Verify Data Ingestion**
After deployment, verify that data is flowing into Microsoft Sentinel:

1. Go to **Microsoft Sentinel** → **Logs**.
2. Run sample queries to check for data in each table:

```kql
// Check CrowdStrike Alerts
CrowdStrikeAlerts
| take 10

// Check Crowdstrike Cases
CrowdStrikeCases
| take 10

// Check CrowdStrike Detections  
CrowdStrikeDetections
| take 10

// Check CrowdStrike Incidents
CrowdStrikeIncidents
| take 10

// Check CrowdStrike Hosts
CrowdStrikeHosts
| take 10

// Check CrowdStrike Vulnerabilities
CrowdStrikeVulnerabilities
| take 10
```

### **2. Monitor Connector Health**
- Check the connector status regularly in the **Data Connectors** page.
- Monitor ingestion metrics and error logs for any issues.

---

## **Troubleshooting**

### **Common Issues and Solutions**

#### **1. Authentication Errors (403 Forbidden)**
- **Cause**: Insufficient API scopes or incorrect credentials.
- **Solution**: 
  - Verify the Client ID and Client Secret are correct.
  - Ensure all required scopes are granted to the API client.
  - Check that the API client is enabled in CrowdStrike.

#### **2. No Data Ingestion**
- **Cause**: Incorrect Base URL or network connectivity issues.
- **Solution**:
  - Confirm the Base URL matches your CrowdStrike region.
  - Verify outbound connectivity to the CrowdStrike API endpoints.
  - Check for any firewall or proxy restrictions.

#### **3. Token Expiry Errors**
- **Cause**: Normal OAuth2 token lifecycle (tokens expire ~30 minutes).
- **Solution**: 
  - This is expected behavior; the connector automatically refreshes tokens.
  - Ensure system time synchronization is accurate.
  - Verify continuous outbound access to the token endpoint.


### **Support Resources**
- **CrowdStrike API Documentation**: Available in the Falcon console under API documentation
- **Microsoft Sentinel Documentation**: [Microsoft Learn - Sentinel Connectors](https://docs.microsoft.com/azure/sentinel/)
- **Connector Logs**: Available in the Azure portal under the data connector monitoring section

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

