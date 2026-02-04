# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for AWS sign-in logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationAWSCloudTrail` |
| **Built-in Parser** | `_ASim_Authentication_AWSCloudTrail` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | AWS |
| **Parser Version** | 0.2.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationAWSCloudTrail.md)) |
| **Last Updated** | Jan 14, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAWSCloudTrail.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAWSCloudTrail.yaml) |

## Description

This ASIM parser supports normalizing Amazon Web Service sign in logs, stored in the  AWSCloudTrail table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | `EventName == "ConsoleLogin"` | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AWS](../connectors/aws.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |

**Solutions:** [Amazon Web Services](../solutions/amazon-web-services.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [User identity in CloudTrail events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html#cloudtrail-event-reference-user-identity-fields)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

