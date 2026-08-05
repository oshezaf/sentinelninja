# ABNORMAL_SECURITY_VENDOR_CASE_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (16 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity%5CData%20Connectors%5CAbnormalSecurity_CCF/AbnormalSecurity_table_VendorCase.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| abx_body | string | Vendor case event payload |
| abx_body_abx_body_firstObservedTime_t | datetime | Timestamp when the vendor case was first observed |
| abx_body_abx_body_insights_s | string | Case insights (JSON array) |
| abx_body_abx_body_lastModifiedTime_t | datetime | Timestamp when the vendor case was last modified |
| abx_body_abx_body_timeline_s | string | Case timeline (JSON array) |
| abx_body_abx_body_vendorCaseId_g | string | Vendor case UUID |
| abx_body_abx_body_vendorDomain_s | string | Email domain of the vendor |
| abx_body_abx_metadata_event_type_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_timestamp_s | string | From abx_body.abx_metadata |
| abx_body_abx_metadata_trace_id_g | string | From abx_body.abx_metadata |
| abx_metadata | string | Full event metadata object containing event_type, timestamp, and trace_id |
| abx_metadata_event_type_s | string | Event type identifier from top-level abx_metadata |
| abx_metadata_timestamp_s | string | Event timestamp from top-level abx_metadata |
| abx_metadata_trace_id_g | string | Trace ID (GUID) from top-level abx_metadata |
| Time | string | Event timestamp in RFC3339 format |
| TimeGenerated | datetime | Timestamp when the event was ingested into Microsoft Sentinel |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AbnormalSecurity](../solutions/abnormalsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Abnormal Security (Push)](../connectors/abnormalsecuritypush.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [AbnormalSecurity](../solutions/abnormalsecurity.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Abnormal Security - Vendor compromise case detected](../content/abnormalsecurity-abnormal-security-vendor-compromise-case-detected-b15ea4c9-58da-44d8-90e4-6591d947e7e3-5d66afe6.md) |  |

### Hunting Queries (1)

**In solution [AbnormalSecurity](../solutions/abnormalsecurity.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Abnormal Security - Newly observed vendor domains](../content/abnormalsecurity-abnormal-security-newly-observed-vendor-domains-f8d819ef-7c3a-499a-a8ef-33737ce9a146-ba0d4629.md) |  |

### Workbooks (1)

**In solution [AbnormalSecurity](../solutions/abnormalsecurity.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AbnormalSecurityOverview](../content/abnormalsecurity-abnormalsecurityoverview-c47e736a.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AbnormalSecurityVendorCases](../parsers/abnormalsecurityvendorcases.md) | [AbnormalSecurity](../solutions/abnormalsecurity.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

