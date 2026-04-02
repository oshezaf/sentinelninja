# CloudPolicyEnforcementEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Policy enforcement evaluation decisions and metadata of security gating events for various cloud platforms protected by the organization's Microsoft Defender for Cloud

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudpolicyenforcementevents-table) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudpolicyenforcementevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActionType | string | Type of activity that resulted from the policy enforcement operation; possible values: Audit, Deny, or Allow |
| AdditionalFields | string | Additional information about the entity or event |
| AwsResourceName | string | Unique identifier specific to Amazon Web Services devices, containing the Amazon resource name |
| AzureResourceId | string | Unique identifier of the Azure resource associated with the event |
| DataSource | string | Data source of the cloud events; possible values: Google Kubernetes Engine, Elastic Kubernetes Service, or Azure Kubernetes Service |
| GcpFullResourceName | string | Unique identifier specific to Google Cloud Platform devices, containing a combination of zone and ID for GCP |
| KubernetesNamespace | string | The Kubernetes namespace name |
| Reason | string | Information explaining the action result |
| Region | string | The region associated with the Kubernetes cluster |
| ReportId | string | Unique identifier for the event |
| ResourceKind | string | Type or kind of Kubernetes resource created or managed (for example, pod or deployment) |
| ResourceName | string | Name of the Kubernetes resource |
| SubscriptionId | string | Unique identifier assigned to the Azure subscription |
| Timestamp | datetime | Date and time when the record was generated |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

