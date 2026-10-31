# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> User Management ASIM parser for Alibaba Cloud ActionTrail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementAlibabaCloudActionTrail` |
| **Built-in Parser** | `_ASim_UserManagement_AlibabaCloudActionTrail` |
| **Schema** | UserManagement |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Alibaba Cloud ActionTrail |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagementAlibabaCloudActionTrail.md)) |
| **Last Updated** | Sep 14, 2026 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementAlibabaCloudActionTrail.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementAlibabaCloudActionTrail.yaml) |

## Description

This ASIM parser supports normalizing identity management API activity from Alibaba Cloud ActionTrail's Ims (RAM identity management), CloudSSO and Ram identity services to the ASIM User Management normalized schema. Account-level policy/report/configuration reads and authentication events are out of scope.

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

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Alibaba Cloud ActionTrail Documentation](https://www.alibabacloud.com/help/en/actiontrail)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

