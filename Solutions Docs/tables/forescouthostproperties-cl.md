# ForescoutHostProperties_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ForescoutHostProperties_CL.json)

| Column Name | Type |
|:------------|:-----|
| EmIpAddr | string |
| HostProperties | dynamic |
| HostProperties_DnsniffEvent_s | string |
| HostProperties_EmIpAddr_s | string |
| HostProperties_IpAddr_s | string |
| HostProperties_Ipv4Addr_s | string |
| HostProperties_Ipv6Addr_s | string |
| Ipv4Addr | string |
| Ipv6Addr | dynamic |
| MacAddr | string |
| TimeGenerated | datetime |
| UploadTime | datetime |

## Solutions (1)

This table is used by the following solutions:

- [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Forescout-DNS_Sniff_Event_Monitor](../content/forescouthostpropertymonitor-forescout-dns-sniff-event-monitor-d272e277-f285-4dbc-ae2d-7f65ba64a79e-39ee6063.md) |  |

### Workbooks (1)

**In solution [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ForescoutHostPropertyMonitorWorkbook](../content/forescouthostpropertymonitor-forescouthostpropertymonitorworkbook-cbfbbf6d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

