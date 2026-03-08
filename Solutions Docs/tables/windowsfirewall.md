# WindowsFirewall

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WindowsFirewall table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Windows |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windowsfirewall) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windowsfirewall)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CommunicationDirection | string |  |
| Computer | string |  |
| Confidence | string |  |
| Description | string |  |
| DestinationIP | string |  |
| DestinationPort | int |  |
| FirewallAction | string |  |
| FirstReportedDateTime | string |  |
| FullDestinationAddress | string |  |
| IndicatorThreatType | string |  |
| Info | string |  |
| IsActive | string |  |
| LastReportedDateTime | string |  |
| MaliciousIP | string |  |
| MaliciousIPCountry | string |  |
| MaliciousIPLatitude | real |  |
| MaliciousIPLongitude | real |  |
| ManagementGroupName | string |  |
| Protocol | string |  |
| RemoteIP | string |  |
| RequestSizeInBytes | long |  |
| Severity | int |  |
| SourceIP | string |  |
| SourcePort | int |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime |  |
| TLPLevel | string |  |
| Type | string | The name of the table |

## Solutions (6)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Windows Firewall](../connectors/windowsfirewall.md) |  |

---

## Content Items Using This Table (6)

### Workbooks (6)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**In solution [Windows Firewall](../solutions/windows-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

