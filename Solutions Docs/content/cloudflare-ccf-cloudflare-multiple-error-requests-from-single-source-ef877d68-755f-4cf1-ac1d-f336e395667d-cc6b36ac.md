# Cloudflare - Multiple error requests from single source

Detects multiple failure requests from single source in short timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cloudflare CCF](../solutions/cloudflare-ccf.md) |
| **ID** | `ef877d68-755f-4cf1-ac1d-f336e395667d` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1133 |
| **Required Connectors** | [CloudflareDataConnector](../connectors/cloudflaredataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloudflare%20CCF/Analytic%20Rules/CloudflareCCFMultipleErrorsSource.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cloudflare CCF](../solutions/cloudflare-ccf.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
