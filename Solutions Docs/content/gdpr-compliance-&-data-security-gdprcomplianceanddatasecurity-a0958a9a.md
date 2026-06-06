# GDPRComplianceAndDataSecurity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GDPR%20Compliance%20%26%20Data%20Security/Workbooks/GDPRComplianceAndDataSecurity.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`Anomalies`](../tables/anomalies.md) |  | ✓ | ✓ | ? |
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName in "Add member to role,Add user,Consent to application,Reset user password,Update user"`<br>`OperationName == "Sign-in activity"`<br>`OperationName != "Consent to application"` | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category == "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | `ActivityInsights has "True"` | ✓ | ✗ | ? |
| [`LAQueryLogs`](../tables/laquerylogs.md) | `RequestClientApp != "Sentinel-General"` | ✓ | ✗ | ? |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) | `LabelName !in "General"` | ✓ | ✗ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | `ClientInfoString == "Client=Microsoft.Exchange.Powershell; Microsoft WinRM Client"`<br>`ExternalAccess == "True"`<br>`Logon_Type != "Owner"`<br>`OfficeObjectId has ".exe."`<br>`OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`OfficeWorkload has_any "OneDrive,SharePoint"`<br>`Parameters contains "ForwardTo"`<br>`Parameters has "Deleted Items"`<br>`Parameters has "Junk Email"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"`<br>`SourceRelativeUrl has "Microsoft Teams Chat Files"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |
| [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) |  | ✓ | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName contains "PII"`<br>`AlertName contains "confidential"`<br>`AlertName contains "intellectual"`<br>`AlertName contains "leak"`<br>`AlertName contains "sensitive"`<br>`AlertName contains "spill"`<br>`AlertName contains "steal"`<br>`AlertName contains "theft"`<br>`Tactics contains "exfil"` | ✓ | ✗ | ✓ |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)

