# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Aruba Networks ClearPass

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationArubaNetworksClearPass` |
| **Built-in Parser** | `_ASim_Authentication_ArubaNetworksClearPass` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Aruba Networks ClearPass |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationArubaNetworksClearPass.md)) |
| **Last Updated** | Sep 24, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationArubaNetworksClearPass.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationArubaNetworksClearPass.yaml) |

## Description

This ASIM parser supports normalizing Aruba Networks ClearPass authentication events, ingested via the CommonSecurityLog (CEF) connector, to the ASIM Authentication normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DestinationUserName contains "@"`<br>`DestinationUserName endswith "$"`<br>`DestinationUserName startswith "host/"`<br>`DestinationUserPrivileges !has "User Authenticated"`<br>`DestinationUserPrivileges has "Machine Authenticated"`<br>`DestinationUserPrivileges has "User Authenticated"`<br>`DeviceEventClassID in "2000,2001,2003"`<br>`DeviceEventClassID != "2003"`<br>`DeviceProduct == "ClearPass"`<br>`DeviceVendor == "Aruba Networks"`<br>`Reason has "Password expired"`<br>`Reason has "User not found"`<br>`Reason has "disabled"`<br>`Reason has "expired"`<br>`Reason has "locked"` | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [ArubaClearPass](../connectors/arubaclearpass.md) | [Aruba ClearPass (legacy connector)](../solutions/aruba-clearpass.md) |
| [ArubaClearPassAma](../connectors/arubaclearpassama.md) | [Aruba ClearPass (legacy connector)](../solutions/aruba-clearpass.md) |
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Aruba ClearPass (legacy connector)](../solutions/aruba-clearpass.md), [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Aruba ClearPass Policy Manager CEF/Syslog format](https://arubanetworking.hpe.com/techdocs/ClearPass/6.11/PolicyManager/Content/CPPM_UserGuide/Admin/syslogExportFilters.html)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

