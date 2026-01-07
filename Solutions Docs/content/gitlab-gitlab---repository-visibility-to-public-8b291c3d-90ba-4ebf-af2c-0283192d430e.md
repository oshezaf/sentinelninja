# GitLab - Repository visibility to Public

This query leverages GitLab Audit Logs. A repository in GitLab changed visibility from Private or Internal to Public which could indicate compromise, error or misconfiguration leading to exposing the repository to the public.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitLab](../solutions/gitlab.md) |
| **ID** | `8b291c3d-90ba-4ebf-af2c-0283192d430e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, DefenseEvasion, CredentialAccess |
| **Techniques** | T1556 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab/Analytic%20Rules/GitLab_RepoVisibilityChange.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to GitLab](../solutions/gitlab.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
