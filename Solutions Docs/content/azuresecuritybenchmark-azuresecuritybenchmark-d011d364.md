# <img src="../images/asim-badge.png" alt="ASIM" height="32"> AzureSecurityBenchmark

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Workbooks/AzureSecurityBenchmark.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession`](../asim/imnetworksession.md)

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | `OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"` | ✓ | ✗ |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |  | ✓ | ✗ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`AzureActivity`](../tables/azureactivity.md) | `ResourceProvider == "MICROSOFT.KEYVAULT"` | ✗ | ✗ |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) |  | ✓ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category in "All,AzureFirewallNetworkRule,NetworkSecurityGroupRuleCounter"`<br>`ResourceType == "AZUREFIREWALLS"` | — | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ |
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) |  | — | — |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) |  | — | — |
| [`ProtectionStatus`](../tables/protectionstatus.md) |  | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "2889,3000,4624,4768,4769,4776"` | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) |  | ✓ | ✗ |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |  | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)

