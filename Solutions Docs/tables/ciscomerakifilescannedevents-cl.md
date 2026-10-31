# CiscoMerakiFileScannedEvents_CL

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

## Schema (17 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API%5CData%20Connectors%5CCiscoMerakiMultiRule_ccp/table_CiscoMerakiFileScannedEvents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Action taken against the scanned file. |
| ClientMac | string | Client MAC address associated with the file scan. |
| DestinationIp | string | Destination IP address for the file transfer or request. |
| DeviceMac | string | MAC address of the Meraki appliance associated with the event. |
| Disposition | string | Threat disposition returned by the file scanning engine. |
| EventCount | string | Event count value for the source record. |
| EventMessage | string | Raw event message for the file scan result. |
| EventProduct | string | Product name reported in the event. |
| EventSchemaVersion | string | Schema version for the event. |
| EventType | string | Cisco Meraki event type for the file scan result. |
| EventVendor | string | Vendor name reported in the event. |
| FileHash | string | Hash value of the downloaded or scanned file. |
| FileSizeBytes | long | File size in bytes. |
| FileType | string | Detected or classified file type. |
| SourceIp | string | Source IP address for the file transfer or request. |
| TimeGenerated | datetime |  |
| Uri | string | URI or URL evaluated by the file scan engine. |

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

