# SOCRadar_Alarms_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SOCRadar_Alarms_CL.json)

| Column Name | Type |
|:------------|:-----|
| AlarmDate | string |
| AlarmId | string |
| AlarmMainType | string |
| AlarmPayload | dynamic |
| AlarmSubType | string |
| AlarmText | string |
| CompanyId | string |
| Severity | string |
| SourceSystem | string |
| Status | string |
| TenantId | string |
| TimeGenerated | datetime |
| Title | string |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [SOCRadar](../solutions/socradar.md)

---

## Content Items Using This Table (6)

### Analytic Rules (2)

**In solution [SOCRadar](../solutions/socradar.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SOCRadar Alarm Volume Spike](../content/socradar-socradar-alarm-volume-spike-4a7b3c9e-2d15-4e8f-b6a3-9c2e7d5a1b4f-7d7528ed.md) |  |
| [SOCRadar High or Critical Severity Alarm](../content/socradar-socradar-high-or-critical-severity-alarm-8f3e2c5a-7b91-4d6a-9e8f-1c4a2b5d7e3f-1c14f887.md) |  |

### Hunting Queries (3)

**In solution [SOCRadar](../solutions/socradar.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [SOCRadar Alarm Overview](../content/socradar-socradar-alarm-overview-12a3dfda-ab80-4664-aed9-7f6f9f3b4a23-99062102.md) |  |
| [SOCRadar Alarm Trends](../content/socradar-socradar-alarm-trends-bbafd1c6-8da9-4de3-b100-6964dedd3f3e-63397f7c.md) |  |
| [SOCRadar Critical Alarms](../content/socradar-socradar-critical-alarms-ffa80945-44de-4900-bda5-9f1410c60166-08a0f8c2.md) |  |

### Workbooks (1)

**In solution [SOCRadar](../solutions/socradar.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SOCRadar-Dashboard](../content/socradar-socradar-dashboard-df56f072.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

