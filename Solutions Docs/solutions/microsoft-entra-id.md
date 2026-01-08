# Microsoft Entra ID

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/MicrosoftEntraID_logo.svg" alt="Microsoft Entra ID Logo" width="75" height="75">

The [Microsoft Entra ID](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)  solution for Microsoft Sentinel enables you to ingest Microsoft Entra ID [Audit](https://docs.microsoft.com/azure/active-directory/reports-monitoring/concept-audit-logs), [Sign-in](https://docs.microsoft.com/azure/active-directory/reports-monitoring/concept-sign-ins), [Provisioning](https://docs.microsoft.com/azure/active-directory/reports-monitoring/concept-provisioning-logs), [Risk Events and Risky User/Service Principal](https://docs.microsoft.com/azure/active-directory/identity-protection/howto-identity-protection-investigate-risk#risky-users) logs using Diagnostic Settings into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.3.6 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md)

## Tables Reference

This solution uses **16 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Analytics, Workbooks |
| [`AADProvisioningLogs`](../tables/aadprovisioninglogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`AADRiskyServicePrincipals`](../tables/aadriskyserviceprincipals.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Workbooks |
| [`AADRiskyUsers`](../tables/aadriskyusers.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`AADServicePrincipalRiskEvents`](../tables/aadserviceprincipalriskevents.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Workbooks |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Workbooks |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`ADFSSignInLogs`](../tables/adfssigninlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Analytics |
| [`AuditLogs`](../tables/auditlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Analytics, Workbooks |
| [`DeviceInfo`](../tables/deviceinfo.md) | - | Analytics |
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`Operation`](../tables/operation.md) | - | Workbooks |
| [`SignInLogs`](../tables/signinlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | - |
| [`SigninLogs`](../tables/signinlogs.md) | [Microsoft Entra ID](../connectors/azureactivedirectory.md) | Analytics, Workbooks |
| [`Update`](../tables/update.md) | - | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Anomalies`](../tables/anomalies.md) | - | Analytics |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | - | Analytics |
| [`IdentityInfo`](../tables/identityinfo.md) | - | Analytics |
| [`anomalies`](../tables/anomalies.md) | - | Analytics |

## Content Items

This solution includes **87 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 73 |
| Playbooks | 11 |
| Workbooks | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Account Created and Deleted in Short Timeframe](../content/microsoft-entra-id-account-created-and-deleted-in-short-timeframe-bb616d82-108f-47d3-9dec-9652ea0d3bf6-8d7ac424.md) | High | InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Account created or deleted by non-approved user](../content/microsoft-entra-id-account-created-or-deleted-by-non-approved-user-6d63efa6-7c25-4bd4-a486-aa6bf50fde8a-141ffd02.md) | Medium | InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Admin promotion after Role Management Application Permission Grant](../content/microsoft-entra-id-admin-promotion-after-role-management-application-permission-grant-f80d951a-eddc-4171-b9d0-d616bb83efdc-dd72791a.md) | High | PrivilegeEscalation, Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md) | Medium | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Attempt to bypass conditional access rule in Microsoft Entra ID](../content/microsoft-entra-id-attempt-to-bypass-conditional-access-rule-in-microsoft-entra-id-3af9285d-bb98-4a35-ad29-5ea39ba0c628-6f5f2339.md) | Low | InitialAccess, Persistence | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Attempts to sign in to disabled accounts](../content/microsoft-entra-id-attempts-to-sign-in-to-disabled-accounts-75ea5c39-93e5-489b-b1e1-68fa6c9d2d04-3d398bd3.md) | Medium | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Authentication Methods Changed for Privileged Account](../content/microsoft-entra-id-authentication-methods-changed-for-privileged-account-694c91ee-d606-4ba9-928e-405a2dd0ff0f-513c9e02.md) | High | Persistence | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Azure Portal sign in from another Azure Tenant](../content/microsoft-entra-id-azure-portal-sign-in-from-another-azure-tenant-87210ca1-49a4-4a7d-bb4a-4988752f978c-d9307cff.md) | Medium | InitialAccess | - |
| [Azure RBAC (Elevate Access)](../content/microsoft-entra-id-azure-rbac-elevate-access-132fdff4-c044-4855-a390-c1b71e0f833b-647564ba.md) | High | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Brute Force Attack against GitHub Account](../content/microsoft-entra-id-brute-force-attack-against-github-account-97ad74c4-fdd9-4a3f-b6bf-5e28f4f71e06-409b9696.md) | Medium | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Brute force attack against Azure Portal](../content/microsoft-entra-id-brute-force-attack-against-azure-portal-28b42356-45af-40a6-a0b4-a554cdfd5d8a-5dc74411.md) | Medium | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Brute force attack against a Cloud PC](../content/microsoft-entra-id-brute-force-attack-against-a-cloud-pc-3fbc20a4-04c4-464e-8fcb-6667f53e4987-a1e86b1d.md) | Medium | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Bulk Changes to Privileged Account Permissions](../content/microsoft-entra-id-bulk-changes-to-privileged-account-permissions-218f60de-c269-457a-b882-9966632b9dc6-1b16393e.md) | High | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access Device platforms condition has changed (the Device platforms condition can be spoofed)](../content/microsoft-entra-id-conditional-access-a-conditional-access-device-platforms-condition-has-changed-the-de-e3368079-a2c0-4f1c-9fb7-287e907393ef-136313dd.md) | Low | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access app exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-app-exclusion-has-changed-0990a481-3bc8-4682-838c-313918dd858c-0a7b28b3.md) | Low | CommandAndControl | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access policy was deleted](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-deleted-2e96fa64-ac4d-4c92-b79e-e9c54b5d8230-ed16bbf9.md) | Low | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access policy was disabled](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-disabled-40702da1-ae8a-4e46-ac1f-9327ca6ef588-e70c07ce.md) | Low | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access policy was put into report-only mode](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-put-into-report-only-mode-5588de32-73b1-40b9-bddc-4d9e74051859-368d42da.md) | Low | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access policy was updated](../content/microsoft-entra-id-conditional-access-a-conditional-access-policy-was-updated-ccca6b88-a7b6-41c9-9be2-fc3daeb65b26-8aacaca3.md) | Informational | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A Conditional Access user/group/role exclusion has changed](../content/microsoft-entra-id-conditional-access-a-conditional-access-user-group-role-exclusion-has-changed-2ce7f00d-3b3c-41b9-ae9a-b79c19d2394e-f65af1a3.md) | High | Persistence, DefenseEvasion, CredentialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - A new Conditional Access policy was created](../content/microsoft-entra-id-conditional-access-a-new-conditional-access-policy-was-created-0459a1b5-909d-4783-9e27-24536b05a47f-879d4060.md) | Informational | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Conditional Access - Dynamic Group Exclusion Changes](../content/microsoft-entra-id-conditional-access-dynamic-group-exclusion-changes-c385944b-17b9-4b2b-921e-0e8d0341a675-f50f0e46.md) | High | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Credential added after admin consented to Application](../content/microsoft-entra-id-credential-added-after-admin-consented-to-application-707494a5-8e44-486b-90f8-155d1797a8eb-a6cd2c7a.md) | Medium | CredentialAccess, Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Added](../content/microsoft-entra-id-cross-tenant-access-settings-organization-added-757e6a79-6d23-4ae6-9845-4dac170656b5-de3a14c9.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Deleted](../content/microsoft-entra-id-cross-tenant-access-settings-organization-deleted-eb8a9c1c-f532-4630-817c-1ecd8a60ed80-b0b4095f.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Inbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-collaboration-settings-changed-c895c5b9-0fc6-40ce-9830-e8818862f2d5-1d923bf9.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Inbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-inbound-direct-settings-changed-276d5190-38de-4eb2-9933-b3b72f4a5737-f3d5c408.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Outbound Collaboration Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-collaboration-settings-changed-229f71ba-d83b-42a5-b83b-11a641049ed1-42360945.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Cross-tenant Access Settings Organization Outbound Direct Settings Changed](../content/microsoft-entra-id-cross-tenant-access-settings-organization-outbound-direct-settings-changed-0101e08d-99cd-4a97-a9e0-27649c4369ad-74ca33b7.md) | Medium | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [Distributed Password cracking attempts in Microsoft Entra ID](../content/microsoft-entra-id-distributed-password-cracking-attempts-in-microsoft-entra-id-bfb1c90f-8006-4325-98be-c7fffbc254d6-6613a279.md) | Medium | CredentialAccess | - |
| [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md) | Medium | InitialAccess, Persistence, Discovery | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Failed login attempts to Azure Portal](../content/microsoft-entra-id-failed-login-attempts-to-azure-portal-223db5c1-1bf8-47d8-8806-bed401b356a4-7bb79ab2.md) | Low | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-first-access-credential-added-to-application-or-service-principal-where-no-credential-2cfc3c6e-f424-4b88-9cc9-c89f482d016a-ec11980a.md) | High | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [GitHub Signin Burst from Multiple Locations](../content/microsoft-entra-id-github-signin-burst-from-multiple-locations-d3980830-dd9d-40a5-911f-76b44dfdce16-ec9e6001.md) | Medium | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Guest accounts added in Entra ID Groups other than the ones specified](../content/microsoft-entra-id-guest-accounts-added-in-entra-id-groups-other-than-the-ones-specified-6ab1f7b2-61b8-442f-bc81-96afe7ad8c53-a7fe96f3.md) | High | InitialAccess, Persistence, Discovery | [`AuditLogs`](../tables/auditlogs.md) |
| [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md) | Medium | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [MFA Spamming followed by Successful login](../content/microsoft-entra-id-mfa-spamming-followed-by-successful-login-a8cc6d5c-4e7e-4b48-b4ac-d8a116c62a8b-5935aa09.md) | High | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Mail.Read Permissions Granted to Application](../content/microsoft-entra-id-mail.read-permissions-granted-to-application-2560515c-07d1-434e-87fb-ebe3af267760-50b99956.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Microsoft Entra ID PowerShell accessing non-Entra ID resources](../content/microsoft-entra-id-microsoft-entra-id-powershell-accessing-non-entra-id-resources-50574fac-f8d1-4395-81c7-78a463ff0c52-6172797f.md) | Low | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Microsoft Entra ID Role Management Permission Grant](../content/microsoft-entra-id-microsoft-entra-id-role-management-permission-grant-1ff56009-db01-4615-8211-d4fda21da02d-2754d79c.md) | High | Persistence, Impact | [`AuditLogs`](../tables/auditlogs.md) |
| [Modified domain federation trust settings](../content/microsoft-entra-id-modified-domain-federation-trust-settings-95dc4ae3-e0f2-48bd-b996-cdd22b90f9af-cb9684ef.md) | High | CredentialAccess, Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Multiple admin membership removals from newly created admin.](../content/microsoft-entra-id-multiple-admin-membership-removals-from-newly-created-admin.-cda5928c-2c1e-4575-9dfa-07568bc27a4f-ebb84fce.md) | Medium | Impact | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT Authentication Methods Changed for VIP Users](../content/microsoft-entra-id-nrt-authentication-methods-changed-for-vip-users-29e99017-e28d-47be-8b9a-c8c711f8a903-12365352.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT First access credential added to Application or Service Principal where no credential was present](../content/microsoft-entra-id-nrt-first-access-credential-added-to-application-or-service-principal-where-no-creden-b6988c32-4f3b-4a45-8313-b46b33061a74-b17559b5.md) | Medium | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT Modified domain federation trust settings](../content/microsoft-entra-id-nrt-modified-domain-federation-trust-settings-8540c842-5bbc-4a24-9fb2-a836c0e55a51-3b2b599c.md) | High | CredentialAccess, Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT New access credential added to Application or Service Principal](../content/microsoft-entra-id-nrt-new-access-credential-added-to-application-or-service-principal-e42e889a-caaf-4dbb-aec6-371b37d64298-de5e304f.md) | Medium | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT PIM Elevation Request Rejected](../content/microsoft-entra-id-nrt-pim-elevation-request-rejected-5db427b2-f406-4274-b413-e9fcb29412f8-faff1eec.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-nrt-privileged-role-assigned-outside-pim-14f6da04-2f96-44ee-9210-9ccc1be6401e-12969908.md) | Low | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [NRT User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-nrt-user-added-to-microsoft-entra-id-privileged-groups-70fc7201-f28e-4ba7-b9ea-c04b96701f13-c42c23de.md) | Medium | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [New User Assigned to Privileged Role](../content/microsoft-entra-id-new-user-assigned-to-privileged-role-050b9b3d-53d0-4364-a3da-1b678b8211ec-fad23221.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [New access credential added to Application or Service Principal](../content/microsoft-entra-id-new-access-credential-added-to-application-or-service-principal-79566f41-df67-4e10-a703-c38a6213afd8-15b8a555.md) | Medium | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [New onmicrosoft domain added to tenant](../content/microsoft-entra-id-new-onmicrosoft-domain-added-to-tenant-4f42b94f-b210-42d1-a023-7fa1c51d969f-9b50862e.md) | Medium | ResourceDevelopment | [`AuditLogs`](../tables/auditlogs.md) |
| [PIM Elevation Request Rejected](../content/microsoft-entra-id-pim-elevation-request-rejected-7d7e20f8-3384-4b71-811c-f5e950e8306c-aad39230.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Password spray attack against ADFSSignInLogs](../content/microsoft-entra-id-password-spray-attack-against-adfssigninlogs-5533fe80-905e-49d5-889a-df27d2c3976d-bc003e0d.md) | Medium | CredentialAccess | [`ADFSSignInLogs`](../tables/adfssigninlogs.md) |
| [Password spray attack against Microsoft Entra ID Seamless SSO](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-seamless-sso-fb7ca1c9-e14c-40a3-856e-28f3c14ea1ba-0de0d722.md) | Medium | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Password spray attack against Microsoft Entra ID application](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-application-48607a29-a26a-4abf-8078-a06dbdd174a4-abc69084.md) | Medium | CredentialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Possible SignIn from Azure Backdoor](../content/microsoft-entra-id-possible-signin-from-azure-backdoor-fa00014c-c5f4-4715-8f5b-ba567e19e41e-dd1ac846.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Privileged Accounts - Sign in Failure Spikes](../content/microsoft-entra-id-privileged-accounts-sign-in-failure-spikes-34c5aff9-a8c2-4601-9654-c7e46342d03b-ebff2fbe.md) | High | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`anomalies`](../tables/anomalies.md) |
| [Privileged Role Assigned Outside PIM](../content/microsoft-entra-id-privileged-role-assigned-outside-pim-269435e3-1db8-4423-9dfc-9bf59997da1c-d87cbe19.md) | Low | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Rare application consent](../content/microsoft-entra-id-rare-application-consent-83ba3057-9ea3-4759-bf6a-933f2e5bc7ee-a30dee09.md) | Medium | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Sign-ins from IPs that attempt sign-ins to disabled accounts](../content/microsoft-entra-id-sign-ins-from-ips-that-attempt-sign-ins-to-disabled-accounts-500c103a-0319-4d56-8e99-3cec8d860757-7cb25dd6.md) | Medium | InitialAccess, Persistence | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Successful logon from IP and failure from a different IP](../content/microsoft-entra-id-successful-logon-from-ip-and-failure-from-a-different-ip-02ef8d7e-fc3a-4d86-a457-650fa571d8d2-8d1712d5.md) | Medium | CredentialAccess, InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Suspicious Entra ID Joined Device Update](../content/microsoft-entra-id-suspicious-entra-id-joined-device-update-3a3c6835-0086-40ca-b033-a93bf26d878f-b40b663f.md) | Medium | CredentialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious Service Principal creation activity](../content/microsoft-entra-id-suspicious-service-principal-creation-activity-6852d9da-8015-4b95-8ecf-d9572ee0395d-57b7f81f.md) | Low | CredentialAccess, PrivilegeEscalation, InitialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious Sign In Followed by MFA Modification](../content/microsoft-entra-id-suspicious-sign-in-followed-by-mfa-modification-aec77100-25c5-4254-a20a-8027ed92c46c-8c458768.md) | Medium | InitialAccess, DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Suspicious application consent for offline access](../content/microsoft-entra-id-suspicious-application-consent-for-offline-access-3533f74c-9207-4047-96e2-0eb9383be587-fa7e45f8.md) | Low | CredentialAccess | [`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious application consent similar to O365 Attack Toolkit](../content/microsoft-entra-id-suspicious-application-consent-similar-to-o365-attack-toolkit-f948a32f-226c-4116-bddd-d95e91d97eb9-f8a2446b.md) | High | CredentialAccess, DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [Suspicious application consent similar to PwnAuth](../content/microsoft-entra-id-suspicious-application-consent-similar-to-pwnauth-39198934-62a0-4781-8416-a81265c03fd6-18583afd.md) | Medium | CredentialAccess, DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |
| [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md) | Medium | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`anomalies`](../tables/anomalies.md) |
| [User Assigned New Privileged Role](../content/microsoft-entra-id-user-assigned-new-privileged-role-746ddb63-f51b-4563-b449-a8b13cf302ec-dac38182.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [User added to Microsoft Entra ID Privileged Groups](../content/microsoft-entra-id-user-added-to-microsoft-entra-id-privileged-groups-4d94d4a9-dc96-410a-8dea-4d4d4584188b-6ad398a6.md) | Medium | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [[Deprecated] Explicit MFA Deny](../content/microsoft-entra-id-[deprecated]-explicit-mfa-deny-a22740ec-fc1e-4c91-8de6-c29c6450ad00-04320464.md) | Medium | CredentialAccess | [`DeviceInfo`](../tables/deviceinfo.md) |
| [full_access_as_app Granted To Application](../content/microsoft-entra-id-full-access-as-app-granted-to-application-54e22fed-0ec6-4fb2-8312-2a3809a93f63-6d6d5e9f.md) | Medium | DefenseEvasion | [`AuditLogs`](../tables/auditlogs.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureActiveDirectoryAuditLogs](../content/microsoft-entra-id-azureactivedirectoryauditlogs-03b0be29.md) | [`AuditLogs`](../tables/auditlogs.md)<br>[`Operation`](../tables/operation.md) |
| [AzureActiveDirectorySignins](../content/microsoft-entra-id-azureactivedirectorysignins-97204667.md) | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) ⚠️ | [`AADRiskyServicePrincipals`](../tables/aadriskyserviceprincipals.md)<br>[`AADServicePrincipalRiskEvents`](../tables/aadserviceprincipalriskevents.md)<br>[`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)<br>[`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Update`](../tables/update.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block Entra ID user - Incident](../content/microsoft-entra-id-block-entra-id-user-incident-ae4509be.md) | For each account entity included in the incident, this playbook will disable the user in Microsoft E... | - |
| [Block Microsoft Entra ID user - Alert](../content/microsoft-entra-id-block-microsoft-entra-id-user-alert-dc74020c.md) | For each account entity included in the alert, this playbook will disable the user in Microsoft Entr... | - |
| [Block Microsoft Entra ID user - Entity trigger](../content/microsoft-entra-id-block-microsoft-entra-id-user-entity-trigger-b252354c.md) | This playbook disables the selected user (account entity) in Microsoft Entra ID. If this playbook tr... | - |
| [Prompt User - Alert](../content/microsoft-entra-id-prompt-user-alert-4762e6ab.md) | This playbook will ask the user if they completed the action from the alert in Microsoft Sentinel. I... | - |
| [Prompt User - Incident](../content/microsoft-entra-id-prompt-user-incident-2db81db3.md) | This playbook will ask the user if they completed the action from the Incident in Microsoft Sentinel... | - |
| [Reset Microsoft Entra ID User Password - Alert Trigger](../content/microsoft-entra-id-reset-microsoft-entra-id-user-password-alert-trigger-84321225.md) | This playbook will reset the user password using Graph API. It will send the password (which is a ra... | - |
| [Reset Microsoft Entra ID User Password - Entity trigger](../content/microsoft-entra-id-reset-microsoft-entra-id-user-password-entity-trigger-211fef4d.md) | This playbook will reset the user password using Graph API. It will send the password (which is a ra... | - |
| [Reset Microsoft Entra ID User Password - Incident Trigger](../content/microsoft-entra-id-reset-microsoft-entra-id-user-password-incident-trigger-74c8f531.md) | This playbook will reset the user password using Graph API. It will send the password (which is a ra... | - |
| [Revoke Entra ID  Sign-in session using entity trigger](../content/microsoft-entra-id-revoke-entra-id-sign-in-session-using-entity-trigger-6211e7fd.md) | This playbook will revoke user's sign-in sessions and user will have to perform authentication again... | - |
| [Revoke Entra ID SignIn Sessions - incident trigger](../content/microsoft-entra-id-revoke-entra-id-signin-sessions-incident-trigger-e0f6ae42.md) | This playbook will revoke all signin sessions for the user using Graph API. It will send an email to... | - |
| [Revoke-Entra ID SignInSessions alert trigger](../content/microsoft-entra-id-revoke-entra-id-signinsessions-alert-trigger-c72ead46.md) | This playbook will revoke all signin sessions for the user using Graph API. It will send an email to... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                                                                                         |
| ----------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.3.7       | 04-12-2025                     | Updated Revoke-AADSignInSessions **Playbooks** Instructions |
| 3.3.6       | 23-09-2025                     | Updated  **Analytical Rule** to fix the rule saving issue. <br/> Removed Preview Designation from **Microsoft Entra ID Connector** Data Types.  | 
| 3.3.5       | 25-07-2025                     | Updated Entra id Conditional Access (prefix) **Analytical Rule** |
| 3.3.4       | 10-07-2025                     | Updated **Analytical Rule** NRT_UseraddedtoPrivilgedGroups.yaml and UseraddedtoPrivilgedGroups.yaml
| 3.3.3       | 03-06-2025                     | Updates to multiple **Playbooks** to improve documentation, streamline deployment instructions, and add links to detailed setup steps.							                    	   |
| 3.3.2       | 08-05-2025                     | Removed the IP entity type and its associated field mappings (Address and IPAddress) in *DistribPassCrackAttempt.yaml* **Analytic Rule**.								                   |
| 3.3.1       | 08-04-2025                     | Updated **Analytical Rule** [Anomalous sign-in location by user account and authenticating application]							                                                	   |
| 3.3.0       | 28-01-2025                     | Added new **Analytic Rule** AzureRBAC to the Solution.								                                                                                                    	|	    			
| 3.2.10      | 19-12-2024                     | Updated **Analytical Rule** MFARejectedbyUser.yaml.								                                                                                                        |	    			
| 3.2.9       | 27-08-2024                     | Updated **Analytical Rule** for missing TTP.	    																																		|
| 3.2.8       | 19-08-2024                     | Exclude Result Reason "RoleAssignmentExists" from **Analytic Rule** [NRT PIM Elevation Request Rejected].                						                                            |
| 3.2.7       | 12-06-2024                     | Fixed the bugs from **Analytic Rules**.        																																    		|
| 3.2.6       | 06-06-2024                     | Successful logon from IP and failure from a different IP fixes.       																												        |
| 3.2.5       | 28-05-2024                     | Updated Entity mappings and changed description in **Analytic Rule**.         																												|
| 3.2.4       | 21-03-2024                     | Used the make-series operator instead of Make_list.          																																|
| 3.2.3       | 13-03-2024                     | Removed uses of BlastRadius from query section of **Hunting Queries** where it was used incorrectly.																						|
| 3.2.2       | 13-03-2024                     | Updated **Analytic Rule** ExplicitMFADeny.                                                                                                                                  				|
| 3.2.1       | 16-02-2024                     | Fixed entity mapping of **Analytic Rule** NRT_NewAppOrServicePrincipalCredential.yaml.                                                                                                      |
| 3.2.0       | 05-02-2024                     | 1 **Analytic Rule** added PossibleSignInfromAzureBackdoor NRT_NewAppOrServicePrincipalCredential.                                                                                           |
| 3.0.11      | 17-01-2024                     | 1 **Analytic Rule** Fixed wrong capitalization for identifier ResourceId.                                                                                                                   |
| 3.0.10      | 26-12-2023                     | 1 **Analytic Rule** Modified by adding "GroupMembership" instead of "Admin" condition for better extraction of admin accounts from the identity infotable.                                 |
| 3.0.9       | 28-11-2023                     | 2 **Analytic Rules** Modified by Adding Entity Mapping to (GuestAccountsAddedinAADGroupsOtherThanTheOnesSpecified.yaml) and Changed timerange of (SigninPasswordSpray.yaml) from 3d to 1d. |
| 3.0.8       | 21-11-2023                     | 1 **Analytic Rules** Fixed issue that was causing multiple triggers for the same event.                                                                                                    |
| 3.0.7       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.                                                                                                    |
| 3.0.6       | 30-10-2023                     | 1 **Data Connector** added back in the solution.                                                                                                                                           |
| 3.0.5       | 19-10-2023                     | 1 **Analytic Rules** updated in the solution (PIMElevationRequestRejected).                                                                                                                |
| 3.0.4       | 16-10-2023                     | 1 **Analytic Rules** got added in the solution (SuspiciousSignInFollowedByMFAModification), modified workbook query to fix duplicate locations for the query.                              |
| 3.0.3       | 22-09-2023                     | 2 **Analytic Rules** updated in the solution (PIM Elevation Request Rejected),(NRT Authentication Methods Changed for VIP Users).                                                          |
| 3.0.2       | 08-08-2023                     | 1 **Analytic Rules** updated in the solution (Credential added after admin consented to Application).                                                                                      |
| 3.0.1       | 01-08-2023                     | Added new **Analytic Rule** (New onmicrosoft domain added to tenant).                                                                                                                      |
| 3.0.0       | 19-07-2023                     | 2 **Analytic Rules** updated in the solution (User Assigned Privileged Role,Successful logon from IP and failure from a different IP).                                                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
