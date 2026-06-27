# UnifiSiteManager

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Workbooks/UnifiSiteManager.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityIncident`](../tables/securityincident.md) | `Title contains "Critical"`<br>`Title contains "IPS"`<br>`Title contains "adopted"`<br>`Title contains "data connector"`<br>`Title contains "log shipping"`<br>`Title startswith "UniFi Site Manager"` | ✓ | ✗ | ✓ |
| [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |  | ? | ✓ | ? |
| [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) |  | ? | ✓ | ? |
| [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |  | ? | ✓ | ? |
| [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

