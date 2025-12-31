# QualysVM-GetAssets-ByCVEID

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Get CVE IDs from incident. 2. Create a Dynamic Search List with CVE IDs as filter criteria. 3. Generate the Vulnerability Report based on Dynamic Search List. 4. Download the report and store it to a blob storage. This report has details about assets which are vulnerable to CVE. 5. Add the link of report as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [QualysVM](../solutions/qualysvm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Playbooks/QualysVMPlaybooks/QualysVM-GetAssets-ByCVEID/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to QualysVM](../solutions/qualysvm.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
