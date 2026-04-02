# ZeroTrustTIC3

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroTrust%28TIC3.0%29/Workbooks/ZeroTrustTIC3.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ✓ |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) |  | ✓ | ✓ | ✓ |
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,AzureFirewallThreatIntelLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"` | ✗ | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category in "ApplicationGatewayFirewallLog,AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule,DDoSMitigationReports,FrontdoorWebApplicationFirewallLog,NetworkSecurityGroupEvent,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`Resource == "SOC-NS-AG-WAFV2"`<br>`ResourceProvider == "MICROSOFT.KEYVAULT"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) |  | ✗ | ✓ | ✗ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ✓ |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |  | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ✓ |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) |  | ✓ | ✗ | ✗ |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ? |
| [`EmailEvents`](../tables/emailevents.md) |  | ✓ | ✗ | ✓ |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | ? |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) 🔶 |  | ? | ✓ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) 🔶 |  | ? | ✓ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `RecordType == "MicrosoftTeams"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) |  | ✓ | ✓ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) |  | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`StorageTableLogs`](../tables/storagetablelogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✓ | ✗ |
| [`Usage`](../tables/usage.md) |  | ? | ✗ | ? |
| [`VMConnection`](../tables/vmconnection.md) |  | ? | ✗ | ? |
| [`WindowsFirewall`](../tables/windowsfirewall.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

