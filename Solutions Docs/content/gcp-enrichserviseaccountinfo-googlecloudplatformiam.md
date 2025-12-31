# GCP-EnrichServiseAccountInfo

Once a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. [Gets service Account Information](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/get) by the gcp_project_id and gcp_service_account, provided in the alert custom entities. 2. Enriches the incident with the obtained info. <img src='https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccount

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccountInfo/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
