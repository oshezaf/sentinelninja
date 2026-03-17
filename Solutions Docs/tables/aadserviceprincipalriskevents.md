# AADServicePrincipalRiskEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADServicePrincipalRiskEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalriskevents) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalriskevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Activity | string | Indicates the activity type the detected risk is linked to. |
| ActivityDateTime | datetime | Date and time when the risky activity occurred in UTC. |
| AdditionalInfo | dynamic | Additional information associated with the risk detection in JSON format. |
| AppId | string | The unique identifier for the associated application. |
| CorrelationId | string | Correlation ID of the sign-in activity associated with the risk detection. Nullable. |
| DetectedDateTime | datetime | Date and time when the risk was detected in UTC. |
| DetectionTimingType | string | Timing of the detected risk , whether real-time or offline. |
| Id | string | Unique identifier of the risk detection. Inherited from entity. |
| IpAddress | string | Provides the IP address of the client from where the risk occurred. |
| KeyIds | dynamic | The unique identifier (GUID) for the key credential associated with the risk detection. |
| LastUpdatedDateTime | datetime | Date and time when the risk detection was last updated in UTC. |
| Location | dynamic | Location of the sign-in. |
| OperationName | string | Name of the operation. |
| RequestId | string | Request identifier of the sign-in activity associated with the risk detection. Nullable. |
| RiskDetail | string | Details of the detected risk. Note: Details for this property are only available for Azure AD Premium P2 customers. |
| RiskEventType | string | The type of risk event detected. |
| RiskLevel | string | Level of the detected risk. Note: details for this property are only available for Azure AD Premium P2 customers. |
| RiskState | string | The state of a detected risky service principal or sign-in activity. |
| ServicePrincipalDisplayName | string | The display name for the service principal. |
| ServicePrincipalId | string | The unique identifier for the service principal. |
| Source | string | Source of the risk detection. For example, identityProtection. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC. |
| TokenIssuerType | string | Indicates the type of token issuer for the detected sign-in risk. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (5)

### Workbooks (5)

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

