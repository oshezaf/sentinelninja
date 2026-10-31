# GoogleWorkspaceReports

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GoogleWorkspaceReports table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googleworkspacereports) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (135 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googleworkspacereports)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountState | string | Deprecated. Use EventParameters column to find the value of this column instead. Parameter to indicate the account state on the device. |
| ActorApplicationInfoApplicationName | string | Name of the application used to perform the action. |
| ActorApplicationInfoImpersonation | bool | Whether the application was impersonating a user. |
| ActorApplicationInfoOauthClientId | string | OAuth client id of the third party application used to perform the action. |
| ActorCallerType | string | The type of actor. |
| ActorEmail | string | The primary email address of the actor. May be absent if there is no email address associated with the actor. |
| ActorIsCollaboratorAccount | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates whether the actor is a collaborator account. |
| ActorKey | string | Only present when callerType is KEY. Can be the consumer_key of the requestor for OAuth 2LO API requests or an identifier for robot accounts. |
| ActorProfileId | string | The unique Google Workspace profile ID of the actor. This value might be absent if the actor is not a Google Workspace user, or may be the number 105250506097979753968 which acts as a placeholder ID. |
| ApiKind | string | Deprecated. Use EventParameters column to find the value of this column instead. The kind of API request made. |
| ApplicationEdition | string | Deprecated. Use EventParameters column to find the value of this column instead. The Google Workspace edition. |
| ApplicationName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| AppName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| Billable | bool | Deprecated. Use EventParameters column to find the value of this column instead. Whether this activity is billable. |
| BrowserVersion | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| CalendarId | string | Deprecated. Use EventParameters column to find the value of this column instead. Calendar Id of the relevant calendar in context of this action (for example the calendar that an event is on, or a calendar being subscribed to). Usually takes the form of the user's email address. |
| ChromeOrgUnitId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ClientId | string | Deprecated. Use EventParameters column to find the value of this column instead. Client ID to which access has been granted / revoked. |
| ClientType | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentHash | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentRiskLevel | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentSize | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentTransferMethod | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ContentType | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DestinationFolderId | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the destination folder. |
| DestinationFolderTitle | string | Deprecated. Use EventParameters column to find the value of this column instead. The title of the destination folder. |
| DestUserUpn | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DeviceId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DeviceName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DevicePlatform | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DeviceType | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DeviceUser | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DocId | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the document. |
| DocTitle | string | Deprecated. Use EventParameters column to find the value of this column instead. The title of the document. |
| DocType | string | Deprecated. Use EventParameters column to find the value of this column instead. The type of the document. |
| DstUserUpn | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| DvcGuid | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the device used. |
| DvcInterfaceGuid | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the device interface. |
| DvcModelName | string | Deprecated. Use EventParameters column to find the value of this column instead. The model name of the device used. |
| DvcModelNumber | string | Deprecated. Use EventParameters column to find the value of this column instead. The model number of the device used. |
| DvcType | string | Deprecated. Use EventParameters column to find the value of this column instead. The type of the device used. |
| Etag | string | ETag of the entry. |
| EventEndTime | string | Deprecated. Use EventParameters column to find the value of this column instead. The end time of the event. |
| EventGuest | string | Deprecated. Use EventParameters column to find the value of this column instead. The email address of the event guest. |
| EventId | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the event. |
| EventMessage | string | Deprecated. Use EventParameters column to find the value of this column instead. The name of the event. |
| EventName | string | Name of the event. |
| EventOriginalMessage | string | Deprecated. Use EventParameters column to find the value of this column instead. An array representing a chain of events, where each element is a sub-event. |
| EventParameters | dynamic | JSON of all parameters that is associated with the Event. |
| EventProduct | string | Deprecated. Use EventParameters column to find the value of this column instead. The product associated with the event. |
| EventResourceId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| EventResourceName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| EventResponseStatus | string | Deprecated. Use EventParameters column to find the value of this column instead.The response status of the event. |
| EventResult | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| EventStartTime | string | Deprecated. Use EventParameters column to find the value of this column instead. The start time of the event. |
| EventTitle | string | Deprecated. Use EventParameters column to find the value of this column instead. The title of the event. |
| EventType | string | Type of event. |
| EventUid | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique identifier of the event. |
| EventVendor | string | Deprecated. Use EventParameters column to find the value of this column instead. The vendor of the event. |
| GroupDomain | string | Deprecated. Use EventParameters column to find the value of this column instead. The organizational unit (OU) name (path). |
| GroupEmail | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| IdApplicationName | string | Application name to which the event belongs. |
| IdCustomerId | string | The unique identifier for a Google Workspace account. |
| IdTime | string | Time of occurrence of the activity. This is in UNIX epoch time in seconds. |
| IdUniqueQualifier | string | Unique qualifier if multiple events have the same time. |
| IosVendorId | string | Deprecated. Use EventParameters column to find the value of this column instead. The vendor ID for iOS devices. |
| IosVendorUID | string | Deprecated. Use EventParameters column to find the value of this column instead. The vendor UID for iOS devices. |
| IsSecondFactor | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates if the event involves a second-factor authentication attempt. |
| IsSuspicious | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates if the event is considered suspicious. |
| Kind | string | The type of API resource. For an activity report, the value is audit#activity. |
| LastSyncAuditDate | string | Deprecated. Use EventParameters column to find the value of this column instead. The date of the last synchronization audit. |
| LoginChallengeMethod | string | Deprecated. Use EventParameters column to find the value of this column instead. The method used for the login challenge. |
| LoginChallengeStatus | string | Deprecated. Use EventParameters column to find the value of this column instead. The status of the login challenge. |
| LoginType | string | Deprecated. Use EventParameters column to find the value of this column instead. The type of credentials used to attempt login. |
| ModuleName | string | Deprecated. Use EventParameters column to find the value of this column instead. The new license for this product name. |
| NetworkInfoRegionCode | string | ISO 3166-1 alpha-2 region code of the user doing the action. |
| NetworkInfoSubdivisionCode | string | ISO 3166-2 region code (states and provinces) for countries of the user doing the action. |
| NetworkIpAsn | dynamic | IP Address of the user doing the action. |
| NewValue | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| NotificationMessageId | string | Deprecated. Use EventParameters column to find the value of this column instead. The notification message Id. |
| NotificationMethod | string | Deprecated. Use EventParameters column to find the value of this column instead. The method used for the notification. |
| NotificationType | string | Deprecated. Use EventParameters column to find the value of this column instead. The type of notification. |
| OldEventTitle | string | Deprecated. Use EventParameters column to find the value of this column instead. If the title of a calendar event has been changed, this is the previous title of the event. |
| OldValue | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| OldVisibility | string | Deprecated. Use EventParameters column to find the value of this column instead. Old Visibility of Target File. |
| OrganizerCalendarId | string | Deprecated. Use EventParameters column to find the value of this column instead. Calendar Id of this Event's organizer. |
| OrgUnitName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| OriginatingAppId | string | Deprecated. Use EventParameters column to find the value of this column instead. The Google Cloud Project ID of the application that performed the action. |
| OsProperty | string | Deprecated. Use EventParameters column to find the value of this column instead. Operating System properties. |
| Owner | string | Deprecated. Use EventParameters column to find the value of this column instead. The owner of the resource involved in the event. |
| OwnerDomain | string | This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner. |
| OwnerEmail | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| OwnerIsSharedDrive | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates if the owner is a shared drive. |
| OwnerIsTeamDrive | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates if the owner is a team drive. |
| PrimaryEvent | bool | Deprecated. Use EventParameters column to find the value of this column instead. Indicates if the event is the primary event in a chain of events. |
| ProcessName | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique name (ID) of the setting that was changed. |
| ProfileUserName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| RegisterPrivelege | string | Deprecated. Use EventParameters column to find the value of this column instead. Device Policy app's privilege on the user's device. |
| Resource_Id | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique resource Id of the device. |
| ResourceDetails | dynamic | Details of the resource on which the action was performed. |
| RoleName | string | Deprecated. Use EventParameters column to find the value of this column instead. The unique name (ID) of the role assigned to the user. |
| RuleName | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| ScanId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| Scope | string | Deprecated. Use EventParameters column to find the value of this column instead. The scope of the access request. |
| ScopeData | string | Deprecated. Use EventParameters column to find the value of this column instead. Additional data related to the scope. |
| SerialNumber | string | Deprecated. Use EventParameters column to find the value of this column instead. The serial number of the device. |
| SharedDriveId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| SourceFolderId | string | Deprecated. Use EventParameters column to find the value of this column instead. The ID of the source folder if the document is located in a shared drive. |
| SourceFolderTitle | string | Deprecated. Use EventParameters column to find the value of this column instead. The title of the source folder if the document is located in a shared drive. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIpAddr | string | IP address of the user doing the action. |
| TargetCalendarId | string | Deprecated. Use EventParameters column to find the value of this column instead. The ID of the calendar targeted by the event. |
| TargetDomain | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| TargetUserDomain | string | Deprecated. Use EventParameters column to find the value of this column instead. The domain targeted by the event. |
| TargetUserName | string | Deprecated. Use EventParameters column to find the value of this column instead. The user targeted by the event. |
| TeamDriveId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time that the log was generated. |
| Timestamp | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| TriggerDestination | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| TriggerSource | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| TriggerType | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| Type | string | The name of the table |
| Url | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| UserAadid | string | Deprecated. Use EventParameters column to find the value of this column instead. This ID helps correlate events and activities to the correct Google Workspace tenant. |
| UserAgent | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| UserAgentOriginal | string | Deprecated. Use EventParameters column to find the value of this column instead. The user agent from the request that triggered this action. |
| UserEmail | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| Value | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| VirtualDeviceId | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| Visibility | string | Deprecated. Use EventParameters column to find the value of this column instead. |
| VisibilityChange | string | Deprecated. Use EventParameters column to find the value of this column instead. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [GoogleWorkspaceReports Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/googleworkspacereports)

## Solutions (1)

This table is used by the following solutions:

- [GoogleWorkspaceReports](../solutions/googleworkspacereports.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Workspace Activities (via Codeless Connector Framework)](../connectors/googleworkspaceccpdefinition.md) |  |
| [[DEPRECATED] Google Workspace (G Suite)](../connectors/googleworkspacereportsapi.md) |  |

---

## Content Items Using This Table (25)

### Analytic Rules (10)

**In solution [GoogleWorkspaceReports](../solutions/googleworkspacereports.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GWorkspace - API Access Granted](../content/googleworkspacereports-gworkspace-api-access-granted-c45a9804-5da8-11ec-bf63-0242ac130002-333bb900.md) |  |
| [GWorkspace - Admin permissions granted](../content/googleworkspacereports-gworkspace-admin-permissions-granted-03f25156-6172-11ec-90d6-0242ac120003-8b9cd6f1.md) |  |
| [GWorkspace - Alert events](../content/googleworkspacereports-gworkspace-alert-events-e369d246-5da8-11ec-bf63-0242ac130002-80adb373.md) |  |
| [GWorkspace - An Outbound Relay has been added to a G Suite Domain](../content/googleworkspacereports-gworkspace-an-outbound-relay-has-been-added-to-a-g-suite-domain-ead87cd6-5da7-11ec-bf63-0242ac130002-3aa2c162.md) |  |
| [GWorkspace - Multiple user agents for single source](../content/googleworkspacereports-gworkspace-multiple-user-agents-for-single-source-6ff0e16e-5999-11ec-bf63-0242ac130002-8d165429.md) |  |
| [GWorkspace - Possible brute force attack](../content/googleworkspacereports-gworkspace-possible-brute-force-attack-8f6cd9a4-5e57-11ec-bf63-0242ac130002-c5d8d00d.md) |  |
| [GWorkspace - Possible maldoc file name in Google drive](../content/googleworkspacereports-gworkspace-possible-maldoc-file-name-in-google-drive-d80d02a8-5da6-11ec-bf63-0242ac130002-cd813548.md) |  |
| [GWorkspace - Two-step authentification disabled for a user](../content/googleworkspacereports-gworkspace-two-step-authentification-disabled-for-a-user-c8cc02d0-5da6-11ec-bf63-0242ac130002-5aea9b56.md) |  |
| [GWorkspace - Unexpected OS update](../content/googleworkspacereports-gworkspace-unexpected-os-update-c02b0c8e-5da6-11ec-bf63-0242ac130002-b0fa8bff.md) |  |
| [GWorkspace - User access has been changed](../content/googleworkspacereports-gworkspace-user-access-has-been-changed-92fae638-5da8-11ec-bf63-0242ac130002-d415780d.md) |  |

### Hunting Queries (14)

**In solution [GoogleWorkspaceReports](../solutions/googleworkspacereports.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [GWorkspace - Document Copied from Share Drive to Private Drive](../content/googleworkspacereports-gworkspace-document-copied-from-share-drive-to-private-drive-69e8a40f-6508-4f43-8eef-2f78ad6174df-0174362a.md) |  |
| [GWorkspace - Document shared externally](../content/googleworkspacereports-gworkspace-document-shared-externally-00d743e2-5dac-11ec-bf63-0242ac130002-a98aa9d1.md) |  |
| [GWorkspace - Document shared publicy in web](../content/googleworkspacereports-gworkspace-document-shared-publicy-in-web-e37c86ea-5dab-11ec-bf63-0242ac130002-99cd7239.md) |  |
| [GWorkspace - Document shared publicy with link](../content/googleworkspacereports-gworkspace-document-shared-publicy-with-link-c7c65c78-5dab-11ec-bf63-0242ac130002-0fdc40e9.md) |  |
| [GWorkspace - License Revoke and Assignment to User](../content/googleworkspacereports-gworkspace-license-revoke-and-assignment-to-user-b1235ce0-06a0-446b-baad-852874f57bd4-cc080246.md) |  |
| [GWorkspace - Multi IP addresses by user](../content/googleworkspacereports-gworkspace-multi-ip-addresses-by-user-bb6bf88e-5dab-11ec-bf63-0242ac130002-a6582e26.md) |  |
| [GWorkspace - Possible SCAM/SPAM or Phishing via Calendar](../content/googleworkspacereports-gworkspace-possible-scam-spam-or-phishing-via-calendar-29ce9d14-5dab-11ec-bf63-0242ac130002-697b529a.md) |  |
| [GWorkspace - Rare document types by users](../content/googleworkspacereports-gworkspace-rare-document-types-by-users-0b20d206-5dab-11ec-bf63-0242ac130002-44fbad2a.md) |  |
| [GWorkspace - Shared private document](../content/googleworkspacereports-gworkspace-shared-private-document-2da2122e-5da9-11ec-bf63-0242ac130002-2bc65996.md) |  |
| [GWorkspace - Suspended users](../content/googleworkspacereports-gworkspace-suspended-users-26cea052-5da9-11ec-bf63-0242ac130002-6c4c92c6.md) |  |
| [GWorkspace - Uncommon user agent strings](../content/googleworkspacereports-gworkspace-uncommon-user-agent-strings-1efb71b6-5da9-11ec-bf63-0242ac130002-66b8775f.md) |  |
| [GWorkspace - Unknown login type](../content/googleworkspacereports-gworkspace-unknown-login-type-05189314-5e58-11ec-bf63-0242ac130002-b588e2da.md) |  |
| [GWorkspace - User reported calendar invite as spam](../content/googleworkspacereports-gworkspace-user-reported-calendar-invite-as-spam-181bda98-5da9-11ec-bf63-0242ac130002-91c2be7a.md) |  |
| [GWorkspace - Users with several devices](../content/googleworkspacereports-gworkspace-users-with-several-devices-1087fb40-5da9-11ec-bf63-0242ac130002-691cd7c6.md) |  |

### Workbooks (1)

**In solution [GoogleWorkspaceReports](../solutions/googleworkspacereports.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GoogleWorkspace](../content/googleworkspacereports-googleworkspace-6948e392.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationGoogleWorkspaceLogins](../asim/asimauthenticationgoogleworkspacelogins.md) | Authentication | Google Workspace |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GWorkspaceActivityReports](../parsers/gworkspaceactivityreports.md) | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

