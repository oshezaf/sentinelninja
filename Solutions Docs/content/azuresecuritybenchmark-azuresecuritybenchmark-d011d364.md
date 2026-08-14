# AzureSecurityBenchmark

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Workbooks/AzureSecurityBenchmark.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | `ActivityStatusValue in "Succeeded,Success"`<br>`OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"`<br>`OperationNameValue contains "recovery"`<br>`OperationNameValue startswith "Microsoft.KeyVault"`<br>`OperationNameValue startswith "Microsoft.Logic"` | ✗ | ✗ | ✗ |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) |  | ✓ | ✗ | ✓ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category in "All,AzureFirewallNetworkRule,NetworkSecurityGroupRuleCounter"`<br>`ResourceProvider == "MICROSOFT.KEYVAULT"`<br>`ResourceType == "AZUREFIREWALLS"`<br>`msg_s !has ". Rule Collection:"`<br>`msg_s !has "DNAT"`<br>`msg_s !has "Policy:"`<br>`msg_s !has "Rule Collection:"`<br>`msg_s !has "Type="`<br>`msg_s has ". Rule Collection:"`<br>`msg_s has "DNAT"`<br>`msg_s has "Policy:"`<br>`msg_s has "Rule Collection:"`<br>`msg_s has "Type="` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✓ | ✗ |
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) |  | ✓ | ✓ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ✓ |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) 🔶 |  | ? | ✓ | ? |
| [`ProtectionStatus`](../tables/protectionstatus.md) |  | ✓ | ✗ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName contains "auth"`<br>`AlertName contains "cert"`<br>`AlertName contains "cred"`<br>`AlertName contains "password"`<br>`AlertName contains "secret"` | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) | `AnalyzeResult in "Failed,Passed"` | ✓ | ✗ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `Account !contains "ANONYMOUS LOGON"`<br>`AuthenticationPackageName == "NTLM"`<br>`EventID in "2889,3000,4624,4768,4769,4776"`<br>`LmPackageName == "NTLM V1"`<br>`PackageName contains "WDigest"` | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) | `Severity == "High"`<br>`Title !contains "URL"`<br>`Title !contains "net"`<br>`Title !contains "normalization"`<br>`Title !contains "web"`<br>`Title contains "AAD"`<br>`Title contains "Account"`<br>`Title contains "Identity"`<br>`Title contains "Login"`<br>`Title contains "Sign"`<br>`Title contains "User"`<br>`Title contains "WAF"`<br>`Title contains "access"`<br>`Title contains "anti"`<br>`Title contains "app"`<br>`Title contains "auth"`<br>`Title contains "cert"`<br>`Title contains "certificate"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "dns"`<br>`Title contains "dos"`<br>`Title contains "exploit"`<br>`Title contains "impersonate"`<br>`Title contains "inject"`<br>`Title contains "intrusion"`<br>`Title contains "key"`<br>`Title contains "mal"`<br>`Title contains "mining"`<br>`Title contains "password"`<br>`Title contains "program"`<br>`Title contains "secret"`<br>`Title contains "sensitive"`<br>`Title contains "service principal"`<br>`Title contains "tool"`<br>`Title contains "travel"`<br>`Title contains "virus"`<br>`Title contains "ware"`<br>`Title contains "worm"` | ✓ | ✗ | ✓ |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) | `RecommendationState == "Unhealthy"` | ✓ | ✗ | ✗ |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | `ComplianceStandard == "Microsoft-cloud-security-benchmark"`<br>`State == "Failed"` | ✓ | ✗ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)

