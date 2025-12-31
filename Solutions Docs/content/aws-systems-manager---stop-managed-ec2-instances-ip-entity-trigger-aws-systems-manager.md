# AWS Systems Manager - Stop Managed EC2 Instances IP Entity Trigger

This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. The playbook can be triggered from an IP entity context in an incident. The playbook takes the private IP and stops the managed EC2 instances using the Instance ID. The playbook also adds a comment to the incident with instance that was stopped.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS Systems Manager](../solutions/aws-systems-manager.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager/Playbooks/AWSSystemsManagerPlaybooks/AWS-SSM-StopManagedInstance-IPEntityTrigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS Systems Manager](../solutions/aws-systems-manager.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
