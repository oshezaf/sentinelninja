# OktaSystemLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for OktaSystemLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/oktasystemlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (62 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/oktasystemlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActingAppName | string | The name of the application initiating the action. |
| ActingAppType | string | The type of the application initiating the action (e.g., Browser, API client). |
| ActorDetailEntry | dynamic | Detailed information about the actor performing the action, if available. |
| ActorDisplayName | string | The display name of the actor performing the action. |
| ActorSessionId | string | The session ID associated with the actor performing the action. |
| ActorUserId | string | The user ID of the actor performing the action, if applicable. |
| ActorUserIdType | string | The type of user ID for the actor (e.g., OktaId). |
| ActorUsername | string | The username of the actor performing the action. |
| ActorUsernameType | string | The type of username for the actor (e.g., UPN). |
| ActorUserType | string | The type of the actor (e.g., Regular, System Principal). |
| AuthenticationContextAuthenticationProvider | string | The authentication provider used in the context of the action. |
| AuthenticationContextAuthenticationStep | int | The step in the authentication process when the action occurred. |
| AuthenticationContextCredentialProvider | string | The credential provider used during the authentication process. |
| AuthenticationContextInterface | string | The interface used during the authentication process (e.g., web, mobile). |
| AuthenticationContextIssuerId | string | The ID of the issuer involved in the authentication process. |
| AuthenticationContextIssuerType | string | The type of the issuer involved in the authentication process. |
| DebugData | dynamic | Additional debugging data related to the event. |
| DvcAction | string | The result of the device action (e.g., Allow, Deny, Partial). |
| EventMessage | string | A descriptive message associated with the event. |
| EventOriginalResultDetails | string | Details of the original result of the event outcome. |
| EventOriginalType | string | The original type of the event before transformation. |
| EventOriginalUid | string | The unique identifier for the original event. |
| EventResult | string | The high-level result of the event (e.g., Success, Failure). |
| EventSeverity | string | The severity level of the event (e.g., Informational, High). |
| HttpUserAgent | string | The raw user-agent string of the client initiating the event. |
| LegacyEventType | string | The legacy type identifier for the event, if applicable. |
| LogonMethod | string | The method used for logging in (e.g., password, token). |
| OriginalActorAlternateId | string | The alternate ID of the actor in the original event data. |
| OriginalClientDevice | string | The type of client device initiating the event (e.g., Computer). |
| OriginalOutcomeResult | string | The raw outcome result of the original event. |
| OriginalSeverity | string | The raw severity level of the original event. |
| OriginalTarget | dynamic | The original target(s) involved in the event. |
| OriginalUserId | string | The original user ID in the event data. |
| OriginalUserType | string | The type of user in the original event data. |
| Request | dynamic | Details of the request associated with the event. |
| SecurityContextAsNumber | int | The autonomous system (AS) number in the security context. |
| SecurityContextAsOrg | string | The organization associated with the AS number in the security context. |
| SecurityContextDomain | string | The domain involved in the security context. |
| SecurityContextIsProxy | bool | Indicates whether a proxy is used in the security context. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcDeviceType | string | The type of the source device (e.g., Computer). |
| SrcDvcId | string | The unique identifier for the source device. |
| SrcDvcIdType | string | The type of source device ID (e.g., OktaId). |
| SrcDvcOs | string | The operating system of the source device. |
| SrcGeoCity | string | The city of the source device's geographic location. |
| SrcGeoCountry | string | The country of the source device's geographic location. |
| SrcGeoLatitude | real | The latitude of the source device's geographic location. |
| SrcGeoLongtitude | real | The longitude of the source device's geographic location. |
| SrcGeoPostalCode | string | The postal code of the source device's geographic location. |
| SrcGeoRegion | string | The region/state of the source device's geographic location. |
| SrcIpAddr | string | The IP address of the source device. |
| SrcIsp | string | The Internet Service Provider (ISP) of the source device. |
| SrcZone | string | The network zone of the source device. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the event was generated. |
| TransactionDetail | dynamic | Details about the transaction associated with the event. |
| TransactionId | string | The unique identifier of the transaction. |
| TransactionType | string | The type of transaction associated with the event. |
| Type | string | The name of the table |
| Version | string | The version of the event format or schema. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

