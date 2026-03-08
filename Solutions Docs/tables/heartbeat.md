# Heartbeat

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Heartbeat table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Endpoint |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/heartbeat) |

## Schema (31 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/heartbeat)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Value is Direct Agent SCOM Agent or SCOM Management Server. |
| Computer | string | Computer name |
| ComputerEnvironment | string | Environment that hosts the computer: Azure or Non-Azure |
| ComputerIP | string | IP address of the computer. Note that public IP is used |
| ComputerPrivateIPs | dynamic | The list of private IP addresses of the computer. |
| IsGatewayInstalled | bool | If Log Analytics gateway is installed value is true otherwise value is false. |
| ManagementGroupName | string | Name of Operations Manager management group. |
| OSMajorVersion | string | Operating system major version. |
| OSMinorVersion | string | Operating system minor version. |
| OSName | string | Name of OS. |
| OSType | string | Type of OS. Possible values are Windows or Linux. |
| RemoteIPCountry | string | Geographic location where computer is deployed. |
| RemoteIPLatitude | real | Latitude of computer's geographic location. |
| RemoteIPLongitude | real | Longitude of computer's geographic location. |
| Resource | string | Resource group name of the Azure resource running the agent. |
| ResourceGroup | string | Resource name of the Azure resource running the agent. |
| ResourceId | string | Resource ID of the Azure resource running the agent. Retained for for backward compatibility. _ResourceId should be used. |
| ResourceProvider | string | Resource provider of the Azure resource running the agent |
| ResourceType | string | Type of the Azure resource running the agent. Examples include virtualmachines or managedclusters. |
| SCAgentChannel | string | Specfies how agent is connected to workspace. Possible values are Direct or SCManagementServer. |
| Solutions | string | List of solutions deployed on the agent at the moment when Heartbeat was issued. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubscriptionId | string | Subscription ID of the Azure resource running the agent |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |
| Version | string | Version of the agent. |
| VMUUID | string | Unique identifier of the virtual machine. |

## Solutions (10)

This table is used by the following solutions:

- [CiscoASA](../solutions/ciscoasa.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [VMware SASE](../solutions/vmware-sase.md)
- [Windows Firewall](../solutions/windows-firewall.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) |  |

---

## Content Items Using This Table (11)

### Analytic Rules (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [M2131_AssetStoppedLogging](../content/maturitymodelforeventlogmanagementm2131-m2131-assetstoppedlogging-4be5b645-1d08-49e4-b58d-07294ff19223-416aad3a.md) |  |

### Workbooks (10)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md) |  |

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |

**In solution [VMware SASE](../solutions/vmware-sase.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md) |  |

**In solution [Windows Firewall](../solutions/windows-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.containerservice/managedclusters`
- `microsoft.kubernetes/connectedclusters`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.hybridcontainerservice/provisionedclusters`
- `microsoft.automation/automationaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

