# TrendMicro_XDR_WORKBENCH_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/TrendMicro_XDR_WORKBENCH_CL.json)

| Column Name | Type |
|:------------|:-----|
| alertProvider_s | string |
| alertTriggerTimestamp_t | datetime |
| createdTime_t | datetime |
| description_s | string |
| FileDirectory_s | string |
| FileName_s | string |
| impactScope_Summary_s | string |
| model_s | string |
| priorityScore_d | int |
| ProcessCommandLine_s | string |
| RegistryKey_s | string |
| RegistryValue_s | string |
| RegistryValueName_s | string |
| severity_s | string |
| TimeGenerated | datetime |
| UserAccountName_s | string |
| UserAccountNTDomain_s | string |
| workbenchId_s | string |
| workbenchLink_s | string |
| workbenchName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Trend Micro Vision One](../solutions/trend-micro-vision-one.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Trend Vision One](../connectors/trendmicroxdr.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Trend Micro Vision One](../solutions/trend-micro-vision-one.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Create Incident for XDR Alerts](../content/trend-micro-vision-one-create-incident-for-xdr-alerts-0febd8cc-1b8d-45ed-87b3-e1e8a57d14cd-cbe34215.md) |  |

### Workbooks (1)

**In solution [Trend Micro Vision One](../solutions/trend-micro-vision-one.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TrendMicroXDROverview](../content/trend-micro-vision-one-trendmicroxdroverview-d7791cc7.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

