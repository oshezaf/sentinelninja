# AWSCloudTrail

Reference for AWSCloudTrail table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awscloudtrail) |

## Solutions (7)

This table is used by the following solutions:

- [Amazon Web Services](../solutions/amazon-web-services.md)
- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md)

## Connectors (2)

This table is ingested by the following connectors:

- [Amazon Web Services](../connectors/aws.md)
- [Amazon Web Services S3](../connectors/awss3.md)

---

## Content Items Using This Table (108)

### Analytic Rules (68)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**
- [AWS Config Service Resource Deletion Attempts](../content/amazon-web-services-aws-config-service-resource-deletion-attempts-093fe75e-44f1-4d3e-94dc-6d258a6dd2d2.md)
- [Automatic image scanning disabled for ECR](../content/amazon-web-services-automatic-image-scanning-disabled-for-ecr-19602494-94af-43c8-90ba-eb0e14999612.md)
- [Changes made to AWS CloudTrail logs](../content/amazon-web-services-changes-made-to-aws-cloudtrail-logs-610d3850-c26f-4f20-8d86-f10fdf2425f5.md)
- [Changes to AWS Elastic Load Balancer security groups](../content/amazon-web-services-changes-to-aws-elastic-load-balancer-security-groups-c7bfadd4-34a6-4fa5-82f8-3691a32261e8.md)
- [Changes to AWS Security Group ingress and egress settings](../content/amazon-web-services-changes-to-aws-security-group-ingress-and-egress-settings-4f19d4e3-ec5f-4abc-9e61-819eb131758c.md)
- [Changes to Amazon VPC settings](../content/amazon-web-services-changes-to-amazon-vpc-settings-65360bb0-8986-4ade-a89d-af3cf44d28aa.md)
- [Changes to internet facing AWS RDS Database instances](../content/amazon-web-services-changes-to-internet-facing-aws-rds-database-instances-8c2ef238-67a0-497d-b1dd-5c8a0f533e25.md)
- [CloudFormation policy created then used for privilege escalation](../content/amazon-web-services-cloudformation-policy-created-then-used-for-privilege-escalation-efdc3cff-f006-426f-97fd-4657862f7b9a.md)
- [Created CRUD S3 policy and then privilege escalation](../content/amazon-web-services-created-crud-s3-policy-and-then-privilege-escalation-467cbe7e-e6d4-4f4e-8e44-84dd01932c32.md)
- [Creating keys with encrypt policy without MFA](../content/amazon-web-services-creating-keys-with-encrypt-policy-without-mfa-454133a7-5427-4a7c-bdc4-0adfa84dda16.md)
- [Creation of Access Key for IAM User](../content/amazon-web-services-creation-of-access-key-for-iam-user-9a6554e6-63d9-4f94-9b32-64d1d40628f2.md)
- [Creation of CRUD DynamoDB policy and then privilege escalation.](../content/amazon-web-services-creation-of-crud-dynamodb-policy-and-then-privilege-escalation.-6f675c17-7a61-440c-abd1-c73ef4d748ec.md)
- [Creation of CRUD KMS policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-kms-policy-and-then-privilege-escalation-8e15998e-1e32-4b6d-abd1-e8482e8f3def.md)
- [Creation of CRUD Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-crud-lambda-policy-and-then-privilege-escalation-22115d3c-e87c-485a-9130-33797d619124.md)
- [Creation of DataPipeline policy and then privilege escalation.](../content/amazon-web-services-creation-of-datapipeline-policy-and-then-privilege-escalation.-6009c632-94e9-4ffb-a11a-b4b99f457f88.md)
- [Creation of EC2 policy and then privilege escalation](../content/amazon-web-services-creation-of-ec2-policy-and-then-privilege-escalation-a694e977-740c-4578-9f8f-5e39029f1d23.md)
- [Creation of Glue policy and then privilege escalation](../content/amazon-web-services-creation-of-glue-policy-and-then-privilege-escalation-56626956-304f-4408-8ea6-7ba5746ce09e.md)
- [Creation of Lambda policy and then privilege escalation](../content/amazon-web-services-creation-of-lambda-policy-and-then-privilege-escalation-796a45ee-220b-42be-8415-c8c933cf3b6d.md)
- [Creation of SSM policy and then privilege escalation](../content/amazon-web-services-creation-of-ssm-policy-and-then-privilege-escalation-aaa2c05e-fdd4-4fa0-9072-6cffe3641b34.md)
- [Creation of new CRUD IAM policy and then privilege escalation.](../content/amazon-web-services-creation-of-new-crud-iam-policy-and-then-privilege-escalation.-8a607285-d95c-473d-8aab-59920de63af6.md)
- [EC2 Startup Shell Script Changed](../content/amazon-web-services-ec2-startup-shell-script-changed-f8577e4d-8481-437b-a94e-06f615985668.md)
- [ECR image scan findings high or critical](../content/amazon-web-services-ecr-image-scan-findings-high-or-critical-f6928301-56da-4d2c-aabe-e1a552bc8892.md)
- [Full Admin policy created and then attached to Roles, Users or Groups](../content/amazon-web-services-full-admin-policy-created-and-then-attached-to-roles,-users-or-groups-826bb2f8-7894-4785-9a6b-a8a855d8366f.md)
- [GuardDuty detector disabled or suspended](../content/amazon-web-services-guardduty-detector-disabled-or-suspended-9da99021-d318-4711-a78a-6dea76129b3a.md)
- [Login to AWS Management Console without MFA](../content/amazon-web-services-login-to-aws-management-console-without-mfa-d25b1998-a592-4bc5-8a3a-92b39eedb1bc.md)
- [Monitor AWS Credential abuse or hijacking](../content/amazon-web-services-monitor-aws-credential-abuse-or-hijacking-32555639-b639-4c2b-afda-c0ae0abefa55.md)
- [NRT Login to AWS Management Console without MFA](../content/amazon-web-services-nrt-login-to-aws-management-console-without-mfa-0ee2aafb-4500-4e36-bcb1-e90eec2f0b9b.md)
- [Network ACL with all the open ports to a specified CIDR](../content/amazon-web-services-network-acl-with-all-the-open-ports-to-a-specified-cidr-f8ea7d50-e33b-4b9d-9c3e-a59fcbcee281.md)
- [Policy version set to default](../content/amazon-web-services-policy-version-set-to-default-874a1762-3fd7-4489-b411-6d4a9e9e8a59.md)
- [Privilege escalation via CRUD DynamoDB policy](../content/amazon-web-services-privilege-escalation-via-crud-dynamodb-policy-b9be2aa6-911d-4131-8658-d2a537ed49f4.md)
- [Privilege escalation via CRUD IAM policy](../content/amazon-web-services-privilege-escalation-via-crud-iam-policy-e20d35a3-4fec-4c8b-81b1-fc33b41990b0.md)
- [Privilege escalation via CRUD KMS policy](../content/amazon-web-services-privilege-escalation-via-crud-kms-policy-d7c39e15-997f-49e5-a782-73bf07db8aa5.md)
- [Privilege escalation via CRUD Lambda policy](../content/amazon-web-services-privilege-escalation-via-crud-lambda-policy-d0953d50-3dc1-4fa3-80fa-4d3e973a0959.md)
- [Privilege escalation via CRUD S3 policy](../content/amazon-web-services-privilege-escalation-via-crud-s3-policy-fc3061bb-319c-4fe9-abe2-f59899a6d907.md)
- [Privilege escalation via CloudFormation policy](../content/amazon-web-services-privilege-escalation-via-cloudformation-policy-719d5204-10ab-4b1f-aee1-da7326750260.md)
- [Privilege escalation via DataPipeline policy](../content/amazon-web-services-privilege-escalation-via-datapipeline-policy-48896551-1c28-4a09-8388-e51e5a927d23.md)
- [Privilege escalation via EC2 policy](../content/amazon-web-services-privilege-escalation-via-ec2-policy-a2b2a984-c820-4d93-830e-139bffd81fa3.md)
- [Privilege escalation via Glue policy](../content/amazon-web-services-privilege-escalation-via-glue-policy-370f0e5e-da1d-4a14-8ced-d1d7ab66a8d7.md)
- [Privilege escalation via Lambda policy](../content/amazon-web-services-privilege-escalation-via-lambda-policy-8e01c41d-bd4c-4bbe-aed5-18592735052d.md)
- [Privilege escalation via SSM policy](../content/amazon-web-services-privilege-escalation-via-ssm-policy-c668c09f-5a49-43f9-b249-6b89a31ec8fb.md)
- [Privilege escalation with AdministratorAccess managed policy](../content/amazon-web-services-privilege-escalation-with-administratoraccess-managed-policy-139e7116-3884-4246-9978-c8f740770bdf.md)
- [Privilege escalation with FullAccess managed policy](../content/amazon-web-services-privilege-escalation-with-fullaccess-managed-policy-afb4191b-a142-4065-a0da-f721ee3d006c.md)
- [Privilege escalation with admin managed policy](../content/amazon-web-services-privilege-escalation-with-admin-managed-policy-49ce5322-60d7-4b02-ad79-99f650aa5790.md)
- [RDS instance publicly exposed](../content/amazon-web-services-rds-instance-publicly-exposed-8f1630c2-2e45-4df2-be43-50fba90f601d.md)
- [S3 Object Exfiltration from Anonymous User](../content/amazon-web-services-s3-object-exfiltration-from-anonymous-user-15d3bf4e-8708-41c8-a836-8b0aa5be730e.md)
- [S3 bucket access point publicly exposed](../content/amazon-web-services-s3-bucket-access-point-publicly-exposed-b7a44e0d-ae4c-4fb2-be1b-aa0e45f2327b.md)
- [S3 bucket exposed via ACL](../content/amazon-web-services-s3-bucket-exposed-via-acl-6b9b4ee6-f4c1-4b86-8c8c-beb0bb59ae44.md)
- [S3 bucket exposed via policy](../content/amazon-web-services-s3-bucket-exposed-via-policy-44a5b65e-b0a9-4591-aabc-388fd92a28c4.md)
- [S3 bucket suspicious ransomware activity](../content/amazon-web-services-s3-bucket-suspicious-ransomware-activity-b442b9e2-5cc4-4129-a85b-a5ef38a9e5f0.md)
- [S3 object publicly exposed](../content/amazon-web-services-s3-object-publicly-exposed-09f2a28b-3286-4268-9e2f-33805f104e5d.md)
- [SAML update identity provider](../content/amazon-web-services-saml-update-identity-provider-bce1dcba-4948-414d-8838-6385afb9d496.md)
- [SSM document is publicly exposed](../content/amazon-web-services-ssm-document-is-publicly-exposed-75647b58-bcc8-4eb5-9658-46698d3fa153.md)
- [Successful API executed from a Tor exit node](../content/amazon-web-services-successful-api-executed-from-a-tor-exit-node-0adab960-5565-4978-ba6d-044553e4acc4.md)
- [Successful brute force attack on S3 Bucket.](../content/amazon-web-services-successful-brute-force-attack-on-s3-bucket.-31b9e94b-0df6-4a3d-a297-3457b53c5d86.md)
- [Suspicious AWS CLI Command Execution](../content/amazon-web-services-suspicious-aws-cli-command-execution-8c2dc344-9352-4ca1-8863-b1b7a5e09e59.md)
- [Suspicious AWS EC2 Compute Resource Deployments](../content/amazon-web-services-suspicious-aws-ec2-compute-resource-deployments-9e457dc4-81f0-4d25-bc37-a5fa4a17946a.md)
- [Suspicious command sent to EC2](../content/amazon-web-services-suspicious-command-sent-to-ec2-21702832-aff3-4bd6-a8e1-663b6818503d.md)
- [Suspicious overly permissive KMS key policy created](../content/amazon-web-services-suspicious-overly-permissive-kms-key-policy-created-60dfc193-0f73-4279-b43c-110ade02b201.md)
- [Tampering to AWS CloudTrail logs](../content/amazon-web-services-tampering-to-aws-cloudtrail-logs-633a91df-d031-4b6e-a413-607a61540559.md)
- [Unauthorized EC2 Instance Setup Attempt](../content/amazon-web-services-unauthorized-ec2-instance-setup-attempt-f7210a45-12a4-4d02-b59e-f23476827a4b.md)
- [User IAM Enumeration](../content/amazon-web-services-user-iam-enumeration-cfaaf0bc-16d1-48df-ac8b-9d901bbd516a.md)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**
- [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990.md)

**In solution [Multi Cloud Attack Coverage Essentials - Resource Abuse](../solutions/multi-cloud-attack-coverage-essentials---resource-abuse.md):**
- [High-Risk Cross-Cloud User Impersonation](../content/multi-cloud-attack-coverage-essentials---resource-abuse-high-risk-cross-cloud-user-impersonation-f4a28082-2808-4783-9736-33c1ae117475.md)
- [Successful AWS Console Login from IP Address Observed Conducting Password Spray](../content/multi-cloud-attack-coverage-essentials---resource-abuse-successful-aws-console-login-from-ip-address-observed-conducting-password-spray-188db479-d50a-4a9c-a041-644bae347d1f.md)
- [Suspicious AWS console logins by credential access alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-suspicious-aws-console-logins-by-credential-access-alerts-b51fe620-62ad-4ed2-9d40-5c97c0a8231f.md)
- [User impersonation by Identity Protection alerts](../content/multi-cloud-attack-coverage-essentials---resource-abuse-user-impersonation-by-identity-protection-alerts-11c3d541-5fa5-49df-8218-d1c98584473b.md)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**
- [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-ti-map-ip-entity-to-awscloudtrail-f110287e-1358-490d-8147-ed804b328514.md)

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-%28new%29.md):**
- [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-%28new%29-ti-map-ip-entity-to-awscloudtrail-69f55be4-1b13-42d0-b975-a1e59c996dd2.md)

### Hunting Queries (36)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**
- [Bucket versioning suspended](../content/amazon-web-services-bucket-versioning-suspended-48c49b1d-2aa0-442b-96e3-cae6ad1251cd.md)
- [Changes made to AWS IAM objects](../content/amazon-web-services-changes-made-to-aws-iam-objects-d022a62c-643b-4e8a-b583-0230e32a96e4.md)
- [Changes made to AWS IAM policy](../content/amazon-web-services-changes-made-to-aws-iam-policy-e0a67cd7-b4e5-4468-aae0-26cb16a1bbd2.md)
- [CreateLoginProfile detected](../content/amazon-web-services-createloginprofile-detected-4e3c81bf-61a4-47f4-b20d-a5a414ea08aa.md)
- [CreatePolicyVersion with excessive permissions](../content/amazon-web-services-createpolicyversion-with-excessive-permissions-e73ebd34-4f04-4684-a5f0-dba820127ce8.md)
- [ECR image scan findings low](../content/amazon-web-services-ecr-image-scan-findings-low-b5b172b1-d976-4113-af1f-02f7bf7d2092.md)
- [ECR image scan findings medium](../content/amazon-web-services-ecr-image-scan-findings-medium-4fbbae0a-ce5b-4b2a-b5e6-700920561680.md)
- [Excessive execution of discovery events](../content/amazon-web-services-excessive-execution-of-discovery-events-c9ccaebf-314c-446d-b3f6-314560ccb0e1.md)
- [Failed brute force on S3 bucket](../content/amazon-web-services-failed-brute-force-on-s3-bucket-13afb771-5d55-4d69-a745-83d2fc69a923.md)
- [IAM AccessDenied discovery events](../content/amazon-web-services-iam-accessdenied-discovery-events-7e258a45-b356-44f6-9a62-2643cef7b869.md)
- [IAM Privilege Escalation by Instance Profile attachment](../content/amazon-web-services-iam-privilege-escalation-by-instance-profile-attachment-e1a91db8-f2b3-4531-bff6-da133d4f4f1a.md)
- [IAM assume role policy brute force](../content/amazon-web-services-iam-assume-role-policy-brute-force-2b8cecfe-f705-432d-9f38-08207b9473e1.md)
- [Lambda UpdateFunctionCode](../content/amazon-web-services-lambda-updatefunctioncode-2dd2143b-6667-4a7a-b04f-98d22caeffac.md)
- [Lambda function throttled](../content/amazon-web-services-lambda-function-throttled-d82ea1db-f600-4c9e-8ba8-d271e9c12eb8.md)
- [Lambda layer imported from external account](../content/amazon-web-services-lambda-layer-imported-from-external-account-77d0aadc-aaea-4346-b61a-bf7ac6b71bba.md)
- [Login profile updated](../content/amazon-web-services-login-profile-updated-838f59d4-fe47-422b-819d-1be502940547.md)
- [Modification of route-table attributes](../content/amazon-web-services-modification-of-route-table-attributes-3b7df29e-a798-4b6b-9ef7-73b9a3cf56a2.md)
- [Modification of subnet attributes](../content/amazon-web-services-modification-of-subnet-attributes-05167149-4670-4a9f-b34e-5a0a92243194.md)
- [Modification of vpc attributes](../content/amazon-web-services-modification-of-vpc-attributes-a3a19731-9e82-49b6-9142-2dd570feefd5.md)
- [Multiple failed login attempts to an existing user without MFA](../content/amazon-web-services-multiple-failed-login-attempts-to-an-existing-user-without-mfa-bf130d1d-702b-4af6-9528-8bc4229e59f4.md)
- [Network ACL deleted](../content/amazon-web-services-network-acl-deleted-49bae199-ea04-4a2e-95a6-e3a1f68ab259.md)
- [New AccessKey created for Root user](../content/amazon-web-services-new-accesskey-created-for-root-user-4055466c-8a84-44c6-91d0-46469f3ba0b9.md)
- [New access key created to user](../content/amazon-web-services-new-access-key-created-to-user-a2772445-9bb1-4176-9481-b262cb59118a.md)
- [Privileged role attached to Instance](../content/amazon-web-services-privileged-role-attached-to-instance-0db42a94-e7c8-4bf1-99a7-1a2fb4158212.md)
- [RDS instance master password changed](../content/amazon-web-services-rds-instance-master-password-changed-b9b0fd12-d72d-4f66-a013-c1acdeea2670.md)
- [Risky role name created](../content/amazon-web-services-risky-role-name-created-70c36558-e6d8-48b4-98b3-185d555cd5af.md)
- [S3 bucket encryption modified](../content/amazon-web-services-s3-bucket-encryption-modified-6eb59239-78c5-401d-acfa-5cb9b3d31cd4.md)
- [S3 bucket has been deleted](../content/amazon-web-services-s3-bucket-has-been-deleted-356aa5a8-fa6f-4eb9-baa9-ffcf725e3e82.md)
- [Suspicious EC2 launched without a key pair](../content/amazon-web-services-suspicious-ec2-launched-without-a-key-pair-81a8880f-cc20-40ce-98d6-2fc6a1c5b9a4.md)
- [Suspicious activity of STS Token related to Kubernetes worker node](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-kubernetes-worker-node-46685737-676a-4084-8e98-31b2998062db.md)
- [Suspicious activity of STS token related to EC2](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ec2-82ecf967-d6e9-4757-8f5d-42c562a8f05f.md)
- [Suspicious activity of STS token related to ECS](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-ecs-67af1633-311f-4a94-bc8f-f904a54637b2.md)
- [Suspicious activity of STS token related to Glue](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-glue-0cd3eb95-6c8e-4eeb-8338-a0decdc0a328.md)
- [Suspicious activity of STS token related to Lambda](../content/amazon-web-services-suspicious-activity-of-sts-token-related-to-lambda-70a6e84f-6f3b-4ce1-83d6-ea6df9e7a9dd.md)
- [Suspicious credential token access of valid IAM Roles](../content/amazon-web-services-suspicious-credential-token-access-of-valid-iam-roles-5b6ee21d-da53-46eb-827c-eab2a9ba3d2f.md)
- [Unused or Unsupported Cloud Regions](../content/amazon-web-services-unused-or-unsupported-cloud-regions-e0d57543-acbd-428b-bb96-24a67506f84d.md)

### Workbooks (4)

**In solution [Amazon Web Services](../solutions/amazon-web-services.md):**
- [AmazonWebServicesNetworkActivities](../content/amazon-web-services-amazonwebservicesnetworkactivities.md)
- [AmazonWebServicesUserActivities](../content/amazon-web-services-amazonwebservicesuseractivities.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
