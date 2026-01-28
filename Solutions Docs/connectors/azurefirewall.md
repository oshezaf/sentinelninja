# Azure Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzFirewalls.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureFirewall` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Azure Firewall](../solutions/azure-firewall.md) |
| **Collection Method** | Azure Diagnostics |
| **Connector Definition Files** | [AzureFirewall.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Data%20Connectors/AzureFirewall.JSON) |

Connect to Azure Firewall. Azure Firewall is a managed, cloud-based network security service that protects your Azure Virtual Network resources. It's a fully stateful firewall as a service with built-in high availability and unrestricted cloud scalability. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2220124&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) |  | ✓ | ✗ |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) |  | ✓ | ✗ |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) |  | ✓ | ✗ |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) |  | ✓ | ✗ |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) |  | ✓ | ✗ |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) |  | ✓ | ✗ |
| [`AZFWNatRule`](../tables/azfwnatrule.md) |  | ✓ | ✗ |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) |  | ✓ | ✗ |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) |  | ✓ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `ResourceType == "AZUREFIREWALLS"` | — | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Azure Firewall to Microsoft Sentinel**

Enable Diagnostic Logs on All Firewalls.
- **Configure Azure Firewall**

Inside your Firewall resource:

1.  Select **Diagnostic logs.​**
2.  Select **+ Add diagnostic setting.​**
3.  In the **Diagnostic setting** blade:
    -   Type a **Name**.
    -   Select **Send to Log Analytics**.
    -   Choose the log destination workspace.
    -   Select the categories that you want to analyze ( Azure Firewall Network Rule, Azure Firewall Application Rule,Azure Firewall Nat Rule,Azure Firewall Threat Intelligence,Azure Firewall IDPS Signature,Azure Firewall DNS query,Azure Firewall FQDN Resolution Failure,Azure Firewall Fat Flow Log,Azure Firewall Flow Trace Log)
    -   Click **Save**.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

