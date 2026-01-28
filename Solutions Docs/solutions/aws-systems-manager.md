# AWS Systems Manager

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AWS%20Systems%20Manager/Playbooks/aws-logo.svg" alt="AWS Systems Manager Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html) is the operations hub for your AWS applications and resources and a secure end-to-end management solution for [hybrid and multicloud](https://docs.aws.amazon.com/systems-manager/latest/userguide/operating-systems-and-machine-types.html#supported-machine-types) environments that enables secure operations at scale. This solution helps to enhance your SOAR capabilities by integrating Sentinel with AWS manager.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **Solution Folder** | [AWS Systems Manager](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS%20Systems%20Manager) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 7 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AWS Systems Manager - Get Missing Patches for EC2 Instances](../content/aws-systems-manager-aws-systems-manager-get-missing-patches-for-ec2-instances-bf6441c2.md) | When an incident is created in Microsoft Sentinel, this playbook gets triggered and perform the foll... | - |
| [AWS Systems Manager - Get Missing Patches for EC2 Instances for given Hostname](../content/aws-systems-manager-aws-systems-manager-get-missing-patches-for-ec2-instances-for-given-hostname-9f828265.md) | The playbook can be triggered manually from a Host Entity to get the missing patches on a managed EC... | - |
| [AWS Systems Manager - Get Missing Patches for EC2 Instances for given Private IP](../content/aws-systems-manager-aws-systems-manager-get-missing-patches-for-ec2-instances-for-given-private-ip-4a86e668.md) | The playbook can be triggered manually from an IP Entity to get the missing patches on a managed EC2... | - |
| [AWS Systems Manager - Run Automation Runbook](../content/aws-systems-manager-aws-systems-manager-run-automation-runbook-94bcc7cb.md) | When a new sentinel incident is created, this playbook gets triggered and runs the specified AWS Sys... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances](../content/aws-systems-manager-aws-systems-manager-stop-managed-ec2-instances-070f6586.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. Thi... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances Host Entity Trigger](../content/aws-systems-manager-aws-systems-manager-stop-managed-ec2-instances-host-entity-trigger-06c9b18a.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. The... | - |
| [AWS Systems Manager - Stop Managed EC2 Instances IP Entity Trigger](../content/aws-systems-manager-aws-systems-manager-stop-managed-ec2-instances-ip-entity-trigger-bcfcdc2a.md) | This playbook can be used by SOC Analysts to stop malicious or compromised EC2 instances in AWS. The... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.2       | 01-14-2026                     | Fixed AWS-SSM-GetInstancePatches Playbook and updated Function App pagination                                 |
| 3.0.1       | 29-01-2024                     | App insights to LA change in data connector and repackage                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

