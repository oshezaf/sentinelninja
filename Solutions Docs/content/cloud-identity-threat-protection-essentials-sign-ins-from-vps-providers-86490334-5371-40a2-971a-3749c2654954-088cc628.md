# Sign-ins From VPS Providers

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query finds successful logons from known VPS providers with suspicious token patterns. It's not exhaustive but covers prevalent providers. Now includes UEBA logs IdentityInfo and BehaviorAnalytics for context.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md) |
| **ID** | `86490334-5371-40a2-971a-3749c2654954` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cloud%20Identity%20Threat%20Protection%20Essentials/Hunting%20Queries/Signins-From-VPS-Providers.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | ✓ | ✗ | — |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ | — |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)

