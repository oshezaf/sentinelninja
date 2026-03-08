# Fortinet - Beacon pattern detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies patterns in the time deltas of contacts between internal and external IPs in Fortinet network data that are consistent with beaconing.  Accounts for randomness (jitter) and seasonality such as working hours that may have been introduced into the beacon pattern.  The lookback is set to 1d, the minimum granularity in time deltas is set to 60 seconds and the minimum number of beacons required to emit a  detection is set to 4.  Increase the lookback period to capture beacons with larger

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `3255ec41-6bd6-4f35-84b1-c032b18bbfcb` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071, T1571 |
| **Required Connectors** | [Fortinet](../connectors/fortinet.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/CommonSecurityLog/Fortinet-NetworkBeaconPattern.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

