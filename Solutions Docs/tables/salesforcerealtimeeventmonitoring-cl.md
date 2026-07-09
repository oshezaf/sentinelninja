# SalesForceRealTimeEventMonitoring_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Salesforce *(basis: projected)* |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (191 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud%5CData%20Connectors%5CSalesForceRealTimeEventMonitoringConnector_CCF/SalesforceRealTimeEventMonitoring_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AcceptLanguage | string | List of HTTP Headers that specify the natural language the client understands. |
| ActionName | string | The name of the action. |
| Activity | string | The action the user attempted that requires identity verification. |
| AdditionalInfo | string | JSON serialization of additional information captured from the HTTP headers. |
| AnomalySubType | string | The sub-type of the anomaly event, indicating the specific anomaly category detected. |
| ApiAnomalyEventNumber | string | The unique number automatically assigned to the API anomaly event. |
| ApiType | string | The type of API used (e.g., SOAP Enterprise, SOAP Partner, REST, Bulk). |
| ApiVersion | string | The API version string. If no version number is available, Unknown is returned. |
| ApiVersionNumber | real | The numeric version of the API. |
| AppId | string | The ID of the app provider seeking authentication. |
| Application | string | The application used to access the org. |
| AppName | string | The name of the application that the user accessed. |
| AuthMethodReference | string | The authentication method used by a third-party identification provider for OpenID Connect SSO. |
| AuthServiceId | string | The 18-character ID for an authentication service for a login event. |
| AuthSessionId | string | The ID of the authentication session. |
| BotId | string | The ID of the bot. |
| BotSessionIdentifier | string | The bot session ID. |
| Browser | string | The browser name and version if known (e.g., Chrome 77, Firefox, Safari). |
| CanDownloadPdf | bool | Indicates whether the downloaded PDF was converted from another file type. |
| CipherSuite | string | The TLS cipher suite used for the login. |
| City | string | The city where the user's IP address is physically located. |
| Client | string | The service that executed the API event. |
| ClientVersion | string | The version number of the login client. |
| ColumnHeaders | string | Comma-separated values of column headers (API names, not UI labels). |
| ConnectedAppId | string | The 15-character ID of the connected app associated with the API call. |
| ConnectionType | string | The type of connection (e.g., CDMA, WIFI, LTE). |
| ContentSize | int | The size of the document in bytes. |
| Country | string | The country where the user's IP address is physically located. |
| CountryIso | string | The ISO 3166 code for the country where the user's IP address is physically located. |
| CreatedById | string | The ID of the user who created the event record. |
| CreatedDate | datetime | The date and time when the event record was created in Salesforce. |
| CredentialStuffingEventNumber | string | The unique number automatically assigned to the credential stuffing event. |
| CurrentIp | string | The IP address of the newly observed fingerprint that deviates from the previous one. |
| CurrentPlatform | string | The platform of the newly observed fingerprint that deviates from the previous one. |
| CurrentScreen | string | The screen of the newly observed fingerprint that deviates from the previous one. |
| CurrentUserAgent | string | The user agent of the newly observed fingerprint that deviates from the previous one. |
| CurrentWindow | string | The browser window of the newly observed fingerprint that deviates from the previous one. |
| DashboardId | string | The ID of the dashboard that the report was part of. |
| DashboardName | string | The title of the dashboard that the report was part of. |
| DelegatedOrganizationId | string | Organization ID of the admin who logs in as another user. |
| DelegatedUsername | string | Username of the admin who logs in as another user. |
| Description | string | The description of the report. |
| DeveloperName | string | The unique name of the object in the API. |
| DeviceId | string | The unique identifier used to identify a device when tracking events. |
| DeviceModel | string | The name of the device model. |
| DevicePlatform | string | The type of application experience in name:experience:form format. |
| DeviceSessionId | string | The unique identifier of the user's session based on page load time. |
| DisplayedFieldEntities | string | The API values of the fields displayed on the report, including grouped column entity names. |
| DocumentId | string | The 18-character ID of the document being downloaded. |
| Duration | real | The duration in milliseconds since the page start time. |
| EffectivePageTime | real | The time in milliseconds for the page to load before a user could interact with it. |
| EffectivePageTimeDeviationErrorType | string | Indicates the origin of an error when the page has a loading deviation. |
| EffectivePageTimeDeviationReason | string | The reason for deviation in page loading time. |
| ElapsedTime | int | The amount of time it took for the request to complete in milliseconds. |
| ErrorCode | string | The error code for the authentication issue. |
| EvaluationTime | real | The amount of time it took to evaluate the policy in milliseconds. |
| EventDate | datetime | The time when the specified event was captured. |
| EventGroup | string | ID of the verification attempt; multiple attempts in a session share the same ID. |
| EventIdentifier | string | The unique ID of the event. |
| EventSource | string | The source of the event (e.g., API, Classic, Lightning). |
| EventSourceDetail | string | The source of the event providing additional detail beyond EventSource. |
| EventType | string | The type of event, used to filter logs (e.g., LoginEvent, UriEvent). |
| EventUuid | string | The universally unique identifier (UUID) of the event. |
| ExecutionIdentifier | string | Unique identifier to correlate multiple data chunks from a single execution. |
| ExportFileFormat | string | The format of the exported report (e.g., CSV, Excel). |
| FeatureContribution | real | A percentage representing how much the feature contributed to the anomaly score. |
| FeatureName | string | The name of the feature that contributed to the anomaly score. |
| FeatureValue | real | The value of the feature that contributed to the anomaly score. |
| FileAction | string | The action taken on the file (e.g., API_DOWNLOAD, PREVIEW, UI_DOWNLOAD, UPLOAD). |
| FileName | string | The name of the file including the file extension. |
| FileSource | string | Origin of the document (S=Salesforce, E=External, L=Social Customer Service). |
| FileType | string | The content type of the file. |
| FilterCriteria | dynamic | A JSON string that represents the filter criteria at the time the event was captured. |
| Format | string | The format of the report (e.g., Matrix, MultiBlock, Summary, Tabular). |
| ForwardedForIp | string | The value in the X-Forwarded-For header of HTTP requests sent by the client. |
| GroupedColumnHeaders | string | Comma-separated values of grouped column fields in summary, matrix, and joined reports. |
| GuestUserAnomalyEventNumber | string | The unique number automatically assigned to the guest user anomaly event. |
| HasEffectivePageTimeDeviation | bool | Indicates when a deviation is detected in effective page time. |
| HasExternalUsers | bool | Indicates whether external users are impacted by the operation that triggered a permission change. |
| HasLogoutUrl | bool | Indicates whether a logout URL has been assigned to the app. |
| HttpMethod | string | The HTTP method of the login request (e.g., GET, POST). |
| HttpReferer | string | The referring URI of the page receiving the request. |
| IdentityUsed | string | The identity (username) of the user being authenticated. |
| ImpactedUserIds | dynamic | A list of IDs of the users affected by the event. Maximum of 1,000 user IDs. |
| InitiatedBy | string | The code describing how the authentication request was initiated (e.g., IdP, SP, OauthAuthorize). |
| IsLatestVersion | bool | Indicates whether the file is the most current version. |
| IsScheduled | bool | Indicates whether the report was scheduled. |
| LastReferencedDate | datetime | The timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | datetime | The timestamp for when the current user last viewed this record. |
| Latitude | real | The latitude where the user's IP address is physically located. |
| ListViewId | string | The ID of the list view associated with this event. |
| LoginAccessChangeExpDate | datetime | The expiration date of the login access change granted to another user. |
| LoginAccessChangeGranteeName | string | The name of the user or entity granted login access. |
| LoginAccessChangeGranteeType | string | The type of the grantee for login access (e.g., Admin, Support). |
| LoginAnomalyEventNumber | string | The unique number automatically assigned to the login anomaly event. |
| LoginAsCategory | string | Represents how the user logs in as another user (e.g., OrgAdmin, Community). |
| LoginGeoId | string | The Salesforce ID of the LoginGeo object associated with the login user's IP address. |
| LoginHistoryId | string | Tracks a user session so you can correlate user activity with a particular login instance. |
| LoginKey | string | The string that ties together all events in a given user's login session. |
| LoginLatitude | real | The latitude where the user's IP address is physically located during login. |
| LoginLongitude | real | The longitude where the user's IP address is physically located during login. |
| LoginSubType | string | The type of login flow used. |
| LoginType | string | The type of login used to access the session. |
| LoginUrl | string | The URL of the login page. |
| Longitude | real | The longitude where the user's IP address is physically located. |
| Message | string | The failure message if the operation failed. |
| Name | string | The display name of the entity. |
| NetworkId | string | The ID of the Experience Cloud site that the user is logging in to. |
| NumberOfColumns | int | The number of columns in the list view or report. |
| Operation | string | The operation being performed on the entity (e.g., Read, Create, Update, Delete). |
| OperationDetail | string | The type of operation that triggers a permission change. |
| OperationStatus | string | Whether the operation performed on the entity succeeded or failed. |
| OrderBy | string | The column that the list view is sorted by. |
| OsName | string | The operating system name. |
| OsVersion | string | The operating system version. |
| OwnerId | string | The ID of the org or user who owns the record. |
| PageStartTime | datetime | The time when the page was initially loaded. |
| PageUrl | string | Relative URL of the top-level Lightning Experience or Salesforce mobile app page. |
| ParentIdList | dynamic | The IDs of the affected permission sets or permission set groups. |
| ParentNameList | dynamic | The names of the affected permission sets or permission set groups. |
| PermissionExpiration | datetime | The timestamp when the permission change expires. |
| PermissionExpirationList | dynamic | Timestamps specifying when added permissions will be revoked. |
| PermissionList | dynamic | The list of permissions that are enabled or disabled in the event. |
| PermissionType | string | The type of permission updated in the event (e.g., ObjectPermission, UserPermission). |
| PlannerId | string | The ID of the agent planner. |
| Platform | string | The operating system name and version used during the event. |
| Policy | string | The identity verification security policy or setting. |
| PolicyId | string | The ID of the transaction policy associated with this event. |
| PolicyOutcome | string | The result of the transaction policy. |
| PostalCode | string | The postal code where the user's IP address is physically located. |
| PreviousIp | string | The IP address of the previous fingerprint before the deviation was detected. |
| PreviousPageAppName | string | The internal name of the previous application accessed from the App Launcher. |
| PreviousPageEntityId | string | The unique previous page entity identifier. |
| PreviousPageEntityType | string | The previous page entity type. |
| PreviousPageUrl | string | The relative URL of the previous Lightning Experience or Salesforce mobile app page. |
| PreviousPlatform | string | The platform of the previous fingerprint before the deviation was detected. |
| PreviousScreen | string | The screen of the previous fingerprint before the deviation was detected. |
| PreviousUserAgent | string | The user agent of the previous fingerprint before the deviation was detected. |
| PreviousWindow | string | The browser window of the previous fingerprint before the deviation was detected. |
| ProcessDuration | real | The amount of time to download the file in milliseconds. |
| QueriedEntities | string | The type of entities associated with the event. |
| Query | string | The SOQL query. |
| RecordId | string | The ID of the record being viewed or edited. |
| Records | dynamic | A JSON string that represents the queried data records. |
| RelatedEventIdentifier | string | The EventIdentifier of the related event for multi-factor authentication flows. |
| Remarks | string | The text users see when prompted to verify their identity. |
| RemoteIdentifier | string | Reserved for future use. |
| ReplayId | string | The replay ID used to resume event streaming from a specific point in the event stream. |
| Report | string | The report ID for which this anomaly event was detected. |
| ReportAnomalyEventNumber | string | The unique number automatically assigned to the report anomaly event. |
| ReportId | string | The ID of the report associated with this event. |
| RequestedEntities | string | Objects queried by the guest user. |
| RequestIdentifier | string | The unique ID of a single transaction. |
| RowsProcessed | real | Total row count for the current operation. |
| RowsReturned | real | The number of rows of data returned in the current batch. |
| SalesforceObjectId | string | The Salesforce record ID of the event store object. |
| SalesforceResourceId | string | The ID of the connected app resource. |
| SamlEntityUrl | string | The authentication URL of the SAML provider. |
| Scope | string | Defines the scope of the data (e.g., user, team, organization). |
| Score | real | A number representing the anomaly score for the activity tracked by this event. |
| SdkAppType | string | The mobile SDK application type (e.g., NATIVE, HYBRID, REACTNATIVE). |
| SdkAppVersion | string | The version of the mobile SDK the application uses. |
| SdkVersion | string | The mobile SDK application version number. |
| SecurityEventData | string | The set of browser fingerprint features about the anomaly that triggered this event, in JSON format. |
| Sequence | int | Incremental sequence number that indicates the order of multiple correlated events. |
| SessionHijackingEventNumber | string | The unique number automatically assigned to the session hijacking event. |
| SessionKey | string | The user's unique session ID. Use this value to identify all user events within a session. |
| SessionLevel | string | Session-level security that controls user access to features such as connected apps and reporting. |
| SoqlCommands | string | SOQL commands run by the guest user. |
| SourceIp | string | The source IP address of the client. |
| SsoType | string | The type of SSO (e.g., Oidc, Saml). |
| Status | string | The status of the login attempt or operation. |
| StatusDetail | string | Additional status detail for the event. |
| Subdivision | string | The name of the subdivision where the user's IP address is physically located (e.g., state). |
| Summary | string | A text summary of the threat that caused this event to be created. |
| TargetUrl | string | The URL redirected to after logging in as another user. |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |
| TlsProtocol | string | The TLS protocol version used for the login (e.g., TLS 1.2, TLS 1.3). |
| TotalControllerEvents | int | The number of times controllers were triggered. |
| Uri | string | The URI of the page receiving the request. |
| UseApiToken | string | Indicates login with API Token - T token, or P password. |
| UserAgent | string | The user agent used in the HTTP request. |
| UserAgentDetail | string | The type of client used to make the request as a string. |
| UserCount | string | The number of users affected by the event. Maximum value of 1,000. |
| UserId | string | The origin user's unique ID. |
| UserNameDetail | string | The username in user@company.com format at the time the event was created. |
| UserType | string | The category of user license (e.g., Standard, Guest, CspLitePortal). |
| UserTypeDetail | string | The category of user license for the user involved in the event. |
| VerificationMethod | string | The method by which the user attempted to verify identity (e.g., Email, Sms, U2F, Totp). |
| VersionId | string | The specific version of a document in Salesforce CRM Content or Files. |
| VersionNumber | string | The version number of the file. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SalesForce Real-Time Event Monitoring Connector (via Codeless Connector Framework)](../connectors/salesforcertemconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

