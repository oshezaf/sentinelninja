# Unauthorized DHCP configuration in the network (Microsoft Defender for IoT)

This alert leverages Defender for IoT to detect an unauthorized DHCP configuration indicating a possible unauthorized device configuration.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **ID** | `c52ec521-9188-4a9e-a4cd-34a3dfbc3d27` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T0842 |
| **Required Connectors** | [IoT](../connectors/iot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Analytic%20Rules/IoTUnauthorizedNetworkConfiguration.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

