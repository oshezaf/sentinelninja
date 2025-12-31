# Create Indicator - OpenCTI

This playbook adds new indicator in OpenCTI based on the entities info present in Sentinel incident. This playbook search in OpenCTI for indicatoes based on the entities (Account, Host, IP, FileHash, URL) present in Microsoft Sentinel incident. If it presnts in OpenCTI, information will be added to incident comment otherwise it creates new indicator in OpenCTI

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [OpenCTI](../solutions/opencti.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI/Playbooks/OpenCTIPlaybooks/OpenCTI-CreateIndicator/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to OpenCTI](../solutions/opencti.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
