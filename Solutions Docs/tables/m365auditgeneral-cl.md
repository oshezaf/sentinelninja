# M365AuditGeneral_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Marko Lauren *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (321 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP%5CData%20Connectors%5CM365AuditDLP_CCF/M365Audit_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | ProjectAction that was taken |
| ActionId | string | Unique identifier for action |
| Actions | dynamic | Collection of actions recommended by an investigation |
| ActionStatus | string | Values include: Pending, Running, Waiting on resource, Completed, Failed |
| ActionType | string | The type of the action, such as email remediation |
| ActivityParameters | string | JSON string containing activity parameters. For more information, see Microsoft Forms activities |
| ActorUserId | string | Email of user that performed the operation |
| ActorYammerUserId | long | ID of user that performed the operation |
| AddedIdentities | dynamic | Collection of GUID of Users or Groups that were added |
| AdditionalActionsAndResults | dynamic | The additional actions that were taken on the email, such as ZAP or Manual Remediation. Also includes the corresponding results |
| AdminSubmissionDeliveryCheck | string | Admin submission system checked the email's policy |
| AdminSubmissionRegistered | string | Admin submission is registered and is pending for processing |
| AdminSubmissionSubmitted | string | Admin submission system submitted the email |
| AdminSubmissionSubmitting | string | Admin submission system is submitting the email |
| AdminSubmissionTablAllow | string | An allow entry in the Tenant Allow/Block List was created at time of submission to immediately take action on similar messages while it is being rescanned |
| AdminSubmissionTimeout | string | Admin submission timed out with no result |
| AdminSubmissionTriage | string | Admin submission triaged by grader |
| AgentID | string | Unique identifier of the Agent |
| AgentName | string | The name of the Agent |
| AgentType | int | The type of the Agent - Microsoft (1P), External (3P), Shared by users (Shared), Built by your org (External) |
| AlertEntityId | string | The identifier for the alert entity. This parameter is only applicable to AlertEntityGenerated events |
| AlertId | string | The Guid of the alert |
| AlertType | string | Type of the alert. Alert types include: System, Custom |
| APIsCalled | dynamic | APIs called by the AI Tool |
| Application | string |  |
| ApplicationMode | string | Specifies how the sensitivity label was applied to the email message. The Privileged value indicates the label was manually applied by a user. The Standard value indicates the label was auto-applied by a client-side or service-side labeling process |
| AppName | string | The name of the app where the event occurred |
| ApprovedBy | string | Null if auto approved; otherwise, the username/id |
| AttachmentData | dynamic | Data about attachments in the email message that triggered the event |
| AttachmentName | string | Name of the attachment |
| Attachments | dynamic | A list of attachments received from the third-party data source |
| AttackSimAdminEvent | string | The type of attack sim admin event |
| AttackSimEvent | string | Type of event (user activity or message delivery state) |
| AttackSimUserSubmission | string | The user-reported message was actually a phish simulation training message |
| AttackTechnique | string | The attack technique used in the simulation |
| Audit | string | System information related to the hygiene event |
| AuthDetails | dynamic | The authentication checks that are done for the email. Also includes the values for SPF, DKIM, DMARC, and CompAuth |
| AuthenticationMethod | string | Authentication method when accessing the message, i.e. OTP, Yahoo, Gmail, Microsoft |
| AuthenticationStatus | string | 0: Success, 1: Failure |
| AutomationId | string | A unique identifier that correlates all activities related to each run of the Copilot prompt |
| BackupItemID | string | ID of the Backup Item being restored |
| BackupItemType | string | Whether the Backup Item is a Site / Account / Mailbox |
| BatchID | string | A unique identifier for a group of records that are processed together |
| BillingAzureResourceGroupName | string | Azure resource group chosen for Microsoft Sentinel data lake billing |
| BillingAzureSubscriptionId | string | Azure subscription chosen for Microsoft Sentinel data lake billing |
| CampaignID | string | A unique identifier for the attack simulation training campaign |
| CampaignType | string | The type of attack simulation campaign. The different types are simulation campaign, training campaign, simulation automation |
| CaseId | string | The identity (GUID) of the eDiscovery case |
| CaseName | string | The name of the eDiscovery case |
| Category | string | Category of the alert. Categories include: AccessGovernance, DataGovernance, DataLossPrevention, InsiderRiskManagement, MailFlow, ThreatManagement, Other |
| ClientApplication | string | If the cmdlet was run by an application, as opposed to remote PowerShell, this field contains the application name |
| ClientIP | string | The IP address of the device that was used when the activity was logged |
| ClientRequestId | string | A GUID that can be used to correlate this cmdlet with portal operations. This information is used only by Microsoft support |
| ClientUUID | string | The Client UUID of the Viva Glint instance |
| CmdletVersion | string | The build version of the cmdlet when it was run |
| Comments | string | Comments left by the users who have viewed the alert. By default, it's 'New alert' |
| ComponentFault | string | The entity that caused the query to fail. For example, if the query result is too large, the ComponentFault is 'Client'. If an internal error occurred, the ComponentFault is 'Server' |
| Compute | string | Compute selected |
| Connectors | string | The names and GUIDs of the connectors associated with the email |
| CopilotEventData | dynamic | Copilot-specific event data including AI system plugins, accessed resources, messages, and model transparency details |
| CountOfArtifactsBeingAdded | int | Number of artifacts being added |
| CountOfArtifactsBeingRemoved | int | Number of artifacts being removed |
| CourseID | string | A unique identifier for a training course |
| CreationMethodology | string | How the Restore Task was created / edited |
| CreationTime | datetime | The date and time in UTC when the user performed the activity |
| CustomSubmission | string | Message reported by a user was sent to the organization's custom mailbox as set in the user reported messages settings |
| DashboardName | string | The name of the dashboard where the event occurred |
| Data | string | The detailed data blob of the alert or alert entity |
| DatabaseName | dynamic | The workspace the command ran on |
| DatabasesRead | dynamic | The list of workspaces read by the job |
| DatabasesWrite | dynamic | The list of workspaces written to by the job |
| DataCenterSecurityEventType | string | The type of cmdlet event in lock box |
| DataClassification | string | The data classification, if any, for the dashboard where the event occurred |
| DataDSRControl | string | This in-platform control determines whether survey data is deleted when a user is removed from the Viva Glint platform |
| DataExportType | string | Returns 'data' if data export includes messages, notes, files, topics, users and groups; returns 'user' if data export includes users only |
| DataOnboardingAtSetup | string | Data sets ingested during Microsoft Sentinel data lake onboarding |
| DataOnboardingStatus | string | Status of operation |
| DataScanned | long | Total GBs Scanned |
| DatasetName | string | The name of the dataset where the event occurred |
| DataSources | dynamic | A list of source IDs, source names and locations associated to the activity |
| DataStoreType | string | Indicates which data store the data was downloaded from. Refer DataStoreType for all possible values |
| DeeplinkURL | string | Deep link URL to an investigation in the Microsoft Defender portal |
| DeliveryAction | string | The original delivery action on the email message |
| DestinationLocationType | int |  |
| Detail | string | A description of the event or the activity that occurred in Viva Goals |
| DetectionMethod | string | The detection method or technology used by Defender for Office 365 |
| DetectionType | string | The type of detection. For example: Inline, Detected at delivery, Delayed: Detected after delivery, ZAP: Removed after delivery by zero-hour auto purge (ZAP). Events with ZAP detection type are typically preceded by a message with a Delayed detection type |
| DeviceName | string |  |
| Directionality | string | Identifies whether an email message was inbound, outbound, or an intra-org message |
| DiscardEmployeeIds | string | This in-platform control specifies whether the Employee IDs of previously deleted employees are disregarded or retained in the Viva Glint platform |
| DomainURL | string | The domain URL that was browsed |
| EditMethodology | string | How the policy was created / edited |
| EffectiveOrganization | string | The GUID for the organization impacted by the cmdlet. (Deprecated: This parameter will eventually stop appearing.) |
| ElevationApprovedTime | datetime | The timestamp for when the elevation was approved |
| ElevationApprover | string | The name of a Microsoft manager |
| ElevationDuration | int | The duration for which the elevation was active |
| ElevationRequestId | string | A unique identifier for the elevation request |
| ElevationRole | string | The role the elevation was requested for |
| ElevationTime | datetime | The start time of the elevation |
| EndpointMetaData | dynamic | Describes metadata about the document in endpoint that contained the sensitive information |
| EndTime | datetime | The date and time in Coordinated Universal Time (UTC) when the eDiscovery activity was ended |
| EndTimeData | datetime | Campaign end time |
| EndTimeUtc | datetime | Action final status update timestamp |
| EnforcementMode | int |  |
| Entities | dynamic | List of one or more affected entities by action |
| Entity | string | ProjectEntity the audit was for |
| EntityType | string | Type of the alert or alert entity. Entity types include: User, Recipients, Sender, MalwareFamily |
| EvaluationSource | string | DLP evaluation source (e.g., DlpPolicyEventBasedAssistantOneDriveForBusiness) |
| Event | string | The type of hygiene event. The values for this parameter are Listed or Delisted |
| EventDeepLink | string | Deep-link to the email event in Threat Explorer or Real-time detections |
| EventDetails | dynamic | Additional properties about the event |
| EventId | long | The ID of the hygiene event type |
| EventName | string | A description of the event or the activity that occurred in Viva Pulse |
| EventOccurenceTime | datetime | Timestamp of the operation |
| EventTime | datetime | Timestamp when the Spark Notebook execution was submitted/started |
| EventValue | string | The user who was impacted |
| ExceptionInfo | string | Identifies reasons why a policy no longer applies and/or any information about false positive and/or override noted by the end user |
| ExchangeMetaData | dynamic | Describes metadata about the email message that contained the sensitive information |
| ExecutionDuration | long | Time taken for query execution, in milliseconds |
| ExportName | string | Name of the eDiscovery export |
| ExportTriggeredAt | datetime | Indicates when the data export was triggered |
| ExtendedCompletionDate | datetime | The new date to which a closed survey cycle has been extended |
| ExtendedProperties | dynamic | Additional properties related to the eDiscovery activity |
| FailureReason | string | If KQL query failed, the reason for failure |
| FailureType | string | Indicates the type of data import failure. For example, the value incorrectusermapping indicates the item wasn't imported because no user mapping between the third-party data source and Microsoft 365 could be found |
| FeedBackComponentName | string | The name of a specific component within the 360 feedback program |
| FileId | long | ID of the file in the operation |
| FileName | string | Name of the file in the operation. Appears blank if not relevant to the operation |
| FileSize | long |  |
| FileType | string |  |
| ForAllUsers | bool | Whether the activity associated with the agent was captured for the entire organization or not |
| FormId | string | The Id of the target form |
| FormName | string | The name of the current form |
| FormsUserTypes | dynamic | The role of the user who performed the action. The values for this parameter are Admin, Owner, Responder, or Coauthor |
| FormTypes | dynamic | Indicates whether this is a Form, Quiz, or Survey |
| GenericInfo | string | Used for comments and other generic information |
| GraphName | string | Name of the graph instance |
| GraphQueryStats | string | Collection of response metadata |
| GraphQueryStatus | string | Response of the query or action on graph |
| GroupName | string | Name of the group in the operation. Appears blank if not relevant to the operation |
| Id | string | Unique identifier for the audit record |
| ImportType | string | The data import source type |
| IncidentId | string | DLP incident identifier (GUID) |
| InputParameters | string | Parameters given to the tool |
| Interface | string | Interface from where the notebook was run |
| InternetMessageId | string | The Internet Message Id |
| InvestigationId | string | Investigation ID/GUID |
| InvestigationName | string | Name of the investigation |
| InvestigationType | string | Type of the investigation. Can take one of the following values: User-Reported Messages, Zapped Malware, Zapped Phish, Url Verdict Change |
| Invitation | string | Details of the invite sent to the recipient of the Data Share |
| IsRetry | bool | Indicates whether the data connector retried to import the item |
| IsSoftDelete | bool | Returns 'true' if the network's data retention policy is set to Soft Delete; returns 'false' if the network's data retention policy is set to Hard Delete |
| ItemDetails | dynamic | Additional properties about the object that was modified |
| ItemId | string | Unique identifier of the item (for example, an email message) being imported |
| ItemIds | dynamic | Item IDs associated with the activity |
| ItemName | string | The string in the Subject field of the email message |
| ItemNames | dynamic | Item names associated with the activity |
| ItemSize | long | The size of the item being imported |
| JobEndTime | datetime | End time of the job |
| JobExecutionDurationInSecs | long | Time taken for job execution |
| JobId | string | The GUID of the eDiscovery process |
| JobName | string | Name of the job |
| JobRunStatus | string | Status of the job execution |
| JobStartTime | datetime | Start time of the job |
| JobTotalDurationInSecs | long | Total Duration of the job operation including session |
| JobType | string | Type of Job like Notebook, KQL |
| KernalId | string | Jupyter KernelId, uniquely identifies the Notebook session |
| LabelAction | string | The actions specified by the sensitivity label that were applied to the email message before the message entered the mail transport pipeline |
| LabelAppliedDateTime | datetime | The date the sensitivity label was applied to the email message |
| LabelId | string | The GUID of the sensitivity label applied to the email message |
| LabelName | string | The name of the sensitivity label applied to the email message |
| LastUpdateTimeUtc | datetime | UTC time of the last update for an investigation |
| LatestDeliverylocation | string | The latest delivery location of the email message at the time of the event |
| Logs | string | Logs from the notebook run |
| MatchedPolicies | dynamic |  |
| MDATPDeviceId | string |  |
| MeetingId | string | The ID of the event/teams meeting in the operation |
| MembershipInformation | dynamic | Membership information about the group |
| MemoryPeak | long | Memory Peak of the KQL query execution |
| MessageId | long | ID of the message in the operation |
| MessageTime | datetime | Date and time in Coordinated Universal Time (UTC) the email message was received or sent |
| ModifiedFields | dynamic | A list of attributes that were modified along with its new and old values output as a JSON |
| ModifiedProperties | dynamic | Includes the name of the property that was modified, the new value of the modified object and the previous value of the modified object |
| Name | string | Name of the alert |
| NameOfDownloadedZipFile | string | The name of the compressed file the admin had downloaded from the Data Lake |
| NetworkMessageId | string | The Exchange Online Network Message Id |
| NewValue | string | The new value of the setting |
| NonPiiParameters | string | The name and value for parameters that were used with the cmdlet that include personal data. (Deprecated: This field will eventually stop appearing and its content will be merged with the Parameters field.) |
| Object1Id | string | The ID of the object (for example, a search, hold, or review set) that was created, accessed, or changed |
| Object1Name | string | The name of the object (for example, a search, hold or review set) that was created, accessed, or changed |
| Object1Type | string | The type of the eDiscovery object that the user created, deleted, or modified |
| Object2Id | string | The ID of the object (for example, a search, hold, or review set) that was created, accessed, or changed |
| Object2Name | string | The name of the object (for example, a search, hold or review set) that was created, accessed, or changed |
| Object2Type | string | The type of the eDiscovery object that the user created, deleted, or modified |
| ObjectId | string | The name of the object that was modified by the activity |
| OldValue | string | The old value or the new setting |
| OnBehalfOfResId | string | The resource Id the action was taken on behalf of |
| Operation | string | The name of the user or admin activity |
| OperationDetails | dynamic | A list of extended properties for the setting that was changed. Each property has a Name and Value |
| OperationInput | string | Parameters of graph action |
| OperationProperties | dynamic | Extra properties, i.e. number of OTP passcode sent, email subject, etc. |
| OperationStatus | string | 0: Success, 1: Failure |
| OrganizationAdmins | dynamic | The admin(s) of the organization in Viva Goals where the event occurred. There can be one or more admins in the organization |
| OrganizationId | string | The GUID for your organization's Microsoft 365 tenant |
| OrganizationName | string | The name of the organization in Viva Goals where the event was triggered |
| OrganizationOwner | string | The owner of the organization in Viva Goals where the event occurred |
| OrgAppPermission | string | Permissions list for an organizational app (entire organization, specific users, or specific groups) |
| OriginalDeliverylocation | string | The original delivery location of the email message |
| P1Sender | string | The MAIL FROM address used in SMTP transmission of the email message between email servers (also known as the 5321.MailFrom address, P1 sender, or envelope sender) |
| P2Sender | string | The From address (also known as the 5322.From address or P2 sender) that's shown in email clients |
| Parameters | string | The name and value for parameters that were used with the cmdlet that do not include personal data |
| PhishConfidenceLevel | string | Indicates the confidence level associated with Phish verdict. It can be Normal or High |
| PlaceType | string | The type for the place item that is created/updated/deleted by the request. For example, 'Building', 'Room', 'Desk', and so on |
| Policy | string | The type of threat policy (for example, Anti-spam or Anti-phish) and related action type (for example, High Confidence Spam, Spam, or Phish) relevant to the email message |
| PolicyDetails | dynamic | Information about 1 or more policies that triggered the DLP event |
| PolicyId | string | The Guid of the policy that triggered the alert |
| PolicyMatchInfo | dynamic |  |
| PromptText | string | The Copilot prompt that's run by the LLM |
| Property | string | The tenant wide setting name that was updated by the admin |
| ProtectionUnitID | string | Protection Unit ID of the item being restored |
| ProvisioningStatus | string | Status of provisioning the lake |
| PulseId | string | Id of the pulse survey |
| Query | string | KQL query or notebook executed in the job |
| QueryFiles | dynamic | Input file names used to generate the query. This is specific to the search by file gesture |
| QueryId | string | The ID of the query associated with the activity |
| QueryResponse | string | Response from executing the KQL query |
| QueryText | string | The query text associated with the activity, such as a search statistic process or add to review process |
| Reason | string | Details about the hygiene event |
| Receivers | dynamic | All email addresses in the To, CC, and Bcc fields of the email message |
| Recipient | string | Recipient email address |
| Recipients | dynamic | An array of recipients of the email message |
| RecordNumber | string | Used when an audit record is divided into multiple parts due to size. It indicates the sequence of each part within the total splits |
| RecordType | int | The type of operation indicated by the record |
| RelatedAlertIds | dynamic | Alerts related to an investigation |
| ReleaseTo | string | The recipient of the email message |
| RemovedIdentities | dynamic | Collection of GUID of Users or Groups that were removed |
| ReportName | string | The name of the report where the event occurred |
| RequestSource | string | Quarantine request come from the Microsoft Defender portal, a cmdlet, or a URLlink |
| RequestType | string | The type of quarantine request performed by a user |
| ResourceIdentifiers | string | Consists of the Azure Active Directory tenant ID |
| RestoreLocation | string | Location that the item is being restored to |
| RestoreLocationType | string | Location type that the item is being restored to |
| RestoreTime | datetime | Time which the item is being restored to |
| ResultMessage | string | Indicates the type of failure, such as Duplicate message |
| ResultStatus | string | Indicates whether the action was successful or not |
| ResultTableCount | long | Output Table Count |
| RMSEncrypted | bool |  |
| RunID | string | ID of a specific job run instance |
| ScenarioType | string | The name of automation |
| Schedule | string | Schedule details, if configured for the job |
| Scope | string | Was this event created by a hosted Microsoft 365 service or an on-premises server |
| Sender | string | The email address in the From field of the email message |
| SenderIp | string | The IPv4 or IPv6 address that submitted the message |
| SensitiveInfoDetectionIsIncluded | bool | Indicates whether the event contains the value of the sensitive data type and surrounding context from the source content |
| SensitiveInfoTypeData | dynamic |  |
| ServiceType | string | Whether it is a SharePoint, Exchange, or OneDriveForBusiness policy |
| SessionDurationInSecs | string | Total duration of the session |
| SessionEndTime | datetime | End time for the session |
| SessionId | string | Correlation ID for the various code blocks executed with a Spark session |
| SessionStartTime | datetime | Start time for the session |
| Settings | dynamic | Settings applied to the eDiscovery activity |
| Severity | string | Severity of the alert. Severity levels include: Low, Medium, High |
| Sha1 | string |  |
| Sha256 | string |  |
| SharePointMetaData | dynamic | Describes metadata about the document in SharePoint or OneDrive that contained the sensitive information |
| SharingInformation | dynamic | Information about the person to whom a sharing invitation is sent |
| Source | string | Source of the alert. Sources include: Office 365 Security & Compliance, Cloud App Security |
| SourceApp | string | Indicates if the action is from Forms website or from another App |
| SourceLocationType | int |  |
| SourceUserId | string | The unique identifier of the user from the third-party data source. For example, for a Slack data connector, this property specifies the user Id in Slack workspace |
| StartTime | datetime | The date and time in Coordinated Universal Time (UTC) when the eDiscovery activity was started |
| StartTimeUtc | datetime | Start time for an investigation |
| Status | string | Status of the alert. Statuses include: Active, Investigating, Resolved, Dismissed |
| Subject | string | The subject line of the message |
| SubmissionNotification | string | Admin feedback is sent to end user |
| SubscriptionsEnabled | dynamic | List of subscriptions enabled for ARG ingestion |
| SuccessStatus | string | Whether the restore operation was successful |
| SwitchState | string | Information about the state of various tenant level switches |
| SystemOverrides | dynamic | Overrides that are applicable to the email. These can be system or user overrides |
| TableName | string | Name of the table |
| Tables | dynamic | List of table names ingested during Microsoft Sentinel data lake onboarding |
| TablesRead | dynamic | The list of tables read by the job |
| TablesWrite | dynamic | The list of tables written to by the job |
| TargetFilePath | string |  |
| TargetObjectId | string | Entra Id of the target user in the operation |
| TargetUserId | string | Email of target user in the operation. Appears blank if not relevant to the operation |
| TargetYammerUserId | long | ID of target user in the operation |
| TaskId | string | Unique identifier of the periodic data connector instance. Data connectors import data in periodic intervals |
| ThreadId | long | ID of the Message thread in the operation |
| ThreatsAndDetectionTech | string | The threats and the corresponding detection technologies. This field exposes all the threats on an email message, including the latest addition on spam verdict |
| TimeData | datetime | Campaign launch time |
| TimeGenerated | datetime | The time when the event was generated |
| TimestampUtc | datetime | The timestamp of the action status change |
| ToolID | string | Identifier of the AI Tool |
| ToolName | string | Name of the AI Tool |
| TotalCPU | long | Total CPU Duration of the run |
| TotalCpuHours | long | Total CPU Duration of the run |
| TotalRows | dynamic | Total Rows returned from query execution. List of values if multiple queries executed at once |
| TotalSCUHours | long | Total SCUs used in the run |
| TriggerMode | string | The schedule for when the Copilot prompt runs, shown in cron format |
| URLPath | string | The URL that was browsed |
| UserAction | string | Indicates what action user had performed on the data store. Refer DataLakeUserAction for all possible values |
| UserAgent | string | The user agent (browser details) of the user who triggered the event. UserAgent might not be present in case of a system generated event |
| UserAssignments | dynamic | Collection of GUID of Users and Groups associated with the agent activity |
| UserCancelled | bool | Whether the specific activity was cancelled by the user |
| UserDisplayName | string | The display name of the user involved in the attack simulation training campaign |
| UserId | string | The UPN of the user who performed the action |
| UserKey | string | An alternative ID for the user identified in the UserId property |
| Username | string | The name of the user who triggered the event |
| UserRole | string | The role of the user who triggered this event in Viva Goals. This value mentions if the user is an organization admin or an owner |
| UserServicePlan | string | The service plan assigned to the user who ran the cmdlet |
| UserSubmission | string | Submission was first reported by an end user |
| UserSubmissionTriage | string | User submission is triaged by grader |
| UserTrainingEvent | string | The type of user training event |
| UserType | int | The type of user that performed the operation |
| Verdict | string | The message verdict |
| VersionId | long | Version ID of the file in the operation |
| Workload | string | The Microsoft 365 service where the activity occurred |
| WorkSpaceName | string | The name of the workspace where the event occurred |
| WpaUserRole | string | The Viva Insights role of the user who performed the action |
| YammerNetworkId | long | Network ID of the user that performed the operation |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Microsoft 365 Audit General and DLP](../solutions/microsoft-365-audit-general-and-dlp.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft 365 Audit.DLP](../connectors/m365auditdlpccpdefinition.md) |  |
| [Microsoft 365 Audit.General](../connectors/m365auditgeneralccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

