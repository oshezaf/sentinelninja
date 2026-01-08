# Veeam

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/VeeamLogo.svg" alt="Veeam Logo" width="75" height="75">

Veeam App for Microsoft Sentinel allows Veeam Data Platform Advanced and Premium customers to combine the powerful cyberthreat detection and response features of Microsoft Sentinel with a simple and powerful data platform that goes beyond backup, providing organizations with reliable data protection, seamless recovery, and vital security insights.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/products/functions/#overview)

c. [Azure Key Vault](https://azure.microsoft.com/products/key-vault/)

d. [Azure Storage Account](https://azure.microsoft.com/products/storage/)

e. [Azure Relays](https://azure.microsoft.com/products/service-bus/)

f. [Azure Logic Apps](https://azure.microsoft.com/products/logic-apps/)

g. [Azure Log Analytics](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Veeam Software |
| **Support Tier** | Partner |
| **Support Link** | [https://helpcenter.veeam.com/docs/security_plugins_microsoft_sentinel/guide/](https://helpcenter.veeam.com/docs/security_plugins_microsoft_sentinel/guide/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Veeam Software - microsoftappsupport@veeam.com |
| **First Published** | 2025-08-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md)

## Tables Reference

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Event`](../tables/event.md) | - | Workbooks |
| [`Operation`](../tables/operation.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Workbooks |
| [`VeeamAuthorizationEvents_CL`](../tables/veeamauthorizationevents-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Workbooks |
| [`VeeamCovewareFindings_CL`](../tables/veeamcovewarefindings-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Workbooks |
| [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics, Workbooks |
| [`VeeamSessions_CL`](../tables/veeamsessions-cl.md) | [Veeam Data Connector (using Azure Functions)](../connectors/veeamcustomtablesdataconnector.md) | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`watchlist`](../tables/watchlist.md) | - | Workbooks |

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
| [Adding User or Group Failed](../content/veeam-adding-user-or-group-failed-6d1a5478-e613-44f4-a48f-12cc18568522-f478360e.md) | Low | - | - |
| [Application Group Deleted](../content/veeam-application-group-deleted-fa8d692d-5b00-4a6c-99b3-30b4710efa59-e00a6bd6.md) | Informational | - | - |
| [Application Group Settings Updated](../content/veeam-application-group-settings-updated-ff3ceb7d-bed0-4ed2-8dbf-1feb9047810f-3c6e9177.md) | Informational | - | - |
| [Archive Repository Deleted](../content/veeam-archive-repository-deleted-6a90f177-dcaa-44ec-b6e6-723ee8408cb2-556b7bd6.md) | High | - | - |
| [Archive Repository Settings Updated](../content/veeam-archive-repository-settings-updated-74c3bda5-cdae-4af3-ab54-daddfbe8bc70-1f51970c.md) | Low | - | - |
| [Attempt to Delete Backup Failed](../content/veeam-attempt-to-delete-backup-failed-4595192f-671b-4724-aa62-093a9724c2f3-d054a91c.md) | High | - | - |
| [Attempt to Update Security Object Failed](../content/veeam-attempt-to-update-security-object-failed-54c9a609-60db-47b0-82ee-86895c89bd89-b69be8a9.md) | High | - | - |
| [Backup Proxy Deleted](../content/veeam-backup-proxy-deleted-b8527d36-4cba-49c1-9cab-de9cdc3de879-875a2136.md) | Informational | - | - |
| [Backup Repository Deleted](../content/veeam-backup-repository-deleted-73b4d1d5-c357-4350-bb58-924684a4792a-02bf2f4c.md) | High | - | - |
| [Backup Repository Settings Updated](../content/veeam-backup-repository-settings-updated-f78e0bb9-2878-4e36-b9c9-6141bff8d3dd-d62dcafd.md) | Low | - | - |
| [Best Practice Compliance Check Not Passed](../content/veeam-best-practice-compliance-check-not-passed-f920ac64-dfd0-4dea-9b7c-acecf1ea2b28-bd3d7387.md) | Medium | - | [`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md) |
| [Cloud Gateway Deleted](../content/veeam-cloud-gateway-deleted-72239d5b-ef96-4f15-896f-6cdcd9c53ca7-b39fbbe7.md) | Informational | - | - |
| [Cloud Gateway Pool Deleted](../content/veeam-cloud-gateway-pool-deleted-73e1d89b-79a6-4ab0-b3bb-5e564fcf10f1-af99fadf.md) | Informational | - | - |
| [Cloud Gateway Pool Settings Updated](../content/veeam-cloud-gateway-pool-settings-updated-2b3b59eb-ea7c-45f6-9df8-8dbaed632317-b5a4401b.md) | Informational | - | - |
| [Cloud Gateway Settings Updated](../content/veeam-cloud-gateway-settings-updated-9f0d4171-9a9f-42e4-acbf-9093dd4203de-c41a8fa0.md) | Informational | - | - |
| [Cloud Replica Permanent Failover Performed by Tenant](../content/veeam-cloud-replica-permanent-failover-performed-by-tenant-1f1634e5-585e-4187-ac5b-6d0e157bd2ea-210ce11c.md) | High | - | - |
| [Configuration Backup Failed](../content/veeam-configuration-backup-failed-259ef474-836d-4662-86ef-70cb7a38e765-7c9c3700.md) | High | - | [`VeeamSessions_CL`](../tables/veeamsessions-cl.md) |
| [Configuration Backup Job Failed](../content/veeam-configuration-backup-job-failed-18833d01-703a-438d-8ac6-84faa82e9b52-9600efc4.md) | Medium | - | - |
| [Configuration Backup Job Settings Updated](../content/veeam-configuration-backup-job-settings-updated-90039769-0c32-442b-bb12-5b61224a77a0-b9b9d248.md) | Informational | - | - |
| [Connection to Backup Repository Lost](../content/veeam-connection-to-backup-repository-lost-8777f9e1-db58-4078-a381-4e47a3a2ee01-9b8e30ae.md) | High | - | - |
| [Credential Record Deleted](../content/veeam-credential-record-deleted-1edb50b5-fee1-4826-86f9-abaf0e4ce5a5-6820b7f9.md) | High | - | - |
| [Credential Record Updated](../content/veeam-credential-record-updated-860e201a-deea-4129-8646-fcf8bdd976b0-56a92981.md) | High | - | - |
| [Detaching Backups Started](../content/veeam-detaching-backups-started-e0d937ca-4582-4c3b-b95b-82fff33ed610-4f43902a.md) | Informational | - | - |
| [Encryption Password Added](../content/veeam-encryption-password-added-cfc967be-0428-4ab0-8c15-06c85649078f-53a7514b.md) | Informational | - | - |
| [Encryption Password Changed](../content/veeam-encryption-password-changed-58fcb721-35ec-4ea2-9f29-c99acde676b8-4baf2059.md) | High | - | - |
| [Encryption Password Deleted](../content/veeam-encryption-password-deleted-a2c6fe48-0d3d-416b-991c-a750ec50d7eb-cc9c7de8.md) | High | - | - |
| [External Repository Deleted](../content/veeam-external-repository-deleted-cc47b9d6-a10e-4c5e-94a1-c73a68273e2d-0fdc5058.md) | High | - | - |
| [External Repository Settings Updated](../content/veeam-external-repository-settings-updated-d035188d-d856-4a74-8226-f3bdf65033c4-793b5498.md) | Informational | - | - |
| [Failover Plan Deleted](../content/veeam-failover-plan-deleted-5f6f5a46-42d3-4961-94db-68b6229bc84e-71200f93.md) | Low | - | - |
| [Failover Plan Failed](../content/veeam-failover-plan-failed-8f339b13-02f0-400f-be18-491ec0ba71f1-3a4dd3a5.md) | Low | - | - |
| [Failover Plan Settings Updated](../content/veeam-failover-plan-settings-updated-a053e7ba-e60c-482a-bbd8-89a25c53d905-f052d77a.md) | Informational | - | - |
| [Failover Plan Started](../content/veeam-failover-plan-started-e06ec6d7-d9f6-4675-89bf-03fa8a0e0be0-7856ed06.md) | High | - | - |
| [Failover Plan Stopped](../content/veeam-failover-plan-stopped-de4cc05b-2e4e-4104-9559-101b4c41c35e-6d0f15f3.md) | Medium | - | - |
| [File Server Deleted](../content/veeam-file-server-deleted-d7f23105-6756-43ae-973c-48b7441559d5-ce43c672.md) | High | - | - |
| [File Server Settings Updated](../content/veeam-file-server-settings-updated-62008da4-627e-47fe-b78a-62e1e23b3eb9-ffb6279a.md) | Informational | - | - |
| [File Share Deleted](../content/veeam-file-share-deleted-7ddaf8ef-b726-408b-b1a7-a7a4f92cbf6d-eddf1816.md) | High | - | - |
| [Four-Eyes Authorization Disabled](../content/veeam-four-eyes-authorization-disabled-57a8ff3a-d4aa-456f-9c13-186026bae52e-b3488fbd.md) | High | - | - |
| [Four-Eyes Authorization Request Created](../content/veeam-four-eyes-authorization-request-created-fe6226cd-fee7-4d0d-88d2-160311207b57-099da71d.md) | High | - | - |
| [Four-Eyes Authorization Request Expired](../content/veeam-four-eyes-authorization-request-expired-a641dbe1-9590-46f8-a6d7-b5f24db6e126-97428269.md) | Medium | - | - |
| [Four-Eyes Authorization Request Rejected](../content/veeam-four-eyes-authorization-request-rejected-dfd1d756-623d-4951-84a5-ce51f726d322-7d804843.md) | Informational | - | - |
| [General Settings Updated](../content/veeam-general-settings-updated-14003a45-da0b-47dc-8e20-9711ba7b5112-3bceec94.md) | Informational | - | - |
| [Global Network Traffic Rules Deleted](../content/veeam-global-network-traffic-rules-deleted-0995ccd8-16d4-4764-83b2-511235ca4e4b-cd5fb1dd.md) | Low | - | - |
| [Global VM Exclusions Added](../content/veeam-global-vm-exclusions-added-c9faf1ee-57dd-4f54-8cd1-fcf35a1aa424-a796c694.md) | High | - | - |
| [Global VM Exclusions Changed](../content/veeam-global-vm-exclusions-changed-2034c441-2850-4167-80ed-b4438155836d-8cfc4250.md) | High | - | - |
| [Global VM Exclusions Deleted](../content/veeam-global-vm-exclusions-deleted-141d7e3c-a72b-49f7-9e64-57f60c2fa927-c11061ff.md) | Low | - | - |
| [Host Deleted](../content/veeam-host-deleted-5601e894-2d3c-42fd-bc71-f0350b1b0bc6-64bec7a7.md) | Low | - | - |
| [Host Settings Updated](../content/veeam-host-settings-updated-ac1a85f1-0e3f-4ae8-9f59-a240fc04b03f-906860a3.md) | Informational | - | - |
| [Hypervisor Host Deleted](../content/veeam-hypervisor-host-deleted-4e41c85f-d495-4a23-a218-41b938140dce-e8282830.md) | Informational | - | - |
| [Hypervisor Host Settings Updated](../content/veeam-hypervisor-host-settings-updated-580da4d1-8e39-4420-855d-3d4f653fe127-469cf764.md) | Informational | - | - |
| [Invalid Code for Multi-Factor Authentication Entered](../content/veeam-invalid-code-for-multi-factor-authentication-entered-5220a0b0-ab15-43cf-a77e-2273d35cfe8e-1dc5cb8d.md) | High | - | - |
| [Job Deleted](../content/veeam-job-deleted-b4ea5da0-77a8-400e-ae2b-3ca8fdb779ef-4d0e2dcf.md) | High | - | - |
| [Job No Longer Used as Second Destination](../content/veeam-job-no-longer-used-as-second-destination-61c576ae-f81a-4151-8524-b08c86f206a8-a2039d6c.md) | High | - | - |
| [KMS Key Rotation Job Finished](../content/veeam-kms-key-rotation-job-finished-f11f245e-f77e-4dc5-95f1-ce602c2a36ba-15ef4e22.md) | Informational | - | - |
| [KMS Server Deleted](../content/veeam-kms-server-deleted-9b5ab4b6-7cca-4779-9784-761b48a58e78-64f5ddb1.md) | High | - | - |
| [KMS Server Settings Updated](../content/veeam-kms-server-settings-updated-594dafa1-e2d5-4f83-b32e-c629cb629b6f-72774293.md) | High | - | - |
| [License Expired](../content/veeam-license-expired-94724029-6ec3-4bf7-a0e9-c4e4cba0479f-6aee2823.md) | High | - | - |
| [License Expiring](../content/veeam-license-expiring-79adb08a-8218-492d-acf0-f8aa596f3444-e298567b.md) | Informational | - | - |
| [License Grace Period Started](../content/veeam-license-grace-period-started-e4828d99-bb06-40b3-8f9d-0f68fb61e9ee-8b23941c.md) | High | - | - |
| [License Limit Exceeded](../content/veeam-license-limit-exceeded-31ffa231-72da-49f0-88cd-de08eaf3bc52-b7b7a8e5.md) | Medium | - | - |
| [License Removed](../content/veeam-license-removed-8e4986ac-7388-4782-b389-0b0288123dbc-121b9733.md) | High | - | - |
| [License Support Expired](../content/veeam-license-support-expired-7a6f7e95-b574-44ab-b215-f5c32a2378d1-e23d9076.md) | High | - | - |
| [License Support Expiring](../content/veeam-license-support-expiring-3caa6e6d-a3e2-4776-be97-15d20e2675ed-84174b96.md) | Low | - | - |
| [Malware Activity Detected](../content/veeam-malware-activity-detected-9a7c80ef-8dc2-4b07-834d-b9ca18d603f7-acf84aa0.md) | High | - | - |
| [Malware Detection Exclusions List Updated](../content/veeam-malware-detection-exclusions-list-updated-401e91cb-b53f-41a5-b066-1c028b3b51db-77c32be6.md) | Medium | - | - |
| [Malware Detection Session Finished](../content/veeam-malware-detection-session-finished-88b9223c-29ff-48a9-a745-c553aa0dbae2-f6332cd2.md) | Informational | - | - |
| [Malware Detection Settings Updated](../content/veeam-malware-detection-settings-updated-effd8410-3119-41c8-a228-9c0c8ce10d67-78f0ae0b.md) | High | - | - |
| [Malware Event Detected](../content/veeam-malware-event-detected-b42424a6-10f4-447b-92a0-55ac38f4a475-c7fd790b.md) | Medium | - | [`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md) |
| [Multi-Factor Authentication Disabled](../content/veeam-multi-factor-authentication-disabled-6881f4f5-f58e-43d7-a05e-b5d05a4c09f9-2fe15a9f.md) | High | - | - |
| [Multi-Factor Authentication Token Revoked](../content/veeam-multi-factor-authentication-token-revoked-4d8f5244-cb56-4e95-ba65-0a7bec114a13-e6e8c283.md) | Medium | - | - |
| [Multi-Factor Authentication User Locked](../content/veeam-multi-factor-authentication-user-locked-ebdd9cf8-c41c-460e-95d8-e5bc3cd9763e-0f1eb613.md) | High | - | - |
| [Multi-Factor Authentication for User Disabled](../content/veeam-multi-factor-authentication-for-user-disabled-3fefd6c5-bbe9-49a9-95b2-d4b8a5591d9c-fd96aced.md) | High | - | - |
| [NDMP Server Deleted](../content/veeam-ndmp-server-deleted-e92ba6bb-53ea-4347-b1a6-2e015298bbdc-8a804f44.md) | Informational | - | - |
| [Object Marked as Clean](../content/veeam-object-marked-as-clean-56d70592-077e-4e7b-9d8a-b5d8b0a6a52b-863766f4.md) | Informational | - | - |
| [Object Storage Deleted](../content/veeam-object-storage-deleted-6e4d1832-2cf9-410d-a5e2-c12b33c7d9f7-e37c0dcd.md) | High | - | - |
| [Object Storage Settings Updated](../content/veeam-object-storage-settings-updated-1f6897bf-a05a-47b2-a5f9-4ba6fd34f715-2495202c.md) | Low | - | - |
| [Objects Added to Malware Detection Exclusions](../content/veeam-objects-added-to-malware-detection-exclusions-a8ebf22b-a050-434c-8095-2267f206257a-fa725b38.md) | High | - | - |
| [Objects Deleted from Malware Detection Exclusions](../content/veeam-objects-deleted-from-malware-detection-exclusions-f4cad1aa-a1e2-46dc-bf09-6cf8dc67f0ca-74c313f4.md) | Informational | - | - |
| [Objects for Job Deleted](../content/veeam-objects-for-job-deleted-5367e8fc-a150-468f-84f2-90ac1dabef15-bd166779.md) | High | - | - |
| [Objects for Protection Group Changed](../content/veeam-objects-for-protection-group-changed-af97a601-8fac-4628-bdad-5fc0511236b2-2ecd6a78.md) | Informational | - | - |
| [Objects for Protection Group Deleted](../content/veeam-objects-for-protection-group-deleted-88a61215-b3e6-4c78-8acd-9078d9bcfdc3-48a7356b.md) | High | - | - |
| [Preferred Networks Deleted](../content/veeam-preferred-networks-deleted-e06b913f-7698-4b2c-96e6-d47a9f4f5de8-3b2c2137.md) | Informational | - | - |
| [Protection Group Deleted](../content/veeam-protection-group-deleted-5fda37e0-d67c-4e8d-b277-90e5eac2172c-601902cf.md) | High | - | - |
| [Protection Group Settings Updated](../content/veeam-protection-group-settings-updated-e9b9efa5-4e19-4716-840b-51ef2feeaad1-719cfef0.md) | Informational | - | - |
| [Recovery Token Deleted](../content/veeam-recovery-token-deleted-9f37ded4-f27a-4ef6-b5e6-de6430070808-4cb5b9b4.md) | Low | - | - |
| [Restore Point Marked as Clean](../content/veeam-restore-point-marked-as-clean-c4c6cb50-9fc3-4ca9-a2df-22d527240309-2e0f7baf.md) | Informational | - | - |
| [Restore Point Marked as Infected](../content/veeam-restore-point-marked-as-infected-bad9d4b8-41cb-41ba-82c8-e20e771b3440-b2e91d35.md) | High | - | - |
| [SSH Credentials Changed](../content/veeam-ssh-credentials-changed-40b8e739-1077-42d8-9501-b68736c2c4d2-7a80fa5a.md) | High | - | - |
| [Scale-Out Backup Repository Deleted](../content/veeam-scale-out-backup-repository-deleted-4dc85727-573c-4722-8173-026e2a1d20db-db3c6213.md) | High | - | - |
| [Scale-Out Backup Repository Settings Updated](../content/veeam-scale-out-backup-repository-settings-updated-12006091-95a7-4f21-b474-f74b0480a138-3b450059.md) | Low | - | - |
| [Service Provider Deleted](../content/veeam-service-provider-deleted-cbe9fcb2-8767-4965-887e-350710145386-0f9a0391.md) | Informational | - | - |
| [Service Provider Updated](../content/veeam-service-provider-updated-35fb4771-9b8f-47f7-bd5b-3085d584f7ce-ada19297.md) | Informational | - | - |
| [Storage Deleted](../content/veeam-storage-deleted-7cf8c19b-6cd2-4d0c-814b-45d34e68568b-1589fb76.md) | High | - | - |
| [Storage Settings Updated](../content/veeam-storage-settings-updated-be47e508-e35b-4c63-979b-a75b72102344-eda2a675.md) | Informational | - | - |
| [Subtenant Deleted](../content/veeam-subtenant-deleted-1c23715c-3a28-4b98-b135-fece6e7dcb8b-220743c9.md) | High | - | - |
| [Subtenant Updated](../content/veeam-subtenant-updated-e1d0d9ce-b7c9-4e28-883d-04429f80d6d7-75b596f8.md) | Informational | - | - |
| [SureBackup Job Failed](../content/veeam-surebackup-job-failed-b7409bbb-6f0c-43c4-bb63-b20add5eb717-80cf55f4.md) | High | - | - |
| [Tape Erase Job Started](../content/veeam-tape-erase-job-started-06ba509c-606e-4967-baee-21815ae61f8e-409f1252.md) | High | - | - |
| [Tape Library Deleted](../content/veeam-tape-library-deleted-ecf98b4a-3986-4739-879d-dd446e839153-859b6cf4.md) | Informational | - | - |
| [Tape Media Pool Deleted](../content/veeam-tape-media-pool-deleted-ceb625a3-a8d7-4a42-9ea1-40f01c337ecd-e4f01ed7.md) | Informational | - | - |
| [Tape Media Vault Deleted](../content/veeam-tape-media-vault-deleted-19ed623e-1b1c-45e0-ac74-c1e629fbf117-183c8886.md) | Informational | - | - |
| [Tape Medium Deleted](../content/veeam-tape-medium-deleted-d92b2d65-1037-41e2-8d04-c18b8403d895-bcb4c853.md) | High | - | - |
| [Tape Server Deleted](../content/veeam-tape-server-deleted-fda79d00-9e6a-46f8-b7a2-2bdccd5f598e-dd1c29f0.md) | Informational | - | - |
| [Tenant Password Changed](../content/veeam-tenant-password-changed-afec0070-2b46-4366-a272-e2d9cc8a50f2-b358d996.md) | High | - | - |
| [Tenant Quota Changed](../content/veeam-tenant-quota-changed-da25b390-b97a-4ea4-abe3-5bbd7f90642c-086a7eb8.md) | Informational | - | - |
| [Tenant Quota Deleted](../content/veeam-tenant-quota-deleted-16183d97-c348-4f72-a943-27e80c9dfbd5-bdfeb6ec.md) | Informational | - | - |
| [Tenant Replica Started](../content/veeam-tenant-replica-started-c4d891cd-4b22-419c-8f40-7603eb1cc3a3-3fe4373a.md) | Informational | - | - |
| [Tenant Replica Stopped](../content/veeam-tenant-replica-stopped-ef029652-d004-44e9-a70a-48dd71818aaa-b0a49469.md) | High | - | - |
| [Tenant State Changed](../content/veeam-tenant-state-changed-71711b77-486c-41d0-9de0-dcc411fa7b05-828436c4.md) | Informational | - | - |
| [User or Group Added](../content/veeam-user-or-group-added-25111c10-44b5-4275-996d-d62f15a7d072-2b624885.md) | High | - | - |
| [User or Group Deleted](../content/veeam-user-or-group-deleted-d297961f-f8a3-4f84-865d-ec3a07641699-ea4feb04.md) | High | - | - |
| [Veeam ONE Application with No Recent Data Backup Sessions](../content/veeam-veeam-one-application-with-no-recent-data-backup-sessions-73e36985-d65d-4852-b3cc-5e8f4b64b39c-18d04ddc.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Backup Copy RPO](../content/veeam-veeam-one-backup-copy-rpo-7fb6d1b6-48e4-442b-ba4d-1b5fb5fa379b-100c041e.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Backup Server Security and Compliance State](../content/veeam-veeam-one-backup-server-security-and-compliance-state-7ad4b9ff-8089-4b70-b98e-a2ca995611e9-2f1962bd.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Computer with No Backup](../content/veeam-veeam-one-computer-with-no-backup-c0ead324-d8e8-484d-b590-9639f5ac5d93-344752d4.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Immutability Change Tracking](../content/veeam-veeam-one-immutability-change-tracking-21ef1e12-75ac-43be-a77e-d2cee4c69225-44705314.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Immutability State](../content/veeam-veeam-one-immutability-state-b5785a66-3722-4bdc-9d12-bb40f2cf4824-591ab1f0.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Job Disabled](../content/veeam-veeam-one-job-disabled-1a9e31d6-2116-4ff1-8ee7-abc957c34350-e6ef7112.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Job Disabled (Veeam Backup for Microsoft 365)](../content/veeam-veeam-one-job-disabled-veeam-backup-for-microsoft-365-176abf3c-392a-47bd-b565-a4ecfd0ff7ec-25ee2a1f.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Malware Detection Change Tracking](../content/veeam-veeam-one-malware-detection-change-tracking-2a860019-0eda-4b49-bc62-8f683aed4929-cb3c5094.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Possible Ransomware Activity (Hyper-V)](../content/veeam-veeam-one-possible-ransomware-activity-hyper-v-d48f9671-adc0-45e5-a477-670ef38bc132-af6c3fee.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Possible Ransomware Activity (vSphere)](../content/veeam-veeam-one-possible-ransomware-activity-vsphere-37d97c4d-a42f-495b-a523-376416b278b5-8f775dfd.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Suspicious Incremental Backup Size](../content/veeam-veeam-one-suspicious-incremental-backup-size-8bb38c66-ca2a-4ad0-9b49-1e60368f8a19-23fe1def.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Unusual Job Duration](../content/veeam-veeam-one-unusual-job-duration-04530ba4-b26e-4a83-8057-a4fc286de848-0b7485c8.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE Unusual Job Duration (Veeam Backup for Microsoft 365)](../content/veeam-veeam-one-unusual-job-duration-veeam-backup-for-microsoft-365-cab7396a-9a18-45e7-b685-945e8bf825cb-5c51314b.md) | Medium | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Backup](../content/veeam-veeam-one-vm-with-no-backup-0e76e420-fa55-4718-adc6-40a1a76411af-aa1124e9.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Backup (Hyper-V)](../content/veeam-veeam-one-vm-with-no-backup-hyper-v-ae880194-5766-46d3-a17b-c8c53e9ca96c-8666a76e.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Replica](../content/veeam-veeam-one-vm-with-no-replica-128ea2a4-1047-4f28-ad55-b1b88357d172-1cdf365f.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Veeam ONE VM with No Replica (Hyper-V)](../content/veeam-veeam-one-vm-with-no-replica-hyper-v-6117e317-4b90-4bcc-a71f-0c1f29d82ce3-5e9c3162.md) | High | - | [`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md) |
| [Virtual Lab Deleted](../content/veeam-virtual-lab-deleted-384e92a7-103c-4a47-945d-381ae9653f91-65be69c1.md) | Low | - | - |
| [Virtual Lab Settings Updated](../content/veeam-virtual-lab-settings-updated-a21eccd5-0148-4f88-a5d7-a8f86e9e4d8e-be075442.md) | Low | - | - |
| [WAN Accelerator Deleted](../content/veeam-wan-accelerator-deleted-5b19f19b-d92c-486f-be98-ba2c5945e240-ad4cbb3c.md) | Informational | - | - |
| [WAN Accelerator Settings Updated](../content/veeam-wan-accelerator-settings-updated-2e4fe360-ce67-433b-930e-42f83058dfd0-752109e1.md) | Informational | - | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VeeamDataPlatformMonitoring](../content/veeam-veeamdataplatformmonitoring-a61e8871.md) | - |
| [VeeamSecurityActivities](../content/veeam-veeamsecurityactivities-f559a349.md) | [`Event`](../tables/event.md)<br>[`Operation`](../tables/operation.md)<br>[`Syslog`](../tables/syslog.md)<br>[`VeeamAuthorizationEvents_CL`](../tables/veeamauthorizationevents-cl.md)<br>[`VeeamCovewareFindings_CL`](../tables/veeamcovewarefindings-cl.md)<br>[`VeeamMalwareEvents_CL`](../tables/veeammalwareevents-cl.md)<br>[`VeeamOneTriggeredAlarms_CL`](../tables/veeamonetriggeredalarms-cl.md)<br>[`VeeamSecurityComplianceAnalyzer_CL`](../tables/veeamsecuritycomplianceanalyzer-cl.md)<br>*Internal use:*<br>[`watchlist`](../tables/watchlist.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Veeam-ChangeCollectionTime](../content/veeam-veeam-changecollectiontime-6e10e57b.md) | This Microsoft Sentinel playbook adjusts the recurrence intervals for Veeam collection playbooks bas... | - |
| [Veeam-CollectConfigurationBackups](../content/veeam-veeam-collectconfigurationbackups-9c233254.md) | A Microsoft Sentinel playbook that automatically runs configuration backup sessions on Veeam Backup ... | - |
| [Veeam-CollectCovewareFindings](../content/veeam-veeam-collectcovewarefindings-bd6697f4.md) | This Microsoft Sentinel playbook automatically collects Coveware findings on a schedule. Retrieves C... | - |
| [Veeam-CollectMalwareEvents](../content/veeam-veeam-collectmalwareevents-f3b0eb28.md) | A Microsoft Sentinel playbook that automatically collects malware events from Veeam Backup & Replica... | - |
| [Veeam-CollectSecurityComplianceAnalyzerResult](../content/veeam-veeam-collectsecuritycomplianceanalyzerresult-f3c87f5d.md) | A Microsoft Sentinel playbook that automatically collects Veeam Security Compliance Analyzer results... | - |
| [Veeam-CollectVeeamAuthorizationEvents](../content/veeam-veeam-collectveeamauthorizationevents-cc857abb.md) | This Microsoft Sentinel playbook automatically collects Veeam authorization events Veeam Backup & Re... | - |
| [Veeam-CollectVeeamONEAlarms](../content/veeam-veeam-collectveeamonealarms-6c2da5eb.md) | This Microsoft Sentinel playbook automatically collects Veeam ONE alarms on a schedule. Retrieves Ve... | - |
| [Veeam-FindCleanRestorePoints](../content/veeam-veeam-findcleanrestorepoints-d5d2d8e3.md) | A Microsoft Sentinel playbook with the incident trigger, that finds the last clean restore point for... | - |
| [Veeam-PerformConfigurationBackupOnIncident](../content/veeam-veeam-performconfigurationbackuponincident-a3f7801c.md) | A Microsoft Sentinel playbook that automatically runs configuration backup session when triggered by... | - |
| [Veeam-PerformInstantVMRecovery](../content/veeam-veeam-performinstantvmrecovery-c570213a.md) | This Microsoft Sentinel playbook performs instant VM recovery on the vm specified by MachineDisplayN... | - |
| [Veeam-PerformScanBackup](../content/veeam-veeam-performscanbackup-122f518e.md) | This Microsoft Sentinel playbook with an incident trigger performs antivirus scan on Veeam backup us... | - |
| [Veeam-ResolveTriggeredAlarm](../content/veeam-veeam-resolvetriggeredalarm-077a309e.md) | A Microsoft Sentinel playbook with an incident trigger that resolves Veeam ONE alarms (identified by... | - |
| [Veeam-SetupConnections](../content/veeam-veeam-setupconnections-e3e98b5f.md) | A Microsoft Sentinel playbook that configures Key Vault secrets and hybrid connections for Veeam ser... | - |
| [Veeam-StartQuickBackup](../content/veeam-veeam-startquickbackup-3a35729c.md) | A Microsoft Sentinel playbook with an incident trigger, that performs quick backup support for affec... | - |
| [Veeam-StartSecurityComplianceAnalyzer](../content/veeam-veeam-startsecuritycomplianceanalyzer-80610f72.md) | This Microsoft Sentinel playbook initiates and monitors Veeam Security and Compliance Analyzer sessi... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Veeam_GetFinishedConfigurationBackupSessions](../content/veeam-veeam-getfinishedconfigurationbackupsessions-a8ff1c42-9fa3-4712-98bd-ff12b98e81e3-4029887f.md) | - | - |
| [Veeam_GetJobFinished](../content/veeam-veeam-getjobfinished-600bfa89-575d-4397-b4b4-c0784a43580d-5d2e5aad.md) | - | - |
| [Veeam_GetSecurityEvents](../content/veeam-veeam-getsecurityevents-ce32b7f7-27b4-4d77-8a40-4a21acc0be46-8f680874.md) | - | - |
| [Veeam_GetVeeamONEAlarms](../content/veeam-veeam-getveeamonealarms-9de9f7e2-d0f2-4226-a128-a2583f3d2806-4fec57c1.md) | - | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [action_results_lookup](../content/veeam-action-results-lookup-9b42431b.md) | - | - |
| [collection_schedule_settings](../content/veeam-collection-schedule-settings-f0c959c0.md) | - | - |
| [coveware_settings](../content/veeam-coveware-settings-ad36cea4.md) | - | - |
| [job_types_lookup](../content/veeam-job-types-lookup-661b4c88.md) | - | - |
| [license_editions_lookup](../content/veeam-license-editions-lookup-f1833a0f.md) | - | - |
| [license_types_lookup](../content/veeam-license-types-lookup-d29c9f25.md) | - | - |
| [operation_names_lookup](../content/veeam-operation-names-lookup-03d7d042.md) | - | - |
| [session_states_lookup](../content/veeam-session-states-lookup-9c8ee9ff.md) | - | - |
| [vbr_events_lookup](../content/veeam-vbr-events-lookup-d24da72b.md) | - | - |
| [vbr_settings](../content/veeam-vbr-settings-0ba654ec.md) | - | - |
| [vone_settings](../content/veeam-vone-settings-29780262.md) | - | - |

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
- [Content Index](../content/content-index.md)
