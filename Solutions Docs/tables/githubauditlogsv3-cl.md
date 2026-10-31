# GitHubAuditLogsV3_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (489 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGitHubAuditLogs_AzStorage/table_GitHubAuditLogsV3.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| access_level | dynamic | The GitHub audit event access_level property, when supplied. |
| Action | string | The name of the action that was performed, for example user.login or repo.create. |
| actions_cache_id | dynamic | The GitHub audit event actions_cache_id property, when supplied. |
| actions_cache_key | dynamic | The GitHub audit event actions_cache_key property, when supplied. |
| actions_cache_scope | dynamic | The GitHub audit event actions_cache_scope property, when supplied. |
| actions_cache_version | dynamic | The GitHub audit event actions_cache_version property, when supplied. |
| Active | bool | Whether the resource is currently active. |
| ActiveWas | bool | Whether the resource was previously active. |
| ActivityType | string | The type of activity that was performed. |
| Actor | string | The actor who performed the action. |
| ActorId | real | The numeric identifier of the actor who performed the action. |
| ActorIp | string | The IP address of the actor who performed the action. |
| ActorIsAgent | bool | The GitHub audit event actor_is_agent property, when supplied. |
| ActorIsBot | bool | Whether the actor is a bot account. |
| ActorLocation | dynamic | The complete actor_location object, including country_code and country_name when supplied. |
| AdditionalFields | dynamic | Additional declared GitHub audit fields for billing, stream configuration, managed-user security events, and restricted column names. Not an undeclared-field catch-all. |
| AdminEnforced | bool | Whether the branch protection rule is enforced for administrators. |
| After | string | The state after the change. |
| AgentSessionId | string | The GitHub audit event agent_session_id property, when supplied. |
| alert_enabled | dynamic | The GitHub audit event alert_enabled property, when supplied. |
| alert_id | dynamic | The GitHub audit event alert_id property, when supplied. |
| alert_number | dynamic | The GitHub audit event alert_number property, when supplied. |
| alert_recipient_user_ids | dynamic | The GitHub audit event alert_recipient_user_ids property, when supplied. |
| AlertNumbers | string | The alert numbers associated with the event. |
| AllowDeletionsEnforcementLevel | real | The enforcement level for allowing branch deletions. |
| allowed | dynamic | The GitHub audit event allowed property, when supplied. |
| AllowedValues | string | The allowed values for a custom property. |
| AllowForcePushesEnforcementLevel | real | The enforcement level for allowing force pushes. |
| allowlist_description | dynamic | The GitHub audit event allowlist_description property, when supplied. |
| allowlist_id | dynamic | The GitHub audit event allowlist_id property, when supplied. |
| allowlist_name | dynamic | The GitHub audit event allowlist_name property, when supplied. |
| api_request_body | dynamic | The GitHub audit event api_request_body property, when supplied. |
| application_id | dynamic | The GitHub audit event application_id property, when supplied. |
| application_name | dynamic | The GitHub audit event application_name property, when supplied. |
| application_type | dynamic | The GitHub audit event application_type property, when supplied. |
| ApplicationClientId | string | The client ID of the application. |
| approvers | dynamic | The GitHub audit event approvers property, when supplied. |
| approvers_was | dynamic | The GitHub audit event approvers_was property, when supplied. |
| assignment_type | dynamic | The GitHub audit event assignment_type property, when supplied. |
| audit_log_stream_enabled | dynamic | The GitHub audit event audit_log_stream_enabled property, when supplied. |
| AuditLogStreamId | real | The numeric identifier of the audit log stream. |
| AuditLogStreamResult | string | The result of the audit log stream operation. |
| AuditLogStreamSink | string | The sink type of the audit log stream. |
| AuditLogStreamSinkDetails | string | The details of the audit log stream sink. |
| authorized_actors | dynamic | The GitHub audit event authorized_actors property, when supplied. |
| authorized_actors_only | dynamic | The GitHub audit event authorized_actors_only property, when supplied. |
| AuthorizedActorNames | string | The names of actors authorized to bypass branch protection. |
| BaseRole | string | The base role for the organization or repository. |
| Before | string | The state before the change. |
| block_local_servers | dynamic | The GitHub audit event block_local_servers property, when supplied. |
| BlockedUser | string | The username of the account being blocked. |
| body | string | The GitHub audit event body property, when supplied. |
| Branch | string | The branch associated with the event. |
| Business | string | The name of the GitHub Enterprise business. |
| BusinessId | real | The numeric identifier of the GitHub Enterprise business. |
| calling_workflow_refs | dynamic | The GitHub audit event calling_workflow_refs property, when supplied. |
| calling_workflow_shas | dynamic | The GitHub audit event calling_workflow_shas property, when supplied. |
| can_admins_bypass | dynamic | The GitHub audit event can_admins_bypass property, when supplied. |
| cancelled_at | dynamic | The GitHub audit event cancelled_at property, when supplied. |
| CanCreateRepositories | bool | Whether the user has permission to create repositories. |
| category | dynamic | The GitHub audit event category property, when supplied. |
| check_response_timeout_minutes | dynamic | The GitHub audit event check_response_timeout_minutes property, when supplied. |
| check_run_id | dynamic | The GitHub audit event check_run_id property, when supplied. |
| cname | dynamic | The GitHub audit event cname property, when supplied. |
| collaborator | dynamic | The GitHub audit event collaborator property, when supplied. |
| collaborator_type | dynamic | The GitHub audit event collaborator_type property, when supplied. |
| color | dynamic | The GitHub audit event color property, when supplied. |
| comment | dynamic | The GitHub audit event comment property, when supplied. |
| comment_id | dynamic | The GitHub audit event comment_id property, when supplied. |
| CommitId | string | The commit identifier associated with the event. |
| CommitOid | string | The commit object identifier (OID). |
| CompletedAt | datetime | The time the workflow or job completed. |
| compliant_pull_request_ids | dynamic | The GitHub audit event compliant_pull_request_ids property, when supplied. |
| Conclusion | string | The conclusion status of the workflow run, for example success or failure. |
| Config | string | The current configuration associated with the event, serialized as a JSON string. |
| ConfigWas | string | The previous configuration before the change, serialized as a JSON string. |
| ContentType | string | The content type of the resource. |
| context | dynamic | The GitHub audit event context property, when supplied. |
| count | dynamic | The GitHub audit event count property, when supplied. |
| CountryCode | string | The country code from the actor's location. |
| CreatedAt | real | The time the audit log event was recorded, given as a Unix timestamp in milliseconds. |
| CreateProtected | bool | Whether branch creation is protected. |
| current_plan | dynamic | The GitHub audit event current_plan property, when supplied. |
| current_validity | dynamic | The GitHub audit event current_validity property, when supplied. |
| current_value | dynamic | The GitHub audit event current_value property, when supplied. |
| custom_instructions | dynamic | The GitHub audit event custom_instructions property, when supplied. |
| custom_pattern_name | dynamic | The GitHub audit event custom_pattern_name property, when supplied. |
| custom_pattern_scope | dynamic | The GitHub audit event custom_pattern_scope property, when supplied. |
| CustomPattern | string | The custom secret scanning pattern. |
| Data | string | Additional data associated with the event, serialized as a JSON string. |
| default_branch | dynamic | The GitHub audit event default_branch property, when supplied. |
| DefaultForNewPrivateRepos | bool | Whether the configuration is the default for new private repositories. |
| DefaultForNewPublicRepos | bool | Whether the configuration is the default for new public repositories. |
| DefaultValue | string | The default value for a custom property. |
| DefinitionId | real | The numeric identifier of the custom property definition. |
| deleted_at | dynamic | The GitHub audit event deleted_at property, when supplied. |
| deleted_by | dynamic | The GitHub audit event deleted_by property, when supplied. |
| deleted_by_id | dynamic | The GitHub audit event deleted_by_id property, when supplied. |
| deleted_content | dynamic | The GitHub audit event deleted_content property, when supplied. |
| DeployKeyFingerprint | string | The fingerprint of the deploy key. |
| Description | string | The description of the resource or event. |
| devcontainer_path | dynamic | The GitHub audit event devcontainer_path property, when supplied. |
| dismiss_comment | dynamic | The GitHub audit event dismiss_comment property, when supplied. |
| dismiss_reason | dynamic | The GitHub audit event dismiss_reason property, when supplied. |
| dismissal_request_id | dynamic | The GitHub audit event dismissal_request_id property, when supplied. |
| DismissalApproverId | real | The numeric identifier of the user who approved the dismissal. |
| DismissStaleReviewsOnPush | bool | Whether stale pull request reviews are dismissed on new pushes. |
| DocumentId | string | A unique identifier for the audit event. |
| domain | dynamic | The GitHub audit event domain property, when supplied. |
| DomainName | string | The domain name associated with the event. |
| ecosystem | dynamic | The GitHub audit event ecosystem property, when supplied. |
| editor | dynamic | The GitHub audit event editor property, when supplied. |
| editor_id | dynamic | The GitHub audit event editor_id property, when supplied. |
| Email | string | The email address associated with the event. |
| Emoji | string | The emoji associated with the event. |
| enabled | dynamic | The GitHub audit event enabled property, when supplied. |
| Enablement | string | The enablement state of a feature or configuration. |
| end | dynamic | The GitHub audit event end property, when supplied. |
| end_date | dynamic | The GitHub audit event end_date property, when supplied. |
| endpoint | string | The GitHub audit event endpoint property, when supplied. |
| enforcement | dynamic | The GitHub audit event enforcement property, when supplied. |
| EnforcementLevel | string | The enforcement level of the protection rule. |
| enterprise_id | long | The GitHub audit event enterprise_id property, when supplied. |
| enterprise_role_id | dynamic | The GitHub audit event enterprise_role_id property, when supplied. |
| enterprise_role_name | dynamic | The GitHub audit event enterprise_role_name property, when supplied. |
| enterprise_team | dynamic | The GitHub audit event enterprise_team property, when supplied. |
| enterprise_team_id | dynamic | The GitHub audit event enterprise_team_id property, when supplied. |
| entries | dynamic | The GitHub audit event entries property, when supplied. |
| environment_id | dynamic | The GitHub audit event environment_id property, when supplied. |
| EnvironmentName | string | The name of the deployment environment. |
| Event | string | The event that triggered the workflow. |
| event_id | string | The GitHub audit event event_id property, when supplied. |
| event_name | dynamic | The GitHub audit event event_name property, when supplied. |
| Events | string | The current events configuration, serialized as a JSON string. |
| EventsWere | string | The previous events configuration before the change, serialized as a JSON string. |
| excluded_paths | dynamic | The GitHub audit event excluded_paths property, when supplied. |
| ExemptAdministrators | bool | Whether administrators are exempt from the rule. |
| Explanation | string | An explanation or additional context for the event. |
| external_group | dynamic | The GitHub audit event external_group property, when supplied. |
| external_group_id | dynamic | The GitHub audit event external_group_id property, when supplied. |
| external_id | dynamic | The GitHub audit event external_id property, when supplied. |
| ExternalIdentityNameid | string | The NameID of the external identity. |
| ExternalIdentityUsername | string | The username of the external identity. |
| failover_network_enabled | dynamic | The GitHub audit event failover_network_enabled property, when supplied. |
| failover_network_settings_ids | dynamic | The GitHub audit event failover_network_settings_ids property, when supplied. |
| filename | dynamic | The GitHub audit event filename property, when supplied. |
| Fingerprint | string | The fingerprint of the key or certificate. |
| from_business | dynamic | The GitHub audit event from_business property, when supplied. |
| GhsaId | string | The GitHub Security Advisory identifier. |
| github_request_id | string | The GitHub audit event github_request_id property, when supplied. |
| HashedToken | string | The hashed token used for authentication. |
| HeadBranch | string | The head branch of the workflow run. |
| HeadSha | string | The HEAD SHA of the commit that triggered the workflow. |
| HookId | real | The numeric identifier of the webhook. |
| IgnoreApprovalsFromContributors | bool | Whether approvals from contributors are ignored. |
| imposer_repo | dynamic | The GitHub audit event imposer_repo property, when supplied. |
| initiated_from | dynamic | The GitHub audit event initiated_from property, when supplied. |
| Integration | string | The integration associated with the event. |
| integration_installation_id | dynamic | The GitHub audit event integration_installation_id property, when supplied. |
| InvitationId | real | The numeric identifier of the invitation. |
| invitee | dynamic | The GitHub audit event invitee property, when supplied. |
| InviteeEmail | string | The email address of the person invited. |
| inviter | dynamic | The GitHub audit event inviter property, when supplied. |
| IpAllowListEntry | string | The IP allow list entry. |
| is_republished | dynamic | The GitHub audit event is_republished property, when supplied. |
| IsHostedRunner | bool | Whether the runner is a GitHub-hosted runner. |
| Issuer | string | The issuer of the SSO or SAML identity. |
| IssueTypeName | string | The name of the issue type. |
| JobName | string | The name of the workflow job. |
| JobWorkflowRef | string | The reference to the reusable workflow used by the job. |
| Key | string | The key associated with the event. |
| languages | dynamic | The GitHub audit event languages property, when supplied. |
| Limit | real | The limit value associated with the event. |
| LimitedAvailability | bool | Whether the feature has limited availability. |
| LinearHistoryRequirementEnforcementLevel | real | The enforcement level for requiring linear commit history. |
| LockAllowsFetchAndMerge | bool | Whether locked branches allow fetch and merge. |
| LockBranchEnforcementLevel | real | The enforcement level for branch locking. |
| machine_type | dynamic | The GitHub audit event machine_type property, when supplied. |
| managed_hashed_token | dynamic | The GitHub audit event managed_hashed_token property, when supplied. |
| managed_oauth_access_id | dynamic | The GitHub audit event managed_oauth_access_id property, when supplied. |
| managed_oauth_scopes | dynamic | The GitHub audit event managed_oauth_scopes property, when supplied. |
| managed_token_id | dynamic | The GitHub audit event managed_token_id property, when supplied. |
| managed_token_scopes | dynamic | The GitHub audit event managed_token_scopes property, when supplied. |
| manager | dynamic | The GitHub audit event manager property, when supplied. |
| marketplace_listing | dynamic | The GitHub audit event marketplace_listing property, when supplied. |
| max_entries_to_build | dynamic | The GitHub audit event max_entries_to_build property, when supplied. |
| max_entries_to_merge | dynamic | The GitHub audit event max_entries_to_merge property, when supplied. |
| mcp_policy | dynamic | The GitHub audit event mcp_policy property, when supplied. |
| MembershipType | string | The type of membership, for example admin or member. |
| merge_method | dynamic | The GitHub audit event merge_method property, when supplied. |
| MergeQueueEnforcementLevel | real | The enforcement level for merge queue. |
| merging_strategy | dynamic | The GitHub audit event merging_strategy property, when supplied. |
| Message | string | A message associated with the event. |
| min_entries_to_merge | dynamic | The GitHub audit event min_entries_to_merge property, when supplied. |
| min_entries_to_merge_wait_minutes | dynamic | The GitHub audit event min_entries_to_merge_wait_minutes property, when supplied. |
| multi_repo | dynamic | The GitHub audit event multi_repo property, when supplied. |
| Name | string | The name of the resource associated with the event. |
| name_was | dynamic | The GitHub audit event name_was property, when supplied. |
| network_configuration_id | dynamic | The GitHub audit event network_configuration_id property, when supplied. |
| network_settings_ids | dynamic | The GitHub audit event network_settings_ids property, when supplied. |
| new_branch | dynamic | The GitHub audit event new_branch property, when supplied. |
| new_config | dynamic | The GitHub audit event new_config property, when supplied. |
| new_emu_repo_runners_policy | dynamic | The GitHub audit event new_emu_repo_runners_policy property, when supplied. |
| new_nwo | dynamic | The GitHub audit event new_nwo property, when supplied. |
| new_repo_base_role | dynamic | The GitHub audit event new_repo_base_role property, when supplied. |
| new_value | dynamic | The GitHub audit event new_value property, when supplied. |
| NewAccess | string | The new access level after the change. |
| NewPolicy | string | The new policy after the change. |
| NewProjectBaseRole | string | The new base role for the project. |
| NewRepoPermission | string | The new repository permission after the change. |
| NewRepoRunnersPolicy | string | The new repository runners policy after the change. |
| number | dynamic | The GitHub audit event number property, when supplied. |
| oauth_credential_type | dynamic | The GitHub audit event oauth_credential_type property, when supplied. |
| OauthApplication | string | The name of the OAuth application involved in the event. |
| OauthApplicationId | real | The numeric identifier of the OAuth application. |
| OauthApplicationName | string | The GitHub audit event oauth_application_name property, when supplied. |
| OauthApplicationState | string | The state of the OAuth application. |
| OauthApplicationUrl | string | The URL of the OAuth application. |
| old_alert_enabled | dynamic | The GitHub audit event old_alert_enabled property, when supplied. |
| old_allowed_values | dynamic | The GitHub audit event old_allowed_values property, when supplied. |
| old_allowlist_name | dynamic | The GitHub audit event old_allowlist_name property, when supplied. |
| old_base_role | dynamic | The GitHub audit event old_base_role property, when supplied. |
| old_block_local_servers | dynamic | The GitHub audit event old_block_local_servers property, when supplied. |
| old_branch | dynamic | The GitHub audit event old_branch property, when supplied. |
| old_cname | dynamic | The GitHub audit event old_cname property, when supplied. |
| old_color | dynamic | The GitHub audit event old_color property, when supplied. |
| old_emu_repo_runners_policy | dynamic | The GitHub audit event old_emu_repo_runners_policy property, when supplied. |
| old_login | dynamic | The GitHub audit event old_login property, when supplied. |
| old_mcp_policy | dynamic | The GitHub audit event old_mcp_policy property, when supplied. |
| old_message | dynamic | The GitHub audit event old_message property, when supplied. |
| old_name | dynamic | The GitHub audit event old_name property, when supplied. |
| old_plan | dynamic | The GitHub audit event old_plan property, when supplied. |
| old_policy | dynamic | The GitHub audit event old_policy property, when supplied. |
| old_project_role | dynamic | The GitHub audit event old_project_role property, when supplied. |
| old_repo_base_role | dynamic | The GitHub audit event old_repo_base_role property, when supplied. |
| old_settings | dynamic | The GitHub audit event old_settings property, when supplied. |
| old_value | dynamic | The GitHub audit event old_value property, when supplied. |
| old_value_type | dynamic | The GitHub audit event old_value_type property, when supplied. |
| OldAccess | string | The previous access level before the change. |
| OldDefaultValue | string | The previous default value for a custom property. |
| OldDescription | string | The previous description before the change. |
| OldEnabled | bool | Whether the feature was previously enabled. |
| OldIssueTypeName | string | The previous issue type name before the change. |
| OldPermission | string | The previous permission level before the change. |
| OldProjectBaseRole | string | The previous base role for the project. |
| OldRepoPermission | string | The previous repository permission before the change. |
| OldRepoRunnersPolicy | string | The previous repository runners policy. |
| OldRequired | bool | Whether the custom property was previously required. |
| OldRolePermissions | string | The previous role permissions before the change. |
| OldTokenExpiration | real | The previous token expiration timestamp. |
| OldUser | string | The previous user before the change. |
| OldValuesEditableBy | string | Who could previously edit the custom property values. |
| OpensshPublicKey | string | The OpenSSH public key associated with the event. |
| OperationType | string | The type of operation performed, for example create, modify, or delete. |
| Org | string | The GitHub organization associated with the audit log event. |
| organization_names | dynamic | The GitHub audit event organization_names property, when supplied. |
| organization_upgrade | dynamic | The GitHub audit event organization_upgrade property, when supplied. |
| OrganizationRoleId | real | The numeric identifier of the organization role. |
| OrganizationRoleName | string | The name of the organization role. |
| OrgId | real | The numeric identifier of the GitHub organization. |
| origin_repository | dynamic | The GitHub audit event origin_repository property, when supplied. |
| OverriddenCodes | string | The codes that were overridden. |
| Owner | string | The owner of the resource. |
| owner_id | dynamic | The GitHub audit event owner_id property, when supplied. |
| OwnerType | string | The type of the owner, for example user or organization. |
| package | dynamic | The GitHub audit event package property, when supplied. |
| patreon_email | dynamic | The GitHub audit event patreon_email property, when supplied. |
| patreon_username | dynamic | The GitHub audit event patreon_username property, when supplied. |
| Permission | string | The permission level granted or associated with the action. |
| plan | dynamic | The GitHub audit event plan property, when supplied. |
| Policy | string | The policy associated with the event. |
| prevent_self_review | dynamic | The GitHub audit event prevent_self_review property, when supplied. |
| previous_settings_ids | dynamic | The GitHub audit event previous_settings_ids property, when supplied. |
| previous_validity | dynamic | The GitHub audit event previous_validity property, when supplied. |
| previous_value | dynamic | The GitHub audit event previous_value property, when supplied. |
| PreviousVisibility | string | The previous repository visibility before the change. |
| primary_category | dynamic | The GitHub audit event primary_category property, when supplied. |
| ProgrammaticAccessType | string | The type of programmatic access used. |
| project_kind | dynamic | The GitHub audit event project_kind property, when supplied. |
| project_name | dynamic | The GitHub audit event project_name property, when supplied. |
| project_role | dynamic | The GitHub audit event project_role property, when supplied. |
| ProjectId | real | The numeric identifier of the project. |
| ProjectNumber | real | The project number. |
| PropertyName | string | The name of the custom property. |
| public_repo | bool | The original GitHub public_repo value, before the PublicRepo fallback. |
| publicly_leaked | dynamic | The GitHub audit event publicly_leaked property, when supplied. |
| PublicProject | bool | Whether the project is public. |
| PublicRepo | bool | Whether the repository is public. |
| PullRequestId | real | The numeric identifier of the pull request. |
| PullRequestReviewsEnforcementLevel | real | The enforcement level for pull request reviews. |
| PullRequestTitle | string | The title of the pull request. |
| PullRequestUrl | string | The URL of the pull request. |
| push_protection_bypass_reason | dynamic | The GitHub audit event push_protection_bypass_reason property, when supplied. |
| push_protection_setting | dynamic | The GitHub audit event push_protection_setting property, when supplied. |
| query | dynamic | The GitHub audit event query property, when supplied. |
| query_phrase | dynamic | The GitHub audit event query_phrase property, when supplied. |
| QueryString | string | The query string from the HTTP request URL. |
| QuerySuite | string | The code scanning query suite. |
| RateLimitRemaining | real | The number of API rate limit requests remaining. |
| ReadOnly | bool | Whether the resource is read-only. |
| Reason | string | The reason for the action or event. |
| Reasons | string | The reasons for the action or decision. |
| Recipient | string | The recipient of the action. |
| Ref | string | The Git reference associated with the event. |
| Referrer | string | The referrer URL or source. |
| remove_existing_unaffiliated_users | dynamic | The GitHub audit event remove_existing_unaffiliated_users property, when supplied. |
| Repo | string | The name of the repository associated with the event. |
| repo_was | dynamic | The GitHub audit event repo_was property, when supplied. |
| RepoId | real | The numeric identifier of the repository. |
| report_result | dynamic | The GitHub audit event report_result property, when supplied. |
| repositories | dynamic | The GitHub audit event repositories property, when supplied. |
| repositories_added | dynamic | The GitHub audit event repositories_added property, when supplied. |
| repositories_added_names | dynamic | The GitHub audit event repositories_added_names property, when supplied. |
| RepositoriesRemoved | string | The repositories removed from the integration or configuration. |
| RepositoriesRemovedNames | string | The names of repositories that were removed. |
| Repository | string | The name of the repository associated with the event. |
| RepositoryId | real | The numeric identifier of the repository. |
| RepositoryPublic | bool | The original GitHub repository_public value, before the PublicRepo fallback. |
| RepositorySecurityConfigurationFailureReason | dynamic | The reason a repository security configuration failed to apply. |
| RepositorySecurityConfigurationState | dynamic | The state of the repository security configuration. |
| RepositorySelection | string | The repository selection mode, for example all or selected. |
| request_reviewer | dynamic | The GitHub audit event request_reviewer property, when supplied. |
| request_reviewer_comment | dynamic | The GitHub audit event request_reviewer_comment property, when supplied. |
| request_reviewer_id | dynamic | The GitHub audit event request_reviewer_id property, when supplied. |
| RequestAccessSecurityHeader | string | The security header of the access request. |
| RequestBody | string | The body of the HTTP request. |
| RequestCategory | string | The category of the request. |
| requested_at | dynamic | The GitHub audit event requested_at property, when supplied. |
| requester | dynamic | The GitHub audit event requester property, when supplied. |
| requester_id | dynamic | The GitHub audit event requester_id property, when supplied. |
| RequestId | string | The unique identifier of the request. |
| RequestMethod | string | The HTTP request method, for example GET or POST. |
| RequireCodeOwnerReview | bool | Whether code owner review is required. |
| Required | bool | Whether the custom property is required. |
| RequiredApprovingReviewCount | real | The number of required approving reviews. |
| RequiredDeploymentsEnforcementLevel | real | The enforcement level for required deployments. |
| RequiredReviewThreadResolutionEnforcementLevel | real | The enforcement level for required review thread resolution. |
| RequiredStatusChecksEnforcementLevel | real | The enforcement level for required status checks. |
| RequireLastPushApproval | bool | Whether approval from someone other than the last pusher is required. |
| rerun_type | dynamic | The GitHub audit event rerun_type property, when supplied. |
| resolution | dynamic | The GitHub audit event resolution property, when supplied. |
| resource_id | dynamic | The GitHub audit event resource_id property, when supplied. |
| resource_type | dynamic | The GitHub audit event resource_type property, when supplied. |
| review_id | dynamic | The GitHub audit event review_id property, when supplied. |
| reviewer | dynamic | The GitHub audit event reviewer property, when supplied. |
| reviewer_id | dynamic | The GitHub audit event reviewer_id property, when supplied. |
| reviewer_type | dynamic | The GitHub audit event reviewer_type property, when supplied. |
| RolePermissions | string | The current role permissions. |
| Route | string | The API route associated with the event. |
| ruleset_bypass_actors_added | dynamic | The GitHub audit event ruleset_bypass_actors_added property, when supplied. |
| ruleset_bypass_actors_deleted | dynamic | The GitHub audit event ruleset_bypass_actors_deleted property, when supplied. |
| ruleset_bypass_actors_updated | dynamic | The GitHub audit event ruleset_bypass_actors_updated property, when supplied. |
| ruleset_conditions_added | dynamic | The GitHub audit event ruleset_conditions_added property, when supplied. |
| ruleset_conditions_deleted | dynamic | The GitHub audit event ruleset_conditions_deleted property, when supplied. |
| ruleset_ids | dynamic | The GitHub audit event ruleset_ids property, when supplied. |
| ruleset_old_enforcement | dynamic | The GitHub audit event ruleset_old_enforcement property, when supplied. |
| ruleset_old_name | dynamic | The GitHub audit event ruleset_old_name property, when supplied. |
| ruleset_rules_added | dynamic | The GitHub audit event ruleset_rules_added property, when supplied. |
| ruleset_rules_updated | dynamic | The GitHub audit event ruleset_rules_updated property, when supplied. |
| RulesetBypassActors | string | The actors that can bypass the ruleset. |
| RulesetConditions | string | The conditions of the ruleset. |
| RulesetConditionsUpdated | string | The updated conditions of the ruleset. |
| RulesetEnforcement | string | The enforcement level of the ruleset. |
| RulesetId | real | The numeric identifier of the ruleset. |
| RulesetName | string | The name of the ruleset. |
| RulesetRules | string | The rules defined in the ruleset. |
| RulesetRulesDeleted | string | The rules deleted from the ruleset. |
| RulesetSourceType | string | The source type of the ruleset, for example organization or repository. |
| RuleSuiteId | real | The numeric identifier of the rule suite evaluation. |
| RunAttempt | real | The attempt number of the workflow run. |
| RunnerGroupAllowPublic | bool | Whether the runner group allows public repositories. |
| RunnerGroupId | real | The numeric identifier of the runner group. |
| RunnerGroupName | string | The name of the runner group. |
| RunnerGroupRestrictedToWorkflows | bool | Whether the runner group is restricted to specific workflows. |
| RunnerGroupSelectedWorkflowRefs | string | The workflow references selected for the runner group. |
| RunnerId | real | The numeric identifier of the runner. |
| RunnerLabels | string | The labels assigned to the runner. |
| RunnerName | string | The name of the runner. |
| RunnerOwnerType | string | The type of the runner owner, for example organization or enterprise. |
| RunNumber | real | The run number of the workflow. |
| scheduled_plan | dynamic | The GitHub audit event scheduled_plan property, when supplied. |
| scim_group_id | dynamic | The GitHub audit event scim_group_id property, when supplied. |
| scim_user_id | dynamic | The GitHub audit event scim_user_id property, when supplied. |
| seat_assignment | dynamic | The GitHub audit event seat_assignment property, when supplied. |
| seats_plan_type | dynamic | The GitHub audit event seats_plan_type property, when supplied. |
| seats_plan_type_was | dynamic | The GitHub audit event seats_plan_type_was property, when supplied. |
| secondary_category | dynamic | The GitHub audit event secondary_category property, when supplied. |
| secret_type | dynamic | The GitHub audit event secret_type property, when supplied. |
| secret_type_display_name | dynamic | The GitHub audit event secret_type_display_name property, when supplied. |
| secret_type_provider | dynamic | The GitHub audit event secret_type_provider property, when supplied. |
| secret_types | dynamic | The GitHub audit event secret_types property, when supplied. |
| secrets_updated | dynamic | The GitHub audit event secrets_updated property, when supplied. |
| SecretsPassed | string | The secrets passed to the workflow or job. |
| SecurityConfigurationCodeScanning | string | The code scanning setting of the security configuration. |
| SecurityConfigurationCodeSecuritySkuEnabled | bool | Whether the code security SKU is enabled in the security configuration. |
| SecurityConfigurationCreatedAt | datetime | The creation date of the security configuration. |
| SecurityConfigurationDependabotAlerts | string | The Dependabot alerts setting of the security configuration. |
| SecurityConfigurationDependabotSecurityUpdates | string | The Dependabot security updates setting of the security configuration. |
| SecurityConfigurationDependencyGraph | string | The dependency graph setting of the security configuration. |
| SecurityConfigurationDependencyGraphAutosubmitAction | string | The dependency graph autosubmit action setting of the security configuration. |
| SecurityConfigurationDescription | string | The description of the security configuration. |
| SecurityConfigurationEnableGhas | bool | Whether GitHub Advanced Security is enabled in the security configuration. |
| SecurityConfigurationId | real | The numeric identifier of the security configuration. |
| SecurityConfigurationName | string | The name of the security configuration. |
| SecurityConfigurationPrivateVulnerabilityReporting | string | The private vulnerability reporting setting of the security configuration. |
| SecurityConfigurationSecretProtectionSkuEnabled | bool | Whether the secret protection SKU is enabled in the security configuration. |
| SecurityConfigurationSecretScanning | string | The secret scanning setting of the security configuration. |
| SecurityConfigurationSecretScanningDelegatedBypass | string | The secret scanning delegated bypass setting of the security configuration. |
| SecurityConfigurationSecretScanningGenericSecrets | string | The secret scanning generic secrets setting of the security configuration. |
| SecurityConfigurationSecretScanningNonProviderPatterns | string | The secret scanning non-provider patterns setting of the security configuration. |
| SecurityConfigurationSecretScanningPushProtection | string | The secret scanning push protection setting of the security configuration. |
| SecurityConfigurationSecretScanningValidityChecks | string | The secret scanning validity checks setting of the security configuration. |
| SecurityConfigurationUpdatedAt | datetime | The last update date of the security configuration. |
| selected_service | dynamic | The GitHub audit event selected_service property, when supplied. |
| server_id | dynamic | The GitHub audit event server_id property, when supplied. |
| server_name | dynamic | The GitHub audit event server_name property, when supplied. |
| SignatureRequirementEnforcementLevel | real | The enforcement level for commit signature requirements. |
| Source | string | The source of the event. |
| source_slug | dynamic | The GitHub audit event source_slug property, when supplied. |
| source_version | dynamic | The GitHub audit event source_version property, when supplied. |
| sponsors_listing_id | dynamic | The GitHub audit event sponsors_listing_id property, when supplied. |
| ssl_verify | dynamic | The GitHub audit event ssl_verify property, when supplied. |
| SsoUrl | string | The single sign-on URL. |
| start | dynamic | The GitHub audit event start property, when supplied. |
| start_date | dynamic | The GitHub audit event start_date property, when supplied. |
| StartedAt | datetime | The time the workflow or job started. |
| state | dynamic | The GitHub audit event state property, when supplied. |
| status | dynamic | The GitHub audit event status property, when supplied. |
| StatusCode | real | The HTTP response status code. |
| StrictRequiredStatusChecksPolicy | bool | Whether strict required status checks policy is enabled. |
| target_version | dynamic | The GitHub audit event target_version property, when supplied. |
| TargetLogin | string | The login of the target user. |
| Team | string | The team associated with the audit log event. |
| team_type | dynamic | The GitHub audit event team_type property, when supplied. |
| ThreatModel | string | The threat model associated with the event. |
| TimeGenerated | datetime |  |
| to_business | dynamic | The GitHub audit event to_business property, when supplied. |
| token_expires_at | dynamic | The GitHub audit event token_expires_at property, when supplied. |
| TokenExpiration | real | The token expiration timestamp. |
| TokenId | real | The numeric identifier of the token. |
| TokenScopes | string | The scopes associated with the token used for authentication. |
| tool | dynamic | The GitHub audit event tool property, when supplied. |
| Topic | string | The topic associated with the event. |
| transfer_from | dynamic | The GitHub audit event transfer_from property, when supplied. |
| transfer_from_id | dynamic | The GitHub audit event transfer_from_id property, when supplied. |
| transfer_from_type | dynamic | The GitHub audit event transfer_from_type property, when supplied. |
| transfer_to | dynamic | The GitHub audit event transfer_to property, when supplied. |
| transfer_to_id | dynamic | The GitHub audit event transfer_to_id property, when supplied. |
| transfer_to_type | dynamic | The GitHub audit event transfer_to_type property, when supplied. |
| TransportProtocol | real | The type of protocol (for example, HTTP or SSH) used to transfer Git data. |
| TransportProtocolName | string | A human readable name for the protocol used to transfer Git data. |
| TriggerId | real | The numeric identifier of the trigger. |
| truncated | bool | The GitHub audit event truncated property, when supplied. |
| TwoFactorMethod | string | The two-factor authentication method used. |
| type_slug | dynamic | The GitHub audit event type_slug property, when supplied. |
| updated_access_policy | dynamic | The GitHub audit event updated_access_policy property, when supplied. |
| updated_github_owned_allowed | dynamic | The GitHub audit event updated_github_owned_allowed property, when supplied. |
| updated_patterns | dynamic | The GitHub audit event updated_patterns property, when supplied. |
| updated_verified_allowed | dynamic | The GitHub audit event updated_verified_allowed property, when supplied. |
| UpdatedAllowedTypes | bool | Whether the allowed types were updated. |
| url | dynamic | The GitHub audit event url property, when supplied. |
| UrlPath | string | The URL path of the HTTP request. |
| User | string | The user that was affected by the action performed. |
| user_content_id | dynamic | The GitHub audit event user_content_id property, when supplied. |
| user_content_type | dynamic | The GitHub audit event user_content_type property, when supplied. |
| user_programmatic_access_id | dynamic | The GitHub audit event user_programmatic_access_id property, when supplied. |
| user_programmatic_access_name | dynamic | The GitHub audit event user_programmatic_access_name property, when supplied. |
| user_programmatic_access_request_id | dynamic | The GitHub audit event user_programmatic_access_request_id property, when supplied. |
| UserAgent | string | The user agent string of the client that initiated the action. |
| UserCanInviteCollaborators | bool | Whether the user has permission to invite collaborators. |
| UserId | real | The numeric identifier of the affected user. |
| users_removed_count | dynamic | The GitHub audit event users_removed_count property, when supplied. |
| uuid | dynamic | The GitHub audit event uuid property, when supplied. |
| value | dynamic | The GitHub audit event value property, when supplied. |
| ValuesEditableBy | string | Who can edit the custom property values. |
| ValueType | string | The data type of the custom property value. |
| version | dynamic | The GitHub audit event version property, when supplied. |
| version_count | dynamic | The GitHub audit event version_count property, when supplied. |
| violations | dynamic | The GitHub audit event violations property, when supplied. |
| Visibility | string | The repository visibility, for example public or private. |
| VulnerabilityAlertRuleActionsAlertActionsAutoDismiss | string | The auto-dismiss setting for vulnerability alert rule actions. |
| VulnerabilityAlertRuleActionsVersion | real | The version of the vulnerability alert rule actions. |
| VulnerabilityAlertRuleConditionsCwe | string | The CWE conditions for the vulnerability alert rule. |
| VulnerabilityAlertRuleConditionsEcosystem | string | The ecosystem conditions for the vulnerability alert rule. |
| VulnerabilityAlertRuleConditionsScope | string | The scope conditions for the vulnerability alert rule. |
| VulnerabilityAlertRuleId | real | The numeric identifier of the vulnerability alert rule. |
| VulnerabilityAlertRuleName | string | The name of the vulnerability alert rule. |
| WorkflowId | real | The numeric identifier of the workflow. |
| WorkflowRunId | real | The numeric identifier of the workflow run. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [GitHub](../solutions/github.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GitHub Enterprise Audit Log (via Azure Storage)](../connectors/githubauditblobconnector.md) |  |
| [[Deprecated] GitHub Enterprise Audit Log](../connectors/githubecauditlogpolling.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (13)

**In solution [GitHub](../solutions/github.md):**

| Analytic Rule | Selection Criteria |
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
| [NRT GitHub Two Factor Auth Disable](../content/github-nrt-github-two-factor-auth-disable-594c653d-719a-4c23-b028-36e3413e632e-4470b247.md) |  |

### Hunting Queries (8)

**In solution [GitHub](../solutions/github.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [GitHub First Time Invite Member and Add Member to Repo](../content/github-github-first-time-invite-member-and-add-member-to-repo-f0d30d3c-e6ad-480a-90e8-1bd7cc84881b-0912ca5c.md) |  |

**GitHub Only:**

| Hunting Query | Selection Criteria |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

