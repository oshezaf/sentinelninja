# AWS Systems Manager - Stop Managed EC2 Instances

This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. This playbook uses AWS Systems Manager API to stop the EC2 instances. The playbook can be triggered from an incident in Microsoft Sentinel. The playbook takes the Hostnames and Private IP addresses from the incident entities and stops the EC2 instances using the Instance IDs. The playbook also adds a comment to the incident with the list of instances that were stopped.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS Systems Manager](../solutions/aws-systems-manager.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager/Playbooks/AWSSystemsManagerPlaybooks/AWS-SSM-StopManagedInstance/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS Systems Manager](../solutions/aws-systems-manager.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
