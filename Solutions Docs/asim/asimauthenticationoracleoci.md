# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Oracle Cloud Infrastructure (OCI) sign-in logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationOracleOCI` |
| **Built-in Parser** | `_ASim_Authentication_OracleOCI` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Oracle Cloud Infrastructure |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationOracleOCI.md)) |
| **Last Updated** | Sep 21, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationOracleOCI.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationOracleOCI.yaml) |

## Description

This ASIM parser supports normalizing Oracle Cloud Infrastructure (OCI) authentication events, stored in the OCI_LogsV2_CL table, to the ASIM Authentication schema.
Covers FederatedLoginRequest, ReceiveSamlSpSsoResponse, SentSamlIdpSsoResponse, InteractiveLogin, AuthenticationUser, FactorMfa, InitiateSSOAuthFactor and SuccessAuthentication events.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) 🔶 |  | ✓ | ✓ | ✓ |

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

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [OCI Audit events](https://docs.oracle.com/en-us/iaas/Content/Audit/Concepts/auditoverview.htm)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

