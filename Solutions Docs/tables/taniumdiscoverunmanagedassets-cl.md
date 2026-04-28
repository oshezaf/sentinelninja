# TaniumDiscoverUnmanagedAssets_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (30 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium%5CData%20Connectors/Table_DiscoverUnmanagedAssets.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Arp_b | bool |  |
| AwsApi_b | bool |  |
| CentralizedNmap_b | bool |  |
| Connected_b | bool |  |
| CreatedAt_t | datetime |  |
| FirstManagedAt_t | datetime |  |
| HostName_s | string |  |
| id_d | real |  |
| IPAddress | string |  |
| Labels_s | string |  |
| LastDiscoveredAt_t | datetime |  |
| LastManagedAt_t | datetime |  |
| Locations_s | string |  |
| MacAddress_s | string |  |
| MacOrganization_s | string |  |
| Managed_b | bool |  |
| NatIpAddress_s | string |  |
| Nmap_b | bool |  |
| Os_s | string |  |
| OsGeneration_s | string |  |
| Ping_b | bool |  |
| Ports_s | string |  |
| Profile_s | string |  |
| SatelliteDecId_g | guid |  |
| SatelliteName_s | string |  |
| SatelliteNmap_b | bool |  |
| TaniumComputerId_d | real |  |
| TimeGenerated | datetime | The time at which the data was generated |
| Unmanageable_d | real |  |
| UpdatedAt_t | datetime |  |

## Solutions (1)

This table is used by the following solutions:

- [Tanium](../solutions/tanium.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tanium's CCF Push Connector](../connectors/taniumconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Tanium](../solutions/tanium.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TaniumWorkbook](../content/tanium-taniumworkbook-97052723.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

