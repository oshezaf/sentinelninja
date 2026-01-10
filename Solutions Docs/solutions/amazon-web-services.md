# Amazon Web Services

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Aws.svg" alt="Amazon Web Services Logo" width="75" height="75">

The Amazon Web Services solution for Microsoft Sentinel allows you to enable Security monitoring of AWS services by allowing ingestion of logs from the AWS CloudTrail platform, VPC Flow Logs, AWS GuardDuty and AWS CloudWatch. 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.7 |
| **Author** | Microsoft |
| **First Published** | 2022-05-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [Amazon Web Services](../connectors/aws.md)
- [Amazon Web Services S3](../connectors/awss3.md)
- [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md)

## Tables Used

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
| [AWS Config Service Resource Deletion Attempts](../content/amazon-web-services-aws-config-service-resource-deletion-attempts-093fe75e-44f1-4d3e-94dc-6d258a6dd2d2-c24c7483.md) | Low | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [AWS Guard Duty Alert](../content/amazon-web-services-aws-guard-duty-alert-bf0cde21-0c41-48f6-a40c-6b5bd71fa106-45d522a8.md) | Medium | - | [`AWSGuardDuty`](../tables/awsguardduty.md) |
| [Automatic image scanning disabled for ECR](../content/amazon-web-services-automatic-image-scanning-disabled-for-ecr-19602494-94af-43c8-90ba-eb0e14999612-4cbaf0c4.md) | Medium | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS CloudTrail logs](../content/amazon-web-services-changes-made-to-aws-cloudtrail-logs-610d3850-c26f-4f20-8d86-f10fdf2425f5-0948a9d0.md) | Low | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to AWS Elastic Load Balancer security groups](../content/amazon-web-services-changes-to-aws-elastic-load-balancer-security-groups-c7bfadd4-34a6-4fa5-82f8-3691a32261e8-61c6a3f8.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to AWS Security Group ingress and egress settings](../content/amazon-web-services-changes-to-aws-security-group-ingress-and-egress-settings-4f19d4e3-ec5f-4abc-9e61-819eb131758c-a08b61de.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to Amazon VPC settings](../content/amazon-web-services-changes-to-amazon-vpc-settings-65360bb0-8986-4ade-a89d-af3cf44d28aa-7eb96dcd.md) | Low | PrivilegeEscalation, LateralMovement | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes to internet facing AWS RDS Database instances](../content/amazon-web-services-changes-to-internet-facing-aws-rds-database-instances-8c2ef238-67a0-497d-b1dd-5c8a0f533e25-7db09d92.md) | Low | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CloudFormation policy created then used for privilege escalation](../content/amazon-web-services-cloudformation-policy-created-then-used-for-privilege-escalation-efdc3cff-f006-426f-97fd-4657862f7b9a-8646101b.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Created CRUD S3 policy and then privilege escalation](../content/amazon-web-services-created-crud-s3-policy-and-then-privilege-escalation-467cbe7e-e6d4-4f4e-8e44-84dd01932c32-db5bbe56.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creating keys with encrypt policy without MFA](../content/amazon-web-services-creating-keys-with-encrypt-policy-without-mfa-454133a7-5427-4a7c-bdc4-0adfa84dda16-37ea0ba0.md) | Medium | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Access Key for IAM User](../content/amazon-web-services-creation-of-access-key-for-iam-user-9a6554e6-63d9-4f94-9b32-64d1d40628f2-db15ca72.md) | Medium | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD DynamoDB policy and then privilege escalation.](../content/amazon-web-services-creation-of-crud-dynamodb-policy-and-then-privilege-escalation.-6f675c17-7a61-440c-abd1-c73ef4d748ec-ffcdf757.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD KMS policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-kms-policy-and-then-privilege-escalation-8e15998e-1e32-4b6d-abd1-e8482e8f3def-17ec57fb.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of CRUD Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-lambda-policy-and-then-privilege-escalation-22115d3c-e87c-485a-9130-33797d619124-978cd658.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of DataPipeline policy and then privilege escalation.](../content/amazon-web-services-creation-of-datapipeline-policy-and-then-privilege-escalation.-6009c632-94e9-4ffb-a11a-b4b99f457f88-1d6dfe0a.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of EC2 policy and then privilege escalation](../content/amazon-web-services-creation-of-ec2-policy-and-then-privilege-escalation-a694e977-740c-4578-9f8f-5e39029f1d23-01a26226.md) | High | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Glue policy and then privilege escalation](../content/amazon-web-services-creation-of-glue-policy-and-then-privilege-escalation-56626956-304f-4408-8ea6-7ba5746ce09e-75660064.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-lambda-policy-and-then-privilege-escalation-796a45ee-220b-42be-8415-c8c933cf3b6d-7f05d6d4.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of SSM policy and then privilege escalation](../content/amazon-web-services-creation-of-ssm-policy-and-then-privilege-escalation-aaa2c05e-fdd4-4fa0-9072-6cffe3641b34-11a16b37.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Creation of new CRUD IAM policy and then privilege escalation.](../content/amazon-web-services-creation-of-new-crud-iam-policy-and-then-privilege-escalation.-8a607285-d95c-473d-8aab-59920de63af6-be8b1cae.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [EC2 Startup Shell Script Changed](../content/amazon-web-services-ec2-startup-shell-script-changed-f8577e4d-8481-437b-a94e-06f615985668-a9f4a4d4.md) | Medium | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings high or critical](../content/amazon-web-services-ecr-image-scan-findings-high-or-critical-f6928301-56da-4d2c-aabe-e1a552bc8892-f574c629.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Full Admin policy created and then attached to Roles, Users or Groups](../content/amazon-web-services-full-admin-policy-created-and-then-attached-to-roles,-users-or-groups-826bb2f8-7894-4785-9a6b-a8a855d8366f-be654393.md) | Medium | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [GuardDuty detector disabled or suspended](../content/amazon-web-services-guardduty-detector-disabled-or-suspended-9da99021-d318-4711-a78a-6dea76129b3a-3f13ad74.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Login to AWS Management Console without MFA](../content/amazon-web-services-login-to-aws-management-console-without-mfa-d25b1998-a592-4bc5-8a3a-92b39eedb1bc-bb2d6da4.md) | Low | DefenseEvasion, PrivilegeEscalation, Persistence, InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Monitor AWS Credential abuse or hijacking](../content/amazon-web-services-monitor-aws-credential-abuse-or-hijacking-32555639-b639-4c2b-afda-c0ae0abefa55-b389d8ba.md) | Low | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [NRT Login to AWS Management Console without MFA](../content/amazon-web-services-nrt-login-to-aws-management-console-without-mfa-0ee2aafb-4500-4e36-bcb1-e90eec2f0b9b-1415b390.md) | Low | DefenseEvasion, PrivilegeEscalation, Persistence, InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Network ACL with all the open ports to a specified CIDR](../content/amazon-web-services-network-acl-with-all-the-open-ports-to-a-specified-cidr-f8ea7d50-e33b-4b9d-9c3e-a59fcbcee281-147ac220.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Policy version set to default](../content/amazon-web-services-policy-version-set-to-default-874a1762-3fd7-4489-b411-6d4a9e9e8a59-2b04a521.md) | Medium | InitialAccess | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD DynamoDB policy](../content/amazon-web-services-privilege-escalation-via-crud-dynamodb-policy-b9be2aa6-911d-4131-8658-d2a537ed49f4-58258049.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD IAM policy](../content/amazon-web-services-privilege-escalation-via-crud-iam-policy-e20d35a3-4fec-4c8b-81b1-fc33b41990b0-36c5f48a.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD KMS policy](../content/amazon-web-services-privilege-escalation-via-crud-kms-policy-d7c39e15-997f-49e5-a782-73bf07db8aa5-487f4413.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD Lambda policy](../content/amazon-web-services-privilege-escalation-via-crud-lambda-policy-d0953d50-3dc1-4fa3-80fa-4d3e973a0959-9a222ae8.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CRUD S3 policy](../content/amazon-web-services-privilege-escalation-via-crud-s3-policy-fc3061bb-319c-4fe9-abe2-f59899a6d907-0765d145.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via CloudFormation policy](../content/amazon-web-services-privilege-escalation-via-cloudformation-policy-719d5204-10ab-4b1f-aee1-da7326750260-51abdf17.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via DataPipeline policy](../content/amazon-web-services-privilege-escalation-via-datapipeline-policy-48896551-1c28-4a09-8388-e51e5a927d23-2c0da5f6.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via EC2 policy](../content/amazon-web-services-privilege-escalation-via-ec2-policy-a2b2a984-c820-4d93-830e-139bffd81fa3-3972a1f2.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via Glue policy](../content/amazon-web-services-privilege-escalation-via-glue-policy-370f0e5e-da1d-4a14-8ced-d1d7ab66a8d7-cf7e2271.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via Lambda policy](../content/amazon-web-services-privilege-escalation-via-lambda-policy-8e01c41d-bd4c-4bbe-aed5-18592735052d-5b9881d5.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation via SSM policy](../content/amazon-web-services-privilege-escalation-via-ssm-policy-c668c09f-5a49-43f9-b249-6b89a31ec8fb-c5f4272e.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with AdministratorAccess managed policy](../content/amazon-web-services-privilege-escalation-with-administratoraccess-managed-policy-139e7116-3884-4246-9978-c8f740770bdf-2cd937dc.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with FullAccess managed policy](../content/amazon-web-services-privilege-escalation-with-fullaccess-managed-policy-afb4191b-a142-4065-a0da-f721ee3d006c-39ed48c2.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privilege escalation with admin managed policy](../content/amazon-web-services-privilege-escalation-with-admin-managed-policy-49ce5322-60d7-4b02-ad79-99f650aa5790-d6a3d173.md) | Medium | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [RDS instance publicly exposed](../content/amazon-web-services-rds-instance-publicly-exposed-8f1630c2-2e45-4df2-be43-50fba90f601d-2e6eb8ab.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 Object Exfiltration from Anonymous User](../content/amazon-web-services-s3-object-exfiltration-from-anonymous-user-15d3bf4e-8708-41c8-a836-8b0aa5be730e-38fbb5c4.md) | Medium | Collection | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket access point publicly exposed](../content/amazon-web-services-s3-bucket-access-point-publicly-exposed-b7a44e0d-ae4c-4fb2-be1b-aa0e45f2327b-90b31572.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket exposed via ACL](../content/amazon-web-services-s3-bucket-exposed-via-acl-6b9b4ee6-f4c1-4b86-8c8c-beb0bb59ae44-e329f88e.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket exposed via policy](../content/amazon-web-services-s3-bucket-exposed-via-policy-44a5b65e-b0a9-4591-aabc-388fd92a28c4-701bf828.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket suspicious ransomware activity](../content/amazon-web-services-s3-bucket-suspicious-ransomware-activity-b442b9e2-5cc4-4129-a85b-a5ef38a9e5f0-b6d1d5e8.md) | High | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 object publicly exposed](../content/amazon-web-services-s3-object-publicly-exposed-09f2a28b-3286-4268-9e2f-33805f104e5d-c5935689.md) | Medium | Exfiltration | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [SAML update identity provider](../content/amazon-web-services-saml-update-identity-provider-bce1dcba-4948-414d-8838-6385afb9d496-ee6e8731.md) | High | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [SSM document is publicly exposed](../content/amazon-web-services-ssm-document-is-publicly-exposed-75647b58-bcc8-4eb5-9658-46698d3fa153-2110e2eb.md) | Medium | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Successful API executed from a Tor exit node](../content/amazon-web-services-successful-api-executed-from-a-tor-exit-node-0adab960-5565-4978-ba6d-044553e4acc4-eec69aba.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Successful brute force attack on S3 Bucket.](../content/amazon-web-services-successful-brute-force-attack-on-s3-bucket.-31b9e94b-0df6-4a3d-a297-3457b53c5d86-636adc43.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious AWS CLI Command Execution](../content/amazon-web-services-suspicious-aws-cli-command-execution-8c2dc344-9352-4ca1-8863-b1b7a5e09e59-994383ab.md) | Medium | Reconnaissance | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious AWS EC2 Compute Resource Deployments](../content/amazon-web-services-suspicious-aws-ec2-compute-resource-deployments-9e457dc4-81f0-4d25-bc37-a5fa4a17946a-9f074032.md) | Medium | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious command sent to EC2](../content/amazon-web-services-suspicious-command-sent-to-ec2-21702832-aff3-4bd6-a8e1-663b6818503d-32ecf6f6.md) | High | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious overly permissive KMS key policy created](../content/amazon-web-services-suspicious-overly-permissive-kms-key-policy-created-60dfc193-0f73-4279-b43c-110ade02b201-aa84cc85.md) | High | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Tampering to AWS CloudTrail logs](../content/amazon-web-services-tampering-to-aws-cloudtrail-logs-633a91df-d031-4b6e-a413-607a61540559-4824c69a.md) | High | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Unauthorized EC2 Instance Setup Attempt](../content/amazon-web-services-unauthorized-ec2-instance-setup-attempt-f7210a45-12a4-4d02-b59e-f23476827a4b-d8c84c0d.md) | Medium | ResourceDevelopment | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [User IAM Enumeration](../content/amazon-web-services-user-iam-enumeration-cfaaf0bc-16d1-48df-ac8b-9d901bbd516a-530e5578.md) | Medium | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Bucket versioning suspended](../content/amazon-web-services-bucket-versioning-suspended-48c49b1d-2aa0-442b-96e3-cae6ad1251cd-9e746ab9.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS IAM objects](../content/amazon-web-services-changes-made-to-aws-iam-objects-d022a62c-643b-4e8a-b583-0230e32a96e4-8d6124b9.md) | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Changes made to AWS IAM policy](../content/amazon-web-services-changes-made-to-aws-iam-policy-e0a67cd7-b4e5-4468-aae0-26cb16a1bbd2-3b3fe70f.md) | PrivilegeEscalation, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CreateLoginProfile detected](../content/amazon-web-services-createloginprofile-detected-4e3c81bf-61a4-47f4-b20d-a5a414ea08aa-6940fe12.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [CreatePolicyVersion with excessive permissions](../content/amazon-web-services-createpolicyversion-with-excessive-permissions-e73ebd34-4f04-4684-a5f0-dba820127ce8-e4285cf3.md) | Privilege Escalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings low](../content/amazon-web-services-ecr-image-scan-findings-low-b5b172b1-d976-4113-af1f-02f7bf7d2092-3cd30c1e.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [ECR image scan findings medium](../content/amazon-web-services-ecr-image-scan-findings-medium-4fbbae0a-ce5b-4b2a-b5e6-700920561680-7e59c4e9.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Excessive execution of discovery events](../content/amazon-web-services-excessive-execution-of-discovery-events-c9ccaebf-314c-446d-b3f6-314560ccb0e1-58abf9b4.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Failed brute force on S3 bucket](../content/amazon-web-services-failed-brute-force-on-s3-bucket-13afb771-5d55-4d69-a745-83d2fc69a923-d8dd59bc.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM AccessDenied discovery events](../content/amazon-web-services-iam-accessdenied-discovery-events-7e258a45-b356-44f6-9a62-2643cef7b869-7c065274.md) | Discovery | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM Privilege Escalation by Instance Profile attachment](../content/amazon-web-services-iam-privilege-escalation-by-instance-profile-attachment-e1a91db8-f2b3-4531-bff6-da133d4f4f1a-8b33d03d.md) | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [IAM assume role policy brute force](../content/amazon-web-services-iam-assume-role-policy-brute-force-2b8cecfe-f705-432d-9f38-08207b9473e1-82485ab3.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda UpdateFunctionCode](../content/amazon-web-services-lambda-updatefunctioncode-2dd2143b-6667-4a7a-b04f-98d22caeffac-426afada.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda function throttled](../content/amazon-web-services-lambda-function-throttled-d82ea1db-f600-4c9e-8ba8-d271e9c12eb8-d7a33aaf.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Lambda layer imported from external account](../content/amazon-web-services-lambda-layer-imported-from-external-account-77d0aadc-aaea-4346-b61a-bf7ac6b71bba-133cc638.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Login profile updated](../content/amazon-web-services-login-profile-updated-838f59d4-fe47-422b-819d-1be502940547-de9db028.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of route-table attributes](../content/amazon-web-services-modification-of-route-table-attributes-3b7df29e-a798-4b6b-9ef7-73b9a3cf56a2-db6c80fd.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of subnet attributes](../content/amazon-web-services-modification-of-subnet-attributes-05167149-4670-4a9f-b34e-5a0a92243194-7605c0bc.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Modification of vpc attributes](../content/amazon-web-services-modification-of-vpc-attributes-a3a19731-9e82-49b6-9142-2dd570feefd5-e33d1371.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Multiple failed login attempts to an existing user without MFA](../content/amazon-web-services-multiple-failed-login-attempts-to-an-existing-user-without-mfa-bf130d1d-702b-4af6-9528-8bc4229e59f4-bb3fdc82.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Network ACL deleted](../content/amazon-web-services-network-acl-deleted-49bae199-ea04-4a2e-95a6-e3a1f68ab259-038e38e1.md) | Defense Evasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [New AccessKey created for Root user](../content/amazon-web-services-new-accesskey-created-for-root-user-4055466c-8a84-44c6-91d0-46469f3ba0b9-42884d7f.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [New access key created to user](../content/amazon-web-services-new-access-key-created-to-user-a2772445-9bb1-4176-9481-b262cb59118a-d5f0bb4f.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Privileged role attached to Instance](../content/amazon-web-services-privileged-role-attached-to-instance-0db42a94-e7c8-4bf1-99a7-1a2fb4158212-e01481fe.md) | PrivilegeEscalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [RDS instance master password changed](../content/amazon-web-services-rds-instance-master-password-changed-b9b0fd12-d72d-4f66-a013-c1acdeea2670-7c08e965.md) | Privilege Escalation | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Risky role name created](../content/amazon-web-services-risky-role-name-created-70c36558-e6d8-48b4-98b3-185d555cd5af-a0e5c4e0.md) | Persistence | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket encryption modified](../content/amazon-web-services-s3-bucket-encryption-modified-6eb59239-78c5-401d-acfa-5cb9b3d31cd4-aea42032.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [S3 bucket has been deleted](../content/amazon-web-services-s3-bucket-has-been-deleted-356aa5a8-fa6f-4eb9-baa9-ffcf725e3e82-7a253da6.md) | Impact | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious EC2 launched without a key pair](../content/amazon-web-services-suspicious-ec2-launched-without-a-key-pair-81a8880f-cc20-40ce-98d6-2fc6a1c5b9a4-4a29619e.md) | Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS Token related to Kubernetes worker node](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-kubernetes-worker-node-46685737-676a-4084-8e98-31b2998062db-3753805b.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to EC2](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ec2-82ecf967-d6e9-4757-8f5d-42c562a8f05f-a39130ee.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to ECS](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ecs-67af1633-311f-4a94-bc8f-f904a54637b2-43fff997.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to Glue](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-glue-0cd3eb95-6c8e-4eeb-8338-a0decdc0a328-d801b492.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious activity of STS token related to Lambda](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-lambda-70a6e84f-6f3b-4ce1-83d6-ea6df9e7a9dd-fb38780a.md) | Credential Access | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Suspicious credential token access of valid IAM Roles](../content/amazon-web-services-suspicious-credential-token-access-of-valid-iam-roles-5b6ee21d-da53-46eb-827c-eab2a9ba3d2f-ed892985.md) | InitialAccess, DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [Unused or Unsupported Cloud Regions](../content/amazon-web-services-unused-or-unsupported-cloud-regions-e0d57543-acbd-428b-bb96-24a67506f84d-bfc3cdb8.md) | DefenseEvasion | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AmazonWebServicesNetworkActivities](../content/amazon-web-services-amazonwebservicesnetworkactivities-3dba3320.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md) |
| [AmazonWebServicesUserActivities](../content/amazon-web-services-amazonwebservicesuseractivities-9c51ee6e.md) | [`AWSCloudTrail`](../tables/awscloudtrail.md) |

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
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

