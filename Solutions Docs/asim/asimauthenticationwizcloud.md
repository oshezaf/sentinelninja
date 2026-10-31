# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Wiz Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationWizCloud` |
| **Built-in Parser** | `_ASim_Authentication_WizCloud` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Wiz Cloud |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationWizCloud.md)) |
| **Last Updated** | Sep 17, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationWizCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationWizCloud.yaml) |

## Description

This ASIM parser supports normalizing Wiz Cloud (Auditlogs) authentication-relevant events (Login, TokenRefresh actions), stored in the WizAuditlogsV3_CL table, to the ASIM Authentication normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`WizAuditlogsV3_CL`](../tables/wizauditlogsv3-cl.md) |  | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [WizSentinel](../connectors/wizsentinel.md) | [Wiz](../solutions/wiz.md) |

**Solutions:** [Wiz](../solutions/wiz.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Wiz Docs](https://docs.wiz.io/docs/microsoft-sentinel-integration)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

