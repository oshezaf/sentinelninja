# Heartbeat

Reference for Heartbeat table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Endpoint |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/heartbeat) |

## Solutions (6)

This table is used by the following solutions:

- [DORA Compliance](../solutions/dora-compliance.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [PCI DSS Compliance](../solutions/pci-dss-compliance.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [VMware SASE](../solutions/vmware-sase.md)
- [Windows Firewall](../solutions/windows-firewall.md)

---

## Content Items Using This Table (6)

### Analytic Rules (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [M2131_AssetStoppedLogging](../content/maturitymodelforeventlogmanagementm2131-m2131-assetstoppedlogging-4be5b645-1d08-49e4-b58d-07294ff19223-416aad3a.md)

### Workbooks (5)

**In solution [DORA Compliance](../solutions/dora-compliance.md):**
- [DORACompliance](../content/dora-compliance-doracompliance-21bcc12f.md)

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

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
