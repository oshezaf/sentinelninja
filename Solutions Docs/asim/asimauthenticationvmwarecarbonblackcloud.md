# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Authentication parser for VMware Carbon Black Cloud

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationVMwareCarbonBlackCloud` |
| **Built-in Parser** | `_ASim_Authentication_VMwareCarbonBlackCloud` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMware Carbon Black Cloud |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 09 2023 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationVMwareCarbonBlackCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationVMwareCarbonBlackCloud.yaml) |

## Description

This ASIM parser supports normalizing VMware Carbon Black Cloud logs to the ASIM Authentication normalized schema. VMware Carbon Black Cloud events are captured through VMware Carbon Black Cloud data connector which ingests Carbon Black Audit, Notification and Event data into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [VMware Carbon Black Cloud documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/data-forwarder/schema/latest/endpoint.event-1.0.0/ https://developer.carbonblack.com/reference/cb-threathunter/latest/event-search-fields/)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

