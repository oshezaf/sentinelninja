# ServiceNow TISC Import Observables from TISC

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages the ServiceNow TISC API to import IP, Domain, URL, and Hash observables from TISC Workspace to Microsoft ThreatIntelligenceIndicator log analytics table. The imported observables can be seen under the Threat Intelligence tab in Microsoft Sentinel Workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ServiceNow TISC](../solutions/servicenow-tisc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC/Playbooks/ImportFromTISC/ServiceNowTISC-Import_Observables_Batch/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `ServiceNowTISCCustomConnector` | Custom | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`ServiceNowTISCCustomConnector`** (customApi):
- *Import_Observables_in_Indicator_STIX_format_TISC_API*: method=`post`, path=`/api/sn_sec_tisc/threat_intel_data/observables_indicator_stix_format`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ServiceNow TISC](../solutions/servicenow-tisc.md)

