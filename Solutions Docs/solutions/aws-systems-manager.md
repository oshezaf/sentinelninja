# AWS Systems Manager

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 23 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AWS Systems Manager - Get Missing Patches for EC2 Instances](../content/aws-systems-manager---get-missing-patches-for-ec2-instances-aws-systems-manager.md) | When an incident is created in Microsoft Sentinel, this playbook gets triggered and perform the foll... | - |
| [AWS Systems Manager - Get Missing Patches for EC2 Instances for given Hostname](../content/aws-systems-manager---get-missing-patches-for-ec2-instances-for-given-hostname-aws-systems-manager.md) | The playbook can be triggered manually from a Host Entity to get the missing patches on a managed EC... | - |
| [AWS Systems Manager - Get Missing Patches for EC2 Instances for given Private IP](../content/aws-systems-manager---get-missing-patches-for-ec2-instances-for-given-private-ip-aws-systems-manager.md) | The playbook can be triggered manually from an IP Entity to get the missing patches on a managed EC2... | - |
| [AWS Systems Manager - Run Automation Runbook](../content/aws-systems-manager---run-automation-runbook-aws-systems-manager.md) | When a new sentinel incident is created, this playbook gets triggered and runs the specified AWS Sys... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances](../content/aws-systems-manager---stop-managed-ec2-instances-aws-systems-manager.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. Thi... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances Host Entity Trigger](../content/aws-systems-manager---stop-managed-ec2-instances-host-entity-trigger-aws-systems-manager.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. The... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances IP Entity Trigger](../content/aws-systems-manager---stop-managed-ec2-instances-ip-entity-trigger-aws-systems-manager.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. The... | - |
| [AWS_SSM_FunctionAppConnector](../content/aws-ssm-functionappconnector-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [function](../content/function-aws-systems-manager.md) | - | - |
| [host](../content/host-aws-systems-manager.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.1       | 29-01-2024                     | App insights to LA change in data connector and repackage                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
