# AS-Recurring-Host-Entity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run from a Microsoft Sentinel Incident. It will take the Hosts from the Incident entities list and search the Microsoft Sentinel SecurityAlert logs for other entities containing the same Hosts. A comment noting the Alerts the Hosts appear in, and their occurrence count, will be added to the Incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Playbooks/Playbooks/AS-Recurring-Host-Entity/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SecurityAlert`](../tables/securityalert.md) | read |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Standalone Content](../solutions/standalone-content.md)

