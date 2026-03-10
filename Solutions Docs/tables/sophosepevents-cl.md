# SophosEPEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (23 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Endpoint%20Protection/Data%20Connectors/SophosEP_ccp/SophosEP_DCR.json)

| Column Name | Type |
|:------------|:-----|
| amsi_threat_data | dynamic |
| appCerts | dynamic |
| appSha256 | string |
| core_remedy_items | dynamic |
| created_at | datetime |
| customer_id | string |
| details | dynamic |
| endpoint_id | string |
| endpoint_type | string |
| group | string |
| id | string |
| ips_threat_data | dynamic |
| location | string |
| name | string |
| origin | string |
| severity | string |
| source | string |
| source_info | dynamic |
| threat | string |
| type | string |
| user_id | string |
| when | datetime |
| whitelist_properties | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Sophos Endpoint Protection](../solutions/sophos-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

