# PaloAltoCortexXDR_Audit_Agent_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR%5CData%20Connectors%5CCortexXDR_ccp/table_agent.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AgentType | string | Type of agent involved in the event |
| Category | string | Category of the event |
| Description | string | Detailed description of the event |
| Domain | string | Domain associated with the endpoint |
| EndpointId | string | Unique identifier of the endpoint |
| EndpointName | string | Name of the endpoint involved in the event |
| Reason | string | Reason for the event or action |
| ReceivedTime | datetime | The time when the event was received |
| Result | string | Outcome or result of the event |
| Subtype | string | Subtype of the event |
| TimeGenerated | datetime | The time when the record was generated |
| Timestamp | datetime | The timestamp of the event |
| TrapsVersion | string | Version of the Traps agent installed on the endpoint |

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

