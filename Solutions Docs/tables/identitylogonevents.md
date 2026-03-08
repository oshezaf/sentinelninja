# IdentityLogonEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Authentication events on Active Directory and Microsoft online services

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitylogonevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitylogonevents)

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
| DeviceType | string | Type of device |
| FailureReason | string | Information explaining why the recorded action failed |
| IPAddress | string | IP address assigned to the endpoint and used during related network communications |
| ISP | string | Internet service provider (ISP) associated with the endpoint IP address |
| LastSeenForUser | dynamic | Number of days since each statistical feature for the user was last seen |
| Location | string | City, country, or other geographic location associated with the event |
| LogonType | string | Type of logon session |
| OSPlatform | string | Platform of the operating system running on the machine |
| Port | string | TCP port used during communication |
| Protocol | string | Network protocol used |
| ReportId | string | Unique identifier for the event |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetAccountDisplayName | string | Display name of the account that the recorded action was applied to |
| TargetDeviceName | string | Fully qualified domain name (FQDN) of the device that the recorded action was applied to |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |
| UncommonForUser | dynamic | List of features observed to be statistically uncommon for the user that performed the activity |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential Kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-12134de5-361b-427c-a1a0-d43f40a593c4-880800c1.md) |

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-35ca729c-04b4-4f6c-b383-caed1b85226e-9755135a.md) |

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "LogonFailed,LogonSuccess"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |

## Selection Criteria Summary (2 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "LogonSuccess"` | - | 2 | - | - | **2** |
| `ActionType in "LogonFailed,LogonSuccess"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LogonSuccess` | - | 3 | - | - | **3** |
| `LogonFailed` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

