# InformationProtectionLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (85 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InformationProtectionLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| AadTenantId_g | string |
| AadTenantId_g_g | string |
| ActionId_g | string |
| ActionIdBefore_g | string |
| ActionSource_s | string |
| Activity_s | string |
| Activity_s_s | string |
| ApplicationId_g | string |
| ApplicationName_s | string |
| ApplicationName_s_s | string |
| Computer | string |
| ContentId_g | string |
| ContentId_g_g | string |
| DataState_s | string |
| DataState_s_s | string |
| DeviceId_g | string |
| DeviceId_s | string |
| DeviceRisk_s | string |
| DiscoveredInformationTypes_s | string |
| InformationTypes_s | string |
| InformationTypesAbove55_s | string |
| InformationTypesAbove65_s | string |
| InformationTypesAbove75_s | string |
| InformationTypesAbove85_s | string |
| InformationTypesAbove95_s | string |
| IPv4_s | string |
| IPv4_s_s | string |
| IsLabelChanged_b | bool |
| IsProtectionChanged_b | bool |
| LabelId_g | string |
| LabelIdBeforeAction_g | string |
| LabelName_s | string |
| LabelNameBefore_s | string |
| Location_s | string |
| LogId_g | string |
| LogId_g_g | string |
| MachineId_s | string |
| MachineName_s | string |
| ManagementGroupName | string |
| MatchedLabelId_g | string |
| MatchedLabelName_s | string |
| MG | string |
| ObjectId_s | string |
| Operation_s | string |
| Operation_s_s | string |
| ParentLabelName_s | string |
| ParentLabelNameBefore_s | string |
| PK_LA___Content_Types__xml_MN_0_H_nY_t_Q_Ic_g_b_2p_J_6_oE_V_P_t_3_vX_I_u_p_e_nd_z_Q_Q_K_oH_X_U_s | string |
| Platform_s | string |
| Platform_s_s | string |
| ProcessName_s | string |
| ProcessName_s_s | string |
| ProcessVersion_s | string |
| ProcessVersion_s_s | string |
| ProductVersion_s | string |
| Protected_b | bool |
| Protected_b_s | string |
| Protected_s | string |
| ProtectedBeforeAction_b | bool |
| ProtectionOwner_s | string |
| ProtectionOwner_s_s | string |
| ProtectionTime_s | string |
| ProtectionTime_t | datetime |
| ProtectionTime_t_UTC__s | string |
| ProtectionType_s | string |
| ProtectionType_s_s | string |
| ProtectionTypeBefore_s | string |
| RawData | string |
| SensitivityChange_s | string |
| SourceSystem | string |
| TemplateId_g | string |
| TemplateId_g_g | string |
| TemplateIdBefore_g | string |
| TenantId | string |
| TimeGenerated | datetime |
| TimeGenerated_s | string |
| TimeGenerated_UTC__s | string |
| Type | string |
| UserId_s | string |
| UserId_s_s | string |
| Version_s | string |
| Version_s_s | string |
| Workload_s | string |
| Workload_s_s | string |

## Solutions (6)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (7)

### Analytic Rules (1)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Sensitive Data Access Outside Organizational Geo-location](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sensitive-data-access-outside-organizational-geo-loca-b81ed294-28cf-48c3-bac8-ac60dcef293b-93531af5.md) |  |

### Hunting Queries (1)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Sign In Risk Followed By Sensitive Data Access](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sign-in-risk-followed-by-sensitive-data-access-45ec52c2-99e1-4de1-9adc-bae0f79d4e23-f2037089.md) |  |

### Workbooks (5)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

