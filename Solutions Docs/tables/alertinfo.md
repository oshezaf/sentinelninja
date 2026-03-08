# AlertInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Alerts from Microsoft Defender for Endpoint, Microsoft Defender for Office 365, Microsoft Defender for Cloud Apps, and Microsoft Defender for Identity, including severity information and threat categorization

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-alertinfo-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (13 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AlertId | string | Unique identifier for the alert. |
| AttackTechniques | string | MITRE ATT&CK techniques associated with the activity that triggered the alert. |
| Category | string | Type of threat indicator or breach activity identified by the alert. |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity. |
| ServiceSource | string | Product or service that provided the alert information. |
| Severity | string | Indicates the potential impact (high, medium, or low) of the threat indicator or breach activity identified by the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated. |
| Title | string | Title of the alert. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (7)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d-af20888f.md) |  |

### Hunting Queries (6)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Alerts Related to Log4j Vulnerability](../content/microsoft-defender-xdr-alerts-related-to-log4j-vulnerability-e7791695-c103-4d20-a75a-53e90788616b-ae157950.md) |  |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/microsoft-defender-xdr-devices-with-log4j-vulnerability-alerts-and-additional-other-alert-related-contex-8fe88892-3a55-4220-9141-939a8e7a15c5-0d5237c7.md) |  |
| [Microsoft Teams chat initiated by a suspicious external user](../content/microsoft-defender-xdr-microsoft-teams-chat-initiated-by-a-suspicious-external-user-b8eb3e2e-0f95-458e-b6d1-fe36a0ee8310-2a289095.md) |  |
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-74cc0176-3900-440e-b179-45d6a957145a-62723a0f.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md) |  |
| [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

