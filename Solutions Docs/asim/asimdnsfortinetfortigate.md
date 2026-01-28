# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Fortinet FortiGate

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsFortinetFortiGate` |
| **Built-in Parser** | `_ASim_Dns_FortinetFortiGate` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Fortinet FortiGate |
| **Parser Version** | 0.1.2 |
| **Last Updated** | Dec 8, 2025 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsFortinetFortigate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsFortinetFortigate.yaml) |

## Description

This ASIM parser supports normalizing Fortinet FortiGate logs ingested in 'CommonSecurityLogs' table produced by the Microsoft Sentinel Fortinet connector to the ASIM DNS normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID endswith "54000"`<br>`DeviceEventClassID endswith "54200"`<br>`DeviceEventClassID endswith "54400"`<br>`DeviceEventClassID endswith "54401"`<br>`DeviceEventClassID endswith "54600"`<br>`DeviceEventClassID endswith "54601"`<br>`DeviceEventClassID endswith "54800"`<br>`DeviceEventClassID endswith "54801"`<br>`DeviceEventClassID endswith "54802"`<br>`DeviceEventClassID endswith "54803"`<br>`DeviceEventClassID endswith "54804"`<br>`DeviceEventClassID endswith "54805"`<br>`DeviceProduct startswith "Fortigate"`<br>`DeviceVendor == "Fortinet"` | ✓ | ✓ |

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

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Fortinet FortiGate DNS log message reference](https://docs.fortinet.com/document/fortigate/7.4.1/fortios-log-message-reference/229/dns)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

