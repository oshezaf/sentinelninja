# Create-IBMResilientIncident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create an IBM Resilient incident from an Azure Sentinel incident. It will also add the Azure Sentinel Incident Entities as IBM Resilient Incident Artifacts.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Create-IBMResilientIncident/incident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `Resilient-Incidents` | Custom | 1 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`Resilient-Incidents`** (customApi):
- *create_IncidentArtifact*: method=`post`, path=`/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts`
- *create_IncidentArtifact_2*: method=`post`, path=`/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts`
- *create_IncidentArtifact_3*: method=`post`, path=`/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts`
- *create_IncidentArtifact_4*: method=`post`, path=`/incidents/@{encodeURIComponent(body('create_incident')?['id'])}/artifacts`
- *create_incident*: method=`post`, path=`/incidents`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

