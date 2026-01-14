# Cloud Service Threat Protection Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Cloud Service Threat Protection Essentials Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

As cloud services increase in popularity, the volume of attacks against them is also increasing. Broad visibility, context and timely detection of these attacks are important for organization as they move more workloads to the cloud. The **Cloud Service Threat Protection Essentials** contains security content that is relevant for detection of attacks against various cloud services like key vault, storage, compute etc.
 
**Pre-requisites:**
 
This is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution.
 
 1.Microsoft 365
 
 2.Azure Activity
 
 3.Azure Key Vault
 
**Keywords:** Storage, Key Vault, Compute, Office, Mail tampering, Azure, resources

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Service%20Threat%20Protection%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Service%20Threat%20Protection%20Essentials) |
| **Dependencies** | [Microsoft 365](microsoft-365.md), [Azure Activity](azure-activity.md), [Azure Key Vault](azure-key-vault.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **3 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureActivity`](../tables/azureactivity.md) | Hunting |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Hunting |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 2 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Azure Key Vault Access Policy Manipulation](../content/cloud-service-threat-protection-essentials-azure-key-vault-access-policy-manipulation-8eff7055-9138-4edc-b8f0-48ea27e23c3c-8858b5d6.md) | CredentialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Azure Resources Assigned Public IP Addresses](../content/cloud-service-threat-protection-essentials-azure-resources-assigned-public-ip-addresses-8d5996b2-7d4c-4dcf-bb0d-0d7fdf0e2c75-5ca26ce3.md) | Impact | [`AzureActivity`](../tables/azureactivity.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                            |
|-------------|--------------------------------|-----------------------------------------------|
| 3.0.0       | 09-02-2024                     | Tagged for dependent solutions for deployment |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

