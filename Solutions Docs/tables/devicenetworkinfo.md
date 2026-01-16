# DeviceNetworkInfo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Network properties of devices, including physical adapters, IP and MAC addresses, as well as connected networks and domains

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicenetworkinfo) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkinfo-table) |

## Solutions (4)

This table is used by the following solutions:

- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (26)

### Analytic Rules (1)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [RDP Nesting](../content/standalone-content-rdp-nesting-69a45b05-71f5-45ca-8944-2e038747fb39-c48bfa3a.md)

### Hunting Queries (14)

**In solution [](../solutions/.md):**
- [Alert Events from Internal IP Address](../content/-alert-events-from-internal-ip-address-f936ddfa-58e3-4db1-834b-fb50e8bd55c5-95390814.md)
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [ConnectedNetworkDeviceDiscovery](../content/-connectednetworkdevicediscovery-c7813a5c-ef11-4ee9-8feb-731402f31259-a3d1ba88.md)
- [Device Logons from Unknown IPs](../content/-device-logons-from-unknown-ips-a6d76204-efb2-4ccd-a068-d5a9e6876236-51c24d96.md)
- [Devices In Subnet - IPAddressV4](../content/-devices-in-subnet-ipaddressv4-7f4a9010-4948-4e0c-b668-7a2f603c7dc8-aa4fd6e1.md)
- [Devices In Subnet - IPAddressV6](../content/-devices-in-subnet-ipaddressv6-008f87b5-5b80-4487-9612-80032d931a69-7c69c8b1.md)
- [Machine info from IP address](../content/-machine-info-from-ip-address-34a7334e-7bc0-4e3f-abc5-469ac7e29be7-b45a45d0.md)
- [Machine info from IP address (1)](../content/-machine-info-from-ip-address-1-49cf658e-f446-476e-a7da-30909caaa3e3-cb7b9d42.md)
- [Machine info from IP address (3)](../content/-machine-info-from-ip-address-3-e10dd84f-e4d6-4b21-a9da-816699de0ba8-42da1f4e.md)
- [Network info of machine](../content/-network-info-of-machine-86fb56b4-3a10-443b-8345-d00a45046d15-137e508a.md)
- [Seen Connected Networks](../content/-seen-connected-networks-cd1492a0-7e53-4615-9e63-f930576a3f6b-3d3696a8.md)
- [Seen IPv4 Network Subnets](../content/-seen-ipv4-network-subnets-919047fa-f646-469a-bfeb-69a0dcbf44c0-e3e46bf5.md)
- [Seen IPv6 Network Subnets](../content/-seen-ipv6-network-subnets-dab99d96-b53d-438f-9826-fd0934e8578c-284d12cd.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [MDE_DeviceInventory-LastUserLoggedIn](../content/standalone-content-mde-deviceinventory-lastuserloggedin-39226090-3c73-407f-bef8-9a09f98fc668-613b4c17.md)

### Workbooks (11)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [MicrosoftDefenderForEndPoint](../content/-microsoftdefenderforendpoint-f98fcc1e.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Location |
|:-------|:---------|:---------|
| [AssignedIPAddress](../parsers/assignedipaddress.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) | Solution |
| [Devicefromip](../parsers/devicefromip.md) | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) | Solution |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

