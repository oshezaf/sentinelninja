# AuditLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/auditlogs) |

## Solutions (20)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md)

---

## Content Items Using This Table (156)

### Analytic Rules (89)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**
- [Account Elevated to New Role](../content/business-email-compromise-financial-fraud-account-elevated-to-new-role-c1c66f0b-5531-4a3e-a619-9d2f770ef730-301c0a50.md)
- [Authentication Method Changed for Privileged Account](../content/business-email-compromise-financial-fraud-authentication-method-changed-for-privileged-account-feb0a2fb-ae75-4343-8cbc-ed545f1da289-05036a5e.md)
- [Privileged Account Permissions Changed](../content/business-email-compromise-financial-fraud-privileged-account-permissions-changed-0433c8a3-9aa6-4577-beef-2ea23be41137-ddff1dcb.md)
- [User Added to Admin Role](../content/business-email-compromise-financial-fraud-user-added-to-admin-role-2a09f8cb-deb7-4c40-b08b-9137667f1c0b-3a4fbb41.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Multi-Factor Authentication Disabled for a User](../content/cloud-identity-threat-protection-essentials-multi-factor-authentication-disabled-for-a-user-65c78944-930b-4cae-bd79-c3664ae30ba7-478ef443.md)
- [New External User Granted Admin Role](../content/cloud-identity-threat-protection-essentials-new-external-user-granted-admin-role-d7424fd9-abb3-4ded-a723-eebe023aaa0b-7be35a90.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/microsoft-business-applications-dataverse-guest-user-exfiltration-following-power-platform-defense-impai-39efbf4b-b347-4cc7-895e-99a868bf29ea-f29caf4d.md)
- [Dataverse - New non-interactive identity granted access](../content/microsoft-business-applications-dataverse-new-non-interactive-identity-granted-access-682e230c-e5da-4085-8666-701d1f1be7de-981cd709.md)
- [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/microsoft-business-applications-power-apps-bulk-sharing-of-power-apps-to-newly-created-guest-users-943acfa0-9285-4eb0-a9c0-42e36177ef19-41b30b81.md)
- [Power Platform - Account added to privileged Microsoft Entra roles](../content/microsoft-business-applications-power-platform-account-added-to-privileged-microsoft-entra-roles-71d829d6-eb50-4a17-8a64-655fae8d71e1-b0e60b31.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [Account Created and Deleted in Short Timeframe](../content/microsoft-entra-id-account-created-and-deleted-in-short-timeframe-bb616d82-108f-47d3-9dec-9652ea0d3bf6-8d7ac424.md)
- [Account created or deleted by non-approved user](../content/microsoft-entra-id-account-created-or-deleted-by-non-approved-user-6d63efa6-7c25-4bd4-a486-aa6bf50fde8a-141ffd02.md)
- [Admin promotion after Role Management Application Permission Grant](../content/microsoft-entra-id-admin-promotion-after-role-management-application-permission-grant-f80d951a-eddc-4171-b9d0-d616bb83efdc-dd72791a.md)
- [Authentication Methods Changed for Privileged Account](../content/microsoft-entra-id-authentication-methods-changed-for-privileged-account-694c91ee-d606-4ba9-928e-405a2dd0ff0f-513c9e02.md)
- [Azure RBAC (Elevate Access)](../content/microsoft-entra-id-azure-rbac-elevate-access-132fdff4-c044-4855-a390-c1b71e0f833b-647564ba.md)
- [Bulk Changes to Privileged Account Permissions](../content/microsoft-entra-id-bulk-changes-to-privileged-account-permissions-218f60de-c269-457a-b882-9966632b9dc6-1b16393e.md)
- [Conditional Access - A Conditional Access Device platforms condition has changed (the Device platforms condition can be spoofed)](../content/microsoft-entra-id-conditional-access-a-conditional-access-device-platforms-condition-has-changed-the-de-e3368079-a2c0-4f1c-9fb7-287e907393ef-136313dd.md)
- [Conditional Access - A Conditional Access app exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-app-exclusion-has-changed-0990a481-3bc8-4682-838c-313918dd858c-0a7b28b3.md)
- [Conditional Access - A Conditional Access policy was deleted](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-deleted-2e96fa64-ac4d-4c92-b79e-e9c54b5d8230-ed16bbf9.md)
- [Conditional Access - A Conditional Access policy was disabled](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-disabled-40702da1-ae8a-4e46-ac1f-9327ca6ef588-e70c07ce.md)
- [Conditional Access - A Conditional Access policy was put into report-only mode](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-put-into-report-only-mode-5588de32-73b1-40b9-bddc-4d9e74051859-368d42da.md)
- [Conditional Access - A Conditional Access policy was updated](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-updated-ccca6b88-a7b6-41c9-9be2-fc3daeb65b26-8aacaca3.md)
- [Conditional Access - A Conditional Access user/group/role exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-user-group-role-exclusion-has-changed-2ce7f00d-3b3c-41b9-ae9a-b79c19d2394e-f65af1a3.md)
- [Conditional Access - A new Conditional Access policy was created](../content/microsoft-entra-id-conditional-access-a-new-conditional-access-policy-was-created-0459a1b5-909d-4783-9e27-24536b05a47f-879d4060.md)
- [Conditional Access - Dynamic Group Exclusion Changes](../content/microsoft-entra-id-conditional-access-dynamic-group-exclusion-changes-c385944b-17b9-4b2b-921e-0e8d0341a675-f50f0e46.md)
- [Credential added after admin consented to Application](../content/microsoft-entra-id-credential-added-after-admin-consented-to-application-707494a5-8e44-486b-90f8-155d1797a8eb-a6cd2c7a.md)
- [Cross-tenant Access Settings Organization Added](../content/microsoft-entra-id-cross-tenant-access-settings-organization-added-757e6a79-6d23-4ae6-9845-4dac170656b5-de3a14c9.md)
- [Cross-tenant Access Settings Organization Deleted](../content/microsoft-entra-id-cross-tenant-access-settings-organization-deleted-eb8a9c1c-f532-4630-817c-1ecd8a60ed80-b0b4095f.md)
- [Cross-tenant Access Settings Organization Inbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-collaboration-settings-changed-c895c5b9-0fc6-40ce-9830-e8818862f2d5-1d923bf9.md)
- [Cross-tenant Access Settings Organization Inbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-direct-settings-changed-276d5190-38de-4eb2-9933-b3b72f4a5737-f3d5c408.md)
- [Cross-tenant Access Settings Organization Outbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-collaboration-settings-changed-229f71ba-d83b-42a5-b83b-11a641049ed1-42360945.md)
- [Cross-tenant Access Settings Organization Outbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-direct-settings-changed-0101e08d-99cd-4a97-a9e0-27649c4369ad-74ca33b7.md)
- [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md)
- [First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-first-access-credential-added-to-application-or-service-principal-where-no-credential-2cfc3c6e-f424-4b88-9cc9-c89f482d016a-ec11980a.md)
- [Guest accounts added in Entra ID Groups other than the ones specified](../content/microsoft-entra-id-guest-accounts-added-in-entra-id-groups-other-than-the-ones-specified-6ab1f7b2-61b8-442f-bc81-96afe7ad8c53-a7fe96f3.md)
- [Mail.Read Permissions Granted to Application](../content/microsoft-entra-id-mail.read-permissions-granted-to-application-2560515c-07d1-434e-87fb-ebe3af267760-50b99956.md)
- [Microsoft Entra ID Role Management Permission Grant](../content/microsoft-entra-id-microsoft-entra-id-role-management-permission-grant-1ff56009-db01-4615-8211-d4fda21da02d-2754d79c.md)
- [Modified domain federation trust settings](../content/microsoft-entra-id-modified-domain-federation-trust-settings-95dc4ae3-e0f2-48bd-b996-cdd22b90f9af-cb9684ef.md)
- [Multiple admin membership removals from newly created admin.](../content/microsoft-entra-id-multiple-admin-membership-removals-from-newly-created-admin.-cda5928c-2c1e-4575-9dfa-07568bc27a4f-ebb84fce.md)
- [NRT Authentication Methods Changed for VIP Users](../content/microsoft-entra-id-nrt-authentication-methods-changed-for-vip-users-29e99017-e28d-47be-8b9a-c8c711f8a903-12365352.md)
- [NRT First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-nrt-first-access-credential-added-to-application-or-service-principal-where-no-creden-b6988c32-4f3b-4a45-8313-b46b33061a74-b17559b5.md)
- [NRT Modified domain federation trust settings](../content/microsoft-entra-id-nrt-modified-domain-federation-trust-settings-8540c842-5bbc-4a24-9fb2-a836c0e55a51-3b2b599c.md)
- [NRT New access credential added to Application or Service Principal](../content/microsoft-entra-id-nrt-new-access-credential-added-to-application-or-service-principal-e42e889a-caaf-4dbb-aec6-371b37d64298-de5e304f.md)
- [NRT PIM Elevation Request Rejected](../content/microsoft-entra-id-nrt-pim-elevation-request-rejected-5db427b2-f406-4274-b413-e9fcb29412f8-faff1eec.md)
- [NRT Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-nrt-privileged-role-assigned-outside-pim-14f6da04-2f96-44ee-9210-9ccc1be6401e-12969908.md)
- [NRT User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-nrt-user-added-to-microsoft-entra-id-privileged-groups-70fc7201-f28e-4ba7-b9ea-c04b96701f13-c42c23de.md)
- [New User Assigned to Privileged Role](../content/microsoft-entra-id-new-user-assigned-to-privileged-role-050b9b3d-53d0-4364-a3da-1b678b8211ec-fad23221.md)
- [New access credential added to Application or Service Principal](../content/microsoft-entra-id-new-access-credential-added-to-application-or-service-principal-79566f41-df67-4e10-a703-c38a6213afd8-15b8a555.md)
- [New onmicrosoft domain added to tenant](../content/microsoft-entra-id-new-onmicrosoft-domain-added-to-tenant-4f42b94f-b210-42d1-a023-7fa1c51d969f-9b50862e.md)
- [PIM Elevation Request Rejected](../content/microsoft-entra-id-pim-elevation-request-rejected-7d7e20f8-3384-4b71-811c-f5e950e8306c-aad39230.md)
- [Possible SignIn from Azure Backdoor](../content/microsoft-entra-id-possible-signin-from-azure-backdoor-fa00014c-c5f4-4715-8f5b-ba567e19e41e-dd1ac846.md)
- [Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-privileged-role-assigned-outside-pim-269435e3-1db8-4423-9dfc-9bf59997da1c-d87cbe19.md)
- [Rare application consent](../content/microsoft-entra-id-rare-application-consent-83ba3057-9ea3-4759-bf6a-933f2e5bc7ee-a30dee09.md)
- [Suspicious Entra ID Joined Device Update](../content/microsoft-entra-id-suspicious-entra-id-joined-device-update-3a3c6835-0086-40ca-b033-a93bf26d878f-b40b663f.md)
- [Suspicious Service Principal creation activity](../content/microsoft-entra-id-suspicious-service-principal-creation-activity-6852d9da-8015-4b95-8ecf-d9572ee0395d-57b7f81f.md)
- [Suspicious Sign In Followed by MFA Modification](../content/microsoft-entra-id-suspicious-sign-in-followed-by-mfa-modification-aec77100-25c5-4254-a20a-8027ed92c46c-8c458768.md)
- [Suspicious application consent for offline access](../content/microsoft-entra-id-suspicious-application-consent-for-offline-access-3533f74c-9207-4047-96e2-0eb9383be587-fa7e45f8.md)
- [Suspicious application consent similar to O365 Attack Toolkit](../content/microsoft-entra-id-suspicious-application-consent-similar-to-o365-attack-toolkit-f948a32f-226c-4116-bddd-d95e91d97eb9-f8a2446b.md)
- [Suspicious application consent similar to PwnAuth](../content/microsoft-entra-id-suspicious-application-consent-similar-to-pwnauth-39198934-62a0-4781-8416-a81265c03fd6-18583afd.md)
- [User Assigned New Privileged Role](../content/microsoft-entra-id-user-assigned-new-privileged-role-746ddb63-f51b-4563-b449-a8b13cf302ec-dac38182.md)
- [User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-user-added-to-microsoft-entra-id-privileged-groups-4d94d4a9-dc96-410a-8dea-4d4d4584188b-6ad398a6.md)
- [full_access_as_app Granted To Application](../content/microsoft-entra-id-full-access-as-app-granted-to-application-54e22fed-0ec6-4fb2-8312-2a3809a93f63-6d6d5e9f.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Threat Essentials - Multiple admin membership removals from newly created admin.](../content/securitythreatessentialsolution-threat-essentials-multiple-admin-membership-removals-from-newly-created--199978c5-cd6d-4194-b505-8ef5800739df-5a0ad1e1.md)
- [Threat Essentials - NRT User added to Microsoft Entra ID Privileged Groups](../content/securitythreatessentialsolution-threat-essentials-nrt-user-added-to-microsoft-entra-id-privileged-groups-0a627f29-f0dd-4924-be92-c3d6dac84367-54eec993.md)
- [Threat Essentials - User Assigned Privileged Role](../content/securitythreatessentialsolution-threat-essentials-user-assigned-privileged-role-b09795c9-8dce-47ab-8f75-5a4afb78ef0c-6f988146.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Account created from non-approved sources](../content/standalone-content-account-created-from-non-approved-sources-99d589fa-7337-40d7-91a0-c96d0c4fa437-abead192.md)
- [Addition of a Temporary Access Pass to a Privileged Account](../content/standalone-content-addition-of-a-temporary-access-pass-to-a-privileged-account-d7feb859-f03e-4e8d-8b21-617be0213b13-1bb54eef.md)
- [Application ID URI Changed](../content/standalone-content-application-id-uri-changed-9fb2ee72-959f-4c2b-bc38-483affc539e4-532fedef.md)
- [Application Redirect URL Update](../content/standalone-content-application-redirect-url-update-a1080fc1-13d1-479b-8340-255f0290d96c-91f770b3.md)
- [Changes to Application Logout URL](../content/standalone-content-changes-to-application-logout-url-492fbe35-cbac-4a8c-9059-826782e6915a-0134247b.md)
- [Changes to Application Ownership](../content/standalone-content-changes-to-application-ownership-cc5780ce-3245-4bba-8bc1-e9048c2257ce-9e47b574.md)
- [Changes to PIM Settings](../content/standalone-content-changes-to-pim-settings-0ed0fe7c-af29-4990-af7f-bb5ccb231198-dc0157b2.md)
- [Conditional Access Policy Modified by New User](../content/standalone-content-conditional-access-policy-modified-by-new-user-25a7f951-54b7-4cf5-9862-ebc04306c590-61566173.md)
- [Detect PIM Alert Disabling activity](../content/standalone-content-detect-pim-alert-disabling-activity-1f3b4dfd-21ff-4ed3-8e27-afc219e05c50-6df47b64.md)
- [Detecting Impossible travel with mailbox permission tampering & Privilege Escalation attempt](../content/standalone-content-detecting-impossible-travel-with-mailbox-permission-tampering-&-privilege-escalation--1399664f-9434-497c-9cde-42e4d74ae20e-03f12b2c.md)
- [End-user consent stopped due to risk-based consent](../content/standalone-content-end-user-consent-stopped-due-to-risk-based-consent-009b9bae-23dd-43c4-bcb9-11c4ba7c784a-219ca2d5.md)
- [Guest Users Invited to Tenant by New Inviters](../content/standalone-content-guest-users-invited-to-tenant-by-new-inviters-572e75ef-5147-49d9-9d65-13f2ed1e3a86-bb24a4dc.md)
- [Multiple Password Reset by user](../content/standalone-content-multiple-password-reset-by-user-0b9ae89d-8cad-461c-808f-0494f70ad5c4-910658bf.md)
- [Service Principal Assigned App Role With Sensitive Access](../content/standalone-content-service-principal-assigned-app-role-with-sensitive-access-dd78a122-d377-415a-afe9-f22e08d2112c-6c8806ba.md)
- [Service Principal Assigned Privileged Role](../content/standalone-content-service-principal-assigned-privileged-role-84cccc86-5c11-4b3a-aca6-7c8f738ed0f7-d528609b.md)
- [Suspicious Login from deleted guest account](../content/standalone-content-suspicious-login-from-deleted-guest-account-defe4855-0d33-4362-9557-009237623976-9a77037a.md)
- [Suspicious linking of existing user to external User](../content/standalone-content-suspicious-linking-of-existing-user-to-external-user-22a320c2-e1e5-4c74-a35b-39fc9cdcf859-f26ac9ac.md)
- [Suspicious modification of Global Administrator user properties](../content/standalone-content-suspicious-modification-of-global-administrator-user-properties-48602a24-67cf-4362-b258-3f4249e55def-fe1c2532.md)
- [URL Added to Application from Unknown Domain](../content/standalone-content-url-added-to-application-from-unknown-domain-017e095a-94d8-430c-a047-e51a11fb737b-9b989540.md)
- [User Account Created Using Incorrect Naming Format](../content/standalone-content-user-account-created-using-incorrect-naming-format-ee55dc85-d2da-48c1-a6c0-3eaee62a8d56-8145293f.md)
- [User State changed from Guest to Member](../content/standalone-content-user-state-changed-from-guest-to-member-a09a0b8e-30fe-4ebf-94a0-cffe50f579cd-0a88dc5c.md)
- [User account created without expected attributes defined](../content/standalone-content-user-account-created-without-expected-attributes-defined-dc99e38c-f4e9-4837-94d7-353ac0b01a77-87fc0fdf.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map URL Entity to AuditLogs](../content/threat-intelligence-ti-map-url-entity-to-auditlogs-712fab52-2a7d-401e-a08c-ff939cc7c25e-fa07e25e.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map URL Entity to AuditLogs](../content/threat-intelligence-new-ti-map-url-entity-to-auditlogs-9991c277-e0a1-4079-8c40-fbfca2705615-eddd0de5.md)

### Hunting Queries (35)

**In solution [](../solutions/.md):**
- [Account Added to Privileged PIM Group](../content/-account-added-to-privileged-pim-group-67ca982d-9d61-48cb-a409-acf029ed7311-1d9c7cfe.md)
- [Account MFA Modifications](../content/-account-mfa-modifications-a3a09840-1022-4267-b9e1-d6c9799ed38a-c6f44664.md)
- [Approved Access Packages Details](../content/-approved-access-packages-details-aff7eb5f-3359-48ab-b73b-6c466d3806dc-361236d8.md)
- [BitLocker Key Retrieval](../content/-bitlocker-key-retrieval-8ea8b2af-f1ce-4464-964c-6763641cc4f6-8757904d.md)
- [Critical user management operations followed by disabling of System Restore from admin account](../content/-critical-user-management-operations-followed-by-disabling-of-system-restore-from-admin-account-dcc15282-2bcb-496e-84db-3c90d0dc0a0c-4efbbcf7.md)
- [Dormant User Update MFA and Logs In](../content/-dormant-user-update-mfa-and-logs-in-a67834b0-3359-40be-bf11-71faac93b509-1db8ddb0.md)
- [Dormant User Update MFA and Logs In - UEBA](../content/-dormant-user-update-mfa-and-logs-in-ueba-6adc74fb-37f9-4187-ba7c-84269b09a485-3d6fbbf2.md)
- [High Risk Sign In Around Authentication Method Added or Device Registration](../content/-high-risk-sign-in-around-authentication-method-added-or-device-registration-d61c3213-77ba-4998-8818-1da2f85dacdf-f2105a02.md)
- [Invited Guest User but not redeemed Invite for longer period.](../content/-invited-guest-user-but-not-redeemed-invite-for-longer-period.-1ad620f0-fee4-4bb7-a2b3-62af7f18332b-2ac8ba44.md)
- [Multiple Entra ID Admins Removed](../content/-multiple-entra-id-admins-removed-18793540-3b93-4a7f-8e30-871291a1c6cf-bb8811ef.md)
- [OAuth Application Required Resource Access Update](../content/-oauth-application-required-resource-access-update-665e6075-3a3f-42c0-a6c7-7e83dc44f281-e90ce7bb.md)
- [Privileged Account Password Changes](../content/-privileged-account-password-changes-d9cccaf9-d15e-4731-a62a-06d76e9c5e67-2d9261ac.md)
- [Risky Sign-in with Device Registration](../content/-risky-sign-in-with-device-registration-f9f8b17c-52ed-4fd1-8edd-6278b6e2669f-719df4ef.md)
- [SQL Alert Correlation with CommonSecurityLogs and AuditLogs](../content/-sql-alert-correlation-with-commonsecuritylogs-and-auditlogs-dc5adcc9-70ab-4fba-8690-f57767e8ca02-0af628b1.md)
- [Storage Account Key Enumeration](../content/-storage-account-key-enumeration-f19f913f-292a-41ed-9ac0-f3ea5e703d36-bb9b5abb.md)
- [Storage Alerts Correlation with CommonSecurityLogs & AuditLogs](../content/-storage-alerts-correlation-with-commonsecuritylogs-&-auditlogs-860a8df2-8d19-4c60-bf61-de1c02422797-941a4583.md)
- [Successful Sign-In From Non-Compliant Device with bulk download activity](../content/-successful-sign-in-from-non-compliant-device-with-bulk-download-activity-a5bb38e3-5ee2-47fe-a65d-c3c9341112ef-d9c189fe.md)
- [Unfamiliar Signin Correlation with AzurePortal Signin Attempts and AuditLogs](../content/-unfamiliar-signin-correlation-with-azureportal-signin-attempts-and-auditlogs-6962473c-bcb8-421d-a0db-826078cad280-eafd4526.md)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**
- [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md)
- [User detection added to privilege groups based in Watchlist](../content/business-email-compromise-financial-fraud-user-detection-added-to-privilege-groups-based-in-watchlist-8c5bc38a-438d-48fb-ae3f-7f356d3e5ba9-ddbfdf3a.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Application Granted EWS Permissions](../content/cloud-identity-threat-protection-essentials-application-granted-ews-permissions-c7941212-4ff9-4d2d-b38d-54d78fa087cc-2ba49c1b.md)
- [Interactive STS refresh token modifications](../content/cloud-identity-threat-protection-essentials-interactive-sts-refresh-token-modifications-4696e072-aca8-4a4f-bf05-89fddc5ac3c9-f22e226e.md)
- [User Granted Access and Grants Access to Other Users](../content/cloud-identity-threat-protection-essentials-user-granted-access-and-grants-access-to-other-users-2b6a3882-d601-4298-983b-880f6dc7acdb-c6da3825.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Power Apps - Anomalous bulk sharing of Power App to newly created guest users](../content/microsoft-business-applications-power-apps-anomalous-bulk-sharing-of-power-app-to-newly-created-guest-us-169428be-5ed0-4230-9103-c83df89c789a-0624080a.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Consent to Application discovery](../content/standalone-content-consent-to-application-discovery-b09d6e57-c48b-491d-9c2b-ab73018e6534-7bcf5671.md)
- [Failed service logon attempt by user account with available AuditData](../content/standalone-content-failed-service-logon-attempt-by-user-account-with-available-auditdata-22f33a4c-e60f-4817-bbfe-9e2ed33cb596-0585369b.md)
- [Inactive or new account signins](../content/standalone-content-inactive-or-new-account-signins-847c2652-547d-4d5f-9b71-d2f8d81eac62-a5fd3c40.md)
- [Rare Audit activity initiated by App](../content/standalone-content-rare-audit-activity-initiated-by-app-5c799718-b361-4a91-9cb2-0c291e602707-841dc178.md)
- [Rare Audit activity initiated by User](../content/standalone-content-rare-audit-activity-initiated-by-user-ea107ccc-2b80-410e-96e1-be6607ce293b-bec1e298.md)
- [Rare domains seen in Cloud Logs](../content/standalone-content-rare-domains-seen-in-cloud-logs-66fb97d1-55c3-4268-ac22-b9742d0fdccc-81d64f4e.md)
- [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md)
- [User Granted Access and associated audit activity](../content/standalone-content-user-granted-access-and-associated-audit-activity-0da142a4-b3ad-4bb6-b01d-03b572743fe9-47bd5e14.md)
- [User Granted Access and created resources](../content/standalone-content-user-granted-access-and-created-resources-b6baa3bb-a231-4e50-8ad1-4e28a958a0d3-539e3d9e.md)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**
- [Anomalous Entra High-Privilege Role Modification](../content/ueba-essentials-anomalous-entra-high-privilege-role-modification-8741deeb-332e-4061-8873-5086040920e3-adf63a52.md)
- [Anomalous High-Privileged Role Assignment](../content/ueba-essentials-anomalous-high-privileged-role-assignment-5aa5083c-1de6-42bb-a128-2ec2aba1de39-89a0f496.md)

### Workbooks (32)

**In solution [](../solutions/.md):**
- [AzureActiveDirectoryAuditLogs](../content/-azureactivedirectoryauditlogs-2bd3d362.md)
- [AzureAuditActivityAndSignin](../content/-azureauditactivityandsignin-4b42b4fb.md)
- [AzureLogCoverage](../content/-azurelogcoverage-e63c774a.md)
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [AzureThreatResearchMatrixWorkbook](../content/-azurethreatresearchmatrixworkbook-75e88442.md)
- [ConditionalAccessTrendsandChanges](../content/-conditionalaccesstrendsandchanges-31791e3c.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [InvestigationInsights](../content/-investigationinsights-2251e94c.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [SentinelWorkspaceReconTools](../content/-sentinelworkspacerecontools-3f6cdf50.md)
- [SolarWindsPostCompromiseHunting](../content/-solarwindspostcompromisehunting-ff2e76bc.md)
- [User_Analytics_Workbook](../content/-user-analytics-workbook-4d50c893.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [AzureActiveDirectoryAuditLogs](../content/microsoft-entra-id-azureactivedirectoryauditlogs-03b0be29.md)
- [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.azureadgraph/tenants`
- `microsoft.graph/tenants`

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

