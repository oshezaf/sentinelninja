# GCP-DisableServiceAccountKey

Once a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. [Disables Service Account Key](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts.keys/disable) by the gcp_project_id, gcp_service_account and gcp_service_acc_key, provided in the alert custom entities. 2. Adds comment to the incident. <img src='https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableSer

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountKey/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
