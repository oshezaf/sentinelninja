# Unifi_SiteManager_Hosts_CL

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

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Unifi_SiteManager_Hosts_CL.json)

| Column Name | Type |
|:------------|:-----|
| HardwareId | string |
| HostType | string |
| Id | string |
| IpAddress | string |
| IsBlocked | bool |
| LastConnectionStateChange | string |
| LatestBackupTime | string |
| Owner | bool |
| RegistrationTime | string |
| ReportedState | dynamic |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| UserData | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [UniFi Site Manager (CCF)](../connectors/unifisitemanagerconnector.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (3)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Controller Connection State Change](../content/unifi-site-manager-ccf-unifi-site-manager-controller-connection-state-change-ac1efe0f-654e-264e-07be-c1b60e698343-3c91e6f0.md) |  |
| [UniFi Site Manager: Data Connector Health](../content/unifi-site-manager-ccf-unifi-site-manager-data-connector-health-1fb5c195-9bff-e18b-3e8f-5123f46bff9d-d7ce8ffe.md) |  |
| [UniFi Site Manager: System log shipping disabled](../content/unifi-site-manager-ccf-unifi-site-manager-system-log-shipping-disabled-f32950bc-6553-4c03-2686-a9c29ef318e8-3d860f6a.md) |  |

### Hunting Queries (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Console group membership churn](../content/unifi-site-manager-ccf-unifi-site-manager-console-group-membership-churn-8e22eb19-51df-37f7-468f-9d112fff9098-98a99608.md) |  |

### Workbooks (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

