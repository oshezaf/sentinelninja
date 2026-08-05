# CloudProcessEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CloudProcessEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudprocessevents) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudprocessevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountName | string | User name of the account |
| ActionType | string | Type of activity that triggered the event. See the in-portal schema reference for details. |
| AdditionalFields | string | Additional information about the event in JSON array format |
| AwsResourceName | string | Unique identifier specific to Amazon Web Services devices, containing the Amazon resource name |
| AzureResourceId | string | Unique identifier of the Azure resource associated with the process |
| ContainerId | string | The container identifier in Kubernetes or another runtime environment |
| ContainerImageName | string | The container image name or ID, if it exists |
| ContainerName | string | Name of the container in Kubernetes or another runtime environment |
| FileName | string | Name of the file that the recorded action was applied to |
| FolderPath | string | Folder containing the file that the recorded action was applied to |
| GcpFullResourceName | string | Unique identifier specific to Google Cloud Platform devices, containing a combination of zone and ID for GCP |
| InitiatingProcessId | string | Process ID (PID) of the process that initiated the event |
| KubernetesNamespace | string | The Kubernetes namespace name |
| KubernetesPodName | string | The Kubernetes pod name |
| KubernetesResource | string | Identifier value that includes namespace, resource type and name |
| LogonId | long | Identifier for a logon session. This identifier is unique on the same pod or container between restarts. |
| ParentProcessId | string | The process ID (PID) of the parent process |
| ParentProcessName | string | The name of the parent process |
| ProcessCommandLine | string | Command line used to create the new process |
| ProcessCreationTime | datetime | Date and time the process was created |
| ProcessCurrentWorkingDirectory | string | Current working directory of the running process |
| ProcessId | long | Process ID (PID) of the newly created process |
| ProcessName | string | The name of the process |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [CloudProcessEvents Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudprocessevents)

## Solutions (1)

This table is used by the following solutions:

- [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

---

## Content Items Using This Table (3)

### Hunting Queries (2)

**In solution [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
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

