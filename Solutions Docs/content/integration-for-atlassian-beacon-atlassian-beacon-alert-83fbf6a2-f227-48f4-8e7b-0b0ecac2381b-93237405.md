# Atlassian Beacon Alert

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

The analytic rule creates an incident when an alert is created in Atlassian Beacon. The incident's events contains values such as alert name, alert url, actor name, actor details, worskpace id of the atlassian beacon, etc. Navigate to the alertDetailURL to view more information on recommendations and remediations.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md) |
| **ID** | `83fbf6a2-f227-48f4-8e7b-0b0ecac2381b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [AtlassianBeaconAlerts](../connectors/atlassianbeaconalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Integration%20for%20Atlassian%20Beacon/Analytic%20Rules/AtlassianBeacon_High.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md)

