# GitHubAuditLogsV2_CL

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

## Schema (481 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGitHubAuditLogs_CCF/GitHubAuditLogs_Table.json)

| Column Name | Type |
|:------------|:-----|
| access_level | dynamic |
| Action | string |
| actions_cache_id | dynamic |
| actions_cache_key | dynamic |
| actions_cache_scope | dynamic |
| actions_cache_version | dynamic |
| Active | bool |
| ActiveWas | bool |
| ActivityType | string |
| Actor | string |
| ActorId | real |
| ActorIp | string |
| ActorIsAgent | bool |
| ActorIsBot | bool |
| ActorLocation | dynamic |
| AdditionalFields | dynamic |
| AdminEnforced | bool |
| After | string |
| AgentSessionId | string |
| alert_enabled | dynamic |
| alert_id | dynamic |
| alert_number | dynamic |
| alert_recipient_user_ids | dynamic |
| AlertNumbers | string |
| AllowDeletionsEnforcementLevel | real |
| allowed | dynamic |
| AllowedValues | string |
| AllowForcePushesEnforcementLevel | real |
| allowlist_description | dynamic |
| allowlist_id | dynamic |
| allowlist_name | dynamic |
| api_request_body | dynamic |
| application_id | dynamic |
| application_name | dynamic |
| application_type | dynamic |
| ApplicationClientId | string |
| approvers | dynamic |
| approvers_was | dynamic |
| assignment_type | dynamic |
| audit_log_stream_enabled | dynamic |
| AuditLogStreamId | real |
| AuditLogStreamResult | string |
| AuditLogStreamSink | string |
| AuditLogStreamSinkDetails | string |
| authorized_actors | dynamic |
| authorized_actors_only | dynamic |
| AuthorizedActorNames | string |
| BaseRole | string |
| Before | string |
| block_local_servers | dynamic |
| BlockedUser | string |
| Branch | string |
| Business | string |
| BusinessId | real |
| calling_workflow_refs | dynamic |
| calling_workflow_shas | dynamic |
| can_admins_bypass | dynamic |
| cancelled_at | dynamic |
| CanCreateRepositories | bool |
| category | dynamic |
| check_response_timeout_minutes | dynamic |
| check_run_id | dynamic |
| cname | dynamic |
| collaborator | dynamic |
| collaborator_type | dynamic |
| color | dynamic |
| comment | dynamic |
| comment_id | dynamic |
| CommitId | string |
| CommitOid | string |
| CompletedAt | datetime |
| compliant_pull_request_ids | dynamic |
| Conclusion | string |
| Config | string |
| ConfigWas | string |
| ContentType | string |
| context | dynamic |
| count | dynamic |
| CountryCode | string |
| CreatedAt | real |
| CreateProtected | bool |
| current_plan | dynamic |
| current_validity | dynamic |
| current_value | dynamic |
| custom_instructions | dynamic |
| custom_pattern_name | dynamic |
| custom_pattern_scope | dynamic |
| CustomPattern | string |
| Data | string |
| default_branch | dynamic |
| DefaultForNewPrivateRepos | bool |
| DefaultForNewPublicRepos | bool |
| DefaultValue | string |
| DefinitionId | real |
| deleted_at | dynamic |
| deleted_by | dynamic |
| deleted_by_id | dynamic |
| deleted_content | dynamic |
| DeployKeyFingerprint | string |
| Description | string |
| devcontainer_path | dynamic |
| dismiss_comment | dynamic |
| dismiss_reason | dynamic |
| dismissal_request_id | dynamic |
| DismissalApproverId | real |
| DismissStaleReviewsOnPush | bool |
| DocumentId | string |
| domain | dynamic |
| DomainName | string |
| ecosystem | dynamic |
| editor | dynamic |
| editor_id | dynamic |
| Email | string |
| Emoji | string |
| enabled | dynamic |
| Enablement | string |
| end | dynamic |
| end_date | dynamic |
| enforcement | dynamic |
| EnforcementLevel | string |
| enterprise_role_id | dynamic |
| enterprise_role_name | dynamic |
| enterprise_team | dynamic |
| enterprise_team_id | dynamic |
| entries | dynamic |
| environment_id | dynamic |
| EnvironmentName | string |
| Event | string |
| event_name | dynamic |
| Events | string |
| EventsWere | string |
| excluded_paths | dynamic |
| ExemptAdministrators | bool |
| Explanation | string |
| external_group | dynamic |
| external_group_id | dynamic |
| external_id | dynamic |
| ExternalIdentityNameid | string |
| ExternalIdentityUsername | string |
| failover_network_enabled | dynamic |
| failover_network_settings_ids | dynamic |
| filename | dynamic |
| Fingerprint | string |
| from_business | dynamic |
| GhsaId | string |
| HashedToken | string |
| HeadBranch | string |
| HeadSha | string |
| HookId | real |
| IgnoreApprovalsFromContributors | bool |
| imposer_repo | dynamic |
| initiated_from | dynamic |
| Integration | string |
| integration_installation_id | dynamic |
| InvitationId | real |
| invitee | dynamic |
| InviteeEmail | string |
| inviter | dynamic |
| IpAllowListEntry | string |
| is_republished | dynamic |
| IsHostedRunner | bool |
| Issuer | string |
| IssueTypeName | string |
| JobName | string |
| JobWorkflowRef | string |
| Key | string |
| languages | dynamic |
| Limit | real |
| LimitedAvailability | bool |
| LinearHistoryRequirementEnforcementLevel | real |
| LockAllowsFetchAndMerge | bool |
| LockBranchEnforcementLevel | real |
| machine_type | dynamic |
| managed_hashed_token | dynamic |
| managed_oauth_access_id | dynamic |
| managed_oauth_scopes | dynamic |
| managed_token_id | dynamic |
| managed_token_scopes | dynamic |
| manager | dynamic |
| marketplace_listing | dynamic |
| max_entries_to_build | dynamic |
| max_entries_to_merge | dynamic |
| mcp_policy | dynamic |
| MembershipType | string |
| merge_method | dynamic |
| MergeQueueEnforcementLevel | real |
| merging_strategy | dynamic |
| Message | string |
| min_entries_to_merge | dynamic |
| min_entries_to_merge_wait_minutes | dynamic |
| multi_repo | dynamic |
| Name | string |
| name_was | dynamic |
| network_configuration_id | dynamic |
| network_settings_ids | dynamic |
| new_branch | dynamic |
| new_config | dynamic |
| new_emu_repo_runners_policy | dynamic |
| new_nwo | dynamic |
| new_repo_base_role | dynamic |
| new_value | dynamic |
| NewAccess | string |
| NewPolicy | string |
| NewProjectBaseRole | string |
| NewRepoPermission | string |
| NewRepoRunnersPolicy | string |
| number | dynamic |
| oauth_credential_type | dynamic |
| OauthApplication | string |
| OauthApplicationId | real |
| OauthApplicationName | string |
| OauthApplicationState | string |
| OauthApplicationUrl | string |
| old_alert_enabled | dynamic |
| old_allowed_values | dynamic |
| old_allowlist_name | dynamic |
| old_base_role | dynamic |
| old_block_local_servers | dynamic |
| old_branch | dynamic |
| old_cname | dynamic |
| old_color | dynamic |
| old_emu_repo_runners_policy | dynamic |
| old_login | dynamic |
| old_mcp_policy | dynamic |
| old_message | dynamic |
| old_name | dynamic |
| old_plan | dynamic |
| old_policy | dynamic |
| old_project_role | dynamic |
| old_repo_base_role | dynamic |
| old_settings | dynamic |
| old_value | dynamic |
| old_value_type | dynamic |
| OldAccess | string |
| OldDefaultValue | string |
| OldDescription | string |
| OldEnabled | bool |
| OldIssueTypeName | string |
| OldPermission | string |
| OldProjectBaseRole | string |
| OldRepoPermission | string |
| OldRepoRunnersPolicy | string |
| OldRequired | bool |
| OldRolePermissions | string |
| OldTokenExpiration | real |
| OldUser | string |
| OldValuesEditableBy | string |
| OpensshPublicKey | string |
| OperationType | string |
| Org | string |
| organization_names | dynamic |
| organization_upgrade | dynamic |
| OrganizationRoleId | real |
| OrganizationRoleName | string |
| OrgId | real |
| origin_repository | dynamic |
| OverriddenCodes | string |
| Owner | string |
| owner_id | dynamic |
| OwnerType | string |
| package | dynamic |
| patreon_email | dynamic |
| patreon_username | dynamic |
| Permission | string |
| plan | dynamic |
| Policy | string |
| prevent_self_review | dynamic |
| previous_settings_ids | dynamic |
| previous_validity | dynamic |
| previous_value | dynamic |
| PreviousVisibility | string |
| primary_category | dynamic |
| ProgrammaticAccessType | string |
| project_kind | dynamic |
| project_name | dynamic |
| project_role | dynamic |
| ProjectId | real |
| ProjectNumber | real |
| PropertyName | string |
| public_repo | bool |
| publicly_leaked | dynamic |
| PublicProject | bool |
| PublicRepo | bool |
| PullRequestId | real |
| PullRequestReviewsEnforcementLevel | real |
| PullRequestTitle | string |
| PullRequestUrl | string |
| push_protection_bypass_reason | dynamic |
| push_protection_setting | dynamic |
| query | dynamic |
| query_phrase | dynamic |
| QueryString | string |
| QuerySuite | string |
| ReadOnly | bool |
| Reason | string |
| Reasons | string |
| Recipient | string |
| Ref | string |
| Referrer | string |
| remove_existing_unaffiliated_users | dynamic |
| Repo | string |
| repo_was | dynamic |
| RepoId | real |
| report_result | dynamic |
| repositories | dynamic |
| repositories_added | dynamic |
| repositories_added_names | dynamic |
| RepositoriesRemoved | string |
| RepositoriesRemovedNames | string |
| Repository | string |
| RepositoryId | real |
| RepositoryPublic | bool |
| RepositorySecurityConfigurationFailureReason | dynamic |
| RepositorySecurityConfigurationState | dynamic |
| RepositorySelection | string |
| request_reviewer | dynamic |
| request_reviewer_comment | dynamic |
| request_reviewer_id | dynamic |
| RequestAccessSecurityHeader | string |
| RequestCategory | string |
| requested_at | dynamic |
| requester | dynamic |
| requester_id | dynamic |
| RequestId | string |
| RequestMethod | string |
| RequireCodeOwnerReview | bool |
| Required | bool |
| RequiredApprovingReviewCount | real |
| RequiredDeploymentsEnforcementLevel | real |
| RequiredReviewThreadResolutionEnforcementLevel | real |
| RequiredStatusChecksEnforcementLevel | real |
| RequireLastPushApproval | bool |
| rerun_type | dynamic |
| resolution | dynamic |
| resource_id | dynamic |
| resource_type | dynamic |
| review_id | dynamic |
| reviewer | dynamic |
| reviewer_id | dynamic |
| reviewer_type | dynamic |
| RolePermissions | string |
| Route | string |
| ruleset_bypass_actors_added | dynamic |
| ruleset_bypass_actors_deleted | dynamic |
| ruleset_bypass_actors_updated | dynamic |
| ruleset_conditions_added | dynamic |
| ruleset_conditions_deleted | dynamic |
| ruleset_ids | dynamic |
| ruleset_old_enforcement | dynamic |
| ruleset_old_name | dynamic |
| ruleset_rules_added | dynamic |
| ruleset_rules_updated | dynamic |
| RulesetBypassActors | string |
| RulesetConditions | string |
| RulesetConditionsUpdated | string |
| RulesetEnforcement | string |
| RulesetId | real |
| RulesetName | string |
| RulesetRules | string |
| RulesetRulesDeleted | string |
| RulesetSourceType | string |
| RuleSuiteId | real |
| RunAttempt | real |
| RunnerGroupAllowPublic | bool |
| RunnerGroupId | real |
| RunnerGroupName | string |
| RunnerGroupRestrictedToWorkflows | bool |
| RunnerGroupSelectedWorkflowRefs | string |
| RunnerId | real |
| RunnerLabels | string |
| RunnerName | string |
| RunnerOwnerType | string |
| RunNumber | real |
| scheduled_plan | dynamic |
| scim_group_id | dynamic |
| scim_user_id | dynamic |
| seat_assignment | dynamic |
| seats_plan_type | dynamic |
| seats_plan_type_was | dynamic |
| secondary_category | dynamic |
| secret_type | dynamic |
| secret_type_display_name | dynamic |
| secret_type_provider | dynamic |
| secret_types | dynamic |
| secrets_updated | dynamic |
| SecretsPassed | string |
| SecurityConfigurationCodeScanning | string |
| SecurityConfigurationCodeSecuritySkuEnabled | bool |
| SecurityConfigurationCreatedAt | datetime |
| SecurityConfigurationDependabotAlerts | string |
| SecurityConfigurationDependabotSecurityUpdates | string |
| SecurityConfigurationDependencyGraph | string |
| SecurityConfigurationDependencyGraphAutosubmitAction | string |
| SecurityConfigurationDescription | string |
| SecurityConfigurationEnableGhas | bool |
| SecurityConfigurationId | real |
| SecurityConfigurationName | string |
| SecurityConfigurationPrivateVulnerabilityReporting | string |
| SecurityConfigurationSecretProtectionSkuEnabled | bool |
| SecurityConfigurationSecretScanning | string |
| SecurityConfigurationSecretScanningDelegatedBypass | string |
| SecurityConfigurationSecretScanningGenericSecrets | string |
| SecurityConfigurationSecretScanningNonProviderPatterns | string |
| SecurityConfigurationSecretScanningPushProtection | string |
| SecurityConfigurationSecretScanningValidityChecks | string |
| SecurityConfigurationUpdatedAt | datetime |
| selected_service | dynamic |
| server_id | dynamic |
| server_name | dynamic |
| SignatureRequirementEnforcementLevel | real |
| Source | string |
| source_slug | dynamic |
| source_version | dynamic |
| sponsors_listing_id | dynamic |
| ssl_verify | dynamic |
| SsoUrl | string |
| start | dynamic |
| start_date | dynamic |
| StartedAt | datetime |
| state | dynamic |
| status | dynamic |
| StatusCode | real |
| StrictRequiredStatusChecksPolicy | bool |
| target_version | dynamic |
| TargetLogin | string |
| Team | string |
| team_type | dynamic |
| ThreatModel | string |
| TimeGenerated | datetime |
| to_business | dynamic |
| token_expires_at | dynamic |
| TokenExpiration | real |
| TokenId | real |
| TokenScopes | string |
| tool | dynamic |
| Topic | string |
| transfer_from | dynamic |
| transfer_from_id | dynamic |
| transfer_from_type | dynamic |
| transfer_to | dynamic |
| transfer_to_id | dynamic |
| transfer_to_type | dynamic |
| TransportProtocol | real |
| TransportProtocolName | string |
| TriggerId | real |
| TwoFactorMethod | string |
| type_slug | dynamic |
| updated_access_policy | dynamic |
| updated_github_owned_allowed | dynamic |
| updated_patterns | dynamic |
| updated_verified_allowed | dynamic |
| UpdatedAllowedTypes | bool |
| url | dynamic |
| UrlPath | string |
| User | string |
| user_content_id | dynamic |
| user_content_type | dynamic |
| user_programmatic_access_id | dynamic |
| user_programmatic_access_name | dynamic |
| user_programmatic_access_request_id | dynamic |
| UserAgent | string |
| UserCanInviteCollaborators | bool |
| UserId | real |
| users_removed_count | dynamic |
| uuid | dynamic |
| value | dynamic |
| ValuesEditableBy | string |
| ValueType | string |
| version | dynamic |
| version_count | dynamic |
| violations | dynamic |
| Visibility | string |
| VulnerabilityAlertRuleActionsAlertActionsAutoDismiss | string |
| VulnerabilityAlertRuleActionsVersion | real |
| VulnerabilityAlertRuleConditionsCwe | string |
| VulnerabilityAlertRuleConditionsEcosystem | string |
| VulnerabilityAlertRuleConditionsScope | string |
| VulnerabilityAlertRuleId | real |
| VulnerabilityAlertRuleName | string |
| WorkflowId | real |
| WorkflowRunId | real |

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
| [GitHub Enterprise Audit Log (via Codeless Connector Framework)](../connectors/githubauditdefinitionv2.md) |  |
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

