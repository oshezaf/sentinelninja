# GitHubAuditLogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (232 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Data%20Connectors/GitHubAuditLogs_CCF/GitHubAuditLogs_DCR.json)

| Column Name | Type |
|:------------|:-----|
| @timestamp | real |
| _document_id | string |
| action | string |
| active | boolean |
| active_was | boolean |
| actor | string |
| actor_id | real |
| actor_ip | string |
| actor_is_bot | boolean |
| actor_location | dynamic |
| admin_enforced | boolean |
| after | string |
| alert_numbers | string |
| allow_deletions_enforcement_level | real |
| allow_force_pushes_enforcement_level | real |
| allowed_values | string |
| application_client_id | string |
| audit_log_stream_id | real |
| audit_log_stream_result | string |
| audit_log_stream_sink | string |
| audit_log_stream_sink_details | string |
| authorized_actor_names | string |
| base_role | string |
| before | string |
| blocked_user | string |
| branch | string |
| business | string |
| business_id | real |
| can_create_repositories | boolean |
| commit_id | string |
| commit_oid | string |
| completed_at | datetime |
| conclusion | string |
| config | string |
| config_was | string |
| content_type | string |
| create_protected | boolean |
| created_at | real |
| custom_pattern | string |
| data | string |
| default_for_new_private_repos | boolean |
| default_for_new_public_repos | boolean |
| default_value | string |
| definition_id | real |
| deploy_key_fingerprint | string |
| description | string |
| dismiss_stale_reviews_on_push | boolean |
| dismissal_approver_id | real |
| domain_name | string |
| email | string |
| emoji | string |
| enablement | string |
| enforcement_level | string |
| environment_name | string |
| event | string |
| events | string |
| events_were | string |
| exempt_administrators | boolean |
| explanation | string |
| external_identity_nameid | string |
| external_identity_username | string |
| fingerprint | string |
| ghsa_id | string |
| hashed_token | string |
| head_branch | string |
| head_sha | string |
| hook_id | real |
| ignore_approvals_from_contributors | boolean |
| integration | string |
| invitation_id | real |
| invitee_email | string |
| ip_allow_list_entry | string |
| is_hosted_runner | boolean |
| issue_type_name | string |
| issuer | string |
| job_name | string |
| job_workflow_ref | string |
| key | string |
| limit | real |
| limited_availability | boolean |
| linear_history_requirement_enforcement_level | real |
| lock_allows_fetch_and_merge | boolean |
| lock_branch_enforcement_level | real |
| membership_type | string |
| merge_queue_enforcement_level | real |
| message | string |
| name | string |
| new_access | string |
| new_policy | string |
| new_project_base_role | string |
| new_repo_permission | string |
| new_repo_runners_policy | string |
| oauth_application | string |
| oauth_application_id | real |
| oauth_application_state | string |
| oauth_application_url | string |
| old_access | string |
| old_default_value | string |
| old_description | string |
| old_enabled | boolean |
| old_issue_type_name | string |
| old_permission | string |
| old_project_base_role | string |
| old_repo_permission | string |
| old_repo_runners_policy | string |
| old_required | boolean |
| old_role_permissions | string |
| old_token_expiration | real |
| old_user | string |
| old_values_editable_by | string |
| openssh_public_key | string |
| operation_type | string |
| org | string |
| org_id | real |
| organization_role_id | real |
| organization_role_name | string |
| overridden_codes | string |
| owner | string |
| owner_type | string |
| permission | string |
| policy | string |
| previous_visibility | string |
| programmatic_access_type | string |
| project_id | real |
| project_number | real |
| property_name | string |
| public_project | boolean |
| public_repo | boolean |
| pull_request_id | real |
| pull_request_reviews_enforcement_level | real |
| pull_request_title | string |
| pull_request_url | string |
| query_suite | string |
| read_only | boolean |
| reason | string |
| reasons | string |
| recipient | string |
| ref | string |
| referrer | string |
| repo | string |
| repo_id | real |
| repositories_removed | string |
| repositories_removed_names | string |
| repository_security_configuration_failure_reason | dynamic |
| repository_security_configuration_state | dynamic |
| repository_selection | string |
| request_access_security_header | string |
| request_category | string |
| request_id | string |
| require_code_owner_review | boolean |
| require_last_push_approval | boolean |
| required | boolean |
| required_approving_review_count | real |
| required_deployments_enforcement_level | real |
| required_review_thread_resolution_enforcement_level | real |
| required_status_checks_enforcement_level | real |
| role_permissions | string |
| rule_suite_id | real |
| ruleset_bypass_actors | string |
| ruleset_conditions | string |
| ruleset_conditions_updated | string |
| ruleset_enforcement | string |
| ruleset_id | real |
| ruleset_name | string |
| ruleset_rules | string |
| ruleset_rules_deleted | string |
| ruleset_source_type | string |
| run_attempt | real |
| run_number | real |
| runner_group_allow_public | boolean |
| runner_group_id | real |
| runner_group_name | string |
| runner_group_restricted_to_workflows | boolean |
| runner_group_selected_workflow_refs | string |
| runner_id | real |
| runner_labels | string |
| runner_name | string |
| runner_owner_type | string |
| secrets_passed | string |
| security_configuration_code_scanning | string |
| security_configuration_code_security_sku_enabled | boolean |
| security_configuration_created_at | datetime |
| security_configuration_dependabot_alerts | string |
| security_configuration_dependabot_security_updates | string |
| security_configuration_dependency_graph | string |
| security_configuration_dependency_graph_autosubmit_action | string |
| security_configuration_description | string |
| security_configuration_enable_ghas | boolean |
| security_configuration_id | real |
| security_configuration_name | string |
| security_configuration_private_vulnerability_reporting | string |
| security_configuration_secret_protection_sku_enabled | boolean |
| security_configuration_secret_scanning | string |
| security_configuration_secret_scanning_delegated_bypass | string |
| security_configuration_secret_scanning_generic_secrets | string |
| security_configuration_secret_scanning_non_provider_patterns | string |
| security_configuration_secret_scanning_push_protection | string |
| security_configuration_secret_scanning_validity_checks | string |
| security_configuration_updated_at | datetime |
| signature_requirement_enforcement_level | real |
| source | string |
| sso_url | string |
| started_at | datetime |
| strict_required_status_checks_policy | boolean |
| target_login | string |
| team | string |
| threat_model | string |
| token_expiration | real |
| token_id | real |
| topic | string |
| transport_protocol | real |
| transport_protocol_name | string |
| trigger_id | real |
| two_factor_method | string |
| type | string |
| updated_allowed_types | boolean |
| user | string |
| user_agent | string |
| user_can_invite_collaborators | boolean |
| user_id | real |
| value_type | string |
| values_editable_by | string |
| visibility | string |
| vulnerability_alert_rule_actions_alert_actions_auto_dismiss | string |
| vulnerability_alert_rule_actions_version | real |
| vulnerability_alert_rule_conditions_cwe | string |
| vulnerability_alert_rule_conditions_ecosystem | string |
| vulnerability_alert_rule_conditions_scope | string |
| vulnerability_alert_rule_id | real |
| vulnerability_alert_rule_name | string |
| workflow_id | real |
| workflow_run_id | real |

## Solutions (1)

This table is used by the following solutions:

- [GitHub](../solutions/github.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GitHub Enterprise Audit Log (via Codeless Connector Framework)](../connectors/githubauditdefinitionv2.md) |  |
| [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) |  |

---

## Content Items Using This Table (20)

### Analytic Rules (12)

**In solution [GitHub](../solutions/github.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GitHub - A payment method was removed](../content/github-github-a-payment-method-was-removed-6bb50582-caac-4a9b-9afb-3fee766ebbf7-e799ada5.md) |  |
| [GitHub - Oauth application - a client secret was removed](../content/github-github-oauth-application-a-client-secret-was-removed-0b85a077-8ba5-4cb5-90f7-1e882afe10c5-3d9031f7.md) |  |
| [GitHub - Repository was created](../content/github-github-repository-was-created-0b85a077-8ba5-4cb5-90f7-1e882afe10c2-bac13237.md) |  |
| [GitHub - Repository was destroyed](../content/github-github-repository-was-destroyed-0b85a077-8ba5-4cb5-90f7-1e882afe10c3-96c04043.md) |  |
| [GitHub - User visibility Was changed](../content/github-github-user-visibility-was-changed-0b85a077-8ba5-4cb5-90f7-1e882afe20c9-d51a61fb.md) |  |
| [GitHub - User was added to the organization](../content/github-github-user-was-added-to-the-organization-0b85a077-8ba5-4cb5-90f7-1e882afe10c4-4e723f97.md) |  |
| [GitHub - User was blocked](../content/github-github-user-was-blocked-0b85a077-8ba5-4cb5-90f7-1e882afe10c8-97304d92.md) |  |
| [GitHub - User was invited to the repository](../content/github-github-user-was-invited-to-the-repository-0b85a077-8ba5-4cb5-90f7-1e882afe40c9-7209ee58.md) |  |
| [GitHub - pull request was created](../content/github-github-pull-request-was-created-0b85a077-8ba5-4cb5-90f7-1e882afe10c7-18555696.md) |  |
| [GitHub - pull request was merged](../content/github-github-pull-request-was-merged-0b85a077-8ba5-4cb5-90f7-1e882afe10c6-76d24a7f.md) |  |
| [GitHub Activites from a New Country](../content/github-github-activites-from-a-new-country-f041e01d-840d-43da-95c8-4188f6cef546-14943f98.md) |  |
| [GitHub Two Factor Auth Disable](../content/github-github-two-factor-auth-disable-3ff0fffb-d963-40c0-b235-3404f915add7-154f9e3d.md) |  |

### Hunting Queries (8)

**In solution [GitHub](../solutions/github.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GitHub First Time Invite Member and Add Member to Repo](../content/github-github-first-time-invite-member-and-add-member-to-repo-f0d30d3c-e6ad-480a-90e8-1bd7cc84881b-0912ca5c.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GitHub First Time Repo Delete](../content/github-github-first-time-repo-delete-c3237d88-fdc4-4dee-8b90-118ded2c507c-69cfe798.md) |  |
| [GitHub Inactive or New Account Access or Usage](../content/github-github-inactive-or-new-account-access-or-usage-b8508e24-47a6-4f8e-9066-3cc937197e7f-be1de63d.md) |  |
| [GitHub Mass Deletion of repos or projects](../content/github-github-mass-deletion-of-repos-or-projects-67da5c4e-49f2-476d-96ff-2dbe4b855a48-2f132015.md) |  |
| [GitHub OAuth App Restrictions Disabled](../content/github-github-oauth-app-restrictions-disabled-667e6a70-adc9-49b7-9cf3-f21927c71959-0ae7ca34.md) |  |
| [GitHub Repo switched from private to public](../content/github-github-repo-switched-from-private-to-public-a6e2afd3-559c-4e88-a693-39c1f6789ef1-cb2a47a1.md) |  |
| [GitHub Update Permissions](../content/github-github-update-permissions-ec986fb7-34ed-4528-a5f3-a496e61d8860-a49819f7.md) |  |
| [GitHub User Grants Access and Other User Grants Access](../content/github-github-user-grants-access-and-other-user-grants-access-f18c4dfb-4fa6-4a9d-9bd3-f7569d1d685a-1b34b5bf.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GitHubAuditData](../parsers/githubauditdata.md) | [GitHub](../solutions/github.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

