# Azure Firewall

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Firewall](../connectors/azurefirewall.md)

## Tables Reference

This solution uses **10 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Analytics, Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) | - |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Azure Firewall](../connectors/azurefirewall.md) | Workbooks |

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Hunting Queries | 5 |
| Playbooks | 5 |
| Workbooks | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e.md) | Medium | InitialAccess, Exfiltration, CommandAndControl | - |
| [Abnormal Port to Protocol](../content/azure-firewall-abnormal-port-to-protocol-826f930c-2f25-4508-8e75-a95b809a4e15.md) | Medium | Exfiltration, CommandAndControl | - |
| [Multiple Sources Affected by the Same TI Destination](../content/azure-firewall-multiple-sources-affected-by-the-same-ti-destination-4644baf7-3464-45dd-bd9d-e07687e25f81.md) | Medium | Exfiltration, CommandAndControl | - |
| [Port Scan](../content/azure-firewall-port-scan-b2c5907b-1040-4692-9802-9946031017e8.md) | Medium | Discovery | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) |
| [Port Sweep](../content/azure-firewall-port-sweep-720335f4-ee8c-4270-9424-d0859222168c.md) | Medium | Discovery | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) |
| [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e.md) | Medium | Discovery, LateralMovement, CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [First Time Source IP to Destination](../content/azure-firewall-first-time-source-ip-to-destination-f055e82b-5ef6-4395-bc9e-99f7e451343a.md) | Exfiltration, CommandAndControl | - |
| [First Time Source IP to Destination Using Port](../content/azure-firewall-first-time-source-ip-to-destination-using-port-932fe71a-7a8c-4f35-bf88-321ab68ff562.md) | Exfiltration, CommandAndControl | - |
| [Source IP Abnormally Connects to Multiple Destinations](../content/azure-firewall-source-ip-abnormally-connects-to-multiple-destinations-d006f4f8-86bb-4c9d-9826-837762ddad6b.md) | Execution, LateralMovement | - |
| [Uncommon Port for Organization](../content/azure-firewall-uncommon-port-for-organization-8812a547-13e6-4d0c-b38d-476fb7351c52.md) | Defense Evasion, Exfiltration, CommandAndControl | - |
| [Uncommon Port to IP](../content/azure-firewall-uncommon-port-to-ip-3d93fa57-53e5-4d5e-96d4-ad734a8df3a4.md) | Exfiltration, CommandAndControl | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Azure Firewall Workbook - Deployment Template](../content/azure-firewall-azure-firewall-workbook---deployment-template.md) | - |
| [Azure Firewall Workbook - Structured Logs - Deployment Template](../content/azure-firewall-azure-firewall-workbook---structured-logs---deployment-template.md) | - |
| [AzureFirewallWorkbook](../content/azure-firewall-azurefirewallworkbook.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs.md) | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Azure Firewall - Add IP Address to Threat Intel Allow list](../content/azure-firewall-azure-firewall---add-ip-address-to-threat-intel-allow-list.md) | This playbook allows the SOC to automatically response to Microsoft Sentinel incidents which include... | - |
| [Block IP - Azure Firewall IP groups](../content/azure-firewall-block-ip---azure-firewall-ip-groups.md) | This playbook allows blocking/allowing IPs in Azure Firewall. It allows to make changes on IP groups... | - |
| [Block IP - Azure Firewall IP groups - Entity trigger](../content/azure-firewall-block-ip---azure-firewall-ip-groups---entity-trigger.md) | This playbook interacts with relevant stackholders, such incident response team, to approve blocking... | - |
| [BlockIP-Azure Firewall New Rule](../content/azure-firewall-blockip-azure-firewall-new-rule.md) | This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collecti... | - |
| [BlockIP-Azure Firewall New Rule - Entity trigger](../content/azure-firewall-blockip-azure-firewall-new-rule---entity-trigger.md) | This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collecti... | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
