# Export Hash Entity to TISC

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages the ServiceNow TISC API to export Hash indicators found in Microsoft Sentinel incidents to TISC Workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ServiceNow TISC](../solutions/servicenow-tisc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC/Playbooks/ExportToTISC/ServiceNowTISC-Export_Hash_Entity/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `ServiceNowTISCCustomConnector` | Custom | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`ServiceNowTISCCustomConnector`** (customApi):
- *Add_Observables_TISC_API_-_MD5*: method=`post`, path=`/api/sn_sec_tisc/threat_intel_data/add_observables`
- *Add_Observables_TISC_API_-_SHA256*: method=`post`, path=`/api/sn_sec_tisc/threat_intel_data/add_observables`
- *Add_Observables_TISC_API_-_SHA1*: method=`post`, path=`/api/sn_sec_tisc/threat_intel_data/add_observables`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ServiceNow TISC](../solutions/servicenow-tisc.md)

