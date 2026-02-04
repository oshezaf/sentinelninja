# Failed logon attempts in authpriv

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies failed logon attempts from unknown users in Syslog authpriv logs. The unknown user means the account that tried to log in isn't provisioned on the machine. A few hits could indicate someone attempting to access a machine they aren't authorized to access.  If there are many of hits, especially from outside your network, it could indicate a brute force attack.  Default threshold for logon attempts is 15.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `e7ec9fa6-e7f7-41ed-a34b-b956837a3ee6` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Analytic%20Rules/FailedLogonAttempts_UnknownUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `Facility == "authpriv"`<br>`SyslogMessage has "authentication failure"`<br>`SyslogMessage has "uid=0"`<br>`SyslogMessage has "user unknown"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Syslog](../solutions/syslog.md)

