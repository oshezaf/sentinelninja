# UniFi Site Manager: Console firmware likely security-relevant

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies UniFi console / gateway devices (UDM, Cloud Key, USG, UXG, gateway) running firmware behind a major or minor version of the available release. Major/minor firmware jumps on consoles routinely include security advisory fixes (e.g. UniFi Security Advisory Bulletins). Patch-level updates are excluded since those are typically minor non-security bug fixes covered by the lower-severity FirmwareUpdateAvailable rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **ID** | `4f7b9e6c-5d1a-4392-8c2b-3e4f5a6b7c8d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [UniFiSiteManagerConnectorDefinition](../connectors/unifisitemanagerconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Analytic%20Rules/UniFiCloudConsoleSecurityFirmwareGap.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

