# ZeroFox Alerts - High Severity Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects high severity alerts from ZeroFox

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ZeroFox](../solutions/zerofox.md) |
| **ID** | `deb45e6d-892f-40bf-9118-e2a6f26b788d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess |
| **Techniques** | T1583, T1586, T1566 |
| **Required Connectors** | [ZeroFox_Alert_Polling](../connectors/zerofox-alert-polling.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox/Analytic%20Rules/ZF_Alerts_HighSeverityRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) | — | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ZeroFox](../solutions/zerofox.md)

