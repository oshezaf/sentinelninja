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
| `azuresentinel` | Managed | 1 | 1 |
| `keyvault` | Managed | 1 | 1 |
| `sharepointonline` | Managed | 1 | 7 |
| `teams` | Managed | 1 | 1 |
| `wdatp` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Alert_-_Get_hosts*: method=`post`, path=`/entities/host`

**`keyvault`** (managedApi):
- *Get_client_app_secret*: method=`get`, path=`/secrets/@{encodeURIComponent('ClientAppSecret')}/value`

**`sharepointonline`** (managedApi):
- *Create_new_subfolder_under_Documents_to_store_all_csv_files*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/tables/@{encodeURIComponent(encodeURIComponent('6a2a8bfc-17b5-42e8-8c34-47865fc48b1d'))}/createnewfolder`
- *Create_sharing_link_for_the_subfolder_which_contains_all_csv_files*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/codeless/_api/v2.0/sites/root/lists/@{encodeURIComponent(encodeURIComponent('6a2a8bfc-17b5-42e8-8c34-47865fc48b1d'))}/items/@{encodeURIComponent(encodeURIComponent(body('Create_new_subfolder_under_Documents_to_store_all_csv_files')?['ID']))}/driveItem/createLink`
- *Create_missing_KBs_csv_file*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files`
- *Create_installed_software_csv_file*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files`
- *Create_alerts_csv_file*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files`
- *Create_recommendation_csv_file*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files`
- *Create_vulnerabilities_csv_file*: method=`post`, path=`/datasets/@{encodeURIComponent(encodeURIComponent(''))}/files`

**`teams`** (managedApi):
- *Post_a_message_on_Teams*: method=`post`, path=`/v3/beta/teams/@{encodeURIComponent('f6c7b5f5-8377-4dff-ae43-83b441df6372')}/channels/@{encodeURIComponent('19:cc0d142530d74b97b4019b85a882cb22@thread.tacv2')}/messages`

**`wdatp`** (managedApi):
- *Machines_-_Get_list_of_machines*: method=`get`, path=`/api/machines`

**`http`** (builtin):
- *HTTP_-_to_get_missing_KBs*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_get_missing_KBs')?['id']}/getmissingkbs`
- *HTTP_-_get_software_inventory*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_get_software_inventory')?['id']}/software`
- *HTTP_-_to_restrict_restrict_app_exection*: method=`POST`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_restrict_app_execution')?['id']}/restrictCodeExecution`
- *HTTP_-_to_start_machine_antivirus_scan*: method=`POST`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_-_start_antivirus_scan')?['id']}/runAntiVirusScan`
- *HTTP_-_To_get_alerts*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_alerts')?['id']}/alerts`
- *HTTP_-_To_get_recommendations*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_recommendation')?['id']}/recommendations`
- *HTTP_-_to_get_vulnerabilities*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host_-_get_vulnerabilities')?['id']}/vulnerabilities`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

