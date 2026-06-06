# Atlassian Beacon Integration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Logic App recieves a webhook from Atlassian Beacon and ingest the payload into Microsoft Sentinel's log analytics workspace

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Integration%20for%20Atlassian%20Beacon/Playbooks/Sync%20Alerts/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md) 🔶 | ✗ | ✓ | ✗ |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Data | post | `/api/logs` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md)

