# BTP - Cloud Integration access policy tampering

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies changes to access policies in SAP Cloud Integration. Access policies control authorization for integration artifacts, defining which users and roles can access specific integration flows and related content.  Unauthorized access policy manipulation could indicate: - Attacker granting themselves access to sensitive integration artifacts - Removal of security controls to enable further malicious activity - Defense evasion by modifying artifact references to hide unauthorized access

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `9e6f4b2c-0d3e-5a8f-c9b7-2f5d8a1e4c6b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1548, T1222 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Cloud%20Integration%20access%20policy%20tampering.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP BTP](../solutions/sap-btp.md)

