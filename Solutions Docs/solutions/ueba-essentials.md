# UEBA Essentials

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | Hunting |

### Internal Tables

The following **3 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Hunting |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | Hunting |
| [`IdentityInfo`](../tables/identityinfo.md) | Hunting |

## Content Items

This solution includes **30 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 30 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Anomalies on users tagged as VIP](../content/028ac38c-f5a4-483b-a58a-aa83d500bf27.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous AWS Console Login Without MFA from Uncommon Country](../content/a1b2c3d4-e5f6-7890-abcd-ef1234567890.md) | InitialAccess, CredentialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Activity Role Assignment](../content/bd6fda76-c0df-41b0-b8cd-808190e1ded0.md) | PrivilegeEscalation | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Code Execution on a Virtual Machine](../content/f8ab176c-1f3f-4cb5-8dc1-f50d30bcae0d.md) | Execution | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Database Export Activity](../content/8cf3c78e-cd10-4bfb-bd69-d62dc7f375f1.md) | Collection | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Database Vulnerability Baseline Removal](../content/fcb704ae-ac17-400a-9ed9-3c46bd0a3960.md) | DefenseEvasion | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Entra High-Privilege Role Modification](../content/8741deeb-332e-4061-8873-5086040920e3.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Anomalous Failed Logon](../content/77a58c08-bc8e-48b3-8fe9-6c38fd011cd9.md) | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous First-Time Device Logon](../content/c3d4e5f6-g7h8-9012-cdef-gh3456789012.md) | InitialAccess, LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous GCP IAM Activity](../content/e5f6g7h8-i9j0-1234-efgh-ij5678901234.md) | PrivilegeEscalation, Persistence, CredentialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Geo Location Logon](../content/eeea7fb9-21cf-4023-91dc-3f55d7548d14.md) | InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous High-Privileged Role Assignment](../content/5aa5083c-1de6-42bb-a128-2ec2aba1de39.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Anomalous High-Score Activity Triage](../content/a7b8c9d0-e1f2-3456-7890-abcdef123456.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Anomalous Key Vault Modification by High-Privilege User](../content/202ee40b-e6d8-4968-9a79-cf24c5c09db9.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Microsoft Entra ID Account Creation](../content/0454c8d8-d0a6-42a4-8d03-f5b4fdcbd173.md) | Persistence | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Okta First-Time or Uncommon Actions](../content/d4e5f6g7-h8i9-0123-defg-hi4567890123.md) | InitialAccess, CredentialAccess, Persistence | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Password Reset](../content/22b0262c-b6b5-4f15-82a4-93663e9965d7.md) | Impact | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous RDP Activity](../content/c01d95d3-ee85-4e7f-9aed-e62356f1de76.md) | LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Resource Access](../content/782f3bad-31f7-468f-8f58-3b74fc931914.md) | LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Sign-in by New or Dormant Account](../content/bb3bb9da-9598-4d1f-af78-7cc2fd413b0b.md) | Persistence | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous action performed in tenant by privileged user](../content/9ba2b304-7767-4d54-b03c-b0161ae87cc7.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous connection from highly privileged user](../content/741fdf32-e002-4577-ac9b-839fb49f128e.md) | - | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Anomalous login activity originated from Botnet, Tor proxy or C2](../content/c3b09dd3-ee50-41ae-b863-8603620e5f48.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomaly Detection Trend Analysis](../content/d0e1f2a3-b4c5-6789-0123-def456789012.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Anomaly Template Distribution by Tactics and Techniques](../content/b8c9d0e1-f2a3-4567-8901-bcdef2345678.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Dormant Local Admin Logon](../content/2e20ec77-8d50-4959-a70d-79c341ee2c37.md) | PrivilegeEscalation | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Dormant account activity from uncommon country](../content/7c303408-f913-42f8-8d7b-9eb64a229c4d.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Top Anomalous Source IP Triage](../content/e1f2a3b4-c5d6-7890-1234-abcdef567890.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [UEBA Multi-Source Anomalous Activity Overview](../content/b2c3d4e5-f6g7-8901-bcde-fg2345678901.md) | InitialAccess, CredentialAccess, Persistence, PrivilegeEscalation | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [User-Centric Anomaly Investigation](../content/c9d0e1f2-a3b4-5678-9012-cdef34567890.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.3       | 24-11-2025                     | Added new **Hunting Queries**                                          	               |
| 3.0.2       | 04-11-2025                     | Enhance UEBA Essentials with multi-cloud detection capabilities        	               |
| 3.0.1       | 23-09-2024                     | Updated query logic in **Hunting Query** [Anomalous Sign-in Activity]                     |
| 3.0.0       | 07-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.   |
| 4.1.0       | 23-11-2025                     | Added new hunting queries: User-Centric Anomaly Investigation, Anomaly Detection Trend Analysis, Anomaly Template Distribution, Anomalous High-Score Activity Triage, Top Anomalous Source IP Triage. Updated solution version. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
