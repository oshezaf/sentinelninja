# ESETInspectV2_CL

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

## Schema (39 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform%5CData%20Connectors%5CESETProtectPlatform_CCF/table_ESETInspectV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| BaseUrl | string | Base URL of the ESET Inspect server (enriched from connector configuration) |
| ComputerId | string | Computer identifier |
| ComputerName | string | Name of the computer where detection occurred |
| ComputerUuid | string | UUID of the computer |
| ConnectorName | string | Connector Friendly Name assigned during connector setup |
| CreationTime | datetime | Timestamp when the detection was created |
| DeepLink | string | Deep link URL to view this detection in ESET Inspect console |
| DetectionType | int | Type of detection (numeric: 0=UnknownAlarm, 1=RuleActivated, 2=MalwareFoundOnDisk, 3=MalwareFoundInMemory, 4=ExploitDetected, 5=FirewallDetection, 7=BlockedAddress, 8=CryptoBlockerDetection) |
| DetectionTypeDescription | string | Human-readable description of the detection type (enriched from DetectionType field) |
| Handled | bool | Whether the detection has been handled |
| Id | int | Unique detection ID |
| ModuleFirstSeenLocally | datetime | When the module was first seen locally |
| ModuleId | string | Module identifier |
| ModuleLastExecutedLocally | datetime | When the module was last executed locally |
| ModuleLgAge | int | LiveGrid age of the module |
| ModuleLgPopularity | int | LiveGrid popularity of the module |
| ModuleLgReputation | int | LiveGrid reputation of the module |
| ModuleName | string | Name of the module/file |
| ModuleSha1 | string | SHA1 hash of the module |
| ModuleSignatureType | int | Module signature type (90=Trusted, 80=Valid, 75=AdHoc, 70=None, 60=Invalid, 0=Unknown) |
| ModuleSignatureTypeDescription | string | Human-readable description of module signature type (enriched from ModuleSignatureType field) |
| ModuleSigner | string | Signer of the module |
| Note | string | Additional notes about the detection |
| Priority | string | Priority level of the detection |
| ProcessCommandLine | string | Process command line arguments |
| ProcessId | string | Process identifier |
| ProcessPath | string | Path of the process involved |
| ProcessUser | string | User account associated with the process |
| ProductIds | string | ESET product selected for this connector instance (EP, EI, or ECOS) |
| Resolved | bool | Whether the detection has been resolved |
| RuleId | string | ID of the detection rule |
| RuleName | string | Name of the detection rule |
| RuleUuid | string | UUID of the detection rule |
| Severity | string | Severity level of the detection |
| SeverityScore | int | Numeric severity score |
| ThreatName | string | Name of the detected threat |
| ThreatUri | string | URI reference for the threat |
| TimeGenerated | datetime | The time when the log entry was generated |
| Uuid | string | UUID of the detection |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ESET Protect Platform](../solutions/eset-protect-platform.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ESET Connect Data Connector (via Codeless Connector Framework)](../connectors/esetconnectconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

