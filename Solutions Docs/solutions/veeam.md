# Veeam

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Veeam Software |
| **Support Tier** | Partner |
| **Support Link** | [https://helpcenter.veeam.com/docs/security_plugins_microsoft_sentinel/guide/](https://helpcenter.veeam.com/docs/security_plugins_microsoft_sentinel/guide/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **First Published** | 2025-08-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md)

## Tables Reference

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | - | Analytics, Workbooks |
| [`VeeamAuthorizationEvents_CL`](../tables/veeamauthorizationevents-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Workbooks |
| [`VeeamCovewareFindings_CL`](../tables/veeamcovewarefindings-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Workbooks |
| [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamSessions_CL`](../tables/veeamsessions-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics |

## Content Items

This solution includes **164 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 132 |
| Playbooks | 15 |
| Watchlists | 11 |
| Parsers | 4 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Adding User or Group Failed](../content/6d1a5478-e613-44f4-a48f-12cc18568522.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Application Group Deleted](../content/fa8d692d-5b00-4a6c-99b3-30b4710efa59.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Application Group Settings Updated](../content/ff3ceb7d-bed0-4ed2-8dbf-1feb9047810f.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Archive Repository Deleted](../content/6a90f177-dcaa-44ec-b6e6-723ee8408cb2.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Archive Repository Settings Updated](../content/74c3bda5-cdae-4af3-ab54-daddfbe8bc70.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Attempt to Delete Backup Failed](../content/4595192f-671b-4724-aa62-093a9724c2f3.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Attempt to Update Security Object Failed](../content/54c9a609-60db-47b0-82ee-86895c89bd89.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Backup Proxy Deleted](../content/b8527d36-4cba-49c1-9cab-de9cdc3de879.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Backup Repository Deleted](../content/73b4d1d5-c357-4350-bb58-924684a4792a.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Backup Repository Settings Updated](../content/f78e0bb9-2878-4e36-b9c9-6141bff8d3dd.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Best Practice Compliance Check Not Passed](../content/f920ac64-dfd0-4dea-9b7c-acecf1ea2b28.md) | Medium | - | [`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) |
| [Cloud Gateway Deleted](../content/72239d5b-ef96-4f15-896f-6cdcd9c53ca7.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Cloud Gateway Pool Deleted](../content/73e1d89b-79a6-4ab0-b3bb-5e564fcf10f1.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Cloud Gateway Pool Settings Updated](../content/2b3b59eb-ea7c-45f6-9df8-8dbaed632317.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Cloud Gateway Settings Updated](../content/9f0d4171-9a9f-42e4-acbf-9093dd4203de.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Cloud Replica Permanent Failover Performed by Tenant](../content/1f1634e5-585e-4187-ac5b-6d0e157bd2ea.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Configuration Backup Failed](../content/259ef474-836d-4662-86ef-70cb7a38e765.md) | High | - | [`VeeamSessions_CL`](../tables/veeamsessions-cl.md) |
| [Configuration Backup Job Failed](../content/18833d01-703a-438d-8ac6-84faa82e9b52.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [Configuration Backup Job Settings Updated](../content/90039769-0c32-442b-bb12-5b61224a77a0.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Connection to Backup Repository Lost](../content/8777f9e1-db58-4078-a381-4e47a3a2ee01.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Credential Record Deleted](../content/1edb50b5-fee1-4826-86f9-abaf0e4ce5a5.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Credential Record Updated](../content/860e201a-deea-4129-8646-fcf8bdd976b0.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Detaching Backups Started](../content/e0d937ca-4582-4c3b-b95b-82fff33ed610.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Encryption Password Added](../content/cfc967be-0428-4ab0-8c15-06c85649078f.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Encryption Password Changed](../content/58fcb721-35ec-4ea2-9f29-c99acde676b8.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Encryption Password Deleted](../content/a2c6fe48-0d3d-416b-991c-a750ec50d7eb.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [External Repository Deleted](../content/cc47b9d6-a10e-4c5e-94a1-c73a68273e2d.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [External Repository Settings Updated](../content/d035188d-d856-4a74-8226-f3bdf65033c4.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Failover Plan Deleted](../content/5f6f5a46-42d3-4961-94db-68b6229bc84e.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Failover Plan Failed](../content/8f339b13-02f0-400f-be18-491ec0ba71f1.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Failover Plan Settings Updated](../content/a053e7ba-e60c-482a-bbd8-89a25c53d905.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Failover Plan Started](../content/e06ec6d7-d9f6-4675-89bf-03fa8a0e0be0.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Failover Plan Stopped](../content/de4cc05b-2e4e-4104-9559-101b4c41c35e.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [File Server Deleted](../content/d7f23105-6756-43ae-973c-48b7441559d5.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [File Server Settings Updated](../content/62008da4-627e-47fe-b78a-62e1e23b3eb9.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [File Share Deleted](../content/7ddaf8ef-b726-408b-b1a7-a7a4f92cbf6d.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Four-Eyes Authorization Disabled](../content/57a8ff3a-d4aa-456f-9c13-186026bae52e.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Four-Eyes Authorization Request Created](../content/fe6226cd-fee7-4d0d-88d2-160311207b57.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Four-Eyes Authorization Request Expired](../content/a641dbe1-9590-46f8-a6d7-b5f24db6e126.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [Four-Eyes Authorization Request Rejected](../content/dfd1d756-623d-4951-84a5-ce51f726d322.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [General Settings Updated](../content/14003a45-da0b-47dc-8e20-9711ba7b5112.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Global Network Traffic Rules Deleted](../content/0995ccd8-16d4-4764-83b2-511235ca4e4b.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Global VM Exclusions Added](../content/c9faf1ee-57dd-4f54-8cd1-fcf35a1aa424.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Global VM Exclusions Changed](../content/2034c441-2850-4167-80ed-b4438155836d.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Global VM Exclusions Deleted](../content/141d7e3c-a72b-49f7-9e64-57f60c2fa927.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Host Deleted](../content/5601e894-2d3c-42fd-bc71-f0350b1b0bc6.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Host Settings Updated](../content/ac1a85f1-0e3f-4ae8-9f59-a240fc04b03f.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Hypervisor Host Deleted](../content/4e41c85f-d495-4a23-a218-41b938140dce.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Hypervisor Host Settings Updated](../content/580da4d1-8e39-4420-855d-3d4f653fe127.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Invalid Code for Multi-Factor Authentication Entered](../content/5220a0b0-ab15-43cf-a77e-2273d35cfe8e.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Job Deleted](../content/b4ea5da0-77a8-400e-ae2b-3ca8fdb779ef.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Job No Longer Used as Second Destination](../content/61c576ae-f81a-4151-8524-b08c86f206a8.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [KMS Key Rotation Job Finished](../content/f11f245e-f77e-4dc5-95f1-ce602c2a36ba.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [KMS Server Deleted](../content/9b5ab4b6-7cca-4779-9784-761b48a58e78.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [KMS Server Settings Updated](../content/594dafa1-e2d5-4f83-b32e-c629cb629b6f.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [License Expired](../content/94724029-6ec3-4bf7-a0e9-c4e4cba0479f.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [License Expiring](../content/79adb08a-8218-492d-acf0-f8aa596f3444.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [License Grace Period Started](../content/e4828d99-bb06-40b3-8f9d-0f68fb61e9ee.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [License Limit Exceeded](../content/31ffa231-72da-49f0-88cd-de08eaf3bc52.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [License Removed](../content/8e4986ac-7388-4782-b389-0b0288123dbc.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [License Support Expired](../content/7a6f7e95-b574-44ab-b215-f5c32a2378d1.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [License Support Expiring](../content/3caa6e6d-a3e2-4776-be97-15d20e2675ed.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Malware Activity Detected](../content/9a7c80ef-8dc2-4b07-834d-b9ca18d603f7.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Malware Detection Exclusions List Updated](../content/401e91cb-b53f-41a5-b066-1c028b3b51db.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [Malware Detection Session Finished](../content/88b9223c-29ff-48a9-a745-c553aa0dbae2.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Malware Detection Settings Updated](../content/effd8410-3119-41c8-a228-9c0c8ce10d67.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Malware Event Detected](../content/b42424a6-10f4-447b-92a0-55ac38f4a475.md) | Medium | - | [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md) |
| [Multi-Factor Authentication Disabled](../content/6881f4f5-f58e-43d7-a05e-b5d05a4c09f9.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Multi-Factor Authentication Token Revoked](../content/4d8f5244-cb56-4e95-ba65-0a7bec114a13.md) | Medium | - | [`Syslog`](../tables/syslog.md) |
| [Multi-Factor Authentication User Locked](../content/ebdd9cf8-c41c-460e-95d8-e5bc3cd9763e.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Multi-Factor Authentication for User Disabled](../content/3fefd6c5-bbe9-49a9-95b2-d4b8a5591d9c.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [NDMP Server Deleted](../content/e92ba6bb-53ea-4347-b1a6-2e015298bbdc.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Object Marked as Clean](../content/56d70592-077e-4e7b-9d8a-b5d8b0a6a52b.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Object Storage Deleted](../content/6e4d1832-2cf9-410d-a5e2-c12b33c7d9f7.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Object Storage Settings Updated](../content/1f6897bf-a05a-47b2-a5f9-4ba6fd34f715.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Objects Added to Malware Detection Exclusions](../content/a8ebf22b-a050-434c-8095-2267f206257a.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Objects Deleted from Malware Detection Exclusions](../content/f4cad1aa-a1e2-46dc-bf09-6cf8dc67f0ca.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Objects for Job Deleted](../content/5367e8fc-a150-468f-84f2-90ac1dabef15.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Objects for Protection Group Changed](../content/af97a601-8fac-4628-bdad-5fc0511236b2.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Objects for Protection Group Deleted](../content/88a61215-b3e6-4c78-8acd-9078d9bcfdc3.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Preferred Networks Deleted](../content/e06b913f-7698-4b2c-96e6-d47a9f4f5de8.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Protection Group Deleted](../content/5fda37e0-d67c-4e8d-b277-90e5eac2172c.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Protection Group Settings Updated](../content/e9b9efa5-4e19-4716-840b-51ef2feeaad1.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Recovery Token Deleted](../content/9f37ded4-f27a-4ef6-b5e6-de6430070808.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Restore Point Marked as Clean](../content/c4c6cb50-9fc3-4ca9-a2df-22d527240309.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Restore Point Marked as Infected](../content/bad9d4b8-41cb-41ba-82c8-e20e771b3440.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [SSH Credentials Changed](../content/40b8e739-1077-42d8-9501-b68736c2c4d2.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Scale-Out Backup Repository Deleted](../content/4dc85727-573c-4722-8173-026e2a1d20db.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Scale-Out Backup Repository Settings Updated](../content/12006091-95a7-4f21-b474-f74b0480a138.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Service Provider Deleted](../content/cbe9fcb2-8767-4965-887e-350710145386.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Service Provider Updated](../content/35fb4771-9b8f-47f7-bd5b-3085d584f7ce.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Storage Deleted](../content/7cf8c19b-6cd2-4d0c-814b-45d34e68568b.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Storage Settings Updated](../content/be47e508-e35b-4c63-979b-a75b72102344.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Subtenant Deleted](../content/1c23715c-3a28-4b98-b135-fece6e7dcb8b.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Subtenant Updated](../content/e1d0d9ce-b7c9-4e28-883d-04429f80d6d7.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [SureBackup Job Failed](../content/b7409bbb-6f0c-43c4-bb63-b20add5eb717.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Tape Erase Job Started](../content/06ba509c-606e-4967-baee-21815ae61f8e.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Tape Library Deleted](../content/ecf98b4a-3986-4739-879d-dd446e839153.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tape Media Pool Deleted](../content/ceb625a3-a8d7-4a42-9ea1-40f01c337ecd.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tape Media Vault Deleted](../content/19ed623e-1b1c-45e0-ac74-c1e629fbf117.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tape Medium Deleted](../content/d92b2d65-1037-41e2-8d04-c18b8403d895.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Tape Server Deleted](../content/fda79d00-9e6a-46f8-b7a2-2bdccd5f598e.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tenant Password Changed](../content/afec0070-2b46-4366-a272-e2d9cc8a50f2.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Tenant Quota Changed](../content/da25b390-b97a-4ea4-abe3-5bbd7f90642c.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tenant Quota Deleted](../content/16183d97-c348-4f72-a943-27e80c9dfbd5.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tenant Replica Started](../content/c4d891cd-4b22-419c-8f40-7603eb1cc3a3.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [Tenant Replica Stopped](../content/ef029652-d004-44e9-a70a-48dd71818aaa.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Tenant State Changed](../content/71711b77-486c-41d0-9de0-dcc411fa7b05.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [User or Group Added](../content/25111c10-44b5-4275-996d-d62f15a7d072.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [User or Group Deleted](../content/d297961f-f8a3-4f84-865d-ec3a07641699.md) | High | - | [`Syslog`](../tables/syslog.md) |
| [Veeam ONE Application with No Recent Data Backup Sessions](../content/73e36985-d65d-4852-b3cc-5e8f4b64b39c.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Backup Copy RPO](../content/7fb6d1b6-48e4-442b-ba4d-1b5fb5fa379b.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Backup Server Security and Compliance State](../content/7ad4b9ff-8089-4b70-b98e-a2ca995611e9.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Computer with No Backup](../content/c0ead324-d8e8-484d-b590-9639f5ac5d93.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Immutability Change Tracking](../content/21ef1e12-75ac-43be-a77e-d2cee4c69225.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Immutability State](../content/b5785a66-3722-4bdc-9d12-bb40f2cf4824.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Job Disabled](../content/1a9e31d6-2116-4ff1-8ee7-abc957c34350.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Job Disabled (Veeam Backup for Microsoft 365)](../content/176abf3c-392a-47bd-b565-a4ecfd0ff7ec.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Malware Detection Change Tracking](../content/2a860019-0eda-4b49-bc62-8f683aed4929.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Possible Ransomware Activity (Hyper-V)](../content/d48f9671-adc0-45e5-a477-670ef38bc132.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Possible Ransomware Activity (vSphere)](../content/37d97c4d-a42f-495b-a523-376416b278b5.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Suspicious Incremental Backup Size](../content/8bb38c66-ca2a-4ad0-9b49-1e60368f8a19.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Unusual Job Duration](../content/04530ba4-b26e-4a83-8057-a4fc286de848.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Unusual Job Duration (Veeam Backup for Microsoft 365)](../content/cab7396a-9a18-45e7-b685-945e8bf825cb.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Backup](../content/0e76e420-fa55-4718-adc6-40a1a76411af.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Backup (Hyper-V)](../content/ae880194-5766-46d3-a17b-c8c53e9ca96c.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Replica](../content/128ea2a4-1047-4f28-ad55-b1b88357d172.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Replica (Hyper-V)](../content/6117e317-4b90-4bcc-a71f-0c1f29d82ce3.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Virtual Lab Deleted](../content/384e92a7-103c-4a47-945d-381ae9653f91.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [Virtual Lab Settings Updated](../content/a21eccd5-0148-4f88-a5d7-a8f86e9e4d8e.md) | Low | - | [`Syslog`](../tables/syslog.md) |
| [WAN Accelerator Deleted](../content/5b19f19b-d92c-486f-be98-ba2c5945e240.md) | Informational | - | [`Syslog`](../tables/syslog.md) |
| [WAN Accelerator Settings Updated](../content/2e4fe360-ce67-433b-930e-42f83058dfd0.md) | Informational | - | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VeeamDataPlatformMonitoring](../content/veeamdataplatformmonitoring-veeam.md) | [`Syslog`](../tables/syslog.md) |
| [VeeamSecurityActivities](../content/veeamsecurityactivities-veeam.md) | [`Syslog`](../tables/syslog.md)<br>[`VeeamAuthorizationEvents_CL`](../tables/veeamauthorizationevents-cl.md)<br>[`VeeamCovewareFindings_CL`](../tables/veeamcovewarefindings-cl.md)<br>[`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md)<br>[`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md)<br>[`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Veeam-ChangeCollectionTime](../content/veeam-changecollectiontime-veeam.md) | This Microsoft Sentinel playbook adjusts the recurrence intervals for Veeam collection playbooks bas... | - |
| [Veeam-CollectConfigurationBackups](../content/veeam-collectconfigurationbackups-veeam.md) | A Microsoft Sentinel playbook that automatically runs configuration backup sessions on Veeam Backup ... | - |
| [Veeam-CollectCovewareFindings](../content/veeam-collectcovewarefindings-veeam.md) | This Microsoft Sentinel playbook automatically collects Coveware findings on a schedule. Retrieves C... | - |
| [Veeam-CollectMalwareEvents](../content/veeam-collectmalwareevents-veeam.md) | A Microsoft Sentinel playbook that automatically collects malware events from Veeam Backup & Replica... | - |
| [Veeam-CollectSecurityComplianceAnalyzerResult](../content/veeam-collectsecuritycomplianceanalyzerresult-veeam.md) | A Microsoft Sentinel playbook that automatically collects Veeam Security Compliance Analyzer results... | - |
| [Veeam-CollectVeeamAuthorizationEvents](../content/veeam-collectveeamauthorizationevents-veeam.md) | This Microsoft Sentinel playbook automatically collects Veeam authorization events Veeam Backup & Re... | - |
| [Veeam-CollectVeeamONEAlarms](../content/veeam-collectveeamonealarms-veeam.md) | This Microsoft Sentinel playbook automatically collects Veeam ONE alarms on a schedule. Retrieves Ve... | - |
| [Veeam-FindCleanRestorePoints](../content/veeam-findcleanrestorepoints-veeam.md) | A Microsoft Sentinel playbook with the incident trigger, that finds the last clean restore point for... | - |
| [Veeam-PerformConfigurationBackupOnIncident](../content/veeam-performconfigurationbackuponincident-veeam.md) | A Microsoft Sentinel playbook that automatically runs configuration backup session when triggered by... | - |
| [Veeam-PerformInstantVMRecovery](../content/veeam-performinstantvmrecovery-veeam.md) | This Microsoft Sentinel playbook performs instant VM recovery on the vm specified by MachineDisplayN... | - |
| [Veeam-PerformScanBackup](../content/veeam-performscanbackup-veeam.md) | This Microsoft Sentinel playbook with an incident trigger performs antivirus scan on Veeam backup us... | - |
| [Veeam-ResolveTriggeredAlarm](../content/veeam-resolvetriggeredalarm-veeam.md) | A Microsoft Sentinel playbook with an incident trigger that resolves Veeam ONE alarms (identified by... | - |
| [Veeam-SetupConnections](../content/veeam-setupconnections-veeam.md) | A Microsoft Sentinel playbook that configures Key Vault secrets and hybrid connections for Veeam ser... | - |
| [Veeam-StartQuickBackup](../content/veeam-startquickbackup-veeam.md) | A Microsoft Sentinel playbook with an incident trigger, that performs quick backup support for affec... | - |
| [Veeam-StartSecurityComplianceAnalyzer](../content/veeam-startsecuritycomplianceanalyzer-veeam.md) | This Microsoft Sentinel playbook initiates and monitors Veeam Security and Compliance Analyzer sessi... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Veeam_GetFinishedConfigurationBackupSessions](../content/a8ff1c42-9fa3-4712-98bd-ff12b98e81e3.md) | - | - |
| [Veeam_GetJobFinished](../content/600bfa89-575d-4397-b4b4-c0784a43580d.md) | - | - |
| [Veeam_GetSecurityEvents](../content/ce32b7f7-27b4-4d77-8a40-4a21acc0be46.md) | - | - |
| [Veeam_GetVeeamONEAlarms](../content/9de9f7e2-d0f2-4226-a128-a2583f3d2806.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [action_results_lookup](../content/action-results-lookup-veeam.md) | - | - |
| [collection_schedule_settings](../content/collection-schedule-settings-veeam.md) | - | - |
| [coveware_settings](../content/coveware-settings-veeam.md) | - | - |
| [job_types_lookup](../content/job-types-lookup-veeam.md) | - | - |
| [license_editions_lookup](../content/license-editions-lookup-veeam.md) | - | - |
| [license_types_lookup](../content/license-types-lookup-veeam.md) | - | - |
| [operation_names_lookup](../content/operation-names-lookup-veeam.md) | - | - |
| [session_states_lookup](../content/session-states-lookup-veeam.md) | - | - |
| [vbr_events_lookup](../content/vbr-events-lookup-veeam.md) | - | - |
| [vbr_settings](../content/vbr-settings-veeam.md) | - | - |
| [vone_settings](../content/vone-settings-veeam.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                  |
|-------------|--------------------------------|-------------------------------------------------------------------------------------|
| 3.0.2       | 15-10-2025                     | Updated author to Veeam Software                                                   |
| 3.0.1       | 03-10-2025                     | Updated Coveware security findings integration; Removed irrelevant mappings from all analytic rules; Updated Workbooks' drilldown capabilities |
| 3.0.0       | 26-08-2025                     | Initial Solution Release                                                            |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
