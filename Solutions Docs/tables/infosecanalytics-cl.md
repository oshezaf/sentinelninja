# InfoSecAnalytics_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (53 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfoSecAnalytics_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _timestamp_t | string |
| _version_s | string |
| agenthostname_s | string |
| agentid_s | string |
| agentlastip_s | string |
| basic_constraints_path_length_s | string |
| basic_constraints_subject_type_s | string |
| certificate_issuer_type_s | string |
| certificate_usage_s | string |
| certificateextensions_s | real |
| certificateextkeyusage_s | string |
| certificatekeyusage_s | string |
| certificatenotbefore_t | string |
| certificateparsingerror_s | string |
| certificatepublickeyalgorithm_s | string |
| certificatepublickeysize_d | real |
| certificateselfsigned_s | string |
| certificateserialnumber_s | string |
| certificatesha1fingerprint_s | string |
| certificatesha256fingerprint_s | string |
| certificatesignaturealgorithm_s | string |
| certificatevaliditydays_d | real |
| certs_scanid_d | real |
| cnformat_s | string |
| Computer | string |
| crypto_scanid_d | real |
| endtime_t | string |
| keyid_s | string |
| library_severity_description_s | string |
| ManagementGroupName | string |
| MG | string |
| object_fingerprint_s | string |
| rank_s | string |
| RawData | string |
| resultsscheme_s | string |
| resultsuri_s | string |
| severity_description_s | string |
| severity_ISG_PostQuantum_Security_s | string |
| severity_score_s | string |
| severity_type_s | string |
| SourceSystem | string |
| standard_cse_classification_s | string |
| standard_name_s | string |
| starttime_t | string |
| TenantId | string |
| TimeGenerated | datetime |
| truststatus_s | string |
| Type | string |
| uri_fileextension_s | string |
| uri_filename_s | string |
| uri_filepath_s | string |
| uri_filetype_s | string |

## Solutions (1)

This table is used by the following solutions:

- [AgileSec Analytics Connector](../solutions/agilesec-analytics-connector.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [InfoSecGlobal Data Connector](../connectors/infosecdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [AgileSec Analytics Connector](../solutions/agilesec-analytics-connector.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InfoSecGlobal](../content/agilesec-analytics-connector-infosecglobal-f1e4d51f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

