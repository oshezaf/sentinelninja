# WireData

Reference for WireData table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security, Virtual Machines |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wiredata) |

## Solutions (2)

This table is used by the following solutions:

- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)

---

## Content Items Using This Table (2)

### Hunting Queries (1)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI Map File Entity to WireData Event](../content/threat-intelligence-ti-map-file-entity-to-wiredata-event-689a9475-440b-4e69-8ab1-a5e241685f39-12f328f6.md)

### Workbooks (1)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

