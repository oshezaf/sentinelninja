# GitLab - Abnormal number of repositories deleted

This hunting queries identify an unusual increase of repo deletion activities adversaries may want to disrupt availability or compromise integrity by deleting business data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GitLab](../solutions/gitlab.md) |
| **ID** | `3efd09bd-a582-4410-b7ec-5ff21cfad7bd` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab/Analytic%20Rules/GitLab_Repo_Deletion.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GitLabRepositoryDestroyEvents`](../tables/gitlabrepositorydestroyevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to GitLab](../solutions/gitlab.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
