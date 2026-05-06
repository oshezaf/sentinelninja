# ZeroTrustTIC3

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ? |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) |  | ✓ | ✓ | ? |
| [`AlertEvidence`](../tables/alertevidence.md) | `Title contains "IDS"`<br>`Title contains "IPS"`<br>`Title contains "anomal"`<br>`Title contains "auth"`<br>`Title contains "behavior"`<br>`Title contains "data"`<br>`Title contains "deception"`<br>`Title contains "denial"`<br>`Title contains "detonation"`<br>`Title contains "dns"`<br>`Title contains "dos"`<br>`Title contains "dynamic"`<br>`Title contains "email"`<br>`Title contains "exfil"`<br>`Title contains "exploit"`<br>`Title contains "fusion"`<br>`Title contains "honeytoken"`<br>`Title contains "intrusion"`<br>`Title contains "learning"`<br>`Title contains "login"`<br>`Title contains "loss"`<br>`Title contains "mal"`<br>`Title contains "malware"`<br>`Title contains "password"`<br>`Title contains "phish"`<br>`Title contains "sand"`<br>`Title contains "url"` | ✓ | ✗ | ? |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ? |
| [`AzureActivity`](../tables/azureactivity.md) | `ActivityStatusValue in "Succeeded,Success"`<br>`OperationNameValue startswith "Microsoft.Logic"` | ? | ✗ | ? |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category in "ApplicationGatewayFirewallLog,AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule,DDoSMitigationReports,FrontdoorWebApplicationFirewallLog,NetworkSecurityGroupEvent,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`Resource == "SOC-NS-AG-WAFV2"`<br>`ResourceProvider == "MICROSOFT.KEYVAULT"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES"`<br>`msg_s !has ". Url"`<br>`msg_s !has "No rule matched"`<br>`msg_s !has "Reason:"`<br>`msg_s !has "Rule Collection"`<br>`msg_s !has "TLS extension was missing"`<br>`msg_s !has "Url"`<br>`msg_s !has "Web Category:"`<br>`msg_s has ". No rule matched"`<br>`msg_s has ". Url"`<br>`msg_s has "Reason:"`<br>`msg_s has "Rule Collection Group"`<br>`msg_s has "Url"`<br>`msg_s has "Web Category:"` | ? | ✗ | ? |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) |  | ? | ✓ | ? |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ? |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |  | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ? |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) |  | ✓ | ✗ | ? |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ? |
| [`EmailEvents`](../tables/emailevents.md) |  | ✓ | ✗ | ? |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | ? |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) 🔶 |  | ? | ✓ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) 🔶 |  | ? | ✓ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,AzureFirewallThreatIntelLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`RecordType == "MicrosoftTeams"` | ✓ | ✗ | ? |
| [`Operation`](../tables/operation.md) |  | ? | ✗ | ? |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) |  | ? | ✓ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName contains "mal"`<br>`Entities contains "Fail"`<br>`Entities contains "inbound"`<br>`Entities contains "outbound"`<br>`ProductName in "Azure Active Directory Identity Protection,Azure Security Center for IoT,Microsoft 365 Insider Risk Management"` | ✓ | ✗ | ? |
| [`SecurityBaseline`](../tables/securitybaseline.md) | `AnalyzeResult in "Failed,Passed"` | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ? |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ? |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | `RecommendationDisplayName contains "JIT"`<br>`RecommendationDisplayName contains "Just"`<br>`RecommendationDisplayName contains "VPC"`<br>`RecommendationDisplayName contains "Web Application Firewall"`<br>`RecommendationDisplayName contains "account"`<br>`RecommendationDisplayName contains "adaptive"`<br>`RecommendationDisplayName contains "admin"`<br>`RecommendationDisplayName contains "application gateway"`<br>`RecommendationDisplayName contains "audit"`<br>`RecommendationDisplayName contains "authentication"`<br>`RecommendationDisplayName contains "authorized"`<br>`RecommendationDisplayName contains "automation"`<br>`RecommendationDisplayName contains "back"`<br>`RecommendationDisplayName contains "balance"`<br>`RecommendationDisplayName contains "cert"`<br>`RecommendationDisplayName contains "certificate"`<br>`RecommendationDisplayName contains "config"`<br>`RecommendationDisplayName contains "deception"`<br>`RecommendationDisplayName contains "defender"`<br>`RecommendationDisplayName contains "denial"`<br>`RecommendationDisplayName contains "disaster"`<br>`RecommendationDisplayName contains "dns"`<br>`RecommendationDisplayName contains "encrypt"`<br>`RecommendationDisplayName contains "endpoint protection"`<br>`RecommendationDisplayName contains "express"`<br>`RecommendationDisplayName contains "firewall"`<br>`RecommendationDisplayName contains "geo"`<br>`RecommendationDisplayName contains "guest"`<br>`RecommendationDisplayName contains "honey"`<br>`RecommendationDisplayName contains "identity"`<br>`RecommendationDisplayName contains "java"`<br>`RecommendationDisplayName contains "load"`<br>`RecommendationDisplayName contains "log"`<br>`RecommendationDisplayName contains "logic"`<br>`RecommendationDisplayName contains "malware"`<br>`RecommendationDisplayName contains "network access"`<br>`RecommendationDisplayName contains "network gateway"`<br>`RecommendationDisplayName contains "network security group"`<br>`RecommendationDisplayName contains "notification"`<br>`RecommendationDisplayName contains "password"`<br>`RecommendationDisplayName contains "patch"`<br>`RecommendationDisplayName contains "playbook"`<br>`RecommendationDisplayName contains "private"`<br>`RecommendationDisplayName contains "privilege"`<br>`RecommendationDisplayName contains "protected by Azure Firewall"`<br>`RecommendationDisplayName contains "proxy"`<br>`RecommendationDisplayName contains "recover"`<br>`RecommendationDisplayName contains "redundant"`<br>`RecommendationDisplayName contains "region"`<br>`RecommendationDisplayName contains "safe"`<br>`RecommendationDisplayName contains "scale"`<br>`RecommendationDisplayName contains "security group"`<br>`RecommendationDisplayName contains "segment"`<br>`RecommendationDisplayName contains "shared"`<br>`RecommendationDisplayName contains "subnet"`<br>`RecommendationDisplayName contains "update"`<br>`RecommendationDisplayName contains "upgrade"`<br>`RecommendationDisplayName contains "version"`<br>`RecommendationDisplayName contains "vpn"`<br>`RecommendationDisplayName contains "vuln"`<br>`RecommendationDisplayName contains "watcher"`<br>`RecommendationDisplayName contains "web apps"`<br>`RecommendationState in "Healthy,Unhealthy"` | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) | `AppDisplayName has_any "teams"` | ✓ | ✗ | ? |
| [`StorageTableLogs`](../tables/storagetablelogs.md) |  | ✓ | ✗ | ? |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ | ? |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✓ | ? |
| [`Usage`](../tables/usage.md) |  | ? | ✗ | ? |
| [`VMConnection`](../tables/vmconnection.md) |  | ? | ✗ | ? |
| [`WindowsFirewall`](../tables/windowsfirewall.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

