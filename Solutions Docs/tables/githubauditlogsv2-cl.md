# GitHubAuditLogsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (232 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGitHubAuditLogs_CCF/GitHubAuditLogs_Table.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| Active | bool |
| ActiveWas | bool |
| ActivityType | string |
| Actor | string |
| ActorId | real |
| ActorIp | string |
| ActorIsBot | bool |
| AdminEnforced | bool |
| After | string |
| AlertNumbers | string |
| AllowDeletionsEnforcementLevel | real |
| AllowedValues | string |
| AllowForcePushesEnforcementLevel | real |
| ApplicationClientId | string |
| AuditLogStreamId | real |
| AuditLogStreamResult | string |
| AuditLogStreamSink | string |
| AuditLogStreamSinkDetails | string |
| AuthorizedActorNames | string |
| BaseRole | string |
| Before | string |
| BlockedUser | string |
| Branch | string |
| Business | string |
| BusinessId | real |
| CanCreateRepositories | bool |
| CommitId | string |
| CommitOid | string |
| CompletedAt | datetime |
| Conclusion | string |
| Config | string |
| ConfigWas | string |
| ContentType | string |
| CountryCode | string |
| CreatedAt | real |
| CreateProtected | bool |
| CustomPattern | string |
| Data | string |
| DefaultForNewPrivateRepos | bool |
| DefaultForNewPublicRepos | bool |
| DefaultValue | string |
| DefinitionId | real |
| DeployKeyFingerprint | string |
| Description | string |
| DismissalApproverId | real |
| DismissStaleReviewsOnPush | bool |
| DocumentId | string |
| DomainName | string |
| Email | string |
| Emoji | string |
| Enablement | string |
| EnforcementLevel | string |
| EnvironmentName | string |
| Event | string |
| Events | string |
| EventsWere | string |
| ExemptAdministrators | bool |
| Explanation | string |
| ExternalIdentityNameid | string |
| ExternalIdentityUsername | string |
| Fingerprint | string |
| GhsaId | string |
| HashedToken | string |
| HeadBranch | string |
| HeadSha | string |
| HookId | real |
| IgnoreApprovalsFromContributors | bool |
| Integration | string |
| InvitationId | real |
| InviteeEmail | string |
| IpAllowListEntry | string |
| IsHostedRunner | bool |
| Issuer | string |
| IssueTypeName | string |
| JobName | string |
| JobWorkflowRef | string |
| Key | string |
| Limit | real |
| LimitedAvailability | bool |
| LinearHistoryRequirementEnforcementLevel | real |
| LockAllowsFetchAndMerge | bool |
| LockBranchEnforcementLevel | real |
| MembershipType | string |
| MergeQueueEnforcementLevel | real |
| Message | string |
| Name | string |
| NewAccess | string |
| NewPolicy | string |
| NewProjectBaseRole | string |
| NewRepoPermission | string |
| NewRepoRunnersPolicy | string |
| OauthApplication | string |
| OauthApplicationId | real |
| OauthApplicationState | string |
| OauthApplicationUrl | string |
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
| OrganizationRoleId | real |
| OrganizationRoleName | string |
| OrgId | real |
| OverriddenCodes | string |
| Owner | string |
| OwnerType | string |
| Permission | string |
| Policy | string |
| PreviousVisibility | string |
| ProgrammaticAccessType | string |
| ProjectId | real |
| ProjectNumber | real |
| PropertyName | string |
| PublicProject | bool |
| PublicRepo | bool |
| PullRequestId | real |
| PullRequestReviewsEnforcementLevel | real |
| PullRequestTitle | string |
| PullRequestUrl | string |
| QuerySuite | string |
| ReadOnly | bool |
| Reason | string |
| Reasons | string |
| Recipient | string |
| Ref | string |
| Referrer | string |
| Repo | string |
| RepoId | real |
| RepositoriesRemoved | string |
| RepositoriesRemovedNames | string |
| RepositorySecurityConfigurationFailureReason | dynamic |
| RepositorySecurityConfigurationState | dynamic |
| RepositorySelection | string |
| RequestAccessSecurityHeader | string |
| RequestCategory | string |
| RequestId | string |
| RequireCodeOwnerReview | bool |
| Required | bool |
| RequiredApprovingReviewCount | real |
| RequiredDeploymentsEnforcementLevel | real |
| RequiredReviewThreadResolutionEnforcementLevel | real |
| RequiredStatusChecksEnforcementLevel | real |
| RequireLastPushApproval | bool |
| RolePermissions | string |
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
| SignatureRequirementEnforcementLevel | real |
| Source | string |
| SsoUrl | string |
| StartedAt | datetime |
| StrictRequiredStatusChecksPolicy | bool |
| TargetLogin | string |
| Team | string |
| ThreatModel | string |
| TimeGenerated | datetime |
| TokenExpiration | real |
| TokenId | real |
| Topic | string |
| TransportProtocol | real |
| TransportProtocolName | string |
| TriggerId | real |
| TwoFactorMethod | string |
| UpdatedAllowedTypes | bool |
| User | string |
| UserAgent | string |
| UserCanInviteCollaborators | bool |
| UserId | real |
| ValuesEditableBy | string |
| ValueType | string |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

