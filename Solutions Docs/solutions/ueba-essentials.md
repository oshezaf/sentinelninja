# UEBA Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="UEBA Essentials Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Microsoft Sentinel UEBA content package will provide you with various queries based on UEBA tables, that allows you to hunt for tailored threat scenarios. You'll be able to investigate and search for anomalous activities over UEBA's enriched data, and get inspired to customize queries according to your own use-cases.

**Important :** Some of the queries that are part of this solution, make use of [Built-in Watchlist Templates](https://docs.microsoft.com/azure/sentinel/watchlist-schemas) and will not work unless the corresponding watchlist is created. Other queries may requires changes to match your environment details.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Hunting |
| [`SigninLogs`](../tables/signinlogs.md) | Hunting |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

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
| [Anomalies on users tagged as VIP](../content/ueba-essentials-anomalies-on-users-tagged-as-vip-028ac38c-f5a4-483b-a58a-aa83d500bf27-67c13b87.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous AWS Console Login Without MFA from Uncommon Country](../content/ueba-essentials-anomalous-aws-console-login-without-mfa-from-uncommon-country-a1b2c3d4-e5f6-7890-abcd-ef1234567890-e27bf283.md) | InitialAccess, CredentialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Activity Role Assignment](../content/ueba-essentials-anomalous-activity-role-assignment-bd6fda76-c0df-41b0-b8cd-808190e1ded0-f28cc576.md) | PrivilegeEscalation | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Code Execution on a Virtual Machine](../content/ueba-essentials-anomalous-code-execution-on-a-virtual-machine-f8ab176c-1f3f-4cb5-8dc1-f50d30bcae0d-1d294e0d.md) | Execution | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Database Export Activity](../content/ueba-essentials-anomalous-database-export-activity-8cf3c78e-cd10-4bfb-bd69-d62dc7f375f1-547bf5ee.md) | Collection | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Database Vulnerability Baseline Removal](../content/ueba-essentials-anomalous-database-vulnerability-baseline-removal-fcb704ae-ac17-400a-9ed9-3c46bd0a3960-5de0e0ef.md) | DefenseEvasion | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Entra High-Privilege Role Modification](../content/ueba-essentials-anomalous-entra-high-privilege-role-modification-8741deeb-332e-4061-8873-5086040920e3-adf63a52.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Anomalous Failed Logon](../content/ueba-essentials-anomalous-failed-logon-77a58c08-bc8e-48b3-8fe9-6c38fd011cd9-d88b0a61.md) | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous First-Time Device Logon](../content/ueba-essentials-anomalous-first-time-device-logon-c3d4e5f6-g7h8-9012-cdef-gh3456789012-95978030.md) | InitialAccess, LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous GCP IAM Activity](../content/ueba-essentials-anomalous-gcp-iam-activity-e5f6g7h8-i9j0-1234-efgh-ij5678901234-7903fc2f.md) | PrivilegeEscalation, Persistence, CredentialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Geo Location Logon](../content/ueba-essentials-anomalous-geo-location-logon-eeea7fb9-21cf-4023-91dc-3f55d7548d14-3faf613a.md) | InitialAccess | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous High-Privileged Role Assignment](../content/ueba-essentials-anomalous-high-privileged-role-assignment-5aa5083c-1de6-42bb-a128-2ec2aba1de39-89a0f496.md) | Persistence | [`AuditLogs`](../tables/auditlogs.md) |
| [Anomalous High-Score Activity Triage](../content/ueba-essentials-anomalous-high-score-activity-triage-a7b8c9d0-e1f2-3456-7890-abcdef123456-fb3e9dc1.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Anomalous Key Vault Modification by High-Privilege User](../content/ueba-essentials-anomalous-key-vault-modification-by-high-privilege-user-202ee40b-e6d8-4968-9a79-cf24c5c09db9-fa6954f8.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Microsoft Entra ID Account Creation](../content/ueba-essentials-anomalous-microsoft-entra-id-account-creation-0454c8d8-d0a6-42a4-8d03-f5b4fdcbd173-21d82dda.md) | Persistence | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Okta First-Time or Uncommon Actions](../content/ueba-essentials-anomalous-okta-first-time-or-uncommon-actions-d4e5f6g7-h8i9-0123-defg-hi4567890123-0ea8a6e8.md) | InitialAccess, CredentialAccess, Persistence | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Password Reset](../content/ueba-essentials-anomalous-password-reset-22b0262c-b6b5-4f15-82a4-93663e9965d7-b04b510f.md) | Impact | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous RDP Activity](../content/ueba-essentials-anomalous-rdp-activity-c01d95d3-ee85-4e7f-9aed-e62356f1de76-f9c1ea17.md) | LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Resource Access](../content/ueba-essentials-anomalous-resource-access-782f3bad-31f7-468f-8f58-3b74fc931914-129885e1.md) | LateralMovement | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous Sign-in by New or Dormant Account](../content/ueba-essentials-anomalous-sign-in-by-new-or-dormant-account-bb3bb9da-9598-4d1f-af78-7cc2fd413b0b-02e8af9c.md) | Persistence | [`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous action performed in tenant by privileged user](../content/ueba-essentials-anomalous-action-performed-in-tenant-by-privileged-user-9ba2b304-7767-4d54-b03c-b0161ae87cc7-f2b7cf70.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomalous connection from highly privileged user](../content/ueba-essentials-anomalous-connection-from-highly-privileged-user-741fdf32-e002-4577-ac9b-839fb49f128e-22b5a707.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md)<br>[`IdentityInfo`](../tables/identityinfo.md) |
| [Anomalous login activity originated from Botnet, Tor proxy or C2](../content/ueba-essentials-anomalous-login-activity-originated-from-botnet,-tor-proxy-or-c2-c3b09dd3-ee50-41ae-b863-8603620e5f48-79aee61c.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Anomaly Detection Trend Analysis](../content/ueba-essentials-anomaly-detection-trend-analysis-d0e1f2a3-b4c5-6789-0123-def456789012-8fe6ea06.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Anomaly Template Distribution by Tactics and Techniques](../content/ueba-essentials-anomaly-template-distribution-by-tactics-and-techniques-b8c9d0e1-f2a3-4567-8901-bcdef2345678-bf92b782.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Dormant Local Admin Logon](../content/ueba-essentials-dormant-local-admin-logon-2e20ec77-8d50-4959-a70d-79c341ee2c37-d3f55f49.md) | PrivilegeEscalation | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Dormant account activity from uncommon country](../content/ueba-essentials-dormant-account-activity-from-uncommon-country-7c303408-f913-42f8-8d7b-9eb64a229c4d-510c1ff6.md) | - | *Internal use:*<br>[`BehaviorAnalytics`](../tables/behavioranalytics.md) |
| [Top Anomalous Source IP Triage](../content/ueba-essentials-top-anomalous-source-ip-triage-e1f2a3b4-c5d6-7890-1234-abcdef567890-63722402.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [UEBA Multi-Source Anomalous Activity Overview](../content/ueba-essentials-ueba-multi-source-anomalous-activity-overview-b2c3d4e5-f6g7-8901-bcde-fg2345678901-43dc4d3b.md) | InitialAccess, CredentialAccess, Persistence, PrivilegeEscalation | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [User-Centric Anomaly Investigation](../content/ueba-essentials-user-centric-anomaly-investigation-c9d0e1f2-a3b4-5678-9012-cdef34567890-0fcdf7d4.md) | - | *Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.3       | 24-11-2025                     | Added new **Hunting Queries**                                          	               |
| 3.0.2       | 04-11-2025                     | Enhance UEBA Essentials with multi-cloud detection capabilities        	               |
| 3.0.1       | 23-09-2024                     | Updated query logic in **Hunting Query** [Anomalous Sign-in Activity]                     |
| 3.0.0       | 07-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.   |
| 4.1.0       | 23-11-2025                     | Added new hunting queries: User-Centric Anomaly Investigation, Anomaly Detection Trend Analysis, Anomaly Template Distribution, Anomalous High-Score Activity Triage, Top Anomalous Source IP Triage. Updated solution version. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

