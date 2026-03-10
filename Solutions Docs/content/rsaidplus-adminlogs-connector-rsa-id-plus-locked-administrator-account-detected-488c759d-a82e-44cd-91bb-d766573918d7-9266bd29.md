# RSA ID Plus - Locked Administrator Account Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Raises an alert when an admin account is locked out of the Admin console (RSAIDPlus Admin Events).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md) |
| **ID** | `488c759d-a82e-44cd-91bb-d766573918d7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, CredentialAccess |
| **Required Connectors** | [RSAIDPlus_AdminLogs_Connector](../connectors/rsaidplus-adminlogs-connector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RSAIDPlus_AdminLogs_Connector/Analytic%20Rules/RSAIDPlus_AdminLockoutAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RSAIDPlus_AdminLogs_CL`](../tables/rsaidplus-adminlogs-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to RSAIDPlus_AdminLogs_Connector](../solutions/rsaidplus-adminlogs-connector.md)

