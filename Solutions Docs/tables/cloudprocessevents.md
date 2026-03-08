# CloudProcessEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Cloud process events for various cloud platforms protected by the organization's Microsoft Defender for Containers

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-cloudprocessevents-table) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cloudprocessevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
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
| Timestamp | datetime | Date and time when the event was recorded |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

