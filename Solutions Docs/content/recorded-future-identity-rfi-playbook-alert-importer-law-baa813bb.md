# RFI-Playbook-Alert-Importer-LAW

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook fetches identity compromises from Recorded Future, places users in a security group and confirms them as 'risky users' in Entra ID.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/RFI-Playbook-Alert-Importer-LAW/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuread`](../logic-apps/managed-azuread.md) | Managed | 1 | 2 |
| [`azureadip`](../logic-apps/managed-azureadip.md) | Managed | 1 | 1 |
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 2 |
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 1 |
| [`RFI-CustomConnector-0-2-0`](../logic-apps/custom-rfi-customconnector-0-2-0.md) | Custom | 1 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuread`](../logic-apps/managed-azuread.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_risky_user_to_Active_Directory_security_group_for_users_at_risk | post | `/v1.0/groups/@{encodeURIComponent(parameters('entra_id_security_group_id'))}/members/$ref` | — |
| Get_User_-_Check_if_the_user_exists_in_Active_Directory | get | `/v1.0/users/@{encodeURIComponent(outputs('Compute_user_principal_name'))}` | — |

#### [`azureadip`](../logic-apps/managed-azureadip.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Confirm_a_risky_user_as_compromised | post | `/beta/riskyUsers/confirmCompromised` | — |

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data_-_Save_Playbook_alert_to_LogAnalytics_Custom_Log | post | `/api/logs` | — |
| Create_table_if_missing | post | `/api/logs` | — |

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Check_if_table_exists | post | `/queryDataV2` | — |

#### [`RFI-CustomConnector-0-2-0`](../logic-apps/custom-rfi-customconnector-0-2-0.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Playbook_Alerts_-_Detailed_Identity_Novel_Exposures_alert_data | get | `/playbook-alerts/@{encodeURIComponent(item()?['alert_id'])}` | — |
| Playbook_Alerts_-_Update_Playbook_Alert_-_Saved_to_LAW | put | `/playbook-alerts/update` | — |
| Playbook_Alerts_-_Update_Playbook_Alert-_If_user_found | put | `/playbook-alerts/update` | — |
| Playbook_Alerts_-_Update_Playbook_Alert_-_If_user_not_found | put | `/playbook-alerts/update` | — |
| Playbook_Alerts_-_Search_for_novel_identity_exposures | post | `/playbook-alerts/search` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future Identity](../solutions/recorded-future-identity.md)

