# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for PostgreSQL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationPostgreSQL` |
| **Built-in Parser** | `_ASim_Authentication_PostgreSQL` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | PostgreSQL |
| **Parser Version** | 0.1.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationPostgreSQL.md)) |
| **Last Updated** | Apr 17, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationPostgreSQL.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationPostgreSQL.yaml) |

## Description

This ASIM parser supports normalizing PostgreSQL sign in logs to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CustomlogsviaAMA](../connectors/customlogsviaama.md) | [CustomLogsAma](../solutions/customlogsama.md) |

**Solutions:** [CustomLogsAma](../solutions/customlogsama.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

