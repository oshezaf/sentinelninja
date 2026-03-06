# AZFWIdpsSignature

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZFWIdpsSignature table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwidpssignature) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwidpssignature)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Action | string | Action taken by the firewall following the IDPS signature hit. |
| Category | string | Category of the matched IDPS signature. |
| Description | string | Description of the matched IDPS signature. |
| DestinationIp | string | Packet's destination IP address. |
| DestinationPort | int | Packet's destination port. |
| Protocol | string | Packet's network protocol. For example: UDP, TCP. |
| Severity | int | Severity of the matched IDPS signature. |
| SignatureId | string | ID of the matched IDPS signature. |
| SourceIp | string | Packet's source IP address. |
| SourcePort | int | Packet's source port. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
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

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [Azure Firewall](../solutions/azure-firewall.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Abnormal Deny Rate for Source IP](../content/azure-firewall-abnormal-deny-rate-for-source-ip-d36bb1e3-5abc-4037-ad9a-24ba3469819e-bcaa208f.md) |  |
| [Several deny actions registered](../content/azure-firewall-several-deny-actions-registered-f8dad4e9-3f19-4d70-ab7f-8f19ccd43a3e-e192f460.md) |  |

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

