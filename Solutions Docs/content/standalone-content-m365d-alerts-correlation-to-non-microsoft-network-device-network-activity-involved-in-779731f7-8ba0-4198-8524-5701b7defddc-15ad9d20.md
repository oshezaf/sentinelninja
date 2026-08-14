# M365D Alerts Correlation to non-Microsoft Network device network activity involved in successful sign-in Activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This content is employed to correlate with Microsoft Defender XDR phishing-related alerts. It focuses on instances where a user successfully connects to a phishing URL from a non-Microsoft network device and subsequently makes successful sign-in attempts from the phishing IP address.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `779731f7-8ba0-4198-8524-5701b7defddc` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [OfficeATP](../connectors/officeatp.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [Zscaler](../connectors/zscaler.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/SucessfullSiginFromPhingLink.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct startswith "FireWall"`<br>`DeviceProduct startswith "FortiGate"`<br>`DeviceProduct startswith "NSSWeblog"`<br>`DeviceProduct startswith "PAN"`<br>`DeviceProduct startswith "URL"`<br>`DeviceProduct startswith "VPN"`<br>`DeviceVendor has_any "Check Point,Fortinet,Palo Alto Networks,Zscaler"` | ✓ | ✓ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [Fortinet](../connectors/fortinet.md) | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel (legacy connector)](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| [FortinetAma](../connectors/fortinetama.md) | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel (legacy connector)](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel (legacy connector)](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Microsoft Entra ID](../solutions/microsoft-entra-id.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

