# Possible webshell drop

This query searches for files with common web page content extensions created by IIS or Apache that could run arbitrary code. It includes a throttling mechanism to reduce false positive detections for web-based content management.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b` |
| **Tactics** | Initial access, Execution, Persistence |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Hunting%20Queries/Possible%20webshell%20drop.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
