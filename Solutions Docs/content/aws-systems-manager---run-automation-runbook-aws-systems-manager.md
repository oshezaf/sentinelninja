# AWS Systems Manager - Run Automation Runbook

When a new sentinel incident is created, this playbook gets triggered and runs the specified AWS Systems Manager Automation Runbook. The playbook will wait for the runbook execution to complete and then update the incident with the runbook execution status.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS Systems Manager](../solutions/aws-systems-manager.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager/Playbooks/AWSSystemsManagerPlaybooks/AWS-SSM-RunAutomationRunbook/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS Systems Manager](../solutions/aws-systems-manager.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
