# CybleVision Alerts Darkweb Marketplace Alerts

Detects stolen credentials, financial information, stealer logs, and related payloads listed on Darkweb marketplaces such as RussianMarket. Extracts card data, victim info, metadata, and marketplace context via Alerts_DarkwebMarketplaces.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `e80eedb4-cbae-45cc-b1be-a2a8dc31af3b` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Collection, Exfiltration, Reconnaissance |
| **Techniques** | T1555, T1005, T1041, T1589, T1646 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_Darkweb_Marketplace.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Alerts_darkweb_marketplaces`](../tables/alerts-darkweb-marketplaces.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyble Vision](../solutions/cyble-vision.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
