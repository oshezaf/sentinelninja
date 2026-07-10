# SalesforceServiceCloudV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Salesforce *(basis: projected)* |
| **Source Product** | Service Cloud *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (216 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SalesforceServiceCloudV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| AnalyticsMode | string |
| ApiType | string |
| ApiVersion | string |
| AppName | string |
| AppType | string |
| ArticleId | string |
| ArticleStatus | string |
| ArticleVersion | string |
| ArticleVersionId | string |
| AverageRowSize | string |
| BatchId | string |
| BrowserName | string |
| BrowserType | string |
| BrowserVersion | string |
| CalloutTime | string |
| CipherSuite | string |
| ClassName | string |
| ClickedRecordId | string |
| ClientId | string |
| ClientInfo | string |
| ClientIp | string |
| ClientName | string |
| ClientVersion | string |
| ComponentId | string |
| ComponentIdDerived | string |
| ComponentName | string |
| ConnectionType | string |
| ConsoleId | string |
| ConsoleIdDerived | string |
| Context | string |
| ControllerType | string |
| CpuTime | string |
| DashboardComponentId | string |
| DashboardId | string |
| DashboardIdDerived | string |
| DashboardType | string |
| Data | string |
| DbBlocks | string |
| DbCpuTime | string |
| DbTotalTime | string |
| DeliveryId | string |
| DeliveryLocation | string |
| DeviceId | string |
| DeviceModel | string |
| DevicePlatform | string |
| DeviceSessionId | string |
| DisplayType | string |
| DocumentId | string |
| DocumentIdDerived | string |
| DstBytes | string |
| DstUser | string |
| DstUserSid | string |
| DstUserSidDerived | string |
| Duration | string |
| DvcAction | string |
| DvcOS | string |
| DvcOSName | string |
| DvcOSVersion | string |
| EffectivePageTime | string |
| Entity | string |
| EntityId | string |
| EntityName | string |
| EntityType | string |
| EntryPoint | string |
| Ept | string |
| EventCount | string |
| EventEndTime | string |
| EventResult | string |
| EventType | string |
| ExceptionMessage | string |
| ExceptionType | string |
| ExecTime | string |
| FilePreviewType | string |
| FileSize | string |
| FileType | string |
| GrandparentUiElement | string |
| HttpHeaders | string |
| HttpMethod | string |
| HttpReferrerOriginal | string |
| HttpUserAgent | string |
| HttpUserAgentOriginal | string |
| IsAjaxRequest | string |
| IsApi | string |
| IsError | string |
| IsFirstRequest | string |
| IsGuest | string |
| IsLongRunningRequest | string |
| IsMobile | string |
| IsNew | string |
| IsScheduled | string |
| IsSecure | string |
| IsSuccess | string |
| JobId | string |
| Language | string |
| LastVersion | string |
| LicenseContext | string |
| LimitUsagePercent | string |
| LogGroupId | string |
| LoginKey | string |
| LoginStatus | string |
| ManagedPackageNamespace | string |
| MediaType | string |
| Method | string |
| MethodName | string |
| Name | string |
| NetworkDuration | string |
| NumberBuckets | string |
| NumberColumns | string |
| NumberExceptionFilters | string |
| NumberFailures | string |
| NumberFields | string |
| NumberSoqlQueries | string |
| NumClicks | string |
| NumResults | string |
| NumSessions | string |
| OperationType | string |
| OrganizationId | string |
| Origin | string |
| OsName | string |
| OsVersion | string |
| PageAppName | string |
| PageContext | string |
| PageEntityId | string |
| PageEntityType | string |
| PageName | string |
| PageStartTime | string |
| PageUrl | string |
| ParentUiElement | string |
| PlatformType | string |
| PrefixesSearched | string |
| PrevpageAppName | string |
| PrevpageContext | string |
| PrevpageEntityId | string |
| PrevpageEntityType | string |
| PrevpageUrl | string |
| Query | string |
| QueryId | string |
| Quiddity | string |
| Rank | string |
| ReadTime | string |
| RecordId | string |
| RecordIdDerived | string |
| RecordType | string |
| ReferrerUri | string |
| RelatedEntityId | string |
| RelatedList | string |
| RenderingType | string |
| ReopenCount | string |
| ReportDescription | string |
| ReportId | string |
| ReportIdDerived | string |
| RequestId | string |
| RequestSize | string |
| RequestStatus | string |
| RequestType | string |
| ResolutionType | string |
| ResponseSize | string |
| RowCount | string |
| RowsProcessed | string |
| RunTime | string |
| SdkAppType | string |
| SdkAppVersion | string |
| SdkVersion | string |
| SearchQuery | string |
| SessionId | string |
| SessionKey | string |
| SessionLevel | string |
| SessionType | string |
| SharedWithEntityId | string |
| SharingOperation | string |
| SharingPermission | string |
| SiteId | string |
| Sort | string |
| SourceIp | string |
| SrcBytes | string |
| SrcDvcId | string |
| SrcDvcModelName | string |
| SrcIpAddr | string |
| SrcNatIpAddr | string |
| StackTrace | string |
| StatusCode | string |
| Success | string |
| TabId | string |
| TargetUiElement | string |
| Time | string |
| TimeGenerated | datetime |
| Timestamp | string |
| TimestampDerived | string |
| TlsProtocol | string |
| TotalTime | string |
| TransactionType | string |
| TriggerId | string |
| TriggerName | string |
| TriggerType | string |
| UiEventId | string |
| UiEventSequenceNum | string |
| UiEventSource | string |
| UiEventTimestamp | string |
| UiEventType | string |
| Uri | string |
| UriIdDerived | string |
| Url | string |
| UrlOriginal | string |
| User | string |
| UserAgent | string |
| UserEmail | string |
| UserId | string |
| UserIdDerived | string |
| UserInitiatedLogout | string |
| UserType | string |
| VersionId | string |
| VersionIdDerived | string |
| ViewStateSize | string |
| WaveSessionId | string |
| WaveTimestamp | string |

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
| [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Brute force attack against user credentials](../content/salesforce-service-cloud-brute-force-attack-against-user-credentials-5a6ce089-e756-40fb-b022-c8e8864a973a-39827da6.md) |  |
| [Potential Password Spray Attack](../content/salesforce-service-cloud-potential-password-spray-attack-64d16e62-1a17-4a35-9ea7-2b9fe6f07118-5b230e48.md) |  |
| [User Sign in from different countries](../content/salesforce-service-cloud-user-sign-in-from-different-countries-3094e036-e5ae-4d6e-8626-b0f86ebc71f2-a92654f0.md) |  |

### Workbooks (1)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SalesforceServiceCloud](../content/salesforce-service-cloud-salesforceservicecloud-a9451acb.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimWebSessionSalesforceServiceCloudV2](../asim/asimwebsessionsalesforceservicecloudv2.md) | WebSession | Salesforce Service Cloud |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SalesforceServiceCloud](../parsers/salesforceservicecloud.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

