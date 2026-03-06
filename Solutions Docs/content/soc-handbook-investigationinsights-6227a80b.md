# InvestigationInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

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
| [`AuditLogs`](../tables/auditlogs.md) | `OperationName == "Consent to application"`<br>`OperationName == "Disable Strong Authentication"`<br>`OperationName contains "password"` | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ✓ |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ✓ |
| [`HuntingBookmark`](../tables/huntingbookmark.md) |  | ✓ | ✗ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) |  | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | ? |
| [`ProtectionStatus`](../tables/protectionstatus.md) |  | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ | ? |
| [`SecurityBaselineSummary`](../tables/securitybaselinesummary.md) |  | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "1102,4624,4625,4688,4719,4720,4723,4724,4768,4771,4776"` | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✗ | ✗ |
| [`Update`](../tables/update.md) |  | ✓ | ✗ | ? |
| [`UpdateSummary`](../tables/updatesummary.md) |  | ✓ | ✗ | ? |
| [`Usage`](../tables/usage.md) |  | ✗ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to SOC Handbook](../solutions/soc-handbook.md)

