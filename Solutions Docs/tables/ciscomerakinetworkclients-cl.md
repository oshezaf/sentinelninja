# CiscoMerakiNetworkClients_CL

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

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API%5CData%20Connectors%5CCiscoMerakiMultiRule_ccp/table_CiscoMerakiNetworkClients.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdaptivePolicyGroup | string | Adaptive policy group assignment. |
| ClientId | string | Unique client identifier. |
| Description | string | Client device description or name. |
| DeviceTypePrediction | string | Predicted device type and OS version. |
| FirstSeen | datetime | Timestamp when the client was first seen on the network. |
| GroupPolicy8021x | string | 802.1x group policy. |
| IpAddress | string | IPv4 address of the client. |
| IpV6Address | string | IPv6 address of the client. |
| IpV6LocalAddress | string | IPv6 local link address. |
| LastSeen | datetime | Timestamp when the client was last seen on the network. |
| MacAddress | string | Client MAC address. |
| Manufacturer | string | Device manufacturer. |
| NamedVlan | string | Named VLAN assigned to the client. |
| NetworkId | string | Network ID where the client was detected. |
| Notes | string | Additional notes about the client. |
| OperatingSystem | string | Operating system of the client device. |
| PskGroup | string | Pre-shared key group assignment. |
| RecentDeviceConnection | string | Connection type (Wired/Wireless). |
| RecentDeviceMac | string | MAC address of the recent device. |
| RecentDeviceName | string | Name of the recent device. |
| RecentDeviceSerial | string | Serial number of the recent device. |
| SmInstalled | bool | Indicates if Meraki Systems Manager is installed. |
| Ssid | string | SSID name for wireless clients. |
| Status | string | Client status (Online/Offline). |
| Switchport | string | Switch port name or identifier. |
| TimeGenerated | datetime |  |
| Usage | dynamic | Usage statistics including sent and received bytes. |
| Username | string | Username associated with the client. |
| Vlan | string | VLAN identifier. |
| WirelessCapabilities | string | Wireless capabilities or standards (e.g., 802.11b). |

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

