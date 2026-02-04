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
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ✓ |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) |  | ✓ | ✓ | ✓ |
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md) |  | ✓ | ✗ | — |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category in "NetworkSecurityGroupEvent,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceProvider == "MICROSOFT.KEYVAULT"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` | — | ✗ | ✗ |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) |  | — | ✗ | ✗ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ✓ |
| [`ConfigurationData`](../tables/configurationdata.md) |  | ✓ | ✗ | — |
| [`DeviceEvents`](../tables/deviceevents.md) |  | ✓ | ✗ | ✓ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | — |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | — |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ✓ |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) |  | ✓ | ✗ | ✗ |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |  | — | — | — |
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) |  | — | ✗ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | — |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) |  | — | — | — |
| [`OfficeActivity`](../tables/officeactivity.md) |  | ✓ | ✗ | ✓ |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) |  | — | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ | — |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SecurityNestedRecommendation`](../tables/securitynestedrecommendation.md) |  | ✓ | ✗ | — |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) |  | ✓ | ✗ | — |
| [`SigninLogs`](../tables/signinlogs.md) | `OperationName contains "PIM"` | ✓ | ✗ | ✓ |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✗ | ✗ |
| [`WindowsFirewall`](../tables/windowsfirewall.md) |  | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)

