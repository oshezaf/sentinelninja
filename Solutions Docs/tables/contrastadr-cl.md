# ContrastADR_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (68 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ContrastADR_CL.json)

| Column Name | Type |
|:------------|:-----|
| apiUri_s | string |
| application_agentLanguage_s | string |
| application_id_g | guid |
| application_name_s | string |
| attackPayload_attackerInput_applicableAttack_b | bool |
| attackPayload_attackerInput_confirmedAttack_b | bool |
| attackPayload_attackerInput_documentPath_s | string |
| attackPayload_attackerInput_documentType_s | string |
| attackPayload_attackerInput_effectiveAttack_b | bool |
| attackPayload_attackerInput_inputType_s | string |
| attackPayload_attackerInput_name_s | string |
| attackPayload_attackerInput_patternsMatched_s | string |
| attackPayload_attackerInput_type_s | string |
| attackPayload_url_s | string |
| attackPayload_value_s | string |
| attackValue_s | string |
| cloudProvider_com_contrastsecurity_adr_schemas_CloudProvider_s | string |
| cloudProvider_s | string |
| cloudResourceId_s | string |
| codeLocation_file_s | string |
| codeLocation_method_s | string |
| codeLocation_stack_s | string |
| denyListUuid_g | guid |
| denyListUuid_string_g | guid |
| detectedTime_d | real |
| detectedTime_s | string |
| detectedTime_t | datetime |
| environment_s | string |
| eventUuid_g | guid |
| eventUuid_s | string |
| host_hostname_s | string |
| incident_id_s | string |
| incidentId_s | string |
| mitreCapec_s | string |
| mitreTactics_s | string |
| organizationUuid_g | guid |
| productName_s | string |
| request_body_s | string |
| request_headers_referer_s | string |
| request_method_s | string |
| request_parameters_Change_s | string |
| request_parameters_funds_s | string |
| request_parameters_lastName_s | string |
| request_parameters_password_s | string |
| request_parameters_username_s | string |
| request_protocol_s | string |
| request_protocolVersion_s | string |
| request_queryString_s | string |
| result_s | string |
| rule_s | string |
| server_id_d | real |
| server_id_s | real |
| server_name_s | string |
| severity_s | string |
| SourceIP | string |
| sourceIp_string_s | string |
| TimeGenerated | datetime |
| uiUrl_s | string |
| vectorAnalysis_callLocation_s | string |
| vectorAnalysis_vectorFields_entitiesResolved_s | string |
| vectorAnalysis_vectorFields_entryName_s | string |
| vectorAnalysis_vectorFields_ip_s | string |
| vectorAnalysis_vectorFields_query_s | string |
| vectorAnalysis_vectorFields_ruleUuid_s | string |
| vectorAnalysis_vectorFields_uuid_g | guid |
| vectorAnalysis_vectorFields_xml_s | string |
| virtualPatchUuid_g | guid |
| virtualPatchUuid_string_g | guid |

## Solutions (1)

This table is used by the following solutions:

- [ContrastADR](../solutions/contrastadr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ContrastADR](../connectors/contrastadr.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (5)

**In solution [ContrastADR](../solutions/contrastadr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Contrast ADR - DLP SQL Injection Correlation](../content/contrastadr-contrast-adr-dlp-sql-injection-correlation-1aac7737-d52f-483d-b225-6a27c1b29a9e-b5944c4e.md) |  |
| [Contrast ADR - EDR Alert Correlation](../content/contrastadr-contrast-adr-edr-alert-correlation-c1c6ba64-134e-403b-b9a6-1bebc90809a4-f21fd8c4.md) |  |
| [Contrast ADR - Exploited Attack Event](../content/contrastadr-contrast-adr-exploited-attack-event-ae4f67a6-0713-4a26-ae61-284e67b408c1-a0cf1f50.md) |  |
| [Contrast ADR - Exploited Attack in Production](../content/contrastadr-contrast-adr-exploited-attack-in-production-31417149-f3a2-4db4-9e5f-85e0a464f6a1-bb999f59.md) |  |
| [Contrast ADR - WAF Alert Correlation](../content/contrastadr-contrast-adr-waf-alert-correlation-93641436-afb3-4921-8828-ceab0d15aaab-17b466db.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ContrastADR](../parsers/contrastadr.md) | [ContrastADR](../solutions/contrastadr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

