# UniFi Site Manager: New critical notifications appeared

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when the UniFi critical-notification count increases since the previous poll, signaling at least one new critical-severity alarm has appeared.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **ID** | `e4b75722-7239-f247-558f-d2e851ea0b38` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1499 |
| **Required Connectors** | [UniFiSiteManagerConnectorDefinition](../connectors/unifisitemanagerconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Analytic%20Rules/UniFiCloudNewcriticalnotificationsappeared.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

