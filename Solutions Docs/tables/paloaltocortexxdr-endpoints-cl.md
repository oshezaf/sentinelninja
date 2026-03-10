# PaloAltoCortexXDR_Endpoints_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR%5CData%20Connectors%5CCortexXDR_ccp/table_endpoint.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AgentId | string | Unique identifier for the Cortex XDR agent installed on the endpoint. |
| AgentStatus | string | Current status of the Cortex XDR agent (e.g., active, inactive, disconnected). |
| AgentType | string | Type of Cortex XDR agent (e.g., Windows, macOS, Linux). |
| HostName | string | Name of the host machine where the Cortex XDR agent is installed. |
| IpAddress | dynamic | IP address of the host machine, stored as a dynamic object. |
| LastSeen | datetime | Timestamp of when the agent was last seen active, in Unix epoch format. |
| OperationalStatus | string | Operational state of the endpoint (e.g., online, offline). |
| Tags | dynamic | Tags or labels associated with the endpoint, stored as a dynamic object. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| Users | dynamic | List of users associated with the endpoint, stored as a dynamic object. |

## Solutions (2)

This table is used by the following solutions:

- [Cortex XDR](../solutions/cortex-xdr.md)
- [Palo Alto Cortex XDR CCP](../solutions/palo-alto-cortex-xdr-ccp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

