# CloudDnsEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

DNS activity events from cloud infrastructure environments

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-clouddnsevents-table) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/clouddnsevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActionType | string | Type of activity that triggered the event |
| AdditionalFields | dynamic | Additional information about the entity or event |
| AwsResourceName | string | Unique identifier specific to Amazon Web Services devices, containing the Amazon resource name |
| AzureResourceId | string | Unique identifier of the Azure resource associated with the process |
| ContainerId | string | The container identifier in Kubernetes or another runtime environment |
| ContainerName | string | Name of the container in Kubernetes or another runtime environment |
| DnsEventSubType | string | Either request or response |
| DnsEventType | string | Type of event associated with DNS operation (for example, query) |
| DnsNetworkDuration | long | The DNS request duration in milliseconds |
| DnsQuery | string | The domain that needs to be resolved |
| DnsQueryTypeName | string | The DNS resource record type name as defined by the Internet Assigned Numbers Authority (IANA) |
| DnsResponseCodeName | string | The DNS response code name as defined by the Internet Assigned Numbers Authority (IANA). |
| GcpFullResourceName | string | Unique identifier specific to Google Cloud Platform devices, containing a combination of zone and ID for GCP |
| ImageName | string | Container image name or ID |
| KubernetesNamespace | string | The Kubernetes namespace name |
| KubernetesPodName | string | The Kubernetes pod name |
| KubernetesResource | string | Unique identifier for the Kubernetes resource that includes the namespace, resource type and name |
| ProcessId | long | Process ID that initiated the DNS query |
| ProcessName | string | The name of the process that initiated the DNS query |
| ReportId | string | Unique identifier for the event |
| Timestamp | datetime | Date and time when the event was recorded |
| TransactionIdHex | string | The DNS unique hex transaction ID |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

