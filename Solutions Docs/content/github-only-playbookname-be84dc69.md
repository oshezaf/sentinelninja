# PlaybookName

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Kloudynet Technologies

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-MachineData-EDR-SOAR-ActionsOnMachine/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`sharepointonline`](../logic-apps/managed-sharepointonline.md) | Managed | 1 | 7 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_hosts | post | `/entities/host` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_client_app_secret | get | `/secrets/@{encodeURIComponent('ClientAppSecret')}/value` | — |

#### [`sharepointonline`](../logic-apps/managed-sharepointonline.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_new_subfolder_under_Documents_to_store_all_csv_files | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/tables/@{encodeURIComponent(encodeURIComponent('6a2a8bfc-17b5-42e8-8c34-47865fc48b1d'))}/createnewfolder` | — |
| Create_sharing_link_for_the_subfolder_which_contains_all_csv_files | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/codeless/_api/v2.0/sites/root/lists/@{encodeURIComponent(encodeURIComponent('6a2a8bfc-17b5-42e8-8c34-47865fc48b1d'))}/items/@{encodeURIComponent(encodeURIComponent(body('Create_new_subfolder_under_Documents_to_store_all_csv_files')?['ID']))}/driveItem/createLink` | — |
| Create_missing_KBs_csv_file | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files` | — |
| Create_installed_software_csv_file | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files` | — |
| Create_alerts_csv_file | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files` | — |
| Create_recommendation_csv_file | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files` | — |
| Create_vulnerabilities_csv_file | post | `/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_a_message_on_Teams | post | `/v3/beta/teams/@{encodeURIComponent('f6c7b5f5-8377-4dff-ae43-83b441df6372')}/channels/@{encodeURIComponent('19:cc0d142530d74b97b4019b85a882cb22@thread.tacv2')}/messages` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Machines_-_Get_list_of_machines | get | `/api/machines` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_to_get_missing_KBs | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_get_missing_KBs')?['id']}/getmissingkbs` | — |
| HTTP_-_get_software_inventory | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_get_software_inventory')?['id']}/software` | — |
| HTTP_-_to_restrict_restrict_app_exection | POST | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_restrict_app_execution')?['id']}/restrictCodeExecution` | — |
| HTTP_-_to_start_machine_antivirus_scan | POST | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_start_antivirus_scan')?['id']}/runAntiVirusScan` | — |
| HTTP_-_To_get_alerts | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_alerts')?['id']}/alerts` | — |
| HTTP_-_To_get_recommendations | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_recommendation')?['id']}/recommendations` | — |
| HTTP_-_to_get_vulnerabilities | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_vulnerabilities')?['id']}/vulnerabilities` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

