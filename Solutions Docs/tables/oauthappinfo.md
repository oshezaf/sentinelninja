# OAuthAppInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Microsoft 365-connected OAuth applications registered with Microsoft Entra ID and available in the Defender for Cloud Apps app governance capability

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/oauthappinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-oauthappinfo-table) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/oauthappinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AddedOnTime | datetime | Date and time when the application was registered |
| AppName | string | The application's display name as exposed by the associated service principal |
| AppOrigin | string | Specifies whether the app is internal to the organization or registered in an external tenant |
| AppOwnerTenantId | string | Specifies the ID of the tenant where the app was registered |
| AppStatus | string | Status of the app; can be: Enabled, DisabledByMicrosoft, DisabledByAppGovernancePolicy, DisabledByUser, Deleted |
| ConsentedUsersCount | int | Count of users who have consented to the app |
| IsAdminConsented | bool | Value is True if a user has provided admin consent to the app on behalf of all the users in the org, otherwise False |
| LastModifiedTime | datetime | Timestamp when the app was last modified |
| LastUsedTime | datetime | Date and time when the app last signed in |
| OAuthAppId | string | The unique identifier for the app as assigned by Microsoft Entra ID |
| Permissions | dynamic | Contains an array of permission objects |
| PrivilegeLevel | string | The privilege level of the app based on the highest classified permission granted to the app |
| ReportId | string | Unique identifier for the record |
| ServicePrincipalId | string | The unique identifier for the service principal instance of the application in the tenant |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |
| VerifiedPublisher | dynamic | Specifies details about the verified publisher of the application which this service principal represents |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

