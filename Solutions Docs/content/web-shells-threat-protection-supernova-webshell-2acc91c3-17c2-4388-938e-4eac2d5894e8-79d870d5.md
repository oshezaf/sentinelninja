# SUPERNOVA webshell

Identifies SUPERNOVA webshell based on W3CIISLog data.  References:  - https://unit42.paloaltonetworks.com/solarstorm-supernova/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `2acc91c3-17c2-4388-938e-4eac2d5894e8` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Persistence, CommandAndControl |
| **Techniques** | T1505, T1071 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Analytic%20Rules/Supernovawebshell.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`W3CIISLog`](../tables/w3ciislog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
