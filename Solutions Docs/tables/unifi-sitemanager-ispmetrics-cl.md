# Unifi_SiteManager_ISPMetrics_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (7 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Unifi_SiteManager_ISPMetrics_CL.json)

| Column Name | Type |
|:------------|:-----|
| HostId | string |
| MetricType | string |
| Periods | dynamic |
| SiteId | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |

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

## Content Items Using This Table (7)

### Analytic Rules (5)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Data Connector Health](../content/unifi-site-manager-ccf-unifi-site-manager-data-connector-health-1fb5c195-9bff-e18b-3e8f-5123f46bff9d-d7ce8ffe.md) |  |
| [UniFi Site Manager: ISP Downtime](../content/unifi-site-manager-ccf-unifi-site-manager-isp-downtime-b54123ef-cfa7-769e-a959-f437404a1192-56e7d806.md) |  |
| [UniFi Site Manager: ISP High Latency](../content/unifi-site-manager-ccf-unifi-site-manager-isp-high-latency-77d8f6d0-b45c-ea6e-7c58-daac194a095f-abf07f90.md) |  |
| [UniFi Site Manager: ISP Packet Loss](../content/unifi-site-manager-ccf-unifi-site-manager-isp-packet-loss-6f2d71d6-e6c4-0da4-91da-e8192dc5b12c-01172d66.md) |  |
| [UniFi Site Manager: ISP SLA Breach](../content/unifi-site-manager-ccf-unifi-site-manager-isp-sla-breach-fecd4ab1-b24e-8413-9164-e3621c8d7caa-c71a536e.md) |  |

### Hunting Queries (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [UniFi Site Manager: Long-tail ISP latency hotspots (P95)](../content/unifi-site-manager-ccf-unifi-site-manager-long-tail-isp-latency-hotspots-p95-3f49ba8c-8995-9d38-579d-24afa09f5a2a-7d6d26cc.md) |  |

### Workbooks (1)

**In solution [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [UnifiSiteManager](../content/unifi-site-manager-ccf-unifisitemanager-eafe5588.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

