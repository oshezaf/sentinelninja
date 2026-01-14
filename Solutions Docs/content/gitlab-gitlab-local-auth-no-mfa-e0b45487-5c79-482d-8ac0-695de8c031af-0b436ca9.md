# GitLab - Local Auth - No MFA

This query checks GitLab Audit Logs to see if a user authenticated without MFA. Ot might mean that MFA was disabled for the GitLab server or that an external authentication provider was bypassed. This rule focuses on 'admin' privileges but the parameter can be adapted to also include all users.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitLab](../solutions/gitlab.md) |
| **ID** | `e0b45487-5c79-482d-8ac0-695de8c031af` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab/Analytic%20Rules/GitLab_LocalAuthNoMFA.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GitLab](../solutions/gitlab.md)

