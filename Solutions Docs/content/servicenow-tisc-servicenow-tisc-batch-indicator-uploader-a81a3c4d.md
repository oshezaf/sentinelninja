# ServiceNow TISC Batch Indicator Uploader

This playbook will write indicators in batch to ThreatIntelligenceIndicator log analytics table. This playbook referenced by **ServiceNowTISC-Import_Observables_Batch** playbook -- which calls the ServiceNow TISC API to get observables and then calls this playbook to write them to ThreatIntelligenceIndicator table.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ServiceNow TISC](../solutions/servicenow-tisc.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNow%20TISC/Playbooks/ImportFromTISC/ServiceNowTISC-Batch_Indicator_Uploader/azuredeploy.json) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ServiceNow TISC](../solutions/servicenow-tisc.md)

