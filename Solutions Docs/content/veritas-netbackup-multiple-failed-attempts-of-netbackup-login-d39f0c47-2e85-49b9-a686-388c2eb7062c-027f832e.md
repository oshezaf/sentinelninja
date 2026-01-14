# Multiple failed attempts of NetBackup login

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule generates an incident when there are more than 5 failed login attemts for a given host in the last 15 minutes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veritas NetBackup](../solutions/veritas-netbackup.md) |
| **ID** | `d39f0c47-2e85-49b9-a686-388c2eb7062c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Discovery |
| **Techniques** | T1110, T1212 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veritas%20NetBackup/Analytic%20Rules/NetBackup_many_login_fail.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NetBackupAlerts_CL`](../tables/netbackupalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Veritas NetBackup](../solutions/veritas-netbackup.md)

