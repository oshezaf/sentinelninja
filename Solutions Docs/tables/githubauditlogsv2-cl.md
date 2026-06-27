# GitHubAuditLogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (232 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGitHubAuditLogs_AzStorage/table_GitHubAuditLogsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | The name of the action that was performed, for example user.login or repo.create. |
| Active | bool | Whether the resource is currently active. |
| ActiveWas | bool | Whether the resource was previously active. |
| ActivityType | string | The type of activity that was performed. |
| Actor | string | The actor who performed the action. |
| ActorId | real | The numeric identifier of the actor who performed the action. |
| ActorIp | string | The IP address of the actor who performed the action. |
| ActorIsBot | bool | Whether the actor is a bot account. |
| AdminEnforced | bool | Whether the branch protection rule is enforced for administrators. |
| After | string | The state after the change. |
| AlertNumbers | string | The alert numbers associated with the event. |
| AllowDeletionsEnforcementLevel | real | The enforcement level for allowing branch deletions. |
| AllowedValues | string | The allowed values for a custom property. |
| AllowForcePushesEnforcementLevel | real | The enforcement level for allowing force pushes. |
| ApplicationClientId | string | The client ID of the application. |
| AuditLogStreamId | real | The numeric identifier of the audit log stream. |
| AuditLogStreamResult | string | The result of the audit log stream operation. |
| AuditLogStreamSink | string | The sink type of the audit log stream. |
| AuditLogStreamSinkDetails | string | The details of the audit log stream sink. |
| AuthorizedActorNames | string | The names of actors authorized to bypass branch protection. |
| BaseRole | string | The base role for the organization or repository. |
| Before | string | The state before the change. |
| BlockedUser | string | The username of the account being blocked. |
| Branch | string | The branch associated with the event. |
| Business | string | The name of the GitHub Enterprise business. |
| BusinessId | real | The numeric identifier of the GitHub Enterprise business. |
| CanCreateRepositories | bool | Whether the user has permission to create repositories. |
| CommitId | string | The commit identifier associated with the event. |
| CommitOid | string | The commit object identifier (OID). |
| CompletedAt | datetime | The time the workflow or job completed. |
| Conclusion | string | The conclusion status of the workflow run, for example success or failure. |
| Config | string | The current configuration associated with the event, serialized as a JSON string. |
| ConfigWas | string | The previous configuration before the change, serialized as a JSON string. |
| ContentType | string | The content type of the resource. |
| CountryCode | string | The country code from the actor's location. |
| CreatedAt | real | The time the audit log event was recorded, given as a Unix timestamp in milliseconds. |
| CreateProtected | bool | Whether branch creation is protected. |
| CustomPattern | string | The custom secret scanning pattern. |
| Data | string | Additional data associated with the event, serialized as a JSON string. |
| DefaultForNewPrivateRepos | bool | Whether the configuration is the default for new private repositories. |
| DefaultForNewPublicRepos | bool | Whether the configuration is the default for new public repositories. |
| DefaultValue | string | The default value for a custom property. |
| DefinitionId | real | The numeric identifier of the custom property definition. |
| DeployKeyFingerprint | string | The fingerprint of the deploy key. |
| Description | string | The description of the resource or event. |
| DismissalApproverId | real | The numeric identifier of the user who approved the dismissal. |
| DismissStaleReviewsOnPush | bool | Whether stale pull request reviews are dismissed on new pushes. |
| DocumentId | string | A unique identifier for the audit event. |
| DomainName | string | The domain name associated with the event. |
| Email | string | The email address associated with the event. |
| Emoji | string | The emoji associated with the event. |
| Enablement | string | The enablement state of a feature or configuration. |
| EnforcementLevel | string | The enforcement level of the protection rule. |
| EnvironmentName | string | The name of the deployment environment. |
| Event | string | The event that triggered the workflow. |
| Events | string | The current events configuration, serialized as a JSON string. |
| EventsWere | string | The previous events configuration before the change, serialized as a JSON string. |
| ExemptAdministrators | bool | Whether administrators are exempt from the rule. |
| Explanation | string | An explanation or additional context for the event. |
| ExternalIdentityNameid | string | The NameID of the external identity. |
| ExternalIdentityUsername | string | The username of the external identity. |
| Fingerprint | string | The fingerprint of the key or certificate. |
| GhsaId | string | The GitHub Security Advisory identifier. |
| HashedToken | string | The hashed token used for authentication. |
| HeadBranch | string | The head branch of the workflow run. |
| HeadSha | string | The HEAD SHA of the commit that triggered the workflow. |
| HookId | real | The numeric identifier of the webhook. |
| IgnoreApprovalsFromContributors | bool | Whether approvals from contributors are ignored. |
| Integration | string | The integration associated with the event. |
| InvitationId | real | The numeric identifier of the invitation. |
| InviteeEmail | string | The email address of the person invited. |
| IpAllowListEntry | string | The IP allow list entry. |
| IsHostedRunner | bool | Whether the runner is a GitHub-hosted runner. |
| Issuer | string | The issuer of the SSO or SAML identity. |
| IssueTypeName | string | The name of the issue type. |
| JobName | string | The name of the workflow job. |
| JobWorkflowRef | string | The reference to the reusable workflow used by the job. |
| Key | string | The key associated with the event. |
| Limit | real | The limit value associated with the event. |
| LimitedAvailability | bool | Whether the feature has limited availability. |
| LinearHistoryRequirementEnforcementLevel | real | The enforcement level for requiring linear commit history. |
| LockAllowsFetchAndMerge | bool | Whether locked branches allow fetch and merge. |
| LockBranchEnforcementLevel | real | The enforcement level for branch locking. |
| MembershipType | string | The type of membership, for example admin or member. |
| MergeQueueEnforcementLevel | real | The enforcement level for merge queue. |
| Message | string | A message associated with the event. |
| Name | string | The name of the resource associated with the event. |
| NewAccess | string | The new access level after the change. |
| NewPolicy | string | The new policy after the change. |
| NewProjectBaseRole | string | The new base role for the project. |
| NewRepoPermission | string | The new repository permission after the change. |
| NewRepoRunnersPolicy | string | The new repository runners policy after the change. |
| OauthApplication | string | The name of the OAuth application involved in the event. |
| OauthApplicationId | real | The numeric identifier of the OAuth application. |
| OauthApplicationState | string | The state of the OAuth application. |
| OauthApplicationUrl | string | The URL of the OAuth application. |
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
| OrganizationRoleId | real | The numeric identifier of the organization role. |
| OrganizationRoleName | string | The name of the organization role. |
| OrgId | real | The numeric identifier of the GitHub organization. |
| OverriddenCodes | string | The codes that were overridden. |
| Owner | string | The owner of the resource. |
| OwnerType | string | The type of the owner, for example user or organization. |
| Permission | string | The permission level granted or associated with the action. |
| Policy | string | The policy associated with the event. |
| PreviousVisibility | string | The previous repository visibility before the change. |
| ProgrammaticAccessType | string | The type of programmatic access used. |
| ProjectId | real | The numeric identifier of the project. |
| ProjectNumber | real | The project number. |
| PropertyName | string | The name of the custom property. |
| PublicProject | bool | Whether the project is public. |
| PublicRepo | bool | Whether the repository is public. |
| PullRequestId | real | The numeric identifier of the pull request. |
| PullRequestReviewsEnforcementLevel | real | The enforcement level for pull request reviews. |
| PullRequestTitle | string | The title of the pull request. |
| PullRequestUrl | string | The URL of the pull request. |
| QuerySuite | string | The code scanning query suite. |
| ReadOnly | bool | Whether the resource is read-only. |
| Reason | string | The reason for the action or event. |
| Reasons | string | The reasons for the action or decision. |
| Recipient | string | The recipient of the action. |
| Ref | string | The Git reference associated with the event. |
| Referrer | string | The referrer URL or source. |
| Repo | string | The name of the repository associated with the event. |
| RepoId | real | The numeric identifier of the repository. |
| RepositoriesRemoved | string | The repositories removed from the integration or configuration. |
| RepositoriesRemovedNames | string | The names of repositories that were removed. |
| RepositorySecurityConfigurationFailureReason | dynamic | The reason a repository security configuration failed to apply. |
| RepositorySecurityConfigurationState | dynamic | The state of the repository security configuration. |
| RepositorySelection | string | The repository selection mode, for example all or selected. |
| RequestAccessSecurityHeader | string | The security header of the access request. |
| RequestCategory | string | The category of the request. |
| RequestId | string | The unique identifier of the request. |
| RequireCodeOwnerReview | bool | Whether code owner review is required. |
| Required | bool | Whether the custom property is required. |
| RequiredApprovingReviewCount | real | The number of required approving reviews. |
| RequiredDeploymentsEnforcementLevel | real | The enforcement level for required deployments. |
| RequiredReviewThreadResolutionEnforcementLevel | real | The enforcement level for required review thread resolution. |
| RequiredStatusChecksEnforcementLevel | real | The enforcement level for required status checks. |
| RequireLastPushApproval | bool | Whether approval from someone other than the last pusher is required. |
| RolePermissions | string | The current role permissions. |
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
| SignatureRequirementEnforcementLevel | real | The enforcement level for commit signature requirements. |
| Source | string | The source of the event. |
| SsoUrl | string | The single sign-on URL. |
| StartedAt | datetime | The time the workflow or job started. |
| StrictRequiredStatusChecksPolicy | bool | Whether strict required status checks policy is enabled. |
| TargetLogin | string | The login of the target user. |
| Team | string | The team associated with the audit log event. |
| ThreatModel | string | The threat model associated with the event. |
| TimeGenerated | datetime |  |
| TokenExpiration | real | The token expiration timestamp. |
| TokenId | real | The numeric identifier of the token. |
| Topic | string | The topic associated with the event. |
| TransportProtocol | real | The type of protocol (for example, HTTP or SSH) used to transfer Git data. |
| TransportProtocolName | string | A human readable name for the protocol used to transfer Git data. |
| TriggerId | real | The numeric identifier of the trigger. |
| TwoFactorMethod | string | The two-factor authentication method used. |
| UpdatedAllowedTypes | bool | Whether the allowed types were updated. |
| User | string | The user that was affected by the action performed. |
| UserAgent | string | The user agent string of the client that initiated the action. |
| UserCanInviteCollaborators | bool | Whether the user has permission to invite collaborators. |
| UserId | real | The numeric identifier of the affected user. |
| ValuesEditableBy | string | Who can edit the custom property values. |
| ValueType | string | The data type of the custom property value. |
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

## Connectors (3)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GitHub Enterprise Audit Log (via Azure Storage)](../connectors/githubauditblobconnector.md) |  |
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

