# AWSSecurityHubFindings

Reference for AWSSecurityHubFindings table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awssecurityhubfindings) |

## Solutions (1)

This table is used by the following solutions:

- [AWS Security Hub](../solutions/aws-security-hub.md)

## Connectors (1)

This table is ingested by the following connectors:

- [AWS Security Hub Findings (via Codeless Connector Framework)](../connectors/awssecurityhubfindingsccpdefinition.md)

---

## Content Items Using This Table (11)

### Analytic Rules (8)

**In solution [AWS Security Hub](../solutions/aws-security-hub.md):**
- [AWS Security Hub - Detect CloudTrail trails lacking KMS encryption](../content/9c2f6c3b-7fd8-4c5a-9d9d-3c4f9e6a7b21.md)
- [AWS Security Hub - Detect EC2 Security groups allowing unrestricted high-risk ports](../content/d2b6fa0f-6a4c-4c48-8c64-5e2e1ac4e7b9.md)
- [AWS Security Hub - Detect IAM Policies allowing full administrative privileges](../content/de1f71d2-d127-439d-a8a2-e64d3187298a.md)
- [AWS Security Hub - Detect IAM root user Access Key existence](../content/171cbece-be87-4467-8754-63d82b3d3dfb.md)
- [AWS Security Hub - Detect SQS Queue lacking encryption at rest](../content/7b8c5e2d-6f1c-4a1f-9e2a-3c5f7a8b9c10.md)
- [AWS Security Hub - Detect SQS Queue policy allowing public access](../content/4f0f3c2a-8d44-43f8-9d9a-5b1e0d5f2c11.md)
- [AWS Security Hub - Detect SSM documents public sharing enabled](../content/0aa20f8c-b8e4-4a34-a5b8-8b2d9dd7d1c2.md)
- [AWS Security Hub - Detect root user lacking MFA](../content/6b3b9b1d-0d5d-4d4a-9f0f-8d1e2c7a5f44.md)

### Hunting Queries (3)

**In solution [AWS Security Hub](../solutions/aws-security-hub.md):**
- [AWS Security Hub - CloudTrail trails without log file validation](../content/e40c3c7d-0b6d-4f2d-90a4-4d9d77c2e3f5.md)
- [AWS Security Hub - EC2 instances with public IPv4 address](../content/2b7f9e4e-6c3a-4c8f-9b1d-1a2f3e4c5d6b.md)
- [AWS Security Hub - IAM users with console password and no MFA](../content/d5818873-a2ab-4467-8e97-60fe56ca10cc.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
