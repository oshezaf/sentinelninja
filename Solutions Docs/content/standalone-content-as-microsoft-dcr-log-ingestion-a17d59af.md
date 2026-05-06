# AS-Microsoft-DCR-Log-Ingestion

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Microsoft-DCR-Log-Ingestion/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `keyvault` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 10 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_Sending_App_Registration_Client_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('SendingAppRegistrationKeyVaultSecretName'), ''')}/value')]`
- *Get_Receiving_App_Registration_Client_Secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('ReceivingAppRegistrationKeyVaultSecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Send_Data_to_Office_Activity_Logs_Data_Collection_Endpoint*: method=`POST`, uri=`[concat(parameters('OfficeActivityIngestionURL'), '/dataCollectionRules/', parameters('OfficeActivtyImmutableId'), '/streams/', parameters('OfficeActivtyDataSource'), '?api-version=2023-01-01')]`
- *HTTP_-_Get_O365_Content*: method=`GET`, uri=`@{items('For_Each_-_O365_Audit_Logs')?['contentUri']}`
- *HTTP_-_Send_Data_to_Entra_Audit_Log_Data_Collection_Endpoint*: method=`POST`, uri=`[concat(parameters('EntraAuditLogsIngestionURL'), '/dataCollectionRules/', parameters('EntraAuditLogsImmutableId'), '/streams/', parameters('EntraAuditLogsDataSource'), '?api-version=2023-01-01')]`
- *HTTP_-_Send_Data_to_SignInLog_Data_Collection_Endpoint*: method=`POST`, uri=`[concat(parameters('EntraSignInLogsIngestionURL'), '/dataCollectionRules/', parameters('EntraSignInLogsImmutableId'), '/streams/', parameters('EntraSignInLogsDataSource'), '?api-version=2023-01-01')]`
- *HTTP-_Authenticate_to_Entra_AuditLogs_Data_Collection_Endpoint*: method=`POST`, uri=`[concat('https://login.microsoftonline.com/', subscription().tenantId, '/oauth2/v2.0/token')]`
- *HTTP_-_Authenticate_to_OfficeActivityLogs_Data_Collection_Endpoint*: method=`POST`, uri=`[concat('https://login.microsoftonline.com/', subscription().tenantId, '/oauth2/v2.0/token')]`
- *HTTP_-_Authenticate_to_SignInLogs_Data_Collection_Endpoint*: method=`POST`, uri=`[concat('https://login.microsoftonline.com/', subscription().tenantId, '/oauth2/v2.0/token')]`
- *HTTP_-_Get_Entra_Audit_Logs*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/auditLogs/directoryAudits?$filter=activityDateTime ge @{addMinutes(variables('UTCNow'), -5)}`
- *HTTP_-_Get_Entra_SignIn_Logs*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/auditLogs/signIns?$filter=createdDateTime ge @{addMinutes(variables('UTCNow'), -5)}`
- *HTTP_-_Get_O365_Audit_General_Logs*: method=`GET`, uri=`[concat('https://manage.office.com/api/v1.0/', parameters('SendingTenantSubscriptionID'),'/activity/feed/subscriptions/content?contentType=Audit.AzureActiveDirectory&PublisherIdentifier=Microsoft?&startTime=@{addMinutes(variables(''UTCNow''), -5)}&endTime=@{variables(''UTCNow'')}')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

