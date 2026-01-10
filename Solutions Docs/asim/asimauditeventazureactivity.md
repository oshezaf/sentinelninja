# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Audit Event ASIM parser for Azure administrative activity

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventAzureActivity` |
| **Built-in Parser** | `_ASim_AuditEvent_AzureActivity` |
| **Schema** | AuditEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Azure |
| **Parser Version** | 0.2 |
| **Last Updated** | Feb 19 2022 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventAzureAdminActivity.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventAzureAdminActivity.yaml) |

## Description

This ASIM parser supports normalizing Azure administrative activity in the AzureActivity table to the ASIM Audit Event schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AzureActivity](../tables/azureactivity.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

