# Detections_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Detections_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| category | string |
| certainty | real |
| Computer | string |
| d_detection_details | dynamic |
| d_type_vname | string |
| detail | dynamic |
| detection_href | string |
| detection_id | real |
| detection_type | string |
| entity_id | real |
| entity_name | string |
| entity_type | string |
| entity_uid | string |
| event_timestamp | datetime |
| grouped_details | dynamic |
| id | real |
| is_targeting_key_asset | string |
| ManagementGroupName | string |
| MG | string |
| mitre | dynamic |
| normal_domains | dynamic |
| RawData | string |
| severity | real |
| SourceSystem | string |
| src_host | dynamic |
| src_ip | string |
| summary | dynamic |
| tags | dynamic |
| TenantId | string |
| threat | real |
| TimeGenerated | datetime |
| triaged | bool |
| Type | string |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra XDR](../connectors/vectraxdr.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vectra Create Detection Alert for Accounts](../content/vectra-xdr-vectra-create-detection-alert-for-accounts-e796701f-6b39-4c54-bf8a-1d543a990784-7d97d787.md) |  |
| [Vectra Create Detection Alert for Hosts](../content/vectra-xdr-vectra-create-detection-alert-for-hosts-fb861539-da19-4266-831f-99459b8e7605-e79059e2.md) |  |

### Workbooks (1)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraXDR](../content/vectra-xdr-vectraxdr-67eeec96.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraDetections](../parsers/vectradetections.md) | [Vectra XDR](../solutions/vectra-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

