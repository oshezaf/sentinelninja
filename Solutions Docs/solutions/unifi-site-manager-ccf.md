# ⚠️ UniFi Site Manager (CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/UnifiSiteManager.svg" alt="UniFi Site Manager (CCF) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | UniFi Site Manager (CCF) |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | Networking,Security - Network |
| **Version** | 3.0.0 |
| **Author** | noodlemctwoodle - ccfconnectors.county118@passmail.com |
| **First Published** | 2026-05-11 |
| **Last Updated** | 2026-05-11 |
| **Solution Folder** | [UniFi Site Manager (CCF)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29) |

The [UniFi Site Manager](https://unifi.ui.com/) solution for Microsoft Sentinel provides cloud-side telemetry ingestion via the [Site Manager API](https://developer.ui.com/site-manager-api/) for sites, devices, hosts and ISP metrics. Ships analytics rules covering ISP downtime, WAN issues, IPS/IDS posture, firmware drift, device offline events, configuration changes and security signals, plus an operations workbook for at-a-glance estate health.

**Data Connector:** UniFi Site Manager (CCF) — single Connect deploys 4 polling rules with a single API key.

**Underlying API tier:** the Site Manager API is available on all UniFi cloud plans. The Audit log endpoint requires Pro+; this solution does not depend on it.

**Pre-requisites:** A UniFi Site Manager API key is required. Generate one at https://unifi.ui.com/api.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) | [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) | Analytics, Hunting, Workbooks |
| [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) | [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) | Analytics, Hunting, Workbooks |
| [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) | [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) | Analytics, Hunting, Workbooks |
| [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) | [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) | Analytics, Hunting, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **31 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 22 |
| Hunting Queries | 8 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [UniFi Site Manager: Console firmware likely security-relevant](../content/unifi-site-manager-ccf-unifi-site-manager-console-firmware-likely-security-relevant-4f7b9e6c-5d1a-4392-8c2b-3e4f5a6b7c8d-efd1cdee.md) | High | InitialAccess | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: Controller Connection State Change](../content/unifi-site-manager-ccf-unifi-site-manager-controller-connection-state-change-ac1efe0f-654e-264e-07be-c1b60e698343-3c91e6f0.md) | Medium | Impact, CommandAndControl | [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) |
| [UniFi Site Manager: Data Connector Health](../content/unifi-site-manager-ccf-unifi-site-manager-data-connector-health-1fb5c195-9bff-e18b-3e8f-5123f46bff9d-d7ce8ffe.md) | Medium | DefenseEvasion | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md)<br>[`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md)<br>[`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md)<br>[`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: Device Offline](../content/unifi-site-manager-ccf-unifi-site-manager-device-offline-f3fa4f3f-c8db-ae35-ee06-04de2dfac511-4e587b03.md) | Medium | Impact | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: External WAN IP changed](../content/unifi-site-manager-ccf-unifi-site-manager-external-wan-ip-changed-ef1a293a-9e2b-b087-7816-2610814ed2d4-3737ecc9.md) | High | Reconnaissance | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: Firmware Update Available](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-update-available-83b88ab5-21ca-5dd2-df91-6db4354f9360-7a3c48d6.md) | Low | InitialAccess | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: IPS signature count dropped >50%](../content/unifi-site-manager-ccf-unifi-site-manager-ips-signature-count-dropped-50-aa188a24-783a-76a1-cd11-3bcac0e97de9-b2cafcd5.md) | Medium | DefenseEvasion | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: IPS/IDS disabled or misconfigured](../content/unifi-site-manager-ccf-unifi-site-manager-ips-ids-disabled-or-misconfigured-36a64027-729e-51d7-16bf-8e926c03712a-79e9233f.md) | High | DefenseEvasion | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: ISP Downtime](../content/unifi-site-manager-ccf-unifi-site-manager-isp-downtime-b54123ef-cfa7-769e-a959-f437404a1192-56e7d806.md) | High | Impact | [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |
| [UniFi Site Manager: ISP High Latency](../content/unifi-site-manager-ccf-unifi-site-manager-isp-high-latency-77d8f6d0-b45c-ea6e-7c58-daac194a095f-abf07f90.md) | Medium | Impact | [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |
| [UniFi Site Manager: ISP Packet Loss](../content/unifi-site-manager-ccf-unifi-site-manager-isp-packet-loss-6f2d71d6-e6c4-0da4-91da-e8192dc5b12c-01172d66.md) | Medium | Impact | [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |
| [UniFi Site Manager: ISP SLA Breach](../content/unifi-site-manager-ccf-unifi-site-manager-isp-sla-breach-fecd4ab1-b24e-8413-9164-e3621c8d7caa-c71a536e.md) | Medium | Impact | [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |
| [UniFi Site Manager: Multiple Devices Offline](../content/unifi-site-manager-ccf-unifi-site-manager-multiple-devices-offline-9283b576-5350-fca1-3979-dacb6acd1d16-e4324d9f.md) | High | Impact | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: New Device Adopted](../content/unifi-site-manager-ccf-unifi-site-manager-new-device-adopted-e69be544-9476-35bb-2533-fa8c650dcd46-d519edad.md) | Informational | InitialAccess, Persistence | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: New WAN issue index recorded](../content/unifi-site-manager-ccf-unifi-site-manager-new-wan-issue-index-recorded-17d09e1b-8a3f-776b-6981-dbe2cc74d097-079ccb3a.md) | Medium | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: New WAN2 (secondary) issue recorded](../content/unifi-site-manager-ccf-unifi-site-manager-new-wan2-secondary-issue-recorded-b16f13ae-343b-9513-e684-469cdf9471b2-fa617154.md) | Medium | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: New critical notifications appeared](../content/unifi-site-manager-ccf-unifi-site-manager-new-critical-notifications-appeared-e4b75722-7239-f247-558f-d2e851ea0b38-c5146a32.md) | Medium | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: Pending firmware updates outstanding for 7d+](../content/unifi-site-manager-ccf-unifi-site-manager-pending-firmware-updates-outstanding-for-7d+-d943d401-861e-7186-d42c-c505fbf7c619-b37c1db1.md) | Low | Reconnaissance | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: Site Health Critical](../content/unifi-site-manager-ccf-unifi-site-manager-site-health-critical-c8875ebb-cc6e-14e4-4216-d8b06fd92c90-96e99041.md) | High | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: System log shipping disabled](../content/unifi-site-manager-ccf-unifi-site-manager-system-log-shipping-disabled-f32950bc-6553-4c03-2686-a9c29ef318e8-3d860f6a.md) | High | DefenseEvasion | [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) |
| [UniFi Site Manager: WAN uptime below 99%](../content/unifi-site-manager-ccf-unifi-site-manager-wan-uptime-below-99-2bb29f25-833a-5544-4a8e-9bf6c4d8da56-c45d8533.md) | Medium | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: WiFi quality degraded (high TX retry)](../content/unifi-site-manager-ccf-unifi-site-manager-wifi-quality-degraded-high-tx-retry-f5130582-9e0e-cb47-af0b-dcd8b261fa04-e554dfe0.md) | Low | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [UniFi Site Manager: Console group membership churn](../content/unifi-site-manager-ccf-unifi-site-manager-console-group-membership-churn-8e22eb19-51df-37f7-468f-9d112fff9098-98a99608.md) | Persistence | [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) |
| [UniFi Site Manager: Devices adopted outside business hours](../content/unifi-site-manager-ccf-unifi-site-manager-devices-adopted-outside-business-hours-77bba2d0-92e1-408d-9e43-2d6e5e81538e-a47bd3d1.md) | Persistence | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: Devices flapping online/offline](../content/unifi-site-manager-ccf-unifi-site-manager-devices-flapping-online-offline-0f489145-b472-a821-a166-a6c68e346ad2-e0d5ccfa.md) | Impact | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: Firmware drift hotspots](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-drift-hotspots-1d767977-460a-29c3-06f7-799a91a80daf-98dd6640.md) | Reconnaissance | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: Firmware version diversity within a model](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-version-diversity-within-a-model-2b0ca272-72fd-c2c2-6728-7f287c22e275-fb38da72.md) | Reconnaissance | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) |
| [UniFi Site Manager: Long-tail ISP latency hotspots (P95)](../content/unifi-site-manager-ccf-unifi-site-manager-long-tail-isp-latency-hotspots-p95-3f49ba8c-8995-9d38-579d-24afa09f5a2a-7d6d26cc.md) | Impact | [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) |
| [UniFi Site Manager: Sites with persistent WAN issues](../content/unifi-site-manager-ccf-unifi-site-manager-sites-with-persistent-wan-issues-2dbe3bb8-1522-e491-2eac-72bb0923c5eb-a78b6f92.md) | Impact | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |
| [UniFi Site Manager: WAN external IP geographic deviation](../content/unifi-site-manager-ccf-unifi-site-manager-wan-external-ip-geographic-deviation-9c0a7304-287e-f1b2-8b4f-c7444b8511ea-7ff20a11.md) | Reconnaissance | [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) | [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md)<br>[`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md)<br>[`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md)<br>[`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

## Additional Documentation

> 📄 *Source: [UniFi Site Manager (CCF)/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/README.md)*

# UniFi Site Manager

The UniFi Site Manager solution for Microsoft Sentinel ingests cloud-side telemetry from the [UniFi Site Manager API](https://developer.ui.com/site-manager-api/) and ships analytics rules + a workbook for monitoring UniFi-managed networks.

## Contents

- **Data Connector** — single Sentinel UI card ("UniFi Site Manager (CCF)") that deploys four polling rules from one API key. Polls Sites, Devices, Hosts and ISP Metrics every 5 minutes.
- **Custom tables** — `Unifi_SiteManager_Sites_CL`, `Unifi_SiteManager_Devices_CL`, `Unifi_SiteManager_Hosts_CL`, `Unifi_SiteManager_ISPMetrics_CL`
- **21 analytics rules** — covering ISP downtime, latency, packet loss, SLA breach, WAN issues (incl. WAN2/secondary failover), IPS/IDS posture changes, firmware drift, device offline events, controller connection state, critical notifications (delta-based), external WAN IP rotation, system-log shipping disabled (defense-evasion), and data connector health.
- **8 hunting queries** — firmware-drift hotspots, long-tail latency, device flapping, WAN IP geographic deviation, firmware version diversity, persistent WAN issues, off-hours device adoption, console group membership churn.
- **Workbook** — Operations dashboard with 6 tabs: Overview, Sites, ISP Performance, Devices, Security, Operations. Includes open-incident view, multi-WAN status panels, severity-classified incident feed, and color-coded latency thresholds.

## Pre-requisites

1. A Microsoft Sentinel-enabled Log Analytics workspace.
2. A Data Collection Endpoint (DCE) in the same region.
3. A UniFi Site Manager API key. Generate one at <https://unifi.ui.com/api> (Site Manager → Account → API → Create API Key). Required scope: **Audit Logs - Read** is optional; the four ingestion endpoints used here do not require it.

## Connect

1. Microsoft Sentinel → **Content hub** → install the **UniFi Site Manager** solution.
2. Sentinel → **Data connectors** → search **"UniFi Site Manager (CCF)"** → **Open connector page**.
3. Paste your API key → **Connect**. All four poll rules instantiate from a single click.

## Tier requirements

Site Manager API endpoints used by this connector are available on all UniFi cloud plans. The connector does **not** depend on UniFi network flow logs or the audit log API, both of which require Pro+.

## Analytics rule strategy

State-based rules (IPS/IDS disabled, WAN issues, critical notifications, system-log shipping disabled) fire only on **state transitions** — they detect the change from `enabled → disabled`, not the persistent state. This keeps incident volume proportional to actual events and avoids alert storms during sustained outages.

ISP performance rules (downtime, latency, packet loss, SLA) operate on rolling windows of the `Unifi_SiteManager_ISPMetrics_CL` table.

## Support

This is a community-supported solution maintained by Fetch Labs. File issues at <https://github.com/noodlemctwoodle/Azure-Sentinel/issues>.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 22-05-2026 | Initial Solution Release - UniFi Site Manager (CCF) with single-card multi-poller (sites, hosts, devices, ISP metrics), 22 analytic rules, 8 hunting queries, operations workbook and Unifi_SiteManager_* custom tables |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

