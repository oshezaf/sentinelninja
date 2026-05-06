# RFI-Playbook-Alert-Importer-LAW-Sentinel (DEPRECATED)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

DEPRECATED: This playbook creates incidents via the Azure Microsoft Sentinel Logic Apps connector, which do not appear in the unified Microsoft Defender portal. Use RFI-Playbook-Alert-Importer-LAW instead and create incidents using a Scheduled Analytics Rule. This playbook fetches identity compromises from Recorded Future, places users in a security group and confirms them as 'risky users' in Entra ID.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/RFI-Playbook-Alert-Importer-LAW-Sentinel/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 2 |
| `azureadip` | Managed | 1 | 1 |
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 2 |
| `RFI-CustomConnector-0-2-0` | Custom | 1 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Add_risky_user_to_Active_Directory_security_group_for_users_at_risk*: method=`post`, path=`/v1.0/groups/@{encodeURIComponent(parameters('entra_id_security_group_id'))}/members/$ref`
- *Get_User_-_Check_if_the_user_exists_in_Active_Directory*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(outputs('Compute_user_principal_name'))}`

**`azureadip`** (managedApi):
- *Confirm_a_risky_user_as_compromised*: method=`post`, path=`/beta/riskyUsers/confirmCompromised`

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_Data_-_Save_Playbook_alert_to_LogAnalytics_Custom_Log*: method=`post`, path=`/api/logs`

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Create_incident*: method=`put`, path=`[concat('/Incidents/subscriptions/', subscription().subscriptionId,'/resourceGroups/',resourceGroup().name,'/workspaces/',parameters('sentinel_workspace_name') ) ]`

**`RFI-CustomConnector-0-2-0`** (customApi):
- *Playbook_Alerts_-_Detailed_Identity_Novel_Exposures_alert_data*: method=`get`, path=`/playbook-alerts/@{encodeURIComponent(item()?['alert_id'])}`
- *Playbook_Alerts_-_Update_Playbook_Alert_-_Incident_created*: method=`put`, path=`/playbook-alerts/update`
- *Playbook_Alerts_-_Update_Playbook_Alert-_If_user_found*: method=`put`, path=`/playbook-alerts/update`
- *Playbook_Alerts_-_Update_Playbook_Alert_-_If_user_not_found*: method=`put`, path=`/playbook-alerts/update`
- *Playbook_Alerts_-_Search_for_novel_identity_exposures*: method=`post`, path=`/playbook-alerts/search`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future Identity](../solutions/recorded-future-identity.md)

