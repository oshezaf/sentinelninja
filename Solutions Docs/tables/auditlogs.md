# AuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Solutions (19)

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
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (88)

### Analytic Rules (67)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Account Elevated to New Role](../content/business-email-compromise-financial-fraud-account-elevated-to-new-role-c1c66f0b-5531-4a3e-a619-9d2f770ef730-301c0a50.md) | `OperationName == "Add member to role completed (PIM activation)"` |
| [Authentication Method Changed for Privileged Account](../content/business-email-compromise-financial-fraud-authentication-method-changed-for-privileged-account-feb0a2fb-ae75-4343-8cbc-ed545f1da289-05036a5e.md) |  |
| [Privileged Account Permissions Changed](../content/business-email-compromise-financial-fraud-privileged-account-permissions-changed-0433c8a3-9aa6-4577-beef-2ea23be41137-ddff1dcb.md) | `OperationName has "Add eligible member"` |
| [User Added to Admin Role](../content/business-email-compromise-financial-fraud-user-added-to-admin-role-2a09f8cb-deb7-4c40-b08b-9137667f1c0b-3a4fbb41.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Multi-Factor Authentication Disabled for a User](../content/cloud-identity-threat-protection-essentials-multi-factor-authentication-disabled-for-a-user-65c78944-930b-4cae-bd79-c3664ae30ba7-478ef443.md) |  |
| [New External User Granted Admin Role](../content/cloud-identity-threat-protection-essentials-new-external-user-granted-admin-role-d7424fd9-abb3-4ded-a723-eebe023aaa0b-7be35a90.md) | `OperationName in "Invite external user,Redeem external user invite"`<br>`OperationName has "Invite external user"`<br>`OperationName has "Redeem external user invite"` |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/microsoft-business-applications-dataverse-guest-user-exfiltration-following-power-platform-defense-impai-39efbf4b-b347-4cc7-895e-99a868bf29ea-f29caf4d.md) | `OperationName == "Update user"` |
| [Dataverse - New non-interactive identity granted access](../content/microsoft-business-applications-dataverse-new-non-interactive-identity-granted-access-682e230c-e5da-4085-8666-701d1f1be7de-981cd709.md) | `OperationName == "Update application"` |
| [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/microsoft-business-applications-power-apps-bulk-sharing-of-power-apps-to-newly-created-guest-users-943acfa0-9285-4eb0-a9c0-42e36177ef19-41b30b81.md) | `OperationName == "Invite external user"` |
| [Power Platform - Account added to privileged Microsoft Entra roles](../content/microsoft-business-applications-power-platform-account-added-to-privileged-microsoft-entra-roles-71d829d6-eb50-4a17-8a64-655fae8d71e1-b0e60b31.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Account Created and Deleted in Short Timeframe](../content/microsoft-entra-id-account-created-and-deleted-in-short-timeframe-bb616d82-108f-47d3-9dec-9652ea0d3bf6-8d7ac424.md) | `OperationName in "Add user,Delete user"` |
| [Account created or deleted by non-approved user](../content/microsoft-entra-id-account-created-or-deleted-by-non-approved-user-6d63efa6-7c25-4bd4-a486-aa6bf50fde8a-141ffd02.md) | `OperationName in "Add user,Delete user"` |
| [Admin promotion after Role Management Application Permission Grant](../content/microsoft-entra-id-admin-promotion-after-role-management-application-permission-grant-f80d951a-eddc-4171-b9d0-d616bb83efdc-dd72791a.md) | `OperationName == "Add app role assignment to service principal"` |
| [Authentication Methods Changed for Privileged Account](../content/microsoft-entra-id-authentication-methods-changed-for-privileged-account-694c91ee-d606-4ba9-928e-405a2dd0ff0f-513c9e02.md) |  |
| [Azure RBAC (Elevate Access)](../content/microsoft-entra-id-azure-rbac-elevate-access-132fdff4-c044-4855-a390-c1b71e0f833b-647564ba.md) |  |
| [Bulk Changes to Privileged Account Permissions](../content/microsoft-entra-id-bulk-changes-to-privileged-account-permissions-218f60de-c269-457a-b882-9966632b9dc6-1b16393e.md) |  |
| [Conditional Access - A Conditional Access Device platforms condition has changed (the Device platforms condition can be spoofed)](../content/microsoft-entra-id-conditional-access-a-conditional-access-device-platforms-condition-has-changed-the-de-e3368079-a2c0-4f1c-9fb7-287e907393ef-136313dd.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A Conditional Access app exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-app-exclusion-has-changed-0990a481-3bc8-4682-838c-313918dd858c-0a7b28b3.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A Conditional Access policy was deleted](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-deleted-2e96fa64-ac4d-4c92-b79e-e9c54b5d8230-ed16bbf9.md) | `OperationName == "Delete conditional access policy"` |
| [Conditional Access - A Conditional Access policy was disabled](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-disabled-40702da1-ae8a-4e46-ac1f-9327ca6ef588-e70c07ce.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A Conditional Access policy was put into report-only mode](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-put-into-report-only-mode-5588de32-73b1-40b9-bddc-4d9e74051859-368d42da.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A Conditional Access policy was updated](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-updated-ccca6b88-a7b6-41c9-9be2-fc3daeb65b26-8aacaca3.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A Conditional Access user/group/role exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-user-group-role-exclusion-has-changed-2ce7f00d-3b3c-41b9-ae9a-b79c19d2394e-f65af1a3.md) | `OperationName == "Update conditional access policy"` |
| [Conditional Access - A new Conditional Access policy was created](../content/microsoft-entra-id-conditional-access-a-new-conditional-access-policy-was-created-0459a1b5-909d-4783-9e27-24536b05a47f-879d4060.md) | `OperationName == "Add conditional access policy"` |
| [Conditional Access - Dynamic Group Exclusion Changes](../content/microsoft-entra-id-conditional-access-dynamic-group-exclusion-changes-c385944b-17b9-4b2b-921e-0e8d0341a675-f50f0e46.md) | `OperationName == "Update group"` |
| [Credential added after admin consented to Application](../content/microsoft-entra-id-credential-added-after-admin-consented-to-application-707494a5-8e44-486b-90f8-155d1797a8eb-a6cd2c7a.md) | `OperationName in "Add service principal credentials,Consent to application"` |
| [Cross-tenant Access Settings Organization Added](../content/microsoft-entra-id-cross-tenant-access-settings-organization-added-757e6a79-6d23-4ae6-9845-4dac170656b5-de3a14c9.md) | `OperationName has "Add a partner to cross-tenant access setting"` |
| [Cross-tenant Access Settings Organization Deleted](../content/microsoft-entra-id-cross-tenant-access-settings-organization-deleted-eb8a9c1c-f532-4630-817c-1ecd8a60ed80-b0b4095f.md) | `OperationName has "Delete partner specific cross-tenant access setting"` |
| [Cross-tenant Access Settings Organization Inbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-collaboration-settings-changed-c895c5b9-0fc6-40ce-9830-e8818862f2d5-1d923bf9.md) | `OperationName has "Update a partner cross-tenant access setting"` |
| [Cross-tenant Access Settings Organization Inbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-direct-settings-changed-276d5190-38de-4eb2-9933-b3b72f4a5737-f3d5c408.md) | `OperationName has "Update a partner cross-tenant access setting"` |
| [Cross-tenant Access Settings Organization Outbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-collaboration-settings-changed-229f71ba-d83b-42a5-b83b-11a641049ed1-42360945.md) | `OperationName has "Update a partner cross-tenant access setting"` |
| [Cross-tenant Access Settings Organization Outbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-direct-settings-changed-0101e08d-99cd-4a97-a9e0-27649c4369ad-74ca33b7.md) | `OperationName has "Update a partner cross-tenant access setting"` |
| [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md) | `OperationName == "Invite external user"` |
| [First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-first-access-credential-added-to-application-or-service-principal-where-no-credential-2cfc3c6e-f424-4b88-9cc9-c89f482d016a-ec11980a.md) | `OperationName has "Certificates`<br>`secrets management"` |
| [Guest accounts added in Entra ID Groups other than the ones specified](../content/microsoft-entra-id-guest-accounts-added-in-entra-id-groups-other-than-the-ones-specified-6ab1f7b2-61b8-442f-bc81-96afe7ad8c53-a7fe96f3.md) | `OperationName in "Add member to group,Add owner to group"` |
| [Mail.Read Permissions Granted to Application](../content/microsoft-entra-id-mail.read-permissions-granted-to-application-2560515c-07d1-434e-87fb-ebe3af267760-50b99956.md) |  |
| [Microsoft Entra ID Role Management Permission Grant](../content/microsoft-entra-id-microsoft-entra-id-role-management-permission-grant-1ff56009-db01-4615-8211-d4fda21da02d-2754d79c.md) | `OperationName in "Add app role assignment to service principal,Add delegated permission grant"` |
| [Modified domain federation trust settings](../content/microsoft-entra-id-modified-domain-federation-trust-settings-95dc4ae3-e0f2-48bd-b996-cdd22b90f9af-cb9684ef.md) | `OperationName in "Set domain authentication,Set federation settings on domain"` |
| [Multiple admin membership removals from newly created admin.](../content/microsoft-entra-id-multiple-admin-membership-removals-from-newly-created-admin.-cda5928c-2c1e-4575-9dfa-07568bc27a4f-ebb84fce.md) |  |
| [NRT Authentication Methods Changed for VIP Users](../content/microsoft-entra-id-nrt-authentication-methods-changed-for-vip-users-29e99017-e28d-47be-8b9a-c8c711f8a903-12365352.md) |  |
| [NRT First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-nrt-first-access-credential-added-to-application-or-service-principal-where-no-creden-b6988c32-4f3b-4a45-8313-b46b33061a74-b17559b5.md) | `OperationName has_any "Add service principal,Certificates`<br>`secrets management"` |
| [NRT Modified domain federation trust settings](../content/microsoft-entra-id-nrt-modified-domain-federation-trust-settings-8540c842-5bbc-4a24-9fb2-a836c0e55a51-3b2b599c.md) | `OperationName in "Set domain authentication,Set federation settings on domain"` |
| [NRT New access credential added to Application or Service Principal](../content/microsoft-entra-id-nrt-new-access-credential-added-to-application-or-service-principal-e42e889a-caaf-4dbb-aec6-371b37d64298-de5e304f.md) | `OperationName has_any "Add service principal,Certificates`<br>`secrets management"` |
| [NRT PIM Elevation Request Rejected](../content/microsoft-entra-id-nrt-pim-elevation-request-rejected-5db427b2-f406-4274-b413-e9fcb29412f8-faff1eec.md) |  |
| [NRT Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-nrt-privileged-role-assigned-outside-pim-14f6da04-2f96-44ee-9210-9ccc1be6401e-12969908.md) | `OperationName == "Add member to role"`<br>`OperationName has "Add member to role outside of PIM"` |
| [NRT User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-nrt-user-added-to-microsoft-entra-id-privileged-groups-70fc7201-f28e-4ba7-b9ea-c04b96701f13-c42c23de.md) |  |
| [New User Assigned to Privileged Role](../content/microsoft-entra-id-new-user-assigned-to-privileged-role-050b9b3d-53d0-4364-a3da-1b678b8211ec-fad23221.md) |  |
| [New access credential added to Application or Service Principal](../content/microsoft-entra-id-new-access-credential-added-to-application-or-service-principal-79566f41-df67-4e10-a703-c38a6213afd8-15b8a555.md) | `OperationName has_any "Add service principal,Certificates`<br>`secrets management"` |
| [New onmicrosoft domain added to tenant](../content/microsoft-entra-id-new-onmicrosoft-domain-added-to-tenant-4f42b94f-b210-42d1-a023-7fa1c51d969f-9b50862e.md) | `OperationName in "Add unverified domain,Add verified domain"` |
| [PIM Elevation Request Rejected](../content/microsoft-entra-id-pim-elevation-request-rejected-7d7e20f8-3384-4b71-811c-f5e950e8306c-aad39230.md) |  |
| [Possible SignIn from Azure Backdoor](../content/microsoft-entra-id-possible-signin-from-azure-backdoor-fa00014c-c5f4-4715-8f5b-ba567e19e41e-dd1ac846.md) |  |
| [Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-privileged-role-assigned-outside-pim-269435e3-1db8-4423-9dfc-9bf59997da1c-d87cbe19.md) | `OperationName == "Add member to role"`<br>`OperationName has "Add member to role outside of PIM"` |
| [Rare application consent](../content/microsoft-entra-id-rare-application-consent-83ba3057-9ea3-4759-bf6a-933f2e5bc7ee-a30dee09.md) | `OperationName has "Consent to application"` |
| [Suspicious Entra ID Joined Device Update](../content/microsoft-entra-id-suspicious-entra-id-joined-device-update-3a3c6835-0086-40ca-b033-a93bf26d878f-b40b663f.md) | `OperationName == "Update device"` |
| [Suspicious Service Principal creation activity](../content/microsoft-entra-id-suspicious-service-principal-creation-activity-6852d9da-8015-4b95-8ecf-d9572ee0395d-57b7f81f.md) | `OperationName == "Remove service principal"`<br>`OperationName has_all "Update application"` |
| [Suspicious Sign In Followed by MFA Modification](../content/microsoft-entra-id-suspicious-sign-in-followed-by-mfa-modification-aec77100-25c5-4254-a20a-8027ed92c46c-8c458768.md) |  |
| [Suspicious application consent for offline access](../content/microsoft-entra-id-suspicious-application-consent-for-offline-access-3533f74c-9207-4047-96e2-0eb9383be587-fa7e45f8.md) | `OperationName in "Add OAuth2PermissionGrant,Add delegated permission grant,Add service principal,Consent to application"` |
| [Suspicious application consent similar to O365 Attack Toolkit](../content/microsoft-entra-id-suspicious-application-consent-similar-to-o365-attack-toolkit-f948a32f-226c-4116-bddd-d95e91d97eb9-f8a2446b.md) | `OperationName in "Add OAuth2PermissionGrant,Add delegated permission grant,Add service principal,Consent to application"` |
| [Suspicious application consent similar to PwnAuth](../content/microsoft-entra-id-suspicious-application-consent-similar-to-pwnauth-39198934-62a0-4781-8416-a81265c03fd6-18583afd.md) | `OperationName in "Add OAuth2PermissionGrant,Add delegated permission grant,Add service principal,Consent to application"` |
| [User Assigned New Privileged Role](../content/microsoft-entra-id-user-assigned-new-privileged-role-746ddb63-f51b-4563-b449-a8b13cf302ec-dac38182.md) |  |
| [User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-user-added-to-microsoft-entra-id-privileged-groups-4d94d4a9-dc96-410a-8dea-4d4d4584188b-6ad398a6.md) |  |
| [full_access_as_app Granted To Application](../content/microsoft-entra-id-full-access-as-app-granted-to-application-54e22fed-0ec6-4fb2-8312-2a3809a93f63-6d6d5e9f.md) | `OperationName == "Consent to application"` |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Multiple admin membership removals from newly created admin.](../content/securitythreatessentialsolution-threat-essentials-multiple-admin-membership-removals-from-newly-created--199978c5-cd6d-4194-b505-8ef5800739df-5a0ad1e1.md) |  |
| [Threat Essentials - NRT User added to Microsoft Entra ID Privileged Groups](../content/securitythreatessentialsolution-threat-essentials-nrt-user-added-to-microsoft-entra-id-privileged-groups-0a627f29-f0dd-4924-be92-c3d6dac84367-54eec993.md) |  |
| [Threat Essentials - User Assigned Privileged Role](../content/securitythreatessentialsolution-threat-essentials-user-assigned-privileged-role-b09795c9-8dce-47ab-8f75-5a4afb78ef0c-6f988146.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-ti-map-url-entity-to-auditlogs-712fab52-2a7d-401e-a08c-ff939cc7c25e-fa07e25e.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-new-ti-map-url-entity-to-auditlogs-9991c277-e0a1-4079-8c40-fbfca2705615-eddd0de5.md) |  |

### Hunting Queries (8)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md) |  |
| [User detection added to privilege groups based in Watchlist](../content/business-email-compromise-financial-fraud-user-detection-added-to-privilege-groups-based-in-watchlist-8c5bc38a-438d-48fb-ae3f-7f356d3e5ba9-ddbfdf3a.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Application Granted EWS Permissions](../content/cloud-identity-threat-protection-essentials-application-granted-ews-permissions-c7941212-4ff9-4d2d-b38d-54d78fa087cc-2ba49c1b.md) | `OperationName has "Add app role assignment to service principal"` |
| [Interactive STS refresh token modifications](../content/cloud-identity-threat-protection-essentials-interactive-sts-refresh-token-modifications-4696e072-aca8-4a4f-bf05-89fddc5ac3c9-f22e226e.md) | `OperationName has "StsRefreshTokenValidFrom"` |
| [User Granted Access and Grants Access to Other Users](../content/cloud-identity-threat-protection-essentials-user-granted-access-and-grants-access-to-other-users-2b6a3882-d601-4298-983b-880f6dc7acdb-c6da3825.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Power Apps - Anomalous bulk sharing of Power App to newly created guest users](../content/microsoft-business-applications-power-apps-anomalous-bulk-sharing-of-power-app-to-newly-created-guest-us-169428be-5ed0-4230-9103-c83df89c789a-0624080a.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Entra High-Privilege Role Modification](../content/ueba-essentials-anomalous-entra-high-privilege-role-modification-8741deeb-332e-4061-8873-5086040920e3-adf63a52.md) | `OperationName == "Update user"` |
| [Anomalous High-Privileged Role Assignment](../content/ueba-essentials-anomalous-high-privileged-role-assignment-5aa5083c-1de6-42bb-a128-2ec2aba1de39-89a0f496.md) | `OperationName == "Add member to role"` |

### Workbooks (13)

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

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureActiveDirectoryAuditLogs](../content/microsoft-entra-id-azureactivedirectoryauditlogs-03b0be29.md) |  |
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.azureadgraph/tenants`
- `microsoft.graph/tenants`

## Selection Criteria Summary (31 criteria, 48 total references)

References by type: 0 connectors, 48 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName == "Update conditional access policy"` | - | 6 | - | - | **6** |
| `OperationName has "Update a partner cross-tenant access setting"` | - | 4 | - | - | **4** |
| `OperationName in "Add OAuth2PermissionGrant,Add delegated permission grant,Add service principal,Consent to application"` | - | 3 | - | - | **3** |
| `OperationName has_any "Add service principal,Certificates`<br>`secrets management"` | - | 3 | - | - | **3** |
| `OperationName == "Update user"` | - | 2 | - | - | **2** |
| `OperationName == "Invite external user"` | - | 2 | - | - | **2** |
| `OperationName in "Add user,Delete user"` | - | 2 | - | - | **2** |
| `OperationName in "Set domain authentication,Set federation settings on domain"` | - | 2 | - | - | **2** |
| `OperationName == "Add member to role"`<br>`OperationName has "Add member to role outside of PIM"` | - | 2 | - | - | **2** |
| `OperationName == "Add member to role completed (PIM activation)"` | - | 1 | - | - | **1** |
| `OperationName has "Add eligible member"` | - | 1 | - | - | **1** |
| `OperationName in "Invite external user,Redeem external user invite"`<br>`OperationName has "Invite external user"`<br>`OperationName has "Redeem external user invite"` | - | 1 | - | - | **1** |
| `OperationName == "Update application"` | - | 1 | - | - | **1** |
| `OperationName == "Add app role assignment to service principal"` | - | 1 | - | - | **1** |
| `OperationName in "Add app role assignment to service principal,Add delegated permission grant"` | - | 1 | - | - | **1** |
| `OperationName == "Delete conditional access policy"` | - | 1 | - | - | **1** |
| `OperationName == "Add conditional access policy"` | - | 1 | - | - | **1** |
| `OperationName == "Update group"` | - | 1 | - | - | **1** |
| `OperationName in "Add service principal credentials,Consent to application"` | - | 1 | - | - | **1** |
| `OperationName has "Add a partner to cross-tenant access setting"` | - | 1 | - | - | **1** |
| `OperationName has "Delete partner specific cross-tenant access setting"` | - | 1 | - | - | **1** |
| `OperationName == "Consent to application"` | - | 1 | - | - | **1** |
| `OperationName has "Certificates`<br>`secrets management"` | - | 1 | - | - | **1** |
| `OperationName in "Add member to group,Add owner to group"` | - | 1 | - | - | **1** |
| `OperationName in "Add unverified domain,Add verified domain"` | - | 1 | - | - | **1** |
| `OperationName has "Consent to application"` | - | 1 | - | - | **1** |
| `OperationName == "Update device"` | - | 1 | - | - | **1** |
| `OperationName == "Remove service principal"`<br>`OperationName has_all "Update application"` | - | 1 | - | - | **1** |
| `OperationName has "Add app role assignment to service principal"` | - | 1 | - | - | **1** |
| `OperationName has "StsRefreshTokenValidFrom"` | - | 1 | - | - | **1** |
| `OperationName == "Add member to role"` | - | 1 | - | - | **1** |
| **Total** | **0** | **48** | **0** | **0** | **48** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Update conditional access policy` | - | 6 | - | - | **6** |
| `Consent to application` | - | 5 | - | - | **5** |
| `Add delegated permission grant` | - | 4 | - | - | **4** |
| `has Update a partner cross-tenant access setting` | - | 4 | - | - | **4** |
| `Invite external user` | - | 3 | - | - | **3** |
| `Add OAuth2PermissionGrant` | - | 3 | - | - | **3** |
| `Add service principal` | - | 3 | - | - | **3** |
| `has_any Add service principal` | - | 3 | - | - | **3** |
| `has_any Certificates` | - | 3 | - | - | **3** |
| `Add member to role` | - | 3 | - | - | **3** |
| `Update user` | - | 2 | - | - | **2** |
| `Add user` | - | 2 | - | - | **2** |
| `Delete user` | - | 2 | - | - | **2** |
| `Set domain authentication` | - | 2 | - | - | **2** |
| `Set federation settings on domain` | - | 2 | - | - | **2** |
| `Add app role assignment to service principal` | - | 2 | - | - | **2** |
| `has Add member to role outside of PIM` | - | 2 | - | - | **2** |
| `Add member to role completed (PIM activation)` | - | 1 | - | - | **1** |
| `has Add eligible member` | - | 1 | - | - | **1** |
| `Redeem external user invite` | - | 1 | - | - | **1** |
| `has Invite external user` | - | 1 | - | - | **1** |
| `has Redeem external user invite` | - | 1 | - | - | **1** |
| `Update application` | - | 1 | - | - | **1** |
| `Delete conditional access policy` | - | 1 | - | - | **1** |
| `Add conditional access policy` | - | 1 | - | - | **1** |
| `Update group` | - | 1 | - | - | **1** |
| `Add service principal credentials` | - | 1 | - | - | **1** |
| `has Add a partner to cross-tenant access setting` | - | 1 | - | - | **1** |
| `has Delete partner specific cross-tenant access setting` | - | 1 | - | - | **1** |
| `has Certificates` | - | 1 | - | - | **1** |
| `Add member to group` | - | 1 | - | - | **1** |
| `Add owner to group` | - | 1 | - | - | **1** |
| `Add unverified domain` | - | 1 | - | - | **1** |
| `Add verified domain` | - | 1 | - | - | **1** |
| `has Consent to application` | - | 1 | - | - | **1** |
| `Update device` | - | 1 | - | - | **1** |
| `Remove service principal` | - | 1 | - | - | **1** |
| `has_all Update application` | - | 1 | - | - | **1** |
| `has Add app role assignment to service principal` | - | 1 | - | - | **1** |
| `has StsRefreshTokenValidFrom` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

