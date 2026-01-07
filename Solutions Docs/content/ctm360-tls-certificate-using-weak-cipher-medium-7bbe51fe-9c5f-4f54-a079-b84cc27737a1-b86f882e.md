# TLS Certificate Using Weak Cipher - Medium

TLS Certificate Using Weak Cipher

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `7bbe51fe-9c5f-4f54-a079-b84cc27737a1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, LateralMovement, DefenseEvasion, Persistence |
| **Techniques** | T1556, T1210, T1212 |
| **Required Connectors** | [HVPollingIDAzureFunctions](../connectors/hvpollingidazurefunctions.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/TLSCertificateUsingWeakCipherMedium.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`HackerViewLog_Azure_1_CL`](../tables/hackerviewlog-azure-1-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CTM360](../solutions/ctm360.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
