# SigninLogs

Reference for SigninLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signinlogs) |

## Solutions (29)

This table is used by the following solutions:

- [1Password](../solutions/1password.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [GitLab](../solutions/gitlab.md)
- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [LastPass](../solutions/lastpass.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft 365](../solutions/microsoft-365.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Teams](../solutions/teams.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [Windows Firewall](../solutions/windows-firewall.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md)

---

## Content Items Using This Table (57)

### Analytic Rules (17)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Expired access credentials being used in Azure](../content/433c3b0a-7278-4d74-b137-963ac6f9a7e7.md)

**In solution [GitLab](../solutions/gitlab.md):**
- [GitLab - SSO - Sign-Ins Burst](../content/57b1634b-531d-4eab-a456-8b855887428f.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in SigninLogs](../content/1425aea5-a9e5-4288-886e-934b90664a91.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Suspicious use of Web API](../content/8a6ecba2-ccfe-4c8c-b086-fa3e6ff7fa86.md)
- [F&O - Unusual sign-in activity using single factor authentication](../content/919e939f-95e2-4978-846e-13a721c89ea1.md)
- [Power Apps - App activity from unauthorized geo](../content/7ec1e61d-f3b7-4f40-bb1a-357a63913c23.md)
- [Power Platform - Possibly compromised user accesses Power Platform services](../content/54d48840-1c64-4399-afee-ad39a069118d.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Unusual Volume of file deletion by users](../content/e5f8e196-3544-4a8b-96a9-17c1b6a49710.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [Brute force attack against a Cloud PC](../content/3fbc20a4-04c4-464e-8fcb-6667f53e4987.md)
- [MFA Rejected by User](../content/d99cf5c3-d660-436c-895b-8a8f8448da23.md)
- [MFA Spamming followed by Successful login](../content/a8cc6d5c-4e7e-4b48-b4ac-d8a116c62a8b.md)
- [Possible SignIn from Azure Backdoor](../content/fa00014c-c5f4-4715-8f5b-ba567e19e41e.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_Risky User Access By Application](../content/15386bba-dc70-463f-a09f-d392e7731c63.md)

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md):**
- [Cross-Cloud Password Spray detection](../content/1f40ed57-f54b-462f-906a-ac3a89cc90d4.md)
- [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/122fbc6a-57ab-4aa7-b9a9-51ac4970cac1.md)
- [High-Risk Cross-Cloud User Impersonation](../content/f4a28082-2808-4783-9736-33c1ae117475.md)

### Hunting Queries (23)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Login attempts using Legacy Auth](../content/b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8.md)
- [Microsoft Entra ID signins from new locations](../content/41fa6e2d-afe9-4398-9356-cec3a927e44e.md)
- [Risky Sign-in with new MFA method](../content/bfacf634-c75e-4291-998c-ecbc0323d943.md)
- [Successful Signin From Non-Compliant Device](../content/99885ff5-00cf-49e8-9452-6de6aba2a5c7.md)
- [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/f56b2223-0d4d-4347-9de4-822d195624ee.md)
- [User Login IP Address Teleportation](../content/09a7c5fc-0649-4f7d-a21b-36a754cef6b6.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Detect Disabled Account Sign-in Attempts by Account Name](../content/b00f127c-46fa-40bd-9ab6-b266974d29cc.md)
- [Detect Disabled Account Sign-in Attempts by IP Address](../content/0cd51b2e-d3b2-4001-8e3f-5cbb604f69b2.md)
- [Sign-ins From VPS Providers](../content/86490334-5371-40a2-971a-3749c2654954.md)
- [Sign-ins from Nord VPN Providers](../content/cdc9b092-8a16-4559-9e5e-831877e8209a.md)

**In solution [LastPass](../solutions/lastpass.md):**
- [Login into LastPass from a previously unknown IP.](../content/d292d770-69a4-4399-9272-6e86c4e53e58.md)

**In solution [Microsoft 365](../solutions/microsoft-365.md):**
- [SharePointFileOperation via devices with previously unseen user agents](../content/f2367171-1514-4c67-88ef-27434b6a1093.md)
- [SharePointFileOperation via previously unseen IPs](../content/e3d24cfd-b2a1-4ba7-8f80-0360892f9d57.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Activity after failed logons](../content/dafcc598-2987-4aa0-947e-7d0449677689.md)
- [Dataverse - Generic client app used to access production environments](../content/90bcbd4e-e8b5-4a5d-9fe6-d0f9f0220b4a.md)
- [Dataverse - Identity management changes without MFA](../content/385234b7-d96c-4dc3-9c0e-ceb46048d487.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Unusual Volume of file deletion by users](../content/2bdd260c-c687-4cb2-9992-87e5ce677678.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_Sign In Risk Followed By Sensitive Data Access](../content/45ec52c2-99e1-4de1-9adc-bae0f79d4e23.md)

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**
- [Threat Essentials - Signins From VPS Providers](../content/f347ff55-6443-46b6-9abb-4f8f9b3209f8.md)
- [Threat Essentials - Signins from Nord VPN Providers](../content/1eaad895-7796-466b-8bf3-cec0fa78d0e4.md)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**
- [Anomalous Failed Logon](../content/77a58c08-bc8e-48b3-8fe9-6c38fd011cd9.md)
- [Anomalous Sign-in by New or Dormant Account](../content/bb3bb9da-9598-4d1f-af78-7cc2fd413b0b.md)

**In solution [Windows Server DNS](../solutions/windows-server-dns.md):**
- [Solorigate Encoded Domain in URL](../content/29a1815a-3ada-4182-a178-e52c483d2f95.md)

### Workbooks (17)

**In solution [1Password](../solutions/1password.md):**
- [1Password](../content/1password-1password.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdprcomplianceanddatasecurity-gdpr-compliance-&-data-security.md)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**
- [HIPAACompliance](../content/hipaacompliance-hipaa-compliance.md)

**In solution [LastPass](../solutions/lastpass.md):**
- [LastPassWorkbook](../content/lastpassworkbook-lastpass.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [AzureActiveDirectorySignins](../content/azureactivedirectorysignins-microsoft-entra-id.md)
- [ConditionalAccessSISM](../content/conditionalaccesssism-microsoft-entra-id.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/insiderriskmanagement-microsoftpurviewinsiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [InvestigationInsights](../content/investigationinsights-soc-handbook.md)

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**
- [SOXITCompliance](../content/soxitcompliance-sox-it-compliance.md)

**In solution [Teams](../solutions/teams.md):**
- [MicrosoftTeams](../content/microsoftteams-teams.md)

**In solution [Windows Firewall](../solutions/windows-firewall.md):**
- [WindowsFirewall](../content/windowsfirewall-windows-firewall.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.graph/tenants`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
