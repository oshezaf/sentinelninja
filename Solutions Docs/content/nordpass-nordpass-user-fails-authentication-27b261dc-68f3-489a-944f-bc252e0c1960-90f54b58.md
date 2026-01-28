# NordPass - User fails authentication

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This will alert you if a user fails to log in to their NordPass account or SSO authentication three or more times in the last 24 hours.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `27b261dc-68f3-489a-944f-bc252e0c1960` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110, T1556.003 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_user_login_failed.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NordPass](../solutions/nordpass.md)

