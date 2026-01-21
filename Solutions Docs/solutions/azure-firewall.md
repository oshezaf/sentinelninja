# Azure Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzFirewalls.svg" alt="Azure Firewall Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Azure Firewall](https://docs.microsoft.com/azure/firewall/overview) solution for Microsoft Sentinel enables ingestion of DNS Proxy, Application Rule and Network Rule [logs](https://docs.microsoft.com/azure/firewall/logs-and-metrics) from Azure Firewalls.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [Azure Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Firewall](../connectors/azurefirewall.md)

## Tables Used

This solution uses **10 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Hunting, Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Workbooks |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Hunting, Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **18 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Hunting Queries | 5 |
| Playbooks | 5 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md) | Medium | InitialAccess, Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWFlowTrace`](../tables/azfwflowtrace.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Abnormal Port to Protocol](../content/azure-firewall-abnormal-port-to-protocol-826f930c-2f25-4508-8e75-a95b809a4e15-f673b591.md) | Medium | Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Multiple Sources Affected by the Same TI Destination](../content/azure-firewall-multiple-sources-affected-by-the-same-ti-destination-4644baf7-3464-45dd-bd9d-e07687e25f81-c5003c22.md) | Medium | Exfiltration, CommandAndControl | [`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8-a6887f4e.md) | Medium | Discovery | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c-d77c9cf0.md) | Medium | Discovery | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md) | Medium | Discovery, LateralMovement, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWFlowTrace`](../tables/azfwflowtrace.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [First Time Source IP to Destination](../content/azure-firewall-first-time-source-ip-to-destination-f055e82b-5ef6-4395-bc9e-99f7e451343a-b6cf8086.md) | Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [First Time Source IP to Destination Using Port](../content/azure-firewall-first-time-source-ip-to-destination-using-port-932fe71a-7a8c-4f35-bf88-321ab68ff562-850b4356.md) | Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Source IP Abnormally Connects to Multiple Destinations](../content/azure-firewall-source-ip-abnormally-connects-to-multiple-destinations-d006f4f8-86bb-4c9d-9826-837762ddad6b-ec41bab6.md) | Execution, LateralMovement | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Uncommon Port for Organization](../content/azure-firewall-uncommon-port-for-organization-8812a547-13e6-4d0c-b38d-476fb7351c52-f68ddc3e.md) | Defense Evasion, Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Uncommon Port to IP](../content/azure-firewall-uncommon-port-to-ip-3d93fa57-53e5-4d5e-96d4-ad734a8df3a4-582e485f.md) | Exfiltration, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureFirewallWorkbook](../content/azure-firewall-azurefirewallworkbook-b4bb528f.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md) | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Azure Firewall - Add IP Address to Threat Intel Allow list](../content/azure-firewall-azure-firewall-add-ip-address-to-threat-intel-allow-list-a9c677b4.md) | This playbook allows the SOC to automatically response to Microsoft Sentinel incidents which include... | - |
| [Block IP - Azure Firewall IP groups](../content/azure-firewall-block-ip-azure-firewall-ip-groups-bcd5c52e.md) | This playbook allows blocking/allowing IPs in Azure Firewall. It allows to make changes on IP groups... | - |
| [Block IP - Azure Firewall IP groups - Entity trigger](../content/azure-firewall-block-ip-azure-firewall-ip-groups-entity-trigger-d467f8a0.md) | This playbook interacts with relevant stackholders, such incident response team, to approve blocking... | - |
| [BlockIP-Azure Firewall New Rule](../content/azure-firewall-blockip-azure-firewall-new-rule-92066640.md) | This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collecti... | - |
| [BlockIP-Azure Firewall New Rule - Entity trigger](../content/azure-firewall-blockip-azure-firewall-new-rule-entity-trigger-d87d91b7.md) | This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collecti... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                       |
|-------------|--------------------------------|------------------------------------------------------------------------------------------|
| 3.0.6       | 28-10-2025                     | Enhanced the Azure Firewall analytic rule to extend Fqdn from DestinationIp for improved detection of Multiple Sources Affected by the Same TI Destination. |
| 3.0.5       | 26-07-2024                     | Updated **Analytical Rule** for missing TTP	                                          |
| 3.0.4       | 12-02-2024                     | Updated **Analytical Rule**	                                          |
| 3.0.3       | 17-01-2024                     | Updated Azure Firewall **Data Connector**  to support resource specific logs.            |
| 3.0.2       | 15-12-2023                     | Updated query  in  **Analytical Rule** (Port Scan)                                       |
| 3.0.1       | 21-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.                | 
| 3.0.0       | 20-07-2023                     | Updated **Workbook** template to remove unused variables.                                |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

