# Export IP Entity to TISC

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages the ServiceNow TISC API to export IP indicators found in Microsoft Sentinel incidents to TISC Workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ServiceNow TISC](../solutions/servicenow-tisc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC/Playbooks/ExportToTISC/ServiceNowTISC-Export_IP_Entity/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`ServiceNowTISCCustomConnector`](../logic-apps/custom-servicenowtisccustomconnector.md) | Custom | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`ServiceNowTISCCustomConnector`](../logic-apps/custom-servicenowtisccustomconnector.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_Observables_TISC_API_-_IPv6 | post | `/api/sn_sec_tisc/threat_intel_data/add_observables` | — |
| Add_Observables_TISC_API_-_IPv4 | post | `/api/sn_sec_tisc/threat_intel_data/add_observables` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ServiceNow TISC](../solutions/servicenow-tisc.md)

