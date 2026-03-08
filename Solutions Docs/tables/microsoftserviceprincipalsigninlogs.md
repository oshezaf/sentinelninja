# MicrosoftServicePrincipalSignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MicrosoftServicePrincipalSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftserviceprincipalsigninlogs) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftserviceprincipalsigninlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AppId | string | Unique GUID representing the app ID in Entra ID. |
| AppOwnerTenantId | string | The tenant identifier of the owner of the application in Entra ID. |
| Category | string | Category of the sign-in event |
| CorrelationId | string | ID to provide sign-in trail |
| CreatedDateTime | datetime | Datetime of the sign-in activity. |
| DurationMs | long | The duration of the operation in milliseconds |
| OperationName | string | For sign-ins, this value is always Sign-in activity |
| OperationVersion | string | The REST API version that's requested by the client |
| ResourceDisplayName | string | Name of the resource that was authenticated to |
| ResourceGroup | string | Resource group for the logs |
| ResourceIdentity | string | ID of the resource that was authenticated to |
| ResourceOwnerTenantId | string | The tenant ID of the owner of the resource being authenticated to |
| ResourceServicePrincipalId | string | Service Principal Id of the resource |
| ResultSignature | string | The result of the sign-in. Can be either success or failure |
| ServicePrincipalCredentialKeyId | string | Key id of the service principal that initiated the sign-in |
| ServicePrincipalCredentialThumbprint | string | Thumbprint of the service principal that initiated the sign-in |
| ServicePrincipalId | string | ID of the service principal who initiated the sign-in |
| ServicePrincipalName | string | Service Principal Name of the service principal who initiated the sign-in |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time of the event in UTC |
| Type | string | For sign-ins, this value is always MicrosoftServicePrincipalSignInLogs |
| UniqueTokenIdentifier | string | Unique token identifier for the request |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

