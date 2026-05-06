# PlaybookName

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 3 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`sharepointonline`](../logic-apps/managed-sharepointonline.md) | Managed | 1 | 3 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 1 |
| [`wordonlinebusiness`](../logic-apps/managed-wordonlinebusiness.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Alert_-_Get_hosts | post | `/entities/host` | — |
| Add_comment_to_incident_(V2) | put | `/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(body('Alert_-_Get_incident')?['properties']?['CaseNumber'])}` | — |
| Alert_-_Get_incident | get | `/Cases/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `/secrets/@{encodeURIComponent('DefenderATP-VulnAlerts')}/value` | — |

#### [`sharepointonline`](../logic-apps/managed-sharepointonline.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Create_PDF | post | `/datasets//files` | — |
| Create_Word_Doc | post | `/datasets//files` | — |
| Create_sharing_link_for_a_file_or_folder | post | `/datasets//codeless/_api/v2.0/sites/root/lists//items/@{encodeURIComponent(encodeURIComponent(body('Create_PDF')?['ItemId']))}/driveItem/createLink` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Machines_-_Get_list_of_machines | get | `/api/machines` | — |

#### [`wordonlinebusiness`](../logic-apps/managed-wordonlinebusiness.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Convert_Word_Document_to_PDF | get | `/api/templates/convertFile` | — |
| Populate_Vulnerability_Report_template | post | `/api/templates/getFile` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP | GET | `https://api.securitycenter.windows.com/api/machines/@{items('For_each_MDATP_host')?['id']}/vulnerabilities` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

