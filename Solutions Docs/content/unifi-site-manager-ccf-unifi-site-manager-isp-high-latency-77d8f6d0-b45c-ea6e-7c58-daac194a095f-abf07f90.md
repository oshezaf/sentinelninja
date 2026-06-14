# UniFi Site Manager: ISP High Latency

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when ISP latency exceeds acceptable thresholds, impacting VoIP quality, video conferencing, and overall application performance.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **ID** | `77d8f6d0-b45c-ea6e-7c58-daac194a095f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1499 |
| **Required Connectors** | [UniFiSiteManagerConnectorDefinition](../connectors/unifisitemanagerconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Analytic%20Rules/UniFiCloudISPHighLatency.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

