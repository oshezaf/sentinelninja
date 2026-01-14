# Anomalous GCP IAM Activity

Identifies anomalous IAM-related activities in Google Cloud Platform (GCP) Audit Logs where the investigation priority is greater than zero. This query highlights potential privilege or access anomalies by providing key details such as timestamp, action type, activity type, source IP, location, and associated user and activity insights for further investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `e5f6g7h8-i9j0-1234-efgh-ij5678901234` |
| **Tactics** | PrivilegeEscalation, Persistence, CredentialAccess |
| **Techniques** | T1078, T1548, T1098 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20GCP%20IAM%20Activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

