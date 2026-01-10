# Veeam-PerformInstantVMRecovery

This Microsoft Sentinel playbook performs instant VM recovery on the vm specified by MachineDisplayName custom field of Microsoft Sentinel's incident custom fields. The playbook automatically finds the latest clean restore point, initiates the instant recovery monitor for its state and indicates results as incident comments.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-PerformInstantVMRecovery/PerformInstantVMRecovery.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Veeam](../solutions/veeam.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

