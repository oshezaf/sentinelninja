# InsiderRiskManagement

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftPurviewInsiderRiskManagement/Workbooks/InsiderRiskManagement.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ |
| [`Anomalies`](../tables/anomalies.md) |  | ✓ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ |
| [`EmailEvents`](../tables/emailevents.md) |  | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ |
| [`LAQueryLogs`](../tables/laquerylogs.md) |  | ✓ | ✗ |
| [`MicrosoftPurviewInformationProtection`](../tables/microsoftpurviewinformationprotection.md) |  | ✓ | ✗ |
| [`OfficeActivity`](../tables/officeactivity.md) |  | ✓ | ✗ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "4723,4724"` | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |
| [`Syslog`](../tables/syslog.md) | `Facility in "auth,authpriv"` | ✓ | ✓ |
| [`Update`](../tables/update.md) |  | ✓ | ✗ |
| [`Watchlist`](../tables/watchlist.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

