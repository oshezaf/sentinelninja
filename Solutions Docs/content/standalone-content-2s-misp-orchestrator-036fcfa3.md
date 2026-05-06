# 2S-MISP-Orchestrator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook is designed to ingest Threat Intelligence Indicators of Compromise (IOCs) from the MISP-Forwarder Playbooks and send it in the correct form to your MISP-server. It will create a new MISP event for each incident in Defender, and add information to that event.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/2S-Sentinel2MISP/MISP-Orchestrator/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Add_IoC_to_existing_event_MISP_-_FileHash*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Add_IoC_to_existing_event_MISP_-_FileName*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Add_attribute_-_IncidentID_internal_only*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Add_attribute_-_IncidentUri_link_internal_only*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Add_event_tag_MISP_-_tlp_green*: method=`POST`, uri=`@{variables('MISPURI')}/events/addTag/@{variables('EventId')}/10789`
- *Add_IoC_to_new_event_MISP_-_FileHash*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Add_IoC_to_new_event_MISP_-_FileName*: method=`POST`, uri=`@{variables('MISPURI')}/attributes/add/@{variables('EventId')}`
- *Create_new_event_MISP*: method=`POST`, uri=`@{variables('MISPURI')}/events/add/`
- *Get_EventInfo_MISP*: method=`POST`, uri=`@{variables('MISPURI')}/events/restSearch`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

