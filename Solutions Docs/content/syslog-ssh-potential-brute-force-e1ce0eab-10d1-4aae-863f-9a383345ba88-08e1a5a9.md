# SSH - Potential Brute Force

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies an IP address that had 15 failed attempts to sign in via SSH in a 4 hour block during a 24 hour time period.  Please note that entity mapping for arrays is not supported, so when there is a single value in an array, we will pull that value from the array as a single string to populate the entity to support entity mapping features within Sentinel. Additionally, if the array is multivalued, we will input a string to indicate this with a unique hash so that matching will not occur.  As

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `e1ce0eab-10d1-4aae-863f-9a383345ba88` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Analytic%20Rules/ssh_potentialBruteForce.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName == "sshd"`<br>`SyslogMessage contains "Failed password for invalid user"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Syslog](../solutions/syslog.md)

