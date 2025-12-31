# AWS Systems Manager - Get Missing Patches for EC2 Instances for given Hostname

The playbook can be triggered manually from a Host Entity to get the missing patches on a managed EC2 instance. This playbook performs the following actions: 1. Get the Hostname from the Host Entity. 2. Get the Instance ID from AWS EC2 for given Hostname. 3. Get the missing patches for the Instance ID. 4. Add the missing patches to the incident comment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS Systems Manager](../solutions/aws-systems-manager.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager/Playbooks/AWSSystemsManagerPlaybooks/AWS-SSM-GetInstancePatches-HostEntityTrigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to AWS Systems Manager](../solutions/aws-systems-manager.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
