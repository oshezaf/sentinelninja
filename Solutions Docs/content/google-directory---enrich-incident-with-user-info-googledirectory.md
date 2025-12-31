# Google Directory - Enrich Incident With User Info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. [Obtains information about user.](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get) 3. Enriches the incident with the obtained info.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleDirectory](../solutions/googledirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-EnrichIncidentWithUserInfo/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to GoogleDirectory](../solutions/googledirectory.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
