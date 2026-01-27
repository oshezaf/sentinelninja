# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Fortinet FortiGate

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionFortinetFortiGate` |
| **Built-in Parser** | `_ASim_WebSession_FortinetFortiGate` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Fortinet FortiGate |
| **Parser Version** | 0.3.0 |
| **Last Updated** | Sep 12, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionFortinetFortiGate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionFortinetFortiGate.yaml) |

## Description

This ASIM parser supports filtering and normalizing Fortinet FortiGate logs produced by the Microsoft Sentinel Fortinet connector to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [web log fields](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/400992)
- [Fortinet FortiGate CEF setup](https://community.fortinet.com/t5/FortiGate/Technical-Tip-Integrate-FortiGate-with-Microsoft-Sentinel/ta-p/199709)
- [Fortinet FortiGate syslogd documentation](https://docs.fortinet.com/document/fortigate/7.2.0/cli-reference/450620/config-log-syslogd-setting)
- [Fortinet FortiGate extended logging for user agent, http method and x-forwarded-for](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/496081/enabling-extended-logging)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

