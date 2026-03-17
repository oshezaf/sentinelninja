# OfficeActivity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for OfficeActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Office 365 |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/officeactivity) |

## Schema (143 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/officeactivity)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AADGroupId | string | Azure Active Directory group id |
| AADTarget | string | The user that the action (identified by the Operation property) was performed on |
| Activity | string | The activity that the user performed. |
| Actor | string | The user or service principal that performed the action |
| ActorContextId | string | The GUID of the organization that the actor belongs to |
| ActorIpAddress | string | The actor's IP address in IPV4 or IPV6 address format |
| AddOnGuid | string | The unique identifier of the add-on generated this event |
| AddonName | string | The name of the add-on that generated this event |
| AddOnType | string | The type of add-on that generated this event |
| AffectedItems | string | Information about each item in the group |
| AppAccessContext | dynamic | The application context for the user or service principal that performed the action. |
| AppDistributionMode | string | Application distribution mode |
| AppId | string | Application ID |
| Application | string | The application name |
| ApplicationId | string | SharePoint application ID |
| AppPoolName | string | The App pool name |
| ArtifactsShared | dynamic | The artifacts shared in the meeting. |
| Attendees | dynamic | The list of attendees for the meeting. |
| AzureActiveDirectory_EventType | string | The type of Azure AD event |
| AzureADAppId | string | Teams Application Azure AD ID |
| ChannelGuid | string | A unique identifier for the channel being audited |
| ChannelName | string | The name of the channel being audited |
| ChannelType | string | The type of channel being audited (Standard/Private) |
| ChatName | string | The name of the chat |
| ChatThreadId | string | The Id of the chat thread |
| Client | string | Details about the client device, device OS, and device browser that was used for the of the account login event |
| Client_IPAddress | string | The IP address of the device that was used when the operation was logged |
| ClientAppId | string | Client application ID |
| ClientInfoString | string | Information about the email client that was used to perform the operation |
| ClientIP | string | The IP address of the device that was used when the activity was logged |
| ClientMachineName | string | The machine name that hosts the Outlook client |
| ClientProcessName | string | The email client that was used to access the mailbox |
| ClientVersion | string | The version of the email client |
| CommunicationType | string | The type of communications that was conducted |
| CrossMailboxOperations | bool | Indicates if the operation involved more than one mailbox |
| CustomEvent | string | Optional string for custom events |
| DataCenterSecurityEventType | int | The type of dmdlet event in lock box |
| DestFolder | string | The destination folder |
| DestinationFileExtension | string | The file extension of a file that is copied or moved |
| DestinationFileName | string | The name of the file that is copied or moved |
| DestinationRelativeUrl | string | The URL of the destination folder where a file is copied or moved |
| DestMailboxId | string | Set only if the CrossMailboxOperations parameter is True |
| DestMailboxOwnerMasterAccountSid | string | Set only if the CrossMailboxOperations parameter is True |
| DestMailboxOwnerSid | string | Set only if the CrossMailboxOperations parameter is True |
| DestMailboxOwnerUPN | string | Set only if the CrossMailboxOperations parameter is True |
| DeviceInformation | string | The user device information. |
| EffectiveOrganization | string | The name of the tenant that the elevation/cmdlet was targeted at |
| ElevationApprovedTime | datetime | The timestamp for when the elevation was approved |
| ElevationApprover | string | The name of a Microsoft manager |
| ElevationDuration | int | The duration for which the elevation was active (in Hours) |
| ElevationRequestId | string | A unique identifier for the elevation request |
| ElevationRole | string | The role the elevation was requested for |
| ElevationTime | datetime | The start time of the elevation |
| Event_Data | string | Optional payload for custom events |
| EventSource | string | Identifies that an event occurred in SharePoint. Possible values are SharePoint or ObjectModel |
| ExtendedProperties | string | The extended properties of the Azure AD event |
| ExternalAccess | string | Specifies whether the cmdlet was run by a user in your organization |
| ExtraProperties | dynamic | A list of extra properties |
| Folder | string | The folder where a group of items is located |
| Folders | string | Information about the source folders involved in an operation |
| GenericInfo | string | Used for comments and other generic information |
| InternalLogonType | int | Reserved for internal use |
| InterSystemsId | string | The GUID that track the actions across components within the Office 365 service |
| IntraSystemId | string | The GUID that's generated by Azure Active Directory to track the action |
| IsJoinedFromLobby | bool | Indicates whether the user join from the lobby. |
| IsManagedDevice | bool | Indicates if operation was created by a device managed by the organization |
| Item | string | Represents the item upon which the operation was performed |
| ItemName | string | The string in the Subject field of the email message |
| ItemType | string | The type of object that was accessed or modified. See the ItemType table for details on the types of objects |
| JoinTime | datetime | The time the user joined the meeting. |
| LeaveTime | datetime | The time the user left the meeting. |
| ListItemUniqueId | string | The Guid of uniquely an identifiable item of list. This information is present only if it is applicable. |
| LoginStatus | int | This property is from OrgIdLogon.LoginStatus directly. The mapping of various interesting logon failures could be done by alerting algorithms |
| Logon_Type | string | Indicates the type of user who accessed the mailbox and performed the operation that was logged |
| LogonUserDisplayName | string | The user-friendly name of the user who performed the operation |
| LogonUserSid | string | The SID of the user who performed the operation |
| MachineDomainInfo | string | Information about device sync operations |
| MachineId | string | Information about device sync operations |
| MailboxGuid | string | The Exchange GUID of the mailbox that was accessed |
| MailboxOwnerMasterAccountSid | string | Mailbox owner account's master account SID |
| MailboxOwnerSid | string | The SID of the mailbox owner |
| MailboxOwnerUPN | string | The email address of the person who owns the mailbox that was accessed |
| MeetingDetailId | string | The meeting detail ID. |
| Members | dynamic | A list of users within a Team |
| MessageId | string | An identifier for a chat or channel message |
| ModifiedObjectResolvedName | string | This is the user friendly name of the object that was modified by the cmdlet |
| ModifiedProperties | string | The property is included for admin events, such as adding a user as a member of a site or a site collection admin group |
| NewValue | string | Only present for settings events. New value of the setting |
| OfficeId | string | Unique identifier of an audit record |
| OfficeObjectId | string | For SharePoint and OneDrive for Business activity |
| OfficeTenantId | string | The office tenant id |
| OfficeWorkload | string | The Office 365 service where the activity occurred |
| OldValue | string | Only present for settings events. Old value of the setting |
| Operation | string | The name of the operation that the user is performing |
| OperationProperties | dynamic | Additional operation properties |
| OperationScope | string | The scope the operation was performed on |
| OrganizationId | string | The GUID for your organization's Office 365 tenant. This value will always be the same for your organization |
| OrganizationName | string | The name of the tenant |
| OriginatingServer | string | The name of the server from which the cmdlet was executed |
| Parameters | string | The name and value for all parameters that were used with the cmdlet that is identified in the Operations property |
| RecordType | string | The type of operation indicated by the record. See the AuditLogRecordType table for details on the types of audit log records |
| ResultReasonType | string | Reason for the result reported in ResultType |
| ResultStatus | string | Indicates whether the action (specified in the Operation property) was successful or not |
| SendAsUserMailboxGuid | string | The Exchange GUID of the mailbox that was accessed to send email as |
| SendAsUserSmtp | string | SMTP address of the user who is being impersonated |
| SendonBehalfOfUserMailboxGuid | string | The Exchange GUID of the mailbox that was accessed to send mail on behalf of |
| SendOnBehalfOfUserSmtp | string | SMTP address of the user on whose behalf the email is sent |
| SensitivityLabelId | string | The current sensitivity label ID of the file. |
| SharingType | string | The type of sharing permissions that were assigned to the user that the resource was shared with. This user is identified by the UserSharedWith parameter |
| Site_ | string | The GUID of the site where the file or folder accessed by the user is located |
| Site_Url | string | The URL of the site where the file or folder accessed by the user is located |
| Source_Name | string | The entity that triggered the audited operation. Possible values are SharePoint or ObjectModel |
| SourceFileExtension | string | The file extension of the file that was accessed by the user |
| SourceFileName | string | The name of the file or folder accessed by the user |
| SourceRecordId | string | Unique identifier of an audit record |
| SourceRelativeUrl | string | The URL of the folder that contains the file accessed by the user |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SRPolicyId | string | Policy ID |
| SRPolicyName | string | Policy name |
| SRRuleMatchDetails | dynamic | Rule details |
| Start_Time | datetime | The date and time at which the cmdlet was executed |
| SupportTicketId | string | The customer support ticket ID for the action in 'act-on-behalf-of' situations |
| TabType | string | The type of tab that generated this event |
| TargetContextId | string | The GUID of the organization that the targeted user belongs to |
| TargetUserId | string | Target user id |
| TargetUserOrGroupName | string | Stores the UPN or name of the target user or group that a resource was shared with |
| TargetUserOrGroupType | string | Identifies whether the target user or group is a Member, Guest, Group, or Partner |
| TeamGuid | string | A unique identifier for the team being audited |
| TeamName | string | The name of the team being audited |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time in Coordinated Universal Time (UTC) when the user performed the activity |
| Type | string | The name of the table |
| UniqueSharingId | string | The unique sharing ID associated with the sharing operation. |
| UserAgent | string | The user agent |
| UserDomain | string | The domain of the user |
| UserId | string | The UPN (User Principal Name) of the user who performed the action (specified in the Operation property) that resulted in the record being logged |
| UserKey | string | An alternative ID for the user identified in the UserId property |
| UserSharedWith | string | The user that a resource was shared with |
| UserType | string | The type of user that performed the operation. See the UserType table for details on the types of users |

## Solutions (26)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)
- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [Global Secure Access](../solutions/global-secure-access.md)
- [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft 365](../solutions/microsoft-365.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Teams](../solutions/teams.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ThreatConnect](../solutions/threatconnect.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

**Selection Criteria:** `OfficeWorkload in "Exchange,MicrosoftTeams,OneDrive,SharePoint"`

| Connector |
|:----------|
| [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) |

---

## Content Items Using This Table (104)

### Analytic Rules (42)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Malicious BEC Inbox Rule](../content/business-email-compromise-financial-fraud-malicious-bec-inbox-rule-8ac77493-3cae-4840-8634-15fb23f8fb68-ae4ecd95.md) |  |

**In solution [GreyNoiseThreatIntelligence](../solutions/greynoisethreatintelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GreyNoise TI map IP entity to OfficeActivity](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-officeactivity-c51628fe-999c-5150-9fd7-660fc4f58ed2-a0b3d699.md) |  |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in OfficeActivity](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-officeactivity-0e96c419-68eb-4235-947e-7e86e136cda0-3117094c.md) |  |

**In solution [Microsoft 365](../solutions/microsoft-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Accessed files shared by temporary external user](../content/microsoft-365-accessed-files-shared-by-temporary-external-user-bff058b2-500e-4ae5-bb49-a5b1423cbd5b-0f3d0272.md) | `OfficeWorkload == "MicrosoftTeams"`<br>`RecordType == "SharePointFileOperation"` |
| [Exchange AuditLog Disabled](../content/microsoft-365-exchange-auditlog-disabled-194dd92e-d6e7-4249-85a5-273350a7f5ce-9595c198.md) | `OfficeWorkload == "Exchange"` |
| [Exchange workflow MailItemsAccessed operation anomaly](../content/microsoft-365-exchange-workflow-mailitemsaccessed-operation-anomaly-b4ceb583-4c44-4555-8ecf-39f572e827ba-0035b923.md) | `OfficeWorkload == "Exchange"` |
| [External user added and removed in short timeframe](../content/microsoft-365-external-user-added-and-removed-in-short-timeframe-bff093b2-500e-4ae5-bb49-a5b1423cbd5b-5d676e58.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-500415fb-bba7-4227-a08a-9857fb61b6a7-63b69125.md) | `OfficeWorkload == "Exchange"` |
| [Malicious Inbox Rule](../content/microsoft-365-malicious-inbox-rule-7b907bf7-77d4-41d0-a208-5643ff75bf9a-809a0fef.md) | `OfficeWorkload == "Exchange"` |
| [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-173f8699-6af5-484a-8b06-8c47ba89b380-fee08c77.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-871ba14c-88ef-48aa-ad38-810f26760ca3-2182889a.md) | `OfficeWorkload == "Exchange"` |
| [New executable via Office FileUploaded Operation](../content/microsoft-365-new-executable-via-office-fileuploaded-operation-d722831e-88f5-4e25-b106-4ef6e29f8c13-14098899.md) |  |
| [Office Policy Tampering](../content/microsoft-365-office-policy-tampering-fbd72eb8-087e-466b-bd54-1ca6ea08c6d3-dcc56d58.md) | `RecordType == "ExchangeAdmin"` |
| [Office365 Sharepoint File transfer Folders above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-folders-above-threshold-8a547285-801c-4290-aa2e-5e7e20ca157d-1211cb69.md) | `OfficeWorkload has_any "OneDrive,SharePoint"` |
| [Office365 Sharepoint File transfer above threshold](../content/microsoft-365-office365-sharepoint-file-transfer-above-threshold-8b4f03e7-3460-4401-824d-e65a8dd464f0-55393788.md) | `OfficeWorkload has_any "OneDrive,SharePoint"` |
| [Rare and potentially high-risk Office operations](../content/microsoft-365-rare-and-potentially-high-risk-office-operations-957cb240-f45d-4491-9ba5-93430a3c08be-0f639b30.md) |  |
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-5dd76a87-9f87-4576-bab3-268b0e2b338b-ccd6f2dd.md) |  |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-4b11568b-3f5f-4ba1-80c8-7f1dc8390eb7-e94212cd.md) |  |

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Executable uploaded to SharePoint document management site](../content/microsoft-business-applications-dataverse-executable-uploaded-to-sharepoint-document-management-site-ba5e608f-7879-4927-8b0d-a9948b4fe6f3-a46cc5a8.md) | `OfficeWorkload == "SharePoint"` |
| [Dataverse - Malware found in SharePoint document management site](../content/microsoft-business-applications-dataverse-malware-found-in-sharepoint-document-management-site-2e3878bb-d519-43aa-9992-ea069df099e4-82c1f402.md) | `OfficeWorkload == "SharePoint"` |
| [Dataverse - Mass download from SharePoint document management](../content/microsoft-business-applications-dataverse-mass-download-from-sharepoint-document-management-95e02f1b-5886-4043-8f0e-a42e6e23330f-26e23cc8.md) | `OfficeWorkload == "SharePoint"` |
| [Dataverse - New user agent type that was not used with Office 365](../content/microsoft-business-applications-dataverse-new-user-agent-type-that-was-not-used-with-office-365-094b3c0a-1f63-42f7-9535-c8c7b7198328-ba0f47d1.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [New UserAgent observed in last 24 hours](../content/network-threat-protection-essentials-new-useragent-observed-in-last-24-hours-b725d62c-eb77-42ff-96f6-bdc6745fc6e0-a94f1913.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):** `OfficeWorkload == "Exchange"`

| Content Item |
|:-------------|
| [Threat Essentials - Mail redirect via ExO transport rule](../content/securitythreatessentialsolution-threat-essentials-mail-redirect-via-exo-transport-rule-d7c575b2-84f5-48cb-92c5-70d7e8246284-30414fca.md) |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-ti-map-email-entity-to-officeactivity-4a3f5ed7-8da5-4ce2-af6f-c9ada45060f2-5a438de0.md) |  |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-ti-map-ip-entity-to-officeactivity-f15370f4-c6fa-42c5-9be4-1d308f40284e-72906e4b.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-new-ti-map-email-entity-to-officeactivity-795d43a3-6edc-4c99-971f-00d05841e5ac-5834b2a5.md) |  |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-new-ti-map-ip-entity-to-officeactivity-f50280e5-5eb1-4e95-99fd-9d584a987bdd-0c3d2238.md) |  |

**In solution [ThreatConnect](../solutions/threatconnect.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/threatconnect-threatconnect-ti-map-url-entity-to-officeactivity-data-12c3b31b-66a6-53ff-b6ab-6ae45e56dc92-426bca4a.md) |  |
| [ThreatConnect TI map Email entity to OfficeActivity](../content/threatconnect-threatconnect-ti-map-email-entity-to-officeactivity-4f7ade3e-7121-5274-83ea-d7ed22a01fea-d74546e3.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous login followed by Teams action](../content/standalone-content-anomalous-login-followed-by-teams-action-2b701288-b428-4fb8-805e-e4372c574786-2da015d8.md) |  |
| [Detecting Impossible travel with mailbox permission tampering & Privilege Escalation attempt](../content/standalone-content-detecting-impossible-travel-with-mailbox-permission-tampering-&-privilege-escalation--1399664f-9434-497c-9cde-42e4d74ae20e-03f12b2c.md) |  |
| [Europium - Hash and IP IOCs - September 2022](../content/standalone-content-europium-hash-and-ip-iocs-september-2022-9d8b5a18-b7db-4c23-84a6-95febaf7e1e4-24b34350.md) |  |
| [High risk Office operation conducted by IP Address that recently attempted to log into a disabled account](../content/standalone-content-high-risk-office-operation-conducted-by-ip-address-that-recently-attempted-to-log-int-9adbd1c3-a4be-44ef-ac2f-503fd25692ee-6176c458.md) |  |
| [Malformed user agent](../content/standalone-content-malformed-user-agent-a357535e-f722-4afe-b375-cff362b2b376-cf52b023.md) |  |
| [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md) |  |
| [Multiple Password Reset by user](../content/standalone-content-multiple-password-reset-by-user-0b9ae89d-8cad-461c-808f-0494f70ad5c4-910658bf.md) | `OfficeWorkload == "AzureActiveDirectory"` |
| [NRT Malicious Inbox Rule](../content/standalone-content-nrt-malicious-inbox-rule-b79f6190-d104-4691-b7db-823e05980895-a7d65038.md) | `OfficeWorkload == "Exchange"` |
| [NRT Multiple users email forwarded to same destination](../content/standalone-content-nrt-multiple-users-email-forwarded-to-same-destination-3b05727d-a8d1-477d-bbdd-d957da96ac7b-d149a49e.md) | `OfficeWorkload == "Exchange"` |

### Hunting Queries (30)

**In solution [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Email Forwarding Configuration with SAP download](../content/business-email-compromise-financial-fraud-email-forwarding-configuration-with-sap-download-0576750e-6b61-4545-845f-f5b8f29a0cc4-0b297ea9.md) |  |
| [Office Mail Rule Creation with suspicious archive mail move activity](../content/business-email-compromise-financial-fraud-office-mail-rule-creation-with-suspicious-archive-mail-move-ac-f50a26d7-ffdb-4471-90b9-3be78c60e4f2-4287ee6e.md) | `OfficeWorkload == "Exchange"` |

**In solution [Microsoft 365](../solutions/microsoft-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous access to other users' mailboxes](../content/microsoft-365-anomalous-access-to-other-users'-mailboxes-271e8881-3044-4332-a5f4-42264c2e0315-9868f994.md) |  |
| [Bots added to multiple teams](../content/microsoft-365-bots-added-to-multiple-teams-9eb64924-ec8d-44d0-b1f2-10665150fb74-b469374c.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Exes with double file extension and access summary](../content/microsoft-365-exes-with-double-file-extension-and-access-summary-d12580c2-1474-4125-a8a3-553f50d91215-647a7b68.md) | `RecordType == "SharePointFileOperation"` |
| [External user added and removed in a short timeframe](../content/microsoft-365-external-user-added-and-removed-in-a-short-timeframe-119d9e1c-afcc-4d23-b239-cdb4e7bf851c-733c7514.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [External user from a new organisation added to Teams](../content/microsoft-365-external-user-from-a-new-organisation-added-to-teams-6fce5baf-bfc2-4c56-a6b7-9c4733fc5a45-c611f8a9.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Files uploaded to teams and access summary](../content/microsoft-365-files-uploaded-to-teams-and-access-summary-90e198a9-efb6-4719-ad89-81b8e93633a7-969f9eb8.md) | `RecordType == "SharePointFileOperation"` |
| [Mail redirect via ExO transport rule](../content/microsoft-365-mail-redirect-via-exo-transport-rule-9891684a-1e3a-4546-9403-3439513cbc70-09a65cff.md) | `OfficeWorkload == "Exchange"` |
| [Multiple Teams deleted by a single user](../content/microsoft-365-multiple-teams-deleted-by-a-single-user-64990414-b015-4edf-bef0-343b741e68c5-4d5737ab.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Multiple users email forwarded to same destination](../content/microsoft-365-multiple-users-email-forwarded-to-same-destination-a1551ae4-f61c-4bca-9c57-4d0d681db2e9-2e204a61.md) | `OfficeWorkload == "Exchange"` |
| [New Admin account activity seen which was not seen historically](../content/microsoft-365-new-admin-account-activity-seen-which-was-not-seen-historically-723c5f46-133f-4f1e-ada6-5c138f811d75-81219d98.md) | `RecordType == "ExchangeAdmin"` |
| [New Windows Reserved Filenames staged on Office file services](../content/microsoft-365-new-windows-reserved-filenames-staged-on-office-file-services-641ecd2d-27c9-4f05-8433-8205096b09fc-56b1939d.md) |  |
| [Non-owner mailbox login activity](../content/microsoft-365-non-owner-mailbox-login-activity-0a8f410d-38b5-4d75-90da-32b472b97230-5ba0724d.md) | `OfficeWorkload == "Exchange"` |
| [Office Mail Forwarding - Hunting Version](../content/microsoft-365-office-mail-forwarding-hunting-version-d49fc965-aef3-49f6-89ad-10cc4697eb5b-08bdc191.md) | `OfficeWorkload == "Exchange"` |
| [PowerShell or non-browser mailbox login activity](../content/microsoft-365-powershell-or-non-browser-mailbox-login-activity-49a4f65a-fe18-408e-afec-042fde93d3ce-d9f865de.md) | `OfficeWorkload == "Exchange"` |
| [Previously unseen bot or application added to Teams](../content/microsoft-365-previously-unseen-bot-or-application-added-to-teams-bf76e508-9282-4cf1-9cc1-5c20c3dea2ee-9699a7e1.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [SharePointFileOperation via clientIP with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-clientip-with-previously-unseen-user-agents-e8ae1375-4640-430c-ae8e-2514d09c71eb-01381674.md) | `RecordType == "SharePointFileOperation"` |
| [SharePointFileOperation via devices with previously unseen user agents](../content/microsoft-365-sharepointfileoperation-via-devices-with-previously-unseen-user-agents-f2367171-1514-4c67-88ef-27434b6a1093-8d3d8113.md) | `RecordType == "SharePointFileOperation"` |
| [SharePointFileOperation via previously unseen IPs](../content/microsoft-365-sharepointfileoperation-via-previously-unseen-ips-e3d24cfd-b2a1-4ba7-8f80-0360892f9d57-bf177f44.md) | `RecordType == "SharePointFileOperation"` |
| [User added to Teams and immediately uploads file](../content/microsoft-365-user-added-to-teams-and-immediately-uploads-file-3d6d0c04-7337-40cf-ace6-c471d442356d-ae882f16.md) | `OfficeWorkload == "MicrosoftTeams"`<br>`RecordType == "SharePointFileOperation"` |
| [User made Owner of multiple teams](../content/microsoft-365-user-made-owner-of-multiple-teams-558f15dd-3171-4b11-bf24-31c0610a20e0-775b29b2.md) | `OfficeWorkload == "MicrosoftTeams"` |
| [Windows Reserved Filenames staged on Office file services](../content/microsoft-365-windows-reserved-filenames-staged-on-office-file-services-61c28cd7-3139-4731-8ea7-2cbbeabb4684-b20eb95c.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Exploit and Pentest Framework User Agent](../content/network-threat-protection-essentials-exploit-and-pentest-framework-user-agent-df75ac6c-7b0b-40d2-82e4-191c012f1a07-77056d12.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-ti-map-file-entity-to-officeactivity-event-410da56d-4a63-4d22-b68c-9fb1a303be6d-69933815.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-new-ti-map-file-entity-to-officeactivity-event-bbdb951c-9aba-4d66-85df-f564a1f86881-bfe1f81a.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Rare domains seen in Cloud Logs](../content/standalone-content-rare-domains-seen-in-cloud-logs-66fb97d1-55c3-4268-ac22-b9742d0fdccc-81d64f4e.md) |  |
| [Tracking Password Changes](../content/standalone-content-tracking-password-changes-bac44fe4-c0bc-4e90-aa48-2e346fda803f-28bae834.md) |  |
| [Tracking Privileged Account Rare Activity](../content/standalone-content-tracking-privileged-account-rare-activity-431cccd3-2dff-46ee-b34b-61933e45f556-2c02c0bd.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [New Location Sign in with Mail forwarding activity](../content/github-only-new-location-sign-in-with-mail-forwarding-activity-a689a21c-9369-47e6-b5fa-e1f65045c1cf-7ac74009.md) |  |

### Workbooks (32)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `RecordType == "MicrosoftTeams"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):** `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`OfficeWorkload has_any "OneDrive,SharePoint"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"`

| Content Item |
|:-------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):** `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`OfficeWorkload has_any "OneDrive,SharePoint"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"`

| Content Item |
|:-------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |

**In solution [Global Secure Access](../solutions/global-secure-access.md):** `OfficeWorkload in "Exchange,OneDrive,SPO/OneDrive,SharePoint,Teams"`

| Content Item |
|:-------------|
| [GSAM365EnrichedEvents](../content/global-secure-access-gsam365enrichedevents-b8162378.md) |

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `OfficeWorkload == "Exchange"`<br>`RecordType == "ExchangeAdmin"`

| Content Item |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [Microsoft 365](../solutions/microsoft-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ExchangeOnline](../content/microsoft-365-exchangeonline-c35f597f.md) | `OfficeWorkload == "Exchange"` |
| [Office365](../content/microsoft-365-office365-0c09583c.md) | `OfficeWorkload in "Exchange,OneDrive,SharePoint"` |
| [SharePointAndOneDrive](../content/microsoft-365-sharepointandonedrive-f8028d14.md) | `OfficeWorkload in "OneDrive,SharePoint"` |

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md):** `RecordType == "ExchangeAdmin"`

| Content Item |
|:-------------|
| [Microsoft Exchange Admin Activity - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-admin-activity-online-c51be957.md) |
| [Microsoft Exchange Search AdminAuditLog - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-search-adminauditlog-online-11d0bde2.md) |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):** `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"`

| Content Item |
|:-------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |  |

**In solution [Teams](../solutions/teams.md):** `OfficeWorkload == "MicrosoftTeams"`<br>`RecordType == "SharePointFileOperation"`

| Content Item |
|:-------------|
| [MicrosoftTeams](../content/teams-microsoftteams-d6922450.md) |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `RecordType == "MicrosoftTeams"`

| Content Item |
|:-------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AdvancedWorkbookConcepts](../content/github-only-advancedworkbookconcepts-3495e806.md) |  |
| [DataCollectionHealthMonitoring](../content/github-only-datacollectionhealthmonitoring-360bf8be.md) |  |
| [Data_Latency_Workbook](../content/github-only-data-latency-workbook-6c04e6e6.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [ExchangeOnline](../content/github-only-exchangeonline-663577e1.md) | `OfficeWorkload == "Exchange"` |
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |
| [Log4jPostCompromiseHunting](../content/github-only-log4jpostcompromisehunting-7193cd47.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [MicrosoftTeams](../content/github-only-microsoftteams-429824b1.md) | `OfficeWorkload == "MicrosoftTeams"`<br>`RecordType == "SharePointFileOperation"` |
| [Office365](../content/github-only-office365-fa05d9ea.md) | `OfficeWorkload in "Exchange,OneDrive,SharePoint"` |
| [SharePointAndOneDrive](../content/github-only-sharepointandonedrive-a82e2f82.md) | `OfficeWorkload in "OneDrive,SharePoint"` |
| [SolarWindsPostCompromiseHunting](../content/github-only-solarwindspostcompromisehunting-09062974.md) | `OfficeWorkload == "Exchange"` |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1) — Selection Criteria: `RecordType == "ExchangeAdmin"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimAuditEventMicrosoftExchangeAdmin365](../asim/asimauditeventmicrosoftexchangeadmin365.md) | AuditEvent | Microsoft SharePoint |

### Other Parsers (1) — Selection Criteria: `RecordType == "ExchangeAdmin"`

| Parser | Solution |
|:-------|:---------|
| [MESOfficeActivityLogs](../parsers/mesofficeactivitylogs.md) | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |

## Selection Criteria Summary (16 criteria, 53 total references)

References by type: 1 connectors, 50 content items, 1 ASIM parsers, 1 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OfficeWorkload == "Exchange"` | - | 15 | - | - | **15** |
| `OfficeWorkload == "MicrosoftTeams"` | - | 8 | - | - | **8** |
| `RecordType == "ExchangeAdmin"` | - | 4 | 1 | 1 | **6** |
| `RecordType == "SharePointFileOperation"` | - | 5 | - | - | **5** |
| `OfficeWorkload == "MicrosoftTeams"`<br>`RecordType == "SharePointFileOperation"` | - | 3 | - | - | **3** |
| `OfficeWorkload == "SharePoint"` | - | 3 | - | - | **3** |
| `OfficeWorkload has_any "OneDrive,SharePoint"` | - | 2 | - | - | **2** |
| `RecordType == "MicrosoftTeams"` | - | 2 | - | - | **2** |
| `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`OfficeWorkload has_any "OneDrive,SharePoint"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"` | - | 2 | - | - | **2** |
| `OfficeWorkload in "Exchange,MicrosoftTeams,OneDrive,SharePoint"` | 1 | - | - | - | **1** |
| `OfficeWorkload == "AzureActiveDirectory"` | - | 1 | - | - | **1** |
| `OfficeWorkload in "Exchange,OneDrive,SPO/OneDrive,SharePoint,Teams"` | - | 1 | - | - | **1** |
| `OfficeWorkload == "Exchange"`<br>`RecordType == "ExchangeAdmin"` | - | 1 | - | - | **1** |
| `OfficeWorkload in "Exchange,OneDrive,SharePoint"` | - | 1 | - | - | **1** |
| `OfficeWorkload in "OneDrive,SharePoint"` | - | 1 | - | - | **1** |
| `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"` | - | 1 | - | - | **1** |
| **Total** | **1** | **50** | **1** | **1** | **53** |

### OfficeWorkload

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Exchange` | 1 | 21 | - | - | **22** |
| `MicrosoftTeams` | 1 | 14 | - | - | **15** |
| `SharePoint` | 1 | 6 | - | - | **7** |
| `has_any OneDrive` | - | 7 | - | - | **7** |
| `OneDrive` | 1 | 3 | - | - | **4** |
| `has_any SharePoint` | - | 4 | - | - | **4** |
| `AzureActiveDirectory` | - | 4 | - | - | **4** |
| `has_any Exchange` | - | 3 | - | - | **3** |
| `SPO/OneDrive` | - | 1 | - | - | **1** |
| `Teams` | - | 1 | - | - | **1** |

### RecordType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SharePointFileOperation` | - | 11 | - | - | **11** |
| `ExchangeAdmin` | - | 8 | 1 | 1 | **10** |
| `MicrosoftTeams` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

