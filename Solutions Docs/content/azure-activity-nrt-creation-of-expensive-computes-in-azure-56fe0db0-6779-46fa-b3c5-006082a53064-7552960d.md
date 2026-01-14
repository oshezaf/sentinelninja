# NRT Creation of expensive computes in Azure

Identifies the creation of large size or expensive VMs (with GPUs or with a large number of virtual CPUs) in Azure. An adversary may create new or update existing virtual machines to evade defenses or use them for cryptomining purposes. For Windows/Linux Vm Sizes, see https://docs.microsoft.com/azure/virtual-machines/windows/sizes  Azure VM Naming Conventions, see https://docs.microsoft.com/azure/virtual-machines/vm-naming-conventions

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Activity](../solutions/azure-activity.md) |
| **ID** | `56fe0db0-6779-46fa-b3c5-006082a53064` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1578 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Activity/Analytic%20Rules/NRT_Creation_of_Expensive_Computes_in_Azure.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureActivity`](../tables/azureactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Activity](../solutions/azure-activity.md)

