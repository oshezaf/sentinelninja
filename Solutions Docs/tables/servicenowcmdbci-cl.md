# ServiceNowCmdbCi_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (82 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB%5CData%20Connectors%5CServiceNowCMDB_CCF/table_ServiceNowCmdbCi.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Asset | string | Asset reference |
| AssetTag | string | Asset tag |
| Assigned | datetime | Assigned date |
| AssignedTo | string | Assigned to reference |
| AssignmentGroup | string | Change Group reference |
| AttestationScore | int | Attestation Score |
| AttestationStatus | string | Attestation Status |
| Attested | bool | Attested |
| AttestedBy | string | Attested By reference |
| AttestedDate | datetime | Attested Date |
| Attributes | string | Attributes |
| BusinessUnit | string | Business Unit reference |
| CanPrint | bool | Can Print |
| Category | string | Category |
| ChangeControl | string | Approval group reference |
| CheckedIn | datetime | Checked in date |
| CheckedOut | datetime | Checked out date |
| CmdbOtEntity | string | OT asset details reference |
| Comments | string | Comments |
| Company | string | Company reference |
| CorrelationId | string | Correlation ID |
| Cost | string | Cost |
| CostCc | string | Cost currency |
| CostCenter | string | Cost center reference |
| DeliveryDate | datetime | Order received date |
| Department | string | Department reference |
| DiscoverySource | string | Discovery source |
| DnsDomain | string | DNS Domain |
| Due | datetime | Due date |
| DueIn | string | Due in |
| DuplicateOf | string | Duplicate Of reference |
| Environment | string | Environment |
| FaultCount | int | Fault count |
| FirstDiscovered | datetime | First discovered date |
| Fqdn | string | Fully qualified domain name |
| GlAccount | string | GL account |
| InstallDate | datetime | Installed date |
| InstallStatus | int | Status |
| InvoiceNumber | string | Invoice number |
| IpAddress | string | IP Address |
| Justification | string | Justification |
| LastDiscovered | datetime | Most recent discovery date |
| LeaseId | string | Lease contract |
| LifeCycleStage | string | Life Cycle Stage reference |
| LifeCycleStageStatus | string | Life Cycle Stage Status reference |
| Location | string | Location reference |
| MacAddress | string | MAC Address |
| MaintenanceSchedule | string | Maintenance schedule reference |
| ManagedBy | string | Managed by reference |
| ManagedByGroup | string | Managed By Group reference |
| Manufacturer | string | Manufacturer reference |
| ModelId | string | Model ID reference |
| ModelNumber | string | Model number |
| Monitor | bool | Monitor |
| Name | string | Name |
| OperationalStatus | int | Operational status |
| OrderDate | datetime | Ordered date |
| OwnedBy | string | Owned by reference |
| PoNumber | string | PO number |
| PurchaseDate | string | Purchased date |
| Schedule | string | Schedule reference |
| SerialNumber | string | Serial number |
| ShortDescription | string | Description |
| SkipSync | bool | Skip sync |
| StartDate | datetime | Start date |
| Subcategory | string | Subcategory |
| SupportedBy | string | Supported by reference |
| SupportGroup | string | Support group reference |
| SysClassName | string | Class |
| SysClassPath | string | Sys class path |
| SysCreatedBy | string | Created by |
| SysCreatedOn | datetime | Created date |
| SysDomain | string | Domain |
| SysDomainPath | string | Domain Path |
| SysId | string | Sys ID |
| SysModCount | int | Updates |
| SysUpdatedBy | string | Updated by |
| SysUpdatedOn | datetime | Updated date |
| TimeGenerated | datetime |  |
| Unverified | bool | Requires verification |
| Vendor | string | Vendor reference |
| WarrantyExpiration | string | Warranty expiration date |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ServiceNowCMDB](../solutions/servicenowcmdb.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

