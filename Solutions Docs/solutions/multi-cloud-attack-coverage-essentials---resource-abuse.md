# Multi Cloud Attack Coverage Essentials - Resource Abuse

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2023-11-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Analytics |
| [`AWSGuardDuty`](../tables/awsguardduty.md) | Analytics |
| [`GCPAuditLogs`](../tables/gcpauditlogs.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`IdentityInfo`](../tables/identityinfo.md) | Analytics |
| [`SecurityAlert`](../tables/securityalert.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cross-Cloud Password Spray detection](../content/multi-cloud-attack-coverage-essentials---resource-abuse-cross-cloud-password-spray-detection-1f40ed57-f54b-462f-906a-ac3a89cc90d4.md) | Medium | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Cross-Cloud Suspicious Compute resource creation in GCP](../content/multi-cloud-attack-coverage-essentials---resource-abuse-cross-cloud-suspicious-compute-resource-creation-in-gcp-5c847e47-0a07-4c01-ab99-5817ad6cb11e.md) | Low | InitialAccess, Execution, Persistence, PrivilegeEscalation, CredentialAccess, Discovery, LateralMovement | [`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/multi-cloud-attack-coverage-essentials---resource-abuse-cross-cloud-suspicious-user-activity-observed-in-gcp-envourment-58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7.md) | Medium | InitialAccess, Execution, Persistence, PrivilegeEscalation, CredentialAccess, Discovery | [`GCPAuditLogs`](../tables/gcpauditlogs.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/multi-cloud-attack-coverage-essentials---resource-abuse-cross-cloud-unauthorized-credential-access-detection-from-aws-rds-login-122fbc6a-57ab-4aa7-b9a9-51ac4970cac1.md) | Medium | CredentialAccess, InitialAccess | [`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials---resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials---resource-abuse-successful-aws-console-login-from-ip-address-observed-conducting-password-spray-188db479-d50a-4a9c-a041-644bae347d1f.md) | Medium | InitialAccess, CredentialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-suspicious-aws-console-logins-by-credential-access-alerts-b51fe620-62ad-4ed2-9d40-5c97c0a8231f.md) | Medium | InitialAccess, CredentialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized user access across AWS and Azure](../content/multi-cloud-attack-coverage-essentials---resource-abuse-unauthorized-user-access-across-aws-and-azure-60f31001-018a-42bf-8045-a92e1f361b7b.md) | Medium | CredentialAccess, Exfiltration, Discovery | [`AWSGuardDuty`](../tables/awsguardduty.md) |
| [User impersonation by Identity Protection alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-user-impersonation-by-identity-protection-alerts-11c3d541-5fa5-49df-8218-d1c98584473b.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 07-06-2024                     | Analytical Rule description updated                                |
| 3.0.2       | 08-04-2024                     | Added Account and FullName in entity mapping                       |
| 3.0.1       | 23-02-2024                     | Tagged for dependent solutions for deployment                      |
| 3.0.0       | 22-11-2023                     | Initial Release                                                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
