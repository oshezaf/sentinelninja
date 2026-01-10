# RecordedFuture-Alert-Importer

This playbook imports alerts from Recorded Future and stores them in a custom log in the log analytics workspace. It can create alerts dependant on the parameter: create_incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Alerts/RecordedFuture-Alert-Importer/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`RecordedFuturePortalAlerts_CL`](../tables/recordedfutureportalalerts-cl.md) | read/write |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Recorded Future](../solutions/recorded-future.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

