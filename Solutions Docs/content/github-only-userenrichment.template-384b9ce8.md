# UserEnrichment.template

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Sebastien Molendijk - Microsoft

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-AlertEntitiesEnrichment/UserEnrichment.template.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 16 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Get_user_details*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Parse_trigger')?['userPrincipalName']}`
- *Get_user_manager*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Parse_trigger')?['userPrincipalName']}/manager`
- *Get_user_MFA-SSPR_status*: method=`GET`, uri=`https://graph.microsoft.com/beta/reports/credentialUserRegistrationDetails?$filter=userPrincipalName  eq '@{body('Get_user_details')?['userPrincipalName']}'`
- *Get_user_AAD_risk_status*: method=`GET`, uri=`https://graph.microsoft.com/beta/riskyUsers/@{body('Parse_user_details')?['id']}/`
- *Get_user_signins*: method=`GET`, uri=`https://graph.microsoft.com/beta/auditLogs/signIns?$filter=@{outputs('Compose_filter')}`
- *Get_user_owned_devices*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Get_user_details')?['userPrincipalName']}/ownedDevices`
- *Advanced_Hunting*: method=`POST`, uri=`https://api.securitycenter.windows.com/api/advancedqueries/run`
- *Check_group_membership*: method=`POST`, uri=`https://graph.microsoft.com/beta/users/@{body('Get_user_details')?['userPrincipalName']}/checkMemberGroups`
- *Get_role_details*: method=`GET`, uri=`https://graph.microsoft.com/beta/roleManagement/directory/roleDefinitions/@{items('Foreach_role')?['roleDefinitionId']}`
- *Get_user_admin_roles*: method=`GET`, uri=`https://graph.microsoft.com/beta/roleManagement/directory/roleAssignments?$filter=principalId eq '@{body('Parse_user_details')?['id']}'`
- *Get_inbox_folder*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Get_user_details')?['userPrincipalName']}/mailFolders/@{items('For_each_inbox_rule')?['actions']?['moveToFolder']}`
- *Get_user_OOF*: method=`POST`, uri=`https://graph.microsoft.com/beta/users/@{body('Get_user_details')?['userPrincipalName']}/getMailTips`
- *Get_user_inbox_rules*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Get_user_details')?['userPrincipalName']}/mailFolders/inbox/messageRules`
- *Get_user_password_reset_activities*: method=`GET`, uri=`https://graph.microsoft.com/beta/reports/userCredentialUsageDetails?$filter=userPrincipalName  eq '@{body('Get_user_details')?['userPrincipalName']}'`
- *Get_user_locations_habits*: method=`GET`, uri=`@{parameters('mcas-tenantUrl')}/cas/api/v1/activities_locations/by_user/?username=@{variables('userMcasId')}/`
- *Get_mcas_user_profile*: method=`GET`, uri=`@{parameters('mcas-tenantUrl')}/cas/api/v1/entities/@{variables('userMcasId')}/`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

