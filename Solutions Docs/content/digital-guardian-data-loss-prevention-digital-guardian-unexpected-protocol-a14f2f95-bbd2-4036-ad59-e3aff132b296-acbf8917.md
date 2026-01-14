# Digital Guardian - Unexpected protocol

Detects RDP protocol usage for data transfer which is not common.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md) |
| **ID** | `a14f2f95-bbd2-4036-ad59-e3aff132b296` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1048 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention/Analytic%20Rules/DigitalGuardianUnexpectedProtocol.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Digital Guardian Data Loss Prevention](../solutions/digital-guardian-data-loss-prevention.md)

