# QualysVM-LaunchVMScan-GenerateReport

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Get IP Addresses from incident. 2. Scan IP Addresses with Qualys Scanner. 3. Generate the Scan Report. 4. Download the report and store it to a blob storage. 5. Add the link of report as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [QualysVM](../solutions/qualysvm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Playbooks/QualysVMPlaybooks/QualysVM-LaunchVMScan-GenerateReport/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to QualysVM](../solutions/qualysvm.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
