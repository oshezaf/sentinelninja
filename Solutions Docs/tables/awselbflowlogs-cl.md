# AWSELBFlowLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (16 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AWSELBFlowLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccountId | string |
| Action | string |
| Bytes | string |
| DestinationAddress | string |
| DestinationPort | string |
| EndTime | datetime |
| InterfaceId | string |
| LogStatus | string |
| LogType | string |
| Packets | string |
| Protocol | string |
| SourceAddress | string |
| SourcePort | string |
| SStartTime | datetime |
| TimeGenerated | datetime |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [AWS ELB](../solutions/aws-elb.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services Elastic Load Balancing (via Codeless Connector Framework)](../connectors/awselbconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AWSELBFlowLogsData](../parsers/awselbflowlogsdata.md) | [AWS ELB](../solutions/aws-elb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

