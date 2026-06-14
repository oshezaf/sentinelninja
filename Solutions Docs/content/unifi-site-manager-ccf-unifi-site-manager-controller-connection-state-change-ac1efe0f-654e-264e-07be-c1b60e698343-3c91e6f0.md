# UniFi Site Manager: Controller Connection State Change

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when a UniFi controller (Cloud Key, Dream Machine, etc.) experiences a connection state change, which may indicate a network outage, power loss, or device failure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **ID** | `ac1efe0f-654e-264e-07be-c1b60e698343` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, CommandAndControl |
| **Techniques** | T1489, T1071 |
| **Required Connectors** | [UniFiSiteManagerConnectorDefinition](../connectors/unifisitemanagerconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Analytic%20Rules/UniFiCloudControllerConnectionStateChange.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

