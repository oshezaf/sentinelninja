# Amazon Web Services

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [Amazon Web Services](../connectors/aws.md)
- [Amazon Web Services S3](../connectors/awss3.md)
- [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md)

## Tables Reference

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | [Amazon Web Services](../connectors/aws.md), [Amazon Web Services S3](../connectors/awss3.md) | Analytics, Hunting, Workbooks |
| [`AWSCloudWatch`](../tables/awscloudwatch.md) | [Amazon Web Services S3](../connectors/awss3.md) | - |
| [`AWSGuardDuty`](../tables/awsguardduty.md) | [Amazon Web Services S3](../connectors/awss3.md) | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3](../connectors/awss3.md) | - |
| [`AWSWAF`](../tables/awswaf.md) | [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) | - |

## Content Items

This solution includes **100 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 62 |
| Hunting Queries | 36 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AWS Config Service Resource Deletion Attempts](../content/093fe75e-44f1-4d3e-94dc-6d258a6dd2d2.md) | Low | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [AWS Guard Duty Alert](../content/bf0cde21-0c41-48f6-a40c-6b5bd71fa106.md) | Medium | - | [`AWSGuardDuty`](../tables/awsguardduty.md) |
| [Automatic image scanning disabled for ECR](../content/19602494-94af-43c8-90ba-eb0e14999612.md) | Medium | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS CloudTrail logs](../content/610d3850-c26f-4f20-8d86-f10fdf2425f5.md) | Low | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to AWS Elastic Load Balancer security groups](../content/c7bfadd4-34a6-4fa5-82f8-3691a32261e8.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to AWS Security Group ingress and egress settings](../content/4f19d4e3-ec5f-4abc-9e61-819eb131758c.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to Amazon VPC settings](../content/65360bb0-8986-4ade-a89d-af3cf44d28aa.md) | Low | PrivilegeEscalation, LateralMovement | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to internet facing AWS RDS Database instances](../content/8c2ef238-67a0-497d-b1dd-5c8a0f533e25.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CloudFormation policy created then used for privilege escalation](../content/efdc3cff-f006-426f-97fd-4657862f7b9a.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Created CRUD S3 policy and then privilege escalation](../content/467cbe7e-e6d4-4f4e-8e44-84dd01932c32.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creating keys with encrypt policy without MFA](../content/454133a7-5427-4a7c-bdc4-0adfa84dda16.md) | Medium | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Access Key for IAM User](../content/9a6554e6-63d9-4f94-9b32-64d1d40628f2.md) | Medium | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD DynamoDB policy and then privilege escalation.](../content/6f675c17-7a61-440c-abd1-c73ef4d748ec.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD KMS policy and then privilege escalation](../content/8e15998e-1e32-4b6d-abd1-e8482e8f3def.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD Lambda policy and then privilege escalation](../content/22115d3c-e87c-485a-9130-33797d619124.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of DataPipeline policy and then privilege escalation.](../content/6009c632-94e9-4ffb-a11a-b4b99f457f88.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of EC2 policy and then privilege escalation](../content/a694e977-740c-4578-9f8f-5e39029f1d23.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Glue policy and then privilege escalation](../content/56626956-304f-4408-8ea6-7ba5746ce09e.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Lambda policy and then privilege escalation](../content/796a45ee-220b-42be-8415-c8c933cf3b6d.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of SSM policy and then privilege escalation](../content/aaa2c05e-fdd4-4fa0-9072-6cffe3641b34.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of new CRUD IAM policy and then privilege escalation.](../content/8a607285-d95c-473d-8aab-59920de63af6.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [EC2 Startup Shell Script Changed](../content/f8577e4d-8481-437b-a94e-06f615985668.md) | Medium | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings high or critical](../content/f6928301-56da-4d2c-aabe-e1a552bc8892.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Full Admin policy created and then attached to Roles, Users or Groups](../content/826bb2f8-7894-4785-9a6b-a8a855d8366f.md) | Medium | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [GuardDuty detector disabled or suspended](../content/9da99021-d318-4711-a78a-6dea76129b3a.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Login to AWS Management Console without MFA](../content/d25b1998-a592-4bc5-8a3a-92b39eedb1bc.md) | Low | DefenseEvasion, PrivilegeEscalation, Persistence, InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Monitor AWS Credential abuse or hijacking](../content/32555639-b639-4c2b-afda-c0ae0abefa55.md) | Low | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [NRT Login to AWS Management Console without MFA](../content/0ee2aafb-4500-4e36-bcb1-e90eec2f0b9b.md) | Low | DefenseEvasion, PrivilegeEscalation, Persistence, InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Network ACL with all the open ports to a specified CIDR](../content/f8ea7d50-e33b-4b9d-9c3e-a59fcbcee281.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Policy version set to default](../content/874a1762-3fd7-4489-b411-6d4a9e9e8a59.md) | Medium | InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD DynamoDB policy](../content/b9be2aa6-911d-4131-8658-d2a537ed49f4.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD IAM policy](../content/e20d35a3-4fec-4c8b-81b1-fc33b41990b0.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD KMS policy](../content/d7c39e15-997f-49e5-a782-73bf07db8aa5.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD Lambda policy](../content/d0953d50-3dc1-4fa3-80fa-4d3e973a0959.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD S3 policy](../content/fc3061bb-319c-4fe9-abe2-f59899a6d907.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CloudFormation policy](../content/719d5204-10ab-4b1f-aee1-da7326750260.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via DataPipeline policy](../content/48896551-1c28-4a09-8388-e51e5a927d23.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via EC2 policy](../content/a2b2a984-c820-4d93-830e-139bffd81fa3.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via Glue policy](../content/370f0e5e-da1d-4a14-8ced-d1d7ab66a8d7.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via Lambda policy](../content/8e01c41d-bd4c-4bbe-aed5-18592735052d.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via SSM policy](../content/c668c09f-5a49-43f9-b249-6b89a31ec8fb.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with AdministratorAccess managed policy](../content/139e7116-3884-4246-9978-c8f740770bdf.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with FullAccess managed policy](../content/afb4191b-a142-4065-a0da-f721ee3d006c.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with admin managed policy](../content/49ce5322-60d7-4b02-ad79-99f650aa5790.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [RDS instance publicly exposed](../content/8f1630c2-2e45-4df2-be43-50fba90f601d.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 Object Exfiltration from Anonymous User](../content/15d3bf4e-8708-41c8-a836-8b0aa5be730e.md) | Medium | Collection | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket access point publicly exposed](../content/b7a44e0d-ae4c-4fb2-be1b-aa0e45f2327b.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket exposed via ACL](../content/6b9b4ee6-f4c1-4b86-8c8c-beb0bb59ae44.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket exposed via policy](../content/44a5b65e-b0a9-4591-aabc-388fd92a28c4.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket suspicious ransomware activity](../content/b442b9e2-5cc4-4129-a85b-a5ef38a9e5f0.md) | High | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 object publicly exposed](../content/09f2a28b-3286-4268-9e2f-33805f104e5d.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [SAML update identity provider](../content/bce1dcba-4948-414d-8838-6385afb9d496.md) | High | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [SSM document is publicly exposed](../content/75647b58-bcc8-4eb5-9658-46698d3fa153.md) | Medium | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Successful API executed from a Tor exit node](../content/0adab960-5565-4978-ba6d-044553e4acc4.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Successful brute force attack on S3 Bucket.](../content/31b9e94b-0df6-4a3d-a297-3457b53c5d86.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious AWS CLI Command Execution](../content/8c2dc344-9352-4ca1-8863-b1b7a5e09e59.md) | Medium | Reconnaissance | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious AWS EC2 Compute Resource Deployments](../content/9e457dc4-81f0-4d25-bc37-a5fa4a17946a.md) | Medium | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious command sent to EC2](../content/21702832-aff3-4bd6-a8e1-663b6818503d.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious overly permissive KMS key policy created](../content/60dfc193-0f73-4279-b43c-110ade02b201.md) | High | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Tampering to AWS CloudTrail logs](../content/633a91df-d031-4b6e-a413-607a61540559.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Unauthorized EC2 Instance Setup Attempt](../content/f7210a45-12a4-4d02-b59e-f23476827a4b.md) | Medium | ResourceDevelopment | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [User IAM Enumeration](../content/cfaaf0bc-16d1-48df-ac8b-9d901bbd516a.md) | Medium | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Bucket versioning suspended](../content/48c49b1d-2aa0-442b-96e3-cae6ad1251cd.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS IAM objects](../content/d022a62c-643b-4e8a-b583-0230e32a96e4.md) | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS IAM policy](../content/e0a67cd7-b4e5-4468-aae0-26cb16a1bbd2.md) | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CreateLoginProfile detected](../content/4e3c81bf-61a4-47f4-b20d-a5a414ea08aa.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CreatePolicyVersion with excessive permissions](../content/e73ebd34-4f04-4684-a5f0-dba820127ce8.md) | Privilege Escalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings low](../content/b5b172b1-d976-4113-af1f-02f7bf7d2092.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings medium](../content/4fbbae0a-ce5b-4b2a-b5e6-700920561680.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Excessive execution of discovery events](../content/c9ccaebf-314c-446d-b3f6-314560ccb0e1.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Failed brute force on S3 bucket](../content/13afb771-5d55-4d69-a745-83d2fc69a923.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM AccessDenied discovery events](../content/7e258a45-b356-44f6-9a62-2643cef7b869.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM Privilege Escalation by Instance Profile attachment](../content/e1a91db8-f2b3-4531-bff6-da133d4f4f1a.md) | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM assume role policy brute force](../content/2b8cecfe-f705-432d-9f38-08207b9473e1.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda UpdateFunctionCode](../content/2dd2143b-6667-4a7a-b04f-98d22caeffac.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda function throttled](../content/d82ea1db-f600-4c9e-8ba8-d271e9c12eb8.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda layer imported from external account](../content/77d0aadc-aaea-4346-b61a-bf7ac6b71bba.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Login profile updated](../content/838f59d4-fe47-422b-819d-1be502940547.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of route-table attributes](../content/3b7df29e-a798-4b6b-9ef7-73b9a3cf56a2.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of subnet attributes](../content/05167149-4670-4a9f-b34e-5a0a92243194.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of vpc attributes](../content/a3a19731-9e82-49b6-9142-2dd570feefd5.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Multiple failed login attempts to an existing user without MFA](../content/bf130d1d-702b-4af6-9528-8bc4229e59f4.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Network ACL deleted](../content/49bae199-ea04-4a2e-95a6-e3a1f68ab259.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [New AccessKey created for Root user](../content/4055466c-8a84-44c6-91d0-46469f3ba0b9.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [New access key created to user](../content/a2772445-9bb1-4176-9481-b262cb59118a.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privileged role attached to Instance](../content/0db42a94-e7c8-4bf1-99a7-1a2fb4158212.md) | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [RDS instance master password changed](../content/b9b0fd12-d72d-4f66-a013-c1acdeea2670.md) | Privilege Escalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Risky role name created](../content/70c36558-e6d8-48b4-98b3-185d555cd5af.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket encryption modified](../content/6eb59239-78c5-401d-acfa-5cb9b3d31cd4.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket has been deleted](../content/356aa5a8-fa6f-4eb9-baa9-ffcf725e3e82.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious EC2 launched without a key pair](../content/81a8880f-cc20-40ce-98d6-2fc6a1c5b9a4.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS Token related to Kubernetes worker node](../content/46685737-676a-4084-8e98-31b2998062db.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to EC2](../content/82ecf967-d6e9-4757-8f5d-42c562a8f05f.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to ECS](../content/67af1633-311f-4a94-bc8f-f904a54637b2.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to Glue](../content/0cd3eb95-6c8e-4eeb-8338-a0decdc0a328.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to Lambda](../content/70a6e84f-6f3b-4ce1-83d6-ea6df9e7a9dd.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious credential token access of valid IAM Roles](../content/5b6ee21d-da53-46eb-827c-eab2a9ba3d2f.md) | InitialAccess, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Unused or Unsupported Cloud Regions](../content/e0d57543-acbd-428b-bb96-24a67506f84d.md) | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AmazonWebServicesNetworkActivities](../content/amazonwebservicesnetworkactivities-amazon-web-services.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [AmazonWebServicesUserActivities](../content/amazonwebservicesuseractivities-amazon-web-services.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.7       | 28-07-2025                     | Fix ChangeToVPC **Analytic Rule** to ensure it excludes changes to API Gateway |
| 3.0.6       | 13-06-2025                     | Updated Amazon Web Services S3 Data connector to include details for the default output format. |
| 3.0.5       | 10-02-2025                     | Repackaged to fix ccp grid showing only 1 record and rename of file   |
| 3.0.4       | 13-12-2024                     | Updated title of **Analytic Rule** - AWS_LogTampering.yaml   |
| 3.0.3       | 27-05-2024                     | Updated **Hunting Query** AWS_FailedBruteForceS3Bucket.yaml and **Analytic Rules** for missing TTP   |
| 3.0.2       | 05-04-2024                     | Updated awsS3 **Data connector**, added new Data Type CloudWatch     |
| 3.0.1       | 22-12-2023                     | Added new **Analytic Rule** (AWS Config Service Resource Deletion Attempts)     |
| 3.0.0       | 04-12-2023                     | Updated **Analytical Rule**  AWS_GuardDuty_template with entity mappings     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
