# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for AWS VPC logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionAWSVPC` |
| **Built-in Parser** | `_ASim_NetworkSession_AWSVPC` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | AWS VPC |
| **Parser Version** | 0.3 |
| **Last Updated** | Dec 11, 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionAWSVPC.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionAWSVPC.yaml) |

## Description

This ASIM parser supports normalizing AWS VPC logs produced by the Microsoft Sentinel AWS S3 connector to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AWSS3VPCFlowLogsParquetDefinition](../connectors/awss3vpcflowlogsparquetdefinition.md) | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) |

**Solutions:** [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Logging IP traffic with VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

