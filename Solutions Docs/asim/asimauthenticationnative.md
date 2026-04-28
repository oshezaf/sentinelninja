# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication Event ASIM parser for Microsoft Sentinel native Authentication table

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationNative` |
| **Built-in Parser** | `_ASim_Authentication_Native` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationNative.md)) |
| **Last Updated** | Dec 10, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationNative.yaml) |

## Description

This ASIM parser supports normalizing the native Microsoft Sentinel Authentication table (ASimAuthenticationEventLogs) to the ASIM Authentication Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | ✓ | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SynqlyIntegrationConnector](../connectors/synqlyintegrationconnector.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| [carbonBlackAWSS3](../connectors/carbonblackawss3.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

**Solutions:** [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md), [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

