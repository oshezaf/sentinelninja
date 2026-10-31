# CloudAuditEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Cloud audit events for various cloud platforms protected by the organization's Microsoft Defender for Cloud

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudauditevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudauditevents-table) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudauditevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Account | string | The cloud account associated with the audit event. |
| ActionType | string | Type of activity that triggered the event, can be: Unknown, Create, Read, Update, Delete, Other |
| AdditionalFields | dynamic | Additional information about the audit event |
| AuditSource | string | The source of the cloud audit event. |
| AwsResourceName | string | Unique identifier of the AWS resource associated with the audit event. |
| AzureResourceId | string | Unique identifier of the Azure resource associated with the audit event |
| City | string | City where the client IP address is geolocated |
| CountryCode | string | Two-letter code indicating the country where the client IP address is geolocated |
| DataSource | string | Data source for the cloud audit events, can be GCP (for Google Cloud Platform), AWS (for Amazon Web Services), Azure (for Azure Resource Manager), Kubernetes Audit (for Kubernetes), or other cloud platforms |
| GcpFullResourceName | string | Unique identifier of the GCP resource associated with the audit event. |
| IPAddress | string | The client IP address used to access the cloud resource or control plane |
| IsAnonymousProxy | bool | Indicates whether the IP address belongs to a known anonymous proxy (1) or no (0) |
| ISP | string | Internet service provider (ISP) associated with the IP address |
| OperationName | string | Audit event operation name as it appears in the record, usually includes both resource type and operation |
| RawEventData | dynamic | Full raw event information from the data source in JSON format |
| ReportId | string | Unique identifier for the event |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |
| UserAgent | string | User agent information from the web browser or other client application |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [CloudAuditEvents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudauditevents)
- [CloudAuditEvents Schema Reference (Defender XDR)](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudauditevents-table)

## Solutions (1)

This table is used by the following solutions:

- [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

---

## Content Items Using This Table (4)

### Hunting Queries (3)

**In solution [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [K8s token audit then novel cloud control plane operations](../content/hybrid-attack-cloud-&-identity-k8s-token-audit-then-novel-cloud-control-plane-operations-90379ce8-b674-4f81-ac66-7d3c66439fd6-07c603d5.md) |  |
| [Pod cloud CLI then KeyVault or storage access](../content/hybrid-attack-cloud-&-identity-pod-cloud-cli-then-keyvault-or-storage-access-6bc3f56b-2e7f-4820-8aac-f6b40917f931-2ce5980e.md) |  |
| [Pod token tooling then cloud RBAC write](../content/hybrid-attack-cloud-&-identity-pod-token-tooling-then-cloud-rbac-write-7f5d5715-8326-4865-b039-f9968f48de95-3154cdc1.md) |  |

### Workbooks (1)

**In solution [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [HybridAttack-Cloud&Identity](../content/hybrid-attack-cloud-&-identity-hybridattack-cloud&identity-847f4a4f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

