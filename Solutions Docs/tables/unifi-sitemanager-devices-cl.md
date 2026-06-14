# Unifi_SiteManager_Devices_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Unifi_SiteManager_Devices_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdoptionTime | string |
| FirmwareStatus | string |
| Id | string |
| Ip | string |
| IsConsole | bool |
| IsManaged | bool |
| Mac | string |
| Model | string |
| Name | string |
| Note | string |
| ProductLine | string |
| Shortname | string |
| SourceSystem | string |
| StartupTime | string |
| Status | string |
| TenantId | string |
| TimeGenerated | datetime |
| Uidb | dynamic |
| UpdateAvailable | string |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) |  |

---

## Content Items Using This Table (11)

### Analytic Rules (6)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Console firmware likely security-relevant](../content/unifi-site-manager-ccf-unifi-site-manager-console-firmware-likely-security-relevant-4f7b9e6c-5d1a-4392-8c2b-3e4f5a6b7c8d-efd1cdee.md) |  |
| [UniFi Site Manager: Data Connector Health](../content/unifi-site-manager-ccf-unifi-site-manager-data-connector-health-1fb5c195-9bff-e18b-3e8f-5123f46bff9d-d7ce8ffe.md) |  |
| [UniFi Site Manager: Device Offline](../content/unifi-site-manager-ccf-unifi-site-manager-device-offline-f3fa4f3f-c8db-ae35-ee06-04de2dfac511-4e587b03.md) |  |
| [UniFi Site Manager: Firmware Update Available](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-update-available-83b88ab5-21ca-5dd2-df91-6db4354f9360-7a3c48d6.md) |  |
| [UniFi Site Manager: Multiple Devices Offline](../content/unifi-site-manager-ccf-unifi-site-manager-multiple-devices-offline-9283b576-5350-fca1-3979-dacb6acd1d16-e4324d9f.md) |  |
| [UniFi Site Manager: New Device Adopted](../content/unifi-site-manager-ccf-unifi-site-manager-new-device-adopted-e69be544-9476-35bb-2533-fa8c650dcd46-d519edad.md) |  |

### Hunting Queries (4)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Devices adopted outside business hours](../content/unifi-site-manager-ccf-unifi-site-manager-devices-adopted-outside-business-hours-77bba2d0-92e1-408d-9e43-2d6e5e81538e-a47bd3d1.md) |  |
| [UniFi Site Manager: Devices flapping online/offline](../content/unifi-site-manager-ccf-unifi-site-manager-devices-flapping-online-offline-0f489145-b472-a821-a166-a6c68e346ad2-e0d5ccfa.md) |  |
| [UniFi Site Manager: Firmware drift hotspots](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-drift-hotspots-1d767977-460a-29c3-06f7-799a91a80daf-98dd6640.md) |  |
| [UniFi Site Manager: Firmware version diversity within a model](../content/unifi-site-manager-ccf-unifi-site-manager-firmware-version-diversity-within-a-model-2b0ca272-72fd-c2c2-6728-7f287c22e275-fb38da72.md) |  |

### Workbooks (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

