# ForescoutComplianceStatus_CL

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

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ForescoutHostPropertyMonitor%5CData%20Connectors%5CForescoutHostPropertyMonitor_ccf/ForescoutHostPropertyMonitor_table_ForescoutComplianceStatus.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| EmIpAddr | string | Enterprise Manager IP address (Forescout appliance) |
| HostProperties | dynamic | Full JSON blob of all Forescout host properties |
| Ipv4Addr | string | IPv4 address of the endpoint |
| Ipv6Addr | dynamic | IPv6 address(es) of the endpoint |
| MacAddr | string | MAC address of the endpoint |
| PolicyName | dynamic | Compliance policy name |
| Properties | dynamic | Raw JSON blob of all Forescout host properties for this record |
| PropertyType | string | Type of property record: host, policy, or compliance |
| Status | dynamic | Compliance status for this policy (pass/fail) |
| TimeGenerated | datetime | Time the record was generated |
| UploadTime | datetime | Time the record was uploaded by Forescout |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) |  |
| [Forescout Host Property Monitor (Push Connector via Codeless Connector Framework)](../connectors/forescouthostpropertymonitor.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [ForescoutHostPropertyMonitor](../solutions/forescouthostpropertymonitor.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ForescoutHostPropertyMonitorWorkbook](../content/forescouthostpropertymonitor-forescouthostpropertymonitorworkbook-cbfbbf6d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

