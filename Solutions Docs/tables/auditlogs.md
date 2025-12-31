# AuditLogs

Reference for AuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/auditlogs) |

## Solutions (15)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md)

---

## Content Items Using This Table (78)

### Analytic Rules (60)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Account Elevated to New Role](../content/c1c66f0b-5531-4a3e-a619-9d2f770ef730.md)
- [User Added to Admin Role](../content/2a09f8cb-deb7-4c40-b08b-9137667f1c0b.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [New External User Granted Admin Role](../content/d7424fd9-abb3-4ded-a723-eebe023aaa0b.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/39efbf4b-b347-4cc7-895e-99a868bf29ea.md)
- [Dataverse - New non-interactive identity granted access](../content/682e230c-e5da-4085-8666-701d1f1be7de.md)
- [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/943acfa0-9285-4eb0-a9c0-42e36177ef19.md)
- [Power Platform - Account added to privileged Microsoft Entra roles](../content/71d829d6-eb50-4a17-8a64-655fae8d71e1.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [Account Created and Deleted in Short Timeframe](../content/bb616d82-108f-47d3-9dec-9652ea0d3bf6.md)
- [Account created or deleted by non-approved user](../content/6d63efa6-7c25-4bd4-a486-aa6bf50fde8a.md)
- [Admin promotion after Role Management Application Permission Grant](../content/f80d951a-eddc-4171-b9d0-d616bb83efdc.md)
- [Azure RBAC (Elevate Access)](../content/132fdff4-c044-4855-a390-c1b71e0f833b.md)
- [Bulk Changes to Privileged Account Permissions](../content/218f60de-c269-457a-b882-9966632b9dc6.md)
- [Conditional Access - A Conditional Access Device platforms condition has changed (the Device platforms condition can be spoofed)](../content/e3368079-a2c0-4f1c-9fb7-287e907393ef.md)
- [Conditional Access - A Conditional Access app exclusion has changed](../content/0990a481-3bc8-4682-838c-313918dd858c.md)
- [Conditional Access - A Conditional Access policy was deleted](../content/2e96fa64-ac4d-4c92-b79e-e9c54b5d8230.md)
- [Conditional Access - A Conditional Access policy was disabled](../content/40702da1-ae8a-4e46-ac1f-9327ca6ef588.md)
- [Conditional Access - A Conditional Access policy was put into report-only mode](../content/5588de32-73b1-40b9-bddc-4d9e74051859.md)
- [Conditional Access - A Conditional Access policy was updated](../content/ccca6b88-a7b6-41c9-9be2-fc3daeb65b26.md)
- [Conditional Access - A Conditional Access user/group/role exclusion has changed](../content/2ce7f00d-3b3c-41b9-ae9a-b79c19d2394e.md)
- [Conditional Access - A new Conditional Access policy was created](../content/0459a1b5-909d-4783-9e27-24536b05a47f.md)
- [Conditional Access - Dynamic Group Exclusion Changes](../content/c385944b-17b9-4b2b-921e-0e8d0341a675.md)
- [Credential added after admin consented to Application](../content/707494a5-8e44-486b-90f8-155d1797a8eb.md)
- [Cross-tenant Access Settings Organization Added](../content/757e6a79-6d23-4ae6-9845-4dac170656b5.md)
- [Cross-tenant Access Settings Organization Deleted](../content/eb8a9c1c-f532-4630-817c-1ecd8a60ed80.md)
- [Cross-tenant Access Settings Organization Inbound Collaboration Settings Changed](../content/c895c5b9-0fc6-40ce-9830-e8818862f2d5.md)
- [Cross-tenant Access Settings Organization Inbound Direct Settings Changed](../content/276d5190-38de-4eb2-9933-b3b72f4a5737.md)
- [Cross-tenant Access Settings Organization Outbound Collaboration Settings Changed](../content/229f71ba-d83b-42a5-b83b-11a641049ed1.md)
- [Cross-tenant Access Settings Organization Outbound Direct Settings Changed](../content/0101e08d-99cd-4a97-a9e0-27649c4369ad.md)
- [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/acc4c247-aaf7-494b-b5da-17f18863878a.md)
- [First access credential added to Application or Service Principal where no credential was present](../content/2cfc3c6e-f424-4b88-9cc9-c89f482d016a.md)
- [Guest accounts added in Entra ID Groups other than the ones specified](../content/6ab1f7b2-61b8-442f-bc81-96afe7ad8c53.md)
- [Mail.Read Permissions Granted to Application](../content/2560515c-07d1-434e-87fb-ebe3af267760.md)
- [Microsoft Entra ID Role Management Permission Grant](../content/1ff56009-db01-4615-8211-d4fda21da02d.md)
- [Modified domain federation trust settings](../content/95dc4ae3-e0f2-48bd-b996-cdd22b90f9af.md)
- [Multiple admin membership removals from newly created admin.](../content/cda5928c-2c1e-4575-9dfa-07568bc27a4f.md)
- [NRT Authentication Methods Changed for VIP Users](../content/29e99017-e28d-47be-8b9a-c8c711f8a903.md)
- [NRT First access credential added to Application or Service Principal where no credential was present](../content/b6988c32-4f3b-4a45-8313-b46b33061a74.md)
- [NRT Modified domain federation trust settings](../content/8540c842-5bbc-4a24-9fb2-a836c0e55a51.md)
- [NRT New access credential added to Application or Service Principal](../content/e42e889a-caaf-4dbb-aec6-371b37d64298.md)
- [NRT PIM Elevation Request Rejected](../content/5db427b2-f406-4274-b413-e9fcb29412f8.md)
- [NRT Privileged Role Assigned Outside PIM](../content/14f6da04-2f96-44ee-9210-9ccc1be6401e.md)
- [NRT User added to Microsoft Entra ID Privileged Groups](../content/70fc7201-f28e-4ba7-b9ea-c04b96701f13.md)
- [New User Assigned to Privileged Role](../content/050b9b3d-53d0-4364-a3da-1b678b8211ec.md)
- [New access credential added to Application or Service Principal](../content/79566f41-df67-4e10-a703-c38a6213afd8.md)
- [New onmicrosoft domain added to tenant](../content/4f42b94f-b210-42d1-a023-7fa1c51d969f.md)
- [PIM Elevation Request Rejected](../content/7d7e20f8-3384-4b71-811c-f5e950e8306c.md)
- [Possible SignIn from Azure Backdoor](../content/fa00014c-c5f4-4715-8f5b-ba567e19e41e.md)
- [Privileged Role Assigned Outside PIM](../content/269435e3-1db8-4423-9dfc-9bf59997da1c.md)
- [Rare application consent](../content/83ba3057-9ea3-4759-bf6a-933f2e5bc7ee.md)
- [Suspicious Entra ID Joined Device Update](../content/3a3c6835-0086-40ca-b033-a93bf26d878f.md)
- [Suspicious Service Principal creation activity](../content/6852d9da-8015-4b95-8ecf-d9572ee0395d.md)
- [Suspicious application consent for offline access](../content/3533f74c-9207-4047-96e2-0eb9383be587.md)
- [Suspicious application consent similar to O365 Attack Toolkit](../content/f948a32f-226c-4116-bddd-d95e91d97eb9.md)
- [Suspicious application consent similar to PwnAuth](../content/39198934-62a0-4781-8416-a81265c03fd6.md)
- [User Assigned New Privileged Role](../content/746ddb63-f51b-4563-b449-a8b13cf302ec.md)
- [User added to Microsoft Entra ID Privileged Groups](../content/4d94d4a9-dc96-410a-8dea-4d4d4584188b.md)
- [full_access_as_app Granted To Application](../content/54e22fed-0ec6-4fb2-8312-2a3809a93f63.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Threat Essentials - Multiple admin membership removals from newly created admin.](../content/199978c5-cd6d-4194-b505-8ef5800739df.md)
- [Threat Essentials - NRT User added to Microsoft Entra ID Privileged Groups](../content/0a627f29-f0dd-4924-be92-c3d6dac84367.md)
- [Threat Essentials - User Assigned Privileged Role](../content/b09795c9-8dce-47ab-8f75-5a4afb78ef0c.md)

### Hunting Queries (7)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Risky Sign-in with new MFA method](../content/bfacf634-c75e-4291-998c-ecbc0323d943.md)
- [User detection added to privilege groups based in Watchlist](../content/8c5bc38a-438d-48fb-ae3f-7f356d3e5ba9.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Application Granted EWS Permissions](../content/c7941212-4ff9-4d2d-b38d-54d78fa087cc.md)
- [Interactive STS refresh token modifications](../content/4696e072-aca8-4a4f-bf05-89fddc5ac3c9.md)
- [User Granted Access and Grants Access to Other Users](../content/2b6a3882-d601-4298-983b-880f6dc7acdb.md)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**
- [Anomalous Entra High-Privilege Role Modification](../content/8741deeb-332e-4061-8873-5086040920e3.md)
- [Anomalous High-Privileged Role Assignment](../content/5aa5083c-1de6-42bb-a128-2ec2aba1de39.md)

### Workbooks (11)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [AzureActiveDirectoryAuditLogs](../content/azureactivedirectoryauditlogs-microsoft-entra-id.md)
- [ConditionalAccessSISM](../content/conditionalaccesssism-microsoft-entra-id.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/insiderriskmanagement-microsoftpurviewinsiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/soxitcompliance-sox-it-compliance.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.azureadgraph/tenants`
- `microsoft.graph/tenants`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
