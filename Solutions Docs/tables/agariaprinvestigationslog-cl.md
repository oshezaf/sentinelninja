# AgariAPRInvestigationsLog_CL

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

## Schema (9 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari%5CData%20Connectors%5CAgari_CCF/table_AgariAPRInvestigationsLog.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AttachmentType | string | Category of attachment (e.g. screenshot, email_source, pcap) |
| ContentType | string | MIME content type of the attachment (e.g. application/pdf, message/rfc822) |
| CreatedAt | datetime | Timestamp when the attachment was added to the investigation |
| Filename | string | Original filename of the attachment |
| Id | string | Unique identifier for the investigation attachment |
| Sha256 | string | SHA-256 hash of the attachment for threat intelligence correlation |
| Size | long | File size of the attachment in bytes |
| TimeGenerated | datetime |  |
| Url | string | URL to download the attachment from the Agari console |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Agari](../solutions/agari.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

