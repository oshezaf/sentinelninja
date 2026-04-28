# AWSEKSLogs_CL

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

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20EKS%5CData%20Connectors/AWSEKS_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AuthDecision | string | Auth decision |
| AwsAccountId | string | Aws account id |
| ClusterName | string | Cluster name |
| ObjectRef | string | Object ref |
| RawEvent | dynamic | Raw event |
| Region | string | Region |
| ResponseCode | int | Response code |
| SourceIPs | dynamic | Source i ps |
| Stage | string | Stage |
| TimeGenerated | datetime | Time generated |
| User | string | User |
| UserAgent | string | User agent |
| Verb | string | Verb |

## Solutions (1)

This table is used by the following solutions:

- [AWS EKS](../solutions/aws-eks.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [AWS EKS Data Connector (via Codeless Connector Framework)](../connectors/awseksdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

