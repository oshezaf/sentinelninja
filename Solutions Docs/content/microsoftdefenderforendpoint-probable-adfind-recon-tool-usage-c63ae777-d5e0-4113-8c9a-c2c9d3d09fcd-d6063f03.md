# Probable AdFind Recon Tool Usage

Identifies the host and account that executed AdFind by hash and filename in addition to common and unique flags that are used by many threat actors in discovery.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **ID** | `c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd` |
| **Severity** | High |
| **Tactics** | Discovery |
| **Techniques** | T1018 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Hunting%20Queries/MDE_Usage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

