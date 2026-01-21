# UEBA Multi-Source Anomalous Activity Overview

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Retrieves and displays anomalous activity detected across multiple identity and cloud sources (AWS CloudTrail, Okta, GCP Audit Logs, and general authentication events) using UEBA anomaly templates. The query provides key details such as timestamp, workspace, anomaly type, score, description, and associated insights (user, device, activity) along with MITRE ATT&CK tactics and techniques for deeper investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `b2c3d4e5-f6g7-8901-bcde-fg2345678901` |
| **Tactics** | InitialAccess, CredentialAccess, Persistence, PrivilegeEscalation |
| **Techniques** | T1078, T1110, T1556, T1548 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/UEBA%20Multi-Source%20Anomalous%20Activity%20Overview.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Anomalies`](../tables/anomalies.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

