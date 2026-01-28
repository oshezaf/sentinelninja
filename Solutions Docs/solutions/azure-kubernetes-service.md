# Azure kubernetes Service

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Azure kubernetes Service Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Azure Kubernetes Services (AKS)](https://docs.microsoft.com/azure/aks/?WT.mc_id=Portal-fx) solution allows you to ingest AKS activity logs using Diagnostic Setting into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [Azure kubernetes Service](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20kubernetes%20Service) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md) | Hunting, Workbooks |
| [`ContainerInventory`](../tables/containerinventory.md) | [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md) | - |
| [`KubeEvents`](../tables/kubeevents.md) | [Azure Kubernetes Service (AKS)](../connectors/azurekubernetes.md) | - |
| [`image`](../tables/image.md) | - | Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 2 |
| Workbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Azure RBAC AKS created role details](../content/azure-kubernetes-service-azure-rbac-aks-created-role-details-765dce51-689a-44b5-9b38-c9ae9441c7fc-9390272f.md) | Persistence | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Determine users with cluster admin role](../content/azure-kubernetes-service-determine-users-with-cluster-admin-role-c3ac03d5-dbf2-49ab-a2de-83396a20a5fb-006175f6.md) | Persistence | [`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AksSecurity](../content/azure-kubernetes-service-akssecurity-51e44b54.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`image`](../tables/image.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

