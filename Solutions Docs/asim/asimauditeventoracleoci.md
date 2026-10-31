# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Audit Event ASIM parser for Oracle Cloud Infrastructure (OCI) Audit Logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuditEventOracleOCI` |
| **Built-in Parser** | `_ASim_AuditEvent_OracleOCI` |
| **Schema** | AuditEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Oracle Cloud Infrastructure |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuditEvent/CHANGELOG/ASimAuditEventOracleOCI.md)) |
| **Last Updated** | Sep 21, 2026 |
| **Unifying Parser** | [ASimAuditEvent](asimauditevent.md) |
| **Source File** | [Parsers\ASimAuditEvent\Parsers\ASimAuditEventOracleOCI.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuditEvent/Parsers/ASimAuditEventOracleOCI.yaml) |

## Description

This ASIM parser supports normalizing Oracle Cloud Infrastructure (OCI) API audit events, stored in the OCI_LogsV2_CL table, to the ASIM AuditEvent schema.
Excludes authentication events (handled by ASimAuthenticationOracleOCI) and VCN flow log rows (handled by the OCI ASIM NetworkSession parser).

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) 🔶 |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [OracleCloudInfraConnector](../connectors/oraclecloudinfraconnector.md) | [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md) |

**Solutions:** [Oracle Cloud Infrastructure](../solutions/oracle-cloud-infrastructure.md)

## References

- [ASIM Audit Event Schema](https://aka.ms/ASimAuditEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [OCI Audit events](https://docs.oracle.com/en-us/iaas/Content/Audit/Concepts/auditoverview.htm)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

