# BTP - Cloud Integration artifact deployment

Identifies deployment and undeployment of integration artifacts in SAP Cloud Integration. Integration flows are executable code that can process, transform, and route data between systems.  Unauthorized artifact deployment could indicate: - Attacker deploying malicious integration flows for data exfiltration - Deployment of rogue code for persistent access - Undeployment of critical integrations causing denial of service

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP BTP](../solutions/sap-btp.md) |
| **ID** | `a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, Persistence |
| **Techniques** | T1059, T1546 |
| **Required Connectors** | [SAPBTPAuditEvents](../connectors/sapbtpauditevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20BTP/Analytic%20Rules/BTP%20-%20Cloud%20Integration%20artifact%20deployment.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SAPBTPAuditLog_CL`](../tables/sapbtpauditlog-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SAP BTP](../solutions/sap-btp.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
