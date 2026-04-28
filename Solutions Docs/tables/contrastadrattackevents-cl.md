# ContrastADRAttackEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (79 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR%5CData%20Connectors%5CContrastADRCCF/table_attackevents.json)

| Column Name | Type |
|:------------|:-----|
| agentVersion | string |
| application | dynamic |
| application_agentLanguage | string |
| application_id | string |
| application_name | string |
| applicationId | string |
| applicationMetadata | dynamic |
| associatedAt | datetime |
| attackPayload | dynamic |
| attackPayload_attackerInput | dynamic |
| attackPayload_attackerInput_applicableAttack | bool |
| attackPayload_attackerInput_confirmedAttack | bool |
| attackPayload_attackerInput_documentPath | string |
| attackPayload_attackerInput_documentType | string |
| attackPayload_attackerInput_effectiveAttack | bool |
| attackPayload_attackerInput_filters | dynamic |
| attackPayload_attackerInput_inputType | string |
| attackPayload_attackerInput_name | string |
| attackPayload_attackerInput_patternsMatched | dynamic |
| attackPayload_attackerInput_type | string |
| attackPayload_url | string |
| attackPayload_value | string |
| codeLocation_file | string |
| codeLocation_method | string |
| codeLocation_stack | dynamic |
| detectedTime | long |
| environment | string |
| eventUuid | string |
| host | dynamic |
| host_hostname | string |
| host_isDocker | bool |
| host_isKubernetes | bool |
| host_operatingSystem | string |
| host_runtimePath | string |
| host_runtimeVersion | string |
| incidentId | string |
| issueId | string |
| mitreTactics | dynamic |
| nativeId | string |
| observationId | string |
| observationType | string |
| organizationUuid | string |
| parameters | dynamic |
| request | dynamic |
| request_body | string |
| request_headers_accept | dynamic |
| request_headers_accept_encoding | dynamic |
| request_headers_connection | dynamic |
| request_headers_content_length | dynamic |
| request_headers_content_type | dynamic |
| request_headers_contrasttraceparent | dynamic |
| request_headers_cookie | dynamic |
| request_headers_host | dynamic |
| request_headers_referer | dynamic |
| request_headers_user_agent | dynamic |
| request_headers_x_forwarded_host | dynamic |
| request_headers_x_forwarded_port | dynamic |
| request_headers_x_forwarded_proto | dynamic |
| request_headers_x_forwarded_scheme | dynamic |
| request_headers_x_real_ip | dynamic |
| request_headers_x_request_id | dynamic |
| request_headers_x_scheme | dynamic |
| request_method | string |
| request_protocol | string |
| request_protocolVersion | string |
| request_queryString | string |
| result | string |
| rule | string |
| ruleUuid | string |
| server | dynamic |
| server_id | real |
| server_name | string |
| severity | string |
| sourceIp | string |
| TimeGenerated | datetime |
| timestamp | datetime |
| url | string |
| vectorAnalysis_callLocation | string |
| vectorAnalysis_vectorFields | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [ContrastADR](../solutions/contrastadr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Contrast ADR Push Connector](../connectors/contrastadrccf.md) |  |

---

## Content Items Using This Table (11)

### Analytic Rules (5)

**In solution [ContrastADR](../solutions/contrastadr.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Contrast ADR - DLP SQL Injection Correlation](../content/contrastadr-contrast-adr-dlp-sql-injection-correlation-1aac7737-d52f-483d-b225-6a27c1b29a9e-b5944c4e.md) |  |
| [Contrast ADR - EDR Alert Correlation](../content/contrastadr-contrast-adr-edr-alert-correlation-c1c6ba64-134e-403b-b9a6-1bebc90809a4-f21fd8c4.md) |  |
| [Contrast ADR - Exploited Attack Event](../content/contrastadr-contrast-adr-exploited-attack-event-ae4f67a6-0713-4a26-ae61-284e67b408c1-a0cf1f50.md) |  |
| [Contrast ADR - Exploited Attack in Production](../content/contrastadr-contrast-adr-exploited-attack-in-production-31417149-f3a2-4db4-9e5f-85e0a464f6a1-bb999f59.md) |  |
| [Contrast ADR - WAF Alert Correlation](../content/contrastadr-contrast-adr-waf-alert-correlation-93641436-afb3-4921-8828-ceab0d15aaab-17b466db.md) |  |

### Workbooks (6)

**In solution [ContrastADR](../solutions/contrastadr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContrastADR_Command_Injection_Workbook](../content/contrastadr-contrastadr-command-injection-workbook-2809c88c.md) |  |
| [ContrastADR_JNDI_Injection_Workbook](../content/contrastadr-contrastadr-jndi-injection-workbook-893da6b3.md) |  |
| [ContrastADR_Path_Traversal_Workbook](../content/contrastadr-contrastadr-path-traversal-workbook-d0a4d6f2.md) |  |
| [ContrastADR_SQL_Injection_Workbook](../content/contrastadr-contrastadr-sql-injection-workbook-ae68db46.md) |  |
| [ContrastADR_Untrusted_Deserialization_Workbook](../content/contrastadr-contrastadr-untrusted-deserialization-workbook-6a1a62d6.md) |  |
| [ContrastADR_XML External_Entity_Injection_Injection_Workbook](../content/contrastadr-contrastadr-xml-external-entity-injection-injection-workbook-75187815.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ContrastADR](../parsers/contrastadr.md) | [ContrastADR](../solutions/contrastadr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

