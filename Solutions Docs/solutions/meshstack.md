# ⚠️ meshStack

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/meshcloud.svg" alt="meshStack Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | meshcloud GmbH |
| **Support Tier** | Partner |
| **Support Link** | [https://feedback.meshcloud.io](https://feedback.meshcloud.io) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | meshcloud - support@meshcloud.io |
| **First Published** | 2025-12-15 |
| **Solution Folder** | [meshStack](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/meshStack) |

The meshStack solution for Microsoft Sentinel enables you to ingest meshStack Event Logs into Microsoft Sentinel.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [meshStack Event Logs](../connectors/meshstackeventlogsdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`meshStackEventLogs_CL`](../tables/meshstackeventlogs-cl.md) | [meshStack Event Logs](../connectors/meshstackeventlogsdefinition.md) | - |

## Additional Documentation

> 📄 *Source: [meshStack/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/meshStack/README.md)*

# meshStack Event Logs Data Connector for Microsoft Sentinel

This solution provides a data connector to ingest meshStack Event Logs into Microsoft Sentinel using the Codeless Connector Framework (CCF) with OAuth2 authentication. 
meshStack is a cloud platform management solution that helps platform engineering teams build, operate, and scale internal developer platforms (IDPs).
See [meshcloud](https://meshcloud.io) for more information.

## Quick Start

### Prerequisites

- An existing **Log Analytics workspace** with **Microsoft Sentinel enabled**
- Appropriate permissions to:
  - Deploy ARM templates
  - Create Data Collection Endpoints
  - Configure Microsoft Sentinel data connectors
- A meshStack instance with Events API enabled
- Admin access to create meshStack API Keys

### 1. Deploy to Azure

**Note**: Azure Sentinel automatically creates a Data Collection Endpoint (DCE) once you add your first data connector. 
The DCE is named as `ASI-<worspace-uuid>`.

**Option A: Azure Portal**
1. Navigate to "Deploy a custom template"
2. Upload `Package/mainTemplate.json`
3. Select your subscription, resource group, and workspace
4. Deploy

**Option B: Azure CLI**
```bash
# Basic deployment (minimum required parameters)
az deployment group create \
  --resource-group <rg-name> \
  --template-file Package/mainTemplate.json \
  --parameters workspace=<workspace-name> \
               workspace-location=<workspace-region>

# Example with all parameters explicitly set
az deployment group create \
  --resource-group myResourceGroup \
  --template-file Package/mainTemplate.json \
  --parameters workspace=mySentinelWorkspace \
               workspace-location=eastus \
               resourceGroupName=myResourceGroup \
               subscription=12345678-1234-1234-1234-123456789abc \
               location=eastus
```

### 2. Configure Data Connector

1. In Azure Portal, go to **Microsoft Sentinel > Data connectors**
2. Search for **"meshStack Event Logs"**
3. Click **"Open connector page"**
4. Fill in the connection form:
   - **meshStack API URL**: `https://your-meshstack-instance.io`
   - **Client ID (Key ID)**: The **Key ID** from your meshStack API Key
   - **Client Secret (Key Secret)**: The **Key Secret** from your meshStack API Key
5. Toggle the **Connect** button to enable the connector

## Authentication Setup

### Understanding meshStack API Keys

When you create an API Key in meshStack, it provides **OAuth2 credentials**:
- `client_id`: OAuth2 client identifier (shown as **Key ID** in meshStack Admin Panel)
- `client_secret`: OAuth2 client secret (shown as **Key Secret** in meshStack Admin Panel)

These credentials are used in the OAuth2 client credentials flow:
1. Connector exchanges `client_id` + `client_secret` for an access token at `/api/login`
2. Access token is used in `Authorization: Bearer` header for API requests
3. Tokens are automatically refreshed when expired

### Creating an API Key in meshStack


*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

