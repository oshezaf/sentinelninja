# SecurityRecommendation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityRecommendation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityrecommendation) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityrecommendation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AssessedResourceId | string |  |
| Description | string |  |
| DeviceId | string |  |
| DiscoveredTimeUTC | datetime |  |
| Environment | string |  |
| FirstEvaluationDate | datetime |  |
| IsSnapshot | bool |  |
| PolicyDefinitionId | string |  |
| Properties | dynamic |  |
| ProviderName | string |  |
| RecommendationAdditionalData | dynamic |  |
| RecommendationDisplayName | string |  |
| RecommendationId | string |  |
| RecommendationName | string |  |
| RecommendationSeverity | string |  |
| RecommendationState | string |  |
| ResolvedTimeUTC | datetime |  |
| ResourceRegion | string |  |
| StatusChangeDate | datetime |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |

## Solutions (6)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (15)

### Analytic Rules (9)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `RecommendationState in "Healthy,Unhealthy"`

| Analytic Rule |
|:-------------|
| [Azure Security Benchmark Posture Changed](../content/azuresecuritybenchmark-azure-security-benchmark-posture-changed-0610e72f-ceaf-42d1-879e-952a1bd8d07a-131c2b8a.md) |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):** `RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"`

| Analytic Rule |
|:-------------|
| [CDM_ContinuousDiagnostics&Mitigation_PostureChanged](../content/continuousdiagnostics&mitigation-cdm-continuousdiagnostics&mitigation-posturechanged-fd950af9-d9db-4879-a60a-7267cc041beb-ff19a723.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [M2131_EventLogManagementPostureChanged_EL0](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el0-1f8fcca5-47ed-409d-a8fa-d49ef821feaf-6de8bcbb.md) | `RecommendationState in "Healthy,Unhealthy"` |
| [M2131_EventLogManagementPostureChanged_EL1](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el1-036ce0a8-a1ff-4731-a078-02b3207fa4f3-889efbd3.md) | `RecommendationState in "Healthy,Unhealthy"` |
| [M2131_EventLogManagementPostureChanged_EL2](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el2-e1bb07c4-066b-4069-9b8e-f5275c592b6d-cf655906.md) | `RecommendationState in "Healthy,Unhealthy"` |
| [M2131_EventLogManagementPostureChanged_EL3](../content/maturitymodelforeventlogmanagementm2131-m2131-eventlogmanagementposturechanged-el3-672bfd77-4542-4ef1-acf9-e006dcd70c51-555b450e.md) | `RecommendationState in "Healthy,Unhealthy"` |
| [M2131_LogRetentionLessThan1Year](../content/maturitymodelforeventlogmanagementm2131-m2131-logretentionlessthan1year-8178a514-1270-4e31-a1d9-aaafeb40122f-78766cd3.md) | `RecommendationDisplayName == "Activity log should be retained for at least one year"`<br>`RecommendationState in "Healthy,Unhealthy"` |

**In solution [NISTSP80053](../solutions/nistsp80053.md):** `RecommendationState in "Healthy,Unhealthy"`

| Analytic Rule |
|:-------------|
| [NIST SP 800-53 Posture Changed](../content/nistsp80053-nist-sp-800-53-posture-changed-dd834c97-4638-4bb3-a4e3-807e8b0580dc-3c44ad7b.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `RecommendationState in "Healthy,Unhealthy"`

| Analytic Rule |
|:-------------|
| [ZeroTrust(TIC3.0) Control Assessment Posture Change](../content/zerotrust-tic3.0-zerotrust-tic3.0-control-assessment-posture-change-4942992d-a4d3-44b0-9cf4-b5a23811d82d-bfb0cd66.md) |

### Hunting Queries (1)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):** `RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"`

| Hunting Query |
|:-------------|
| [CDM_ContinuousDiagnostics&Mitigation_Posture](../content/continuousdiagnostics&mitigation-cdm-continuousdiagnostics&mitigation-posture-e15944a8-4172-4208-a928-631e01920d9c-8130a499.md) |

### Workbooks (5)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):** `RecommendationDisplayName contains "access"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "agent"`<br>`RecommendationDisplayName contains "aks"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "auth"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "bound"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "cmk"`<br>`RecommendationDisplayName contains "collect"`<br>`RecommendationDisplayName contains "contain"`<br>`RecommendationDisplayName contains "data"`<br>`RecommendationDisplayName contains "detect"`<br>`RecommendationDisplayName contains "edr"`<br>`RecommendationDisplayName contains "endpoint"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "event"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "gateway"`<br>`RecommendationDisplayName contains "http"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "incident"`<br>`RecommendationDisplayName contains "internet"`<br>`RecommendationDisplayName contains "intrusion"`<br>`RecommendationDisplayName contains "just"`<br>`RecommendationDisplayName contains "key"`<br>`RecommendationDisplayName contains "kube"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network"`<br>`RecommendationDisplayName contains "port"`<br>`RecommendationDisplayName contains "priv"`<br>`RecommendationDisplayName contains "privacy"`<br>`RecommendationDisplayName contains "protection"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "root"`<br>`RecommendationDisplayName contains "sql"`<br>`RecommendationDisplayName contains "storage"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "supply"`<br>`RecommendationDisplayName contains "tls"`<br>`RecommendationDisplayName contains "token"`<br>`RecommendationDisplayName contains "traffic"`<br>`RecommendationDisplayName contains "trust"`<br>`RecommendationDisplayName contains "url"`<br>`RecommendationDisplayName contains "user"`<br>`RecommendationDisplayName contains "web"`<br>`RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"`

| Workbook |
|:-------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `RecommendationState in "Healthy,Unhealthy"`

| Workbook |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `RecommendationDisplayName contains "AWS"`<br>`RecommendationDisplayName contains "Amazon"`<br>`RecommendationDisplayName contains "certificate"`<br>`RecommendationDisplayName contains "container"`<br>`RecommendationDisplayName contains "database"`<br>`RecommendationDisplayName contains "encrypt"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "exploit"`<br>`RecommendationDisplayName contains "key"`<br>`RecommendationDisplayName contains "kube"`<br>`RecommendationDisplayName contains "pod"`<br>`RecommendationDisplayName contains "sql"`<br>`RecommendationDisplayName contains "vault"`<br>`RecommendationDisplayName contains "virus"`<br>`RecommendationDisplayName contains "vuln"`<br>`RecommendationDisplayName has "GCP"`<br>`RecommendationDisplayName has "Google"`<br>`RecommendationName contains "container"`<br>`RecommendationName contains "kube"`<br>`RecommendationName contains "kubernetes"`<br>`RecommendationName contains "pod"`<br>`RecommendationName contains "update"`<br>`RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"`

| Workbook |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):** `RecommendationDisplayName contains "TPM"`<br>`RecommendationState in "Healthy,Unhealthy"`

| Workbook |
|:-------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `RecommendationDisplayName contains "JIT"`<br>`RecommendationDisplayName contains "Just"`<br>`RecommendationDisplayName contains "VPC"`<br>`RecommendationDisplayName contains "Web Application Firewall"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "adaptive"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "application gateway"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "authentication"`<br>`RecommendationDisplayName contains "authorized"`<br>`RecommendationDisplayName contains "automation"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "balance"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "certificate"`<br>`RecommendationDisplayName contains "config"`<br>`RecommendationDisplayName contains "deception"`<br>`RecommendationDisplayName contains "defender"`<br>`RecommendationDisplayName contains "denial"`<br>`RecommendationDisplayName contains "disaster"`<br>`RecommendationDisplayName contains "dns"`<br>`RecommendationDisplayName contains "encrypt"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "express"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "geo"`<br>`RecommendationDisplayName contains "guest"`<br>`RecommendationDisplayName contains "honey"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "java"`<br>`RecommendationDisplayName contains "load"`<br>`RecommendationDisplayName contains "log"`<br>`RecommendationDisplayName contains "logic"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network access"`<br>`RecommendationDisplayName contains "network gateway"`<br>`RecommendationDisplayName contains "network security group"`<br>`RecommendationDisplayName contains "notification"`<br>`RecommendationDisplayName contains "password"`<br>`RecommendationDisplayName contains "patch"`<br>`RecommendationDisplayName contains "playbook"`<br>`RecommendationDisplayName contains "private"`<br>`RecommendationDisplayName contains "privilege"`<br>`RecommendationDisplayName contains "protected by Azure Firewall"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "recover"`<br>`RecommendationDisplayName contains "redundant"`<br>`RecommendationDisplayName contains "region"`<br>`RecommendationDisplayName contains "safe"`<br>`RecommendationDisplayName contains "scale"`<br>`RecommendationDisplayName contains "security group"`<br>`RecommendationDisplayName contains "segment"`<br>`RecommendationDisplayName contains "shared"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "update"`<br>`RecommendationDisplayName contains "upgrade"`<br>`RecommendationDisplayName contains "version"`<br>`RecommendationDisplayName contains "vpn"`<br>`RecommendationDisplayName contains "vuln"`<br>`RecommendationDisplayName contains "watcher"`<br>`RecommendationDisplayName contains "web apps"`<br>`RecommendationState in "Healthy,Unhealthy"`

| Workbook |
|:-------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |

## Selection Criteria Summary (7 criteria, 15 total references)

References by type: 0 connectors, 15 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RecommendationState in "Healthy,Unhealthy"` | - | 8 | - | - | **8** |
| `RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"` | - | 2 | - | - | **2** |
| `RecommendationDisplayName == "Activity log should be retained for at least one year"`<br>`RecommendationState in "Healthy,Unhealthy"` | - | 1 | - | - | **1** |
| `RecommendationDisplayName contains "access"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "agent"`<br>`RecommendationDisplayName contains "aks"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "auth"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "bound"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "cmk"`<br>`RecommendationDisplayName contains "collect"`<br>`RecommendationDisplayName contains "contain"`<br>`RecommendationDisplayName contains "data"`<br>`RecommendationDisplayName contains "detect"`<br>`RecommendationDisplayName contains "edr"`<br>`RecommendationDisplayName contains "endpoint"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "event"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "gateway"`<br>`RecommendationDisplayName contains "http"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "incident"`<br>`RecommendationDisplayName contains "internet"`<br>`RecommendationDisplayName contains "intrusion"`<br>`RecommendationDisplayName contains "just"`<br>`RecommendationDisplayName contains "key"`<br>`RecommendationDisplayName contains "kube"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network"`<br>`RecommendationDisplayName contains "port"`<br>`RecommendationDisplayName contains "priv"`<br>`RecommendationDisplayName contains "privacy"`<br>`RecommendationDisplayName contains "protection"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "root"`<br>`RecommendationDisplayName contains "sql"`<br>`RecommendationDisplayName contains "storage"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "supply"`<br>`RecommendationDisplayName contains "tls"`<br>`RecommendationDisplayName contains "token"`<br>`RecommendationDisplayName contains "traffic"`<br>`RecommendationDisplayName contains "trust"`<br>`RecommendationDisplayName contains "url"`<br>`RecommendationDisplayName contains "user"`<br>`RecommendationDisplayName contains "web"`<br>`RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"` | - | 1 | - | - | **1** |
| `RecommendationDisplayName contains "AWS"`<br>`RecommendationDisplayName contains "Amazon"`<br>`RecommendationDisplayName contains "certificate"`<br>`RecommendationDisplayName contains "container"`<br>`RecommendationDisplayName contains "database"`<br>`RecommendationDisplayName contains "encrypt"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "exploit"`<br>`RecommendationDisplayName contains "key"`<br>`RecommendationDisplayName contains "kube"`<br>`RecommendationDisplayName contains "pod"`<br>`RecommendationDisplayName contains "sql"`<br>`RecommendationDisplayName contains "vault"`<br>`RecommendationDisplayName contains "virus"`<br>`RecommendationDisplayName contains "vuln"`<br>`RecommendationDisplayName has "GCP"`<br>`RecommendationDisplayName has "Google"`<br>`RecommendationName contains "container"`<br>`RecommendationName contains "kube"`<br>`RecommendationName contains "kubernetes"`<br>`RecommendationName contains "pod"`<br>`RecommendationName contains "update"`<br>`RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"` | - | 1 | - | - | **1** |
| `RecommendationDisplayName contains "TPM"`<br>`RecommendationState in "Healthy,Unhealthy"` | - | 1 | - | - | **1** |
| `RecommendationDisplayName contains "JIT"`<br>`RecommendationDisplayName contains "Just"`<br>`RecommendationDisplayName contains "VPC"`<br>`RecommendationDisplayName contains "Web Application Firewall"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "adaptive"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "application gateway"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "authentication"`<br>`RecommendationDisplayName contains "authorized"`<br>`RecommendationDisplayName contains "automation"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "balance"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "certificate"`<br>`RecommendationDisplayName contains "config"`<br>`RecommendationDisplayName contains "deception"`<br>`RecommendationDisplayName contains "defender"`<br>`RecommendationDisplayName contains "denial"`<br>`RecommendationDisplayName contains "disaster"`<br>`RecommendationDisplayName contains "dns"`<br>`RecommendationDisplayName contains "encrypt"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "express"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "geo"`<br>`RecommendationDisplayName contains "guest"`<br>`RecommendationDisplayName contains "honey"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "java"`<br>`RecommendationDisplayName contains "load"`<br>`RecommendationDisplayName contains "log"`<br>`RecommendationDisplayName contains "logic"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network access"`<br>`RecommendationDisplayName contains "network gateway"`<br>`RecommendationDisplayName contains "network security group"`<br>`RecommendationDisplayName contains "notification"`<br>`RecommendationDisplayName contains "password"`<br>`RecommendationDisplayName contains "patch"`<br>`RecommendationDisplayName contains "playbook"`<br>`RecommendationDisplayName contains "private"`<br>`RecommendationDisplayName contains "privilege"`<br>`RecommendationDisplayName contains "protected by Azure Firewall"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "recover"`<br>`RecommendationDisplayName contains "redundant"`<br>`RecommendationDisplayName contains "region"`<br>`RecommendationDisplayName contains "safe"`<br>`RecommendationDisplayName contains "scale"`<br>`RecommendationDisplayName contains "security group"`<br>`RecommendationDisplayName contains "segment"`<br>`RecommendationDisplayName contains "shared"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "update"`<br>`RecommendationDisplayName contains "upgrade"`<br>`RecommendationDisplayName contains "version"`<br>`RecommendationDisplayName contains "vpn"`<br>`RecommendationDisplayName contains "vuln"`<br>`RecommendationDisplayName contains "watcher"`<br>`RecommendationDisplayName contains "web apps"`<br>`RecommendationState in "Healthy,Unhealthy"` | - | 1 | - | - | **1** |
| **Total** | **0** | **15** | **0** | **0** | **15** |

### RecommendationDisplayName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains endpoint protection` | - | 3 | - | - | **3** |
| `contains account` | - | 2 | - | - | **2** |
| `contains admin` | - | 2 | - | - | **2** |
| `contains audit` | - | 2 | - | - | **2** |
| `contains back` | - | 2 | - | - | **2** |
| `contains cert` | - | 2 | - | - | **2** |
| `contains firewall` | - | 2 | - | - | **2** |
| `contains identity` | - | 2 | - | - | **2** |
| `contains key` | - | 2 | - | - | **2** |
| `contains kube` | - | 2 | - | - | **2** |
| `contains malware` | - | 2 | - | - | **2** |
| `contains proxy` | - | 2 | - | - | **2** |
| `contains sql` | - | 2 | - | - | **2** |
| `contains subnet` | - | 2 | - | - | **2** |
| `contains certificate` | - | 2 | - | - | **2** |
| `contains encrypt` | - | 2 | - | - | **2** |
| `contains vuln` | - | 2 | - | - | **2** |
| `Activity log should be retained for at least one year` | - | 1 | - | - | **1** |
| `contains access` | - | 1 | - | - | **1** |
| `contains agent` | - | 1 | - | - | **1** |
| `contains aks` | - | 1 | - | - | **1** |
| `contains auth` | - | 1 | - | - | **1** |
| `contains bound` | - | 1 | - | - | **1** |
| `contains cmk` | - | 1 | - | - | **1** |
| `contains collect` | - | 1 | - | - | **1** |
| `contains contain` | - | 1 | - | - | **1** |
| `contains data` | - | 1 | - | - | **1** |
| `contains detect` | - | 1 | - | - | **1** |
| `contains edr` | - | 1 | - | - | **1** |
| `contains endpoint` | - | 1 | - | - | **1** |
| `contains event` | - | 1 | - | - | **1** |
| `contains gateway` | - | 1 | - | - | **1** |
| `contains http` | - | 1 | - | - | **1** |
| `contains incident` | - | 1 | - | - | **1** |
| `contains internet` | - | 1 | - | - | **1** |
| `contains intrusion` | - | 1 | - | - | **1** |
| `contains just` | - | 1 | - | - | **1** |
| `contains network` | - | 1 | - | - | **1** |
| `contains port` | - | 1 | - | - | **1** |
| `contains priv` | - | 1 | - | - | **1** |
| `contains privacy` | - | 1 | - | - | **1** |
| `contains protection` | - | 1 | - | - | **1** |
| `contains root` | - | 1 | - | - | **1** |
| `contains storage` | - | 1 | - | - | **1** |
| `contains supply` | - | 1 | - | - | **1** |
| `contains tls` | - | 1 | - | - | **1** |
| `contains token` | - | 1 | - | - | **1** |
| `contains traffic` | - | 1 | - | - | **1** |
| `contains trust` | - | 1 | - | - | **1** |
| `contains url` | - | 1 | - | - | **1** |
| `contains user` | - | 1 | - | - | **1** |
| `contains web` | - | 1 | - | - | **1** |
| `contains AWS` | - | 1 | - | - | **1** |
| `contains Amazon` | - | 1 | - | - | **1** |
| `contains container` | - | 1 | - | - | **1** |
| `contains database` | - | 1 | - | - | **1** |
| `contains exploit` | - | 1 | - | - | **1** |
| `contains pod` | - | 1 | - | - | **1** |
| `contains vault` | - | 1 | - | - | **1** |
| `contains virus` | - | 1 | - | - | **1** |
| `has GCP` | - | 1 | - | - | **1** |
| `has Google` | - | 1 | - | - | **1** |
| `contains TPM` | - | 1 | - | - | **1** |
| `contains JIT` | - | 1 | - | - | **1** |
| `contains Just` | - | 1 | - | - | **1** |
| `contains VPC` | - | 1 | - | - | **1** |
| `contains Web Application Firewall` | - | 1 | - | - | **1** |
| `contains adaptive` | - | 1 | - | - | **1** |
| `contains application gateway` | - | 1 | - | - | **1** |
| `contains authentication` | - | 1 | - | - | **1** |
| `contains authorized` | - | 1 | - | - | **1** |
| `contains automation` | - | 1 | - | - | **1** |
| `contains balance` | - | 1 | - | - | **1** |
| `contains config` | - | 1 | - | - | **1** |
| `contains deception` | - | 1 | - | - | **1** |
| `contains defender` | - | 1 | - | - | **1** |
| `contains denial` | - | 1 | - | - | **1** |
| `contains disaster` | - | 1 | - | - | **1** |
| `contains dns` | - | 1 | - | - | **1** |
| `contains express` | - | 1 | - | - | **1** |
| `contains geo` | - | 1 | - | - | **1** |
| `contains guest` | - | 1 | - | - | **1** |
| `contains honey` | - | 1 | - | - | **1** |
| `contains java` | - | 1 | - | - | **1** |
| `contains load` | - | 1 | - | - | **1** |
| `contains log` | - | 1 | - | - | **1** |
| `contains logic` | - | 1 | - | - | **1** |
| `contains network access` | - | 1 | - | - | **1** |
| `contains network gateway` | - | 1 | - | - | **1** |
| `contains network security group` | - | 1 | - | - | **1** |
| `contains notification` | - | 1 | - | - | **1** |
| `contains password` | - | 1 | - | - | **1** |
| `contains patch` | - | 1 | - | - | **1** |
| `contains playbook` | - | 1 | - | - | **1** |
| `contains private` | - | 1 | - | - | **1** |
| `contains privilege` | - | 1 | - | - | **1** |
| `contains protected by Azure Firewall` | - | 1 | - | - | **1** |
| `contains recover` | - | 1 | - | - | **1** |
| `contains redundant` | - | 1 | - | - | **1** |
| `contains region` | - | 1 | - | - | **1** |
| `contains safe` | - | 1 | - | - | **1** |
| `contains scale` | - | 1 | - | - | **1** |
| `contains security group` | - | 1 | - | - | **1** |
| `contains segment` | - | 1 | - | - | **1** |
| `contains shared` | - | 1 | - | - | **1** |
| `contains update` | - | 1 | - | - | **1** |
| `contains upgrade` | - | 1 | - | - | **1** |
| `contains version` | - | 1 | - | - | **1** |
| `contains vpn` | - | 1 | - | - | **1** |
| `contains watcher` | - | 1 | - | - | **1** |
| `contains web apps` | - | 1 | - | - | **1** |

### RecommendationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains container` | - | 1 | - | - | **1** |
| `contains kube` | - | 1 | - | - | **1** |
| `contains kubernetes` | - | 1 | - | - | **1** |
| `contains pod` | - | 1 | - | - | **1** |
| `contains update` | - | 1 | - | - | **1** |

### RecommendationState

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Healthy` | - | 15 | - | - | **15** |
| `Unhealthy` | - | 15 | - | - | **15** |
| `NotApplicable` | - | 4 | - | - | **4** |
| `Removed` | - | 4 | - | - | **4** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

