# Vaikora - Feed outage detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when no Vaikora data has arrived in the Vaikora_SecurityAlerts_CL table for 12 or more hours, which may indicate a failed playbook, expired API key, or connectivity issue.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md) |
| **ID** | `5f7789fa-0a6b-4dff-a2da-dfa4b682f3af` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [VaikoraSecurityCenter](../connectors/vaikorasecuritycenter.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-AzureSecurityCenter/Analytic%20Rules/Vaikora%20-%20Feed%20Outage%20Detection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_SecurityAlerts_CL`](../tables/vaikora-securityalerts-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md)

