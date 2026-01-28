# Digital Guardian - Files sent by users

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for files sent by users.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md) |
| **ID** | `66dd7ab7-bbc0-48b7-a3b9-4e71e610df48` |
| **Severity** | Medium |
| **Tactics** | Exfiltration |
| **Techniques** | T1048 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention/Hunting%20Queries/DigitalGuardianFilesSentByUsers.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "managed_device_id"`<br>`SyslogMessage contains "number_of_incidents"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md)

