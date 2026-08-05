# CiscoMerakiAirMarshalEvents_CL

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

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API%5CData%20Connectors%5CCiscoMerakiMultiRule_ccp/table_CiscoMerakiAirMarshalEvents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Bssids | dynamic | Array of BSSID objects with containment and detection information. |
| Channels | dynamic | Array of channels where the SSID was detected. |
| FirstSeen | datetime | Timestamp when the rogue AP was first detected. |
| LastSeen | datetime | Timestamp when the rogue AP was last detected. |
| NetworkId | string | Network ID where the Air Marshal event was detected. |
| Ssid | string | Detected SSID name. |
| TimeGenerated | datetime |  |
| WiredLastSeen | datetime | Timestamp when the wired connection was last seen. |
| WiredMacs | dynamic | Array of detected wired MAC addresses. |
| WiredVlans | dynamic | Array of detected VLAN identifiers. |

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

