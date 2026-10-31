# ExchangeOnlineMessageTracking_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (31 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online%5CData%20Connectors%5CESI-CollectorMessageTrackingPlugin_ccf/ESI-CollectorMessageTrackingPlugin_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| clientHostname_s | string | Client hostname |
| clientIp_s | string | Client IP address |
| connectorId_s | string | Connector identifier |
| customData_s | string | Custom metadata |
| directionality_s | string | Message directionality (Originating/Incoming) |
| eventId_s | string | Event identifier |
| FilePath_s | string | File path of the log entry |
| internalMessageId_s | string | Internal message identifier |
| logId_s | string | Log identifier |
| messageId_s | string | Message identifier |
| messageInfo_s | string | Additional message information |
| messageSubject_s | string | Email subject line |
| messageTrackingTenantId_s | string | Tenant identifier for the message tracking log |
| networkMessageId_s | string | Network message identifier |
| originalClientIp_s | string | Original client IP address |
| originalServerIp_s | string | Original server IP address |
| recipientAddress_s | string | Recipient email address |
| recipientCount_i | int | Number of recipients |
| recipientStatus_s | string | Recipient delivery status |
| reference_s | string | Message reference |
| relatedRecipientAddress_s | string | Related recipient address |
| returnPath_s | string | Return path address |
| schemaVersion_s | string | Schema version of the log entry |
| senderAddress_s | string | Sender email address |
| senderHostname_s | string | Sender hostname |
| serverIp_s | string | Server IP address |
| source_s | string | Message source |
| sourceContext_s | string | Source context information |
| TimeGenerated | datetime | The timestamp when the log was generated |
| totalBytes_l | long | Total message size in bytes |
| transportTrafficType_s | string | Transport traffic type |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Plugin 'Message Tracking' for Exchange Security Insights Online Collector (Azure Monitor)](../connectors/esi-collectormessagetrackingplugin.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

