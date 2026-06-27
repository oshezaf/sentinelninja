# CloudDnsEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CloudDnsEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/clouddnsevents) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/clouddnsevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
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
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| TransactionIdHex | string | The DNS unique hex transaction ID |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [CloudDnsEvents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/clouddnsevents)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

