# Monitor AWS Credential abuse or hijacking

'Looking for GetCallerIdentity Events where the UserID Type is AssumedRole An attacker who has assumed the role of a legitimate account can call the GetCallerIdentity function to determine what account they are using. A legitimate user using legitimate credentials would not need to call GetCallerIdentity since they should already know what account they are using. More Information: https://duo.com/decipher/trailblazer-hunts-compromised-credentials-in-aws  AWS STS GetCallerIdentity API: https://do

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Amazon Web Services](../solutions/amazon-web-services.md) |
| **ID** | `32555639-b639-4c2b-afda-c0ae0abefa55` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [AWS](../connectors/aws.md), [AWSS3](../connectors/awss3.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services/Analytic%20Rules/AWS_CredentialHijack.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AWSCloudTrail`](../tables/awscloudtrail.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Amazon Web Services](../solutions/amazon-web-services.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
