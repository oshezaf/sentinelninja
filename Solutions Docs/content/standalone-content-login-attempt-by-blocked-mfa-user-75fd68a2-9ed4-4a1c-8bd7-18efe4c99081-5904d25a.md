# Login attempt by Blocked MFA user

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

An account could be blocked if there are too many failed authentication attempts in a row. This hunting query identifies if a MFA user account that is set to blocked tries to login to Microsoft Entra ID.  This query has also been updated to include UEBA logs IdentityInfo and BehaviorAnalytics for contextual information around the results.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `75fd68a2-9ed4-4a1c-8bd7-18efe4c99081` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [BehaviorAnalytics](../connectors/behavioranalytics.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SigninLogs/MFAUserBlocked.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

