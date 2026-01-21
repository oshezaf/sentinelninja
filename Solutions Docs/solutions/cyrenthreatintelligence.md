# ⚠️ CyrenThreatIntelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyren_logo.svg" alt="CyrenThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cyren Threat Intelligence](https://data443.com/cyren-threat-intelligence/) solution provides the capability to ingest Cyren IP reputation and malware URL threat intelligence into Microsoft Sentinel using the Codeless Connector Framework (CCF). This solution deploys REST API poller connectors, a custom log table, data collection rules, analytics rules, and visualization workbook to help security teams detect and investigate network-based threats.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2025-11-16 |
| **Solution Folder** | [CyrenThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyren Threat Intelligence](../connectors/cyrenthreatintel.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) | [Cyren Threat Intelligence](../connectors/cyrenthreatintel.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cyren Feed Outage Detection](../content/cyrenthreatintelligence-cyren-feed-outage-detection-7f9a0d5c-3b4c-6d7e-1f2a-e3f4a5b6c7d8-a7fce6c8.md) | Medium | DefenseEvasion | [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) |
| [Cyren High-Risk IP Indicators](../content/cyrenthreatintelligence-cyren-high-risk-ip-indicators-5d7e8b3a-1f2c-4e5d-9a0b-c1d2e3f4a5b6-c726fd74.md) | High | CommandAndControl, Impact | [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) |
| [Cyren High-Risk URL Indicators](../content/cyrenthreatintelligence-cyren-high-risk-url-indicators-6e8f9c4b-2a3b-5c6d-0e1f-d2e3f4a5b6c7-78e6d5f5.md) | High | InitialAccess, Execution | [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CyrenThreatIntelligenceDashboard](../content/cyrenthreatintelligence-cyrenthreatintelligencedashboard-f33799ef.md) | [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) |

## Additional Documentation

> 📄 *Source: [CyrenThreatIntelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence/README.md)*

## Overview

The **Cyren Threat Intelligence** solution provides real-time IP reputation and malware URL feeds to detect and block malicious infrastructure. This solution deploys CCF (Codeless Connector Framework) data connectors and visualization workbooks to help security teams identify and respond to network-based threats.

## What's Included

### Data Connectors (2)
- **Cyren IP Reputation** - RestApiPoller connector for IP threat intelligence
- **Cyren Malware URLs** - RestApiPoller connector for malicious URL intelligence

### Workbooks (2)
- **Cyren Threat Intelligence** - Overview dashboard with key metrics
- **Cyren Threat Intelligence (Enhanced)** - Advanced analytics and threat hunting views

### Infrastructure
- Data Collection Endpoint (DCE)
- Data Collection Rules (DCRs) for both feeds
- Custom Log Analytics table (`Cyren_Indicators_CL`)
- User-Assigned Managed Identity for secure authentication
- Optional Azure Key Vault integration for JWT token storage

## Prerequisites

Before deploying this solution, ensure you have:

1. **Microsoft Sentinel Workspace**
   - Active Microsoft Sentinel workspace
   - Contributor permissions on the workspace

2. **Cyren API Credentials**
   - JWT Token for IP Reputation feed
   - JWT Token for Malware URLs feed
   - Obtain these from [Cyren Portal](https://data443.com/cyren-threat-intelligence/)

3. **Azure Permissions**
   - Contributor role on the resource group
   - Permission to create managed identities
   - Permission to assign RBAC roles

## Deployment

### Option 1: Azure Portal (Recommended)

1. Navigate to **Microsoft Sentinel** → **Content Hub**
2. Search for **"Cyren Threat Intelligence"**
3. Click **Install**
4. Follow the deployment wizard:
   - **Basics**: Select subscription, resource group, and workspace
   - **Data Connectors**: Enter your Cyren JWT tokens
   - **Security Options**: (Optional) Enable Key Vault for secure token storage
   - **Workbooks**: Choose which workbooks to deploy

5. Click **Review + Create** → **Create**

### Option 2: ARM Template Deployment

```powershell
# Set your parameters
$subscriptionId = "your-subscription-id"
$resourceGroupName = "your-resource-group"
$workspaceName = "your-sentinel-workspace"
$cyrenIPJwtToken = "your-ip-reputation-jwt-token"
$cyrenMalwareJwtToken = "your-malware-urls-jwt-token"

# Deploy the solution
az deployment group create \
  --subscription $subscriptionId \
  --resource-group $resourceGroupName \
  --template-file mainTemplate.json \
  --parameters workspace=$workspaceName \
               cyrenIPJwtToken=$cyrenIPJwtToken \
               cyrenMalwareJwtToken=$cyrenMalwareJwtToken \
               deployConnectors=true \
               deployWorkbooks=true
```

### Option 3: Automated PowerShell Script (DEPLOY-Cyren-CCF-Clean.ps1)


*[Content truncated...]*

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.0      | 16-11-2025                    | Initial Cyren Threat Intelligence CCF solution package, including all connector and ARM templates. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

