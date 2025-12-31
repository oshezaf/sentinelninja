# AWS Systems Manager - Get Missing Patches for EC2 Instances

When an incident is created in Microsoft Sentinel, this playbook gets triggered and perform the following actions: 1. Get the Hostnames and Private IP addresses from incident entities. 2. Get the Instance IDs from AWS EC2 using the Hostnames and Private IP Addresses. 3. Get the missing patches for the Instance IDs. 4. Add the missing patches to the incident comment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS Systems Manager](../solutions/aws-systems-manager.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager/Playbooks/AWSSystemsManagerPlaybooks/AWS-SSM-GetInstancePatches/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS Systems Manager](../solutions/aws-systems-manager.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
