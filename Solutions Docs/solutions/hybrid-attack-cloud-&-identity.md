# Hybrid Attack - Cloud & Identity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Hybrid Attack - Cloud & Identity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-06-15 |
| **Last Updated** | 2026-07-29 |
| **Solution Folder** | [Hybrid Attack - Cloud & Identity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-hybridattackcloudidentity) · Popularity: ⚪ Very Low (0%) |

This solution includes hunting queries for hybrid attack scenarios spanning on-premises, cloud, and identity environments. The queries are designed to detect multi-stage attack techniques that leverage both cloud and identity signals. By correlating activities across different domains, these hunting queries help security analysts identify complex attack patterns that may go unnoticed when looking at individual data sources in isolation.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **19 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Hunting, Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | Hunting, Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | Hunting, Workbooks |
| [`AuditLogs`](../tables/auditlogs.md) | Hunting, Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | Hunting, Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting, Workbooks |
| [`CloudAppEvents`](../tables/cloudappevents.md) | Hunting, Workbooks |
| [`CloudAuditEvents`](../tables/cloudauditevents.md) | Hunting, Workbooks |
| [`CloudProcessEvents`](../tables/cloudprocessevents.md) | Hunting, Workbooks |
| [`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md) | Hunting, Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting, Workbooks |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | Hunting |
| [`DeviceInfo`](../tables/deviceinfo.md) | Hunting, Workbooks |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) | Hunting, Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | Hunting, Workbooks |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | Hunting, Workbooks |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Hunting, Workbooks |
| [`IdentityInfo`](../tables/identityinfo.md) | Hunting, Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Hunting, Workbooks |

## Content Items

This solution includes **55 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 54 |
| Workbooks | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AAD Connect host remote admin followed by Entra privilege operation](../content/hybrid-attack-cloud-&-identity-aad-connect-host-remote-admin-followed-by-entra-privilege-operation-c9b4347a-e5cf-4ca9-a58d-a9822c82467f-22b6048d.md) | Persistence, PrivilegeEscalation, LateralMovement | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [App credential change followed by SP sign-in burst](../content/hybrid-attack-cloud-&-identity-app-credential-change-followed-by-sp-sign-in-burst-1bd11966-beb8-4ee9-bb8d-f6627b45a250-22e9839d.md) | Persistence, PrivilegeEscalation | - |
| [Appliance management session followed by RBAC write](../content/hybrid-attack-cloud-&-identity-appliance-management-session-followed-by-rbac-write-80752d7f-8b48-4a80-8eea-0f9f3024f75f-17196699.md) | LateralMovement, PrivilegeEscalation, Persistence | [`AzureActivity`](../tables/azureactivity.md) |
| [Azure Network Configuration Tampered by Compromised Identity](../content/hybrid-attack-cloud-&-identity-azure-network-configuration-tampered-by-compromised-identity-455ffadf-ce55-4a0e-b339-fd3c2d67c71c-7151e2d8.md) | DefenseEvasion, Persistence, PrivilegeEscalation | [`DeviceInfo`](../tables/deviceinfo.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Azure Storage Access via AccountKey or SAS Token from First-Seen External IP](../content/hybrid-attack-cloud-&-identity-azure-storage-access-via-accountkey-or-sas-token-from-first-seen-external-fed80b62-1836-4e06-a01f-7ec467d46e24-57922c5a.md) | Exfiltration | [`StorageBlobLogs`](../tables/storagebloblogs.md) |
| [Azure Storage Bulk Download via AccountKey or SAS Token from External IP](../content/hybrid-attack-cloud-&-identity-azure-storage-bulk-download-via-accountkey-or-sas-token-from-external-ip-eea3dc6d-7abd-465e-b8e8-5176c205bb8e-ef5da964.md) | Exfiltration, Collection | [`StorageBlobLogs`](../tables/storagebloblogs.md) |
| [Azure VM web process to IMDS token theft chain](../content/hybrid-attack-cloud-&-identity-azure-vm-web-process-to-imds-token-theft-chain-b8c5b7f8-6c3c-4c34-8d12-3f2f5f0dc184-a4905960.md) | InitialAccess, Execution, CredentialAccess | - |
| [CVE Exploitation Indicators on Network Appliance (3P)](../content/hybrid-attack-cloud-&-identity-cve-exploitation-indicators-on-network-appliance-3p-e54511b5-f377-42d5-bf6b-9ab41fed938d-f116b40c.md) | InitialAccess, Persistence, DefenseEvasion | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cloud Run Command followed by kernel persistence indicators on target servers](../content/hybrid-attack-cloud-&-identity-cloud-run-command-followed-by-kernel-persistence-indicators-on-target-ser-b441f4ca-9de2-4dd4-b0de-7c8f869f20a1-49bbe6d8.md) | LateralMovement, Persistence, Execution | [`AzureActivity`](../tables/azureactivity.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Credential Stuffing or Password Spray on VPN or Firewall (3P Appliance)](../content/hybrid-attack-cloud-&-identity-credential-stuffing-or-password-spray-on-vpn-or-firewall-3p-appliance-d3a8effb-09e8-4d06-942b-0e6bbb717568-3473c00b.md) | CredentialAccess, InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cross-subscription and resource-group enumeration sweep by single identity](../content/hybrid-attack-cloud-&-identity-cross-subscription-and-resource-group-enumeration-sweep-by-single-identit-8ccbe013-d93f-4db2-ad52-e4ad2d0ad7fd-e54f2c94.md) | Discovery | [`AzureActivity`](../tables/azureactivity.md) |
| [Email Forwarding Rule Created to External Address](../content/hybrid-attack-cloud-&-identity-email-forwarding-rule-created-to-external-address-e8c2d54d-908e-4e20-b930-8dfb865d0b71-ca2e8295.md) | Collection, Exfiltration | - |
| [Entra App credential change followed by service principal sign-in burst](../content/hybrid-attack-cloud-&-identity-entra-app-credential-change-followed-by-service-principal-sign-in-burst-24e7f5fe-4f87-43b3-85f5-c620f8b51a83-040a8b72.md) | Persistence, CredentialAccess, DefenseEvasion | - |
| [Entra hybrid user sign-in followed by on-prem lateral movement](../content/hybrid-attack-cloud-&-identity-entra-hybrid-user-sign-in-followed-by-on-prem-lateral-movement-638446a2-8342-43dd-ae70-3308a3319f6f-1d8f481c.md) | LateralMovement, ValidAccounts | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Federated Identity Provider Added to Tenant](../content/hybrid-attack-cloud-&-identity-federated-identity-provider-added-to-tenant-f15d8548-1af1-43d3-a726-1ffefb87b303-577b7ffc.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [IAM and subscription enumeration followed by Key Vault operations](../content/hybrid-attack-cloud-&-identity-iam-and-subscription-enumeration-followed-by-key-vault-operations-87ca398d-e3f8-4b2f-b665-57f6600f59fb-6c209476.md) | Discovery, CredentialAccess, PrivilegeEscalation | [`AzureActivity`](../tables/azureactivity.md) |
| [IAM reconnaissance followed by role assignment write attempt](../content/hybrid-attack-cloud-&-identity-iam-reconnaissance-followed-by-role-assignment-write-attempt-9259db24-159e-411d-a893-a9f2c819bdf4-47e2cd7f.md) | Discovery, PrivilegeEscalation, Persistence | [`AzureActivity`](../tables/azureactivity.md) |
| [Identity and app enumeration followed by novel non-interactive tuple](../content/hybrid-attack-cloud-&-identity-identity-and-app-enumeration-followed-by-novel-non-interactive-tuple-c59f5f45-42fc-4f30-9f22-08908fc4d1ea-4e94a17e.md) | Discovery, CredentialAccess, LateralMovement | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md) |
| [K8s token audit then novel cloud control plane operations](../content/hybrid-attack-cloud-&-identity-k8s-token-audit-then-novel-cloud-control-plane-operations-90379ce8-b674-4f81-ac66-7d3c66439fd6-07c603d5.md) | CredentialAccess, Discovery, PrivilegeEscalation | [`CloudAuditEvents`](../tables/cloudauditevents.md) |
| [Kerberoast burst followed by cloud sign-in](../content/hybrid-attack-cloud-&-identity-kerberoast-burst-followed-by-cloud-sign-in-7f7c6e58-8f74-4c0c-913a-b2dfc96f7e21-23f0cd2d.md) | CredentialAccess, LateralMovement, ValidAccounts | [`SecurityEvent`](../tables/securityevent.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Key Vault discovery followed by data-store access enumeration](../content/hybrid-attack-cloud-&-identity-key-vault-discovery-followed-by-data-store-access-enumeration-48f40e49-cf3d-4f54-8f91-9077f6494186-79855d5a.md) | Discovery, Collection, CredentialAccess | [`AzureActivity`](../tables/azureactivity.md) |
| [Key Vault harvest to SPN sign-in then out-of-scope resource access](../content/hybrid-attack-cloud-&-identity-key-vault-harvest-to-spn-sign-in-then-out-of-scope-resource-access-9e0f2cf7-e3cb-4de2-a3f0-4a01fca52790-5feab5b0.md) | CredentialAccess, Discovery, Collection | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md) |
| [Key Vault secret harvest followed by novel SPN sign-in from non-1P IP](../content/hybrid-attack-cloud-&-identity-key-vault-secret-harvest-followed-by-novel-spn-sign-in-from-non-1p-ip-2b0d36b0-ec89-4bc3-8e7b-c2984c6e8f5d-c75e5795.md) | CredentialAccess, DefenseEvasion, Persistence | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md) |
| [Key Vault secret read then Storage key-auth pivot](../content/hybrid-attack-cloud-&-identity-key-vault-secret-read-then-storage-key-auth-pivot-1af2ec86-70ef-4d66-b3db-dfcbcb0167bd-571cd836.md) | Exfiltration, CredentialAccess, Collection, DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md)<br>[`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md) |
| [Key Vault secret read then partial storage exfil](../content/hybrid-attack-cloud-&-identity-key-vault-secret-read-then-partial-storage-exfil-0f9db4ae-4ec1-4baf-b6e1-a6d7af5d36f6-891da7bb.md) | CredentialAccess, Collection, Exfiltration, DefenseEvasion | [`AzureActivity`](../tables/azureactivity.md)<br>[`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md) |
| [Kubernetes daemonset or cronjob by non-automation identity](../content/hybrid-attack-cloud-&-identity-kubernetes-daemonset-or-cronjob-by-non-automation-identity-2d38986b-3068-4f43-9841-b4f82268c14f-1ffde728.md) | Persistence, PrivilegeEscalation | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Kubernetes first-seen control-plane writer](../content/hybrid-attack-cloud-&-identity-kubernetes-first-seen-control-plane-writer-b03e4fca-d3ba-4b87-ae4f-99111fe43e3a-c4d20961.md) | InitialAccess, Execution, Persistence | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Kubernetes secret enumeration followed by pod exec](../content/hybrid-attack-cloud-&-identity-kubernetes-secret-enumeration-followed-by-pod-exec-7f48f9be-5912-48df-9ba5-d380ec1484f2-9b8c9f98.md) | CredentialAccess, Execution | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [MFA Method Added on Risky Account](../content/hybrid-attack-cloud-&-identity-mfa-method-added-on-risky-account-d99ec2df-bcaf-4195-be29-9dd92e8d5e93-90d79d47.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Multi-Mailbox Access by Single IP via Cloud App Permissions](../content/hybrid-attack-cloud-&-identity-multi-mailbox-access-by-single-ip-via-cloud-app-permissions-c53bf4ae-bd8b-4c72-b9c3-10baa8c13885-6d487c75.md) | Collection, Exfiltration | [`CloudAppEvents`](../tables/cloudappevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Multi-service network exposure followed by key and data access](../content/hybrid-attack-cloud-&-identity-multi-service-network-exposure-followed-by-key-and-data-access-baebef19-9013-4e90-8511-92c036ca2710-f445ed0c.md) | DefenseEvasion, CredentialAccess, Collection | [`AzureActivity`](../tables/azureactivity.md) |
| [Novel SPN sign-in followed by Azure RBAC write](../content/hybrid-attack-cloud-&-identity-novel-spn-sign-in-followed-by-azure-rbac-write-4ad6abf5-d8a4-4f1d-a39f-8d8eb1dfc7e2-837d745f.md) | PrivilegeEscalation, Persistence, DefenseEvasion | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md) |
| [Novel identity then Key Vault secret burst](../content/hybrid-attack-cloud-&-identity-novel-identity-then-key-vault-secret-burst-7d8e22b3-2f90-4f2d-ae4d-bf2e8059cb11-ea7a919e.md) | Exfiltration, Discovery, CredentialAccess, Collection | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Novel sign-in context followed by IAM reconnaissance burst](../content/hybrid-attack-cloud-&-identity-novel-sign-in-context-followed-by-iam-reconnaissance-burst-a7e1e6bf-7a91-4ec7-91b2-13322089e3d8-737590ad.md) | Discovery, CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [OAuth consent change followed by first-seen OAuthAppId burst](../content/hybrid-attack-cloud-&-identity-oauth-consent-change-followed-by-first-seen-oauthappid-burst-10faf58e-d006-482f-87f0-a95b019cbf6f-619e7560.md) | InitialAccess, Discovery, Collection | [`CloudAppEvents`](../tables/cloudappevents.md) |
| [Partial failures followed by read concentration](../content/hybrid-attack-cloud-&-identity-partial-failures-followed-by-read-concentration-c4bc0ab8-8834-4b16-8baf-95ddf0328e30-b408d4cd.md) | Discovery, Collection, Exfiltration, DefenseEvasion | [`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md) |
| [Pod cloud CLI then KeyVault or storage access](../content/hybrid-attack-cloud-&-identity-pod-cloud-cli-then-keyvault-or-storage-access-6bc3f56b-2e7f-4820-8aac-f6b40917f931-2ce5980e.md) | CredentialAccess, Discovery, Collection | [`CloudAuditEvents`](../tables/cloudauditevents.md)<br>[`CloudProcessEvents`](../tables/cloudprocessevents.md) |
| [Pod token tooling then cloud RBAC write](../content/hybrid-attack-cloud-&-identity-pod-token-tooling-then-cloud-rbac-write-7f5d5715-8326-4865-b039-f9968f48de95-3154cdc1.md) | CredentialAccess, PrivilegeEscalation, DefenseEvasion | [`CloudAuditEvents`](../tables/cloudauditevents.md)<br>[`CloudProcessEvents`](../tables/cloudprocessevents.md) |
| [Post-Auth Config Change on Network Appliance (3P)](../content/hybrid-attack-cloud-&-identity-post-auth-config-change-on-network-appliance-3p-3d0ffd07-026f-44cf-9f60-8df51ba76690-6d29302f.md) | DefenseEvasion, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [RDP to hybrid joined device followed by Entra access](../content/hybrid-attack-cloud-&-identity-rdp-to-hybrid-joined-device-followed-by-entra-access-9f776b5c-d9a6-4d95-8794-5cfec9f9d22d-24505083.md) | LateralMovement, ValidAccounts | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Rare kernel load followed by novel non-interactive sign-in tuple](../content/hybrid-attack-cloud-&-identity-rare-kernel-load-followed-by-novel-non-interactive-sign-in-tuple-6f8a8f48-e63b-4afb-9d2a-3ef5f6e2d1bc-1cd5ae04.md) | Persistence, DefenseEvasion, CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Rare service principal authentication tuple](../content/hybrid-attack-cloud-&-identity-rare-service-principal-authentication-tuple-b1ce8746-fa4a-485f-a978-9a72d9bd0ba4-98e17830.md) | CredentialAccess, Persistence | - |
| [Rare service principal sign-in followed by RBAC write](../content/hybrid-attack-cloud-&-identity-rare-service-principal-sign-in-followed-by-rbac-write-d4deaf24-f2cf-4ed8-b869-a057f865f08f-65fe0b50.md) | CredentialAccess, PrivilegeEscalation, Persistence | - |
| [Risky Successful Sign-in to VPN or Network Access Application](../content/hybrid-attack-cloud-&-identity-risky-successful-sign-in-to-vpn-or-network-access-application-482a1615-5bc6-4b23-b2c5-97a4c3179240-5cf359b4.md) | InitialAccess | [`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Secret Added to Dormant Service Principal](../content/hybrid-attack-cloud-&-identity-secret-added-to-dormant-service-principal-e2294d1a-ae7d-4212-94c8-6ceff148993a-229ee773.md) | Persistence, PrivilegeEscalation | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AuditLogs`](../tables/auditlogs.md) |
| [Service principal Conditional Access anomaly](../content/hybrid-attack-cloud-&-identity-service-principal-conditional-access-anomaly-92076c80-49fd-4af0-9f9d-ea9dd1fa85c6-58eb67f7.md) | DefenseEvasion, Persistence | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |
| [Service principal credential change followed by novel SP sign-in](../content/hybrid-attack-cloud-&-identity-service-principal-credential-change-followed-by-novel-sp-sign-in-872ac8db-7642-4907-bcb2-d7822ae6be9c-d99cf1bb.md) | Persistence, PrivilegeEscalation | [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious OAuth App Consent Granting Sensitive Permissions](../content/hybrid-attack-cloud-&-identity-suspicious-oauth-app-consent-granting-sensitive-permissions-470f2af8-2b5d-41d4-9be6-686da24f370a-8a44eb7d.md) | Collection, Exfiltration, Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious sign-in followed by auth method or role change](../content/hybrid-attack-cloud-&-identity-suspicious-sign-in-followed-by-auth-method-or-role-change-adaf1ceb-db2d-49e9-989f-bf4116f53153-4324add3.md) | InitialAccess, Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Suspicious sign-in followed by cloud network exposure writes](../content/hybrid-attack-cloud-&-identity-suspicious-sign-in-followed-by-cloud-network-exposure-writes-ae4f0362-8ba1-43db-9899-4d05e0890133-1c5c2934.md) | InitialAccess, DefenseEvasion, Discovery | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Threat Intelligence Matched IP on Network Appliance Traffic](../content/hybrid-attack-cloud-&-identity-threat-intelligence-matched-ip-on-network-appliance-traffic-68adb008-8ade-469d-a88c-60672a063194-8a62ba53.md) | InitialAccess, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [VPN Credential Stuffing and Password Spray](../content/hybrid-attack-cloud-&-identity-vpn-credential-stuffing-and-password-spray-a1b2c3d4-e5f6-7890-abcd-ef1234567890-f34272b4.md) | InitialAccess, CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [WMI or remote admin execution on hybrid device followed by cloud sign-in](../content/hybrid-attack-cloud-&-identity-wmi-or-remote-admin-execution-on-hybrid-device-followed-by-cloud-sign-in-638d7a85-0c62-4f9d-9a90-937a7c565e1b-0d54206f.md) | LateralMovement, Execution, ValidAccounts | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Web service child process with egress](../content/hybrid-attack-cloud-&-identity-web-service-child-process-with-egress-5f1c1a92-cd98-4e7b-a3df-6bd6d5d2c2a1-de3860f6.md) | InitialAccess, Execution | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [HybridAttack-Cloud&Identity](../content/hybrid-attack-cloud-&-identity-hybridattack-cloud&identity-847f4a4f.md) | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AADUserRiskEvents`](../tables/aaduserriskevents.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`CloudAppEvents`](../tables/cloudappevents.md)<br>[`CloudAuditEvents`](../tables/cloudauditevents.md)<br>[`CloudProcessEvents`](../tables/cloudprocessevents.md)<br>[`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceInfo`](../tables/deviceinfo.md)<br>[`DeviceNetworkInfo`](../tables/devicenetworkinfo.md)<br>[`Event`](../tables/event.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`StorageBlobLogs`](../tables/storagebloblogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 26-06-2026                     | Private Preview Release     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

