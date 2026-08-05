# CiscoMerakiOrganizationNetworks_CL

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

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API%5CData%20Connectors%5CCiscoMerakiMultiRule_ccp/table_CiscoMerakiOrganizationNetworks.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| DashboardUrl | string | Dashboard URL for the network. |
| EnrollmentString | string | Enrollment string for the network. |
| IsBoundToConfigTemplate | bool | Indicates if the network is bound to a configuration template. |
| NetworkId | string | Network identifier. |
| NetworkName | string | Network name. |
| Notes | string | Additional description or notes about the network. |
| OrganizationId | string | Organization identifier. |
| ProductTypes | dynamic | Array of network product types (appliance, switch, wireless, etc.). |
| Tags | dynamic | Array of network tags. |
| TimeGenerated | datetime |  |
| TimeZone | string | Network time zone. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

