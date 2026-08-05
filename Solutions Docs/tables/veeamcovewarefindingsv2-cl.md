# VeeamCovewareFindingsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam%5CData%20Connectors%5CVeeam_CCF/table_VeeamCovewareFindingsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Artifact | string | File or process path |
| Country | string | Geographic location of the event |
| CovewareHostName | string | Coveware server hostname |
| EventActivity | string | Description of security activity |
| EventTime | datetime | Timestamp when event occurred |
| EventType | string | Type of security event |
| FirstRunOrAccessed | datetime | First time artifact was run or accessed |
| Hostname | string | Machine hostname where event occurred |
| Id | string | Unique finding identifier |
| MachineId | string | Unique machine identifier |
| Md5Hash | string | MD5 hash of the file |
| RiskLevel | string | Security risk level assessment |
| ScanTime | datetime | Timestamp when scan was performed |
| Sha1Hash | string | SHA1 hash of the file |
| Sha256Hash | string | SHA256 hash of the file |
| TechniqueId | string | MITRE ATT&CK technique identifier |
| TimeGenerated | datetime |  |
| Username | string | User account associated with event |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Veeam](../solutions/veeam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Veeam Data Connector (via Codeless Connector Framework)](../connectors/veeamconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

