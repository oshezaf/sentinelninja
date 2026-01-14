# BehaviorAnalytics

Reference for BehaviorAnalytics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/behavioranalytics) |

## Solutions (11)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

---

## Content Items Using This Table (45)

### Analytic Rules (5)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [MFA Rejected by User](../content/microsoft-entra-id-mfa-rejected-by-user-d99cf5c3-d660-436c-895b-8a8f8448da23-b3c993fb.md)
- [Sign-ins from IPs that attempt sign-ins to disabled accounts](../content/microsoft-entra-id-sign-ins-from-ips-that-attempt-sign-ins-to-disabled-accounts-500c103a-0319-4d56-8e99-3cec8d860757-7cb25dd6.md)
- [Successful logon from IP and failure from a different IP](../content/microsoft-entra-id-successful-logon-from-ip-and-failure-from-a-different-ip-02ef8d7e-fc3a-4d86-a457-650fa571d8d2-8d1712d5.md)
- [Suspicious Sign In Followed by MFA Modification](../content/microsoft-entra-id-suspicious-sign-in-followed-by-mfa-modification-aec77100-25c5-4254-a20a-8027ed92c46c-8c458768.md)
- [User Accounts - Sign in Failure due to CA Spikes](../content/microsoft-entra-id-user-accounts-sign-in-failure-due-to-ca-spikes-3a9d5ede-2b9d-43a2-acc4-d272321ff77c-0daea6fb.md)

### Hunting Queries (32)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**
- [Login attempts using Legacy Auth](../content/business-email-compromise-financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8-3c2feb3c.md)
- [Risky Sign-in with new MFA method](../content/business-email-compromise-financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943-114a4a02.md)
- [Successful Signin From Non-Compliant Device](../content/business-email-compromise-financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7-20eaa2d1.md)
- [User Accounts - New Single Factor Auth](../content/business-email-compromise-financial-fraud-user-accounts-new-single-factor-auth-8eace93b-f38c-47b7-a21d-739556d31db6-94f60108.md)
- [User Login IP Address Teleportation](../content/business-email-compromise-financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6-e3c0bf58.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Sign-ins From VPS Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-vps-providers-86490334-5371-40a2-971a-3749c2654954-088cc628.md)
- [Sign-ins from Nord VPN Providers](../content/cloud-identity-threat-protection-essentials-sign-ins-from-nord-vpn-providers-cdc9b092-8a16-4559-9e5e-831877e8209a-d746cc8d.md)
- [Suspicious Sign-ins to Privileged Account](../content/cloud-identity-threat-protection-essentials-suspicious-sign-ins-to-privileged-account-a73c52f2-b3a5-4fe4-be7d-4d59b8558590-502c7b31.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [Insider Risk_ISP Anomaly to Exfil](../content/microsoftpurviewinsiderriskmanagement-insider-risk-isp-anomaly-to-exfil-12b6582f-b715-4f91-98e1-1582ebad348a-a6296594.md)
- [Insider Risk_Multiple Entity-Based Anomalies](../content/microsoftpurviewinsiderriskmanagement-insider-risk-multiple-entity-based-anomalies-3bc01058-ce23-45ba-a7e9-409d844b12dc-2bc6a4d7.md)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**
- [Anomalies on users tagged as VIP](../content/ueba-essentials-anomalies-on-users-tagged-as-vip-028ac38c-f5a4-483b-a58a-aa83d500bf27-67c13b87.md)
- [Anomalous AWS Console Login Without MFA from Uncommon Country](../content/ueba-essentials-anomalous-aws-console-login-without-mfa-from-uncommon-country-a1b2c3d4-e5f6-7890-abcd-ef1234567890-e27bf283.md)
- [Anomalous Activity Role Assignment](../content/ueba-essentials-anomalous-activity-role-assignment-bd6fda76-c0df-41b0-b8cd-808190e1ded0-f28cc576.md)
- [Anomalous Code Execution on a Virtual Machine](../content/ueba-essentials-anomalous-code-execution-on-a-virtual-machine-f8ab176c-1f3f-4cb5-8dc1-f50d30bcae0d-1d294e0d.md)
- [Anomalous Database Export Activity](../content/ueba-essentials-anomalous-database-export-activity-8cf3c78e-cd10-4bfb-bd69-d62dc7f375f1-547bf5ee.md)
- [Anomalous Database Vulnerability Baseline Removal](../content/ueba-essentials-anomalous-database-vulnerability-baseline-removal-fcb704ae-ac17-400a-9ed9-3c46bd0a3960-5de0e0ef.md)
- [Anomalous Failed Logon](../content/ueba-essentials-anomalous-failed-logon-77a58c08-bc8e-48b3-8fe9-6c38fd011cd9-d88b0a61.md)
- [Anomalous First-Time Device Logon](../content/ueba-essentials-anomalous-first-time-device-logon-c3d4e5f6-g7h8-9012-cdef-gh3456789012-95978030.md)
- [Anomalous GCP IAM Activity](../content/ueba-essentials-anomalous-gcp-iam-activity-e5f6g7h8-i9j0-1234-efgh-ij5678901234-7903fc2f.md)
- [Anomalous Geo Location Logon](../content/ueba-essentials-anomalous-geo-location-logon-eeea7fb9-21cf-4023-91dc-3f55d7548d14-3faf613a.md)
- [Anomalous Key Vault Modification by High-Privilege User](../content/ueba-essentials-anomalous-key-vault-modification-by-high-privilege-user-202ee40b-e6d8-4968-9a79-cf24c5c09db9-fa6954f8.md)
- [Anomalous Microsoft Entra ID Account Creation](../content/ueba-essentials-anomalous-microsoft-entra-id-account-creation-0454c8d8-d0a6-42a4-8d03-f5b4fdcbd173-21d82dda.md)
- [Anomalous Okta First-Time or Uncommon Actions](../content/ueba-essentials-anomalous-okta-first-time-or-uncommon-actions-d4e5f6g7-h8i9-0123-defg-hi4567890123-0ea8a6e8.md)
- [Anomalous Password Reset](../content/ueba-essentials-anomalous-password-reset-22b0262c-b6b5-4f15-82a4-93663e9965d7-b04b510f.md)
- [Anomalous RDP Activity](../content/ueba-essentials-anomalous-rdp-activity-c01d95d3-ee85-4e7f-9aed-e62356f1de76-f9c1ea17.md)
- [Anomalous Resource Access](../content/ueba-essentials-anomalous-resource-access-782f3bad-31f7-468f-8f58-3b74fc931914-129885e1.md)
- [Anomalous Sign-in by New or Dormant Account](../content/ueba-essentials-anomalous-sign-in-by-new-or-dormant-account-bb3bb9da-9598-4d1f-af78-7cc2fd413b0b-02e8af9c.md)
- [Anomalous action performed in tenant by privileged user](../content/ueba-essentials-anomalous-action-performed-in-tenant-by-privileged-user-9ba2b304-7767-4d54-b03c-b0161ae87cc7-f2b7cf70.md)
- [Anomalous connection from highly privileged user](../content/ueba-essentials-anomalous-connection-from-highly-privileged-user-741fdf32-e002-4577-ac9b-839fb49f128e-22b5a707.md)
- [Anomalous login activity originated from Botnet, Tor proxy or C2](../content/ueba-essentials-anomalous-login-activity-originated-from-botnet,-tor-proxy-or-c2-c3b09dd3-ee50-41ae-b863-8603620e5f48-79aee61c.md)
- [Dormant Local Admin Logon](../content/ueba-essentials-dormant-local-admin-logon-2e20ec77-8d50-4959-a70d-79c341ee2c37-d3f55f49.md)
- [Dormant account activity from uncommon country](../content/ueba-essentials-dormant-account-activity-from-uncommon-country-7c303408-f913-42f8-8d7b-9eb64a229c4d-510c1ff6.md)

### Workbooks (8)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):**
- [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md)

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**
- [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

