# Business Email Compromise - Financial Fraud

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2023-08-04 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **5 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Analytics, Hunting |
| [`AwsBucketAPILogs_CL`](../tables/awsbucketapilogs-cl.md) | Hunting |
| [`EmailEvents`](../tables/emailevents.md) | Hunting |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics, Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | Hunting |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Hunting |
| [`IdentityInfo`](../tables/identityinfo.md) | Hunting |

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 13 |
| Analytic Rules | 7 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Account Elevated to New Role](../content/business-email-compromise---financial-fraud-account-elevated-to-new-role-c1c66f0b-5531-4a3e-a619-9d2f770ef730.md) | Medium | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Authentication Method Changed for Privileged Account](../content/business-email-compromise---financial-fraud-authentication-method-changed-for-privileged-account-feb0a2fb-ae75-4343-8cbc-ed545f1da289.md) | High | Persistence | - |
| [Malicious BEC Inbox Rule](../content/business-email-compromise---financial-fraud-malicious-bec-inbox-rule-8ac77493-3cae-4840-8634-15fb23f8fb68.md) | Medium | Persistence, DefenseEvasion | [`OfficeActivity`](../tables/officeactivity.md) |
| [Privileged Account Permissions Changed](../content/business-email-compromise---financial-fraud-privileged-account-permissions-changed-0433c8a3-9aa6-4577-beef-2ea23be41137.md) | Medium | PrivilegeEscalation | - |
| [Suspicious access of BEC related documents](../content/business-email-compromise---financial-fraud-suspicious-access-of-bec-related-documents-cd8d946d-10a4-40a9-bac1-6d0a6c847d65.md) | Medium | Collection | - |
| [Suspicious access of BEC related documents in AWS S3 buckets](../content/business-email-compromise---financial-fraud-suspicious-access-of-bec-related-documents-in-aws-s3-buckets-f3e2d35f-1202-4215-995c-4654ef07d1d8.md) | Medium | Collection | - |
| [User Added to Admin Role](../content/business-email-compromise---financial-fraud-user-added-to-admin-role-2a09f8cb-deb7-4c40-b08b-9137667f1c0b.md) | Low | PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Email Forwarding Configuration with SAP download](../content/business-email-compromise---financial-fraud-email-forwarding-configuration-with-sap-download-0576750e-6b61-4545-845f-f5b8f29a0cc4.md) | InitialAccess, Collection, Exfiltration | [`EmailEvents`](../tables/emailevents.md) |
| [High count download from a SAP Privileged account](../content/business-email-compromise---financial-fraud-high-count-download-from-a-sap-privileged-account-2843e796-3d6c-4a78-a815-1db783b346a3.md) | InitialAccess, Exfiltration | - |
| [Login attempts using Legacy Auth](../content/business-email-compromise---financial-fraud-login-attempts-using-legacy-auth-b7918a0a-c6fe-4b6d-9111-b0b0c477f1a8.md) | InitialAccess, Persistence | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Microsoft Entra ID signins from new locations](../content/business-email-compromise---financial-fraud-microsoft-entra-id-signins-from-new-locations-41fa6e2d-afe9-4398-9356-cec3a927e44e.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Office Mail Rule Creation with suspicious archive mail move activity](../content/business-email-compromise---financial-fraud-office-mail-rule-creation-with-suspicious-archive-mail-move-activity-f50a26d7-ffdb-4471-90b9-3be78c60e4f2.md) | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Risky Sign-in with new MFA method](../content/business-email-compromise---financial-fraud-risky-sign-in-with-new-mfa-method-bfacf634-c75e-4291-998c-ecbc0323d943.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [S3 Bucket outbound Data transfer anomaly](../content/business-email-compromise---financial-fraud-s3-bucket-outbound-data-transfer-anomaly-0ef8dee1-eb94-44c8-b59b-2eb096a4b983.md) | Exfiltration | [`AwsBucketAPILogs_CL`](../tables/awsbucketapilogs-cl.md) |
| [Successful Signin From Non-Compliant Device](../content/business-email-compromise---financial-fraud-successful-signin-from-non-compliant-device-99885ff5-00cf-49e8-9452-6de6aba2a5c7.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Suspicious Data Access to S3 Bucket from Unknown IP](../content/business-email-compromise---financial-fraud-suspicious-data-access-to-s3-bucket-from-unknown-ip-669e1338-b1a2-4d73-b720-a1e60d5d1474.md) | Collection | - |
| [User Accounts - New Single Factor Auth](../content/business-email-compromise---financial-fraud-user-accounts---new-single-factor-auth-8eace93b-f38c-47b7-a21d-739556d31db6.md) | InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [User Accounts - Unusual authentications occurring when countries do not conduct normal business operations.](../content/business-email-compromise---financial-fraud-user-accounts---unusual-authentications-occurring-when-countries-do-not-conduct-normal-business-operations.-f56b2223-0d4d-4347-9de4-822d195624ee.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User Login IP Address Teleportation](../content/business-email-compromise---financial-fraud-user-login-ip-address-teleportation-09a7c5fc-0649-4f7d-a21b-36a754cef6b6.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [User detection added to privilege groups based in Watchlist](../content/business-email-compromise---financial-fraud-user-detection-added-to-privilege-groups-based-in-watchlist-8c5bc38a-438d-48fb-ae3f-7f356d3e5ba9.md) | Reconnaissance, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.10       | 10-11-2025                     | Update in **Analytical Rule** alert description                                          |
| 3.0.9       | 05-06-2024                     | **Analytical Rule** description updated                                          |
| 3.0.8       | 04-04-2024                     | Updated **Entity Mappings**                                                     |
| 3.0.7       | 28-02-2024                     | Removed usage of BlastRadius from **Hunting Queries**                        |
| 3.0.6       | 16-02-2024                     | Updated the solution to fix **Analytic Rules** deployment issue                               |
| 3.0.5       | 08-02-2024                     | Tagged for dependent solutions for deployment                                |
| 3.0.4       | 10-01-2024                     | Updated **Analytic Rule** (AuthenticationMethodChangedforPrivilegedAccount.yaml)         |
| 3.0.3       | 23-11-2023                     | Updated description of **Hunting query**                                     | 
| 3.0.2       | 06-11-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR |
| 3.0.1       | 03-11-2023                     | Updated **Analytic Rule** datatype and descriptions for **Hunting queries**  |
| 3.0.0       | 07-08-2023                     | Initial Solution Release                                                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
