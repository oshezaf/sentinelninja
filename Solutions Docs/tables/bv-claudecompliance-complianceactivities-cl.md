# BV_ClaudeCompliance_ComplianceActivities_CL

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

## Schema (163 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BV_ClaudeCompliance_ComplianceActivities_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| abuse_session_id | string |
| access_level | string |
| account_id | string |
| action | string |
| actor | dynamic |
| admin_api_key_id | string |
| algorithm | string |
| api_key_id | string |
| api_key_name | string |
| approved | bool |
| artifact_type | string |
| audience | dynamic |
| auth_method | string |
| cadence | string |
| certificate_fingerprint | string |
| certificate_id | string |
| claude_artifact_id | string |
| claude_artifact_version_id | string |
| claude_chat_id | string |
| claude_chat_snapshot_id | string |
| claude_file_id | string |
| claude_project_document_id | string |
| claude_project_id | string |
| claude_project_sync_source_id | string |
| claude_published_artifact_id | string |
| cli_name | string |
| compliance_api_enabled | bool |
| compliance_api_logging_enabled | bool |
| config_id | string |
| connection_id | string |
| connection_type | string |
| consent_id | string |
| consent_type | string |
| created_at | datetime |
| current_role | string |
| current_value | bool |
| decision | string |
| deleted_user_email | string |
| deleted_user_id | string |
| design_project_id | string |
| domain | string |
| enabled | bool |
| entity_id | string |
| entity_type | string |
| environment_id | string |
| export_type | string |
| extension_id | string |
| federation_issuer_id | string |
| federation_rule_id | string |
| file_id | string |
| filename | string |
| folder_id | string |
| from_date | string |
| ghe_configuration_id | string |
| github_webhook_id | long |
| grant_type | string |
| group_id | string |
| group_name | string |
| id_CF | string |
| idp_saml_config_updated | bool |
| installation_preference | string |
| integration_id | string |
| integration_type | string |
| invite_id | string |
| invited_email | string |
| invited_role | string |
| invitee_email | string |
| is_enabled | bool |
| is_service_created | bool |
| key_backing_type | string |
| key_group_identifier | string |
| key_name | string |
| limit_action | string |
| limit_usd | long |
| magic_link_enabled | bool |
| magic_link_toggled | bool |
| marketplace_id | string |
| max_permission | string |
| mcp_server_id | string |
| mcp_server_name | string |
| member_ids | dynamic |
| mfa_method | string |
| new_limit_usd | long |
| new_mode | string |
| new_otlp_endpoint | string |
| new_otlp_protocol | string |
| new_otlp_resource_attributes | string |
| new_owner_id | string |
| new_signing_key_id | string |
| old_signing_key_id | string |
| op_name | string |
| organization_id | string |
| organization_name | string |
| organization_uuid | string |
| otlp_headers_change | string |
| per_review_limit_usd | string |
| plugin_id | string |
| plugin_name | string |
| previous_enabled | bool |
| previous_environment_id | string |
| previous_mode | string |
| previous_otlp_endpoint | string |
| previous_otlp_protocol | string |
| previous_otlp_resource_attributes | string |
| previous_owner_id | string |
| previous_per_review_limit_usd | string |
| previous_role | string |
| previous_value | bool |
| principal_id | string |
| principal_type | string |
| provider | string |
| reason | string |
| repo_name | string |
| repo_owner | string |
| repository_name | string |
| request_id | string |
| request_method | string |
| requester_user_id | string |
| resolved_count | long |
| resource_id | string |
| resource_type | string |
| role | string |
| role_id | string |
| role_name | string |
| scan_id | string |
| scan_project_id | string |
| scans_cancelled | long |
| scopes | dynamic |
| service_account_id | string |
| service_key_id | string |
| service_name | string |
| session_id | string |
| share_id | string |
| signing_key_id | string |
| skill_id | string |
| skill_name | string |
| spend_limit_id | string |
| status | string |
| status_code | int |
| target_id | string |
| target_type | string |
| TenantId | string |
| TimeGenerated | datetime |
| title_CF | string |
| to_date | string |
| token_id | string |
| token_name | string |
| tool_name | string |
| trigger_mode | string |
| tunnel_id | string |
| tunnel_token_id | string |
| Type | string |
| type_CF | string |
| updated_fields | dynamic |
| updates | dynamic |
| url | string |
| user_email | string |
| user_id | string |
| version | string |
| webhook_id | string |
| workspace_id | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [BlueVoyant Anthropic ClaudeCompliance](../solutions/bluevoyant-anthropic-claudecompliance.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BV-ClaudeCompliance (via Codeless Connector Framework)](../connectors/bv-claudecompliance.md) |  |

---

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAgentEventAnthropicClaudeCompliance](../asim/asimagenteventanthropicclaudecompliance.md) | AgentEvent | Anthropic Claude Compliance |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

