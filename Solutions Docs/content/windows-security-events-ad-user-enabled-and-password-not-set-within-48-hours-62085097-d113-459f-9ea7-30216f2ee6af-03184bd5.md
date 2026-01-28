# AD user enabled and password not set within 48 hours

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies when an account is enabled with a default password and the password is not set by the user within 48 hours. Effectively, there is an event 4722 indicating an account was enabled and within 48 hours, no event 4723 occurs which indicates there was no attempt by the user to set the password. This will show any attempts (success or fail) that occur after 48 hours, which can indicate too long of a time period in setting the password to something that only the user knows. It is recommended

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `62085097-d113-459f-9ea7-30216f2ee6af` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Analytic%20Rules/password_not_set.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Windows Security Events](../solutions/windows-security-events.md)

