# InvestigationInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [SOC Handbook](../solutions/soc-handbook.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Handbook/Workbooks/InvestigationInsights.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) | `AdditionalDetails contains "fraud"` | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ✓ |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) | `ResultCode == "0"` | ✓ | ✗ | ✓ |
| [`HuntingBookmark`](../tables/huntingbookmark.md) |  | ✓ | ✗ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `Operation in "New-InboxRule,Set-Mailbox"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |
| [`ProtectionStatus`](../tables/protectionstatus.md) |  | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) | `AnalyzeResult == "Failed"` | ✓ | ✗ | ? |
| [`SecurityBaselineSummary`](../tables/securitybaselinesummary.md) |  | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) | `AccountType != "Computer"`<br>`AccountType != "Machine"`<br>`ErrorCode == "500121"`<br>`EventID in "1102,4624,4625,4688,4719,4720,4723,4724,4768,4771,4776"`<br>`TargetAccount !contains "NT AUTHORITY"`<br>`TargetAccount !endswith "$"` | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) | `AppDisplayName == "Windows Sign In"`<br>`OperationName == "Consent to application"`<br>`OperationName == "Disable Strong Authentication"`<br>`OperationName contains "password"` | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✓ | ✗ |
| [`Update`](../tables/update.md) | `Classification != "Feature Packs"`<br>`UpdateState != "Installed"` | ✓ | ✗ | ? |
| [`UpdateSummary`](../tables/updatesummary.md) |  | ✓ | ✗ | ? |
| [`Usage`](../tables/usage.md) |  | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to SOC Handbook](../solutions/soc-handbook.md)

