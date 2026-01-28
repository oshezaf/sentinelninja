# Heartbeat

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Heartbeat table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Endpoint |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/heartbeat) |

## Solutions (11)

This table is used by the following solutions:

- [CiscoASA](../solutions/ciscoasa.md)
- [DORA Compliance](../solutions/dora-compliance.md)
- [Forcepoint NGFW](../solutions/forcepoint-ngfw.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Standalone Content](../solutions/standalone-content.md)
- [VMware SASE](../solutions/vmware-sase.md)
- [Windows Firewall](../solutions/windows-firewall.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (3)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [M2131_AssetStoppedLogging](../content/maturitymodelforeventlogmanagementm2131-m2131-assetstoppedlogging-4be5b645-1d08-49e4-b58d-07294ff19223-416aad3a.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Missing Domain Controller Heartbeat](../content/standalone-content-missing-domain-controller-heartbeat-b8b8ba09-1e89-45a1-8bd7-691cd23bfa32-3caae499.md) |  |
| [OMI Vulnerability Exploitation](../content/standalone-content-omi-vulnerability-exploitation-3cc5ccd8-b416-4141-bb2d-4eba370e37a5-f90e5eee.md) |  |

### Workbooks (18)

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

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AMAmigrationTracker](../content/github-only-amamigrationtracker-7a7462f4.md) |  |
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [DataCollectionHealthMonitoring](../content/github-only-datacollectionhealthmonitoring-360bf8be.md) |  |
| [Data_Latency_Workbook](../content/github-only-data-latency-workbook-6c04e6e6.md) |  |
| [ForcepointNGFWAdvanced](../content/github-only-forcepointngfwadvanced-901d419d.md) |  |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |
| [WindowsFirewall](../content/github-only-windowsfirewall-e0440cb8.md) |  |
| [WorkspaceUsage](../content/github-only-workspaceusage-97e7cfa7.md) |  |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

