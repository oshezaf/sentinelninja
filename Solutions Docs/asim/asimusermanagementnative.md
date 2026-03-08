# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management activity ASIM parser for Microsoft Sentinel native User Management activity table

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementNative` |
| **Built-in Parser** | `_ASim_UserManagement_Native` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagementNative.md)) |
| **Last Updated** | Mar 07 2024 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementNative.yaml) |

## Description

This ASIM parser supports normalizing the native User Management activity table to the ASIM User Management activity normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | ✓ | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdstrikeReplicatorv2](../connectors/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

