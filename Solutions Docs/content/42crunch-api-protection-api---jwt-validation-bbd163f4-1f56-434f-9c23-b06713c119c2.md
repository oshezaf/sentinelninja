# API - JWT validation

42Crunch API protection against JWT validation

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| **ID** | `bbd163f4-1f56-434f-9c23-b06713c119c2` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1190, T1528 |
| **Required Connectors** | [42CrunchAPIProtection](../connectors/42crunchapiprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Analytic%20Rules/APIJWTValidation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to 42Crunch API Protection](../solutions/42crunch-api-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
