# <img src="../images/asim-badge.png" alt="ASIM" height="32"> GDPRComplianceAndDataSecurity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GDPR%20Compliance%20%26%20Data%20Security/Workbooks/GDPRComplianceAndDataSecurity.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_WebSession`](../asim/imwebsession.md)

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`Anomalies`](../tables/anomalies.md) |  | ✓ | ✓ | — |
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName in "Add member to role,Add user,Consent to application,Reset user password,Update user"`<br>`OperationName == "Sign-in activity"`<br>`OperationName != "Consent to application"` | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "SQLSecurityAuditEvents"`<br>`ResourceType == "SERVERS/DATABASES"` | — | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | — |
| [`LAQueryLogs`](../tables/laquerylogs.md) |  | ✓ | ✗ | — |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) |  | ✓ | ✗ | ✓ |
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload == "Exchange"`<br>`OfficeWorkload in "AzureActiveDirectory,MicrosoftTeams"`<br>`OfficeWorkload has_any "Exchange,OneDrive"`<br>`OfficeWorkload has_any "OneDrive,SharePoint"`<br>`RecordType in "ExchangeAdmin,SharePointFileOperation"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | — |
| [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) |  | ✓ | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)

