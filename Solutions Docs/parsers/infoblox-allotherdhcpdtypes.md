# Infoblox_allotherdhcpdTypes

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Parser for Infoblox_allotherdhcpdTypes |
| Location | Solution |
| Solution | [Infoblox NIOS](../solutions/infoblox-nios.md) |
| Version | 1.1.1 |
| Last Updated | 2025-07-10 |
| Category | Microsoft Sentinel Parser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20NIOS/Parsers/Infoblox_allotherdhcpdTypes.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has_any "AccessRight,Added,AdminGroup,AdminMember,Created Role,DHCPACK,DHCPDISCOVER,DHCPEXPIRE,DHCPINFORM,DHCPOFFER,DHCPRELEASE,Login_Allowed,Login_Denied,Option,Removed,balanced,balancing,bind,delegatedzone,failover,forwardzone,r-l-e"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

