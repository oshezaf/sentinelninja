# Awake Security - Model With Multiple Destinations

This query searches for devices with multiple possibly malicious destinations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AristaAwakeSecurity](../solutions/aristaawakesecurity.md) |
| **ID** | `dfa3ec92-bdae-410f-b675-fe1814e4d43e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Arista Networks |
| **Event Product** | Awake Security |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AristaAwakeSecurity/Analytic%20Rules/ModelMatchesWithMultipleDestinationsByDevice.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to AristaAwakeSecurity](../solutions/aristaawakesecurity.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

