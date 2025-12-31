# AWS IAM - Enrich incident with user info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. Obtains information about users in AWS IAM. 3. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS_IAM](../solutions/aws-iam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM/Playbooks/Playbooks/AWSIAM-EnrichIncidentWithUserInfo/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS_IAM](../solutions/aws-iam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
