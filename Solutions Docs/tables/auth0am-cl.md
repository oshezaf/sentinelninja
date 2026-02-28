# Auth0AM_CL

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

## Schema (193 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Auth0AM_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| _SubscriptionId | string |
| audience_s | string |
| client_id_s | string |
| client_name_s | string |
| Computer | string |
| connection_id_s | string |
| connection_s | string |
| date_t | datetime |
| description_s | string |
| details_accessedSecrets_s | string |
| details_body_client_id_s | string |
| details_body_connection_s | string |
| details_body_email_s | string |
| details_body_newPassword_s | string |
| details_body_password_s | string |
| details_body_tenant_s | string |
| details_body_ticket_s | string |
| details_body_user_id_s | string |
| details_body_verify_b | bool |
| details_description_rules_s | string |
| details_description_verified_b | bool |
| details_email_s | string |
| details_query_client_id_s | string |
| details_query_connection_s | string |
| details_query_email_s | string |
| details_query_includeEmailInRedirect_b | bool |
| details_query_tenant_s | string |
| details_query_user_id_s | string |
| details_request_auth_credentials_jti_g | string |
| details_request_auth_credentials_scopes_s | string |
| details_request_auth_scopes_s | string |
| details_request_auth_strategy_s | string |
| details_request_auth_subject_s | string |
| details_request_auth_user_email_s | string |
| details_request_auth_user_name_s | string |
| details_request_auth_user_user_id_s | string |
| details_request_body_allow_offline_access_b | bool |
| details_request_body_allowed_logout_urls_s | string |
| details_request_body_app_type_s | string |
| details_request_body_audience_s | string |
| details_request_body_BeforeLoginPromptMonitoring_b | bool |
| details_request_body_bindings_s | string |
| details_request_body_blocked_b | bool |
| details_request_body_change_password_enabled_b | bool |
| details_request_body_change_password_html_s | string |
| details_request_body_client_id_s | string |
| details_request_body_client_ids_s | string |
| details_request_body_connection_s | string |
| details_request_body_default_from_address_s | string |
| details_request_body_default_redirection_uri_s | string |
| details_request_body_description_s | string |
| details_request_body_email_s | string |
| details_request_body_enabled_b | bool |
| details_request_body_enabled_clients_s | string |
| details_request_body_error_page_url_s | string |
| details_request_body_friendly_name_s | string |
| details_request_body_from_s | string |
| details_request_body_grant_types_s | string |
| details_request_body_identifier_s | string |
| details_request_body_is_first_party_b | bool |
| details_request_body_jwt_configuration_alg_s | string |
| details_request_body_jwt_configuration_lifetime_in_seconds_d | real |
| details_request_body_name_s | string |
| details_request_body_oidc_conformant_b | bool |
| details_request_body_owners_s | string |
| details_request_body_password_s | string |
| details_request_body_picture_url_s | string |
| details_request_body_policy_s | string |
| details_request_body_providers_auth0_s | string |
| details_request_body_roles_s | string |
| details_request_body_scope_s | string |
| details_request_body_selected_s | string |
| details_request_body_signing_alg_s | string |
| details_request_body_state_s | string |
| details_request_body_subject_s | string |
| details_request_body_support_email_s | string |
| details_request_body_support_url_s | string |
| details_request_body_supported_triggers_s | string |
| details_request_body_syntax_s | string |
| details_request_body_template_s | string |
| details_request_body_token_endpoint_auth_method_s | string |
| details_request_body_token_lifetime_d | real |
| details_request_body_token_lifetime_for_web_d | real |
| details_request_body_user_email_s | string |
| details_request_body_user_id_s | string |
| details_request_body_users_s | string |
| details_request_body_verify_password_b | bool |
| details_request_channel_s | string |
| details_request_ip_s | string |
| details_request_method_s | string |
| details_request_path_s | string |
| details_request_query_is_global_b | bool |
| details_request_query_is_global_s | string |
| details_request_query_page_d | real |
| details_request_userAgent_s | string |
| details_response_body_allow_offline_access_b | bool |
| details_response_body_allowed_logout_urls_s | string |
| details_response_body_app_type_s | string |
| details_response_body_audience_s | string |
| details_response_body_BeforeLoginPrompt_b | bool |
| details_response_body_BeforeLoginPromptMonitoring_b | bool |
| details_response_body_bindings_s | string |
| details_response_body_blocked_b | bool |
| details_response_body_change_password_enabled_b | bool |
| details_response_body_change_password_html_s | string |
| details_response_body_client_id_s | string |
| details_response_body_client_secret_s | string |
| details_response_body_created_at_t | datetime |
| details_response_body_cross_origin_auth_b | bool |
| details_response_body_custom_login_page_on_b | bool |
| details_response_body_default_from_address_s | string |
| details_response_body_default_redirection_uri_s | string |
| details_response_body_description_s | string |
| details_response_body_email_s | string |
| details_response_body_email_verified_b | bool |
| details_response_body_enabled_b | bool |
| details_response_body_enabled_clients_s | string |
| details_response_body_enabled_locales_s | string |
| details_response_body_error_page_url_s | string |
| details_response_body_flags_allow_changing_enable_sso_b | bool |
| details_response_body_flags_cannot_change_enforce_client_authentication_on_passwordless_start_b | bool |
| details_response_body_flags_disable_clickjack_protection_headers_b | bool |
| details_response_body_flags_disable_impersonation_b | bool |
| details_response_body_flags_enable_sso_b | bool |
| details_response_body_flags_enforce_client_authentication_on_passwordless_start_b | bool |
| details_response_body_flags_revoke_refresh_token_grant_b | bool |
| details_response_body_flags_universal_login_b | bool |
| details_response_body_friendly_name_s | string |
| details_response_body_from_s | string |
| details_response_body_grant_types_s | string |
| details_response_body_guardian_mfa_page_s | string |
| details_response_body_id_s | string |
| details_response_body_identifier_s | string |
| details_response_body_identities_s | string |
| details_response_body_is_first_party_b | bool |
| details_response_body_is_token_endpoint_ip_header_trusted_b | bool |
| details_response_body_jwt_configuration_alg_s | string |
| details_response_body_jwt_configuration_lifetime_in_seconds_d | real |
| details_response_body_jwt_configuration_secret_encoded_b | bool |
| details_response_body_name_s | string |
| details_response_body_nickname_s | string |
| details_response_body_oidc_conformant_b | bool |
| details_response_body_picture_s | string |
| details_response_body_picture_url_s | string |
| details_response_body_policy_s | string |
| details_response_body_providers_auth0_s | string |
| details_response_body_providers_recaptcha_enterprise_s | string |
| details_response_body_providers_recaptcha_v2_s | string |
| details_response_body_realms_s | string |
| details_response_body_refresh_token_expiration_type_s | string |
| details_response_body_refresh_token_idle_token_lifetime_d | real |
| details_response_body_refresh_token_infinite_idle_token_lifetime_b | bool |
| details_response_body_refresh_token_infinite_token_lifetime_b | bool |
| details_response_body_refresh_token_leeway_d | real |
| details_response_body_refresh_token_rotation_type_s | string |
| details_response_body_refresh_token_token_lifetime_d | real |
| details_response_body_s | string |
| details_response_body_sandbox_version_s | string |
| details_response_body_scope_s | string |
| details_response_body_selected_s | string |
| details_response_body_signing_alg_s | string |
| details_response_body_sso_disabled_b | bool |
| details_response_body_strategy_s | string |
| details_response_body_subject_s | string |
| details_response_body_support_email_s | string |
| details_response_body_support_url_s | string |
| details_response_body_supported_triggers_s | string |
| details_response_body_syntax_s | string |
| details_response_body_template_s | string |
| details_response_body_token_endpoint_auth_method_s | string |
| details_response_body_token_lifetime_d | real |
| details_response_body_token_lifetime_for_web_d | real |
| details_response_body_updated_at_t | datetime |
| details_response_body_user_id_s | string |
| details_response_statusCode_d | real |
| details_title_s | string |
| geo_info_from_ip_address | string |
| hostname_s | string |
| ip_s | string |
| isMobile_b | bool |
| log_id_s | string |
| RawData | string |
| scope_s | string |
| strategy_s | string |
| strategy_type_s | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| user_agent_s | string |
| user_id_s | string |
| user_name_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Auth0](../solutions/auth0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Auth0 Access Management](../connectors/auth0.md) |  |

---

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Auth0](../parsers/auth0.md) | [Auth0](../solutions/auth0.md) |  |
| [Auth0AM](../parsers/auth0am.md) | [Auth0](../solutions/auth0.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

