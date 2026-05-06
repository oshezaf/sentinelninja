# GCPAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpauditlogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AuthenticationInfo | dynamic | Authentication information. |
| AuthorizationInfo | dynamic | Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. |
| GCPResourceName | string | The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. |
| GCPResourceType | string | The identifier of the type associated with this resource, such as 'pubsub_subscription'. |
| InsertId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| LogName | string | Information including a suffix identifying the log sub-type (e.g., admin activity, system access, data access) and where in the hierarchy the request was made. |
| Metadata | dynamic | Other service-specific data about the request, response, and other information associated with the current audited event. |
| MethodName | string | The name of the service method or operation. For API calls, this should be the name of the API method. |
| NumResponseItems | string | The number of items returned from a list or query API method, if applicable. |
| PrincipalEmail | string | The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the principalSubject field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. |
| ProjectId | string | The identifier of the Google Cloud Platform (GCP) project associated with this resource, such as "my-project". |
| Request | dynamic | The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the@typeproperty. |
| RequestMetadata | dynamic | Metadata about the operation. |
| ResourceLocation | dynamic | The resource location information. |
| ResourceOriginalState | dynamic | The resource original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in request, response, metadata or serviceData fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the@typeproperty. |
| Response | dynamic | The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the@typeproperty. |
| ServiceData | dynamic | An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" }. |
| ServiceName | string | The name of the API service performing the operation. For example, 'compute.googleapis.com'. |
| Severity | string | Optional. The severity of the log entry. For example, the following filter expression will match log entries with severities INFO, NOTICE, and WARNING. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | dynamic | The status of the overall operation. |
| StatusMessage | string | The message status of the overall operation. |
| Subscription | string | A named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the log entry was received by logging. |
| Timestamp | datetime | The time the event described by the log entry occurred. |
| Type | string | The name of the table |

## Solutions (2)

This table is used by the following solutions:

- [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Pub/Sub Audit Logs](../connectors/gcpauditlogsdefinition.md) |  |
| [GCP Pub/Sub Audit Logs](../connectors/gcppub-subauditlogs.md) |  |

---

## Content Items Using This Table (14)

### Analytic Rules (9)

**In solution [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GCP Audit Logs - DNSSEC Disabled on Managed DNS Zone](../content/google-cloud-platform-audit-logs-gcp-audit-logs-dnssec-disabled-on-managed-dns-zone-9129a43e-e204-4a9a-969e-d8861ce3437c-ca50f855.md) | `GCPResourceType == "dns_managed_zone"`<br>`MethodName in "dns.managedZones.patch,dns.managedZones.update"`<br>`ServiceName == "dns.googleapis.com"`<br>`Severity == "NOTICE"` |
| [GCP Audit Logs - Data Access Logging Exemption Added for Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-data-access-logging-exemption-added-for-principal-b7da45ce-fcc8-43c7-a37c-c08454579d26-e999603f.md) | `GCPResourceType == "project"`<br>`MethodName == "SetIamPolicy"`<br>`ServiceName == "cloudresourcemanager.googleapis.com"` |
| [GCP Audit Logs - Detect Bulk VM Snapshot Deletion](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-bulk-vm-snapshot-deletion-dfdffdc7-929f-4c7e-8f48-30e5ffddb067-3282e1dc.md) | `GCPResourceType == "gce_snapshot"`<br>`MethodName has "compute.snapshots.delete"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` |
| [GCP Audit Logs - Detect Organization Policy Deletion or Updation](../content/google-cloud-platform-audit-logs-gcp-audit-logs-detect-organization-policy-deletion-or-updation-205e1c9f-faee-43f1-b3b8-1952ffbbeea4-804699fa.md) | `MethodName has_any "OrgPolicy.DeletePolicy"`<br>`ServiceName == "orgpolicy.googleapis.com"` |
| [GCP Audit Logs - Open Firewall Rule Created or Modified](../content/google-cloud-platform-audit-logs-gcp-audit-logs-open-firewall-rule-created-or-modified-8061c611-55f1-4ee5-a8f8-8f19f2c7aab2-cd842d29.md) | `GCPResourceType == "gce_firewall_rule"`<br>`MethodName has "insert"`<br>`MethodName has "patch"`<br>`MethodName has_any "firewalls.insert"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` |
| [GCP Audit Logs - Storage Bucket Made Public](../content/google-cloud-platform-audit-logs-gcp-audit-logs-storage-bucket-made-public-3a8d7f9e-4b2c-4e5d-8c6b-9f1a3d5e8c7b-41a0a082.md) | `GCPResourceType == "gcs_bucket"`<br>`MethodName == "storage.setIamPermissions"`<br>`ServiceName == "storage.googleapis.com"` |
| [GCP Audit Logs - VPC Flow Logs Disabled](../content/google-cloud-platform-audit-logs-gcp-audit-logs-vpc-flow-logs-disabled-8f3e9c2d-5b4a-4d6e-9a7c-2f8b5e1d3c9a-acd074a8.md) | `MethodName has "DeleteVpcFlowLogsConfig"`<br>`MethodName has_any "VpcFlowLogsService.UpdateVpcFlowLogsConfig"`<br>`ServiceName == "networkmanagement.googleapis.com"` |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Suspicious Compute resource creation in GCP](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-compute-resource-creation-i-5c847e47-0a07-4c01-ab99-5817ad6cb11e-be6ace2e.md) |  |
| [Cross-Cloud Suspicious user activity observed in GCP Envourment](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-suspicious-user-activity-observed-in-g-58e306fe-1c49-4b8f-9b0e-15f25e8f0cd7-36b1a06d.md) | `AuthenticationInfo !has "system:"`<br>`PrincipalEmail !endswith "gserviceaccount.com"` |

### Hunting Queries (5)

**In solution [Google Cloud Platform Audit Logs](../solutions/google-cloud-platform-audit-logs.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [GCP Audit Logs - List Activities Disabling Data Access Logging for GCP Services](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-activities-disabling-data-access-logging-for-gcp-se-8f3a9b2d-5c6e-4a1f-9d8c-3e7b4f9a6c2d-0d14abaa.md) | `GCPResourceType == "project"`<br>`MethodName == "SetIamPolicy"`<br>`ServiceName == "cloudresourcemanager.googleapis.com"` |
| [GCP Audit Logs - List All GCP Firewall Operations by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-firewall-operations-by-principal-9c4b2f7e-6d8a-4e9b-8f5c-2a3d7e9f6b4a-58341b5a.md) | `GCPResourceType == "gce_firewall_rule"`<br>`MethodName has "delete"`<br>`MethodName has "insert"`<br>`MethodName has "patch"`<br>`MethodName has "update"`<br>`MethodName has_any "compute.firewalls.insert"`<br>`ServiceName == "compute.googleapis.com"` |
| [GCP Audit Logs - List All GCP VPN Tunnels Created](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-created-245c0747-db27-460b-b1bf-131042f664b9-fbd7e550.md) | `GCPResourceType == "vpn_tunnel"`<br>`MethodName has "compute.vpnTunnels.insert"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` |
| [GCP Audit Logs - List All GCP VPN Tunnels Deleted](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-all-gcp-vpn-tunnels-deleted-8f3e4a2b-6c7d-4e8f-9a0b-1c2d3e4f5a6b-45f3f0b9.md) | `GCPResourceType == "vpn_tunnel"`<br>`MethodName has "compute.vpnTunnels.delete"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` |
| [GCP Audit Logs - List GCP Organization Policy Modifications by Principal](../content/google-cloud-platform-audit-logs-gcp-audit-logs-list-gcp-organization-policy-modifications-by-principal-7a3e8c5f-4b9d-4e6a-8c7b-5f2a9d6e8b3c-a149a2a1.md) | `MethodName has "DeletePolicy"`<br>`MethodName has "UpdatePolicy"`<br>`MethodName has_any "OrgPolicy.DeletePolicy"`<br>`ServiceName == "orgpolicy.googleapis.com"` |

## Selection Criteria Summary (12 criteria, 13 total references)

References by type: 0 connectors, 13 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `GCPResourceType == "project"`<br>`MethodName == "SetIamPolicy"`<br>`ServiceName == "cloudresourcemanager.googleapis.com"` | - | 2 | - | - | **2** |
| `GCPResourceType == "gce_snapshot"`<br>`MethodName has "compute.snapshots.delete"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` | - | 1 | - | - | **1** |
| `GCPResourceType == "dns_managed_zone"`<br>`MethodName in "dns.managedZones.patch,dns.managedZones.update"`<br>`ServiceName == "dns.googleapis.com"`<br>`Severity == "NOTICE"` | - | 1 | - | - | **1** |
| `GCPResourceType == "gce_firewall_rule"`<br>`MethodName has "insert"`<br>`MethodName has "patch"`<br>`MethodName has_any "firewalls.insert"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` | - | 1 | - | - | **1** |
| `MethodName has_any "OrgPolicy.DeletePolicy"`<br>`ServiceName == "orgpolicy.googleapis.com"` | - | 1 | - | - | **1** |
| `GCPResourceType == "gcs_bucket"`<br>`MethodName == "storage.setIamPermissions"`<br>`ServiceName == "storage.googleapis.com"` | - | 1 | - | - | **1** |
| `MethodName has "DeleteVpcFlowLogsConfig"`<br>`MethodName has_any "VpcFlowLogsService.UpdateVpcFlowLogsConfig"`<br>`ServiceName == "networkmanagement.googleapis.com"` | - | 1 | - | - | **1** |
| `AuthenticationInfo !has "system:"`<br>`PrincipalEmail !endswith "gserviceaccount.com"` | - | 1 | - | - | **1** |
| `GCPResourceType == "gce_firewall_rule"`<br>`MethodName has "delete"`<br>`MethodName has "insert"`<br>`MethodName has "patch"`<br>`MethodName has "update"`<br>`MethodName has_any "compute.firewalls.insert"`<br>`ServiceName == "compute.googleapis.com"` | - | 1 | - | - | **1** |
| `MethodName has "DeletePolicy"`<br>`MethodName has "UpdatePolicy"`<br>`MethodName has_any "OrgPolicy.DeletePolicy"`<br>`ServiceName == "orgpolicy.googleapis.com"` | - | 1 | - | - | **1** |
| `GCPResourceType == "vpn_tunnel"`<br>`MethodName has "compute.vpnTunnels.insert"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` | - | 1 | - | - | **1** |
| `GCPResourceType == "vpn_tunnel"`<br>`MethodName has "compute.vpnTunnels.delete"`<br>`ServiceName == "compute.googleapis.com"`<br>`Severity == "NOTICE"` | - | 1 | - | - | **1** |
| **Total** | **0** | **13** | **0** | **0** | **13** |

### AuthenticationInfo

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!has system:` | - | 1 | - | - | **1** |

### GCPResourceType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `project` | - | 2 | - | - | **2** |
| `gce_firewall_rule` | - | 2 | - | - | **2** |
| `vpn_tunnel` | - | 2 | - | - | **2** |
| `gce_snapshot` | - | 1 | - | - | **1** |
| `dns_managed_zone` | - | 1 | - | - | **1** |
| `gcs_bucket` | - | 1 | - | - | **1** |

### MethodName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SetIamPolicy` | - | 2 | - | - | **2** |
| `has insert` | - | 2 | - | - | **2** |
| `has patch` | - | 2 | - | - | **2** |
| `has_any OrgPolicy.DeletePolicy` | - | 2 | - | - | **2** |
| `has compute.snapshots.delete` | - | 1 | - | - | **1** |
| `dns.managedZones.patch` | - | 1 | - | - | **1** |
| `dns.managedZones.update` | - | 1 | - | - | **1** |
| `has_any firewalls.insert` | - | 1 | - | - | **1** |
| `storage.setIamPermissions` | - | 1 | - | - | **1** |
| `has DeleteVpcFlowLogsConfig` | - | 1 | - | - | **1** |
| `has_any VpcFlowLogsService.UpdateVpcFlowLogsConfig` | - | 1 | - | - | **1** |
| `has delete` | - | 1 | - | - | **1** |
| `has update` | - | 1 | - | - | **1** |
| `has_any compute.firewalls.insert` | - | 1 | - | - | **1** |
| `has DeletePolicy` | - | 1 | - | - | **1** |
| `has UpdatePolicy` | - | 1 | - | - | **1** |
| `has compute.vpnTunnels.insert` | - | 1 | - | - | **1** |
| `has compute.vpnTunnels.delete` | - | 1 | - | - | **1** |

### PrincipalEmail

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!endswith gserviceaccount.com` | - | 1 | - | - | **1** |

### ServiceName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `compute.googleapis.com` | - | 5 | - | - | **5** |
| `cloudresourcemanager.googleapis.com` | - | 2 | - | - | **2** |
| `orgpolicy.googleapis.com` | - | 2 | - | - | **2** |
| `dns.googleapis.com` | - | 1 | - | - | **1** |
| `storage.googleapis.com` | - | 1 | - | - | **1** |
| `networkmanagement.googleapis.com` | - | 1 | - | - | **1** |

### Severity

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `NOTICE` | - | 5 | - | - | **5** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

