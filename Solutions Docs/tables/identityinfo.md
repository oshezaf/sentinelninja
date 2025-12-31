# IdentityInfo

Account information from various sources, including Microsoft Entra ID

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityinfo-table) |

## Solutions (13)

This table is used by the following solutions:

- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [UEBA Essentials](../solutions/ueba-essentials.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

---

## Content Items Using This Table (28)

### Analytic Rules (9)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Local Admin Group Changes](../content/63aa43c2-e88e-4102-aea5-0432851c541a.md)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**
- [Authentication Methods Changed for Privileged Account](../content/694c91ee-d606-4ba9-928e-405a2dd0ff0f.md)
- [MFA Rejected by User](../content/d99cf5c3-d660-436c-895b-8a8f8448da23.md)
- [Privileged Accounts - Sign in Failure Spikes](../content/34c5aff9-a8c2-4601-9654-c7e46342d03b.md)
- [Successful logon from IP and failure from a different IP](../content/02ef8d7e-fc3a-4d86-a457-650fa571d8d2.md)
- [User Accounts - Sign in Failure due to CA Spikes](../content/3a9d5ede-2b9d-43a2-acc4-d272321ff77c.md)

**In solution [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md):**
- [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/a3df4a32-4805-4c6d-8699-f3c888af2f67.md)

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md):**
- [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/188db479-d50a-4a9c-a041-644bae347d1f.md)
- [Suspicious AWS console logins by credential access alerts](../content/b51fe620-62ad-4ed2-9d40-5c97c0a8231f.md)

### Hunting Queries (14)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise---financial-fraud.md):**
- [Login attempts using Legacy Auth](../content/b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8.md)
- [Microsoft Entra ID signins from new locations](../content/41fa6e2d-afe9-4398-9356-cec3a927e44e.md)
- [Risky Sign-in with new MFA method](../content/bfacf634-c75e-4291-998c-ecbc0323d943.md)
- [Successful Signin From Non-Compliant Device](../content/99885ff5-00cf-49e8-9452-6de6aba2a5c7.md)
- [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/f56b2223-0d4d-4347-9de4-822d195624ee.md)
- [User Login IP Address Teleportation](../content/09a7c5fc-0649-4f7d-a21b-36a754cef6b6.md)

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**
- [Detect Disabled Account Sign-in Attempts by Account Name](../content/b00f127c-46fa-40bd-9ab6-b266974d29cc.md)
- [Sign-ins From VPS Providers](../content/86490334-5371-40a2-971a-3749c2654954.md)
- [Sign-ins from Nord VPN Providers](../content/cdc9b092-8a16-4559-9e5e-831877e8209a.md)
- [Suspicious Sign-ins to Privileged Account](../content/a73c52f2-b3a5-4fe4-be7d-4d59b8558590.md)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**
- [Dataverse - Identity management activity outside of privileged directory role membership](../content/c7e6e48a-0514-4989-bc90-4a3c9207ede1.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Local Admin Group Changes](../content/63142c12-5d8b-48cf-a0f6-b523c855497c.md)
- [User not covered under display name impersonation](../content/e90345b3-439c-44e1-a85d-8ae84ad9c65b.md)

**In solution [UEBA Essentials](../solutions/ueba-essentials.md):**
- [Anomalous connection from highly privileged user](../content/741fdf32-e002-4577-ac9b-839fb49f128e.md)

### Workbooks (5)

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification%28cmmc%292.0.md):**
- [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmcv2-cybersecuritymaturitymodelcertification%28cmmc%292.0.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagement-m2131-maturitymodelforeventlogmanagementm2131.md)

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**
- [InsiderRiskManagement](../content/insiderriskmanagement-microsoftpurviewinsiderriskmanagement.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
