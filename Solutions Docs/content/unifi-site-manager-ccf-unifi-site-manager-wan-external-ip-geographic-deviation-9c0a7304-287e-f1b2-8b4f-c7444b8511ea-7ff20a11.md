# UniFi Site Manager: WAN external IP geographic deviation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Sites where the WAN external IP changed ASN or ISP within the last 30 days. Routine DHCP renewal stays within the same ISP; an ASN/ISP change suggests provider switch, BGP hijack, or routing anomaly that warrants verification.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **ID** | `9c0a7304-287e-f1b2-8b4f-c7444b8511ea` |
| **Kind** | HuntingQuery |
| **Tactics** | Reconnaissance |
| **Techniques** | T1590 |
| **Required Connectors** | [UniFiSiteManagerConnectorDefinition](../connectors/unifisitemanagerconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Hunting%20Queries/UniFiCloudWANIPGeoDeviation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

