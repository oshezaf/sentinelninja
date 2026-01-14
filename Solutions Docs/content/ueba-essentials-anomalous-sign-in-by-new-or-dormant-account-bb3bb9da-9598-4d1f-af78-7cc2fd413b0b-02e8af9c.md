# Anomalous Sign-in by New or Dormant Account

'Adversaries may steal the credentials of a specific user or service account using credential access techniques or capture credentials earlier in their reconnaissance process through social engineering as a means of gaining persistence." Umbreon, for example, creates valid users to provide access to the system. The query below generates an output of successful sign-in with one or more of the following indications:- - performed by new or recently dormant accounts - where one or more features of t

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `bb3bb9da-9598-4d1f-af78-7cc2fd413b0b` |
| **Tactics** | Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Sign-in%20Activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

