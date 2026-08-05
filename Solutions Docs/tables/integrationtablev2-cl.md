# IntegrationTableV2_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (41 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform%5CData%20Connectors%5CESETProtectPlatform_CCF/table_IntegrationTableV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Category | string | Category classification of the detection |
| Circumstances | string | Circumstances surrounding the detection (v2 direct field, v1 nested in context.circumstances) |
| CloudOfficeTenantUuid | string | Cloud office tenant UUID |
| ConnectorName | string | Connector Friendly Name assigned during connector setup |
| Context | dynamic | Context information about the detection (v1 API) |
| DetectionUuid | string | Detection UUID (mapped from uuid for compatibility) |
| Device | dynamic | Device object with displayName and uuid (v2 API only) |
| DeviceDisplayName | string | Display name of the device (v2: device.displayName object; v1: not available in payload) |
| DeviceUuid | string | UUID of the device (v2: device.uuid object; v1: context.deviceUuid) |
| DisplayName | string | Human-readable display name of the detection |
| EdrRuleUuid | string | EDR rule UUID that triggered the detection |
| Email | dynamic | Email object with attachments, headers, sender, recipient (v2 API only) |
| File | dynamic | File object with path, hashes, size (v2 API only) |
| GroupSize | int | Number of similar detections grouped together |
| NetworkCommunication | dynamic | Network communication details (v1 API) |
| NetworkTraffic | dynamic | Network traffic object with source/destination details (v2 API only) |
| Note | string | Additional notes about the detection |
| ObjectHashSha1 | string | SHA1 hash of the detected object |
| ObjectName | string | Name of the detected object |
| ObjectSizeBytes | int | Size of the detected object in bytes as integer for backward compatibility. DEPRECATED: for ObjectSizeBytesString |
| ObjectSizeBytesString | string | Size of the detected object in bytes as string (correct API type) |
| ObjectTypeName | string | Type name of the detected object |
| ObjectUrl | string | URL reference to the detected object |
| OccurTime | string | ISO 8601 timestamp when the detection occurred |
| Process | dynamic | Process object with commandLine, path, uuid (v2 API only) |
| ProcessCommandline | string | Process command line |
| ProcessPath | string | Path of the process involved (v2 direct field, v1 nested in context.process.path) |
| ProcessUuid | string | UUID of the process |
| ProductIds | string | ESET product selected for this connector instance (EP, EI, or ECOS) |
| Resolved | bool | Whether the detection has been resolved |
| Responses | dynamic | Array of response actions taken for the detection |
| ScanUuid | string | Scan session UUID |
| SeverityLevel | string | Severity level of the detection |
| SeverityScore | string | Severity score as string for backward compatibility. DEPRECATED: for SeverityScoreInt |
| SeverityScoreInt | int | Severity score as integer (correct API type) |
| TimeGenerated | datetime | The time when the log entry was generated |
| TriggeringEvent | dynamic | Event that triggered the detection |
| TypeName | string | The specific type name of the detection |
| UserName | string | Username associated with the detection (v2 direct field, v1 nested in context.userName) |
| UserNameBase | string | Base username associated with the detection |
| Uuid | string | Unique identifier for the detection |

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

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ESETProtectPlatform](../parsers/esetprotectplatform.md) | [ESET Protect Platform](../solutions/eset-protect-platform.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

