# QualysHostDetectionV3_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/QualysHostDetectionV3_CL.json)

| Column Name | Type |
|:------------|:-----|
| DetectionList | dynamic |
| DnsName | string |
| HostId | string |
| IPAddress | string |
| LastScanDateTime | datetime |
| LastVMAuthScannedDateTime | datetime |
| LastVMScannedDateTime | datetime |
| NetBios | string |
| OperatingSystem | string |
| QGHostId | string |
| TimeGenerated | datetime |
| TrackingMethod | string |

## Solutions (5)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [QualysVM](../solutions/qualysvm.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Qualys Vulnerability Management (via Codeless Connector Framework)](../connectors/qualysvmlogsccpdefinition.md) |  |

---

## Content Items Using This Table (7)

### Analytic Rules (2)

**In solution [QualysVM](../solutions/qualysvm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [High Number of Urgent Vulnerabilities Detected](../content/qualysvm-high-number-of-urgent-vulnerabilities-detected-3edb7215-250b-40c0-8b46-79093949242d-7adbb1bc.md) |  |
| [New High Severity Vulnerability Detected Across Multiple Hosts](../content/qualysvm-new-high-severity-vulnerability-detected-across-multiple-hosts-6116dc19-475a-4148-84b2-efe89c073e27-fbfde951.md) |  |

### Workbooks (5)

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

**In solution [QualysVM](../solutions/qualysvm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [QualysVMv2](../content/qualysvm-qualysvmv2-0981091b.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [QualysHostDetection](../parsers/qualyshostdetection.md) | [QualysVM](../solutions/qualysvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

