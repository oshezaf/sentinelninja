# Highly Sensitive Password Accessed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule will monitor access to highly sensitive passwords. Within the Watchlist called 'LastPass' define passwords which are deemed highly sensitive (such as password to a high privileged application). When an activity is observed against such password, an incident is created.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md) |
| **ID** | `b39e6482-ab7e-4817-813d-ec910b64b26e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery |
| **Techniques** | T1555, T1087 |
| **Required Connectors** | [LastPass](../connectors/lastpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/LastPass/Analytic%20Rules/HighlySensitivePasswordAccessed.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`LastPassNativePoller_CL`](../tables/lastpassnativepoller-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lastpass Enterprise Activity Monitoring](../solutions/lastpass-enterprise-activity-monitoring.md)

