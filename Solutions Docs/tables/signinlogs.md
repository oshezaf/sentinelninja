# SigninLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SigninLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signinlogs) |

## Solutions (35)

This table is used by the following solutions:

- [1Password](../solutions/1password.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [GitLab](../solutions/gitlab.md)
- [Global Secure Access](../solutions/global-secure-access.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft 365](../solutions/microsoft-365.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Teams](../solutions/teams.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatAnalysis&Response](../solutions/threatanalysis&response.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (78)

### Analytic Rules (30)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Expired access credentials being used in Azure](../content/falconfriday-expired-access-credentials-being-used-in-azure-433c3b0a-7278-4d74-b137-963ac6f9a7e7-965eac08.md) |  |
| [Microsoft Entra ID Rare UserAgent App Sign-in](../content/falconfriday-microsoft-entra-id-rare-useragent-app-sign-in-87d5cd18-211d-4fd4-9b86-65d23fed87ea-f1fc55a9.md) |  |
| [Microsoft Entra ID UserAgent OS Missmatch](../content/falconfriday-microsoft-entra-id-useragent-os-missmatch-6a638d80-f6b2-473b-9087-3cac78a84b40-e6a7d745.md) |  |

**In solution [GitLab](../solutions/gitlab.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GitLab - SSO - Sign-Ins Burst](../content/gitlab-gitlab-sso-sign-ins-burst-57b1634b-531d-4eab-a456-8b855887428f-5a07493b.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Failed sign-ins into LastPass due to MFA](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa-760b8467-e6cc-4006-9149-5696845c1a54-fcbe15ea.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in SigninLogs](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-signinlogs-1425aea5-a9e5-4288-886e-934b90664a91-470061c8.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Suspicious use of Web API](../content/microsoft-business-applications-dataverse-suspicious-use-of-web-api-8a6ecba2-ccfe-4c8c-b086-fa3e6ff7fa86-3da7d04c.md) |  |
| [F&O - Unusual sign-in activity using single factor authentication](../content/microsoft-business-applications-f&o-unusual-sign-in-activity-using-single-factor-authentication-919e939f-95e2-4978-846e-13a721c89ea1-0df016bb.md) |  |
| [Power Apps - App activity from unauthorized geo](../content/microsoft-business-applications-power-apps-app-activity-from-unauthorized-geo-7ec1e61d-f3b7-4f40-bb1a-357a63913c23-0cf6ffb9.md) |  |
| [Power Platform - Possibly compromised user accesses Power Platform services](../content/microsoft-business-applications-power-platform-possibly-compromised-user-accesses-power-platform-service-54d48840-1c64-4399-afee-ad39a069118d-23dcba32.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-e5f8e196-3544-4a8b-96a9-17c1b6a49710-7af46276.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md) |  |
| [Brute force attack against a Cloud PC](../content/microsoft-entra-id-brute-force-attack-against-a-cloud-pc-3fbc20a4-04c4-464e-8fcb-6667f53e4987-a1e86b1d.md) |  |
| [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md) |  |
| [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md) |  |
| [MFA Spamming followed by Successful login](../content/microsoft-entra-id-mfa-spamming-followed-by-successful-login-a8cc6d5c-4e7e-4b48-b4ac-d8a116c62a8b-5935aa09.md) |  |
| [Password spray attack against Microsoft Entra ID Seamless SSO](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-seamless-sso-fb7ca1c9-e14c-40a3-856e-28f3c14ea1ba-0de0d722.md) |  |
| [Possible SignIn from Azure Backdoor](../content/microsoft-entra-id-possible-signin-from-azure-backdoor-fa00014c-c5f4-4715-8f5b-ba567e19e41e-dd1ac846.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Risky User Access By Application](../content/microsoftpurviewinsiderriskmanagement-insider-risk-risky-user-access-by-application-15386bba-dc70-463f-a09f-d392e7731c63-dfb68560.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Password Spray detection](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-password-spray-detection-1f40ed57-f54b-462f-906a-ac3a89cc90d4-5128b308.md) |  |
| [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-unauthorized-credential-access-detecti-122fbc6a-57ab-4aa7-b9a9-51ac4970cac1-bb7f7aa6.md) |  |
| [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials-resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475-11195fd6.md) |  |
| [Unauthorized user access across AWS and Azure](../content/multi-cloud-attack-coverage-essentials-resource-abuse-unauthorized-user-access-across-aws-and-azure-60f31001-018a-42bf-8045-a92e1f361b7b-6d3ff85e.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/securitythreatessentialsolution-possible-aitm-phishing-attempt-against-microsoft-entra-id-16daa67c-b137-48dc-8eb7-76598a44791a-98f6165b.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md) |  |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md) |  |

### Hunting Queries (25)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Login attempts using Legacy Auth](../content/business-email-compromise-financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8-3c2feb3c.md) |  |
| [Microsoft Entra ID signins from new locations](../content/business-email-compromise-financial-fraud-microsoft-entra-id-signins-from-new-locations-41fa6e2d-afe9-4398-9356-cec3a927e44e-6ce1e4de.md) |  |
| [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md) | `OperationName == "Update user"` |
| [Successful Signin From Non-Compliant Device](../content/business-email-compromise-financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7-20eaa2d1.md) |  |
| [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/business-email-compromise-financial-fraud-user-accounts-unusual-authentications-occurring-when-countries-f56b2223-0d4d-4347-9de4-822d195624ee-ea198d62.md) |  |
| [User Login IP Address Teleportation](../content/business-email-compromise-financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6-e3c0bf58.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect Disabled Account Sign-in Attempts by Account Name](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-account-name-b00f127c-46fa-40bd-9ab6-b266974d29cc-dff302a4.md) |  |
| [Detect Disabled Account Sign-in Attempts by IP Address](../content/cloud-identity-threat-protection-essentials-detect-disabled-account-sign-in-attempts-by-ip-address-0cd51b2e-d3b2-4001-8e3f-5cbb604f69b2-58dcd212.md) |  |
| [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md) |  |
| [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md) |  |
| [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Failed sign-ins into LastPass due to MFA.](../content/lastpass-enterprise-activity-monitoring-failed-sign-ins-into-lastpass-due-to-mfa.-b43fc364-69fc-4d3e-8834-6743ab5725e9-ed093fc6.md) |  |
| [Login into LastPass from a previously unknown IP.](../content/lastpass-enterprise-activity-monitoring-login-into-lastpass-from-a-previously-unknown-ip.-d292d770-69a4-4399-9272-6e86c4e53e58-cac0163b.md) |  |

**In solution [Microsoft 365](../solutions/microsoft-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-f2367171-1514-4c67-88ef-27434b6a1093-8d3d8113.md) |  |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-e3d24cfd-b2a1-4ba7-8f80-0360892f9d57-bf177f44.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Activity after failed logons](../content/microsoft-business-applications-dataverse-activity-after-failed-logons-dafcc598-2987-4aa0-947e-7d0449677689-8b8942dc.md) |  |
| [Dataverse - Generic client app used to access production environments](../content/microsoft-business-applications-dataverse-generic-client-app-used-to-access-production-environments-90bcbd4e-e8b5-4a5d-9fe6-d0f9f0220b4a-72c7ad56.md) |  |
| [Dataverse - Identity management changes without MFA](../content/microsoft-business-applications-dataverse-identity-management-changes-without-mfa-385234b7-d96c-4dc3-9c0e-ceb46048d487-58611350.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Unusual Volume of file deletion by users](../content/microsoft-defender-xdr-unusual-volume-of-file-deletion-by-users-2bdd260c-c687-4cb2-9992-87e5ce677678-3b144d45.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Insider Risk_Sign In Risk Followed By Sensitive Data Access](../content/microsoftpurviewinsiderriskmanagement-insider-risk-sign-in-risk-followed-by-sensitive-data-access-45ec52c2-99e1-4de1-9adc-bae0f79d4e23-f2037089.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Signins From VPS Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-vps-providers-f347ff55-6443-46b6-9abb-4f8f9b3209f8-41e64544.md) |  |
| [Threat Essentials - Signins from Nord VPN Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-nord-vpn-providers-1eaad895-7796-466b-8bf3-cec0fa78d0e4-2239dde4.md) |  |

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Failed Logon](../content/ueba-essentials-anomalous-failed-logon-77a58c08-bc8e-48b3-8fe9-6c38fd011cd9-d88b0a61.md) |  |
| [Anomalous Sign-in by New or Dormant Account](../content/ueba-essentials-anomalous-sign-in-by-new-or-dormant-account-bb3bb9da-9598-4d1f-af78-7cc2fd413b0b-02e8af9c.md) |  |

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Solorigate Encoded Domain in URL](../content/windows-server-dns-solorigate-encoded-domain-in-url-29a1815a-3ada-4182-a178-e52c483d2f95-55f1aaa9.md) |  |

### Workbooks (23)

**In solution [1Password](../solutions/1password.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [1Password](../content/1password-1password-c64d377e.md) |  |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):** `OperationName contains "PIM"`

| Content Item |
|:-------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |  |

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [Global Secure Access](../solutions/global-secure-access.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GSANetworkTraffic](../content/global-secure-access-gsanetworktraffic-b1c45294.md) |  |

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [LastPassWorkbook](../content/lastpass-enterprise-activity-monitoring-lastpassworkbook-a0d8c4ef.md) |  |

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
| [AzureActiveDirectorySignins](../content/microsoft-entra-id-azureactivedirectorysignins-97204667.md) |  |
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) | `OperationName in "Add conditional access policy,Add member to group,Add member to restricted management administrative unit,Delete conditional access policy,Remove member from group,Remove member from restricted management administrative unit,Update conditional access policy,Update group"` |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):** `OperationName == "Consent to application"`<br>`OperationName == "Disable Strong Authentication"`<br>`OperationName contains "password"`

| Content Item |
|:-------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `OperationName has_any "Add directory role member,Add member to role,Add user,Create user,Role assignment,Update user"`<br>`OperationName has_any "directory write,policy update,role assignment,role update"`

| Content Item |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [Teams](../solutions/teams.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftTeams](../content/teams-microsoftteams-d6922450.md) |  |

**In solution [ThreatAnalysis&Response](../solutions/threatanalysis&response.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DynamicThreatModeling&Response](../content/threatanalysis&response-dynamicthreatmodeling&response-54123c47.md) |  |

**In solution [Windows Firewall](../solutions/windows-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [WindowsFirewall](../content/windows-firewall-windowsfirewall-6cfebfa8.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationSigninLogs](../asim/asimauthenticationsigninlogs.md) | Authentication | Microsoft Entra ID |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.graph/tenants`

## Selection Criteria Summary (5 criteria, 5 total references)

References by type: 0 connectors, 5 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName == "Update user"` | - | 1 | - | - | **1** |
| `OperationName contains "PIM"` | - | 1 | - | - | **1** |
| `OperationName in "Add conditional access policy,Add member to group,Add member to restricted management administrative unit,Delete conditional access policy,Remove member from group,Remove member from restricted management administrative unit,Update conditional access policy,Update group"` | - | 1 | - | - | **1** |
| `OperationName == "Consent to application"`<br>`OperationName == "Disable Strong Authentication"`<br>`OperationName contains "password"` | - | 1 | - | - | **1** |
| `OperationName has_any "Add directory role member,Add member to role,Add user,Create user,Role assignment,Update user"`<br>`OperationName has_any "directory write,policy update,role assignment,role update"` | - | 1 | - | - | **1** |
| **Total** | **0** | **5** | **0** | **0** | **5** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Update user` | - | 1 | - | - | **1** |
| `contains PIM` | - | 1 | - | - | **1** |
| `Add conditional access policy` | - | 1 | - | - | **1** |
| `Add member to group` | - | 1 | - | - | **1** |
| `Add member to restricted management administrative unit` | - | 1 | - | - | **1** |
| `Delete conditional access policy` | - | 1 | - | - | **1** |
| `Remove member from group` | - | 1 | - | - | **1** |
| `Remove member from restricted management administrative unit` | - | 1 | - | - | **1** |
| `Update conditional access policy` | - | 1 | - | - | **1** |
| `Update group` | - | 1 | - | - | **1** |
| `Consent to application` | - | 1 | - | - | **1** |
| `Disable Strong Authentication` | - | 1 | - | - | **1** |
| `contains password` | - | 1 | - | - | **1** |
| `has_any Add directory role member` | - | 1 | - | - | **1** |
| `has_any Add member to role` | - | 1 | - | - | **1** |
| `has_any Add user` | - | 1 | - | - | **1** |
| `has_any Create user` | - | 1 | - | - | **1** |
| `has_any Role assignment` | - | 1 | - | - | **1** |
| `has_any Update user` | - | 1 | - | - | **1** |
| `has_any directory write` | - | 1 | - | - | **1** |
| `has_any policy update` | - | 1 | - | - | **1** |
| `has_any role assignment` | - | 1 | - | - | **1** |
| `has_any role update` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

