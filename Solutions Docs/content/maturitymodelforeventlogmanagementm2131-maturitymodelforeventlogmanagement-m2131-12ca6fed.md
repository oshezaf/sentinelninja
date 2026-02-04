# <img src="../images/asim-badge.png" alt="ASIM" height="32"> MaturityModelForEventLogManagement_M2131

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/Workbooks/MaturityModelForEventLogManagement_M2131.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_Dns`](../asim/imdns.md)
- [`_Im_NetworkSession`](../asim/imnetworksession.md)

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,Reset user password,Update user"`<br>`OperationName !contains "external"`<br>`OperationName !contains "invite"`<br>`OperationName !contains "licnense"`<br>`OperationName contains "group"`<br>`OperationName contains "member"`<br>`OperationName contains "principal"`<br>`OperationName contains "role"`<br>`OperationName contains "user"` | ✓ | ✗ | ✓ |
| [`AWSCloudTrail`](../tables/awscloudtrail.md) |  | ✓ | ✓ | ✓ |
| [`AWSGuardDuty`](../tables/awsguardduty.md) |  | ✓ | ✓ | ✓ |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) |  | ✓ | ✓ | ✓ |
| [`AlertEvidence`](../tables/alertevidence.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category in "AzureFirewallApplicationRule,AzureFirewallNetworkRule,EntitlementManagement,FrontdoorWebApplicationFirewallLog,GatewayDiagnosticLog,GroupManagement,IKEDiagnosticLog,NetworkSecurityGroupEvent,RouteDiagnosticLog,TunnelDiagnosticLog,UserManagement,WebApplicationFirewallLogs,kube-audit"`<br>`Category contains "SQL"`<br>`ResourceProvider in "MICROSOFT.CONTAINERSERVICE,MICROSOFT.KEYVAULT"`<br>`ResourceType in "APPLICATIONGATEWAYS,AZUREFIREWALLS,CDNWEBAPPLICATIONFIREWALLPOLICIES,FRONTDOORS,PROFILES,PUBLICIPADDRESSES,SERVERS/DATABASES"` | — | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | — |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) |  | — | ✗ | ✗ |
| [`CloudAppEvents`](../tables/cloudappevents.md) |  | ✓ | ✗ | ✓ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) |  | ✓ | ✓ | ✓ |
| [`ConfigurationChange`](../tables/configurationchange.md) |  | ✓ | ✗ | — |
| [`ConfigurationData`](../tables/configurationdata.md) |  | ✓ | ✗ | — |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ | — |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | — |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |  | ✓ | ✗ | — |
| [`DnsEvents`](../tables/dnsevents.md) |  | ✓ | ✗ | ✓ |
| [`Dynamics365Activity`](../tables/dynamics365activity.md) |  | ✓ | ✗ | ✗ |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |  | ✓ | ✗ | — |
| [`EmailEvents`](../tables/emailevents.md) |  | ✓ | ✗ | ✓ |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | — |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |  | — | — | — |
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ | — |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | — |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) |  | — | — | — |
| [`InsightsMetrics`](../tables/insightsmetrics.md) |  | ✓ | ✗ | — |
| [`IntuneAuditLogs`](../tables/intuneauditlogs.md) |  | ✓ | ✗ | — |
| [`IntuneDevices`](../tables/intunedevices.md) |  | ✓ | ✗ | — |
| [`IntuneOperationalLogs`](../tables/intuneoperationallogs.md) |  | ✓ | ✗ | — |
| [`KubeEvents_CL`](../tables/kubeevents-cl.md) |  | — | — | — |
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload == "Exchange"`<br>`RecordType == "ExchangeAdmin"` | ✓ | ✗ | ✓ |
| [`Operation`](../tables/operation.md) |  | ✗ | ✗ | — |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) |  | — | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ✓ |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ✓ |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) |  | ✓ | ✗ | — |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |  | ✓ | ✗ | — |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) |  | ✓ | ✗ | ✓ |
| [`StorageFileLogs`](../tables/storagefilelogs.md) |  | ✓ | ✗ | ✓ |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "runas"`<br>`SyslogMessage contains "sudo"`<br>`ProcessName has_any "hostd-probe,vmkwarning,vpxd-main"` | ✓ | ✓ | ✓ |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✗ | ✗ |
| [`Update`](../tables/update.md) |  | ✓ | ✗ | — |
| [`Usage`](../tables/usage.md) |  | ✗ | ✗ | — |
| [`VMComputer`](../tables/vmcomputer.md) |  | ✗ | ✗ | — |
| [`VMProcess`](../tables/vmprocess.md) |  | ✗ | ✗ | — |
| [`WindowsFirewall`](../tables/windowsfirewall.md) |  | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

