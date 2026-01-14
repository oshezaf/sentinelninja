# Azure secure score PW age policy new

'This query searches for having found that when periodic password resets are enforced, passwords become less secure. Users tend to pick a weaker password and vary it slightly for each reset.   If a user creates a strong password (long, complex and without any pragmatic words present) it should remain just as strong in the future as it is today. It is Microsoft's official security position to not expire passwords periodically without a specific reason, and recommends that cloud-only tenants set t

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SenservaPro](../solutions/senservapro.md) |
| **ID** | `88C9A5E0-31EC-490B-82E5-A286D9B99A67` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555, T1606, T1040 |
| **Required Connectors** | [SenservaPro](../connectors/senservapro.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro/Analytic%20Rules/PasswordAgePolicyNew.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SenservaPro_CL`](../tables/senservapro-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SenservaPro](../solutions/senservapro.md)

