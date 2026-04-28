# ContrastADR_CL

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

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

