# Network Security Groups

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzureNetworkSecurityGroups.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureNSG` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Azure Network Security Groups](../solutions/azure-network-security-groups.md) |
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |
| **Connector Definition Files** | [AzureNSG.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Network%20Security%20Groups/Data%20Connectors/AzureNSG.JSON) |

Azure network security groups (NSG) allow you to filter network traffic to and from Azure resources in an Azure virtual network. A network security group includes rules that allow or deny traffic to a virtual network subnet, network interface, or both.



When you enable logging for an NSG, you can gather the following types of resource log information:



- **Event:** Entries are logged for which NSG rules are applied to VMs, based on MAC address.

- **Rule counter:** Contains entries for how many times each NSG rule is applied to deny or allow traffic. The status for these rules is collected every 300 seconds.





This connector lets you stream your NSG diagnostics logs into Microsoft Sentinel, allowing you to continuously monitor activity in all your instances. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2223718&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category in "NetworkSecurityGroupEvent,NetworkSecurityGroupRuleCounter"` | — | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **Policy​**: owner role assigned for each policy assignment scope.​

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Stream diagnostics logs from your Connect your Network Security Groups diagnostics logs into Sentinel. at scale**

This connector uses Azure Policy to apply a single Azure Network Security Groups log-streaming configuration to a collection of instances, defined as a scope.   
Follow the instructions below to create and apply a policy to all current and future instances. **Note**, you may already have an active policy for this resource type.
**Launch the Azure Policy Assignment wizard and follow the steps.​**

  >1. In the **Basics** tab, click the button with the three dots under **Scope** to select your resources assignment scope.
        >2. In the **Parameters** tab, choose your Microsoft Sentinel workspace from the **Log Analytics workspace** drop-down list, and leave marked as "True" all the log and metric types you want to ingest.
        >3. To apply the policy on your existing resources, select the **Remediation tab** and mark the **Create a remediation task** checkbox.
  - **Configure policy assignment**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

