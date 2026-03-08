# jamfprotecttelemetryv2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/jamfprotecttelemetryv2_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | dynamic |
| DvcHostname | dynamic |
| DvcId | dynamic |
| DvcIpAddr | dynamic |
| DvcOs | string |
| DvcOsVersion | dynamic |
| DvcSerial | dynamic |
| event | dynamic |
| EventCount | int |
| EventOriginalType | int |
| EventOriginalUid | string |
| EventProduct | dynamic |
| EventProductVersion | dynamic |
| EventSchemaVersion | dynamic |
| EventSeverity | string |
| EventVendor | dynamic |
| process | dynamic |
| SrcDeviceType | string |
| TargetHostname | dynamic |
| thread | dynamic |
| ThreatCategory | string |
| ThreatName | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Jamf Protect](../solutions/jamf-protect.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Jamf Protect](../solutions/jamf-protect.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [JamfProtectDashboard](../content/jamf-protect-jamfprotectdashboard-b0beeadb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [JamfProtectTelemetry](../parsers/jamfprotecttelemetry.md) | [Jamf Protect](../solutions/jamf-protect.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

