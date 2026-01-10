# Atlassian Beacon Integration

This Logic App recieves a webhook from Atlassian Beacon and ingest the payload into Microsoft Sentinel's log analytics workspace

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Integration%20for%20Atlassian%20Beacon/Playbooks/Sync%20Alerts/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md) | write |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

