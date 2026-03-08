# AWSGuardDuty

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSGuardDuty table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsguardduty) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsguardduty)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountId | string | The AWS account ID of the owner of the source network interface for which traffic is recorded. If the network interface is created by an AWS service, for example when creating a VPC endpoint or Network Load Balancer, the record may display unknown for this field. |
| ActivityType | string | A formatted string representing the type of activity that triggered the finding. |
| Arn | string | Amazon resource name of the finding. |
| Description | string | Description of the primary purpose of the threat or attack related to the finding. |
| Id | string | A unique Finding ID for this finding type and set of parameters. New occurrences of activity matching this pattern will be aggregated to the same ID. |
| Partition | string | The AWS partition in which the finding was generated. |
| Region | string | The AWS region in which the finding was generated. |
| ResourceDetails | dynamic | Gives details on the AWS resource that was targeted by the trigger activity. The information available varies based on resource type and action typ. |
| SchemaVersion | string | The Guard Duty finding version. |
| ServiceDetails | dynamic | Gives details on the AWS service that was related to the finding, including Action, Actor/Target, Evidence, Anomalous behavior and Additional information. |
| Severity | int | A finding's assigned severity level of either High, Medium, or Low. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeCreated | datetime | The time and date when this finding was first created. If this value differs from Updated at (TimeGenerated), it indicates that the activity has occurred multiple times and is an ongoing issue. |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated, The last time this finding was updated with new activity matching the pattern that prompted GuardDuty to generate this finding. |
| Title | string | Summary of the primary purpose of the threat or attack related to the finding. |
| Type | string | The name of the table |

## Solutions (3)

This table is used by the following solutions:

- [Amazon Web Services](../solutions/amazon-web-services.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services S3](../connectors/awss3.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (4)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AWS Guard Duty Alert](../content/amazon-web-services-aws-guard-duty-alert-bf0cde21-0c41-48f6-a40c-6b5bd71fa106-45d522a8.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Suspicious Compute resource creation in GCP](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-compute-resource-creation-i-5c847e47-0a07-4c01-ab99-5817ad6cb11e-be6ace2e.md) |  |
| [Cross-Cloud Unauthorized Credential Access Detection From AWS RDS Login](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-unauthorized-credential-access-detecti-122fbc6a-57ab-4aa7-b9a9-51ac4970cac1-bb7f7aa6.md) |  |
| [Unauthorized user access across AWS and Azure](../content/multi-cloud-attack-coverage-essentials-resource-abuse-unauthorized-user-access-across-aws-and-azure-60f31001-018a-42bf-8045-a92e1f361b7b-6d3ff85e.md) |  |

### Workbooks (1)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

