# CortexXpanseAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (76 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20Xpanse%20CCF%5CData%20Connectors%5CCortexXpanse_ccp/CortexXpanse_Table.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| ActionCountry | dynamic |
| ActionExternalHostname | string |
| ActionLocalIp | string |
| ActionLocalIpV6 | string |
| ActionLocalPort | string |
| ActionPretty | string |
| ActionRemoteIp | dynamic |
| ActionRemoteIpV6 | dynamic |
| ActionRemotePort | dynamic |
| AlertId | string |
| AlertType | string |
| AsmAlertCategories | dynamic |
| AssetIdentifiers | dynamic |
| AssetIds | dynamic |
| AttackSurfaceRuleId | string |
| AttackSurfaceRuleName | string |
| AwsCloudTags | dynamic |
| AzureCloudTags | dynamic |
| BusinessUnitHierarchies | dynamic |
| CaseId | int |
| Category | string |
| Certificate | dynamic |
| CertificateSubjectOrganization | string |
| CloudManagementStatus | string |
| CloudProvider | string |
| CloudProviders | dynamic |
| CountryCodes | dynamic |
| DeduplicateTokens | string |
| Description | string |
| DomainNames | dynamic |
| DynamicFields | dynamic |
| EndMatchAttemptTs | datetime |
| EndpointId | string |
| EventId | string |
| Events | string |
| EventTimestamp | dynamic |
| EventType | string |
| ExternalId | string |
| ExternallyDetectedVersion | string |
| FilterRuleId | string |
| GcpCloudTags | dynamic |
| HostIp | string |
| HostName | string |
| ImageName | string |
| IntegrationSource | string |
| Ipv4Addresses | dynamic |
| Ipv6Addresses | dynamic |
| IsWhitelisted | bool |
| LastModifiedTs | datetime |
| LastObserved | datetime |
| LocalInsertTs | datetime |
| MacAddresses | dynamic |
| MaliciousUrls | dynamic |
| MatchingServiceRuleId | string |
| MatchingStatus | string |
| MitreTacticIdAndName | dynamic |
| MitreTechniqueIdAndName | dynamic |
| Name | string |
| PortNumber | int |
| PortProtocol | string |
| ProjectName | string |
| RemediationGuidance | string |
| ResolutionComment | string |
| ResolutionStatus | string |
| ResourceSubType | string |
| ResourceType | string |
| ServiceIds | dynamic |
| Severity | string |
| Source | string |
| Starred | bool |
| Tags | dynamic |
| TimeGenerated | datetime |
| UserName | string |
| WebsiteIds | dynamic |
| XpanseFirstObserved | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Palo Alto Cortex Xpanse CCF](../solutions/palo-alto-cortex-xpanse-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](../connectors/paloaltoexpanseccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

