# Cloudflare - Client request from country in blocklist

Detects requests from countries which are in blocklist.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloudflare CCF](../solutions/cloudflare-ccf.md) |
| **ID** | `40554544-6e4a-4413-8d14-bf2de939c5d0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CloudflareDataConnector](../connectors/cloudflaredataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF/Analytic%20Rules/CloudflareCCFUnexpectedCountry.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cloudflare CCF](../solutions/cloudflare-ccf.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
