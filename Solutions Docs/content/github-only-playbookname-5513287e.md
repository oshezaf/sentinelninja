# PlaybookName

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Wayne Lee

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-MDATPVulnerabilities/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `keyvault` | Managed | 1 | 1 |
| `sharepointonline` | Managed | 1 | 3 |
| `wdatp` | Managed | 1 | 1 |
| `wordonlinebusiness` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Alert_-_Get_hosts*: method=`post`, path=`/entities/host`
- *Add_comment_to_incident_(V2)*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(body('Alert_-_Get_incident')?['properties']?['CaseNumber'])}`
- *Alert_-_Get_incident*: method=`get`, path=`/Cases/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent('DefenderATP-VulnAlerts')}/value`

**`sharepointonline`** (managedApi):
- *Create_PDF*: method=`post`, path=`/datasets//files`
- *Create_Word_Doc*: method=`post`, path=`/datasets//files`
- *Create_sharing_link_for_a_file_or_folder*: method=`post`, path=`/datasets//codeless/_api/v2.0/sites/root/lists//items/@{encodeURIComponent(encodeURIComponent(body('Create_PDF')?['ItemId']))}/driveItem/createLink`

**`wdatp`** (managedApi):
- *Machines_-_Get_list_of_machines*: method=`get`, path=`/api/machines`

**`wordonlinebusiness`** (managedApi):
- *Convert_Word_Document_to_PDF*: method=`get`, path=`/api/templates/convertFile`
- *Populate_Vulnerability_Report_template*: method=`post`, path=`/api/templates/getFile`

**`http`** (builtin):
- *HTTP*: method=`GET`, uri=`https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host')?['id']}/vulnerabilities`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

