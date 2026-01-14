# AZFWThreatIntel

Reference for AZFWThreatIntel table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwthreatintel) |

## Solutions (3)

This table is used by the following solutions:

- [Azure Firewall](../solutions/azure-firewall.md)
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [SOC Handbook](../solutions/soc-handbook.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Firewall](../connectors/azurefirewall.md)

---

## Content Items Using This Table (4)

### Analytic Rules (1)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [Multiple Sources Affected by the Same TI Destination](../content/azure-firewall-multiple-sources-affected-by-the-same-ti-destination-4644baf7-3464-45dd-bd9d-e07687e25f81-c5003c22.md)

### Workbooks (3)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md)

**In solution [Dataminr Pulse](../solutions/dataminr-pulse.md):**
- [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/azurefirewalls`

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

