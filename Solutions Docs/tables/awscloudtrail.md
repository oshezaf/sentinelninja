# AWSCloudTrail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSCloudTrail table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awscloudtrail) |

## Solutions (14)

This table is used by the following solutions:

- [Amazon Web Services](../solutions/amazon-web-services.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services](../connectors/aws.md) |  |
| [Amazon Web Services S3](../connectors/awss3.md) | `EventName == "CreateUser"` |

---

## Content Items Using This Table (119)

### Analytic Rules (73)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AWS Config Service Resource Deletion Attempts](../content/amazon-web-services-aws-config-service-resource-deletion-attempts-093fe75e-44f1-4d3e-94dc-6d258a6dd2d2-c24c7483.md) | `EventName in "DeleteEventBus,DeleteFlowLogs,DeleteTrail,StopLogging,UpdateTrail"` |
| [Automatic image scanning disabled for ECR](../content/amazon-web-services-automatic-image-scanning-disabled-for-ecr-19602494-94af-43c8-90ba-eb0e14999612-4cbaf0c4.md) | `EventName == "PutImageScanningConfiguration"` |
| [Changes made to AWS CloudTrail logs](../content/amazon-web-services-changes-made-to-aws-cloudtrail-logs-610d3850-c26f-4f20-8d86-f10fdf2425f5-0948a9d0.md) | `EventName in "DeleteEventBus,DeleteFlowLogs,DeleteTrail,StopLogging,UpdateTrail"` |
| [Changes to AWS Elastic Load Balancer security groups](../content/amazon-web-services-changes-to-aws-elastic-load-balancer-security-groups-c7bfadd4-34a6-4fa5-82f8-3691a32261e8-61c6a3f8.md) | `EventName in "ApplySecurityGroupsToLoadBalancer,SetSecurityGroups"` |
| [Changes to AWS Security Group ingress and egress settings](../content/amazon-web-services-changes-to-aws-security-group-ingress-and-egress-settings-4f19d4e3-ec5f-4abc-9e61-819eb131758c-a08b61de.md) | `EventName in "AuthorizeSecurityGroupEgress,AuthorizeSecurityGroupIngress,RevokeSecurityGroupEgress,RevokeSecurityGroupIngress"` |
| [Changes to Amazon VPC settings](../content/amazon-web-services-changes-to-amazon-vpc-settings-65360bb0-8986-4ade-a89d-af3cf44d28aa-7eb96dcd.md) | `EventName in "CreateInternetGateway,CreateNatGateway,CreateNetworkAclEntry,CreateRoute,CreateRouteTable"` |
| [Changes to internet facing AWS RDS Database instances](../content/amazon-web-services-changes-to-internet-facing-aws-rds-database-instances-8c2ef238-67a0-497d-b1dd-5c8a0f533e25-7db09d92.md) | `EventName in "AuthorizeDBSecurityGroupIngress,CreateDBSecurityGroup,DeleteDBSecurityGroup,RevokeDBSecurityGroupIngress"` |
| [CloudFormation policy created then used for privilege escalation](../content/amazon-web-services-cloudformation-policy-created-then-used-for-privilege-escalation-efdc3cff-f006-426f-97fd-4657862f7b9a-8646101b.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Created CRUD S3 policy and then privilege escalation](../content/amazon-web-services-created-crud-s3-policy-and-then-privilege-escalation-467cbe7e-e6d4-4f4e-8e44-84dd01932c32-db5bbe56.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creating keys with encrypt policy without MFA](../content/amazon-web-services-creating-keys-with-encrypt-policy-without-mfa-454133a7-5427-4a7c-bdc4-0adfa84dda16-37ea0ba0.md) | `EventName in "CreateKey,PutKeyPolicy"` |
| [Creation of Access Key for IAM User](../content/amazon-web-services-creation-of-access-key-for-iam-user-9a6554e6-63d9-4f94-9b32-64d1d40628f2-db15ca72.md) | `EventName == "CreateAccessKey"` |
| [Creation of CRUD DynamoDB policy and then privilege escalation.](../content/amazon-web-services-creation-of-crud-dynamodb-policy-and-then-privilege-escalation.-6f675c17-7a61-440c-abd1-c73ef4d748ec-ffcdf757.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of CRUD KMS policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-kms-policy-and-then-privilege-escalation-8e15998e-1e32-4b6d-abd1-e8482e8f3def-17ec57fb.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of CRUD Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-lambda-policy-and-then-privilege-escalation-22115d3c-e87c-485a-9130-33797d619124-978cd658.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of DataPipeline policy and then privilege escalation.](../content/amazon-web-services-creation-of-datapipeline-policy-and-then-privilege-escalation.-6009c632-94e9-4ffb-a11a-b4b99f457f88-1d6dfe0a.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of EC2 policy and then privilege escalation](../content/amazon-web-services-creation-of-ec2-policy-and-then-privilege-escalation-a694e977-740c-4578-9f8f-5e39029f1d23-01a26226.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of Glue policy and then privilege escalation](../content/amazon-web-services-creation-of-glue-policy-and-then-privilege-escalation-56626956-304f-4408-8ea6-7ba5746ce09e-75660064.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-lambda-policy-and-then-privilege-escalation-796a45ee-220b-42be-8415-c8c933cf3b6d-7f05d6d4.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of SSM policy and then privilege escalation](../content/amazon-web-services-creation-of-ssm-policy-and-then-privilege-escalation-aaa2c05e-fdd4-4fa0-9072-6cffe3641b34-11a16b37.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [Creation of new CRUD IAM policy and then privilege escalation.](../content/amazon-web-services-creation-of-new-crud-iam-policy-and-then-privilege-escalation.-8a607285-d95c-473d-8aab-59920de63af6-be8b1cae.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [EC2 Startup Shell Script Changed](../content/amazon-web-services-ec2-startup-shell-script-changed-f8577e4d-8481-437b-a94e-06f615985668-a9f4a4d4.md) | `EventName in "CreateLaunchTemplate,ModifyInstanceAttribute"` |
| [ECR image scan findings high or critical](../content/amazon-web-services-ecr-image-scan-findings-high-or-critical-f6928301-56da-4d2c-aabe-e1a552bc8892-f574c629.md) | `EventName == "DescribeImageScanFindings"` |
| [Full Admin policy created and then attached to Roles, Users or Groups](../content/amazon-web-services-full-admin-policy-created-and-then-attached-to-roles,-users-or-groups-826bb2f8-7894-4785-9a6b-a8a855d8366f-be654393.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` |
| [GuardDuty detector disabled or suspended](../content/amazon-web-services-guardduty-detector-disabled-or-suspended-9da99021-d318-4711-a78a-6dea76129b3a-3f13ad74.md) | `EventName in "DeleteDetector,UpdateDetector"` |
| [Login to AWS Management Console without MFA](../content/amazon-web-services-login-to-aws-management-console-without-mfa-d25b1998-a592-4bc5-8a3a-92b39eedb1bc-bb2d6da4.md) | `EventName == "ConsoleLogin"` |
| [Monitor AWS Credential abuse or hijacking](../content/amazon-web-services-monitor-aws-credential-abuse-or-hijacking-32555639-b639-4c2b-afda-c0ae0abefa55-b389d8ba.md) | `EventName == "GetCallerIdentity"` |
| [NRT Login to AWS Management Console without MFA](../content/amazon-web-services-nrt-login-to-aws-management-console-without-mfa-0ee2aafb-4500-4e36-bcb1-e90eec2f0b9b-1415b390.md) | `EventName == "ConsoleLogin"` |
| [Network ACL with all the open ports to a specified CIDR](../content/amazon-web-services-network-acl-with-all-the-open-ports-to-a-specified-cidr-f8ea7d50-e33b-4b9d-9c3e-a59fcbcee281-147ac220.md) | `EventName in "CreateNetworkAclEntry,ReplaceNetworkAclEntry"` |
| [Policy version set to default](../content/amazon-web-services-policy-version-set-to-default-874a1762-3fd7-4489-b411-6d4a9e9e8a59-2b04a521.md) | `EventName == "SetDefaultPolicyVersion"` |
| [Privilege escalation via CRUD DynamoDB policy](../content/amazon-web-services-privilege-escalation-via-crud-dynamodb-policy-b9be2aa6-911d-4131-8658-d2a537ed49f4-58258049.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via CRUD IAM policy](../content/amazon-web-services-privilege-escalation-via-crud-iam-policy-e20d35a3-4fec-4c8b-81b1-fc33b41990b0-36c5f48a.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via CRUD KMS policy](../content/amazon-web-services-privilege-escalation-via-crud-kms-policy-d7c39e15-997f-49e5-a782-73bf07db8aa5-487f4413.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via CRUD Lambda policy](../content/amazon-web-services-privilege-escalation-via-crud-lambda-policy-d0953d50-3dc1-4fa3-80fa-4d3e973a0959-9a222ae8.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via CRUD S3 policy](../content/amazon-web-services-privilege-escalation-via-crud-s3-policy-fc3061bb-319c-4fe9-abe2-f59899a6d907-0765d145.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via CloudFormation policy](../content/amazon-web-services-privilege-escalation-via-cloudformation-policy-719d5204-10ab-4b1f-aee1-da7326750260-51abdf17.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via DataPipeline policy](../content/amazon-web-services-privilege-escalation-via-datapipeline-policy-48896551-1c28-4a09-8388-e51e5a927d23-2c0da5f6.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via EC2 policy](../content/amazon-web-services-privilege-escalation-via-ec2-policy-a2b2a984-c820-4d93-830e-139bffd81fa3-3972a1f2.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via Glue policy](../content/amazon-web-services-privilege-escalation-via-glue-policy-370f0e5e-da1d-4a14-8ced-d1d7ab66a8d7-cf7e2271.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via Lambda policy](../content/amazon-web-services-privilege-escalation-via-lambda-policy-8e01c41d-bd4c-4bbe-aed5-18592735052d-5b9881d5.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation via SSM policy](../content/amazon-web-services-privilege-escalation-via-ssm-policy-c668c09f-5a49-43f9-b249-6b89a31ec8fb-c5f4272e.md) | `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` |
| [Privilege escalation with AdministratorAccess managed policy](../content/amazon-web-services-privilege-escalation-with-administratoraccess-managed-policy-139e7116-3884-4246-9978-c8f740770bdf-2cd937dc.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` |
| [Privilege escalation with FullAccess managed policy](../content/amazon-web-services-privilege-escalation-with-fullaccess-managed-policy-afb4191b-a142-4065-a0da-f721ee3d006c-39ed48c2.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` |
| [Privilege escalation with admin managed policy](../content/amazon-web-services-privilege-escalation-with-admin-managed-policy-49ce5322-60d7-4b02-ad79-99f650aa5790-d6a3d173.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` |
| [RDS instance publicly exposed](../content/amazon-web-services-rds-instance-publicly-exposed-8f1630c2-2e45-4df2-be43-50fba90f601d-2e6eb8ab.md) | `EventName in "CreateDBInstance,ModifyDBInstance"` |
| [S3 Object Exfiltration from Anonymous User](../content/amazon-web-services-s3-object-exfiltration-from-anonymous-user-15d3bf4e-8708-41c8-a836-8b0aa5be730e-38fbb5c4.md) | `EventName == "GetObject"` |
| [S3 bucket access point publicly exposed](../content/amazon-web-services-s3-bucket-access-point-publicly-exposed-b7a44e0d-ae4c-4fb2-be1b-aa0e45f2327b-90b31572.md) | `EventName == "PutAccessPointPolicy"` |
| [S3 bucket exposed via ACL](../content/amazon-web-services-s3-bucket-exposed-via-acl-6b9b4ee6-f4c1-4b86-8c8c-beb0bb59ae44-e329f88e.md) | `EventName == "PutBucketAcl"` |
| [S3 bucket exposed via policy](../content/amazon-web-services-s3-bucket-exposed-via-policy-44a5b65e-b0a9-4591-aabc-388fd92a28c4-701bf828.md) | `EventName == "PutBucketPolicy"` |
| [S3 bucket suspicious ransomware activity](../content/amazon-web-services-s3-bucket-suspicious-ransomware-activity-b442b9e2-5cc4-4129-a85b-a5ef38a9e5f0-b6d1d5e8.md) | `EventName in "GetObject,PutObject"` |
| [S3 object publicly exposed](../content/amazon-web-services-s3-object-publicly-exposed-09f2a28b-3286-4268-9e2f-33805f104e5d-c5935689.md) | `EventName == "PutObjectAcl"` |
| [SAML update identity provider](../content/amazon-web-services-saml-update-identity-provider-bce1dcba-4948-414d-8838-6385afb9d496-ee6e8731.md) | `EventName == "UpdateSAMLProvider"` |
| [SSM document is publicly exposed](../content/amazon-web-services-ssm-document-is-publicly-exposed-75647b58-bcc8-4eb5-9658-46698d3fa153-2110e2eb.md) | `EventName == "ModifyDocumentPermission"` |
| [Successful API executed from a Tor exit node](../content/amazon-web-services-successful-api-executed-from-a-tor-exit-node-0adab960-5565-4978-ba6d-044553e4acc4-eec69aba.md) |  |
| [Successful brute force attack on S3 Bucket.](../content/amazon-web-services-successful-brute-force-attack-on-s3-bucket.-31b9e94b-0df6-4a3d-a297-3457b53c5d86-636adc43.md) | `EventName == "GetObject"` |
| [Suspicious AWS CLI Command Execution](../content/amazon-web-services-suspicious-aws-cli-command-execution-8c2dc344-9352-4ca1-8863-b1b7a5e09e59-994383ab.md) |  |
| [Suspicious AWS EC2 Compute Resource Deployments](../content/amazon-web-services-suspicious-aws-ec2-compute-resource-deployments-9e457dc4-81f0-4d25-bc37-a5fa4a17946a-9f074032.md) | `EventName == "RunInstances"` |
| [Suspicious command sent to EC2](../content/amazon-web-services-suspicious-command-sent-to-ec2-21702832-aff3-4bd6-a8e1-663b6818503d-32ecf6f6.md) | `EventName in "CreateAssociation,PutObject,SendCommand"` |
| [Suspicious overly permissive KMS key policy created](../content/amazon-web-services-suspicious-overly-permissive-kms-key-policy-created-60dfc193-0f73-4279-b43c-110ade02b201-aa84cc85.md) | `EventName in "CreateKey,PutKeyPolicy"` |
| [Tampering to AWS CloudTrail logs](../content/amazon-web-services-tampering-to-aws-cloudtrail-logs-633a91df-d031-4b6e-a413-607a61540559-4824c69a.md) | `EventName in "DeleteEventBus,DeleteFlowLogs,DeleteLogGroup,DeleteTrail,StopLogging,UpdateTrail"` |
| [Unauthorized EC2 Instance Setup Attempt](../content/amazon-web-services-unauthorized-ec2-instance-setup-attempt-f7210a45-12a4-4d02-b59e-f23476827a4b-d8c84c0d.md) | `EventName == "RunInstances"` |
| [User IAM Enumeration](../content/amazon-web-services-user-iam-enumeration-cfaaf0bc-16d1-48df-ac8b-9d901bbd516a-530e5578.md) | `EventName in "ListAccessKeys,ListAttachedRolePolicies,ListAttachedUserPolicies,ListGroupsForUser,ListRoles,ListUsers"` |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Suspicious access of BEC related documents in AWS S3 buckets](../content/business-email-compromise-financial-fraud-suspicious-access-of-bec-related-documents-in-aws-s3-buckets-f3e2d35f-1202-4215-995c-4654ef07d1d8-5612c5c0.md) |  |

**In solution [Cloud Identity Threat Protection Essentials](../solutions/cloud-identity-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Multi-Factor Authentication Disabled for a User](../content/cloud-identity-threat-protection-essentials-multi-factor-authentication-disabled-for-a-user-65c78944-930b-4cae-bd79-c3664ae30ba7-478ef443.md) |  |

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials-resource-abuse.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross-Cloud Password Spray detection](../content/multi-cloud-attack-coverage-essentials-resource-abuse-cross-cloud-password-spray-detection-1f40ed57-f54b-462f-906a-ac3a89cc90d4-5128b308.md) | `EventName == "ConsoleLogin"` |
| [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials-resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475-11195fd6.md) | `EventName in "AddUserToGroup,ChangePassword,CreateAccessKey,CreateGroup,CreateMailUser,CreateOrganization,CreateRole,CreateServiceSpecificCredential,CreateUser,CreateVirtualMFADevice,DeleteAccessKey,DeleteGroup,DeleteGroupPolicy,DeleteLoginProfile,DeleteRole,DeleteServiceSpecificCredential,DeleteUser,DisableMailUsers,EnableMailUsers,RegisterToWorkMail,RemoveUserFromGroup,ResetPassword,SetDefaultMailDomain,SetMailUserDetails,UpdateAccountEmailAddress,UploadServerCertificate"` |
| [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials-resource-abuse-successful-aws-console-login-from-ip-address-obser-188db479-d50a-4a9c-a041-644bae347d1f-57aa98e4.md) | `EventName == "ConsoleLogin"` |
| [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-suspicious-aws-console-logins-by-credential-access-b51fe620-62ad-4ed2-9d40-5c97c0a8231f-dbe5a529.md) | `EventName == "ConsoleLogin"` |
| [User impersonation by Identity Protection alerts](../content/multi-cloud-attack-coverage-essentials-resource-abuse-user-impersonation-by-identity-protection-alerts-11c3d541-5fa5-49df-8218-d1c98584473b-06b1ea41.md) | `EventName in "AddUserToGroup,ChangePassword,CreateAccessKey,CreateGroup,CreateRole,CreateUser,CreateVirtualMFADevice,DeleteAccessKey,DeleteGroup,DeleteLoginProfile,DeleteRole,DeleteUser,RemoveUserFromGroup"` |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [New UserAgent observed in last 24 hours](../content/network-threat-protection-essentials-new-useragent-observed-in-last-24-hours-b725d62c-eb77-42ff-96f6-bdc6745fc6e0-a94f1913.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-ti-map-ip-entity-to-awscloudtrail-f110287e-1358-490d-8147-ed804b328514-010bee9c.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-new-ti-map-ip-entity-to-awscloudtrail-69f55be4-1b13-42d0-b975-a1e59c996dd2-4cc25f87.md) |  |

### Hunting Queries (37)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Bucket versioning suspended](../content/amazon-web-services-bucket-versioning-suspended-48c49b1d-2aa0-442b-96e3-cae6ad1251cd-9e746ab9.md) | `EventName == "PutBucketVersioning"` |
| [Changes made to AWS IAM objects](../content/amazon-web-services-changes-made-to-aws-iam-objects-d022a62c-643b-4e8a-b583-0230e32a96e4-8d6124b9.md) | `EventName in "CreateUser,DeleteGroup,DeleteUser"` |
| [Changes made to AWS IAM policy](../content/amazon-web-services-changes-made-to-aws-iam-policy-e0a67cd7-b4e5-4468-aae0-26cb16a1bbd2-3b3fe70f.md) | `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion,DeleteGroupPolicy,DeletePolicy,DeletePolicyVersion,DeleteRolePolicy,DeleteUserPolicy,DetachGroupPolicy,DetachRolePolicy,PutGroupPolicy,PutUserPolicy"` |
| [CreateLoginProfile detected](../content/amazon-web-services-createloginprofile-detected-4e3c81bf-61a4-47f4-b20d-a5a414ea08aa-6940fe12.md) | `EventName == "CreateLoginProfile"` |
| [CreatePolicyVersion with excessive permissions](../content/amazon-web-services-createpolicyversion-with-excessive-permissions-e73ebd34-4f04-4684-a5f0-dba820127ce8-e4285cf3.md) | `EventName == "CreatePolicyVersion"` |
| [ECR image scan findings low](../content/amazon-web-services-ecr-image-scan-findings-low-b5b172b1-d976-4113-af1f-02f7bf7d2092-3cd30c1e.md) | `EventName == "DescribeImageScanFindings"` |
| [ECR image scan findings medium](../content/amazon-web-services-ecr-image-scan-findings-medium-4fbbae0a-ce5b-4b2a-b5e6-700920561680-7e59c4e9.md) | `EventName == "DescribeImageScanFindings"` |
| [Excessive execution of discovery events](../content/amazon-web-services-excessive-execution-of-discovery-events-c9ccaebf-314c-446d-b3f6-314560ccb0e1-58abf9b4.md) | `EventName startswith "Describe"`<br>`EventName startswith "Get"`<br>`EventName startswith "List"` |
| [Failed brute force on S3 bucket](../content/amazon-web-services-failed-brute-force-on-s3-bucket-13afb771-5d55-4d69-a745-83d2fc69a923-d8dd59bc.md) | `EventName == "GetObject"` |
| [IAM AccessDenied discovery events](../content/amazon-web-services-iam-accessdenied-discovery-events-7e258a45-b356-44f6-9a62-2643cef7b869-7c065274.md) |  |
| [IAM Privilege Escalation by Instance Profile attachment](../content/amazon-web-services-iam-privilege-escalation-by-instance-profile-attachment-e1a91db8-f2b3-4531-bff6-da133d4f4f1a-8b33d03d.md) | `EventName in "AddRoleToInstanceProfile,RemoveRoleFromInstanceProfile"` |
| [IAM assume role policy brute force](../content/amazon-web-services-iam-assume-role-policy-brute-force-2b8cecfe-f705-432d-9f38-08207b9473e1-82485ab3.md) | `EventName == "AssumeRole"` |
| [Lambda UpdateFunctionCode](../content/amazon-web-services-lambda-updatefunctioncode-2dd2143b-6667-4a7a-b04f-98d22caeffac-426afada.md) | `EventName startswith "UpdateFunctionCode"` |
| [Lambda function throttled](../content/amazon-web-services-lambda-function-throttled-d82ea1db-f600-4c9e-8ba8-d271e9c12eb8-d7a33aaf.md) | `EventName startswith "PutFunctionConcurrency"` |
| [Lambda layer imported from external account](../content/amazon-web-services-lambda-layer-imported-from-external-account-77d0aadc-aaea-4346-b61a-bf7ac6b71bba-133cc638.md) | `EventName startswith "CreateFunction"`<br>`EventName startswith "UpdateFunctionConfiguration"` |
| [Login profile updated](../content/amazon-web-services-login-profile-updated-838f59d4-fe47-422b-819d-1be502940547-de9db028.md) | `EventName == "UpdateLoginProfile"` |
| [Modification of route-table attributes](../content/amazon-web-services-modification-of-route-table-attributes-3b7df29e-a798-4b6b-9ef7-73b9a3cf56a2-db6c80fd.md) | `EventName in "CreateRoute,DeleteRoute,ReplaceRoute"` |
| [Modification of subnet attributes](../content/amazon-web-services-modification-of-subnet-attributes-05167149-4670-4a9f-b34e-5a0a92243194-7605c0bc.md) | `EventName == "ModifySubnetAttribute"` |
| [Modification of vpc attributes](../content/amazon-web-services-modification-of-vpc-attributes-a3a19731-9e82-49b6-9142-2dd570feefd5-e33d1371.md) | `EventName == "ModifyVpcAttribute"` |
| [Multiple failed login attempts to an existing user without MFA](../content/amazon-web-services-multiple-failed-login-attempts-to-an-existing-user-without-mfa-bf130d1d-702b-4af6-9528-8bc4229e59f4-bb3fdc82.md) | `EventName == "ConsoleLogin"` |
| [Network ACL deleted](../content/amazon-web-services-network-acl-deleted-49bae199-ea04-4a2e-95a6-e3a1f68ab259-038e38e1.md) | `EventName == "DeleteNetworkAclEntry"` |
| [New AccessKey created for Root user](../content/amazon-web-services-new-accesskey-created-for-root-user-4055466c-8a84-44c6-91d0-46469f3ba0b9-42884d7f.md) | `EventName == "CreateAccessKey"` |
| [New access key created to user](../content/amazon-web-services-new-access-key-created-to-user-a2772445-9bb1-4176-9481-b262cb59118a-d5f0bb4f.md) | `EventName == "CreateAccessKey"` |
| [Privileged role attached to Instance](../content/amazon-web-services-privileged-role-attached-to-instance-0db42a94-e7c8-4bf1-99a7-1a2fb4158212-e01481fe.md) | `EventName in "AddRoleToInstanceProfile,AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` |
| [RDS instance master password changed](../content/amazon-web-services-rds-instance-master-password-changed-b9b0fd12-d72d-4f66-a013-c1acdeea2670-7c08e965.md) | `EventName == "ModifyDBCluster"` |
| [Risky role name created](../content/amazon-web-services-risky-role-name-created-70c36558-e6d8-48b4-98b3-185d555cd5af-a0e5c4e0.md) | `EventName == "CreateRole"` |
| [S3 bucket encryption modified](../content/amazon-web-services-s3-bucket-encryption-modified-6eb59239-78c5-401d-acfa-5cb9b3d31cd4-aea42032.md) | `EventName in "DeleteBucketEncryption,PutBucketEncryption"` |
| [S3 bucket has been deleted](../content/amazon-web-services-s3-bucket-has-been-deleted-356aa5a8-fa6f-4eb9-baa9-ffcf725e3e82-7a253da6.md) | `EventName == "DeleteBucket"` |
| [Suspicious EC2 launched without a key pair](../content/amazon-web-services-suspicious-ec2-launched-without-a-key-pair-81a8880f-cc20-40ce-98d6-2fc6a1c5b9a4-4a29619e.md) | `EventName == "RunInstances"` |
| [Suspicious activity of STS Token related to Kubernetes worker node](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-kubernetes-worker-node-46685737-676a-4084-8e98-31b2998062db-3753805b.md) |  |
| [Suspicious activity of STS token related to EC2](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ec2-82ecf967-d6e9-4757-8f5d-42c562a8f05f-a39130ee.md) |  |
| [Suspicious activity of STS token related to ECS](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ecs-67af1633-311f-4a94-bc8f-f904a54637b2-43fff997.md) |  |
| [Suspicious activity of STS token related to Glue](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-glue-0cd3eb95-6c8e-4eeb-8338-a0decdc0a328-d801b492.md) |  |
| [Suspicious activity of STS token related to Lambda](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-lambda-70a6e84f-6f3b-4ce1-83d6-ea6df9e7a9dd-fb38780a.md) |  |
| [Suspicious credential token access of valid IAM Roles](../content/amazon-web-services-suspicious-credential-token-access-of-valid-iam-roles-5b6ee21d-da53-46eb-827c-eab2a9ba3d2f-ed892985.md) | `EventName == "AssumeRole"` |
| [Unused or Unsupported Cloud Regions](../content/amazon-web-services-unused-or-unsupported-cloud-regions-e0d57543-acbd-428b-bb96-24a67506f84d-bfc3cdb8.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Exploit and Pentest Framework User Agent](../content/network-threat-protection-essentials-exploit-and-pentest-framework-user-agent-df75ac6c-7b0b-40d2-82e4-191c012f1a07-77056d12.md) |  |

### Workbooks (9)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AmazonWebServicesNetworkActivities](../content/amazon-web-services-amazonwebservicesnetworkactivities-3dba3320.md) | `EventName in "AllocateAddress,AssociateAddress,AuthorizeSecurityGroupEgress,AuthorizeSecurityGroupIngress,CreateNetworkAcl,CreateSecurityGroup,DeleteNetworkAcl,DeleteSecurityGroup,DisassociateAddress,ReleaseAddress,ReplaceNetworkAclEntry,RevokeSecurityGroupEgress,RevokeSecurityGroupIngress"`<br>`EventName !contains "Image"`<br>`EventName !contains "KeyPair"`<br>`EventName !contains "LaunchTemplate"`<br>`EventName !contains "Tags"`<br>`EventName !contains "Volume"`<br>`EventName startswith "authorize"`<br>`EventName startswith "create"`<br>`EventName startswith "delete"`<br>`EventName startswith "replace"`<br>`EventName startswith "revoke"` |
| [AmazonWebServicesUserActivities](../content/amazon-web-services-amazonwebservicesuseractivities-9c51ee6e.md) | `EventName == "GetCallerIdentity"`<br>`EventName contains "Login"`<br>`EventName contains "login"`<br>`EventName contains "signin"` |

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `EventName == "ConsoleLogin"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimAuthenticationAWSCloudTrail](../asim/asimauthenticationawscloudtrail.md) | Authentication | AWS |

## Selection Criteria Summary (57 criteria, 97 total references)

References by type: 1 connectors, 95 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion"` | - | 12 | - | - | **12** |
| `EventName in "PutGroupPolicy,PutRolePolicy,PutUserPolicy"` | - | 11 | - | - | **11** |
| `EventName == "ConsoleLogin"` | - | 6 | 1 | - | **7** |
| `EventName == "DescribeImageScanFindings"` | - | 3 | - | - | **3** |
| `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` | - | 3 | - | - | **3** |
| `EventName == "GetObject"` | - | 3 | - | - | **3** |
| `EventName == "RunInstances"` | - | 3 | - | - | **3** |
| `EventName == "CreateAccessKey"` | - | 3 | - | - | **3** |
| `EventName in "DeleteEventBus,DeleteFlowLogs,DeleteTrail,StopLogging,UpdateTrail"` | - | 2 | - | - | **2** |
| `EventName in "CreateKey,PutKeyPolicy"` | - | 2 | - | - | **2** |
| `EventName == "AssumeRole"` | - | 2 | - | - | **2** |
| `EventName == "CreateUser"` | 1 | - | - | - | **1** |
| `EventName in "AuthorizeDBSecurityGroupIngress,CreateDBSecurityGroup,DeleteDBSecurityGroup,RevokeDBSecurityGroupIngress"` | - | 1 | - | - | **1** |
| `EventName in "CreateInternetGateway,CreateNatGateway,CreateNetworkAclEntry,CreateRoute,CreateRouteTable"` | - | 1 | - | - | **1** |
| `EventName == "GetCallerIdentity"` | - | 1 | - | - | **1** |
| `EventName in "CreateLaunchTemplate,ModifyInstanceAttribute"` | - | 1 | - | - | **1** |
| `EventName == "PutImageScanningConfiguration"` | - | 1 | - | - | **1** |
| `EventName in "DeleteDetector,UpdateDetector"` | - | 1 | - | - | **1** |
| `EventName in "AuthorizeSecurityGroupEgress,AuthorizeSecurityGroupIngress,RevokeSecurityGroupEgress,RevokeSecurityGroupIngress"` | - | 1 | - | - | **1** |
| `EventName in "ApplySecurityGroupsToLoadBalancer,SetSecurityGroups"` | - | 1 | - | - | **1** |
| `EventName in "DeleteEventBus,DeleteFlowLogs,DeleteLogGroup,DeleteTrail,StopLogging,UpdateTrail"` | - | 1 | - | - | **1** |
| `EventName in "CreateNetworkAclEntry,ReplaceNetworkAclEntry"` | - | 1 | - | - | **1** |
| `EventName in "CreateDBInstance,ModifyDBInstance"` | - | 1 | - | - | **1** |
| `EventName == "PutAccessPointPolicy"` | - | 1 | - | - | **1** |
| `EventName == "PutBucketAcl"` | - | 1 | - | - | **1** |
| `EventName == "PutBucketPolicy"` | - | 1 | - | - | **1** |
| `EventName == "PutObjectAcl"` | - | 1 | - | - | **1** |
| `EventName in "GetObject,PutObject"` | - | 1 | - | - | **1** |
| `EventName == "UpdateSAMLProvider"` | - | 1 | - | - | **1** |
| `EventName == "SetDefaultPolicyVersion"` | - | 1 | - | - | **1** |
| `EventName == "ModifyDocumentPermission"` | - | 1 | - | - | **1** |
| `EventName in "CreateAssociation,PutObject,SendCommand"` | - | 1 | - | - | **1** |
| `EventName in "ListAccessKeys,ListAttachedRolePolicies,ListAttachedUserPolicies,ListGroupsForUser,ListRoles,ListUsers"` | - | 1 | - | - | **1** |
| `EventName in "AddUserToGroup,ChangePassword,CreateAccessKey,CreateGroup,CreateRole,CreateUser,CreateVirtualMFADevice,DeleteAccessKey,DeleteGroup,DeleteLoginProfile,DeleteRole,DeleteUser,RemoveUserFromGroup"` | - | 1 | - | - | **1** |
| `EventName in "AddUserToGroup,ChangePassword,CreateAccessKey,CreateGroup,CreateMailUser,CreateOrganization,CreateRole,CreateServiceSpecificCredential,CreateUser,CreateVirtualMFADevice,DeleteAccessKey,DeleteGroup,DeleteGroupPolicy,DeleteLoginProfile,DeleteRole,DeleteServiceSpecificCredential,DeleteUser,DisableMailUsers,EnableMailUsers,RegisterToWorkMail,RemoveUserFromGroup,ResetPassword,SetDefaultMailDomain,SetMailUserDetails,UpdateAccountEmailAddress,UploadServerCertificate"` | - | 1 | - | - | **1** |
| `EventName == "PutBucketVersioning"` | - | 1 | - | - | **1** |
| `EventName == "CreateLoginProfile"` | - | 1 | - | - | **1** |
| `EventName startswith "Describe"`<br>`EventName startswith "Get"`<br>`EventName startswith "List"` | - | 1 | - | - | **1** |
| `EventName in "CreateUser,DeleteGroup,DeleteUser"` | - | 1 | - | - | **1** |
| `EventName in "AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy,CreatePolicy,CreatePolicyVersion,DeleteGroupPolicy,DeletePolicy,DeletePolicyVersion,DeleteRolePolicy,DeleteUserPolicy,DetachGroupPolicy,DetachRolePolicy,PutGroupPolicy,PutUserPolicy"` | - | 1 | - | - | **1** |
| `EventName in "AddRoleToInstanceProfile,RemoveRoleFromInstanceProfile"` | - | 1 | - | - | **1** |
| `EventName startswith "PutFunctionConcurrency"` | - | 1 | - | - | **1** |
| `EventName startswith "CreateFunction"`<br>`EventName startswith "UpdateFunctionConfiguration"` | - | 1 | - | - | **1** |
| `EventName startswith "UpdateFunctionCode"` | - | 1 | - | - | **1** |
| `EventName == "UpdateLoginProfile"` | - | 1 | - | - | **1** |
| `EventName in "CreateRoute,DeleteRoute,ReplaceRoute"` | - | 1 | - | - | **1** |
| `EventName == "ModifySubnetAttribute"` | - | 1 | - | - | **1** |
| `EventName == "ModifyVpcAttribute"` | - | 1 | - | - | **1** |
| `EventName == "DeleteNetworkAclEntry"` | - | 1 | - | - | **1** |
| `EventName == "CreatePolicyVersion"` | - | 1 | - | - | **1** |
| `EventName in "AddRoleToInstanceProfile,AttachGroupPolicy,AttachRolePolicy,AttachUserPolicy"` | - | 1 | - | - | **1** |
| `EventName == "ModifyDBCluster"` | - | 1 | - | - | **1** |
| `EventName == "CreateRole"` | - | 1 | - | - | **1** |
| `EventName == "DeleteBucket"` | - | 1 | - | - | **1** |
| `EventName in "DeleteBucketEncryption,PutBucketEncryption"` | - | 1 | - | - | **1** |
| `EventName in "AllocateAddress,AssociateAddress,AuthorizeSecurityGroupEgress,AuthorizeSecurityGroupIngress,CreateNetworkAcl,CreateSecurityGroup,DeleteNetworkAcl,DeleteSecurityGroup,DisassociateAddress,ReleaseAddress,ReplaceNetworkAclEntry,RevokeSecurityGroupEgress,RevokeSecurityGroupIngress"`<br>`EventName !contains "Image"`<br>`EventName !contains "KeyPair"`<br>`EventName !contains "LaunchTemplate"`<br>`EventName !contains "Tags"`<br>`EventName !contains "Volume"`<br>`EventName startswith "authorize"`<br>`EventName startswith "create"`<br>`EventName startswith "delete"`<br>`EventName startswith "replace"`<br>`EventName startswith "revoke"` | - | 1 | - | - | **1** |
| `EventName == "GetCallerIdentity"`<br>`EventName contains "Login"`<br>`EventName contains "login"`<br>`EventName contains "signin"` | - | 1 | - | - | **1** |
| **Total** | **1** | **95** | **1** | **0** | **97** |

### EventName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `AttachGroupPolicy` | - | 17 | - | - | **17** |
| `AttachRolePolicy` | - | 17 | - | - | **17** |
| `AttachUserPolicy` | - | 17 | - | - | **17** |
| `CreatePolicyVersion` | - | 14 | - | - | **14** |
| `CreatePolicy` | - | 13 | - | - | **13** |
| `PutGroupPolicy` | - | 12 | - | - | **12** |
| `PutUserPolicy` | - | 12 | - | - | **12** |
| `PutRolePolicy` | - | 11 | - | - | **11** |
| `ConsoleLogin` | - | 6 | 1 | - | **7** |
| `CreateAccessKey` | - | 5 | - | - | **5** |
| `CreateUser` | 1 | 3 | - | - | **4** |
| `GetObject` | - | 4 | - | - | **4** |
| `DeleteEventBus` | - | 3 | - | - | **3** |
| `DeleteFlowLogs` | - | 3 | - | - | **3** |
| `DeleteTrail` | - | 3 | - | - | **3** |
| `StopLogging` | - | 3 | - | - | **3** |
| `UpdateTrail` | - | 3 | - | - | **3** |
| `DescribeImageScanFindings` | - | 3 | - | - | **3** |
| `RunInstances` | - | 3 | - | - | **3** |
| `CreateRole` | - | 3 | - | - | **3** |
| `DeleteGroup` | - | 3 | - | - | **3** |
| `DeleteUser` | - | 3 | - | - | **3** |
| `CreateNetworkAclEntry` | - | 2 | - | - | **2** |
| `CreateRoute` | - | 2 | - | - | **2** |
| `CreateKey` | - | 2 | - | - | **2** |
| `PutKeyPolicy` | - | 2 | - | - | **2** |
| `GetCallerIdentity` | - | 2 | - | - | **2** |
| `AuthorizeSecurityGroupEgress` | - | 2 | - | - | **2** |
| `AuthorizeSecurityGroupIngress` | - | 2 | - | - | **2** |
| `RevokeSecurityGroupEgress` | - | 2 | - | - | **2** |
| `RevokeSecurityGroupIngress` | - | 2 | - | - | **2** |
| `ReplaceNetworkAclEntry` | - | 2 | - | - | **2** |
| `PutObject` | - | 2 | - | - | **2** |
| `AddUserToGroup` | - | 2 | - | - | **2** |
| `ChangePassword` | - | 2 | - | - | **2** |
| `CreateGroup` | - | 2 | - | - | **2** |
| `CreateVirtualMFADevice` | - | 2 | - | - | **2** |
| `DeleteAccessKey` | - | 2 | - | - | **2** |
| `DeleteLoginProfile` | - | 2 | - | - | **2** |
| `DeleteRole` | - | 2 | - | - | **2** |
| `RemoveUserFromGroup` | - | 2 | - | - | **2** |
| `DeleteGroupPolicy` | - | 2 | - | - | **2** |
| `AssumeRole` | - | 2 | - | - | **2** |
| `AddRoleToInstanceProfile` | - | 2 | - | - | **2** |
| `AuthorizeDBSecurityGroupIngress` | - | 1 | - | - | **1** |
| `CreateDBSecurityGroup` | - | 1 | - | - | **1** |
| `DeleteDBSecurityGroup` | - | 1 | - | - | **1** |
| `RevokeDBSecurityGroupIngress` | - | 1 | - | - | **1** |
| `CreateInternetGateway` | - | 1 | - | - | **1** |
| `CreateNatGateway` | - | 1 | - | - | **1** |
| `CreateRouteTable` | - | 1 | - | - | **1** |
| `CreateLaunchTemplate` | - | 1 | - | - | **1** |
| `ModifyInstanceAttribute` | - | 1 | - | - | **1** |
| `PutImageScanningConfiguration` | - | 1 | - | - | **1** |
| `DeleteDetector` | - | 1 | - | - | **1** |
| `UpdateDetector` | - | 1 | - | - | **1** |
| `ApplySecurityGroupsToLoadBalancer` | - | 1 | - | - | **1** |
| `SetSecurityGroups` | - | 1 | - | - | **1** |
| `DeleteLogGroup` | - | 1 | - | - | **1** |
| `CreateDBInstance` | - | 1 | - | - | **1** |
| `ModifyDBInstance` | - | 1 | - | - | **1** |
| `PutAccessPointPolicy` | - | 1 | - | - | **1** |
| `PutBucketAcl` | - | 1 | - | - | **1** |
| `PutBucketPolicy` | - | 1 | - | - | **1** |
| `PutObjectAcl` | - | 1 | - | - | **1** |
| `UpdateSAMLProvider` | - | 1 | - | - | **1** |
| `SetDefaultPolicyVersion` | - | 1 | - | - | **1** |
| `ModifyDocumentPermission` | - | 1 | - | - | **1** |
| `CreateAssociation` | - | 1 | - | - | **1** |
| `SendCommand` | - | 1 | - | - | **1** |
| `ListAccessKeys` | - | 1 | - | - | **1** |
| `ListAttachedRolePolicies` | - | 1 | - | - | **1** |
| `ListAttachedUserPolicies` | - | 1 | - | - | **1** |
| `ListGroupsForUser` | - | 1 | - | - | **1** |
| `ListRoles` | - | 1 | - | - | **1** |
| `ListUsers` | - | 1 | - | - | **1** |
| `CreateMailUser` | - | 1 | - | - | **1** |
| `CreateOrganization` | - | 1 | - | - | **1** |
| `CreateServiceSpecificCredential` | - | 1 | - | - | **1** |
| `DeleteServiceSpecificCredential` | - | 1 | - | - | **1** |
| `DisableMailUsers` | - | 1 | - | - | **1** |
| `EnableMailUsers` | - | 1 | - | - | **1** |
| `RegisterToWorkMail` | - | 1 | - | - | **1** |
| `ResetPassword` | - | 1 | - | - | **1** |
| `SetDefaultMailDomain` | - | 1 | - | - | **1** |
| `SetMailUserDetails` | - | 1 | - | - | **1** |
| `UpdateAccountEmailAddress` | - | 1 | - | - | **1** |
| `UploadServerCertificate` | - | 1 | - | - | **1** |
| `PutBucketVersioning` | - | 1 | - | - | **1** |
| `CreateLoginProfile` | - | 1 | - | - | **1** |
| `startswith Describe` | - | 1 | - | - | **1** |
| `startswith Get` | - | 1 | - | - | **1** |
| `startswith List` | - | 1 | - | - | **1** |
| `DeletePolicy` | - | 1 | - | - | **1** |
| `DeletePolicyVersion` | - | 1 | - | - | **1** |
| `DeleteRolePolicy` | - | 1 | - | - | **1** |
| `DeleteUserPolicy` | - | 1 | - | - | **1** |
| `DetachGroupPolicy` | - | 1 | - | - | **1** |
| `DetachRolePolicy` | - | 1 | - | - | **1** |
| `RemoveRoleFromInstanceProfile` | - | 1 | - | - | **1** |
| `startswith PutFunctionConcurrency` | - | 1 | - | - | **1** |
| `startswith CreateFunction` | - | 1 | - | - | **1** |
| `startswith UpdateFunctionConfiguration` | - | 1 | - | - | **1** |
| `startswith UpdateFunctionCode` | - | 1 | - | - | **1** |
| `UpdateLoginProfile` | - | 1 | - | - | **1** |
| `DeleteRoute` | - | 1 | - | - | **1** |
| `ReplaceRoute` | - | 1 | - | - | **1** |
| `ModifySubnetAttribute` | - | 1 | - | - | **1** |
| `ModifyVpcAttribute` | - | 1 | - | - | **1** |
| `DeleteNetworkAclEntry` | - | 1 | - | - | **1** |
| `ModifyDBCluster` | - | 1 | - | - | **1** |
| `DeleteBucket` | - | 1 | - | - | **1** |
| `DeleteBucketEncryption` | - | 1 | - | - | **1** |
| `PutBucketEncryption` | - | 1 | - | - | **1** |
| `AllocateAddress` | - | 1 | - | - | **1** |
| `AssociateAddress` | - | 1 | - | - | **1** |
| `CreateNetworkAcl` | - | 1 | - | - | **1** |
| `CreateSecurityGroup` | - | 1 | - | - | **1** |
| `DeleteNetworkAcl` | - | 1 | - | - | **1** |
| `DeleteSecurityGroup` | - | 1 | - | - | **1** |
| `DisassociateAddress` | - | 1 | - | - | **1** |
| `ReleaseAddress` | - | 1 | - | - | **1** |
| `!contains Image` | - | 1 | - | - | **1** |
| `!contains KeyPair` | - | 1 | - | - | **1** |
| `!contains LaunchTemplate` | - | 1 | - | - | **1** |
| `!contains Tags` | - | 1 | - | - | **1** |
| `!contains Volume` | - | 1 | - | - | **1** |
| `startswith authorize` | - | 1 | - | - | **1** |
| `startswith create` | - | 1 | - | - | **1** |
| `startswith delete` | - | 1 | - | - | **1** |
| `startswith replace` | - | 1 | - | - | **1** |
| `startswith revoke` | - | 1 | - | - | **1** |
| `contains Login` | - | 1 | - | - | **1** |
| `contains login` | - | 1 | - | - | **1** |
| `contains signin` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

