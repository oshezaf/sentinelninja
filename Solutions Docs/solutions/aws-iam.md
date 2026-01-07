# AWS_IAM

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
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
| [AWS - Disable S3 Bucket Public Access](../content/aws-iam-aws---disable-s3-bucket-public-access.md) | This playbook disables public access AWS S3 bucket. It is triggered by an incident in Microsoft Sent... | - |
| [AWS IAM - Add tag to user](../content/aws-iam-aws-iam---add-tag-to-user.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [AWS IAM - Delete access keys](../content/aws-iam-aws-iam---delete-access-keys.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [AWS IAM - Enrich incident with user info](../content/aws-iam-aws-iam---enrich-incident-with-user-info.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
