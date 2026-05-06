# IncidentUpdate-GetSentinelAlertsEvidence

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will run on a time schedule base (every hour) and it will check for any incident that was updated (in the last hour) in your Sentinel workspace by Sentinel Alerts. <br> It will then automatically attach the new alert evidence from the updated Azure Sentinel incident (from the last hour) and send the evidence to an Event Hub that can be consumed by a 3rd party SIEM solution.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/IncidentUpdate%20-Get-SentinelAlertsEvidence/IncidentUpdate-GetSentinelAlertsEvidence.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ | ? |
| [`SecurityIncident`](../tables/securityincident.md) | ✓ | ✗ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [DerdackSIGNL4](../connectors/derdacksignl4.md) | [SIGNL4](../solutions/signl4.md) |

**Solutions:** [SIGNL4](../solutions/signl4.md)

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitor` | Managed | 0 | 2 |
| `azuremonitorlogs` | Managed | 1 | 0 |
| `eventhub` | Managed | 0 | 2 |
| `eventhubs` | Managed | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitor`** (managedApi):
- *Run_query_and_list_results_(get_events_from_scheduled_rule)*: method=`post`, path=`/queryData`
- *Run_query_and_list_results_(get_alerts_added_to_incidents)*: method=`post`, path=`/queryData`

**`eventhub`** (managedApi):
- *Send_event_(send_information_with_events_to_eventhub)*: method=`post`, path=`/@{encodeURIComponent('incidentalerteventhub')}/events`
- *Send_event_(send_information_of_alert_and_incident_to_eventhub)*: method=`post`, path=`/@{encodeURIComponent('incidentalerteventhub')}/events`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

