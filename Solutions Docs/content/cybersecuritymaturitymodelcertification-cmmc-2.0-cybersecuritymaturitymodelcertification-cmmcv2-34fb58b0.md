# CybersecurityMaturityModelCertification_CMMCV2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0/Workbooks/CybersecurityMaturityModelCertification_CMMCV2.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"`<br>`OperationNameValue contains "Insights"` | ✗ | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category == "AzureFirewallApplicationRule"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`ConfigurationChange`](../tables/configurationchange.md) |  | ✓ | ✗ | ? |
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "FileCreated,UsbDriveMounted"` | ✓ | ✗ | ✓ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | ✓ | ✗ | ? |
| [`Event`](../tables/event.md) | `RenderedDescription contains "Hello"` | ✓ | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ? |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) 🔶 |  | ? | ✓ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `RecordType == "MicrosoftTeams"` | ✓ | ✗ | ✓ |
| [`SecurityAlert`](../tables/securityalert.md) | `ProductName == "Microsoft 365 Insider Risk Management"` | ✓ | ✗ | ✓ |
| [`SecurityBaseline`](../tables/securitybaseline.md) | `AnalyzeResult in "Failed,Passed"` | ✓ | ✗ | ? |
| [`SecurityIncident`](../tables/securityincident.md) | `Classification in "BenignPositive,FalsePositive,TruePositive,Undetermined"`<br>`Severity == "High"`<br>`Title contains "PII"`<br>`Title contains "USB"`<br>`Title contains "access"`<br>`Title contains "account"`<br>`Title contains "backdoor"`<br>`Title contains "beacon"`<br>`Title contains "brute"`<br>`Title contains "c2"`<br>`Title contains "confidential"`<br>`Title contains "cred"`<br>`Title contains "data"`<br>`Title contains "deny"`<br>`Title contains "drive"`<br>`Title contains "execution"`<br>`Title contains "exfil"`<br>`Title contains "exploit"`<br>`Title contains "file"`<br>`Title contains "intellectual"`<br>`Title contains "leak"`<br>`Title contains "logon"`<br>`Title contains "loss"`<br>`Title contains "media"`<br>`Title contains "removable"`<br>`Title contains "restricted"`<br>`Title contains "sensitive"`<br>`Title contains "shared"`<br>`Title contains "sign"`<br>`Title contains "software"`<br>`Title contains "spill"`<br>`Title contains "storage"`<br>`Title contains "test"`<br>`Title contains "tool"`<br>`Title contains "trojan"`<br>`Title contains "usb"`<br>`Title contains "virus"`<br>`Title contains "ware"` | ✓ | ✗ | ✓ |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | `RecommendationState in "Healthy,Unhealthy"` | ✓ | ✗ | ? |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) | `ComplianceStandard == "NIST-SP-800-171-R2"` | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) | `AuthenticationRequirement == "multiFactorAuthentication"` | ✓ | ✗ | ✓ |
| [`Usage`](../tables/usage.md) |  | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)

