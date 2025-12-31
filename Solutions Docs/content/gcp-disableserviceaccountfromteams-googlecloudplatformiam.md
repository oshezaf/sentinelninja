# GCP-DisableServiceAccountFromTeams

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken. <img src='https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/teams_screenshot.png'/> 2. [Disables Service Account](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/disable) depen

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
