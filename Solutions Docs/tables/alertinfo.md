# AlertInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AlertInfo table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (13 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AlertId | string | Unique identifier for the alert. |
| AttackTechniques | string | MITRE ATT&amp;CK techniques associated with the activity that triggered the alert. |
| Category | string | Type of threat indicator or breach activity identified by the alert. |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity. |
| ServiceSource | string | Product or service that provided the alert information. |
| Severity | string | Indicates the potential impact (high, medium, or low) of the threat indicator or breach activity identified by the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated. |
| Title | string | Title of the alert. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AlertInfo Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo)

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (7)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"`

| Analytic Rule |
|:-------------|
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d-af20888f.md) |

### Hunting Queries (6)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Alerts Related to Log4j Vulnerability](../content/microsoft-defender-xdr-alerts-related-to-log4j-vulnerability-e7791695-c103-4d20-a75a-53e90788616b-ae157950.md) | `Title == "Suspicious script launched"` |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/microsoft-defender-xdr-devices-with-log4j-vulnerability-alerts-and-additional-other-alert-related-contex-8fe88892-3a55-4220-9141-939a8e7a15c5-0d5237c7.md) |  |
| [Microsoft Teams chat initiated by a suspicious external user](../content/microsoft-defender-xdr-microsoft-teams-chat-initiated-by-a-suspicious-external-user-b8eb3e2e-0f95-458e-b6d1-fe36a0ee8310-2a289095.md) | `Title == "Microsoft Teams chat initiated by a suspicious external user"` |
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-74cc0176-3900-440e-b179-45d6a957145a-62723a0f.md) | `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"` |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md) | `Title contains "Email messages containing malicious URL removed after delivery"` |
| [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md) | `Title contains "Potentially malicious"` |

## Selection Criteria Summary (5 criteria, 6 total references)

References by type: 0 connectors, 6 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"` | - | 2 | - | - | **2** |
| `Title == "Microsoft Teams chat initiated by a suspicious external user"` | - | 1 | - | - | **1** |
| `Title contains "Email messages containing malicious URL removed after delivery"` | - | 1 | - | - | **1** |
| `Title contains "Potentially malicious"` | - | 1 | - | - | **1** |
| `Title == "Suspicious script launched"` | - | 1 | - | - | **1** |
| **Total** | **0** | **6** | **0** | **0** | **6** |

### Title

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `An active \` | - | 2 | - | - | **2** |
| `Echo command over pipe on localhost` | - | 2 | - | - | **2** |
| `Event log was cleared` | - | 2 | - | - | **2** |
| `File backups were deleted` | - | 2 | - | - | **2** |
| `Known attack framework activity was observed` | - | 2 | - | - | **2** |
| `Suspicious \` | - | 2 | - | - | **2** |
| `Suspicious decoded content` | - | 2 | - | - | **2** |
| `Suspicious process launch by Rundll32.exe` | - | 2 | - | - | **2** |
| `\` | - | 2 | - | - | **2** |
| `behavior was prevented` | - | 2 | - | - | **2** |
| `malware was detected` | - | 2 | - | - | **2** |
| `Microsoft Teams chat initiated by a suspicious external user` | - | 1 | - | - | **1** |
| `contains Email messages containing malicious URL removed after delivery` | - | 1 | - | - | **1** |
| `contains Potentially malicious` | - | 1 | - | - | **1** |
| `Suspicious script launched` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

