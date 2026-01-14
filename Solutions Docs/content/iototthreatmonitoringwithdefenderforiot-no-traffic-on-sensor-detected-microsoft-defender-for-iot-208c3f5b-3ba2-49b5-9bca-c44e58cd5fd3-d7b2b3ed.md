# No traffic on Sensor Detected (Microsoft Defender for IoT)

This alert leverages Defender for IoT to detect that a sensor can no longer detect the network traffic, which indicates that the system is potentially insecure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **ID** | `208c3f5b-3ba2-49b5-9bca-c44e58cd5fd3` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InhibitResponseFunction |
| **Techniques** | T0881 |
| **Required Connectors** | [IoT](../connectors/iot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Analytic%20Rules/IoTINoSensorTrafficDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

