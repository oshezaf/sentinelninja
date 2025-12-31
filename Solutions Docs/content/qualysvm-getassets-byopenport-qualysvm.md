# QualysVM-GetAssets-ByOpenPort

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets Port from incident. (Only one port) 2. Search the Qualys platform and get the asset count with open port. 3. Search the Qualys platform and get the asset details as well. (Asset details limited to 50 assets, since incident comment has limitaion of 30000 characters.) 4. Combine both the results. 5. Add the info as comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [QualysVM](../solutions/qualysvm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Playbooks/QualysVMPlaybooks/QualysVM-GetAssets-ByOpenPort/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to QualysVM](../solutions/qualysvm.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
