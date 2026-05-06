# ConnectorHealthApp

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This enhanced solution builds on the existing “Connector Health Workbook” described in this video: [https://www.youtube.com/watch?v=T6Vyo7gZYds] .The Logic App leverages underlying queries to provide you with an option to configure “Push notifications” to e-mail or a Microsoft Teams channel based on user defined anomaly scores as well as time since the last “Heartbeat” from Virtual Machines connected to the workspace. Below is a detailed description of how the rule and the logic app are put toge

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Send-ConnectorHealthStatus/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `office365` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Heartbeat_Query*: method=`post`, path=`/visualizeQuery`
- *Ingestion_Anomaly_Query*: method=`post`, path=`/visualizeQuery`

**`office365`** (managedApi):
- *Send_an_email_to_the_SOC_Team*: method=`post`, path=`/v2/Mail`

**`teams`** (managedApi):
- *Post_a_message_as_the_Flow_bot_to_a_channel*: method=`post`, path=`/flowbot/actions/notification/recipienttypes/channel`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

