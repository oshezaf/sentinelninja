# Cloudflare - Bad client IP

Detects requests from IP with bad reputation index.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloudflare CCF](../solutions/cloudflare-ccf.md) |
| **ID** | `a7ce6135-9d55-4f14-b058-adc2e920a4fb` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CloudflareDataConnector](../connectors/cloudflaredataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF/Analytic%20Rules/CloudflareCCFBadClientIp.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cloudflare CCF](../solutions/cloudflare-ccf.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
