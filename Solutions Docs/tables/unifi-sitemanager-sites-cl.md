# Unifi_SiteManager_Sites_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Community *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Unifi_SiteManager_Sites_CL.json)

| Column Name | Type |
|:------------|:-----|
| CriticalNotifications | int |
| Description | string |
| GatewayMac | string |
| GuestClients | int |
| HostId | string |
| InspectionState | string |
| IpsMode | string |
| IsOwner | bool |
| Meta | dynamic |
| OfflineDevices | int |
| OfflineGatewayDevices | int |
| OfflineWifiDevices | int |
| OfflineWiredDevices | int |
| PendingUpdateDevices | int |
| Permission | string |
| SiteId | string |
| SiteName | string |
| SiteStatistics | dynamic |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Timezone | string |
| TotalDevices | int |
| WanUptimePct | real |
| WifiClients | int |
| WifiTxRetryPct | real |
| WiredClients | int |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) |  |

---

## Content Items Using This Table (14)

### Analytic Rules (11)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Data Connector Health](../content/unifi-site-manager-ccf-unifi-site-manager-data-connector-health-1fb5c195-9bff-e18b-3e8f-5123f46bff9d-d7ce8ffe.md) |  |
| [UniFi Site Manager: External WAN IP changed](../content/unifi-site-manager-ccf-unifi-site-manager-external-wan-ip-changed-ef1a293a-9e2b-b087-7816-2610814ed2d4-3737ecc9.md) |  |
| [UniFi Site Manager: IPS signature count dropped >50%](../content/unifi-site-manager-ccf-unifi-site-manager-ips-signature-count-dropped-50-aa188a24-783a-76a1-cd11-3bcac0e97de9-b2cafcd5.md) |  |
| [UniFi Site Manager: IPS/IDS disabled or misconfigured](../content/unifi-site-manager-ccf-unifi-site-manager-ips-ids-disabled-or-misconfigured-36a64027-729e-51d7-16bf-8e926c03712a-79e9233f.md) |  |
| [UniFi Site Manager: New WAN issue index recorded](../content/unifi-site-manager-ccf-unifi-site-manager-new-wan-issue-index-recorded-17d09e1b-8a3f-776b-6981-dbe2cc74d097-079ccb3a.md) |  |
| [UniFi Site Manager: New WAN2 (secondary) issue recorded](../content/unifi-site-manager-ccf-unifi-site-manager-new-wan2-secondary-issue-recorded-b16f13ae-343b-9513-e684-469cdf9471b2-fa617154.md) |  |
| [UniFi Site Manager: New critical notifications appeared](../content/unifi-site-manager-ccf-unifi-site-manager-new-critical-notifications-appeared-e4b75722-7239-f247-558f-d2e851ea0b38-c5146a32.md) |  |
| [UniFi Site Manager: Pending firmware updates outstanding for 7d+](../content/unifi-site-manager-ccf-unifi-site-manager-pending-firmware-updates-outstanding-for-7d+-d943d401-861e-7186-d42c-c505fbf7c619-b37c1db1.md) |  |
| [UniFi Site Manager: Site Health Critical](../content/unifi-site-manager-ccf-unifi-site-manager-site-health-critical-c8875ebb-cc6e-14e4-4216-d8b06fd92c90-96e99041.md) |  |
| [UniFi Site Manager: WAN uptime below 99%](../content/unifi-site-manager-ccf-unifi-site-manager-wan-uptime-below-99-2bb29f25-833a-5544-4a8e-9bf6c4d8da56-c45d8533.md) |  |
| [UniFi Site Manager: WiFi quality degraded (high TX retry)](../content/unifi-site-manager-ccf-unifi-site-manager-wifi-quality-degraded-high-tx-retry-f5130582-9e0e-cb47-af0b-dcd8b261fa04-e554dfe0.md) |  |

### Hunting Queries (2)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Sites with persistent WAN issues](../content/unifi-site-manager-ccf-unifi-site-manager-sites-with-persistent-wan-issues-2dbe3bb8-1522-e491-2eac-72bb0923c5eb-a78b6f92.md) |  |
| [UniFi Site Manager: WAN external IP geographic deviation](../content/unifi-site-manager-ccf-unifi-site-manager-wan-external-ip-geographic-deviation-9c0a7304-287e-f1b2-8b4f-c7444b8511ea-7ff20a11.md) |  |

### Workbooks (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

