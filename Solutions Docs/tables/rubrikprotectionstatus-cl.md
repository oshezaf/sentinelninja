# RubrikProtectionStatus_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Rubrik *(basis: projected)* |
| **Source Product** | Security Cloud Protection Status *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (50 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud%5CData%20Connectors%5CRubrikSecurityCloud_CCF/RubrikSecurityCloud_Table.json)

| Column Name | Type |
|:------------|:-----|
| ArchivalComplianceStatus | string |
| ArchivalSnapshotLag | int |
| ArchiveSnapshots | int |
| ArchiveStorage | long |
| AssetId | string |
| AssetName | string |
| AwaitingFirstFull | bool |
| ClusterName | string |
| ComplianceStatus | string |
| DataReduction | real |
| Fid | string |
| LastSnapshot | datetime |
| LastSnapshotLogicalBytes | long |
| LatestArchivalSnapshot | datetime |
| LatestReplicationSnapshot | datetime |
| LocalEffectiveStorage | long |
| LocalMeteredData | long |
| LocalOnDemandSnapshots | int |
| LocalProtectedData | long |
| LocalSlaSnapshots | int |
| LocalSnapshots | int |
| LocalStorage | long |
| Location | string |
| LogicalBytes | long |
| LogicalDataReduction | real |
| MissedSnapshots | int |
| NcdLatestArchiveSnapshot | datetime |
| NcdPolicyName | string |
| NcdSnapshotType | string |
| ObjectState | string |
| ObjectType | string |
| OrgId | string |
| OrgName | string |
| PhysicalBytes | long |
| ProtectedOn | datetime |
| ProtectionStatus | string |
| ProvisionedBytes | long |
| PullTime | datetime |
| ReplicaSnapshots | int |
| ReplicaStorage | long |
| ReplicationComplianceStatus | string |
| ReplicationSnapshotLag | int |
| SlaDomainName | string |
| SourceProtocol | string |
| SourceSystem | string |
| TimeGenerated | datetime |
| TotalSnapshots | int |
| TransferredBytes | long |
| UsedBytes | long |
| WorkloadOrgName | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Rubrik Security Cloud Protection Status (using Codeless Connector Framework)](../connectors/rubrikprotectionstatus.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

