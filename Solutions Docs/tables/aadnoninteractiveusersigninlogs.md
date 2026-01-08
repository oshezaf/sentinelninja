# AADNonInteractiveUserSignInLogs

Reference for AADNonInteractiveUserSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadnoninteractiveusersigninlogs) |

## Solutions (13)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [FalconFriday](../solutions/falconfriday.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Entra ID](../connectors/azureactivedirectory.md)

---

## Content Items Using This Table (31)

### Analytic Rules (24)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md)
- [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Microsoft Entra ID Rare UserAgent App Sign-in](../content/falconfriday-microsoft-entra-id-rare-useragent-app-sign-in-87d5cd18-211d-4fd4-9b86-65d23fed87ea-f1fc55a9.md)
- [Microsoft Entra ID UserAgent OS Missmatch](../content/falconfriday-microsoft-entra-id-useragent-os-missmatch-6a638d80-f6b2-473b-9087-3cac78a84b40-e6a7d745.md)

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**
- [GreyNoise TI Map IP Entity to SigninLogs](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-signinlogs-f6c76cc9-218c-5b76-9b82-8607f09ea1b4-318921fb.md)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**
- [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [Anomalous sign-in location by user account and authenticating application](../content/microsoft-entra-id-anomalous-sign-in-location-by-user-account-and-authenticating-application-7cb8f77d-c52f-4e46-b82f-3cf2e106224a-c5368fb1.md)
- [Attempt to bypass conditional access rule in Microsoft Entra ID](../content/microsoft-entra-id-attempt-to-bypass-conditional-access-rule-in-microsoft-entra-id-3af9285d-bb98-4a35-ad29-5ea39ba0c628-6f5f2339.md)
- [Attempts to sign in to disabled accounts](../content/microsoft-entra-id-attempts-to-sign-in-to-disabled-accounts-75ea5c39-93e5-489b-b1e1-68fa6c9d2d04-3d398bd3.md)
- [Brute Force Attack against GitHub Account](../content/microsoft-entra-id-brute-force-attack-against-github-account-97ad74c4-fdd9-4a3f-b6bf-5e28f4f71e06-409b9696.md)
- [Brute force attack against Azure Portal](../content/microsoft-entra-id-brute-force-attack-against-azure-portal-28b42356-45af-40a6-a0b4-a554cdfd5d8a-5dc74411.md)
- [External guest invitation followed by Microsoft Entra ID PowerShell signin](../content/microsoft-entra-id-external-guest-invitation-followed-by-microsoft-entra-id-powershell-signin-acc4c247-aaf7-494b-b5da-17f18863878a-4c59ca84.md)
- [Failed login attempts to Azure Portal](../content/microsoft-entra-id-failed-login-attempts-to-azure-portal-223db5c1-1bf8-47d8-8806-bed401b356a4-7bb79ab2.md)
- [GitHub Signin Burst from Multiple Locations](../content/microsoft-entra-id-github-signin-burst-from-multiple-locations-d3980830-dd9d-40a5-911f-76b44dfdce16-ec9e6001.md)
- [Microsoft Entra ID PowerShell accessing non-Entra ID resources](../content/microsoft-entra-id-microsoft-entra-id-powershell-accessing-non-entra-id-resources-50574fac-f8d1-4395-81c7-78a463ff0c52-6172797f.md)
- [Password spray attack against Microsoft Entra ID Seamless SSO](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-seamless-sso-fb7ca1c9-e14c-40a3-856e-28f3c14ea1ba-0de0d722.md)
- [Password spray attack against Microsoft Entra ID application](../content/microsoft-entra-id-password-spray-attack-against-microsoft-entra-id-application-48607a29-a26a-4abf-8078-a06dbdd174a4-abc69084.md)
- [Privileged Accounts - Sign in Failure Spikes](../content/microsoft-entra-id-privileged-accounts-sign-in-failure-spikes-34c5aff9-a8c2-4601-9654-c7e46342d03b-ebff2fbe.md)
- [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md)
- [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**
- [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md)
- [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md)

**In solution [ThreatConnect](../solutions/threatconnect.md):**
- [ThreatConnect TI map Email entity to SigninLogs](../content/threatconnect-threatconnect-ti-map-email-entity-to-signinlogs-ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f-22788640.md)

### Hunting Queries (1)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**
- [User Accounts - New Single Factor Auth](../content/business-email-compromise-financial-fraud-user-accounts-new-single-factor-auth-8eace93b-f38c-47b7-a21d-739556d31db6-94f60108.md)

### Workbooks (6)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [AzureActiveDirectorySignins](../content/microsoft-entra-id-azureactivedirectorysignins-97204667.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
