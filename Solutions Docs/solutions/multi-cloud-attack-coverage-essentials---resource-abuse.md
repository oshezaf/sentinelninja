# Multi Cloud Attack Coverage Essentials - Resource Abuse

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Multi Cloud Attack Coverage Essentials - Resource Abuse Logo" width="75" height="75">

The rise of Multi Cloud Resource Abuse attacks poses a significant threat to the security and integrity of cloud infrastructures. These attacks target the vulnerabilities within AWS, GCP, and Azure cloud environments, aiming to exploit misconfigurations, weak access controls, or compromised credentials to gain unauthorized access, manipulate resources, and extract valuable data across diverse cloud platforms. The Multi Cloud Resource Abuse Attack Solution is designed to fortify the detection and prevention measures against such malicious activities. By integrating detection capabilities across AWS, GCP, and Azure cloud infrastructures, this solution offers a set of detection strategies across various cloud platforms, including AWS, GCP, and Azure, aiming to identify abnormal activities, unauthorized access attempts, resource misuse, and data exfiltration. The solution encompasses log monitoring, anomaly detection, and behaviour analysis to detect and respond to potential breaches or abuses. This solution extends its coverage to include a wide array of cloud-based services such as AWS IAM, Azure AD, GCP IAM, storage services, and more, ensuring a comprehensive approach to identifying, mitigating, and responding to potential threats.

 **Pre-requisites:**

 This is a [domain solution](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Flearn.microsoft.com%2Fazure%2Fsentinel%2Fsentinel-solutions-catalog%23domain-solutions&data=05%7C01%7Cv-sudkharat%40microsoft.com%7C8ec0502d0fb449debbc108dbe9849194%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638360527889561785%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=XyqFj%2FfDBffyAPs4haVuOLs0g3vFY6jt%2B8pe%2F9gk0%2B0%3D&reserved=0) and does not include any data connectors. To achieve the most robust protection against Multi Cloud Resource Abuse, it is recommended to deploy this solution in conjunction with complementary tools and solutions across the cloud platforms. Install one or more of the listed solutions to unlock the value provided by this solution. 

 1. Microsoft Defender XDR

 2. Microsoft Entra ID

 3. Amazon Web Services

 4. Google Cloud Platform IAM

 5. Google Cloud Platform Audit Logs 

This content covers all stages of the attack chain from an initial resource access attack vector, establishing persistence to an environment, locating and executing malicious activity from data stores, and then perpetrating and hiding their activity. This range of content complements the coverage Microsoft 365 Defender provides across Microsoft Defender products: https://learn.microsoft.com/microsoft-365/security/defender/automatic-attack-disruption

**Keywords:** Multi-cloud, Cross-cloud, AWS, GCP, GuardDuty, AWS GuardDuty, GCP Security, Security Console, Cloud abuse, Resource Abuse

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-11-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Multi%20Cloud%20Attack%20Coverage%20Essentials%20-%20Resource%20Abuse) |
| **Dependencies** | [Microsoft Defender XDR](microsoft-defender-xdr.md), [Microsoft Entra ID](microsoft-entra-id.md), [Amazon Web Services](amazon-web-services.md), [GoogleCloudPlatformIAM](googlecloudplatformiam.md), [Google Cloud Platform Audit Logs](google-cloud-platform-audit-logs.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

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
| [Cross-Cloud Password Spray detection](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-password-spray-detection-1f40ed57-f54b-462f-906a-ac3a89cc90d4-5128b308.md) | Medium | CredentialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Cross-Cloud Suspicious Compute resource creation in GCP](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-compute-resource-creation-i-5c847e47-0a07-4c01-ab99-5817ad6cb11e-be6ace2e.md) | Low | InitialAccess, Execution, Persistence, PrivilegeEscalation, CredentialAccess, Discovery, LateralMovement | [`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`GCPAuditLogs`](../tables/gcpauditlogs.md) |
| [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-user-activity-observed-in-g-58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7-36b1a06d.md) | Medium | InitialAccess, Execution, Persistence, PrivilegeEscalation, CredentialAccess, Discovery | [`GCPAuditLogs`](../tables/gcpauditlogs.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-unauthorized-credential-access-detecti-122fbc6a-57ab-4aa7-b9a9-51ac4970cac1-bb7f7aa6.md) | Medium | CredentialAccess, InitialAccess | [`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials-resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475-11195fd6.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials-resource-abuse-successful-aws-console-login-from-ip-address-obser-188db479-d50a-4a9c-a041-644bae347d1f-57aa98e4.md) | Medium | InitialAccess, CredentialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-suspicious-aws-console-logins-by-credential-access-b51fe620-62ad-4ed2-9d40-5c97c0a8231f-dbe5a529.md) | Medium | InitialAccess, CredentialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Unauthorized user access across AWS and Azure](../content/multi-cloud-attack-coverage-essentials-resource-abuse-unauthorized-user-access-across-aws-and-azure-60f31001-018a-42bf-8045-a92e1f361b7b-6d3ff85e.md) | Medium | CredentialAccess, Exfiltration, Discovery | [`AWSGuardDuty`](../tables/awsguardduty.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [User impersonation by Identity Protection alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-user-impersonation-by-identity-protection-alerts-11c3d541-5fa5-49df-8218-d1c98584473b-06b1ea41.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

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
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

