# Hosts with new logons

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Shows new accounts that have logged onto a host for the first time - this may clearly be benign activity but an account logging onto multiple hosts for the first time can also be used to look for evidence of that account being used to move laterally across a network.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `62e2df59-1535-4c8e-ac6c-c91faeed0179` |
| **Tactics** | CredentialAccess, LateralMovement |
| **Techniques** | T1110 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Hunting%20Queries/HostsWithNewLogons.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "4624,4625"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Windows Security Events](../solutions/windows-security-events.md)

