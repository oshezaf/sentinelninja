# IdentityQueryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Queries for Active Directory objects, such as users, groups, devices, and domains

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityqueryevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityqueryevents-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityqueryevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountDisplayName | string | Name of the account user displayed in the address book |
| AccountDomain | string | Domain of the account |
| AccountName | string | User name of the account |
| AccountObjectId | string | Unique identifier for the account in Azure AD |
| AccountSid | string | Security Identifier (SID) of the account |
| AccountUpn | string | User principal name (UPN) of the account |
| ActionType | string | Type of activity that triggered the event |
| AdditionalFields | dynamic | Additional information about the entity or event |
| Application | string | Application that performed the recorded action |
| DestinationDeviceName | string | Name of the device running the server application that processed the recorded action |
| DestinationIPAddress | string | IP address of the device running the server application that processed the recorded action |
| DestinationPort | string | Destination port of related network communications |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| IPAddress | string | IP address assigned to the endpoint and used during related network communications |
| Location | string | City, country, or other geographic location associated with the event |
| Port | string | TCP port used during communication |
| Protocol | string | Protocol used during the communication |
| Query | string | String used to run the query |
| QueryTarget | string | Name of user, group, device, domain, or any other entity type being queried |
| QueryType | string | Type of query, such as QueryGroup, QueryUser, or EnumerateUsers |
| ReportId | string | Unique identifier for the event |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetAccountDisplayName | string | Display name of the account that the recorded action was applied to |
| TargetAccountUpn | string | User principal name (UPN) of the account that the recorded action was applied to |
| TargetDeviceName | string | Fully qualified domain name (FQDN) of the device that the recorded action was applied to |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

