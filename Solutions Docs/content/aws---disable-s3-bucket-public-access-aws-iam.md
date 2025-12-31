# AWS - Disable S3 Bucket Public Access

This playbook disables public access AWS S3 bucket. It is triggered by an incident in Microsoft Sentinel and perform the following actions: 1. Get the Bucket Name from incident entities. 2. Call the AWS IAM Function App Connector to disable public access of S3 bucket. 3. Add a comment to the incident with the result of the action.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS_IAM](../solutions/aws-iam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM/Playbooks/Playbooks/AWS-DisableS3BucketPublicAccess/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to AWS_IAM](../solutions/aws-iam.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
