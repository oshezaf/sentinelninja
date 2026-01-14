# Internet Access (Microsoft Defender for IoT)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This alert leverages Defender for IoT to detect an OT device communicating with Internet which is possibly an indication of improper configuration of an application or malicious activity on the network.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **ID** | `9ff3b13b-287a-4ed0-8f6b-7e7b66cbbcbd` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T0886 |
| **Required Connectors** | [IoT](../connectors/iot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Analytic%20Rules/IoTInternetAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

