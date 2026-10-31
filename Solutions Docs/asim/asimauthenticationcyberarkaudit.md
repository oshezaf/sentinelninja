# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for CyberArk Audit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationCyberArkAudit` |
| **Built-in Parser** | `_ASim_Authentication_CyberArkAudit` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CyberArk Audit |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationCyberArkAudit.md)) |
| **Last Updated** | Oct 05, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationCyberArkAudit.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationCyberArkAudit.yaml) |

## Description

This ASIM parser supports normalizing CyberArk (rebranded to Idira under Palo Alto) Identity Security Platform audit events (Identity logins, Privilege Cloud Vault logons, PSM sessions, SIA/DPA RDP sessions and SSH sessions), stored in the CyberArk_AuditEvents_CL table, to the ASIM Authentication normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |  | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CyberArkAudit](../connectors/cyberarkaudit.md) | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| [CyberArkAuditCCPDefinition](../connectors/cyberarkauditccpdefinition.md) | [CyberArkAudit](../solutions/cyberarkaudit.md) |

**Solutions:** [CyberArkAudit](../solutions/cyberarkaudit.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CyberArk Audit Documentation](https://docs.cyberark.com/audit-and-reports/latest/en/content/audit/product-audits/isp-ar-audit.htm)
- [CyberArk Audit SIEM Integration with Microsoft Sentinel](https://docs.cyberark.com/setup/latest/en/content/siem-integration/siem-export-ms-sentinel.htm)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

