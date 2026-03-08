# InsiderRiskManagement

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

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
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`EmailEvents`](../tables/emailevents.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`LAQueryLogs`](../tables/laquerylogs.md) |  | ✓ | ✗ | ? |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) |  | ✓ | ✗ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "4723,4724"` | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) | `Facility in "auth,authpriv"` | ✓ | ✓ | ✓ |
| [`Update`](../tables/update.md) |  | ✓ | ✗ | ? |
| [`Watchlist`](../tables/watchlist.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

