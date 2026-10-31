# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Audit Event ASIM parser for Alibaba Cloud ActionTrail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventAlibabaCloudActionTrail` |
| **Built-in Parser** | `_ASim_AuditEvent_AlibabaCloudActionTrail` |
| **Schema** | AuditEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Alibaba Cloud ActionTrail |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEventAlibabaCloudActionTrail.md)) |
| **Last Updated** | Sep 14, 2026 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventAlibabaCloudActionTrail.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventAlibabaCloudActionTrail.yaml) |

## Description

This ASIM parser supports normalizing Alibaba Cloud ActionTrail control-plane audit activity (all services except Ims, CloudSSO and Ram, which are covered by ASimUserManagementAlibabaCloudActionTrail) to the ASIM Audit Event normalized schema. AliyunServiceEvent entries (Alibaba's own service-linked principals) are excluded from this parser.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AliCloudActionTrailLogs_CL`](../tables/alicloudactiontraillogs-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AliCloudActionTrailCCPDefinition](../connectors/alicloudactiontrailccpdefinition.md) | [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md) |

**Solutions:** [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md)

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Alibaba Cloud ActionTrail Documentation](https://www.alibabacloud.com/help/en/actiontrail)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

