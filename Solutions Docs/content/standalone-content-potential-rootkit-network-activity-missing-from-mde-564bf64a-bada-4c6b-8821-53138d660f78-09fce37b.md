# Potential rootkit network activity missing from MDE

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies outbound network connections logged by perimeter firewalls that are entirely missing from Microsoft Defender for Endpoint (MDE) telemetry. This discrepancy strongly indicates a threat actor operating in kernel space, to hide C2 traffic.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `564bf64a-bada-4c6b-8821-53138d660f78` |
| **Tactics** | DefenseEvasion, CommandAndControl, Exfiltration |
| **Techniques** | T1562.001, T1562.004, T1011 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [Cisco](../connectors/cisco.md), [CheckPoint](../connectors/checkpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Defense%20evasion/PotentialRootkitTrafficMissingFromMDE.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | `DstIpAddr !in "8.8.8.8,1.1.1.1"` | ✓ | ✓ | ✓ |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [SynqlyIntegrationConnector](../connectors/synqlyintegrationconnector.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |

**Solutions:** [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

