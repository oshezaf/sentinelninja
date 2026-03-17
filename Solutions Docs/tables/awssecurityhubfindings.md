# AWSSecurityHubFindings

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSSecurityHubFindings table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awssecurityhubfindings) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awssecurityhubfindings)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AwsAccountId | string | The AWS account ID associated with the event. |
| AwsRegion | string | The AWS region where the event occurred. |
| AwsSecurityFindingCreatedAt | datetime | The timestamp when the security finding was created. |
| AwsSecurityFindingDescription | string | A detailed description of the AWS security finding. |
| AwsSecurityFindingFirstObservedAt | datetime | The timestamp when the security finding was first observed. |
| AwsSecurityFindingGeneratorId | string | The ID of the generator that created the security finding. |
| AwsSecurityFindingId | string | The unique identifier for the AWS security finding. |
| AwsSecurityFindingLastObservedAt | datetime | The timestamp when the security finding was last observed. |
| AwsSecurityFindingProcessedAt | datetime | The timestamp when the security finding was processed. |
| AwsSecurityFindingProductArn | string | The Amazon Resource Name (ARN) of the product that generated the finding. |
| AwsSecurityFindingProductFields | dynamic | Additional fields provided by the product that generated the finding. |
| AwsSecurityFindingProductName | string | The name of the product that generated the finding. |
| AwsSecurityFindingSeverity | dynamic | The severity level of the security finding. |
| AwsSecurityFindingTitle | string | The title of the AWS security finding. |
| AwsSecurityFindingTypes | dynamic | The types or categories of the AWS security finding. |
| AwsSecurityFindingUpdatedAt | datetime | The timestamp when the security finding was last updated. |
| ComplianceAssociatedStandards | dynamic | The compliance standards associated with the resource. |
| ComplianceRelatedRequirements | dynamic | The related compliance requirements. |
| ComplianceSecurityControlId | string | The ID of the security control related to compliance. |
| ComplianceSecurityControlParameters | dynamic | Parameters associated with the security control. |
| ComplianceStatus | string | The compliance status of the resource (e.g., COMPLIANT, NON_COMPLIANT). |
| ComplianceStatusReasons | dynamic | The reasons for the compliance status. |
| RawData | dynamic | The raw data associated with the finding. |
| RecordState | string | The state of the record (e.g., ACTIVE, ARCHIVED). |
| Remediation | dynamic | Details about how to remediate the security finding. |
| Resources | dynamic | The resources associated with the security finding. |
| SchemaVersion | string | The version of the schema used for the finding. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the event was generated. |
| Type | string | The name of the table |
| WorkflowState | string | The workflow state of the finding (e.g., NEW, RESOLVED). |

## Solutions (1)

This table is used by the following solutions:

- [AWS Security Hub](../solutions/aws-security-hub.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [AWS Security Hub Findings (via Codeless Connector Framework)](../connectors/awssecurityhubfindingsccpdefinition.md) |  |

---

## Content Items Using This Table (11)

### Analytic Rules (8)

**In solution [AWS Security Hub](../solutions/aws-security-hub.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AWS Security Hub - Detect CloudTrail trails lacking KMS encryption](../content/aws-security-hub-aws-security-hub-detect-cloudtrail-trails-lacking-kms-encryption-9c2f6c3b-7fd8-4c5a-9d9d-3c4f9e6a7b21-f0d5ec79.md) |  |
| [AWS Security Hub - Detect EC2 Security groups allowing unrestricted high-risk ports](../content/aws-security-hub-aws-security-hub-detect-ec2-security-groups-allowing-unrestricted-high-risk-ports-d2b6fa0f-6a4c-4c48-8c64-5e2e1ac4e7b9-64a6560b.md) |  |
| [AWS Security Hub - Detect IAM Policies allowing full administrative privileges](../content/aws-security-hub-aws-security-hub-detect-iam-policies-allowing-full-administrative-privileges-de1f71d2-d127-439d-a8a2-e64d3187298a-e5815f1e.md) |  |
| [AWS Security Hub - Detect IAM root user Access Key existence](../content/aws-security-hub-aws-security-hub-detect-iam-root-user-access-key-existence-171cbece-be87-4467-8754-63d82b3d3dfb-5ee6a7fb.md) |  |
| [AWS Security Hub - Detect SQS Queue lacking encryption at rest](../content/aws-security-hub-aws-security-hub-detect-sqs-queue-lacking-encryption-at-rest-7b8c5e2d-6f1c-4a1f-9e2a-3c5f7a8b9c10-2f99fc74.md) |  |
| [AWS Security Hub - Detect SQS Queue policy allowing public access](../content/aws-security-hub-aws-security-hub-detect-sqs-queue-policy-allowing-public-access-4f0f3c2a-8d44-43f8-9d9a-5b1e0d5f2c11-e5c6f3b7.md) |  |
| [AWS Security Hub - Detect SSM documents public sharing enabled](../content/aws-security-hub-aws-security-hub-detect-ssm-documents-public-sharing-enabled-0aa20f8c-b8e4-4a34-a5b8-8b2d9dd7d1c2-2776d00c.md) |  |
| [AWS Security Hub - Detect root user lacking MFA](../content/aws-security-hub-aws-security-hub-detect-root-user-lacking-mfa-6b3b9b1d-0d5d-4d4a-9f0f-8d1e2c7a5f44-e099b5c2.md) |  |

### Hunting Queries (3)

**In solution [AWS Security Hub](../solutions/aws-security-hub.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AWS Security Hub - CloudTrail trails without log file validation](../content/aws-security-hub-aws-security-hub-cloudtrail-trails-without-log-file-validation-e40c3c7d-0b6d-4f2d-90a4-4d9d77c2e3f5-632597f9.md) |  |
| [AWS Security Hub - EC2 instances with public IPv4 address](../content/aws-security-hub-aws-security-hub-ec2-instances-with-public-ipv4-address-2b7f9e4e-6c3a-4c8f-9b1d-1a2f3e4c5d6b-a62da3c4.md) |  |
| [AWS Security Hub - IAM users with console password and no MFA](../content/aws-security-hub-aws-security-hub-iam-users-with-console-password-and-no-mfa-d5818873-a2ab-4467-8e97-60fe56ca10cc-19aaeb10.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

