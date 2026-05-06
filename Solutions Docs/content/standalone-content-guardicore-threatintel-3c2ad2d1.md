# Guardicore-ThreatIntel

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Accelerynt

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Guardicore-ThreatIntel/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `microsoftgraphsecurity` | Managed | 1 | 5 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftgraphsecurity`** (managedApi):
- *Create_tiIndicator_2*: method=`post`, path=`/beta/security/tiIndicators`
- *Create_tiIndicator*: method=`post`, path=`/beta/security/tiIndicators`
- *Create_Threat_Indicator_for_C2_IP*: method=`post`, path=`/beta/security/tiIndicators`
- *Create_Threat_Indicator_for_Scanner*: method=`post`, path=`/beta/security/tiIndicators`
- *Create_Threat_Indicator_for_Attacker*: method=`post`, path=`/beta/security/tiIndicators`

**`http`** (builtin):
- *HTTP-_Get_GC_Data*: method=`GET`, uri=`https://threatintelligence.guardicore.com/downloads/latest.json`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

