# AWS Security Hub

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS Security Hub Logo" width="75" height="75">

AWS Security Hub Solution for Microsoft Sentinel provides data connector to ingest AWS Security Hub findings into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft |
| **First Published** | 2025-03-12 |
| **Last Updated** | 2025-03-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Security%20Hub) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [AWS Security Hub Findings (via Codeless Connector Framework)](../connectors/awssecurityhubfindingsccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) | [AWS Security Hub Findings (via Codeless Connector Framework)](../connectors/awssecurityhubfindingsccpdefinition.md) | Analytics, Hunting |

## Content Items

This solution includes **11 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Hunting Queries | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AWS Security Hub - Detect CloudTrail trails lacking KMS encryption](../content/aws-security-hub-aws-security-hub-detect-cloudtrail-trails-lacking-kms-encryption-9c2f6c3b-7fd8-4c5a-9d9d-3c4f9e6a7b21-f0d5ec79.md) | Medium | Impact, DefenseEvasion | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect EC2 Security groups allowing unrestricted high-risk ports](../content/aws-security-hub-aws-security-hub-detect-ec2-security-groups-allowing-unrestricted-high-risk-ports-d2b6fa0f-6a4c-4c48-8c64-5e2e1ac4e7b9-64a6560b.md) | High | InitialAccess, LateralMovement, Discovery | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect IAM Policies allowing full administrative privileges](../content/aws-security-hub-aws-security-hub-detect-iam-policies-allowing-full-administrative-privileges-de1f71d2-d127-439d-a8a2-e64d3187298a-e5815f1e.md) | High | Persistence, PrivilegeEscalation | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect IAM root user Access Key existence](../content/aws-security-hub-aws-security-hub-detect-iam-root-user-access-key-existence-171cbece-be87-4467-8754-63d82b3d3dfb-5ee6a7fb.md) | High | PrivilegeEscalation, Persistence | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect SQS Queue lacking encryption at rest](../content/aws-security-hub-aws-security-hub-detect-sqs-queue-lacking-encryption-at-rest-7b8c5e2d-6f1c-4a1f-9e2a-3c5f7a8b9c10-2f99fc74.md) | Medium | Impact | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect SQS Queue policy allowing public access](../content/aws-security-hub-aws-security-hub-detect-sqs-queue-policy-allowing-public-access-4f0f3c2a-8d44-43f8-9d9a-5b1e0d5f2c11-e5c6f3b7.md) | High | Exfiltration, Collection | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect SSM documents public sharing enabled](../content/aws-security-hub-aws-security-hub-detect-ssm-documents-public-sharing-enabled-0aa20f8c-b8e4-4a34-a5b8-8b2d9dd7d1c2-2776d00c.md) | High | Execution | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - Detect root user lacking MFA](../content/aws-security-hub-aws-security-hub-detect-root-user-lacking-mfa-6b3b9b1d-0d5d-4d4a-9f0f-8d1e2c7a5f44-e099b5c2.md) | High | PrivilegeEscalation, Persistence, CredentialAccess, DefenseEvasion | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [AWS Security Hub - CloudTrail trails without log file validation](../content/aws-security-hub-aws-security-hub-cloudtrail-trails-without-log-file-validation-e40c3c7d-0b6d-4f2d-90a4-4d9d77c2e3f5-632597f9.md) | DefenseEvasion | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - EC2 instances with public IPv4 address](../content/aws-security-hub-aws-security-hub-ec2-instances-with-public-ipv4-address-2b7f9e4e-6c3a-4c8f-9b1d-1a2f3e4c5d6b-a62da3c4.md) | InitialAccess, Exfiltration | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |
| [AWS Security Hub - IAM users with console password and no MFA](../content/aws-security-hub-aws-security-hub-iam-users-with-console-password-and-no-mfa-d5818873-a2ab-4467-8e97-60fe56ca10cc-19aaeb10.md) | PrivilegeEscalation, CredentialAccess, DefenseEvasion | [`AWSSecurityHubFindings`](../tables/awssecurityhubfindings.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 27-08-2025                     | AWS Security Hub added **Analytical Rule** and **Hunting Queries** |
| 3.0.1       | 27-06-2025                     | AWS Security Hub **CCF Data Connector** moving to GA |
| 3.0.0       | 14-05-2025                     | New **Data Connector**, Pre Release    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

