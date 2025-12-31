# AWS Athena - Execute Query and Get Results

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. It executes the query specified during playbook setup on given database. 2. Downloads the query result and adds as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWSAthena](../solutions/awsathena.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWSAthena/Playbooks/AWSAthenaPlaybooks/AWSAthena-GetQueryResults/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWSAthena](../solutions/awsathena.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
