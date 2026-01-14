# AWS_IAM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="AWS_IAM Logo" width="75" height="75">

The [Amazon Web Services (AWS) Identity and Access Management (IAM)](https://aws.amazon.com/iam/) Solution for Microsoft Sentinel allows you to manage resources in AWS via playbooks thats use the [AWS IAM API](https://docs.aws.amazon.com/IAM/latest/APIReference/welcome.html). The Playbboks included in the solution allow Enriching Incident with user information add tag to a user in AWS and delete access keys for users.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-09-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AWS - Disable S3 Bucket Public Access](../content/aws-iam-aws-disable-s3-bucket-public-access-7cb2516a.md) | This playbook disables public access AWS S3 bucket. It is triggered by an incident in Microsoft Sent... | - |
| [AWS IAM - Add tag to user](../content/aws-iam-aws-iam-add-tag-to-user-1ed6cbb1.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [AWS IAM - Delete access keys](../content/aws-iam-aws-iam-delete-access-keys-5e3d2e46.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [AWS IAM - Enrich incident with user info](../content/aws-iam-aws-iam-enrich-incident-with-user-info-bae1db49.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

