# AGWFirewallLogs

Reference for AGWFirewallLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agwfirewalllogs) |

## Solutions (1)

This table is used by the following solutions:

- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md)

---

## Content Items Using This Table (6)

### Analytic Rules (6)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md):**
- [A potentially malicious web request was executed against a web server](../content/46ac55ae-47b8-414a-8f94-89ccd1962178.md)
- [App GW WAF - Code Injection](../content/912a18fc-6165-446b-8740-81ae6c3f75ee.md)
- [App GW WAF - Path Traversal Attack](../content/b6c3a8a6-d22c-4882-9c57-abc01690938b.md)
- [App Gateway WAF - SQLi Detection](../content/bdb2cd63-99f2-472e-b1b9-acba473b6744.md)
- [App Gateway WAF - Scanner Detection](../content/9b8dd8fd-f192-42eb-84f6-541920400a7a.md)
- [App Gateway WAF - XSS Detection](../content/1c7ff502-2ad4-4970-9d29-9210c6753138.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/applicationgateways`

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
