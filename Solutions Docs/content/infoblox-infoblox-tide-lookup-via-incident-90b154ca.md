# Infoblox-TIDE-Lookup-Via-Incident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook takes entity type and value from incident available in Workbook and ingests TIDE Lookup data for that entity into Log table.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Based/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) | Managed | 0 | 4 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel_1`](../logic-apps/managed-azuresentinel-1.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_FileHashes_From_Entities | post | `/entities/filehash` | — |
| Get_Hosts_From_Entities | post | `/entities/host` | — |
| Get_IPs_From_Entities | post | `/entities/ip` | — |
| Get_URLs_From_Entities | post | `/entities/url` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Infoblox_TIDE_Lookup_For_Hash | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/','Infoblox-TIDE-Lookup')]`<br>triggerName=`manual` |
| Infoblox_TIDE_Lookup_For_Host | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/','Infoblox-TIDE-Lookup')]`<br>triggerName=`manual` |
| Infoblox_TIDE_Lookup_For_IP | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/','Infoblox-TIDE-Lookup')]`<br>triggerName=`manual` |
| Infoblox_TIDE_Lookup_For_URL | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/','Infoblox-TIDE-Lookup')]`<br>triggerName=`manual` |

</details>

## Additional Documentation

> 📄 *Source: [Infoblox TIDE Lookup Incident Based/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Based/readme.md)*

# Infoblox TIDE Lookup Via Incident

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook takes entity type and value from incident available in Workbook and ingests TIDE Lookup data for that entity into Log table.

### Prerequisites<a name="Prerequisites"></a>

1. Make sure that Infoblox-TIDE-Lookup playbook is deployed before deploying Infoblox-TIDE-Lookup-Via-Incident playbook.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here 

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Based%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Based%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident which has Entities Mapping.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

