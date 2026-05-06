# Run MDE Antivirus - Incident Triggered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will run a antivirus (full) scan on the machine in Microsoft Defender for Endpoint. It is triggered by an incident creation in Microsoft Sentinel. The playbook will look for the host entities in the incident and run a scan on the machine in MDE. If the host is not found in MDE, it will add a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Playbooks/Run-MDEAntivirus/Run-MDEAntivirus-incident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `wdatp` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_1*: method=`post`, path=`/Incidents/Comment`

**`wdatp`** (managedApi):
- *Machines_-_Get_list_of_machines*: method=`get`, path=`/api/machines`
- *Actions_-_Run_antivirus_scan*: method=`post`, path=`/api/machines/@{encodeURIComponent(variables('MDEDeviceId'))}/runAntiVirusScan`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)

