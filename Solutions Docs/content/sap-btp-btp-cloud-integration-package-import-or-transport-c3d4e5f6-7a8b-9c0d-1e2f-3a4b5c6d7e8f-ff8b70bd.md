# BTP - Cloud Integration package import or transport

Identifies import and transport operations for integration packages and artifacts in SAP Cloud Integration. Packages contain integration flows, mappings, scripts, and other artifacts that can be imported from external sources or transported between tenants.  Unauthorized package operations could indicate: - Supply chain attack through malicious package import - Lateral movement between environments via artifact transport - Introduction of backdoors or rogue integration logic

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence |
| **Techniques** | T1195, T1546 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Cloud%20Integration%20package%20import%20or%20transport.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP BTP](../solutions/sap-btp.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

