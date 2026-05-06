# Notify_GovernanceComplianceTeam

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CybersecurityMaturityModelCertification%28CMMC%292.0/Playbooks/Notify_GovernanceComplianceTeam-CMMCV2/Notify_GovernanceComplianceTeam.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `office365` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`office365`** (managedApi):
- *Send_an_email_(V2)_2*: method=`post`, path=`/v2/Mail`

**`teams`** (managedApi):
- *Post_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)

