# HybridAttack-Cloud&Identity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Workbooks/HybridAttack-Cloud%26Identity.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) |  | ✓ | ✗ | ✓ |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) |  | ✓ | ✗ | ✓ |
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ✓ |
| [`AzureActivity`](../tables/azureactivity.md) | `ActivityStatusValue == "Success"`<br>`Caller contains "@"`<br>`OperationName in "Add app role assignment to service principal,Add delegated permission grant,Add service principal credentials,Admin deleted security info,Admin registered security info,Admin updated security info,Consent to application,GetBlob,ListBlobs,ListBlobsHierarchySegment,ListContainersSegment,Set domain authentication,Set federation settings on domain,User changed default security info,User deleted security info,User registered security info,User updated security info"`<br>`OperationName has_any "clusterrolebindings,rolebindings"`<br>`OperationName has_any "cronjobs,daemonsets"`<br>`OperationName has_any "cronjobs/create,daemonsets/create"`<br>`OperationNameValue == "Microsoft.Authorization/roleAssignments/delete"`<br>`OperationNameValue contains "WebApplicationFirewall"`<br>`OperationNameValue contains "azureFirewall"`<br>`OperationNameValue contains "firewallPolicies"`<br>`OperationNameValue contains "networkSecurityGroup"`<br>`OperationNameValue contains "roleAssignments"`<br>`OperationNameValue contains "routeTable"`<br>`OperationNameValue contains "routes/"`<br>`OperationNameValue contains "subnets"`<br>`OperationNameValue contains "virtualNetworkGateway"` | ✗ | ✗ | ✗ |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category == "kube-audit"`<br>`Category has "kube-audit"` | ✗ | ✗ | ✗ |
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ✗ |
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType in "MailItemsAccessed,New-InboxRule,Set-InboxRule,Set-Mailbox"` | ✓ | ✗ | ✓ |
| [`CloudAuditEvents`](../tables/cloudauditevents.md) |  | ✓ | ✗ | ✓ |
| [`CloudProcessEvents`](../tables/cloudprocessevents.md) |  | ✓ | ✗ | ✓ |
| [`CloudStorageAggregatedEvents`](../tables/cloudstorageaggregatedevents.md) |  | ✓ | ✗ | ✓ |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "0100044547"`<br>`DeviceProduct != "Cortex XDR"`<br>`DeviceProduct !has "ASM"`<br>`DeviceVendor == "Fortinet"` | ✓ | ✓ | ✓ |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ | ✓ |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | ✓ |
| [`Event`](../tables/event.md) |  | ✓ | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ✓ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ✓ |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | `StatusCode in "200,206"` | ✓ | ✗ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `ObservableKey == "ipv4-addr:value"` | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

