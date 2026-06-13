# InsiderRiskManagement

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Workbooks/InsiderRiskManagement.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`Anomalies`](../tables/anomalies.md) |  | ✓ | ✓ | ? |
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName in "Add member to role,Add user,Consent to application,Create Deployment,Create or Update Virtual Machine,Create role assignment,List Storage Account Keys,Reset user password,Update user"`<br>`OperationName in "Set domain authentication,Set federation settings on domain,Sign-in activity"`<br>`OperationName != "Consent to application"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Update"`<br>`OperationName contains "delet"`<br>`OperationName contains "delete"`<br>`OperationName contains "remove"`<br>`OperationName has "Create"`<br>`OperationName has_any "Create,Update"`<br>`OperationName has_any "Ip,Security Rule"` | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | `ActivityStatus in "Accepted,Succeeded"`<br>`ActivitySubstatusValue in "Created,OK"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | `ActivityInsights has "True"`<br>`ActivityType == "LogOn"` | ✓ | ✗ | ? |
| [`EmailEvents`](../tables/emailevents.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`LAQueryLogs`](../tables/laquerylogs.md) | `RequestClientApp != "Sentinel-General"`<br>`ResponseCode != "200"`<br>`ResponseRowCount == "5000"` | ✓ | ✗ | ? |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) |  | ✓ | ✗ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | `ClientInfoString == "Client=Microsoft.Exchange.Powershell; Microsoft WinRM Client"`<br>`Logon_Type != "Owner"`<br>`OfficeObjectId has ".exe."`<br>`OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`Parameters contains "ForwardTo"`<br>`Parameters contains "ForwardingSmtpAddress"`<br>`Parameters has "Deleted Items"`<br>`Parameters has "Junk Email"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"`<br>`SourceRelativeUrl has "Microsoft Teams Chat Files"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName contains "PII"`<br>`AlertName contains "anomal"`<br>`AlertName contains "confidential"`<br>`AlertName contains "data"`<br>`AlertName contains "fusion"`<br>`AlertName contains "intellectual"`<br>`AlertName contains "leak"`<br>`AlertName contains "sensitive"`<br>`AlertName contains "spill"`<br>`AlertName contains "steal"`<br>`AlertName contains "theft"`<br>`ProductName == "Microsoft 365 Insider Risk Management"`<br>`ProviderName contains "anomal"`<br>`ProviderName contains "fusion"`<br>`Tactics contains "exfil"` | ✓ | ✗ | ✓ |
| [`SecurityEvent`](../tables/securityevent.md) | `ErrorCode == "50126"`<br>`EventID in "4723,4724"` | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | `AppDisplayName contains "Portal"` | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) | `Facility in "auth,authpriv"` | ✓ | ✓ | ✓ |
| [`Update`](../tables/update.md) |  | ✓ | ✗ | ? |
| [`Watchlist`](../tables/watchlist.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

