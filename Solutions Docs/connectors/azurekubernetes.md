# Azure Kubernetes Service (AKS)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureKubernetes` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Azure kubernetes Service](../solutions/azure-kubernetes-service.md) |
| **Collection Method** | Azure Diagnostics |
| **Connector Definition Files** | [AzureKubernetes.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20kubernetes%20Service/Data%20Connectors/AzureKubernetes.JSON) |

Azure Kubernetes Service (AKS) is an open-source, fully-managed container orchestration service that allows you to deploy, scale, and manage Docker containers and container-based applications in a cluster environment. This connector lets you stream your Azure Kubernetes Service (AKS) diagnostics logs into Microsoft Sentinel, allowing you to continuously monitor activity in all your instances. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2219762&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | — | ✗ |
| [`ContainerInventory`](../tables/containerinventory.md) | ✓ | ✗ |
| [`KubeEvents`](../tables/kubeevents.md) | ✓ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **Policy**: owner role assigned for each policy assignment scope.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect your Azure Kubernetes Service (AKS) diagnostics logs into Sentinel.**

This connector uses Azure Policy to apply a single Azure Kubernetes Service log-streaming configuration to a collection of instances, defined as a scope.
Follow the instructions below to create and apply a policy to all current and future instances. **Note**, you may already have an active policy for this resource type.
**Stream diagnostics logs from your Azure Kubernetes Service (AKS) at scale**
**Launch the Azure Policy Assignment wizard and follow the steps.**

    >1. In the **Basics** tab, click the button with the three dots under **Scope** to select your resources assignment scope.
        >2. In the **Parameters** tab, choose your Microsoft Sentinel workspace from the **Log Analytics workspace** drop-down list, and leave marked as "True" all the log and metric types you want to ingest.
        >3. To apply the policy on your existing resources, select the **Remediation tab** and mark the **Create a remediation task** checkbox.
    - **Configure policy assignment**

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

