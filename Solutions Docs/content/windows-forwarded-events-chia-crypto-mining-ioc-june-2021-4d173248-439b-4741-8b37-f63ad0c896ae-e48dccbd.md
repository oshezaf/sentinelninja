# Chia_Crypto_Mining IOC - June 2021

Identifies a match across IOC's related to Chia cryptocurrency farming/plotting activity

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| **ID** | `4d173248-439b-4741-8b37-f63ad0c896ae` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1496 |
| **Required Connectors** | [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Forwarded%20Events/Analytic%20Rules/ChiaCryptoMining_WindowsEvent.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

