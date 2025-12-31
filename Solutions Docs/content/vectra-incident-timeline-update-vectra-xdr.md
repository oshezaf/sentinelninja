# Vectra Incident Timeline Update

This playbook will update the incident timeline by keeping most recent alerts and adding most recent detections and defender alerts from entities timeline to the incident timeline.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraIncidentTimelineUpdate/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SecurityAlert`](../tables/securityalert.md) | read |
| [`SecurityIncident`](../tables/securityincident.md) | read |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Vectra XDR](../solutions/vectra-xdr.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
