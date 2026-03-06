# AZFWThreatIntel

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZFWThreatIntel table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwthreatintel) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwthreatintel)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Action | string | Action taken by the firewall following the Threat Intelligence hit. |
| DestinationIp | string | Packet's destination IP address. |
| DestinationPort | int | Packet's destination port. |
| Fqdn | string | Request's target address in FQDN (Fully qualified Domain Name). For example:www.microsoft.com. |
| IsTlsInspected | bool | True if connection is TLS inspected. False otherwise. |
| Protocol | string | Packet's network protocol. For example: UDP, TCP. |
| SourceIp | string | Packet's source IP address. |
| SourcePort | int | Packet's source port. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetUrl | string | Request's target address URL. Available only for HTTP or TLS-inspected HTTPS requests. For example:https://www.microsoft.com/en-us/about. |
| TenantId | string | The Log Analytics workspace ID |
| ThreatDescription | string | Description of the Threat that was identified by the firewall. |
| TimeGenerated | datetime | Timestamp (UTC) when the data plane log was created. |
| Type | string | The name of the table |

## Solutions (2)

This table is used by the following solutions:

- [Azure Firewall](../solutions/azure-firewall.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Azure Firewall](../connectors/azurefirewall.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Multiple Sources Affected by the Same TI Destination](../content/azure-firewall-multiple-sources-affected-by-the-same-ti-destination-4644baf7-3464-45dd-bd9d-e07687e25f81-c5003c22.md) |  |

### Workbooks (2)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureFirewallWorkbook-StructuredLogs](../content/azure-firewall-azurefirewallworkbook-structuredlogs-e125f99e.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/azurefirewalls`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

