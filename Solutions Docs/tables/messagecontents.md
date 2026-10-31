# MessageContents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Teams message snippets and related message metadata

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-messagecontents-table) |

## Schema (8 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/messagecontents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| MessageSnippet | string | Snippet of the message |
| SenderEmailAddress | string | Email address of the message sender |
| SenderObjectId | string | Object ID of the message sender |
| TeamsMessageId | string | Unique identifier for the message |
| ThreadId | string | Unique identifier for the channel or chat thread |
| ThreadName | string | Name of the channel or chat thread |
| ThreadType | string | Type of thread |
| Timestamp | datetime | Date and time when the message was delivered |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [MessageContents Schema Reference (Defender XDR)](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-messagecontents-table)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

