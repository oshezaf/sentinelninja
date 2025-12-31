# Relate alerts to incident by IP

This playbook looks for other alerts with the same IP as the triggered incident. When such an alert is found, this playbook will add the alert to the incident (only if it isn't related to another incident).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/relateAlertsToIncident-basedOnIP/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SecurityAlert`](../tables/securityalert.md) | read |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
