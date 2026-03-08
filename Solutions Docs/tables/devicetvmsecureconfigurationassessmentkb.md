# DeviceTvmSecureConfigurationAssessmentKB

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Knowledge base of various security configurations used by Microsoft Defender Vulnerability Management to assess devices; includes mappings to various standards and benchmarks

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsecureconfigurationassessmentkb) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicetvmsecureconfigurationassessmentkb-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicetvmsecureconfigurationassessmentkb)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ConfigurationBenchmarks | dynamic | List of industry benchmarks which recommend the same or similar configuration. |
| ConfigurationCategory | string | Category or grouping to which the configuration belongs. |
| ConfigurationDescription | string | Description of the configuration. |
| ConfigurationId | string | Unique identifier for a specific configuration. |
| ConfigurationImpact | real | Rated impact of the configuration to the overall configuration score (1-10). |
| ConfigurationName | string | Display name of the configuration. |
| ConfigurationSubcategory | string | Subcategory or subgrouping to which the configuration belongs. Commonly, this describes specific capabilities or features. |
| RelatedMitreTactics | dynamic | Related tactics from Mitre knowledge base. |
| RelatedMitreTechniques | dynamic | Related techniques from Mitre knowledge base. |
| RemediationOptions | string | Recommended actions to reduce or address any associated risks |
| RiskDescription | string | Description of any associated risks. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Tags | dynamic | Labels representing various attributes, used to identify or categorize a security configuration. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated. |
| Timestamp | datetime | Date and time when the record was generated |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

