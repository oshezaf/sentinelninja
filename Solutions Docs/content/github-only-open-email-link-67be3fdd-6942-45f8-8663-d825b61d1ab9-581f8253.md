# Open email link

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query for links opened from mail apps - if a detection occurred right afterwards. As there are many links opened from mails, to have a successful hunt we should have some filter or join with some other signal,. Such as suspicious processes, network connections, etc. Therefore, in this example, we query for alerts that might be related to links sent via email. This could be indicative of a phishing or spear-phishing attacks. Tags: #EmailLink, #Phishing, #GetNearbyAlerts. Explaining the underlying

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `67be3fdd-6942-45f8-8663-d825b61d1ab9` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Delivery/Open%20email%20link.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AlertInfo`](../tables/alertinfo.md) |  | ✓ | ✗ |
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType == "BrowserLaunchedToOpenUrl"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

