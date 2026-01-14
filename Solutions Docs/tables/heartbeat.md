# Heartbeat

Reference for Heartbeat table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Endpoint |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/heartbeat) |

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

- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md)

---

## Content Items Using This Table (10)

### Analytic Rules (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [M2131_AssetStoppedLogging](../content/maturitymodelforeventlogmanagementm2131-m2131-assetstoppedlogging-4be5b645-1d08-49e4-b58d-07294ff19223-416aad3a.md)

### Workbooks (9)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md)

**In solution [Forcepoint NGFW](../solutions/forcepoint-ngfw.md):**
- [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [PCI DSS Compliance](../solutions/pci-dss-compliance.md):**
- [PCIDSSCompliance](../content/pci-dss-compliance-pcidsscompliance-b201eb3d.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [VMware SASE](../solutions/vmware-sase.md):**
- [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md)

**In solution [Windows Firewall](../solutions/windows-firewall.md):**
- [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md)

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

