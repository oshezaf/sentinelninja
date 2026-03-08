# Infoblox_dhcpother

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Parser for Infoblox_dhcpother |
| Location | Solution |
| Solution | [Infoblox NIOS](../solutions/infoblox-nios.md) |
| Version | 1.1.1 |
| Last Updated | 2025-07-10 |
| Category | Microsoft Sentinel Parser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20NIOS/Parsers/Infoblox_dhcpother.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has_any "AccessRight,AdminGroup,AdminMember,Created Role,Login_Allowed,Login_Denied,balanced,balancing,delegatedzone,failover,forwardzone"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Parsers Index](parsers-index.md)

