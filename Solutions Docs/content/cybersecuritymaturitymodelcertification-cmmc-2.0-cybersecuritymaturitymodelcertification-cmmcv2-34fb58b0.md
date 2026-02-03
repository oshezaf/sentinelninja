# CybersecurityMaturityModelCertification_CMMCV2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0/Workbooks/CybersecurityMaturityModelCertification_CMMCV2.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) |  | ✓ | ✗ |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"` | ✓ | ✗ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`AzureActivity`](../tables/azureactivity.md) |  | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "AzureFirewallApplicationRule"` | — | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ |
| [`ConfigurationChange`](../tables/configurationchange.md) |  | ✓ | ✗ |
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "Add member to role,Add user,FileCreated,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user,UsbDriveMounted"` | ✓ | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ |
| [`InformationProtectionLogs_CL`](../tables/informationprotectionlogs-cl.md) |  | — | — |
| [`OfficeActivity`](../tables/officeactivity.md) | `RecordType == "MicrosoftTeams"` | ✓ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityBaseline`](../tables/securitybaseline.md) |  | ✓ | ✗ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ |
| [`SecurityRecommendation`](../tables/securityrecommendation.md) |  | ✓ | ✗ |
| [`SecurityRegulatoryCompliance`](../tables/securityregulatorycompliance.md) |  | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |
| [`Usage`](../tables/usage.md) |  | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)

