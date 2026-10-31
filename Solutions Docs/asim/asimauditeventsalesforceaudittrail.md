# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> AuditEvent ASIM parser for Salesforce Audit Trail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventSalesforceAuditTrail` |
| **Built-in Parser** | `_ASim_AuditEvent_SalesforceAuditTrail` |
| **Schema** | AuditEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Salesforce Audit Trail |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEventSalesforceAuditTrail.md)) |
| **Last Updated** | Oct 14, 2026 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventSalesforceAuditTrail.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventSalesforceAuditTrail.yaml) |

## Description

This ASIM parser normalizes Salesforce setup audit trail events stored in the SalesforceAuditTrail table to the ASIM AuditEvent schema.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SalesforceAuditTrail`](../tables/salesforceaudittrail.md) | `Action contains "Freeze"`<br>`Action contains "Unfreeze"`<br>`Action endswith "Disabled"`<br>`Action endswith "Enabled"`<br>`Action has_any "cleared"`<br>`Action has_any "created"`<br>`Action has_any "deleted"`<br>`Action has_any "disabled"`<br>`Action has_any "enabled"`<br>`Action has_any "executed"`<br>`Action has_any "initialized"`<br>`Action has_any "installed"`<br>`Action has_any "started"`<br>`Action has_any "stopped"`<br>`Action has_any "terminated"`<br>`Action has_any "viewed"`<br>`Action startswith "activated"`<br>`Action startswith "deactivated"`<br>`Action startswith "disable"`<br>`Action startswith "enable"`<br>`Action startswith "froze"`<br>`Action startswith "unfroze"`<br>`CreatedByContext == "User"`<br>`Display contains "was activated"`<br>`Display contains "was deactivated"`<br>`Display contains "was disabled"`<br>`Display contains "was enabled"`<br>`Display contains "was frozen"`<br>`Display contains "was unfrozen"`<br>`Display has_any "cleared"`<br>`Display has_any "created"`<br>`Display has_any "deleted"`<br>`Display has_any "disabled"`<br>`Display has_any "enabled"`<br>`Display has_any "executed"`<br>`Display has_any "initialized"`<br>`Display has_any "installed"`<br>`Display has_any "started"`<br>`Display has_any "stopped"`<br>`Display has_any "terminated"`<br>`Display has_any "viewed"` | ✓ | ✗ | ✓ |
| [`SalesforceAuditTrailV2_CL`](../tables/salesforceaudittrailv2-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SalesforceAuditLogsConnector](../connectors/salesforceauditlogsconnector.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |

**Solutions:** [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SalesforceAuditTrail table documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/salesforceaudittrail)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

