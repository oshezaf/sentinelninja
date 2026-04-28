# Cisco_Umbrella_firewall_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Cisco_Umbrella_firewall_CL.json)

| Column Name | Type |
|:------------|:-----|
| App_ID_s | string |
| AWS_Region_s | string |
| Bytes_Received_s | string |
| Bytes_Sent_s | string |
| CASI_Category_IDs_s | string |
| Content_Category_IDs_s | string |
| Content_Category_List_IDs_s | string |
| dataCenter_s | string |
| Destination_Country_s | string |
| Destination_List_IDs_s | string |
| destinationIp_s | string |
| destinationPort_s | string |
| Direction_s | string |
| EventType_s | string |
| First_Packet_Timestamp_s | string |
| FQDNS_s | string |
| FW_Event_ID_s | string |
| Identity_s | string |
| Identity_Type_s | string |
| ipProtocol_s | string |
| Last_Packet_Timestamp_s | string |
| Organization_ID_s | string |
| originId_s | string |
| Packets_Received_s | string |
| Packets_Sent_s | string |
| packetSize_s | string |
| Posture_ID_s | string |
| Private_App_ID_s | string |
| Private_Flow_s | string |
| ruleId_s | string |
| SourceIP | string |
| sourcePort_s | string |
| TimeGenerated | datetime |
| Timestamp_t | datetime |
| Traffic_Source_s | string |
| verdict_s | string |

## Solutions (1)

This table is used by the following solutions:

- [CiscoUmbrella](../solutions/ciscoumbrella.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) |  |
| [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

