# Run MDE Antivirus - Incident Triggered

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will run a antivirus (full) scan on the machine in Microsoft Defender for Endpoint. It is triggered by an incident creation in Microsoft Sentinel. The playbook will look for the host entities in the incident and run a scan on the machine in MDE. If the host is not found in MDE, it will add a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Playbooks/Run-MDEAntivirus/Run-MDEAntivirus-incident-trigger/azuredeploy.json) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Playbooks](playbooks.md) · [Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)

