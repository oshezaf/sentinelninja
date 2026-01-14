# Potential DHCP Starvation Attack

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This creates an incident in the event that an excessive amount of DHCPREQUEST have been recieved by a DHCP Server and could potentially be an indication of a DHCP Starvation Attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox NIOS](../solutions/infoblox-nios.md) |
| **ID** | `57e56fc9-417a-4f41-a579-5475aea7b8ce` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1200 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20NIOS/Analytic%20Rules/PotentialDHCPStarvationAttack.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Infoblox NIOS](../solutions/infoblox-nios.md)

