# IdentityEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Information about identity events obtained from other cloud identity service providers

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityevents-table) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountDisplayName | string | Name displayed in the address book entry for the account user. This is usually a combination of the given name, middle initial, and surname of the user. |
| AccountId | string | Unique identifier for the account in the source application |
| AccountType | string | Type of user account, indicating its general role like User, SystemPrincipal |
| AccountUpn | string | Alternate ID, email, or name for the account in the source application |
| ActionFailureReason | string | Information explaining why the recorded action failed |
| ActionResult | string | Result of the action |
| ActionType | string | Type of activity that triggered the event in the raw format received from the source application |
| AdditionalFields | dynamic | Additional information about the entity or event |
| Application | string | The source application where this event was received from |
| ApplicationEventId | string | Raw event ID provided by the source application |
| ApplicationInstanceId | string | Domain of the source application |
| ApplicationSessionId | string | Raw session ID provided by the source application |
| IPAddress | string | IP address assigned to the device and used during related network communications |
| RawEventData | dynamic | Full raw event information from the source application in JSON format |
| ReportId | string | Unique identifier for the event |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TargetObjects | dynamic | List of the target objects of this activity. Target object can be user, group, role, domain, application, and more. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |
| UserAgent | string | User agent information from the web browser or other client application |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

