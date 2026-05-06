# Identity Protection response from Teams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Run this playbook on incidents which contains suspiciouse AAD identities. For each account, this playbook posts an adaptive card in the SOC Microsoft Teams channel, including the potential risky user information given by Azure AD Identity Protection. The card offers to confirm the user as compromised or dismiss the compromised user in AADIP. It also allows to configure the Azure Sentinel incident. A summary comment will be posted to document the action taken and user information. [Learn more abo

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/IdentityProtection-TeamsBotResponse/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureadip`](../logic-apps/managed-azureadip.md) | Managed | 1 | 5 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 5 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureadip`](../logic-apps/managed-azureadip.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_risky_user | get | `/beta/riskyUsers/@{encodeURIComponent(items('For_each')?['AadUserId'])}` | — |
| Confirm_a_risky_user_as_compromised | post | `/beta/riskyUsers/confirmCompromised` | — |
| Get_risky_user_2 | get | `/beta/riskyUsers/@{encodeURIComponent(items('For_each')?['AadUserId'])}` | — |
| Dismiss_a_risky_user | post | `/beta/riskyUsers/dismiss` | — |
| Get_risky_user_3 | get | `/beta/riskyUsers/@{encodeURIComponent(items('For_each')?['AadUserId'])}` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Update_incident_2 | put | `/Incidents` | — |
| Update_incident | put | `/Incidents` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

