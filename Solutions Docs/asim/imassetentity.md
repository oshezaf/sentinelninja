# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Asset Entity ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imAssetEntity` |
| **Built-in Parser** | `_Im_AssetEntity` |
| **Schema** | AssetEntity |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAssetEntity/CHANGELOG/imAssetEntity.md)) |
| **Last Updated** | Mar 03, 2026 |
| **Source File** | [Parsers\ASimAssetEntity\Parsers\imAssetEntity.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAssetEntity/Parsers/imAssetEntity.yaml) |

## Description

This ASIM parser supports filtering and normalizing Asset Entity logs from all supported sources to the ASIM 'AssetEntity' normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `entityid_has_any` | dynamic | dynamic([]) |
| `entityname_has_any` | dynamic | dynamic([]) |
| `assettype_in` | string | * |
| `path_has_any` | dynamic | dynamic([]) |
| `assetowner_has_any` | dynamic | dynamic([]) |
| `entitysource_has_any` | dynamic | dynamic([]) |
| `pack` | bool | False |

## References

- [ASIM Asset Entity Schema](https://aka.ms/ASimAssetEntityDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

