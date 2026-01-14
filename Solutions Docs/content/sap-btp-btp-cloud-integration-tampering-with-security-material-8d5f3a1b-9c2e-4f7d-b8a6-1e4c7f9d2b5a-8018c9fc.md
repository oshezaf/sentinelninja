# BTP - Cloud Integration tampering with security material

Identifies operations on security material (credentials, certificates, and keys) within SAP Cloud Integration. This includes credentials (passwords/secrets), X.509 certificates and key pairs, and PGP keys. Unauthorized manipulation of security material could indicate an attacker attempting to: - Gain access to external systems using stored credentials - Intercept or tamper with encrypted communications - Establish persistence through certificate manipulation - Cover tracks by deleting security a

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `8d5f3a1b-9c2e-4f7d-b8a6-1e4c7f9d2b5a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, DefenseEvasion |
| **Techniques** | T1552, T1070 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Cloud%20Integration%20tampering%20with%20security%20material.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP BTP](../solutions/sap-btp.md)

