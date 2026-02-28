# eset_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (8 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/eset_CL.json)

| Column Name | Type |
|:------------|:-----|
| event_type_s | string |
| hostname_s | string |
| ipv4_s | string |
| object_uri_s | string |
| scanner_id_s | string |
| threat_name_s | string |
| TimeGenerated | datetime |
| username_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Eset Security Management Center](../solutions/eset-security-management-center.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Eset Security Management Center](../connectors/esetsmc.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Eset Security Management Center](../solutions/eset-security-management-center.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Threats detected by Eset](../content/eset-security-management-center-threats-detected-by-eset-2d8a60aa-c15e-442e-9ce3-ee924889d2a6-602eeb34.md) |  |
| [Web sites blocked by Eset](../content/eset-security-management-center-web-sites-blocked-by-eset-84ad2f8a-b64c-49bc-b669-bdb4fd3071e9-9515533c.md) |  |

### Workbooks (1)

**In solution [Eset Security Management Center](../solutions/eset-security-management-center.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [esetSMCWorkbook](../content/eset-security-management-center-esetsmcworkbook-7ed61bc1.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

