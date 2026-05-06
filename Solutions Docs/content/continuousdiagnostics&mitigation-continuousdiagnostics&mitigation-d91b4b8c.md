# ContinuousDiagnostics&Mitigation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContinuousDiagnostics%26Mitigation/Workbooks/ContinuousDiagnostics%26Mitigation.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ? |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) |  | ✓ | ✓ | ? |
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ? |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ? |
| [`AzureActivity`](../tables/azureactivity.md) |  | ? | ✗ | ? |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) |  | ✓ | ✗ | ? |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category in "NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceProvider == "MICROSOFT.KEYVAULT"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` | ? | ✗ | ? |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) |  | ? | ✓ | ? |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ? |
| [`ConfigurationData`](../tables/configurationdata.md) |  | ✓ | ✗ | ? |
| [`DeviceEvents`](../tables/deviceevents.md) |  | ✓ | ✗ | ? |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | ? |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ? |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) |  | ✓ | ✗ | ? |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) 🔶 |  | ? | ✓ | ? |
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) |  | ? | ✓ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) 🔶 |  | ? | ✓ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `OperationName contains "PIM"` | ✓ | ✗ | ? |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) |  | ? | ✓ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `ProductName in "Azure Active Directory Identity Protection,Azure Security Center for IoT,Microsoft 365 Insider Risk Management,Microsoft Defender Advanced Threat Protection"` | ✓ | ✗ | ? |
| [`SecurityBaseline`](../tables/securitybaseline.md) | `AnalyzeResult in "Failed,Passed"` | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ? |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ? |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) |  | ✓ | ✗ | ? |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | `RecommendationDisplayName contains "access"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "agent"`<br>`RecommendationDisplayName contains "aks"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "auth"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "bound"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "cmk"`<br>`RecommendationDisplayName contains "collect"`<br>`RecommendationDisplayName contains "contain"`<br>`RecommendationDisplayName contains "data"`<br>`RecommendationDisplayName contains "detect"`<br>`RecommendationDisplayName contains "edr"`<br>`RecommendationDisplayName contains "endpoint"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "event"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "gateway"`<br>`RecommendationDisplayName contains "http"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "incident"`<br>`RecommendationDisplayName contains "internet"`<br>`RecommendationDisplayName contains "intrusion"`<br>`RecommendationDisplayName contains "just"`<br>`RecommendationDisplayName contains "key"`<br>`RecommendationDisplayName contains "kube"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network"`<br>`RecommendationDisplayName contains "port"`<br>`RecommendationDisplayName contains "priv"`<br>`RecommendationDisplayName contains "privacy"`<br>`RecommendationDisplayName contains "protection"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "root"`<br>`RecommendationDisplayName contains "sql"`<br>`RecommendationDisplayName contains "storage"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "supply"`<br>`RecommendationDisplayName contains "tls"`<br>`RecommendationDisplayName contains "token"`<br>`RecommendationDisplayName contains "traffic"`<br>`RecommendationDisplayName contains "trust"`<br>`RecommendationDisplayName contains "url"`<br>`RecommendationDisplayName contains "user"`<br>`RecommendationDisplayName contains "web"`<br>`RecommendationState in "Healthy,NotApplicable,Removed,Unhealthy"` | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ? |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) |  | ✓ | ✗ | ? |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ? |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✓ | ? |
| [`WindowsFirewall`](../tables/windowsfirewall.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)

