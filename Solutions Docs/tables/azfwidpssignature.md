# AZFWIdpsSignature

Reference for AZFWIdpsSignature table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwidpssignature) |

## Solutions (3)

This table is used by the following solutions:

- [Azure Firewall](../solutions/azure-firewall.md)
- [Dataminr Pulse](../solutions/dataminr-pulse.md)
- [SOC Handbook](../solutions/soc-handbook.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Azure Firewall](../connectors/azurefirewall.md)

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**
- [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md)
- [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md)

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

