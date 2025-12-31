# EmailPostDeliveryEvents

Security events that occur post-delivery, after Microsoft 365 delivers the emails to the recipient mailbox

| Attribute | Value |
|:----------|:------|
| **Category** | Defender |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/emailpostdeliveryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailpostdeliveryevents-table) |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (8)

### Hunting Queries (7)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Calculate overall MDO efficacy](../content/ff56a21d-fc95-4c11-8f9d-cc59c48cd4e6.md)
- [Email containing malware accessed on a unmanaged device](../content/439f817c-845c-4dda-a8d9-5c1f6831cee9.md)
- [Post Delivery Events by Admin](../content/21bafecb-ae8f-4667-b7d6-144e047cb602.md)
- [Post Delivery Events by Location](../content/5e8d5202-ffdc-4d16-ad33-d56eb319c175.md)
- [Post Delivery Events by ZAP type](../content/dbc25434-bbe7-4517-bf4b-48ad9cb4e980.md)
- [Post Delivery Events over time](../content/dd9df55e-79b7-48e0-9d19-965fcadae5e9.md)
- [Quarantine releases by Detection Types](../content/23e6d66b-511a-43fd-9863-6924da60319a.md)

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoftdefenderforoffice365detectionsandinsights-microsoft-defender-xdr.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
