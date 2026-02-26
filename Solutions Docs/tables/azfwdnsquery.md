# AZFWDnsQuery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZFWDnsQuery table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwdnsquery) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azfwdnsquery)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| DnssecOkBit | bool | A flag indicating that the resolver supports DNSSEC records. |
| EDNS0BufferSize | int | Client's EDNS0 buffer size. Specifies the maximum packet size allowed in responses in bytes. |
| ErrorMessage | string | Description of the error returned to the client. Empty if request is successful. |
| ErrorNumber | int | Error number matching the returned response code. |
| Protocol | string | Protocol used to send the DNS query. For example: TCP, UDP. |
| QueryClass | string | DNS query's query class. |
| QueryId | int | DNS query's query ID. |
| QueryName | string | DNS query's name to resolve. |
| QueryType | string | DNS query's query type. |
| RequestDurationSecs | real | Duration of the DNS request from the time it arrived to the firewall and until a response was sent to the client. |
| RequestSize | int | The size of the DNS request in bytes. |
| ResponseCode | string | DNS reponse code. |
| ResponseFlags | string | DNS reponse flags, comma separated. |
| ResponseSize | int | DNS reponse syze in bytes. |
| SourceIp | string | DNS query's source IP address. |
| SourcePort | int | DNS query's source Port. |
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

## Content Items Using This Table (2)

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

