# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create ASIM parser for VMware Carbon Black Cloud

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessCreateVMwareCarbonBlackCloud` |
| **Built-in Parser** | `_ASim_ProcessEvent_CreateVMwareCarbonBlackCloud` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMware Carbon Black Cloud |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Dec 11, 2023 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventCreate](asimprocesseventcreate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessCreateVMwareCarbonBlackCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessCreateVMwareCarbonBlackCloud.yaml) |

## Description

This ASIM parser supports normalizing VMware Carbon Black Cloud logs to the ASIM Process Create normalized schema. VMware Carbon Black Cloud events are captured through VMware Carbon Black Cloud data connector which ingests Carbon Black Audit, Notification and Event data into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) |
| [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [VMware Carbon Black Cloud documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/data-forwarder/schema/latest/endpoint.event-1.0.0/ https://developer.carbonblack.com/reference/cb-threathunter/latest/event-search-fields/)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

